(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{152:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(159),l=a(158);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(l.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},158:function(e,t,a){"use strict";var n=a(163),r=a(0),i=a.n(r),l=a(1),o=a.n(l),s=a(166),c=a.n(s),m=a(36);function d(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,o=e.title;return i.a.createElement(m.StaticQuery,{query:u,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=d;var u="1025518380"},159:function(e,t,a){"use strict";a(26);var n=a(160),r=a(0),i=a.n(r),l=a(1),o=a.n(l),s=a(36),c=a(7),m=a.n(c),d=a(161),u=a.n(d),p=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleNav=function(){a.setState({showNav:!a.state.showNav})},a.state={showNav:!1},a}return m()(t,e),t.prototype.render=function(){var e=this.state.showNav;return i.a.createElement("header",{className:u.a.header},i.a.createElement("div",null,i.a.createElement(s.Link,{className:u.a.logo__link,to:"/"},this.props.siteTitle)),i.a.createElement("div",{className:u.a.toggle,onClick:this.toggleNav},"☰"),i.a.createElement("nav",{className:u.a.nav},e&&i.a.createElement("ul",{className:u.a.nav__mobile},i.a.createElement("li",{className:u.a.nav__item},i.a.createElement(s.Link,{to:"/",className:u.a.nav__link},"home")),i.a.createElement("li",{className:u.a.nav__item},i.a.createElement(s.Link,{to:"/Blog",className:u.a.nav__link},"blog")),i.a.createElement("li",{className:u.a.nav__item},i.a.createElement(s.Link,{to:"/Portfolio",className:u.a.nav__link},"portfolio"))),i.a.createElement("div",{className:u.a.nav__desktop},i.a.createElement(s.Link,{to:"/",className:u.a.nav__link},"home"),i.a.createElement(s.Link,{to:"/Blog",className:u.a.nav__link},"blog"),i.a.createElement(s.Link,{to:"/Portfolio",className:u.a.nav__link},"portfolio"))))},t}(i.a.Component);p.propTypes={siteTitle:o.a.string},p.defaultProps={siteTitle:""};var _=p,v=(a(162),function(e){var t=e.children,a=e.childrenContainerStyle;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(_,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:Object.assign({},a)},t))},data:n})});v.propTypes={children:o.a.node.isRequired};t.a=v},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Alex's Midway"}}}}},161:function(e,t,a){e.exports={header:"Header-module--header--1QwaW",logo__link:"Header-module--logo__link--3e5rL",toggle:"Header-module--toggle--1SzWX",nav:"Header-module--nav--2aaCh",nav__mobile:"Header-module--nav__mobile--22c8U",nav__desktop:"Header-module--nav__desktop--JFScp",nav__item:"Header-module--nav__item--3Yf4P",nav__link:"Header-module--nav__link--Uko9_"}},162:function(e,t,a){},163:function(e){e.exports={data:{site:{siteMetadata:{title:"Alex's Midway",description:"a simple personal blog",author:"Alex Wang"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-d2b8a496bbf31432d821.js.map