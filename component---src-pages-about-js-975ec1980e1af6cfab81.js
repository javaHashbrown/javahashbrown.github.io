(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{154:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(160),s=a(159),c=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){},a.render=function(){return o.a.createElement(l.a,null,o.a.createElement(s.a,{title:"About",keywords:["gatsby","application","react"]}),o.a.createElement("h1",null,"About Me"),o.a.createElement("p",null,"About"),o.a.createElement("p",null,"Me"))},t}(o.a.Component);t.default=c},159:function(e,t,a){"use strict";var n=a(164),r=a(0),i=a.n(r),o=a(1),l=a.n(o),s=a(167),c=a.n(s),m=a(36);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title;return i.a.createElement(m.StaticQuery,{query:u,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d;var u="1025518380"},160:function(e,t,a){"use strict";var n=a(161),r=a(0),i=a.n(r),o=a(1),l=a.n(o),s=a(36),c=a(7),m=a.n(c),d=a(162),u=a.n(d),p=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleNav=function(){a.setState({showNav:!a.state.showNav})},a.state={showNav:!1},a}return m()(t,e),t.prototype.render=function(){var e=this.state.showNav;return i.a.createElement("header",{className:u.a.header},i.a.createElement("div",null,i.a.createElement(s.Link,{className:u.a.logo__link,to:"/"},this.props.siteTitle)),i.a.createElement("div",{className:u.a.toggle,onClick:this.toggleNav},"☰"),i.a.createElement("nav",{className:u.a.nav},e&&i.a.createElement("ul",{className:u.a.nav__mobile},i.a.createElement("li",{className:u.a.nav__item},i.a.createElement(s.Link,{to:"/",className:u.a.nav__link},"home")),i.a.createElement("li",{className:u.a.nav__item},i.a.createElement(s.Link,{to:"/Blog",className:u.a.nav__link},"blog")),i.a.createElement("li",{className:u.a.nav__item},i.a.createElement(s.Link,{to:"/Portfolio",className:u.a.nav__link},"portfolio"))),i.a.createElement("div",{className:u.a.nav__desktop},i.a.createElement(s.Link,{to:"/",className:u.a.nav__link},"home"),i.a.createElement(s.Link,{to:"/Blog",className:u.a.nav__link},"blog"),i.a.createElement(s.Link,{to:"/Portfolio",className:u.a.nav__link},"portfolio"))))},t}(i.a.Component);p.propTypes={siteTitle:l.a.string},p.defaultProps={siteTitle:""};var _=p,v=(a(163),function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(_,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",width:"100%",paddingTop:0}},t))},data:n})});v.propTypes={children:l.a.node.isRequired};t.a=v},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Alex's Midway"}}}}},162:function(e,t,a){e.exports={header:"Header-module--header--1QwaW",logo__link:"Header-module--logo__link--3e5rL",toggle:"Header-module--toggle--1SzWX",nav:"Header-module--nav--2aaCh",nav__mobile:"Header-module--nav__mobile--22c8U",nav__desktop:"Header-module--nav__desktop--JFScp",nav__item:"Header-module--nav__item--3Yf4P",nav__link:"Header-module--nav__link--Uko9_"}},163:function(e,t,a){},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Alex's Midway",description:"a simple personal blog",author:"Alex Wang"}}}}}}]);
//# sourceMappingURL=component---src-pages-about-js-975ec1980e1af6cfab81.js.map