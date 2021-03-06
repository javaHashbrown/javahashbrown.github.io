---
title: '一次App内页的bug溯源'
date: '2019-09-02'
---

### 写在前面

上一篇博客中提到的业务，这次引发了另一个bug

### 背景信息

上一次的H5页面上线有段时间了，客户端同学终于赶上了进度，把页面用到了App里更多的地方。

这次bug的主角是2个页面，一个列表页（以下简称L），一个详情页（以下简称D）。L由内嵌webview为容器，作为App一级页面tabView中的一个tab；点击L打开覆盖全屏的webview，展示D。很常见的一种App导航配置。

需要说明一点，这次的2个页面都有CSRF校验。正是这个CSRF校验，诱发了后续的一系列bug。

### BUG排查过程

1. 无意发现bug

   iOS开发哥们反馈L和D在iPad上有bug，聊着聊着突然发现，页面从L到D，随便点击D内一个按钮再返回，L里所有功能按钮点击统统报错。

   按钮的请求都有CSRF校验，当时很自然想到了应该是CSRF校验失败，否则很难解释这么大面积的功能失灵。

   **结论：CSRF校验失败？**

2. CSRF校验失败

   抓包看了请求的返回数据，也麻烦搭档查了日志，确认是校验失败引起的bug。

   **结论：确认CSRF校验失败**

3. 只有iOS出现bug

   于是交给了搭档排查后台。我也不想闲着，试了试Android的页面，并没有像iOS一样出现bug。

   原因一目了然，Android 返回的时候，会重新请求页面，而iOS使用缓存，不会请求。

   到这步再一次确认了就是CSRF的问题，并且是因为页面跳转引起了CSRF token变化，而iOS仍然使用缓存的旧页面（token保存在页面meta字端内，即请求还是用旧token），所以无法通过校验以致报错。

   **结论：页面切换导致CSRF token改变，iOS使用缓存所以无法通过校验**

4. 跨webview跳转bug

   之前L页在另一个App三级入口，点击后在同一个webview内部跳转D页，再次返回L功能正常。而这次的bug出现在2个webview之间。初步看是因为跨webview有些信息没有传递过去，所以导致了CSRF token变化。

   **结论：跨webview切换缺失数据，导致token变化**

5. 试图手动共享token失败

   搭档的排查没有发现原因，但给了一条信息：token会存一个对应的key在cookie里，如果后台渲染页面时发现cookie中有这个key，就不会刷新token。

   当时也没细想，觉得既然如此，那么跳转页面的时候把key写入local storage，D页面加载时再取出并写入cookie就可以了。居然丝毫没发现这个做法逻辑上的漏洞。

   很自然的，失败了。

   抓包数据发现不论怎么写，D页面加载时cookie里都没有这个key。再一想，在回写cookie的时候页面都已经加载，怎么会有效果...更不要说只从L页写local storage，这个key在以后被D页取出的时候很可能存在过期的情况，毕竟D页自身可以刷新，还可能从其他页面跳转过来，并非只有L->D一种路径。

   要想生效，那么必须在D页请求之前，cookie中就有这个key。这个目标只能靠客户端实现了。

   死路一条，放弃。

   **结论：web端手段受限，cookie只能被共享给D页，否则页面总会发起一次新请求刷新token**

6. 共享cookie带来的矛盾

   抓包继续看，发现D页加载时cookie里没有key，随后请求接口时cookie里key出现了，说明key是页面加载时新请求到的。这个key和L页的不一样。但是从D返回L时，二者的key相同了。说明某个时候，D修改了L的cookie，或者更进一步假设，D修改了cookie，因为cookie二者共享，所以L的cookie也变化了。

   但马上就可以发现一个新的矛盾：

   - 矛盾1：既然共享cookie，为什么D加载时没有key？

   - 矛盾2：如果不共享cookie，为什么其他字段都一样，而且D的key变化后能同步给L？

   假设不共享，那么谁改动了cookie？是web后台还是客户端？什么时候改动的？

   考虑L页的iOS缓存，正常情况下web后台唯一写cookie的时机是在D页加载时，因为此时D页cookie中没有key这个字段。再次返回L页因为缓存缘故，并没有任何网络请求，没有改变cookie的机会。那么只能是客户端有动作了。

   但这个假设又有挥之不去的另一个矛盾，全过程中除了key之外的字段都是一样的，没理由通过代码全部手工写入。那么这又如何解释呢？感觉好迷。

   **结论：cookie共享？不共享？**

7. chrome再现bug场景，发现webview有问题

   客户端调试手段受限，还是本能希望在浏览器上做调试。

   组内大佬提醒，chrome隐身模式不共享cookie的。那么普通模式打开一个L页面，隐身模式打开一个D页面，用来模拟cookie不共享的状态。

   很奇怪的事情出现了，隐身模式和普通模式页面都能正常的工作，彼此并不影响。于是根据这个结果，可以排除cookie不共享的假设，只剩下cookie共享一种可能了。于是我把D的cookie内容全部复制到了L页，再次点击L页按钮，bug复现了。然后为了找到真正的原因，缩小覆盖的范围。

   最后发现，只要key被覆盖，L页的请求就会失效，并且提示信息和之前App上的一模一样。

   带着这个信息找搭档，他看了后台源代码后告诉我：CSRF校验过程中，后台有一个token池，cookie中的key能检索出对应的token。当页面请求携带的token跟检索出的token一致，就能通过校验。

   根本原因找到了：cookie肯定是共享的。但是由于某种原因，客户端在新开webview时没有把key传递过去，于是新webview请求了新的CSRF token-key键值对；又因为cookie共享，新key写入cookie，覆盖了旧key，于是使用缓存的iOS页面就拿着新key+旧token发起请求，自然无法通过验证。

   **结论：只能是客户端webview的问题**

8. 确认bug根源

   把以上信息反馈给客户端开发哥们，他们开始了排查。

   最后发现是一个历史遗留逻辑没有清理，新开webview时会先清空一次cookie，cookie同步机制不定时从NSCookieStorage取cookie，但不会同步key这个字段（当然即使同步了，因为存在不可控延迟，按照现有的了解，页面还是会重新请求token。这样经过同步，L和D总有一个页面会拿到新key+旧token，也就还是会出bug。只有保持cookie一直共享，才不会让后台返回新的key-token键值对）。于是就有了上面的bug。

   移除这个逻辑，保持cookie共享，问题就消除了。

   

   **排查总耗时：断断续续花了2天半**

   

### 总结

复盘下这个bug。

首先，有内部沟通的问题。产品客户端规划这个页面的时候，没有和web端讨论，否则这个问题可能规划的时候就暴露出来了。其次，这种有安全验证写请求的web页面，似乎不太适合作为App内的一级页面，还是纯读请求的页面感觉更合适，至少风险会小些。最后，自己对web安全验证这一块的机制还是了解不够，早一点知道到key-token这种验证机制，排查出bug的时间应该会少很多。

进阶路漫漫，继续学习