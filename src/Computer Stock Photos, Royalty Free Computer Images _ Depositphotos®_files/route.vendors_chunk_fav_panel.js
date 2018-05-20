(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{1013:function(t,e,i){"use strict";var n=i(1)(i(4)),r=i(0),a=i(1050),o=i(1530),s=a.Model.extend({constructor:function(t,e){void 0===e&&(e={}),this.app=e.app||e.collection&&e.collection.app,this.on({request:this.onRequest,sync:this.onSync,error:this.onError}),a.Model.call(this,t,e)},getQueryParams:function(){return r.clone(this.attributes)},exportSettings:function(t){return t?r.pick(this.attributes,t):r.clone(this.attributes)},importSettings:function(){},isBulkAllowed:function(){return!0},clone:function(t){return new this.constructor(this.attributes,t)},onRequest:function(){this.pending=!0},onSync:function(t,e,i){this.pending=!1,e.errors&&this.trigger("error",t,e,i)},onError:function(){this.pending=!1},secureSet:function(t,e,i){if(null===t)return!1;var a,o=i;"object"==typeof t?(a=t,o=e):(a={})[t]=e;var s=r.pick(a,r.intersection(r.keys(a),r.keys(this.attributes)));return!r.isEmpty(s)&&this.set(s,(0,n.default)(o||{},{validate:!0}))},secureSetParsed:function(t){return this.secureSet(this.parse(t))},resetToDefaults:function(t,e){var i=t?r.pick(this.defaults,t):this.defaults;return this.set(i,e)},getNonDefaults:function(t){var e=this,i=t?r.pick(this.attributes,t):this.attributes,n={};return r.each(i,function(t,i){r.isEqual(e.defaults[i],t)||(n[i]=t)}),n},hasChangedExcept:function(t){var e=r.isArray(t)?t:[t];return r.size(r.omit(this.hasChanged(),e))>0},serialize:function(){return r.clone(this.attributes)},toAPI:function(t,e){return{}}});(0,n.default)(s.prototype,o.mixin),t.exports=s},1016:function(t,e){t.exports={indexOf:function(t,e){var i,n;if(Array.prototype.indexOf)return t.indexOf(e);for(i=0,n=t.length;i<n;i++)if(t[i]===e)return i;return-1},forEach:function(t,e,i){var n,r;if(Array.prototype.forEach)return t.forEach(e,i);for(n=0,r=t.length;n<r;n++)e.call(i,t[n],n,t)},trim:function(t){return String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")},spaceIndex:function(t){var e=/\s|\n|\t/.exec(t);return e?e.index:-1}}},1017:function(t,e,i){var n=i(1053),r=i(1550);for(var a in(e=t.exports=function(t,e){return new r(e).process(t)}).FilterCSS=r,n)e[a]=n[a];"undefined"!=typeof window&&(window.filterCSS=t.exports)},1050:function(t,e,i){"use strict";var n=i(16);n.oldSync=n.oldSync||n.sync,n.sync=function(t,e,i){if(!e.getQueryParams&&!i.getQueryParams||e.oldSync)return n.oldSync.call(this,t,e,i);if(!e.app){if("undefined"==typeof window||!window.app)throw new Error('Model\'s "app" object is not defined');e.app=window.app}return e.app.fetcher.request(t,e,i)},t.exports=n},1051:function(t,e,i){var n=i(1016);function r(t){var e=n.spaceIndex(t);if(-1===e)var i=t.slice(1,-1);else i=t.slice(1,e+1);return"/"===(i=n.trim(i).toLowerCase()).slice(0,1)&&(i=i.slice(1)),"/"===i.slice(-1)&&(i=i.slice(0,-1)),i}function a(t){return"</"===t.slice(0,2)}var o=/[^a-zA-Z0-9_:\.\-]/gim;function s(t,e){for(;e<t.length;e++){var i=t[e];if(" "!==i)return"="===i?e:-1}}function l(t,e){for(;e>0;e--){var i=t[e];if(" "!==i)return"="===i?e:-1}}function c(t){return function(t){return'"'===t[0]&&'"'===t[t.length-1]||"'"===t[0]&&"'"===t[t.length-1]}(t)?t.substr(1,t.length-2):t}e.parseTag=function(t,e,i){"user strict";var n="",o=0,s=!1,l=!1,c=0,u=t.length,h="",p="";for(c=0;c<u;c++){var g=t.charAt(c);if(!1===s){if("<"===g){s=c;continue}}else if(!1===l){if("<"===g){n+=i(t.slice(o,c)),s=c,o=c;continue}if(">"===g){n+=i(t.slice(o,s)),h=r(p=t.slice(s,c+1)),n+=e(s,n.length,h,p,a(p)),o=c+1,s=!1;continue}if(('"'===g||"'"===g)&&"="===t.charAt(c-1)){l=g;continue}}else if(g===l){l=!1;continue}}return o<t.length&&(n+=i(t.substr(o))),n},e.parseAttr=function(t,e){"user strict";var i=0,r=[],a=!1,u=t.length;function h(t,i){if(!((t=(t=n.trim(t)).replace(o,"").toLowerCase()).length<1)){var a=e(t,i||"");a&&r.push(a)}}for(var p=0;p<u;p++){var g,f=t.charAt(p);if(!1!==a||"="!==f)if(!1===a||p!==i||'"'!==f&&"'"!==f||"="!==t.charAt(p-1)){if(/\s|\n|\t/.test(f)){if(t=t.replace(/\s|\n|\t/g," "),!1===a){if(-1===(g=s(t,p))){h(n.trim(t.slice(i,p))),a=!1,i=p+1;continue}p=g-1;continue}if(-1===(g=l(t,p-1))){h(a,c(n.trim(t.slice(i,p)))),a=!1,i=p+1;continue}}}else{if(-1===(g=t.indexOf(f,p+1)))break;h(a,n.trim(t.slice(i+1,g))),a=!1,i=(p=g)+1}else a=t.slice(i,p),i=p+1}return i<t.length&&(!1===a?h(t.slice(i)):h(a,c(n.trim(t.slice(i))))),n.trim(r.join(" "))}},1052:function(t,e){t.exports={indexOf:function(t,e){var i,n;if(Array.prototype.indexOf)return t.indexOf(e);for(i=0,n=t.length;i<n;i++)if(t[i]===e)return i;return-1},forEach:function(t,e,i){var n,r;if(Array.prototype.forEach)return t.forEach(e,i);for(n=0,r=t.length;n<r;n++)e.call(i,t[n],n,t)},trim:function(t){return String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")},trimRight:function(t){return String.prototype.trimRight?t.trimRight():t.replace(/(\s*$)/g,"")}}},1053:function(t,e){function i(){var t={"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,"animation-duration":!1,"animation-fill-mode":!1,"animation-iteration-count":!1,"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,azimuth:!1,"backface-visibility":!1,background:!0,"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,"border-bottom-style":!0,"border-bottom-width":!0,"border-collapse":!0,"border-color":!0,"border-image":!0,"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,"border-style":!0,"border-top":!0,"border-top-color":!0,"border-top-left-radius":!0,"border-top-right-radius":!0,"border-top-style":!0,"border-top-width":!0,"border-width":!0,bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,"column-rule-color":!1,"column-rule-style":!1,"column-rule-width":!1,"column-span":!1,"column-width":!1,columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,float:!1,"float-offset":!1,"flood-color":!1,"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,"grid-auto-columns":!1,"grid-auto-flow":!1,"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,"lighting-color":!0,"line-box-contain":!1,"line-break":!1,"line-grid":!1,"line-height":!1,"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,"mask-box-width":!1,"mask-clip":!1,"mask-image":!1,"mask-origin":!1,"mask-position":!1,"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,"overflow-x":!1,"overflow-y":!1,padding:!0,"padding-bottom":!0,"padding-left":!0,"padding-right":!0,"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,"shape-image-threshold":!1,"shape-outside":!1,"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,"text-emphasis-position":!0,"text-emphasis-style":!0,"text-height":!0,"text-indent":!0,"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,"voice-range":!1,"voice-rate":!1,"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1};return t}var n=/javascript\s*\:/gim;e.whiteList=i(),e.getDefaultWhiteList=i,e.onAttr=function(t,e,i){},e.onIgnoreAttr=function(t,e,i){},e.safeAttrValue=function(t,e){return n.test(e)?"":e}},1054:function(t,e,i){var n=i(1017).FilterCSS,r=i(1017).getDefaultWhiteList,a=i(1016);function o(){return{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","loop","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],sup:[],strong:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","loop","preload","src","height","width"]}}var s=new n;function l(t){return t.replace(c,"&lt;").replace(u,"&gt;")}var c=/</g,u=/>/g,h=/"/g,p=/&quot;/g,g=/&#([a-zA-Z0-9]*);?/gim,f=/&colon;?/gim,d=/&newline;?/gim,m=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,v=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,b=/u\s*r\s*l\s*\(.*/gi;function y(t){return t.replace(h,"&quot;")}function w(t){return t.replace(p,'"')}function x(t){return t.replace(g,function(t,e){return"x"===e[0]||"X"===e[0]?String.fromCharCode(parseInt(e.substr(1),16)):String.fromCharCode(parseInt(e,10))})}function P(t){return t.replace(f,":").replace(d," ")}function k(t){for(var e="",i=0,n=t.length;i<n;i++)e+=t.charCodeAt(i)<32?" ":t.charAt(i);return a.trim(e)}function S(t){return t=k(t=P(t=x(t=w(t))))}function C(t){return t=l(t=y(t))}var A=/<!--[\s\S]*?-->/g;e.whiteList={a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","loop","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],sup:[],strong:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","loop","preload","src","height","width"]},e.getDefaultWhiteList=o,e.onTag=function(t,e,i){},e.onIgnoreTag=function(t,e,i){},e.onTagAttr=function(t,e,i){},e.onIgnoreTagAttr=function(t,e,i){},e.safeAttrValue=function(t,e,i,n){if(i=S(i),"href"===e||"src"===e){if("#"===(i=a.trim(i)))return"#";if("http://"!==i.substr(0,7)&&"https://"!==i.substr(0,8)&&"mailto:"!==i.substr(0,7)&&"tel:"!==i.substr(0,4)&&"#"!==i[0]&&"/"!==i[0])return""}else if("background"===e){if(m.lastIndex=0,m.test(i))return""}else if("style"===e){if(v.lastIndex=0,v.test(i))return"";if(b.lastIndex=0,b.test(i)&&(m.lastIndex=0,m.test(i)))return"";!1!==n&&(i=(n=n||s).process(i))}return i=C(i)},e.escapeHtml=l,e.escapeQuote=y,e.unescapeQuote=w,e.escapeHtmlEntities=x,e.escapeDangerHtml5Entities=P,e.clearNonPrintableCharacter=k,e.friendlyAttrValue=S,e.escapeAttrValue=C,e.onIgnoreTagStripAll=function(){return""},e.StripTagBody=function(t,e){"function"!=typeof e&&(e=function(){});var i=!Array.isArray(t),n=[],r=!1;return{onIgnoreTag:function(o,s,l){if(function(e){return!!i||-1!==a.indexOf(t,e)}(o)){if(l.isClosing){var c="[/removed]",u=l.position+c.length;return n.push([!1!==r?r:l.position,u]),r=!1,c}return r||(r=l.position),"[removed]"}return e(o,s,l)},remove:function(t){var e="",i=0;return a.forEach(n,function(n){e+=t.slice(i,n[0]),i=n[1]}),e+=t.slice(i)}}},e.stripCommentTag=function(t){return t.replace(A,"")},e.stripBlankChar=function(t){var e=t.split("");return(e=e.filter(function(t){var e=t.charCodeAt(0);return!(127===e||e<=31&&10!==e&&13!==e)})).join("")},e.cssFilter=s,e.getDefaultCSSWhiteList=r},1528:function(t,e,i){"use strict";var n=i(1)(i(4)),r=i(0),a=i(1013),o=[28,42,56,70];t.exports=a.extend({defaults:{route:"",offset:0,limit:o[0],page:1,totalItems:0,totalPages:0,pagerLimit:1,schema:{}},validation:{offset:{required:!0,pattern:/^[0-9]\d*$/,min:0,fn:function(t){if(t<0||this.get("totalItems")&&t>this.get("totalItems"))return"Invalid value for offset, given: "+t}},page:{required:!0,pattern:/^[1-9]\d*$/,min:1,fn:function(t){if(this.get("totalPages")&&t>this.get("totalPages"))return"Invalid value for page, given: "+t}}},getLimits:function(){return o},getQueryParams:function(){return this.pick(["limit","offset"])},initialize:function(t){t&&this.mutateOffsetByPage(t.page),this.on("change",this.calculate)},parse:function(t){return r.pick(t,r.keys(this.defaults))},calculate:function(t){r.has(t.changed,"page")&&this.mutateOffsetByPage(t.changed.page),(r.has(t.changed,"offset")||r.has(t.changed,"limit"))&&(this.attributes.page=Math.floor(parseInt(this.get("offset")/this.get("limit"),10))+1),this.attributes.totalPages=Math.ceil(parseFloat(this.get("totalItems")/this.get("limit")))},mutateOffsetByPage:function(t){this.attributes.offset=Math.max(parseInt(t,10)-1,0)*this.get("limit")},getSchema:function(){var t=this;if(!r.isEmpty(this.get("schema")))return this.get("schema");var e=function(e){return e<=0||e>t.get("totalPages")?null:t.getUrl({page:e})};return{current:this.getUrl(),buttons:{first:{href:e(this.validation.page.min),page:this.validation.page.min,active:this.get("page")!==this.validation.page.min},last:{href:e(this.get("totalPages")),page:this.get("totalPages"),active:this.get("page")!==this.get("totalPages")},prev:{href:e(this.getPrevPage()),page:this.getPrevPage(),active:this.hasPrevPage()},next:{href:e(this.getNextPage()),page:this.getNextPage(),active:this.hasNextPage()}}}},getUrl:function(t){void 0===t&&(t={});var e=(0,n.default)(this.getUrlParams(),this.serialize(),t);return this.app.makeUrl(e,this.getUrlQueryParams())},getUrlParams:function(){},getUrlQueryParams:function(){},hasNextPage:function(t){return void 0===t&&(t=this.get("page")),t<this.get("totalPages")},hasPrevPage:function(t){return void 0===t&&(t=this.get("page")),t>this.validation.page.min},getPrevPage:function(){return Math.max(parseInt(this.get("page"),10)-1,1)},getNextPage:function(){return Math.min(parseInt(this.get("page"),10)+1,this.get("totalPages"))},getNextOffset:function(){var t=parseInt(this.get("offset"),10),e=parseInt(this.get("limit"),10);return Math.min(t+e,this.get("totalItems"))}})},1529:function(t,e,i){"use strict";var n=i(1050),r=i(1013);t.exports=n.Collection.extend({model:r,constructor:function(t,e){var i=this;void 0===e&&(e={}),this.app=e.app,this.on("destroy",function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return i.trigger.apply(i,["sync"].concat(e))}),n.Collection.call(this,t,e)},clone:function(t){return new this.constructor(this.models,{model:this.model,comparator:this.comparator},t)},getQueryParams:function(){return{}},_prepareModel:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];var r=n.Collection.prototype._prepareModel.apply(this,e);return r.app=this.app,r},toPLAIN:function(t){return this.models.map(function(e){return e.get(t||e.idAttribute)})},serialize:function(t){return void 0===t&&(t={}),this.models.map(function(e){return e.serialize(t)})},toAPI:function(t,e){return{}},isBulkAllowed:function(){return!0},sortByOrder:function(t,e){void 0===t&&(t=[]),void 0===e&&(e={}),this.models.sort(function(e,i){return t.includes(e.id)&&t.includes(i.id)?t.indexOf(e.id)-t.indexOf(i.id):0}),e.silent||this.trigger("sort",this,e)}})},1530:function(t,e,i){"use strict";var n=i(1)(i(4)),r=i(161);(0,n.default)(r.validators,{boolean:function(t,e,i,n){if("boolean"!=typeof t)return this.format("{0} must be boolean",this.formatLabel(e,n))}}),(0,n.default)(r.patterns,{email:/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i}),t.exports=r},1531:function(t,e,i){"use strict";var n=i(1)(i(4)),r=i(0),a=i(1013),o=i(1529),s=a.extend({defaults:{limit:60,offset:0}}),l=i(1528),c=a.extend({});t.exports=o.extend({storageKey:"pageable",endless:!1,pending:!1,byPageCache:{},modeIdToPageLinks:{},lastSyncOptions:{},getQueryParams:function(){var t=r.result(this.filters,"getQueryParams"),e=r.result(this.pager,"getQueryParams"),i=r.result(this.sorting,"getQueryParams");return(0,n.default)(t,e,i)},initialize:function(t,e){var i=this;void 0===e&&(e={}),(0,n.default)(this,r.pick(e,["url","route","endless"])),this.initFilters(e.filters),this.endless||r.defaults(e.pager,{limit:r.result(this.app.settings.get(this.storageKey),"limit")}),this.pager=new l(e.pager,{app:this.app}),e.pager&&e.pager.getUrlQueryParams&&(this.pager.getUrlQueryParams=function(){return e.pager.getUrlQueryParams()}),this.pager.getUrlParams=function(){return i.getQueryParams()},this.sorting=new c(e.sorting,{app:this.app}),this.listenTo(this.filters,"change",this.filtersChangeListener),this.listenTo(this.pager,"change",this.onPagerChange),this.listenTo(this.sorting,"change",this.onSortingChange),this.on({request:this.onCollectionRequest,sync:this.onCollectionSync,update:this.onCollectionUpdate,reset:this.onCollectionUpdate,sort:this.invalidateCaches})},initFilters:function(t){this.filters=t instanceof a?t:new s(t,{app:this.app})},fetch:function(t){if(this.pending)return!1;var e=(0,n.default)({remove:!this.endless,reset:r.result(t,"reset",this.isEmpty()),page:this.pager.get("page")},t);return this.endless&&(e.add=!0),this.endless&&this.pager.get("page")<this.pager.previous("page")&&(e.at=0),o.prototype.fetch.call(this,e)},serializePartial:function(){var t=this;return this.endless&&!r.result(this.lastSyncOptions,"reset")?r.map(this.getCachedPageIds(this.lastSyncOptions.page),function(e){return t.get(e).serialize()}):o.prototype.serialize.call(this)},filtersChangeListener:function(t,e){var i=r.pick(t.changed,["limit","offset"]);r.isEmpty(i)||this.setPager(i,(0,n.default)({pageAbleInnerSync:!0},e)),e.pageAbleInnerSync||(this.resetCaches(),this.onFiltersChange(t,e))},onFiltersChange:function(){},onPagerChange:function(t,e){e.pageAbleInnerSync||!t.changed.page&&!t.changed.limit||this.hasCachedPage(t.changed.page)||this.fetch(e)},onSortingChange:function(){},onCollectionRequest:function(){this.pending=!0,this.lastSyncOptions={}},onCollectionSync:function(t,e,i){this.pending=!1,this.lastSyncOptions=i},onCollectionUpdate:function(){this.setPager({totalItems:this.totalItems}),this.invalidateCaches()},resetCaches:function(){this.modeIdToPageLinks={},this.byPageCache={}},invalidateCaches:function(){if(this.resetCaches(),this.endless)for(var t=Math.max(this.pager.get("limit"),1),e=0;e<this.models.length;e+=1){var i=Math.ceil((e+1)/t),n=this.models[e];this.modeIdToPageLinks[n.id]=i,this.byPageCache[i]?this.byPageCache[i].push(n.id):this.byPageCache[i]=[n.id]}},hasCachedPage:function(t){return!r.isEmpty(this.byPageCache[parseInt(t,10)])},getCachedPageIds:function(t){return this.byPageCache[parseInt(t,10)]},getPageByItemId:function(t){return this.modeIdToPageLinks[parseInt(t,10)]},getFilters:function(t){return r.isArray(t)?this.filters.pick(t):this.filters.get(t)},setFilters:function(){var t;return(t=this.filters).secureSet.apply(t,arguments)},getPager:function(t){return r.isArray(t)?this.pager.pick(t):this.pager.get(t)},setPager:function(){var t;return(t=this.pager).secureSet.apply(t,arguments)},getSorting:function(t){return r.isArray(t)?this.sorting.pick(t):this.sorting.get(t)},setSorting:function(){var t;return(t=this.sorting).secureSet.apply(t,arguments)},fetchPage:function(t,e){this.setPager({page:t?parseInt(t,10):this.getPager("page")},e),this.pager.hasChanged()||this.fetch(e)},fetchPrevPage:function(){!this.pending&&this.pager.hasPrevPage()&&this.setPager({page:this.pager.getPrevPage()})},fetchNextPage:function(t){void 0===t&&(t={}),!this.pending&&this.pager.hasNextPage()&&this.setPager({page:this.pager.getNextPage()},(0,n.default)({},t))}})},1548:function(t,e,i){var n=i(1017).FilterCSS,r=i(1054),a=i(1051),o=a.parseTag,s=a.parseAttr,l=i(1016);function c(t){return void 0===t||null===t}function u(t){(t=function(t){var e={};for(var i in t)e[i]=t[i];return e}(t||{})).stripIgnoreTag&&(t.onIgnoreTag&&console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'),t.onIgnoreTag=r.onIgnoreTagStripAll),t.whiteList=t.whiteList||r.whiteList,t.onTag=t.onTag||r.onTag,t.onTagAttr=t.onTagAttr||r.onTagAttr,t.onIgnoreTag=t.onIgnoreTag||r.onIgnoreTag,t.onIgnoreTagAttr=t.onIgnoreTagAttr||r.onIgnoreTagAttr,t.safeAttrValue=t.safeAttrValue||r.safeAttrValue,t.escapeHtml=t.escapeHtml||r.escapeHtml,this.options=t,!1===t.css?this.cssFilter=!1:(t.css=t.css||{},this.cssFilter=new n(t.css))}u.prototype.process=function(t){if(!(t=(t=t||"").toString()))return"";var e=this.options,i=e.whiteList,n=e.onTag,a=e.onIgnoreTag,u=e.onTagAttr,h=e.onIgnoreTagAttr,p=e.safeAttrValue,g=e.escapeHtml,f=this.cssFilter;e.stripBlankChar&&(t=r.stripBlankChar(t)),e.allowCommentTag||(t=r.stripCommentTag(t));var d=!1;if(e.stripIgnoreTagBody){d=r.StripTagBody(e.stripIgnoreTagBody,a);a=d.onIgnoreTag}var m=o(t,function(t,e,r,o,d){var m,v={sourcePosition:t,position:e,isClosing:d,isWhite:i.hasOwnProperty(r)};if(!c(m=n(r,o,v)))return m;if(v.isWhite){if(v.isClosing)return"</"+r+">";var b=function(t){var e=l.spaceIndex(t);if(-1===e)return{html:"",closing:"/"===t[t.length-2]};var i="/"===(t=l.trim(t.slice(e+1,-1)))[t.length-1];return i&&(t=l.trim(t.slice(0,-1))),{html:t,closing:i}}(o),y=i[r],w=s(b.html,function(t,e){var i,n=-1!==l.indexOf(y,t);return c(i=u(r,t,e,n))?n?(e=p(r,t,e,f))?t+'="'+e+'"':t:c(i=h(r,t,e,n))?void 0:i:i});o="<"+r;return w&&(o+=" "+w),b.closing&&(o+=" /"),o+=">"}return c(m=a(r,o,v))?g(o):m},g);return d&&(m=d.remove(m)),m},t.exports=u},1549:function(t,e,i){var n=i(1052);t.exports=function(t,e){";"!==(t=n.trimRight(t))[t.length-1]&&(t+=";");var i=t.length,r=!1,a=0,o=0,s="";function l(){if(!r){var i=n.trim(t.slice(a,o)),l=i.indexOf(":");if(-1!==l){var c=n.trim(i.slice(0,l)),u=n.trim(i.slice(l+1));if(c){var h=e(a,s.length,c,u,i);h&&(s+=h+"; ")}}}a=o+1}for(;o<i;o++){var c=t[o];if("/"===c&&"*"===t[o+1]){var u=t.indexOf("*/",o+2);if(-1===u)break;a=(o=u+1)+1,r=!1}else"("===c?r=!0:")"===c?r=!1:";"===c?r||l():"\n"===c&&l()}return n.trim(s)}},1550:function(t,e,i){var n=i(1053),r=i(1549);i(1052);function a(t){return void 0===t||null===t}function o(t){(t=function(t){var e={};for(var i in t)e[i]=t[i];return e}(t||{})).whiteList=t.whiteList||n.whiteList,t.onAttr=t.onAttr||n.onAttr,t.onIgnoreAttr=t.onIgnoreAttr||n.onIgnoreAttr,t.safeAttrValue=t.safeAttrValue||n.safeAttrValue,this.options=t}o.prototype.process=function(t){if(!(t=(t=t||"").toString()))return"";var e=this.options,i=e.whiteList,n=e.onAttr,o=e.onIgnoreAttr,s=e.safeAttrValue;return r(t,function(t,e,r,l,c){var u=i[r],h=!1;if(!0===u?h=u:"function"==typeof u?h=u(l):u instanceof RegExp&&(h=u.test(l)),!0!==h&&(h=!1),l=s(r,l)){var p,g={position:e,sourcePosition:t,source:c,isWhite:h};return h?a(p=n(r,l,g))?r+":"+l:p:a(p=o(r,l,g))?void 0:p}})},t.exports=o},1551:function(t,e,i){var n=i(1054),r=i(1051),a=i(1548);for(var o in(e=t.exports=function(t,e){return new a(e).process(t)}).FilterXSS=a,n)e[o]=n[o];for(var o in r)e[o]=r[o];"undefined"!=typeof window&&(window.filterXSS=t.exports)},573:function(t,e,i){"use strict";var n=i(0),r=i(593);t.exports=r.extend({name:"List",el:!1,templatePartial:function(){return"Setup templatePartial for "+this.name+".js"},collection:null,autoScrollToStart:!0,autoScrollPadding:150,endless:!1,__needPartialRender:!1,__partialPrepend:!1,__applyPartialTemplate:function(t,e){this.__partialPrepend?this.$el.prepend(t):this.$el.append(t),e.resolveWith(this,[this])},_applyTemplate:function(t,e,i){this.__needPartialRender?this.__applyPartialTemplate(t,i):r.prototype._applyTemplate.apply(this,[t,e,i])},__renderPartialTemplate:function(t,e){return this.templatePartial.call(this,e).trim()},renderTemplate:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return this.__needPartialRender?this.__renderPartialTemplate.apply(this,e):r.prototype.renderTemplate.apply(this,e)},initialize:function(){this.listenToCollection()},listenToCollection:function(){this.listenTo(this.collection,{update:this._onCollectionUpdate,reset:this._onCollectionReset})},scrollToStart:function(){if(!this.endless&&this.autoScrollToStart){var t=this.$el.offset().top-this.autoScrollPadding,e=Math.max(0,t);window.scrollTo(0,e)}},_onCollectionUpdate:function(t,e){this.__needPartialRender=this.endless,this.__partialPrepend=0===n.result(e,"at"),this.render(),this.scrollToStart()},_onCollectionReset:function(){this.__needPartialRender=!1,this.render(),this.scrollToStart()}})},593:function(t,e,i){"use strict";(function(e){var n=i(1)(i(4)),r=i(0),a=i(61),o=i(660),s=o.__super__.delegateEvents,l=o.__super__.undelegateEvents,c=/^(\S+)\s*(.*)$/;o.__super__.delegateEvents=function(){return e.browser?(s.apply(this,arguments),this.globals&&r.each(this.globals,function(t,e){if(r.isFunction(t)||(t=this[t]),t){var i=e.match(c);!function(t,e,i,n){if("window"===e)e=window;else if("document"===e)e=document;else{if("body"!==e&&""!==e)return;e="body"}Backbone.$(e).on(t+".delegateGlobals"+n.cid,i)}(i[1],i[2],r.bind(t,this),this)}},this),this):this},o.__super__.undelegateEvents=function(){return e.browser?(l.apply(this,arguments),this.globals&&(t=this,Backbone.$("body").off(".delegateGlobals"+t.cid),Backbone.$(document).off(".delegateGlobals"+t.cid),Backbone.$(window).off(".delegateGlobals"+t.cid)),this):this;var t},t.exports=o.extend({serverRenderingEnabled:!0,nameWrappedSerialize:!1,hasPushState:"undefined"!=typeof window&&null!=window.history.pushState,constructor:function(t){this.options=(0,n.default)(this.options||{},t||{}),this.parseOptions(t),o.prototype.constructor.apply(this,arguments)},renderTemplate:function(t,e){var i,n=this.nameWrappedSerialize&&"string"==typeof this.nameWrappedSerialize?this.nameWrappedSerialize:this.name;return e.$it=this.nameWrappedSerialize?((i={})[n]=e,i):e,e.$tr=this.tr.bind(this),e.$empty=function(t){return!t.length},t.call(this,e).trim()},parseOptions:function(t){null!=(t=(0,n.default)(this.options,t||{})).app&&(this.app=this.options.app,this.cdnPath=t.app.cdnPath)},tr:function(){var t;return(t=this.app).tr.apply(t,arguments)},xss:function(t){return void 0===t&&(t=""),a(t.toString().trim())},makeUrl:function(t,i){return!this.app&&e.browser&&(this.app=window.app),this.app.makeUrl(t,i)},extractHTML:function(t){return t||this.serverRenderingEnabled?Backbone.$.html(this.render().el):'<div id="'+this.id+'"></div>'},findView:function(t){if(this.name&&this.name===t)return this;for(var e,i=function(t){return r.chain(t).map(function(t){return r.isArray(t)?t:[t]}).flatten().value()}(this.views),n=0;n<i.length;n+=1)if(i[n].name===t)e=i[n];else{if(e)break;e=i[n].findView(t)}return e},findViews:function(t){var e=[];this.name?this.name.toLowerCase()===t.toLowerCase()&&(this.name!==t&&console.warn("Invalid case in view.name:",this.name," seeking: ",t),e.push(this)):console.warn("Unnamed view found:",this);return r.each(this.views,function(i){r.isArray(i)&&r.each(i,function(i){e.push(i.findViews(t))})}),r.flatten(e)},beforeRender:function(){var t=this;if(t.__manager__)for(;t.__manager__.parent;)t=t.__manager__.parent;return t.options&&t.options.app&&(this.app=this.options.app=t.options.app),this.prepareRender()},afterRender:function(){e.browser&&(this.clientAfterRender(),this._bindInterceptClick(),this.trigger("clientAfterRender",this))},remove:function(){this.undelegateEvents(),o.__super__.remove.call(this)},clientAfterRender:function(){},prepareRender:function(){},setNotExistView:function(t,e,i){return void 0===i&&(i={}),void 0===this.getView(t)&&this.setView(t,new e((0,n.default)({app:this.app},i))),this.getView(t)},_bindInterceptClick:function(){},_interceptClick:function(t){var e=t.currentTarget.getAttribute("href");this.shouldInterceptClick(e,t)&&!0===this.app.router.redirectTo(e)&&t.preventDefault()},shouldInterceptClick:function(t,e){if(!t||!this.hasPushState||e.shiftKey)return!1;var i=t.split("#");return!(i.length>1&&i[0]===window.location.pathname)&&"/"===t.slice(0,1)&&"//"!==t.slice(0,2)}})}).call(this,i(5))}}]);