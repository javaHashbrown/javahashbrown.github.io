(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{207:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(214),i=a(212);var l=function(e){var t,a;function n(){return e.apply(this,arguments)||this}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=n.prototype;return l.componentDidMount=function(){},l.render=function(){return o.a.createElement(r.a,null,o.a.createElement(i.a,{title:"About",keywords:["gatsby","application","react"]}),o.a.createElement("h1",null,"About Me"),o.a.createElement("p",null,"About"),o.a.createElement("p",null,"Me"))},n}(o.a.Component);t.default=l},211:function(e){e.exports={data:{site:{siteMetadata:{title:"Welcome to Alex's Midway"}}}}},212:function(e,t,a){"use strict";var n=a(213),o=a(0),r=a.n(o),i=a(221),l=a.n(i),c=a(96);function s(e){var t=e.description,a=e.lang,o=e.meta,i=e.keywords,s=e.title;return r.a.createElement(c.StaticQuery,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return r.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:s},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(o)})},data:n})}s.defaultProps={lang:"en",meta:[],keywords:[]},t.a=s;var m="1025518380"},213:function(e){e.exports={data:{site:{siteMetadata:{title:"Welcome to Alex's Midway",description:"a simple personal blog",author:"Alex Wang"}}}}},214:function(e,t,a){"use strict";var n=a(211),o=a(0),r=a.n(o),i=a(96),l=a(219),c=a.n(l);var s=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).toggleNav=function(){a.setState({showNav:!a.state.showNav})},a.state={showNav:!1},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.state.showNav;return r.a.createElement("header",{className:c.a.header},r.a.createElement("div",null,r.a.createElement(i.Link,{className:c.a.logo__link,to:"/"},this.props.siteTitle)),r.a.createElement("div",{className:c.a.toggle,onClick:this.toggleNav},"☰"),r.a.createElement("nav",{className:c.a.nav},e&&r.a.createElement("ul",{className:c.a.nav__mobile},r.a.createElement("li",{className:c.a.nav__item},r.a.createElement(i.Link,{to:"/",className:c.a.nav__link},"home")),r.a.createElement("li",{className:c.a.nav__item},r.a.createElement(i.Link,{to:"/Blog",className:c.a.nav__link},"blog")),r.a.createElement("li",{className:c.a.nav__item},r.a.createElement(i.Link,{to:"/Portfolio",className:c.a.nav__link},"portfolio"))),r.a.createElement("div",{className:c.a.nav__desktop},r.a.createElement(i.Link,{to:"/",className:c.a.nav__link},"home"),r.a.createElement(i.Link,{to:"/Blog",className:c.a.nav__link},"blog"),r.a.createElement(i.Link,{to:"/Portfolio",className:c.a.nav__link},"portfolio"))))},n}(r.a.Component);s.defaultProps={siteTitle:""};var m=s;a(220),t.a=function(e){var t=e.children;return r.a.createElement(i.StaticQuery,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("div",{style:{margin:"0 auto",width:"100%",paddingTop:0}},t))},data:n})}}}]);
//# sourceMappingURL=component---src-pages-about-js-93c7ccefc2f91c639963.js.map