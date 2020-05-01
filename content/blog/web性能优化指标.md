---
title: 'web性能优化指标'
date: 2020-04-12

---

### 写在前面

1.sequence

request - server responds - domContentLoaded - load



2. Choose the metrics

web.dev/user-centric-performance-metrics

2.1 Is there content?

- Time to First Byte

  a) Time from when the browser requests a page to the first bye of the page being received

  b) Value = time to establish connection + 2*time to transmission + time for server respond

- First Paint

  a) time when the first pixel is painted on the screen

  b) value greater than TTFB, somewhere after domContentLoaded

- First Contentful Paint

  a) time when the first piece of content from the DOM is rendered

  b) 

2.2 is the content meaningful?

- Largest Contentful Paint

  a) successor to FMP, measures the time when the largest piece fo content whithin the viewport is rendered

  b) better than FMP

- Visually Complete

  a) time taken for the content within the viewport to be fully rendered

  b) longer than LCP

- Speed Index

  a) score of how quickly visual content is rendered within the viewport

  b) 

2.3 is the content interactable?

- First Input Delay 

  a) delay between the time a user can attempt to interact with a part fo the site, and the time that the interface is able to respond to that interaction

- Max Potential First Input Delay

  a) maximum possible First Input Delay based on the duration of the longest task

- Total Blocking Time

  a) total duration of JavaScript tasks between the First Contentful Paint and Time to Interactive

- Time to Interactive

  a) time when the. main thread has had up to 5sec with no network activitiy or JavaScript tasks

2.4 Are interactions smooth?

- Cumulative Layout Shift

  a) shifts in layout while a page is loading

- Frame Rate

  a) rate at which the browser can produce new frames in response to interactions and/or animations

2.5 Example

e.g. News Website

- is there content? First Contentful Paint
- is the content meaningful? Largest Contentful Paint, Speed Index
- is the content intractable? Time to Interactive
- Are the interactions smooth? Cumulative Layout Shift

3. Define a budget

- a performance budget defines specific values to your metrics that your site should never exceed.

e.g. News Website

- FCP < 1.5s
- LCP < 2s
- SI < 0.43
- TTI < 4s
- CLS<0.1

OR use competitors as a guide/baseline

4. Start measuring

- Lighthouse
- Calibre