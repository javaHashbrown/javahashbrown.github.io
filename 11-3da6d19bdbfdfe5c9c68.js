(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{152:function(e,t,a){"use strict";var i=a(7);t.__esModule=!0,t.default=void 0;var s,r=i(a(6)),l=i(a(33)),n=i(a(69)),o=i(a(70)),d=i(a(0)),u=i(a(1)),c=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},h=function(e){var t=c(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!f[a]||(f[a]=!0,!1)},p=[];var g=function(e,t){(void 0===s&&"undefined"!=typeof window&&window.IntersectionObserver&&(s=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),s).observe(e),p.push([e,t])},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",s=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",r=e.title?'title="'+e.title+'" ':"",l=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+i+s+"<img "+n+o+t+l+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=d.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,s=e.onError,r=(0,n.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,o.default)({},r,{onLoad:i,onError:s,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});b.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,s=!0,r=!1,n=t.fadeIn,o=h(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,s=!1,r=!0),"undefined"==typeof window&&(i=!1,s=!1),t.critical&&(i=!0,s=!1,r=!1);var u=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:s,IOSupported:r,fadeIn:n,hasNoScript:u,seenBefore:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,l.default)((0,l.default)(a))),a.handleRef=a.handleRef.bind((0,l.default)((0,l.default)(a))),a}(0,r.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&g(e,function(){t.setState({isVisible:!0})})},a.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,i=e.className,s=e.style,r=void 0===s?{}:s,l=e.imgStyle,n=void 0===l?{}:l,u=e.placeholderStyle,f=void 0===u?{}:u,h=e.placeholderClassName,p=e.fluid,g=e.fixed,y=e.backgroundColor,S=e.Tag,w="boolean"==typeof y?"lightgray":y,v=(0,o.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},n,f),E=(0,o.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},n),L={title:t,alt:this.state.isVisible?"":a,style:v,className:h};if(p){var I=p;return d.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(I.srcSet)},d.default.createElement(S,{style:{width:"100%",paddingBottom:100/I.aspectRatio+"%"}}),I.base64&&d.default.createElement(b,(0,o.default)({src:I.base64},L)),I.tracedSVG&&d.default.createElement(b,(0,o.default)({src:I.tracedSVG},L)),w&&d.default.createElement(S,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,I.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),d.default.createElement("source",{srcSet:I.srcSet,sizes:I.sizes}),d.default.createElement(b,{alt:a,title:t,src:I.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,o.default)({alt:a,title:t},I))}}))}if(g){var R=g,z=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},r);return"inherit"===r.display&&delete z.display,d.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:z,ref:this.handleRef,key:"fixed-"+JSON.stringify(R.srcSet)},R.base64&&d.default.createElement(b,(0,o.default)({src:R.base64},L)),R.tracedSVG&&d.default.createElement(b,(0,o.default)({src:R.tracedSVG},L)),w&&d.default.createElement(S,{title:t,style:{backgroundColor:w,width:R.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:R.height}}),this.state.isVisible&&d.default.createElement("picture",null,R.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),d.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),d.default.createElement(b,{alt:a,title:t,width:R.width,height:R.height,src:R.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,o.default)({alt:a,title:t,width:R.width,height:R.height},R))}}))}return null},t}(d.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var S=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string}),w=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string});y.propTypes={resolutions:S,sizes:w,fixed:S,fluid:w,fadeIn:u.default.bool,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,Tag:u.default.string};var v=y;t.default=v},157:function(e,t,a){var i=a(25).f,s=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in s||a(16)&&i(s,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},167:function(e,t,a){}}]);
//# sourceMappingURL=11-3da6d19bdbfdfe5c9c68.js.map