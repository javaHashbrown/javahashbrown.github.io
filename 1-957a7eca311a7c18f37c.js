(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{145:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(1),s=a.n(n),o=a(152),l=a.n(o),d=a(32);function c(e){var t=e.description,a=e.lang,r=e.meta,n=e.keywords,s=e.title;return i.a.createElement(d.StaticQuery,{query:u,render:function(e){var o=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:s},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:o}].concat(n.length>0?{name:"keywords",content:n.join(", ")}:[]).concat(r)})}})}c.defaultProps={lang:"en",meta:[],keywords:[]},c.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=c;var u="1025518380"},146:function(e,t,a){"use strict";var r=a(147),i=a(0),n=a.n(i),s=a(1),o=a.n(s),l=a(32),d=a(6),c=a.n(d),u=a(148),f=a.n(u),m=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleNav=function(){a.setState({showNav:!a.state.showNav})},a.state={showNav:!1},a}return c()(t,e),t.prototype.render=function(){var e=this.state.showNav;return n.a.createElement("header",{className:f.a.header},n.a.createElement("div",null,n.a.createElement(l.Link,{className:f.a.logo__link,to:"/"},this.props.siteTitle)),n.a.createElement("div",{className:f.a.toggle,onClick:this.toggleNav},"☰"),n.a.createElement("nav",{className:f.a.nav},e&&n.a.createElement("ul",{className:f.a.nav__mobile},n.a.createElement("li",{className:f.a.nav__item},n.a.createElement(l.Link,{to:"/",className:f.a.nav__link},"home")),n.a.createElement("li",{className:f.a.nav__item},n.a.createElement(l.Link,{to:"/Blog",className:f.a.nav__link},"blog")),n.a.createElement("li",{className:f.a.nav__item},n.a.createElement(l.Link,{to:"/Portfolio",className:f.a.nav__link},"portfolio"))),n.a.createElement("div",{className:f.a.nav__desktop},n.a.createElement(l.Link,{to:"/",className:f.a.nav__link},"home"),n.a.createElement(l.Link,{to:"/Blog",className:f.a.nav__link},"blog"),n.a.createElement(l.Link,{to:"/Portfolio",className:f.a.nav__link},"portfolio"))))},t}(n.a.Component);m.propTypes={siteTitle:o.a.string},m.defaultProps={siteTitle:""};var p=m,h=(a(149),function(e){var t=e.children;return n.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),n.a.createElement("div",{style:{margin:"0 auto",width:"100%",paddingTop:0}},t))},data:r})});h.propTypes={children:o.a.node.isRequired};t.a=h},147:function(e){e.exports={data:{site:{siteMetadata:{title:"Alex's Midway"}}}}},148:function(e,t,a){e.exports={header:"Header-module--header--1QwaW",logo__link:"Header-module--logo__link--3e5rL",toggle:"Header-module--toggle--1SzWX",nav:"Header-module--nav--2aaCh",nav__mobile:"Header-module--nav__mobile--22c8U",nav__desktop:"Header-module--nav__desktop--JFScp",nav__item:"Header-module--nav__item--3Yf4P",nav__link:"Header-module--nav__link--Uko9_"}},149:function(e,t,a){},150:function(e,t,a){"use strict";var r=a(7);t.__esModule=!0,t.default=void 0;var i,n=r(a(6)),s=r(a(33)),o=r(a(69)),l=r(a(70)),d=r(a(0)),c=r(a(1)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},m=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!f[a]||(f[a]=!0,!1)},p=[];var h=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),p.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+r+i+"<img "+o+l+t+s+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},v=d.default.forwardRef(function(e,t){var a=e.style,r=e.onLoad,i=e.onError,n=(0,o.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({},n,{onLoad:r,onError:i,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});v.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!0,n=!1,o=t.fadeIn,l=m(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!1,n=!0),"undefined"==typeof window&&(r=!1,i=!1),t.critical&&(r=!0,i=!1,n=!1);var c=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:i,IOSupported:n,fadeIn:o,hasNoScript:c,seenBefore:l},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){t.setState({isVisible:!0})})},a.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,p=e.fluid,h=e.fixed,y=e.backgroundColor,w=e.Tag,b="boolean"==typeof y?"lightgray":y,E=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),S=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),_={title:t,alt:this.state.isVisible?"":a,style:E,className:m};if(p){var N=p;return d.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(N.srcSet)},d.default.createElement(w,{style:{width:"100%",paddingBottom:100/N.aspectRatio+"%"}}),N.base64&&d.default.createElement(v,(0,l.default)({src:N.base64},_)),N.tracedSVG&&d.default.createElement(v,(0,l.default)({src:N.tracedSVG},_)),b&&d.default.createElement(w,{title:t,style:{backgroundColor:b,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,N.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:N.srcSetWebp,sizes:N.sizes}),d.default.createElement("source",{srcSet:N.srcSet,sizes:N.sizes}),d.default.createElement(v,{alt:a,title:t,src:N.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},N))}}))}if(h){var k=h,L=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},n);return"inherit"===n.display&&delete L.display,d.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:L,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},k.base64&&d.default.createElement(v,(0,l.default)({src:k.base64},_)),k.tracedSVG&&d.default.createElement(v,(0,l.default)({src:k.tracedSVG},_)),b&&d.default.createElement(w,{title:t,style:{backgroundColor:b,width:k.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:k.height}}),this.state.isVisible&&d.default.createElement("picture",null,k.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),d.default.createElement("source",{srcSet:k.srcSet,sizes:k.sizes}),d.default.createElement(v,{alt:a,title:t,width:k.width,height:k.height,src:k.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:k.width,height:k.height},k))}}))}return null},t}(d.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),b=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:w,sizes:b,fixed:w,fluid:b,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,Tag:c.default.string};var E=y;t.default=E},151:function(e,t,a){"use strict"},154:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(32),s=a(170),o=a.n(s),l=function(e){var t=e.node,a=e.showExcerpt,r=void 0===a||a,s=e.showButton,l=void 0===s||s;return i.a.createElement("div",{className:o.a.container},i.a.createElement(n.Link,{className:o.a.entry,to:t.fields.slug},i.a.createElement("span",{className:o.a.date},t.frontmatter.date),i.a.createElement("h3",{className:o.a.title},t.frontmatter.title),r&&i.a.createElement("p",{className:o.a.excerpt},t.excerpt)),l&&i.a.createElement(n.Link,{className:o.a.button,to:t.fields.slug},i.a.createElement("span",{className:o.a.arrow},"Read")))},d=function(e){var t=e.year,a=e.postsInYear,r=void 0===a?[]:a;return i.a.createElement("section",{className:o.a.yearPostsContainer},i.a.createElement("h1",{className:o.a.year},t),r?r.map(function(e){return i.a.createElement("div",{key:e.node.id,className:o.a.postPreviewWrapper},i.a.createElement(l,{key:e.node.id,node:e.node,showExcerpt:!1}))}):i.a.createElement("h2",null,"暂无"))},c=l;a.d(t,"a",function(){return d});t.b=c},170:function(e,t,a){e.exports={container:"PostPreview-module--container--3p5gs",entry:"PostPreview-module--entry--3FBUO",date:"PostPreview-module--date--3au0S",title:"PostPreview-module--title--2l4di",excerpt:"PostPreview-module--excerpt--2yUmg",button:"PostPreview-module--button--SjqV2",arrow:"PostPreview-module--arrow--21XKp",yearPostsContainer:"PostPreview-module--yearPostsContainer--1EW2b",year:"PostPreview-module--year--1QUNi",postPreviewWrapper:"PostPreview-module--postPreviewWrapper--QhcY3"}}}]);
//# sourceMappingURL=1-957a7eca311a7c18f37c.js.map