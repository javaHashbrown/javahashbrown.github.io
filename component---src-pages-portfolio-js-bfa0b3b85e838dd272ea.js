(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return d});var i=a(0),r=a.n(i),n=a(148),s=a(147),l=a(152),o=a.n(l);a(153);t.default=function(e){var t=e.data;return r.a.createElement(n.a,null,r.a.createElement(s.a,{title:"Portfolio"}),r.a.createElement("section",null,r.a.createElement(o.a,{style:{width:"100%",height:"100vh"},fluid:t.bgImg.childImageSharp.fluid,alt:"paul-volkmer-638816-unsplash"}),r.a.createElement("div",{style:{position:"absolute",top:"35%",left:"0",right:"0",width:"100%",margin:"auto",padding:"0 2rem"}},r.a.createElement("div",{style:{color:"white",textTransform:"uppercase",textShadow:"1px 1px 0 #011",padding:"0 2rem"}},r.a.createElement("h2",{style:{textAlign:"center",fontWeight:400,letterSpacing:"0.2rem",fontSize:"2.9rem"}},"Coming Soon")))))};var d="2653033272"},147:function(e,t,a){"use strict";var i=a(0),r=a.n(i),n=a(1),s=a.n(n),l=a(154),o=a.n(l),d=a(32),c=function(e){var t=e.description,a=e.lang,i=e.meta,n=e.keywords,s=e.title;return r.a.createElement(d.StaticQuery,{query:u,render:function(e){var l=e.site,d=t||l.siteMetadata.description;return r.a.createElement(o.a,{htmlAttributes:{lang:a},titleTemplate:"%s | "+l.siteMetadata.title,defaultTitle:s,meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(n.length>0?{name:"keywords",content:n.join(", ")}:[]).concat(i)},r.a.createElement("title",null,s))}})};c.defaultProps={lang:"zh_CN",meta:[],keywords:[]},c.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=c;var u="1025518380"},148:function(e,t,a){"use strict";var i=a(149),r=a(0),n=a.n(r),s=a(1),l=a.n(s),o=a(32),d=a(6),c=a.n(d),u=a(150),f=a.n(u),p=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleNav=function(){a.setState({showNav:!a.state.showNav})},a.state={showNav:!1},a}return c()(t,e),t.prototype.render=function(){var e=this.state.showNav;return n.a.createElement("header",{className:f.a.header},n.a.createElement("div",null,n.a.createElement(o.Link,{className:f.a.logo__link,to:"/"},this.props.siteTitle)),n.a.createElement("div",{className:f.a.toggle,onClick:this.toggleNav},"☰"),n.a.createElement("nav",{className:f.a.nav},e&&n.a.createElement("ul",{className:f.a.nav__mobile},n.a.createElement("li",{className:f.a.nav__item},n.a.createElement(o.Link,{to:"/",className:f.a.nav__link},"home")),n.a.createElement("li",{className:f.a.nav__item},n.a.createElement(o.Link,{to:"/Blog",className:f.a.nav__link},"blog")),n.a.createElement("li",{className:f.a.nav__item},n.a.createElement(o.Link,{to:"/Portfolio",className:f.a.nav__link},"portfolio"))),n.a.createElement("div",{className:f.a.nav__desktop},n.a.createElement(o.Link,{to:"/",className:f.a.nav__link},"home"),n.a.createElement(o.Link,{to:"/Blog",className:f.a.nav__link},"blog"),n.a.createElement(o.Link,{to:"/Portfolio",className:f.a.nav__link},"portfolio"))))},t}(n.a.Component);p.propTypes={siteTitle:l.a.string},p.defaultProps={siteTitle:""};var m=p,h=(a(151),function(e){var t=e.children;return n.a.createElement(o.StaticQuery,{query:"755544856",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),n.a.createElement("div",{style:{margin:"0 auto",width:"100%",paddingTop:0}},t))},data:i})});h.propTypes={children:l.a.node.isRequired};t.a=h},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Alex's Midway"}}}}},150:function(e,t,a){e.exports={header:"Header-module--header--1QwaW",logo__link:"Header-module--logo__link--3e5rL",toggle:"Header-module--toggle--1SzWX",nav:"Header-module--nav--2aaCh",nav__mobile:"Header-module--nav__mobile--22c8U",nav__desktop:"Header-module--nav__desktop--JFScp",nav__item:"Header-module--nav__item--3Yf4P",nav__link:"Header-module--nav__link--Uko9_"}},151:function(e,t,a){},152:function(e,t,a){"use strict";var i=a(7);t.__esModule=!0,t.default=void 0;var r,n=i(a(6)),s=i(a(33)),l=i(a(69)),o=i(a(70)),d=i(a(0)),c=i(a(1)),u=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!f[a]||(f[a]=!0,!1)},m=[];var h=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){m.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),m.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+i+r+"<img "+l+o+t+s+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},v=d.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,r=e.onError,n=(0,l.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,o.default)({},n,{onLoad:i,onError:r,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});v.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!0,n=!1,l=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!1,n=!0),"undefined"==typeof window&&(i=!1,r=!1),t.critical&&(i=!0,r=!1,n=!1);var c=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:r,IOSupported:n,fadeIn:l,hasNoScript:c,seenBefore:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){t.setState({isVisible:!0})})},a.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,l=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,h=e.fixed,y=e.backgroundColor,b=e.Tag,w="boolean"==typeof y?"lightgray":y,E=(0,o.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},l,f),S=(0,o.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},l),_={title:t,alt:this.state.isVisible?"":a,style:E,className:p};if(m){var k=m;return d.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(k.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/k.aspectRatio+"%"}}),k.base64&&d.default.createElement(v,(0,o.default)({src:k.base64},_)),k.tracedSVG&&d.default.createElement(v,(0,o.default)({src:k.tracedSVG},_)),w&&d.default.createElement(b,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,k.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),d.default.createElement("source",{srcSet:k.srcSet,sizes:k.sizes}),d.default.createElement(v,{alt:a,title:t,src:k.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t},k))}}))}if(h){var N=h,L=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:N.width,height:N.height},n);return"inherit"===n.display&&delete L.display,d.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:L,ref:this.handleRef,key:"fixed-"+JSON.stringify(N.srcSet)},N.base64&&d.default.createElement(v,(0,o.default)({src:N.base64},_)),N.tracedSVG&&d.default.createElement(v,(0,o.default)({src:N.tracedSVG},_)),w&&d.default.createElement(b,{title:t,style:{backgroundColor:w,width:N.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:N.height}}),this.state.isVisible&&d.default.createElement("picture",null,N.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:N.srcSetWebp,sizes:N.sizes}),d.default.createElement("source",{srcSet:N.srcSet,sizes:N.sizes}),d.default.createElement(v,{alt:a,title:t,width:N.width,height:N.height,src:N.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t,width:N.width,height:N.height},N))}}))}return null},t}(d.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),w=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:b,sizes:w,fixed:b,fluid:w,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,Tag:c.default.string};var E=y;t.default=E},153:function(e,t,a){"use strict"}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-bfa0b3b85e838dd272ea.js.map