import{r as j,I as We,o as q,w as L,a as be,b as je,p as $,i as ve,c as r,d as X,e as A,g as de,s as k,f as ie,h as Ve,j as Xe,k as Fe,l as Ue,m as Ze,n as D,q as f,t as me,u as U,v as fe,x as ge,y as Te,z as qe,A as Ie,B as ae,C as ne,D as Ke,E as F,F as oe,G as Z,H as Ge,J as Be,K as Je,L as ke,M as Qe,N as et,O as tt,P as at,T as nt,Q as Ce,R as ot,S as lt,U as it}from"./index-5e77593e.js";import{m as K,a as se,u as O,b as Ee,c as Me,d as Re,e as ce,f as Le,g as Pe,h as Ae,V as st,i as re,j as ut,k as he,l as rt,n as ct,t as vt,o as dt,p as mt}from"./VListItem-16bae71d.js";function ft(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const n=j(),o=j();if(We){const a=new ResizeObserver(t=>{e==null||e(t,a),t.length&&(l==="content"?o.value=t[0].contentRect:o.value=t[0].target.getBoundingClientRect())});q(()=>{a.disconnect()}),L(n,(t,i)=>{i&&(a.unobserve(be(i)),o.value=void 0),t&&a.observe(be(t))},{flush:"post"})}return{resizeRef:n,contentRect:je(o)}}const le=Symbol.for("vuetify:layout"),$e=Symbol.for("vuetify:layout-item"),we=1e3,gt=$({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),He=$({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function ht(){const e=ve(le);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Ne(e){const l=ve(le);if(!l)throw new Error("[Vuetify] Could not find injected layout");const n=e.id??`layout-item-${Xe()}`,o=de("useLayoutItem");Ve($e,{id:n});const a=k(!1);Fe(()=>a.value=!0),Ue(()=>a.value=!1);const{layoutItemStyles:t,layoutItemScrimStyles:i}=l.register(o,{...e,active:r(()=>a.value?!1:e.active.value),id:n});return q(()=>l.unregister(n)),{layoutItemStyles:t,layoutRect:l.layoutRect,layoutItemScrimStyles:i}}const yt=(e,l,n,o)=>{let a={top:0,left:0,right:0,bottom:0};const t=[{id:"",layer:{...a}}];for(const i of e){const h=l.get(i),y=n.get(i),p=o.get(i);if(!h||!y||!p)continue;const u={...a,[h.value]:parseInt(a[h.value],10)+(p.value?parseInt(y.value,10):0)};t.push({id:i,layer:u}),a=u}return t};function pt(e){const l=ve(le,null),n=r(()=>l?l.rootZIndex.value-100:we),o=j([]),a=X(new Map),t=X(new Map),i=X(new Map),h=X(new Map),y=X(new Map),{resizeRef:p,contentRect:u}=ft(),w=r(()=>{const s=new Map,c=e.overlaps??[];for(const v of c.filter(_=>_.includes(":"))){const[_,x]=v.split(":");if(!o.value.includes(_)||!o.value.includes(x))continue;const M=a.get(_),P=a.get(x),H=t.get(_),z=t.get(x);!M||!P||!H||!z||(s.set(x,{position:M.value,amount:parseInt(H.value,10)}),s.set(_,{position:P.value,amount:-parseInt(z.value,10)}))}return s}),d=r(()=>{const s=[...new Set([...i.values()].map(v=>v.value))].sort((v,_)=>v-_),c=[];for(const v of s){const _=o.value.filter(x=>{var M;return((M=i.get(x))==null?void 0:M.value)===v});c.push(..._)}return yt(c,a,t,h)}),m=r(()=>!Array.from(y.values()).some(s=>s.value)),b=r(()=>d.value[d.value.length-1].layer),C=r(()=>({"--v-layout-left":A(b.value.left),"--v-layout-right":A(b.value.right),"--v-layout-top":A(b.value.top),"--v-layout-bottom":A(b.value.bottom),...m.value?void 0:{transition:"none"}})),T=r(()=>d.value.slice(1).map((s,c)=>{let{id:v}=s;const{layer:_}=d.value[c],x=t.get(v),M=a.get(v);return{id:v,..._,size:Number(x.value),position:M.value}})),S=s=>T.value.find(c=>c.id===s),V=de("createLayout"),B=k(!1);ie(()=>{B.value=!0}),Ve(le,{register:(s,c)=>{let{id:v,order:_,position:x,layoutSize:M,elementSize:P,active:H,disableTransitions:z,absolute:G}=c;i.set(v,_),a.set(v,x),t.set(v,M),h.set(v,H),z&&y.set(v,z);const J=Ze($e,V==null?void 0:V.vnode).indexOf(s);J>-1?o.value.splice(J,0,v):o.value.push(v);const Q=r(()=>T.value.findIndex(N=>N.id===v)),I=r(()=>n.value+d.value.length*2-Q.value*2),ee=r(()=>{const N=x.value==="left"||x.value==="right",Y=x.value==="right",Ye=x.value==="bottom",pe={[x.value]:0,zIndex:I.value,transform:`translate${N?"X":"Y"}(${(H.value?0:-110)*(Y||Ye?-1:1)}%)`,position:G.value||n.value!==we?"absolute":"fixed",...m.value?void 0:{transition:"none"}};if(!B.value)return pe;const R=T.value[Q.value];if(!R)throw new Error(`[Vuetify] Could not find layout item "${v}"`);const ue=w.value.get(v);return ue&&(R[ue.position]+=ue.amount),{...pe,height:N?`calc(100% - ${R.top}px - ${R.bottom}px)`:P.value?`${P.value}px`:void 0,left:Y?void 0:`${R.left}px`,right:Y?`${R.right}px`:void 0,top:x.value!=="bottom"?`${R.top}px`:void 0,bottom:x.value!=="top"?`${R.bottom}px`:void 0,width:N?P.value?`${P.value}px`:void 0:`calc(100% - ${R.left}px - ${R.right}px)`}}),te=r(()=>({zIndex:I.value-1}));return{layoutItemStyles:ee,layoutItemScrimStyles:te,zIndex:I}},unregister:s=>{i.delete(s),a.delete(s),t.delete(s),h.delete(s),y.delete(s),o.value=o.value.filter(c=>c!==s)},mainRect:b,mainStyles:C,getLayoutItem:S,items:T,layoutRect:u,rootZIndex:n});const E=r(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),g=r(()=>({zIndex:l?n.value:void 0,position:l?"relative":void 0,overflow:l?"hidden":void 0}));return{layoutClasses:E,layoutStyles:g,getLayoutItem:S,items:T,layoutRect:u,layoutRef:p}}const bt="admin.sc-voice.net",wt="0.27.0",St={dev:"vite",build:"scripts/build-dist.sh","build:dist":"scripts/build-dist.sh","git:commit":"scripts/git-commit.sh",preview:"vite preview","gh-pages":"scripts/gh-pages.sh","push-action":"scripts/push-action","schedule-action":"scripts/schedule-action",lint:"eslint . --fix --ignore-path .gitignore"},xt={"@jamescoyle/vue-icon":"^0.1.2","@mdi/font":"7.0.96","@mdi/js":"^7.3.67","@sc-voice/state-log":"^1.1.0","core-js":"^3.29.0","log-instance":"^1.5.0","merkle-json":"^2.6.0",pinia:"^2.0.0","roboto-fontface":"*","scv-esm":"^1.82.6",vue:"^3.2.0","vue-router":"^4.0.0",vuetify:"^3.0.0"},_t={"@vitejs/plugin-vue":"^4.0.0",eslint:"^8.37.0","eslint-plugin-vue":"^9.3.0","memo-again":"^0.8.0",sass:"^1.60.0","unplugin-fonts":"^1.0.3",vite:"^4.2.0","vite-plugin-vuetify":"^1.0.0"},Vt={name:bt,version:wt,private:!0,scripts:St,dependencies:xt,devDependencies:_t};const ze=$({text:String,...K(),...se()},"VToolbarTitle"),De=D()({name:"VToolbarTitle",props:ze(),setup(e,l){let{slots:n}=l;return O(()=>{const o=!!(n.default||n.text||e.text);return f(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var a;return[o&&f("div",{class:"v-toolbar-title__placeholder"},[n.text?n.text():e.text,(a=n.default)==null?void 0:a.call(n)])]}})}),{}}}),Tt=[null,"prominent","default","comfortable","compact"],Oe=$({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Tt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Ee(),...K(),...Me(),...Re(),...se({tag:"header"}),...me()},"VToolbar"),Se=D()({name:"VToolbar",props:Oe(),setup(e,l){var m;let{slots:n}=l;const{backgroundColorClasses:o,backgroundColorStyles:a}=ce(U(e,"color")),{borderClasses:t}=Le(e),{elevationClasses:i}=Pe(e),{roundedClasses:h}=Ae(e),{themeClasses:y}=fe(e),{rtlClasses:p}=ge(),u=k(!!(e.extended||(m=n.extension)!=null&&m.call(n))),w=r(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),d=r(()=>u.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Te({VBtn:{variant:"text"}}),O(()=>{var S;const b=!!(e.title||n.title),C=!!(n.image||e.image),T=(S=n.extension)==null?void 0:S.call(n);return u.value=!!(e.extended||T),f(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},o.value,t.value,i.value,h.value,y.value,p.value,e.class],style:[a.value,e.style]},{default:()=>[C&&f("div",{key:"image",class:"v-toolbar__image"},[n.image?f(re,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},n.image):f(st,{key:"image-img",cover:!0,src:e.image},null)]),f(re,{defaults:{VTabs:{height:A(w.value)}}},{default:()=>{var V,B,E;return[f("div",{class:"v-toolbar__content",style:{height:A(w.value)}},[n.prepend&&f("div",{class:"v-toolbar__prepend"},[(V=n.prepend)==null?void 0:V.call(n)]),b&&f(De,{key:"title",text:e.title},{text:n.title}),(B=n.default)==null?void 0:B.call(n),n.append&&f("div",{class:"v-toolbar__append"},[(E=n.append)==null?void 0:E.call(n)])])]}}),f(re,{defaults:{VTabs:{height:A(d.value)}}},{default:()=>[f(ut,null,{default:()=>[u.value&&f("div",{class:"v-toolbar__extension",style:{height:A(d.value)}},[T])]})]})]})}),{contentHeight:w,extensionHeight:d}}}),It=$({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Bt(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:n}=l;let o=0;const a=j(null),t=k(0),i=k(0),h=k(0),y=k(!1),p=k(!1),u=r(()=>Number(e.scrollThreshold)),w=r(()=>qe((u.value-t.value)/u.value||0)),d=()=>{const m=a.value;!m||n&&!n.value||(o=t.value,t.value="window"in m?m.pageYOffset:m.scrollTop,p.value=t.value<o,h.value=Math.abs(t.value-u.value))};return L(p,()=>{i.value=i.value||t.value}),L(y,()=>{i.value=0}),ie(()=>{L(()=>e.scrollTarget,m=>{var C;const b=m?document.querySelector(m):window;b&&b!==a.value&&((C=a.value)==null||C.removeEventListener("scroll",d),a.value=b,a.value.addEventListener("scroll",d,{passive:!0}))},{immediate:!0})}),q(()=>{var m;(m=a.value)==null||m.removeEventListener("scroll",d)}),n&&L(n,d,{immediate:!0}),{scrollThreshold:u,currentScroll:t,currentThreshold:h,isScrollActive:y,scrollRatio:w,isScrollingUp:p,savedScroll:i}}const kt=$({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Oe(),...He(),...It(),height:{type:[Number,String],default:64}},"VAppBar"),Ct=D()({name:"VAppBar",props:kt(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:n}=l;const o=j(),a=Ie(e,"modelValue"),t=r(()=>{var V;const S=new Set(((V=e.scrollBehavior)==null?void 0:V.split(" "))??[]);return{hide:S.has("hide"),inverted:S.has("inverted"),collapse:S.has("collapse"),elevate:S.has("elevate"),fadeImage:S.has("fade-image")}}),i=r(()=>{const S=t.value;return S.hide||S.inverted||S.collapse||S.elevate||S.fadeImage||!a.value}),{currentScroll:h,scrollThreshold:y,isScrollingUp:p,scrollRatio:u}=Bt(e,{canScroll:i}),w=r(()=>e.collapse||t.value.collapse&&(t.value.inverted?u.value>0:u.value===0)),d=r(()=>e.flat||t.value.elevate&&(t.value.inverted?h.value>0:h.value===0)),m=r(()=>t.value.fadeImage?t.value.inverted?1-u.value:u.value:void 0),b=r(()=>{var B,E;if(t.value.hide&&t.value.inverted)return 0;const S=((B=o.value)==null?void 0:B.contentHeight)??0,V=((E=o.value)==null?void 0:E.extensionHeight)??0;return S+V});ae(r(()=>!!e.scrollBehavior),()=>{Ke(()=>{t.value.hide?t.value.inverted?a.value=h.value>y.value:a.value=p.value||h.value<y.value:a.value=!0})});const{ssrBootStyles:C}=he(),{layoutItemStyles:T}=Ne({id:e.name,order:r(()=>parseInt(e.order,10)),position:U(e,"location"),layoutSize:b,elementSize:k(void 0),active:a,absolute:U(e,"absolute")});return O(()=>{const[S]=Se.filterProps(e);return f(Se,ne({ref:o,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...T.value,"--v-toolbar-image-opacity":m.value,height:void 0,...C.value},e.style]},S,{collapse:w.value,flat:d.value}),n)}),{}}}),Et=D()({name:"VAppBarTitle",props:ze(),setup(e,l){let{slots:n}=l;return O(()=>f(De,ne(e,{class:"v-app-bar-title"}),n)),{}}}),Mt=rt("v-spacer","div","VSpacer"),Rt=Be("div",{class:"text-caption"}," SuttaCentral Voice Administration ",-1),Lt={class:"mr-5"},Pt={__name:"AppBar",setup(e){return(l,n)=>(F(),oe(Ct,{flat:""},{default:Z(()=>[f(Et,null,{default:Z(()=>[Ge(" admin.sc-voice.net "),Rt]),_:1}),f(Mt),Be("div",Lt,"v"+Je(ke(Vt).version),1)]),_:1}))}};const At=$({scrollable:Boolean,...K(),...se({tag:"main"})},"VMain"),$t=D()({name:"VMain",props:At(),setup(e,l){let{slots:n}=l;const{mainStyles:o}=ht(),{ssrBootStyles:a}=he();return O(()=>f(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[o.value,a.value,e.style]},{default:()=>{var t,i;return[e.scrollable?f("div",{class:"v-main__scroller"},[(t=n.default)==null?void 0:t.call(n)]):(i=n.default)==null?void 0:i.call(n)]}})),{}}}),Ht={__name:"View",setup(e){return(l,n)=>{const o=Qe("router-view");return F(),oe($t,null,{default:Z(()=>[f(o)]),_:1})}}};const Nt=$({...K(),...gt({fullHeight:!0}),...me()},"VApp"),zt=D()({name:"VApp",props:Nt(),setup(e,l){let{slots:n}=l;const o=fe(e),{layoutClasses:a,getLayoutItem:t,items:i,layoutRef:h}=pt(e),{rtlClasses:y}=ge();return O(()=>{var p;return f("div",{ref:h,class:["v-application",o.themeClasses.value,a.value,y.value,e.class],style:[e.style]},[f("div",{class:"v-application__wrap"},[(p=n.default)==null?void 0:p.call(n)])])}),{getLayoutItem:t,items:i,theme:o}}});function Dt(e){let{rootEl:l,isSticky:n,layoutItemStyles:o}=e;const a=k(!1),t=k(0),i=r(()=>{const p=typeof a.value=="boolean"?"top":a.value;return[n.value?{top:"auto",bottom:"auto",height:void 0}:void 0,a.value?{[p]:A(t.value)}:{top:o.value.top}]});ie(()=>{L(n,p=>{p?window.addEventListener("scroll",y,{passive:!0}):window.removeEventListener("scroll",y)},{immediate:!0})}),q(()=>{window.removeEventListener("scroll",y)});let h=0;function y(){const p=h>window.scrollY?"up":"down",u=l.value.getBoundingClientRect(),w=parseFloat(o.value.top??0),d=window.scrollY-Math.max(0,t.value-w),m=u.height+Math.max(t.value,w)-window.scrollY-window.innerHeight,b=parseFloat(getComputedStyle(l.value).getPropertyValue("--v-body-scroll-y"))||0;u.height<window.innerHeight-w?(a.value="top",t.value=w):p==="up"&&a.value==="bottom"||p==="down"&&a.value==="top"?(t.value=window.scrollY+u.top-b,a.value=!0):p==="down"&&m<=0?(t.value=0,a.value="bottom"):p==="up"&&d<=0&&(b?a.value!=="top"&&(t.value=-d+b+w,a.value="top"):(t.value=u.top+d,a.value="top")),h=window.scrollY}return{isStuck:a,stickyStyles:i}}const Ot=100,Yt=20;function xe(e){const l=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*l}function _e(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let l=0;for(let n=e.length-1;n>0;n--){if(e[n].t===e[n-1].t)continue;const o=xe(l),a=(e[n].d-e[n-1].d)/(e[n].t-e[n-1].t);l+=(a-o)*Math.abs(a),n===e.length-1&&(l*=.5)}return xe(l)*1e3}function Wt(){const e={};function l(a){Array.from(a.changedTouches).forEach(t=>{(e[t.identifier]??(e[t.identifier]=new et(Yt))).push([a.timeStamp,t])})}function n(a){Array.from(a.changedTouches).forEach(t=>{delete e[t.identifier]})}function o(a){var p;const t=(p=e[a])==null?void 0:p.values().reverse();if(!t)throw new Error(`No samples for touch id ${a}`);const i=t[0],h=[],y=[];for(const u of t){if(i[0]-u[0]>Ot)break;h.push({t:u[0],d:u[1].clientX}),y.push({t:u[0],d:u[1].clientY})}return{x:_e(h),y:_e(y),get direction(){const{x:u,y:w}=this,[d,m]=[Math.abs(u),Math.abs(w)];return d>m&&u>=0?"right":d>m&&u<=0?"left":m>d&&w>=0?"down":m>d&&w<=0?"up":jt()}}}return{addMovement:l,endTouch:n,getVelocity:o}}function jt(){throw new Error}function Xt(e){let{isActive:l,isTemporary:n,width:o,touchless:a,position:t}=e;ie(()=>{window.addEventListener("touchstart",S,{passive:!0}),window.addEventListener("touchmove",V,{passive:!1}),window.addEventListener("touchend",B,{passive:!0})}),q(()=>{window.removeEventListener("touchstart",S),window.removeEventListener("touchmove",V),window.removeEventListener("touchend",B)});const i=r(()=>["left","right"].includes(t.value)),{addMovement:h,endTouch:y,getVelocity:p}=Wt();let u=!1;const w=k(!1),d=k(0),m=k(0);let b;function C(g,s){return(t.value==="left"?g:t.value==="right"?document.documentElement.clientWidth-g:t.value==="top"?g:t.value==="bottom"?document.documentElement.clientHeight-g:W())-(s?o.value:0)}function T(g){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const c=t.value==="left"?(g-m.value)/o.value:t.value==="right"?(document.documentElement.clientWidth-g-m.value)/o.value:t.value==="top"?(g-m.value)/o.value:t.value==="bottom"?(document.documentElement.clientHeight-g-m.value)/o.value:W();return s?Math.max(0,Math.min(1,c)):c}function S(g){if(a.value)return;const s=g.changedTouches[0].clientX,c=g.changedTouches[0].clientY,v=25,_=t.value==="left"?s<v:t.value==="right"?s>document.documentElement.clientWidth-v:t.value==="top"?c<v:t.value==="bottom"?c>document.documentElement.clientHeight-v:W(),x=l.value&&(t.value==="left"?s<o.value:t.value==="right"?s>document.documentElement.clientWidth-o.value:t.value==="top"?c<o.value:t.value==="bottom"?c>document.documentElement.clientHeight-o.value:W());(_||x||l.value&&n.value)&&(u=!0,b=[s,c],m.value=C(i.value?s:c,l.value),d.value=T(i.value?s:c),y(g),h(g))}function V(g){const s=g.changedTouches[0].clientX,c=g.changedTouches[0].clientY;if(u){if(!g.cancelable){u=!1;return}const _=Math.abs(s-b[0]),x=Math.abs(c-b[1]);(i.value?_>x&&_>3:x>_&&x>3)?(w.value=!0,u=!1):(i.value?x:_)>3&&(u=!1)}if(!w.value)return;g.preventDefault(),h(g);const v=T(i.value?s:c,!1);d.value=Math.max(0,Math.min(1,v)),v>1?m.value=C(i.value?s:c,!0):v<0&&(m.value=C(i.value?s:c,!1))}function B(g){if(u=!1,!w.value)return;h(g),w.value=!1;const s=p(g.changedTouches[0].identifier),c=Math.abs(s.x),v=Math.abs(s.y);(i.value?c>v&&c>400:v>c&&v>3)?l.value=s.direction===({left:"right",right:"left",top:"down",bottom:"up"}[t.value]||W()):l.value=d.value>.5}const E=r(()=>w.value?{transform:t.value==="left"?`translateX(calc(-100% + ${d.value*o.value}px))`:t.value==="right"?`translateX(calc(100% - ${d.value*o.value}px))`:t.value==="top"?`translateY(calc(-100% + ${d.value*o.value}px))`:t.value==="bottom"?`translateY(calc(100% - ${d.value*o.value}px))`:W(),transition:"none"}:void 0);return{isDragging:w,dragProgress:d,dragStyles:E}}function W(){throw new Error}function Ft(){const l=de("useScopeId").vnode.scopeId;return{scopeId:l?{[l]:""}:void 0}}const Ut=["start","end","left","right","top","bottom"],Zt=$({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Ut.includes(e)},sticky:Boolean,...Ee(),...K(),...Me(),...He(),...Re(),...se({tag:"nav"}),...me()},"VNavigationDrawer"),qt=D()({name:"VNavigationDrawer",props:Zt(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,l){let{attrs:n,emit:o,slots:a}=l;const{isRtl:t}=ge(),{themeClasses:i}=fe(e),{borderClasses:h}=Le(e),{backgroundColorClasses:y,backgroundColorStyles:p}=ce(U(e,"color")),{elevationClasses:u}=Pe(e),{mobile:w}=tt(),{roundedClasses:d}=Ae(e),m=ct(),b=Ie(e,"modelValue",null,I=>!!I),{ssrBootStyles:C}=he(),{scopeId:T}=Ft(),S=j(),V=k(!1),B=r(()=>e.rail&&e.expandOnHover&&V.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),E=r(()=>vt(e.location,t.value)),g=r(()=>!e.permanent&&(w.value||e.temporary)),s=r(()=>e.sticky&&!g.value&&E.value!=="bottom");ae(()=>e.expandOnHover&&e.rail!=null,()=>{L(V,I=>o("update:rail",!I))}),ae(()=>!e.disableResizeWatcher,()=>{L(g,I=>!e.permanent&&ot(()=>b.value=!I))}),ae(()=>!e.disableRouteWatcher&&!!m,()=>{L(m.currentRoute,()=>g.value&&(b.value=!1))}),L(()=>e.permanent,I=>{I&&(b.value=!0)}),at(()=>{e.modelValue!=null||g.value||(b.value=e.permanent||!w.value)});const{isDragging:c,dragProgress:v,dragStyles:_}=Xt({isActive:b,isTemporary:g,width:B,touchless:U(e,"touchless"),position:E}),x=r(()=>{const I=g.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):B.value;return c.value?I*v.value:I}),{layoutItemStyles:M,layoutItemScrimStyles:P}=Ne({id:e.name,order:r(()=>parseInt(e.order,10)),position:E,layoutSize:x,elementSize:B,active:r(()=>b.value||c.value),disableTransitions:r(()=>c.value),absolute:r(()=>e.absolute||s.value&&typeof H.value!="string")}),{isStuck:H,stickyStyles:z}=Dt({rootEl:S,isSticky:s,layoutItemStyles:M}),G=ce(r(()=>typeof e.scrim=="string"?e.scrim:null)),ye=r(()=>({...c.value?{opacity:v.value*.2,transition:"none"}:void 0,...P.value}));Te({VList:{bgColor:"transparent"}});function J(){V.value=!0}function Q(){V.value=!1}return O(()=>{const I=a.image||e.image;return f(Ce,null,[f(e.tag,ne({ref:S,onMouseenter:J,onMouseleave:Q,class:["v-navigation-drawer",`v-navigation-drawer--${E.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":V.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":g.value,"v-navigation-drawer--active":b.value,"v-navigation-drawer--sticky":s.value},i.value,y.value,h.value,u.value,d.value,e.class],style:[p.value,M.value,_.value,C.value,z.value,e.style]},T,n),{default:()=>{var ee,te,N,Y;return[I&&f("div",{key:"image",class:"v-navigation-drawer__img"},[a.image?(ee=a.image)==null?void 0:ee.call(a,{image:e.image}):f("img",{src:e.image,alt:""},null)]),a.prepend&&f("div",{class:"v-navigation-drawer__prepend"},[(te=a.prepend)==null?void 0:te.call(a)]),f("div",{class:"v-navigation-drawer__content"},[(N=a.default)==null?void 0:N.call(a)]),a.append&&f("div",{class:"v-navigation-drawer__append"},[(Y=a.append)==null?void 0:Y.call(a)])]}}),f(nt,{name:"fade-transition"},{default:()=>[g.value&&(c.value||b.value)&&!!e.scrim&&f("div",ne({class:["v-navigation-drawer__scrim",G.backgroundColorClasses.value],style:[ye.value,G.backgroundColorStyles.value],onClick:()=>b.value=!1},T),null)]})])}),{isStuck:H}}}),Jt={__name:"Default",setup(e){const l=dt(),{servers:n,filters:o}=l;function a(i){return l.filter===i.value}function t(i){l.filter=i.value}return r(()=>"current-filter"),(i,h)=>(F(),oe(zt,null,{default:Z(()=>[f(Pt,{class:"bg-brown-darken-4"}),f(qt,{floating:"",permanent:"",class:"bg-brown-darken-3","expand-on-hover":"",rail:""},{default:Z(()=>[(F(!0),lt(Ce,null,it(ke(o),y=>(F(),oe(mt,{"prepend-icon":y.icon,title:y.title,"active-class":"current-filter",active:a(y),onClick:p=>t(y)},null,8,["prepend-icon","title","active","onClick"]))),256))]),_:1}),f(Ht)]),_:1}))}};export{Jt as default};
