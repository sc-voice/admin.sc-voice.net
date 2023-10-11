import{ac as le,p as S,n as A,_ as bt,ad as ze,Y as U,g as fe,ae as _t,T as me,af as wt,y as Ct,c as f,l as _,q as c,C as Ne,W as Re,s as P,r as V,w as q,Q as kt,S as xt,a1 as oe,a7 as Oe,R as G,a2 as Lt,X as O,a8 as M,ag as Me,ah as Ce,ai as Pt,aj as At,e as Tt,b as Vt,L as ke,a0 as K,t as X,v as J,ak as Et,u as ge,al as It,am as $t,an as Bt,ao as xe,ap as zt,aq as Le,i as Q,f as Z,ar as $,h as Nt,o as He,A as Pe,as as Ae,at as Rt}from"./index-a12ab86c.js";const Ot=["top","bottom"],Mt=["start","end","left","right"];function xn(e,a){let[n,t]=e.split(" ");return t||(t=le(Ot,n)?"start":le(Mt,n)?"top":"center"),{side:Te(n,a),align:Te(t,a)}}function Te(e,a){return e==="start"?a?"right":"left":e==="end"?a?"left":"right":e}const I=S({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function De(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return A()({name:n??bt(ze(e.replace(/__/g,"-"))),props:{tag:{type:String,default:a},...I()},setup(t,i){let{slots:s}=i;return()=>{var r;return U(t.tag,{class:[e,t.class],style:t.style},(r=s.default)==null?void 0:r.call(s))}}})}function B(e){const a=fe("useRender");a.render=e}const ye=S({tag:{type:String,default:"div"}},"tag"),Ht=S({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function C(e,a,n){return A()({name:e,props:Ht({mode:n,origin:a}),setup(t,i){let{slots:s}=i;const r={onBeforeEnter(l){t.origin&&(l.style.transformOrigin=t.origin)},onLeave(l){if(t.leaveAbsolute){const{offsetTop:g,offsetLeft:d,offsetWidth:m,offsetHeight:o}=l;l._transitionInitialStyles={position:l.style.position,top:l.style.top,left:l.style.left,width:l.style.width,height:l.style.height},l.style.position="absolute",l.style.top=`${g}px`,l.style.left=`${d}px`,l.style.width=`${m}px`,l.style.height=`${o}px`}t.hideOnLeave&&l.style.setProperty("display","none","important")},onAfterLeave(l){if(t.leaveAbsolute&&(l!=null&&l._transitionInitialStyles)){const{position:g,top:d,left:m,width:o,height:u}=l._transitionInitialStyles;delete l._transitionInitialStyles,l.style.position=g||"",l.style.top=d||"",l.style.left=m||"",l.style.width=o||"",l.style.height=u||""}}};return()=>{const l=t.group?_t:me;return U(l,{name:t.disabled?"":e,css:!t.disabled,...t.group?void 0:{mode:t.mode},...t.disabled?{}:r},s.default)}}})}function We(e,a){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return A()({name:e,props:{mode:{type:String,default:n},disabled:Boolean},setup(t,i){let{slots:s}=i;return()=>U(me,{name:t.disabled?"":e,css:!t.disabled,...t.disabled?{}:a},s.default)}})}function je(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",t=ze(`offset-${n}`);return{onBeforeEnter(r){r._parent=r.parentNode,r._initialStyle={transition:r.style.transition,overflow:r.style.overflow,[n]:r.style[n]}},onEnter(r){const l=r._initialStyle;r.style.setProperty("transition","none","important"),r.style.overflow="hidden";const g=`${r[t]}px`;r.style[n]="0",r.offsetHeight,r.style.transition=l.transition,e&&r._parent&&r._parent.classList.add(e),requestAnimationFrame(()=>{r.style[n]=g})},onAfterEnter:s,onEnterCancelled:s,onLeave(r){r._initialStyle={transition:"",overflow:r.style.overflow,[n]:r.style[n]},r.style.overflow="hidden",r.style[n]=`${r[t]}px`,r.offsetHeight,requestAnimationFrame(()=>r.style[n]="0")},onAfterLeave:i,onLeaveCancelled:i};function i(r){e&&r._parent&&r._parent.classList.remove(e),s(r)}function s(r){const l=r._initialStyle[n];r.style.overflow=r._initialStyle.overflow,l!=null&&(r.style[n]=l),delete r._initialStyle}}C("fab-transition","center center","out-in");C("dialog-bottom-transition");C("dialog-top-transition");C("fade-transition");C("scale-transition");C("scroll-x-transition");C("scroll-x-reverse-transition");C("scroll-y-transition");C("scroll-y-reverse-transition");C("slide-x-transition");C("slide-x-reverse-transition");C("slide-y-transition");C("slide-y-reverse-transition");const Ln=We("expand-transition",je());We("expand-x-transition",je("",!0));const Dt=S({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),Ve=A(!1)({name:"VDefaultsProvider",props:Dt(),setup(e,a){let{slots:n}=a;const{defaults:t,disabled:i,reset:s,root:r,scoped:l}=wt(e);return Ct(t,{reset:s,root:r,scoped:l,disabled:i}),()=>{var g;return(g=n.default)==null?void 0:g.call(n)}}});const Fe=S({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function qe(e){return{dimensionStyles:f(()=>({height:_(e.height),maxHeight:_(e.maxHeight),maxWidth:_(e.maxWidth),minHeight:_(e.minHeight),minWidth:_(e.minWidth),width:_(e.width)}))}}function Wt(e){return{aspectStyles:f(()=>{const a=Number(e.aspectRatio);return a?{paddingBottom:String(1/a*100)+"%"}:void 0})}}const Ge=S({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...I(),...Fe()},"VResponsive"),Ee=A()({name:"VResponsive",props:Ge(),setup(e,a){let{slots:n}=a;const{aspectStyles:t}=Wt(e),{dimensionStyles:i}=qe(e);return B(()=>{var s;return c("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[i.value,e.style]},[c("div",{class:"v-responsive__sizer",style:t.value},null),(s=n.additional)==null?void 0:s.call(n),n.default&&c("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}}),jt=S({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),F=(e,a)=>{let{slots:n}=a;const{transition:t,disabled:i,...s}=e,{component:r=me,...l}=typeof t=="object"?t:{};return U(r,Ne(typeof t=="string"?{name:i?"":t}:l,s,{disabled:i}),n)};function Ft(e,a){if(!Re)return;const n=a.modifiers||{},t=a.value,{handler:i,options:s}=typeof t=="object"?t:{handler:t,options:{}},r=new IntersectionObserver(function(){var o;let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],g=arguments.length>1?arguments[1]:void 0;const d=(o=e._observe)==null?void 0:o[a.instance.$.uid];if(!d)return;const m=l.some(u=>u.isIntersecting);i&&(!n.quiet||d.init)&&(!n.once||m||d.init)&&i(m,l,g),m&&n.once?Ke(e,a):d.init=!0},s);e._observe=Object(e._observe),e._observe[a.instance.$.uid]={init:!1,observer:r},r.observe(e)}function Ke(e,a){var t;const n=(t=e._observe)==null?void 0:t[a.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[a.instance.$.uid])}const qt={mounted:Ft,unmounted:Ke},Gt=qt,Kt=S({alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,...Ge(),...I(),...jt()},"VImg"),Yt=A()({name:"VImg",directives:{intersect:Gt},props:Kt(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,a){let{emit:n,slots:t}=a;const i=P(""),s=V(),r=P(e.eager?"loading":"idle"),l=P(),g=P(),d=f(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),m=f(()=>d.value.aspect||l.value/g.value||0);q(()=>e.src,()=>{o(r.value!=="idle")}),q(m,(h,b)=>{!h&&b&&s.value&&E(s.value)}),kt(()=>o());function o(h){if(!(e.eager&&h)&&!(Re&&!h&&!e.eager)){if(r.value="loading",d.value.lazySrc){const b=new Image;b.src=d.value.lazySrc,E(b,null)}d.value.src&&xt(()=>{var b,L;if(n("loadstart",((b=s.value)==null?void 0:b.currentSrc)||d.value.src),(L=s.value)!=null&&L.complete){if(s.value.naturalWidth||v(),r.value==="error")return;m.value||E(s.value,null),u()}else m.value||E(s.value),y()})}}function u(){var h;y(),r.value="loaded",n("load",((h=s.value)==null?void 0:h.currentSrc)||d.value.src)}function v(){var h;r.value="error",n("error",((h=s.value)==null?void 0:h.currentSrc)||d.value.src)}function y(){const h=s.value;h&&(i.value=h.currentSrc||h.src)}let x=-1;function E(h){let b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const L=()=>{clearTimeout(x);const{naturalHeight:D,naturalWidth:W}=h;D||W?(l.value=W,g.value=D):!h.complete&&r.value==="loading"&&b!=null?x=window.setTimeout(L,b):(h.currentSrc.endsWith(".svg")||h.currentSrc.startsWith("data:image/svg+xml"))&&(l.value=1,g.value=1)};L()}const T=f(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),ee=()=>{var L;if(!d.value.src||r.value==="idle")return null;const h=c("img",{class:["v-img__img",T.value],src:d.value.src,srcset:d.value.srcset,alt:e.alt,sizes:e.sizes,ref:s,onLoad:u,onError:v},null),b=(L=t.sources)==null?void 0:L.call(t);return c(F,{transition:e.transition,appear:!0},{default:()=>[oe(b?c("picture",{class:"v-img__picture"},[b,h]):h,[[Lt,r.value==="loaded"]])]})},te=()=>c(F,{transition:e.transition},{default:()=>[d.value.lazySrc&&r.value!=="loaded"&&c("img",{class:["v-img__img","v-img__img--preload",T.value],src:d.value.lazySrc,alt:e.alt},null)]}),ne=()=>t.placeholder?c(F,{transition:e.transition,appear:!0},{default:()=>[(r.value==="loading"||r.value==="error"&&!t.error)&&c("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,ae=()=>t.error?c(F,{transition:e.transition,appear:!0},{default:()=>[r.value==="error"&&c("div",{class:"v-img__error"},[t.error()])]}):null,se=()=>e.gradient?c("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,H=P(!1);{const h=q(m,b=>{b&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{H.value=!0})}),h())})}return B(()=>{const[h]=Ee.filterProps(e);return oe(c(Ee,Ne({class:["v-img",{"v-img--booting":!H.value},e.class],style:[{width:_(e.width==="auto"?l.value:e.width)},e.style]},h,{aspectRatio:m.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>c(G,null,[c(ee,null,null),c(te,null,null),c(se,null,null),c(ne,null,null),c(ae,null,null)]),default:t.default}),[[Oe("intersect"),{handler:o,options:e.options},null,{once:!0}]])}),{currentSrc:i,image:s,state:r,naturalWidth:l,naturalHeight:g}}}),Ut=S({border:[Boolean,Number,String]},"border");function Xt(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:O();return{borderClasses:f(()=>{const t=M(e)?e.value:e.border,i=[];if(t===!0||t==="")i.push(`${a}--border`);else if(typeof t=="string"||t===0)for(const s of String(t).split(" "))i.push(`border-${s}`);return i})}}function he(e){return Me(()=>{const a=[],n={};if(e.value.background)if(Ce(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text){const t=Pt(e.value.background);if(t.a==null||t.a===1){const i=At(t);n.color=i,n.caretColor=i}}}else a.push(`bg-${e.value.background}`);return e.value.text&&(Ce(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):a.push(`text-${e.value.text}`)),{colorClasses:a,colorStyles:n}})}function Ye(e,a){const n=f(()=>({text:M(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:i}=he(n);return{textColorClasses:t,textColorStyles:i}}function Pn(e,a){const n=f(()=>({background:M(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:i}=he(n);return{backgroundColorClasses:t,backgroundColorStyles:i}}const Jt=S({elevation:{type:[Number,String],validator(e){const a=parseInt(e);return!isNaN(a)&&a>=0&&a<=24}}},"elevation");function Qt(e){return{elevationClasses:f(()=>{const n=M(e)?e.value:e.elevation,t=[];return n==null||t.push(`elevation-${n}`),t})}}const Ue=S({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function Xe(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:O();return{roundedClasses:f(()=>{const t=M(e)?e.value:e.rounded,i=[];if(t===!0||t==="")i.push(`${a}--rounded`);else if(typeof t=="string"||t===0)for(const s of String(t).split(" "))i.push(`rounded-${s}`);return i})}}function An(){const e=P(!1);return Tt(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:f(()=>e.value?void 0:{transition:"none !important"}),isBooted:Vt(e)}}const Zt=[null,"default","comfortable","compact"],Je=S({density:{type:String,default:"default",validator:e=>Zt.includes(e)}},"density");function Qe(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:O();return{densityClasses:f(()=>`${a}--density-${e.density}`)}}const en=["elevated","flat","tonal","outlined","text","plain"];function Ze(e,a){return c(G,null,[e&&c("span",{key:"overlay",class:`${a}__overlay`},null),c("span",{key:"underlay",class:`${a}__underlay`},null)])}const et=S({color:String,variant:{type:String,default:"elevated",validator:e=>en.includes(e)}},"variant");function tt(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:O();const n=f(()=>{const{variant:s}=ke(e);return`${a}--variant-${s}`}),{colorClasses:t,colorStyles:i}=he(f(()=>{const{variant:s,color:r}=ke(e);return{[["elevated","flat"].includes(s)?"background":"text"]:r}}));return{colorClasses:t,colorStyles:i,variantClasses:n}}const tn=["x-small","small","default","large","x-large"],nt=S({size:{type:[String,Number],default:"default"}},"size");function at(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:O();return Me(()=>{let n,t;return le(tn,e.size)?n=`${a}--size-${e.size}`:e.size&&(t={width:_(e.size),height:_(e.size)}),{sizeClasses:n,sizeStyles:t}})}const nn=S({color:String,start:Boolean,end:Boolean,icon:K,...I(),...nt(),...ye({tag:"i"}),...X()},"VIcon"),ue=A()({name:"VIcon",props:nn(),setup(e,a){let{attrs:n,slots:t}=a;const i=V(),{themeClasses:s}=J(e),{iconData:r}=Et(f(()=>i.value||e.icon)),{sizeClasses:l}=at(e),{textColorClasses:g,textColorStyles:d}=Ye(ge(e,"color"));return B(()=>{var o,u;const m=(o=t.default)==null?void 0:o.call(t);return m&&(i.value=(u=It(m).filter(v=>v.type===$t&&v.children&&typeof v.children=="string")[0])==null?void 0:u.children),c(r.value.component,{tag:e.tag,icon:r.value.icon,class:["v-icon","notranslate",s.value,l.value,g.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[l.value?void 0:{fontSize:_(e.size),height:_(e.size),width:_(e.size)},d.value,e.style],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>[m]})}),{}}});function Tn(){var e,a;return(a=(e=fe("useRouter"))==null?void 0:e.proxy)==null?void 0:a.$router}function an(e,a){const n=Bt("RouterLink"),t=f(()=>!!(e.href||e.to)),i=f(()=>(t==null?void 0:t.value)||xe(a,"click")||xe(e,"click"));if(typeof n=="string")return{isLink:t,isClickable:i,href:ge(e,"href")};const s=e.to?n.useLink(e):void 0;return{isLink:t,isClickable:i,route:s==null?void 0:s.route,navigate:s==null?void 0:s.navigate,isActive:s&&f(()=>{var r,l;return e.exact?(r=s.isExactActive)==null?void 0:r.value:(l=s.isActive)==null?void 0:l.value}),href:f(()=>e.to?s==null?void 0:s.route.value.href:e.href)}}const sn=S({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");const ce=Symbol("rippleStop"),rn=80;function Ie(e,a){e.style.transform=a,e.style.webkitTransform=a}function de(e){return e.constructor.name==="TouchEvent"}function st(e){return e.constructor.name==="KeyboardEvent"}const ln=function(e,a){var o;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=0,i=0;if(!st(e)){const u=a.getBoundingClientRect(),v=de(e)?e.touches[e.touches.length-1]:e;t=v.clientX-u.left,i=v.clientY-u.top}let s=0,r=.3;(o=a._ripple)!=null&&o.circle?(r=.15,s=a.clientWidth/2,s=n.center?s:s+Math.sqrt((t-s)**2+(i-s)**2)/4):s=Math.sqrt(a.clientWidth**2+a.clientHeight**2)/2;const l=`${(a.clientWidth-s*2)/2}px`,g=`${(a.clientHeight-s*2)/2}px`,d=n.center?l:`${t-s}px`,m=n.center?g:`${i-s}px`;return{radius:s,scale:r,x:d,y:m,centerX:l,centerY:g}},Y={show(e,a){var v;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((v=a==null?void 0:a._ripple)!=null&&v.enabled))return;const t=document.createElement("span"),i=document.createElement("span");t.appendChild(i),t.className="v-ripple__container",n.class&&(t.className+=` ${n.class}`);const{radius:s,scale:r,x:l,y:g,centerX:d,centerY:m}=ln(e,a,n),o=`${s*2}px`;i.className="v-ripple__animation",i.style.width=o,i.style.height=o,a.appendChild(t);const u=window.getComputedStyle(a);u&&u.position==="static"&&(a.style.position="relative",a.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),Ie(i,`translate(${l}, ${g}) scale3d(${r},${r},${r})`),i.dataset.activated=String(performance.now()),setTimeout(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),Ie(i,`translate(${d}, ${m}) scale3d(1,1,1)`)},0)},hide(e){var s;if(!((s=e==null?void 0:e._ripple)!=null&&s.enabled))return;const a=e.getElementsByClassName("v-ripple__animation");if(a.length===0)return;const n=a[a.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const t=performance.now()-Number(n.dataset.activated),i=Math.max(250-t,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var l;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((l=n.parentNode)==null?void 0:l.parentNode)===e&&e.removeChild(n.parentNode)},300)},i)}};function it(e){return typeof e>"u"||!!e}function z(e){const a={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[ce])){if(e[ce]=!0,de(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(a.center=n._ripple.centered||st(e),n._ripple.class&&(a.class=n._ripple.class),de(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{Y.show(e,n,a)},n._ripple.showTimer=window.setTimeout(()=>{var t;(t=n==null?void 0:n._ripple)!=null&&t.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},rn)}else Y.show(e,n,a)}}function $e(e){e[ce]=!0}function w(e){const a=e.currentTarget;if(a!=null&&a._ripple){if(window.clearTimeout(a._ripple.showTimer),e.type==="touchend"&&a._ripple.showTimerCommit){a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null,a._ripple.showTimer=window.setTimeout(()=>{w(e)});return}window.setTimeout(()=>{a._ripple&&(a._ripple.touched=!1)}),Y.hide(a)}}function rt(e){const a=e.currentTarget;a!=null&&a._ripple&&(a._ripple.showTimerCommit&&(a._ripple.showTimerCommit=null),window.clearTimeout(a._ripple.showTimer))}let N=!1;function lt(e){!N&&(e.keyCode===Le.enter||e.keyCode===Le.space)&&(N=!0,z(e))}function ot(e){N=!1,w(e)}function ut(e){N&&(N=!1,w(e))}function ct(e,a,n){const{value:t,modifiers:i}=a,s=it(t);if(s||Y.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=s,e._ripple.centered=i.center,e._ripple.circle=i.circle,zt(t)&&t.class&&(e._ripple.class=t.class),s&&!n){if(i.stop){e.addEventListener("touchstart",$e,{passive:!0}),e.addEventListener("mousedown",$e);return}e.addEventListener("touchstart",z,{passive:!0}),e.addEventListener("touchend",w,{passive:!0}),e.addEventListener("touchmove",rt,{passive:!0}),e.addEventListener("touchcancel",w),e.addEventListener("mousedown",z),e.addEventListener("mouseup",w),e.addEventListener("mouseleave",w),e.addEventListener("keydown",lt),e.addEventListener("keyup",ot),e.addEventListener("blur",ut),e.addEventListener("dragstart",w,{passive:!0})}else!s&&n&&dt(e)}function dt(e){e.removeEventListener("mousedown",z),e.removeEventListener("touchstart",z),e.removeEventListener("touchend",w),e.removeEventListener("touchmove",rt),e.removeEventListener("touchcancel",w),e.removeEventListener("mouseup",w),e.removeEventListener("mouseleave",w),e.removeEventListener("keydown",lt),e.removeEventListener("keyup",ot),e.removeEventListener("dragstart",w),e.removeEventListener("blur",ut)}function on(e,a){ct(e,a,!1)}function un(e){delete e._ripple,dt(e)}function cn(e,a){if(a.value===a.oldValue)return;const n=it(a.oldValue);ct(e,a,n)}const dn={mounted:on,unmounted:un,updated:cn};const vn=S({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...I(),...X()},"VDivider"),Vn=A()({name:"VDivider",props:vn(),setup(e,a){let{attrs:n}=a;const{themeClasses:t}=J(e),{textColorClasses:i,textColorStyles:s}=Ye(ge(e,"color")),r=f(()=>{const l={};return e.length&&(l[e.vertical?"maxHeight":"maxWidth"]=_(e.length)),e.thickness&&(l[e.vertical?"borderRightWidth":"borderTopWidth"]=_(e.thickness)),l});return B(()=>c("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},t.value,i.value,e.class],style:[r.value,s.value,e.style],"aria-orientation":!n.role||n.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${n.role||"separator"}`},null)),{}}}),ve=Symbol.for("vuetify:list");function En(){const e=Q(ve,{hasPrepend:P(!1),updateHasPrepend:()=>null}),a={hasPrepend:P(!1),updateHasPrepend:n=>{n&&(a.hasPrepend.value=n)}};return Z(ve,a),e}function fn(){return Q(ve,null)}const mn={open:e=>{let{id:a,value:n,opened:t,parents:i}=e;if(n){const s=new Set;s.add(a);let r=i.get(a);for(;r!=null;)s.add(r),r=i.get(r);return s}else return t.delete(a),t},select:()=>null},vt={open:e=>{let{id:a,value:n,opened:t,parents:i}=e;if(n){let s=i.get(a);for(t.add(a);s!=null&&s!==a;)t.add(s),s=i.get(s);return t}else t.delete(a);return t},select:()=>null},gn={open:vt.open,select:e=>{let{id:a,value:n,opened:t,parents:i}=e;if(!n)return t;const s=[];let r=i.get(a);for(;r!=null;)s.push(r),r=i.get(r);return new Set(s)}},pe=e=>{const a={select:n=>{let{id:t,value:i,selected:s}=n;if(t=$(t),e&&!i){const r=Array.from(s.entries()).reduce((l,g)=>{let[d,m]=g;return m==="on"?[...l,d]:l},[]);if(r.length===1&&r[0]===t)return s}return s.set(t,i?"on":"off"),s},in:(n,t,i)=>{let s=new Map;for(const r of n||[])s=a.select({id:r,value:!0,selected:new Map(s),children:t,parents:i});return s},out:n=>{const t=[];for(const[i,s]of n.entries())s==="on"&&t.push(i);return t}};return a},ft=e=>{const a=pe(e);return{select:t=>{let{selected:i,id:s,...r}=t;s=$(s);const l=i.has(s)?new Map([[s,i.get(s)]]):new Map;return a.select({...r,id:s,selected:l})},in:(t,i,s)=>{let r=new Map;return t!=null&&t.length&&(r=a.in(t.slice(0,1),i,s)),r},out:(t,i,s)=>a.out(t,i,s)}},yn=e=>{const a=pe(e);return{select:t=>{let{id:i,selected:s,children:r,...l}=t;return i=$(i),r.has(i)?s:a.select({id:i,selected:s,children:r,...l})},in:a.in,out:a.out}},hn=e=>{const a=ft(e);return{select:t=>{let{id:i,selected:s,children:r,...l}=t;return i=$(i),r.has(i)?s:a.select({id:i,selected:s,children:r,...l})},in:a.in,out:a.out}},pn=e=>{const a={select:n=>{let{id:t,value:i,selected:s,children:r,parents:l}=n;t=$(t);const g=new Map(s),d=[t];for(;d.length;){const o=d.shift();s.set(o,i?"on":"off"),r.has(o)&&d.push(...r.get(o))}let m=l.get(t);for(;m;){const o=r.get(m),u=o.every(y=>s.get(y)==="on"),v=o.every(y=>!s.has(y)||s.get(y)==="off");s.set(m,u?"on":v?"off":"indeterminate"),m=l.get(m)}return e&&!i&&Array.from(s.entries()).reduce((u,v)=>{let[y,x]=v;return x==="on"?[...u,y]:u},[]).length===0?g:s},in:(n,t,i)=>{let s=new Map;for(const r of n||[])s=a.select({id:r,value:!0,selected:new Map(s),children:t,parents:i});return s},out:(n,t)=>{const i=[];for(const[s,r]of n.entries())r==="on"&&!t.has(s)&&i.push(s);return i}};return a},R=Symbol.for("vuetify:nested"),mt={id:P(),root:{register:()=>null,unregister:()=>null,parents:V(new Map),children:V(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:V(new Set),selected:V(new Map),selectedValues:V([])}},In=S({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),$n=e=>{let a=!1;const n=V(new Map),t=V(new Map),i=Pe(e,"opened",e.opened,o=>new Set(o),o=>[...o.values()]),s=f(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return hn(e.mandatory);case"leaf":return yn(e.mandatory);case"independent":return pe(e.mandatory);case"single-independent":return ft(e.mandatory);case"classic":default:return pn(e.mandatory)}}),r=f(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return gn;case"single":return mn;case"multiple":default:return vt}}),l=Pe(e,"selected",e.selected,o=>s.value.in(o,n.value,t.value),o=>s.value.out(o,n.value,t.value));He(()=>{a=!0});function g(o){const u=[];let v=o;for(;v!=null;)u.unshift(v),v=t.value.get(v);return u}const d=fe("nested"),m={id:P(),root:{opened:i,selected:l,selectedValues:f(()=>{const o=[];for(const[u,v]of l.value.entries())v==="on"&&o.push(u);return o}),register:(o,u,v)=>{u&&o!==u&&t.value.set(o,u),v&&n.value.set(o,[]),u!=null&&n.value.set(u,[...n.value.get(u)||[],o])},unregister:o=>{if(a)return;n.value.delete(o);const u=t.value.get(o);if(u){const v=n.value.get(u)??[];n.value.set(u,v.filter(y=>y!==o))}t.value.delete(o),i.value.delete(o)},open:(o,u,v)=>{d.emit("click:open",{id:o,value:u,path:g(o),event:v});const y=r.value.open({id:o,value:u,opened:new Set(i.value),children:n.value,parents:t.value,event:v});y&&(i.value=y)},openOnSelect:(o,u,v)=>{const y=r.value.select({id:o,value:u,selected:new Map(l.value),opened:new Set(i.value),children:n.value,parents:t.value,event:v});y&&(i.value=y)},select:(o,u,v)=>{d.emit("click:select",{id:o,value:u,path:g(o),event:v});const y=s.value.select({id:o,value:u,selected:new Map(l.value),children:n.value,parents:t.value,event:v});y&&(l.value=y),m.root.openOnSelect(o,u,v)},children:n,parents:t}};return Z(R,m),m.root},Sn=(e,a)=>{const n=Q(R,mt),t=Symbol(Nt()),i=f(()=>e.value!==void 0?e.value:t),s={...n,id:i,open:(r,l)=>n.root.open(i.value,r,l),openOnSelect:(r,l)=>n.root.openOnSelect(i.value,r,l),isOpen:f(()=>n.root.opened.value.has(i.value)),parent:f(()=>n.root.parents.value.get(i.value)),select:(r,l)=>n.root.select(i.value,r,l),isSelected:f(()=>n.root.selected.value.get($(i.value))==="on"),isIndeterminate:f(()=>n.root.selected.value.get(i.value)==="indeterminate"),isLeaf:f(()=>!n.root.children.value.get(i.value)),isGroupActivator:n.isGroupActivator};return!n.isGroupActivator&&n.root.register(i.value,n.id.value,a),He(()=>{!n.isGroupActivator&&n.root.unregister(i.value)}),a&&Z(R,s),s},Bn=()=>{const e=Q(R,mt);Z(R,{...e,isGroupActivator:!0})};const bn=De("v-list-item-subtitle"),_n=De("v-list-item-title");const wn=S({start:Boolean,end:Boolean,icon:K,image:String,...I(),...Je(),...Ue(),...nt(),...ye(),...X(),...et({variant:"flat"})},"VAvatar"),Be=A()({name:"VAvatar",props:wn(),setup(e,a){let{slots:n}=a;const{themeClasses:t}=J(e),{colorClasses:i,colorStyles:s,variantClasses:r}=tt(e),{densityClasses:l}=Qe(e),{roundedClasses:g}=Xe(e),{sizeClasses:d,sizeStyles:m}=at(e);return B(()=>c(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},t.value,i.value,l.value,g.value,d.value,r.value,e.class],style:[s.value,m.value,e.style]},{default:()=>{var o;return[e.image?c(Yt,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?c(ue,{key:"icon",icon:e.icon},null):(o=n.default)==null?void 0:o.call(n),Ze(!1,"v-avatar")]}})),{}}}),Cn=S({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:K,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:K,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:Ae(),onClickOnce:Ae(),...Ut(),...I(),...Je(),...Fe(),...Jt(),...Ue(),...sn(),...ye(),...X(),...et({variant:"text"})},"VListItem"),zn=A()({name:"VListItem",directives:{Ripple:dn},props:Cn(),emits:{click:e=>!0},setup(e,a){let{attrs:n,slots:t,emit:i}=a;const s=an(e,n),r=f(()=>e.value===void 0?s.href.value:e.value),{select:l,isSelected:g,isIndeterminate:d,isGroupActivator:m,root:o,parent:u,openOnSelect:v}=Sn(r,!1),y=fn(),x=f(()=>{var p;return e.active!==!1&&(e.active||((p=s.isActive)==null?void 0:p.value)||g.value)}),E=f(()=>e.link!==!1&&s.isLink.value),T=f(()=>!e.disabled&&e.link!==!1&&(e.link||s.isClickable.value||e.value!=null&&!!y)),ee=f(()=>e.rounded||e.nav),te=f(()=>e.color??e.activeColor),ne=f(()=>({color:x.value?te.value??e.baseColor:e.baseColor,variant:e.variant}));q(()=>{var p;return(p=s.isActive)==null?void 0:p.value},p=>{p&&u.value!=null&&o.open(u.value,!0),p&&v(p)},{immediate:!0});const{themeClasses:ae}=J(e),{borderClasses:se}=Xt(e),{colorClasses:H,colorStyles:h,variantClasses:b}=tt(ne),{densityClasses:L}=Qe(e),{dimensionStyles:D}=qe(e),{elevationClasses:W}=Qt(e),{roundedClasses:gt}=Xe(ee),yt=f(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),ie=f(()=>({isActive:x.value,select:l,isSelected:g.value,isIndeterminate:d.value}));function Se(p){var j;i("click",p),!(m||!T.value)&&((j=s.navigate)==null||j.call(s,p),e.value!=null&&l(!g.value,p))}function ht(p){(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),Se(p))}return B(()=>{const p=E.value?"a":e.tag,j=t.title||e.title,pt=t.subtitle||e.subtitle,be=!!(e.appendAvatar||e.appendIcon),St=!!(be||t.append),_e=!!(e.prependAvatar||e.prependIcon),re=!!(_e||t.prepend);return y==null||y.updateHasPrepend(re),e.activeColor&&Rt("active-color",["color","base-color"]),oe(c(p,{class:["v-list-item",{"v-list-item--active":x.value,"v-list-item--disabled":e.disabled,"v-list-item--link":T.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!re&&(y==null?void 0:y.hasPrepend.value),[`${e.activeClass}`]:e.activeClass&&x.value},ae.value,se.value,H.value,L.value,W.value,yt.value,gt.value,b.value,e.class],style:[h.value,D.value,e.style],href:s.href.value,tabindex:T.value?y?-2:0:void 0,onClick:Se,onKeydown:T.value&&!E.value&&ht},{default:()=>{var we;return[Ze(T.value||x.value,"v-list-item"),re&&c("div",{key:"prepend",class:"v-list-item__prepend"},[t.prepend?c(Ve,{key:"prepend-defaults",disabled:!_e,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var k;return[(k=t.prepend)==null?void 0:k.call(t,ie.value)]}}):c(G,null,[e.prependAvatar&&c(Be,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&c(ue,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),c("div",{class:"v-list-item__spacer"},null)]),c("div",{class:"v-list-item__content","data-no-activator":""},[j&&c(_n,{key:"title"},{default:()=>{var k;return[((k=t.title)==null?void 0:k.call(t,{title:e.title}))??e.title]}}),pt&&c(bn,{key:"subtitle"},{default:()=>{var k;return[((k=t.subtitle)==null?void 0:k.call(t,{subtitle:e.subtitle}))??e.subtitle]}}),(we=t.default)==null?void 0:we.call(t,ie.value)]),St&&c("div",{key:"append",class:"v-list-item__append"},[t.append?c(Ve,{key:"append-defaults",disabled:!be,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var k;return[(k=t.append)==null?void 0:k.call(t,ie.value)]}}):c(G,null,[e.appendIcon&&c(ue,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&c(Be,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),c("div",{class:"v-list-item__spacer"},null)])]}}),[[Oe("ripple"),T.value&&e.ripple]])}),{}}});export{Fe as A,et as B,Qe as C,qe as D,$n as E,Be as F,sn as G,tt as H,an as I,Ze as J,_n as K,ue as L,F as M,Ee as N,dn as R,Yt as V,ye as a,Ut as b,Jt as c,Ue as d,Pn as e,Xt as f,Qt as g,Xe as h,Ve as i,Ln as j,An as k,De as l,I as m,Tn as n,zn as o,Vn as p,xn as q,Ye as r,Bn as s,Te as t,B as u,Sn as v,fn as w,En as x,In as y,Je as z};
