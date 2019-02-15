---
title: '[译]写给恐龙的现代Javascript指南'
date: 2018-12-08
---

写在前面：这是一篇译文，是原作者系列文章的第一篇，第二篇主题是 CSS , 第三篇是 HTML。

> 作者：[Peter Jang](https://medium.com/@peterxjang?source=post_header_lockup)  
> 原文名：[Modern JavaScript Explained For Dinosaurs](https://medium.com/the-node-js-collection/modern-javascript-explained-for-dinosaurs-f695e9747b70)  
> 原文于 2017 年 10 月 19 日发表于 medium

- [写给恐龙的现代 JavaScript 指南](#写给恐龙的现代-javascript-指南)
  - [传统 JavaScript 方式](#传统-javascript-方式)
  - [使用 JavaScript 包管理器（npm）](#使用-javascript-包管理器npm)
  - [使用 JavaScript 模块打包工具(webpack)](#使用-javascript-模块打包工具webpack)
  - [转换代码以支持新语言特性（babel）](#转换代码以支持新语言特性babel)
  - [使用任务管理工具（npm scripts）](#使用任务管理工具npm-scripts)
  - [结语](#结语)

### 写给恐龙的现代 JavaScript 指南

![](https://cdn-images-1.medium.com/max/992/1*H8PH-HaV43gZyBJz0mJHxA.png)
Images from [Dinosaur Comics](http://www.qwantz.com/) by [Ryan North](https://twitter.com/ryanqnorth)

如果没有一直关注的话，学习现代 JavaScript 并非易事。它的语言生态发展和变化太快，甚至让人难以理解不同工具期望解决的问题。我从 1998 年就开始编程了，但直到 2014 年才开始认真学习 JavaScript。我还记得当时偶然看到[Browserify](http://browserify.org/)，它的标语是

> "Browserify 负责打包所有依赖，实现在浏览器中引入各种模块"

我完全不懂这句话什么意思，还在拼命想这东西对开发者有什么用。

本文会介绍 JavaScript 发展的历史背景，说明 JavaScript 工具是怎样发展到 2017 年现在这种状态的。我们会从头开始，只用 HTML 和 JavaScript 开发一个示例网站。然后逐步引入各种不同工具，逐个说明每个工具试图解决的问题。当了解历史轨迹之后，你会更好的学习并适应未来不断变化的 JavaScript 生态。开始吧！

#### 传统 JavaScript 方式

我们先从只含 HTML 和 JavaScript 的传统网站开始，它需要手动下载和链接文件。下面是一个链接到 JS 文件的简单的`index.html`文件：

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>JavaScript Example</title>
    <script src="index.js"></script>
  </head>
  <body>
    <h1>Hello from HTML!</h1>
  </body>
</html>
```

`<script src="index.js"></script>`这一行引用了同文件夹内的另一个 JavaScript 文件，名为`index.js`。

```javascript
// index.js
console.log('Hello from JavaScript!');
```

这就是一个网站了！现在假设你想导入别人写的库，比如说[moment.js](http://momentjs.com/)(它把时间格式化为可读形式)。 假设你可以像下面这样使用`moment`：

```javascript
moment()
  .startOf('day')
  .fromNow(); // 20 hours ago
```

但你首先得在网站里引入 moment.js。在 moment.js 首页上能看到以下说明：

![](https://cdn-images-1.medium.com/max/992/1*ef7OX37jr--Jc38ZxO97Iw.png)

右侧**Install**这一栏里有很多内容。暂时先忽略，我们可以下载`moment.min.js`文件到网站文件夹里，并在`index.html`里引用它。

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Example</title>
    <link rel="stylesheet" href="index.css" />
    <script src="moment.min.js"></script>
    <script src="index.js"></script>
  </head>
  <body>
    <h1>Hello from HTML!</h1>
  </body>
</html>
```

注意`moment.min.js`比`index.js`先加载，这样你就可以在`index.js`里使用`moment`函数：

```javascript
// index.js
console.log('Hello from JavaScript!');
console.log(
  moment()
    .startOf('day')
    .fromNow()
);
```

这就是使用 JS 库开发网站的方式！好处是非常容易理解。不足在于每次库更新都要下载它的新版本，这很繁琐。

#### 使用 JavaScript 包管理器（npm）

2010 年开始，一批互相竞争的 JavaScript 包管理器出现，通过从中心仓库下载和更新库实现了这个过程的自动化。[Bower](https://bower.io/)可以说是 2013 年最受欢迎的包管理器，但最终在 2015 年左右被[npm](https://www.npmjs.com/)取代。（2016 年下半年，[yarn](https://yarnpkg.com/en/)作为 npm 的替代品吸引了大量关注，但本质上它仍然使用 npm 包管理技术）  
说明一下，npm 起初只是[node.js](https://nodejs.org/)的专用包管理器。node 运行在服务端，不是前端。前端的包管理器选择运行在服务器端的库，有点不正常啊。

> 注：使用包管理器需要掌握命令行，过去的前端开发中并没有这个要求。如果你从来没用过，可以从这个[入门指南](https://www.learnenough.com/command-line-tutorial)开始。总而言之，掌握命令行是现代 JavaScript 中一项重要内容（命令行也让其它领域的开发成为可能）。

看一下如何使用 npm 自动安装 moment.js。如果你已经安装了 node.js，你就有了 npm。你就可以通过命令行访问`index.html`的文件夹并输入：

```Command Line
$ npm init
```

之后会弹出一系列问题（直接选默认就行，一直点回车），并生成`package.json`文件。这是 npm 用来保存项目信息的配置文件。默认选项的`package.json`的内容如下：

```json
{
  "name": "your-project-name",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

我们现在可以按照 moment.js 主页的说明安装了，命令行输入下面这条命令：

```command line
$ npm install moment --save
```

这条命令做了 2 件事情：一，它下载 moment.js 的所有代码，并保存在`node_modules`文件夹里。二，它自动修改`package.json`文件，把 moment.js 作为项目依赖。

```json{11-13}
{
  "name": "modern-javascript-example",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "moment": "^2.22.2"
  }
}
```

这在后面与他人共享项目时很有用——不再共享`node_modules`文件夹（这个文件夹可能很大），只需要共享`package.json`文件，其他人就能通过`npm install`自动安装需要的包。

我们再也不用手动下载 moment.js 了，可以使用 npm 自动下载和更新。打开`node_modules`文件夹，可以看到`moment.min.js`文件出现在`node_modules/moment/min`文件夹。这样就可以在`index.html`中链接下载好的`moment.min.js`版本：

```html{7}
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>JavaScript Example</title>
    <script src="node_modules/moment/min/moment.min.js"></script>
    <script src="index.js"></script>
  </head>
  <body>
    <h1>Hello from HTML!</h1>
  </body>
</html>
```

优点是我们现在可以通过命令行使用 npm 下载和更新包。不足是现在得从`node_modules`里找到每个包的路径并手动添加到 HTML 中。太麻烦了，下面会谈到怎么让这个过程也实现自动化。

![](https://cdn-images-1.medium.com/max/992/1*GeEETvRqyG4o7SZdbU2Guw.png)

#### 使用 JavaScript 模块打包工具(webpack)

大多数编程语言支持将一个文件的代码导入到另一个文件。JavaScript 开始并没有这个功能，因为 JavaScript 开始只在浏览器运行，没有访问客户端电脑文件系统的权限（因为安全原因）。所以一直以来，组织多文件的 JavaScript 代码需要将各文件变量作为全局导入。

我们在上面 moment.js 例子里也是这么做的——HTML 加载整个`moment.min.js`文件，定义了一个全局变量`moment`，这样后加载的文件都可以访问它（不管他们是否需要访问这个变量）

2009 年，名为 CommonJS 的项目启动了。它旨在规范浏览器端以外的 JavaScript 生态。CommonJS 的大部分内容是关于模块的标准，它让 JavaScript 像其他编程语言一样，最终实现了跨文件导入和导出代码的功能，结束了依赖全局变量的时代。CommonJS 标准最广为人知的实现是 node.js 。

![](https://cdn-images-1.medium.com/max/992/1*xeF1flp1zDLLJ4j7rDQ6-Q.png)

之前提过，node.js 是在服务端运行的 JavaScript。之前的例子用 node.js 模块表示的话，是这样的。HTML 不再通过 script 标签加载`moment.min.js`，而是直接在 JavaScript 文件中导入：

```javascript
// index.js
var moment = require('moment');

console.log('Hello from JavaScript!');
console.log(
  moment()
    .startOf('day')
    .fromNow()
);
```

这是 node.js 里加载模块的方式。它在 node.js 中一切正常，因为 node 是服务端语言，能够访问计算机文件系统。node.js 也知道每个 npm 模块的路径，因此只需要使用`require('moment')`语句，而不再需要`require('./node_modules/moment/min/moment.min.js)`(译注：即指明模块具体路径)——非常好。

但这也只在 node.js 里行的通了，如果你在浏览器里使用这种方式，得到的只是“`require`未定义”的错误。浏览器没有访问文件系统的权限，因此通过这种方式加载模块非常困难——文件加载只能动态完成，要么是同步的（这会降低执行速度），要么是异步的（会出现时间不一致的问题）。

于是模块打包工具应运而生。JavaScript 模块打包工具通过构建过程（过程中有文件访问权限）绕开了这个问题，它输出一个兼容浏览器的最终文件（即不需要访问文件系统）。这样就需要打包工具找到所有浏览器不兼容的`require`语句，将其替换成依赖文件的真实内容。最终输出是单个打包好的 JavaScript 文件（并且没有 require 语句）！

曾经最流行的打包工具是[Browserify](http://browserify.org/)，它在 2011 年发布，首先在前端支持 node.js 格式的 require 语句（这最终成就了 npm，让它成了前端包管理器）。2015 年左右，[webpack](https://webpack.github.io/)后来居上，成为最广泛使用的打包工具（前端框架 React 的普及推动了这一过程，因为 React 充分利用了 webpack 的各种特性）。

看看 webpack 怎么让前面`require('moment')`这个例子实现兼容浏览器的。首先需要在项目中安装 webpack。webpack 自身就是一个 npm 包，可以通过命令行安装：

```
$ npm install webpack webpack-cli --save-dev
```

注意安装的是 2 个包——webpack 和 webpack-cli（后者支持通过命令行使用 webpack）。再看 `--save-dev`参数——这个参数表示将安装包作为开发依赖保存，意思是安装包在开发环境中使用，但不会部署在生产服务器上。可以在`package.json`文件中看到，文件会自动更新：

```json{14-17}
{
  "name": "modern-javascript-example",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "moment": "^2.19.1"
  },
  "devDependencies": {
    "webpack": "^4.17.1",
    "webpack-cli": "^3.1.0"
  }
}
```

现在`node_modules`文件夹里安装好了 webpack 和 webpack-cli 包。你可以在命令行里使用 webpack-cli：

```
$ ./node_modules/.bin/webpack index.js --mode=development
```

这条命令将会运行安装好的 webpack，从`index.js`文件开始，搜索全部`require`语句，将它替换为合适的代码，最终创建单个输出文件（默认路径是`dist/main.js`）。`--mode=development`参数让 JavaScript 代码保持可读性，而`--mode=production`参数则会输出（不可读的）最小化的文件。

得到 webpack 的`dist/main.js`输出文件后，我们就可以在浏览器中用它取代`index.js`，因为后者还包含非法的 require 语句。这个过程也能在`index.html`文件中体现：

```html{7}
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>JavaScript Example</title>
    <script src="dist/main.js"></script>
  </head>
  <body>
    <h1>Hello from HTML!</h1>
  </body>
</html>
```

刷新浏览器就能发现现在和之前一样了!

注意每次更改`index.js`，我们都需要运行 webpack 命令。这样很繁琐，并且在使用 webpack 高级功能时会变得更糟（比如从转换后的代码中生成[source map](https://webpack.js.org/guides/development/#using-source-maps)辅助调试初始代码）。webpack 可以从项目根目录的配置文件中读取配置，配置文件名为`webpack.config.js`，在本文的例子是这样的：

```javascript
// webpack.config.js
module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'main.js',
    publicPath: 'dist',
  },
};
```

现在每次修改`index.js`时，可以哦那个过下面这条命令运行 webpack：

```
$ ./node_modules/.bin/webpack
```

我们不再需要指定`index.js`和`--mode=development`设置了，因为 webpack 会从`webpack.config.js`加载这些配置。现在好些了，但仍显得繁琐，每次修改代码还是需要输入这串命令——下面会让这个过程更简单一些。

总之，上面这些步骤看起来并不多，但这种流程有巨大的优势。我们不再需要以全局变量的形式加载外部文件了。不必在 HTML 文件里增加`<script>`标签了，所有 JavaScript 的新库都能通过 JavaScript 的`require`语句加载。单一的 JS 打包文件也意味着更好的性能。加入构建过程之后，还可以在工作流中加入其他的强大功能。

![](https://cdn-images-1.medium.com/max/992/1*ee_ivxNTKgIJTjmEMC4-dg.png)

#### 转换代码以支持新语言特性（babel）

代码转换是指将一种语言的代码转换为另一种相似语言的代码。这是前端开发的一个重要部分——因为浏览器对新特性的支持进展缓慢，所以新语言的实验性功能得转译为兼容浏览器的语言。

对 CSS 来说，现在有[Sass](http://sass-lang.com/)，[Less](http://lesscss.org/)和[Stylus](http://stylus-lang.com/)，等等。对 JavaScript 来说，曾经有红极一时的[CoffeScript](http://coffeescript.org/)(大约发布于 2010 年)，而现在人们用得最多的则是[babel](https://babeljs.io/)和[TypeScript](http://www.typescriptlang.org/)。CoffeeScript 这门语言，通过显著改变 JavaScript 来实现优化后者的目的——可选括号，有意义的留白，等等。babel 并不是一个新语言，而是一个转换器，它将所有浏览器尚未支持的新一代 JavaScript 特性（[ES2015](https://babeljs.io/learn-es2015/)及之后的版本）转换为更兼容的 ES5 JavaScript 版本。TypeScript 本质上与新一代 JavaScript 相同，但还支持可选的静态类型。很多人选择使用 babel，因为它与原生 JavaScript 最相似。

看看如何在 webpack 构建过程中使用 babel。首先需要在项目中通过命令行安装 babel（它是个 npm 包）：

```
$ npm install @babel/core @babel/preset-env babel-loader --save-dev
```

注意，作为开发依赖，我们安装了 3 个独立的包——`@babel/core`是 babel 的主题，`@babel/preset-env`是预设，决定转换 JavaScript 的哪些新特性，而`babel-loader`是让 babel 能与 webpack 协同的包。可以编辑`webpack.config.js`来设置 webpack 使用`babel-loader`，方法如下：

```javascript{9-22}
// webpack.config.js
module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'main.js',
    publicPath: 'dist',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
```

语法很不清晰（幸好我们不必经常修改）。基本上就是告诉 webpack 查找每个.js 文件（`node_modules`文件夹里的除外）并使用`babel-loader`通过`@babel/preset-env`的预设进行转换。[这里](http://webpack.github.io/docs/configuration.html)有更多关于 webpack 配置的内容。

配置好了所有东西，现在可以用 ES2015 的语法写 JavaScript 了！下面是在`index.html`中使用 ES2015 [模板字符串(template string)](https://babeljs.io/learn-es2015/#ecmascript-2015-features-template-strings)语法的例子：

```javascript{9-11}
// index.js
var moment = require('moment');
console.log('Hello from JavaScript!');
console.log(
  moment()
    .startOf('day')
    .fromNow()
);
var name = 'Bob',
  time = 'today';
console.log(`Hello ${name}, how are you ${time}?`);
```

还可以使用[ES2015 import](https://babeljs.io/learn-es2015/#ecmascript-2015-features-modules)语句代替`require`加载模块，这在目前的代码库中很常见。

```javascript{2}
// index.js
import moment from 'moment';

console.log('Hello from JavaScript!');
console.log(
  moment()
    .startOf('day')
    .fromNow()
);
var name = 'Bob',
  time = 'today';
console.log(`Hello ${name}, how are you ${time}?`);
```

上例中，`import`语法和`require`没什么区别，但`import`在复杂情况下更灵活。修改`index.js`之后，我们需要通过命令行再运行一次 webpack。

```
$ ./node_modules/.bin/webpack
```

现在浏览器里刷新`index.html`。在我写这篇文章的时候，大多数现代浏览器已支持 ES2015 的全部特性，所以证实 babel 是否起作用有点难。你可以尝试用老浏览器比如 IE9，或者在`bundle.js`里搜索转换后的代码：

```javascript
// bundle.js
// ...
console.log('Hello ' + name + ', how are you ' + time + '?');
// ...
```

这段代码可以看到，为了兼容浏览器， babel 把 ES2015 的模板字符串转换为了普通 JavaScript 字符串拼接。可能这个例子没什么大不了的，但代码转换这个功能真的非常强大。比如[async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)这种让人激动的 JavaScript 新功能，能够让你写出更好的代码。尽管代码转换有时显得既繁琐又痛苦，但在过去几年中它确实大大改善了 JavaScript 这门语言，因为它让开发者能够在当下测试未来的语言特性。

还有一些没提到的内容，马上就完了。如果关注性能，我们应该[压缩(minifying)](https://en.wikipedia.org/wiki/Minification_%28programming%29)打包后的文件。考虑到已经引入了构建过程，实现这个目标应该不难。我们每次修改代码后，也必须重新运行 webpack 命令行。下一步，我们将关注有哪些工具能够帮助我们。

#### 使用任务管理工具（npm scripts）

我们已经使用构建过程来处理 JavaScript 模块了，自然也该使用任务管理工具。它能够自动化构建过程中的各个步骤。对前端开发来说，任务包括压缩代码，优化图片，执行测试等等。

2013 年，grunt 是最普及的任务管理工具，随后出现了 gulp 。二者都依赖内置了其他命令行工具的插件。现在最受欢迎的工具似乎是 npm 包管理器内置的脚本，它不需要插件，直接调用其他命令行工具。

写几个 npm 脚本，方便我们使用 webpack。只需要简单修改`package.json`文件：

```json{8-9}
{
  "name": "modern-javascript-example",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --progress --mode=production",
    "watch": "webpack --progress --watch"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "moment": "^2.22.2"
  },
  "devDependencies": {
    "@babel/core": "^7.0.0",
    "@babel/preset-env": "^7.0.0",
    "babel-loader": "^8.0.2",
    "webpack": "^4.17.1",
    "webpack-cli": "^3.1.0"
  }
}
```

我们增加了 2 个新脚本，`build`和`watch`。执行 build 脚本，可以在命令行输入：

```
$ npm run build
```

这条命令会运行 webpack（使用`wepack.config.js`的配置），其中`--progress`参数会显示进度百分比，而`--mode=production`参数会为生产环境压缩代码。要执行`watch`脚本：

```
$ npm run watch
```

这条命令使用`--watch`参数，每次有 JavaScript 文件修改时，就自动重新运行 webpack。开发的福音。

注意在`package.json`中的脚本执行时，不必指定完整路径，因为 node.js 知道每个 npm 模块的路径。太方便了！我们还可以安装 webpack-dev-server 让事情变得更方便，它是一个独立工具，能够创建一个实时加载的 web 服务器。把它作为开发依赖安装，输入以下命令：

```
$ npm install webpack-dev-server --save-dev
```

随后在`package.json`中添加一条 npm 脚本：

```json{10}
{
  "name": "modern-javascript-example",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --progress -p",
    "watch": "webpack --progress --watch",
    "server": "webpack-dev-server --open"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "moment": "^2.19.1"
  },
  "devDependencies": {
    "@babel/core": "^7.0.0",
    "@babel/preset-env": "^7.0.0",
    "babel-loader": "^8.0.2",
    "webpack": "^3.7.1",
    "webpack-dev-server": "^3.1.6"
  }
}
```

现在可以通过命令来启动开发服务器了：

```
$ npm run server
```

这条命令默认通过`localhost：8080`，自动在浏览器打开`index.html`网站。每次在`index.js`文件中修改代码，wepack-dev-server 都会重新构建打包文件，并自动刷新浏览器。它能大大节约我们的时间，因为这让我们只关注代码，而不必在浏览器效果与代码之间不断切换。

上面的内容只是一点皮毛，关于 webpack 和 webpack-dev-server 还有很多设置（更多内容看[这里](https://webpack.js.org/guides/development/)）。你当然也可以使用 npm 脚本完成其他任务，比如把 Sass 转换为 CSS，压缩图片，执行测试——所有可以通过命令行完成的任务。npm 脚本自身还有一些高级设置和技巧——[Kate Hudson](https://twitter.com/k88hudson)这个[演讲](https://www.youtube.com/watch?v=0RYETb9YVrk)很不错：

![](https://i.ytimg.com/vi/0RYETb9YVrk/hqdefault.jpg)

#### 结语

总而言之，这就是现代 JavaScript。我们从只用 HTML 和 JS，到了使用**包管理器**自动下载第三方包，到使用**模块打包工具**创建单一脚本文件，再到使用**转换器**使用未来 JavaScript 特性，最后到使用**任务管理工具**自动化构建过程的各个步骤。内容很多，对新手尤甚。web 开发曾经是一个对新手友好的领域，主要是因为它易于上手；但现在却让人望而却步，尤其是各种快速变化的工具。

但它并没有看起来那么可怕。生态正在稳定，特别是在前端拥抱 node 生态之后。npm 包管理器、node 模块中的 require 和 import 语句、还有任务管理工具 npm 脚本，他们都容易上手并且很少出差错。现在的工作流相比一两年之前已经大大简化了。

现在的框架对新手和老手开发者一视同仁，通常自带初始配置工具。Ember 有[`ember-cli`](https://ember-cli.com/)，它对 Angular 的[`angular-cli`](https://cli.angular.io/)产生了极大影响，还有 React 的[`create-react-app`](https://github.com/facebookincubator/create-react-app)，Vue 的[`vue-cli`](https://github.com/vuejs/vue-cli)等等。这些工具会配置好一个项目的所有依赖——你可以直接开始写代码。但是，这些工具并非奇迹，它们也只是按照一定规则和可用性配置好了全部东西——你可能经常遇到需要额外配置 webpack，babel 的情况。所以理解每个工具的作用仍然至关重要，这正是本文所介绍的内容。

现代 JavaScript 时常令人沮丧，因为它还在不停变化和升级。尽管看起来像是在不停的“造轮子”，但 JavaScript 的快速升级确实推动了一系列创新，比如 hot-reloading、real-time linting 和 time-travel debugging 等。开发是一项令人兴奋的工作，希望本文的内容能够帮助你在开发道路上走得更远。
![](https://cdn-images-1.medium.com/max/992/1*H6NN_RxZNeVyLYpCirsslg.png)
