(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{138:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return u});a(155);var n=a(0),r=a.n(n),l=a(32),o=a(150),i=a.n(o),s=a(146),m=a(145),c=a(164),d=a.n(c);a(151),a(165);t.default=function(e){var t=e.data,a=e.pageContext,n=t.markdownRemark,o=a.previous,c=a.next;return console.log(o,c),r.a.createElement(s.a,null,r.a.createElement(m.a,{title:n.frontmatter.title,description:n.excerpt}),r.a.createElement("article",{className:d.a.article},r.a.createElement(i.a,{backgroundColor:!!n.frontmatter.image,fluid:n.frontmatter.image.childImageSharp.fluid,className:d.a.img,alt:n.frontmatter.image?n.frontmatter.image.name:"background img"}),r.a.createElement("section",{className:d.a.grid},r.a.createElement("header",{className:d.a.header},r.a.createElement("h1",{className:d.a.title},n.frontmatter.title),r.a.createElement("p",{className:d.a.date},n.frontmatter.date)),r.a.createElement("hr",null)),r.a.createElement("section",{className:d.a.grid},r.a.createElement("div",{className:d.a.passage,dangerouslySetInnerHTML:{__html:n.html}}),r.a.createElement("nav",{className:d.a.nav},r.a.createElement("div",{className:d.a.left},o&&r.a.createElement(l.Link,{className:d.a.button,to:o.fields.slug},r.a.createElement("span",{className:(d.a.arrow,d.a.prev)},o.frontmatter.title))),r.a.createElement("div",{className:d.a.right},c&&r.a.createElement(l.Link,{className:d.a.button,to:c.fields.slug},r.a.createElement("span",{className:(d.a.arrow,d.a.next)},c.frontmatter.title)))))))};var u="191530655"},145:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(1),o=a.n(l),i=a(152),s=a.n(i),m=a(32);function c(e){var t=e.description,a=e.lang,n=e.meta,l=e.keywords,o=e.title;return r.a.createElement(m.StaticQuery,{query:d,render:function(e){var i=t||e.site.siteMetadata.description;return r.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:o},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:i}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(n)})}})}c.defaultProps={lang:"en",meta:[],keywords:[]},c.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=c;var d="1025518380"},146:function(e,t,a){"use strict";var n=a(147),r=a(0),l=a.n(r),o=a(1),i=a.n(o),s=a(32),m=a(6),c=a.n(m),d=a(148),u=a.n(d),g=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleNav=function(){a.setState({showNav:!a.state.showNav})},a.state={showNav:!1},a}return c()(t,e),t.prototype.render=function(){var e=this.state.showNav;return l.a.createElement("header",{className:u.a.header},l.a.createElement("div",null,l.a.createElement(s.Link,{className:u.a.logo__link,to:"/"},this.props.siteTitle)),l.a.createElement("div",{className:u.a.toggle,onClick:this.toggleNav},"☰"),l.a.createElement("nav",{className:u.a.nav},e&&l.a.createElement("ul",{className:u.a.nav__mobile},l.a.createElement("li",{className:u.a.nav__item},l.a.createElement(s.Link,{to:"/",className:u.a.nav__link},"home")),l.a.createElement("li",{className:u.a.nav__item},l.a.createElement(s.Link,{to:"/Blog",className:u.a.nav__link},"blog")),l.a.createElement("li",{className:u.a.nav__item},l.a.createElement(s.Link,{to:"/Portfolio",className:u.a.nav__link},"portfolio"))),l.a.createElement("div",{className:u.a.nav__desktop},l.a.createElement(s.Link,{to:"/",className:u.a.nav__link},"home"),l.a.createElement(s.Link,{to:"/Blog",className:u.a.nav__link},"blog"),l.a.createElement(s.Link,{to:"/Portfolio",className:u.a.nav__link},"portfolio"))))},t}(l.a.Component);g.propTypes={siteTitle:i.a.string},g.defaultProps={siteTitle:""};var p=g,v=(a(149),function(e){var t=e.children;return l.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("div",{style:{margin:"0 auto",width:"100%",paddingTop:0}},t))},data:n})});v.propTypes={children:i.a.node.isRequired};t.a=v},147:function(e){e.exports={data:{site:{siteMetadata:{title:"Alex's Midway"}}}}},148:function(e,t,a){e.exports={header:"Header-module--header--1QwaW",logo__link:"Header-module--logo__link--3e5rL",toggle:"Header-module--toggle--1SzWX",nav:"Header-module--nav--2aaCh",nav__mobile:"Header-module--nav__mobile--22c8U",nav__desktop:"Header-module--nav__desktop--JFScp",nav__item:"Header-module--nav__item--3Yf4P",nav__link:"Header-module--nav__link--Uko9_"}},149:function(e,t,a){},151:function(e,t,a){"use strict"},164:function(e,t,a){e.exports={article:"Post-module--article--3sXAa",grid:"Post-module--grid--1t1IJ",header:"Post-module--header--3AA3X",img:"Post-module--img--Y4Z-v",title:"Post-module--title--37sR4",date:"Post-module--date--Ns0bv",passage:"Post-module--passage--2aCPn",nav:"Post-module--nav--1hTHb",left:"Post-module--left--2Qr_n",right:"Post-module--right--1gAnL",button:"Post-module--button--EIZuK",arrow:"Post-module--arrow--1_m5z",prev:"Post-module--prev--2BG3d",next:"Post-module--next--2l5d_"}}}]);
//# sourceMappingURL=component---src-templates-post-post-js-c36ea307768ac11783fa.js.map