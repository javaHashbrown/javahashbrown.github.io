(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{156:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),o=a(0),i=a.n(o),l=a(162),s=a(161),c=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){},a.render=function(){return i.a.createElement(l.a,null,i.a.createElement(s.a,{title:"About",keywords:["gatsby","application","react"]}),i.a.createElement("h1",null,"About Me"),i.a.createElement("p",null,"About"),i.a.createElement("p",null,"Me"))},t}(i.a.Component);t.default=c},161:function(e,t,a){"use strict";var n=a(166),r=a(0),o=a.n(r),i=a(1),l=a.n(i),s=a(169),c=a.n(s),m=a(36);function d(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,l=e.title;return o.a.createElement(m.StaticQuery,{query:u,render:function(e){var n=t||e.site.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d;var u="1025518380"},162:function(e,t,a){"use strict";var n=a(163),r=a(0),o=a.n(r),i=a(1),l=a.n(i),s=a(36),c=a(8),m=a.n(c),d=a(164),u=a.n(d),p=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleNav=function(){a.setState({showNav:!a.state.showNav})},a.state={showNav:!1},a}return m()(t,e),t.prototype.render=function(){var e=this.state.showNav;return o.a.createElement("header",{className:u.a.header},o.a.createElement("div",null,o.a.createElement(s.Link,{className:u.a.logo__link,to:"/"},this.props.siteTitle)),o.a.createElement("div",{className:u.a.toggle,onClick:this.toggleNav},"☰"),o.a.createElement("nav",{className:u.a.nav},e&&o.a.createElement("ul",{className:u.a.nav__mobile},o.a.createElement("li",{className:u.a.nav__item},o.a.createElement(s.Link,{to:"/",className:u.a.nav__link},"home")),o.a.createElement("li",{className:u.a.nav__item},o.a.createElement(s.Link,{to:"/Blog",className:u.a.nav__link},"blog")),o.a.createElement("li",{className:u.a.nav__item},o.a.createElement(s.Link,{to:"/Portfolio",className:u.a.nav__link},"portfolio"))),o.a.createElement("div",{className:u.a.nav__desktop},o.a.createElement(s.Link,{to:"/",className:u.a.nav__link},"home"),o.a.createElement(s.Link,{to:"/Blog",className:u.a.nav__link},"blog"),o.a.createElement(s.Link,{to:"/Portfolio",className:u.a.nav__link},"portfolio"))))},t}(o.a.Component);p.propTypes={siteTitle:l.a.string},p.defaultProps={siteTitle:""};var _=p,v=(a(165),function(e){var t=e.children;return o.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(_,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",width:"100%",paddingTop:0}},t))},data:n})});v.propTypes={children:l.a.node.isRequired};t.a=v},163:function(e){e.exports={data:{site:{siteMetadata:{title:"Welcome to Alex's Midway"}}}}},164:function(e,t,a){e.exports={header:"Header-module--header--1QwaW",logo__link:"Header-module--logo__link--3e5rL",toggle:"Header-module--toggle--1SzWX",nav:"Header-module--nav--2aaCh",nav__mobile:"Header-module--nav__mobile--22c8U",nav__desktop:"Header-module--nav__desktop--JFScp",nav__item:"Header-module--nav__item--3Yf4P",nav__link:"Header-module--nav__link--Uko9_"}},165:function(e,t,a){},166:function(e){e.exports={data:{site:{siteMetadata:{title:"Welcome to Alex's Midway",description:"a simple personal blog",author:"Alex Wang"}}}}}}]);
//# sourceMappingURL=component---src-pages-about-js-8cb263c9f86cd54853ab.js.map