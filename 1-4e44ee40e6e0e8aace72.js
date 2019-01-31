(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{161:function(e,t,a){"use strict";var i=a(166),r=a(0),s=a.n(r),n=a(1),o=a.n(n),l=a(169),d=a.n(l),c=a(36);function u(e){var t=e.description,a=e.lang,r=e.meta,n=e.keywords,o=e.title;return s.a.createElement(c.StaticQuery,{query:f,render:function(e){var i=t||e.site.siteMetadata.description;return s.a.createElement(d.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:o},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:i}].concat(n.length>0?{name:"keywords",content:n.join(", ")}:[]).concat(r)})},data:i})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u;var f="1025518380"},162:function(e,t,a){"use strict";var i=a(163),r=a(0),s=a.n(r),n=a(1),o=a.n(n),l=a(36),d=a(8),c=a.n(d),u=a(164),f=a.n(u),p=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleNav=function(){a.setState({showNav:!a.state.showNav})},a.state={showNav:!1},a}return c()(t,e),t.prototype.render=function(){var e=this.state.showNav;return s.a.createElement("header",{className:f.a.header},s.a.createElement("div",null,s.a.createElement(l.Link,{className:f.a.logo__link,to:"/"},this.props.siteTitle)),s.a.createElement("div",{className:f.a.toggle,onClick:this.toggleNav},"☰"),s.a.createElement("nav",{className:f.a.nav},e&&s.a.createElement("ul",{className:f.a.nav__mobile},s.a.createElement("li",{className:f.a.nav__item},s.a.createElement(l.Link,{to:"/",className:f.a.nav__link},"home")),s.a.createElement("li",{className:f.a.nav__item},s.a.createElement(l.Link,{to:"/Blog",className:f.a.nav__link},"blog")),s.a.createElement("li",{className:f.a.nav__item},s.a.createElement(l.Link,{to:"/Portfolio",className:f.a.nav__link},"portfolio"))),s.a.createElement("div",{className:f.a.nav__desktop},s.a.createElement(l.Link,{to:"/",className:f.a.nav__link},"home"),s.a.createElement(l.Link,{to:"/Blog",className:f.a.nav__link},"blog"),s.a.createElement(l.Link,{to:"/Portfolio",className:f.a.nav__link},"portfolio"))))},t}(s.a.Component);p.propTypes={siteTitle:o.a.string},p.defaultProps={siteTitle:""};var m=p,h=(a(165),function(e){var t=e.children;return s.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),s.a.createElement("div",{style:{margin:"0 auto",width:"100%",paddingTop:0}},t))},data:i})});h.propTypes={children:o.a.node.isRequired};t.a=h},163:function(e){e.exports={data:{site:{siteMetadata:{title:"Welcome to Alex's Midway"}}}}},164:function(e,t,a){e.exports={header:"Header-module--header--1QwaW",logo__link:"Header-module--logo__link--3e5rL",toggle:"Header-module--toggle--1SzWX",nav:"Header-module--nav--2aaCh",nav__mobile:"Header-module--nav__mobile--22c8U",nav__desktop:"Header-module--nav__desktop--JFScp",nav__item:"Header-module--nav__item--3Yf4P",nav__link:"Header-module--nav__link--Uko9_"}},165:function(e,t,a){},166:function(e){e.exports={data:{site:{siteMetadata:{title:"Welcome to Alex's Midway",description:"a simple personal blog",author:"Alex Wang"}}}}},167:function(e,t,a){"use strict";var i=a(5);t.__esModule=!0,t.default=void 0;var r,s=i(a(8)),n=i(a(37)),o=i(a(77)),l=i(a(56)),d=i(a(0)),c=i(a(1)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},m=[];var h=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){m.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),m.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",s=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+i+r+"<img "+o+l+t+n+s+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},v=d.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,r=e.onError,s=(0,o.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({},s,{onLoad:i,onError:r,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});v.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!1,s=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,r=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:r,fadeIn:s,hasNoScript:l,seenBefore:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)((0,n.default)(a))),a.handleRef=a.handleRef.bind((0,n.default)((0,n.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:p(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,s=void 0===r?{}:r,n=e.imgStyle,o=void 0===n?{}:n,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,h=e.fixed,y=e.backgroundColor,w=e.Tag,b="boolean"==typeof y?"lightgray":y,E=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),S=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),_={title:t,alt:this.state.isVisible?"":a,style:E,className:p};if(m){var N=m;return d.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(N.srcSet)},d.default.createElement(w,{style:{width:"100%",paddingBottom:100/N.aspectRatio+"%"}}),N.base64&&d.default.createElement(v,(0,l.default)({src:N.base64},_)),N.tracedSVG&&d.default.createElement(v,(0,l.default)({src:N.tracedSVG},_)),b&&d.default.createElement(w,{title:t,style:{backgroundColor:b,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,N.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:N.srcSetWebp,sizes:N.sizes}),d.default.createElement("source",{srcSet:N.srcSet,sizes:N.sizes}),d.default.createElement(v,{alt:a,title:t,src:N.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},N))}}))}if(h){var k=h,L=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},s);return"inherit"===s.display&&delete L.display,d.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:L,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},k.base64&&d.default.createElement(v,(0,l.default)({src:k.base64},_)),k.tracedSVG&&d.default.createElement(v,(0,l.default)({src:k.tracedSVG},_)),b&&d.default.createElement(w,{title:t,style:{backgroundColor:b,width:k.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:k.height}}),this.state.isVisible&&d.default.createElement("picture",null,k.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),d.default.createElement("source",{srcSet:k.srcSet,sizes:k.sizes}),d.default.createElement(v,{alt:a,title:t,width:k.width,height:k.height,src:k.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:k.width,height:k.height},k))}}))}return null},t}(d.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),b=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:w,sizes:b,fixed:w,fluid:b,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string};var E=y;t.default=E},168:function(e,t,a){"use strict"},171:function(e,t,a){"use strict";var i=a(0),r=a.n(i),s=a(36),n=a(186),o=a.n(n),l=function(e){var t=e.node,a=e.showExcerpt,i=void 0===a||a,n=e.showButton,l=void 0===n||n;return r.a.createElement("div",{className:o.a.container},r.a.createElement(s.Link,{className:o.a.entry,to:t.fields.slug},r.a.createElement("span",{className:o.a.date},t.frontmatter.date),r.a.createElement("h3",{className:o.a.title},t.frontmatter.title),i&&r.a.createElement("p",{className:o.a.excerpt},t.excerpt)),l&&r.a.createElement(s.Link,{className:o.a.button,to:t.fields.slug},r.a.createElement("span",{className:o.a.arrow},"Read")))},d=function(e){var t=e.year,a=e.postsInYear,i=void 0===a?[]:a;return r.a.createElement("section",{className:o.a.yearPostsContainer},r.a.createElement("h1",{className:o.a.year},t),i?i.map(function(e){return r.a.createElement("div",{key:e.node.id,className:o.a.postPreviewWrapper},r.a.createElement(l,{key:e.node.id,node:e.node,showExcerpt:!1}))}):r.a.createElement("h2",null,"暂无"))},c=l;a.d(t,"a",function(){return d});t.b=c},186:function(e,t,a){e.exports={container:"PostPreview-module--container--3p5gs",entry:"PostPreview-module--entry--3FBUO",date:"PostPreview-module--date--3au0S",title:"PostPreview-module--title--2l4di",excerpt:"PostPreview-module--excerpt--2yUmg",button:"PostPreview-module--button--SjqV2",arrow:"PostPreview-module--arrow--21XKp",yearPostsContainer:"PostPreview-module--yearPostsContainer--1EW2b",year:"PostPreview-module--year--1QUNi",postPreviewWrapper:"PostPreview-module--postPreviewWrapper--QhcY3"}}}]);
//# sourceMappingURL=1-4e44ee40e6e0e8aace72.js.map