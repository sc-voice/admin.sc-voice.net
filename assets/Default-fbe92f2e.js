import{m as Z,a as ie,u as D,b as Te,c as Ie,d as ke,e as ce,f as Be,g as Ce,h as Ee,V as Xe,i as re,j as Fe,k as ve,l as qe,n as Me,o as Ue,G as Ze,p as Ke,t as Ge,q as Je}from"./VListItem-62046238.js";import{r as X,I as Qe,o as K,w as L,a as be,b as et,p as A,i as de,c as r,d as F,e as P,g as me,s as B,f as se,h as Re,j as tt,k as at,l as nt,m as ot,n as O,q as f,t as fe,u as U,v as ge,x as he,y as Le,z as lt,A as $e,B as ae,C as ne,D as it,E as q,F as oe,G as j,H as we,J as Pe,K as st,L as Ae,M as ut,N as rt,O as ct,P as vt,T as dt,Q as He,R as mt,S as ft,U as gt}from"./index-150faa8d.js";function ht(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const n=X(),o=X();if(Qe){const a=new ResizeObserver(t=>{e==null||e(t,a),t.length&&(l==="content"?o.value=t[0].contentRect:o.value=t[0].target.getBoundingClientRect())});K(()=>{a.disconnect()}),L(n,(t,i)=>{i&&(a.unobserve(be(i)),o.value=void 0),t&&a.observe(be(t))},{flush:"post"})}return{resizeRef:n,contentRect:et(o)}}const le=Symbol.for("vuetify:layout"),Ne=Symbol.for("vuetify:layout-item"),Se=1e3,yt=A({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),ze=A({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function pt(){const e=de(le);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function De(e){const l=de(le);if(!l)throw new Error("[Vuetify] Could not find injected layout");const n=e.id??`layout-item-${tt()}`,o=me("useLayoutItem");Re(Ne,{id:n});const a=B(!1);at(()=>a.value=!0),nt(()=>a.value=!1);const{layoutItemStyles:t,layoutItemScrimStyles:i}=l.register(o,{...e,active:r(()=>a.value?!1:e.active.value),id:n});return K(()=>l.unregister(n)),{layoutItemStyles:t,layoutRect:l.layoutRect,layoutItemScrimStyles:i}}const bt=(e,l,n,o)=>{let a={top:0,left:0,right:0,bottom:0};const t=[{id:"",layer:{...a}}];for(const i of e){const h=l.get(i),y=n.get(i),p=o.get(i);if(!h||!y||!p)continue;const u={...a,[h.value]:parseInt(a[h.value],10)+(p.value?parseInt(y.value,10):0)};t.push({id:i,layer:u}),a=u}return t};function wt(e){const l=de(le,null),n=r(()=>l?l.rootZIndex.value-100:Se),o=X([]),a=F(new Map),t=F(new Map),i=F(new Map),h=F(new Map),y=F(new Map),{resizeRef:p,contentRect:u}=ht(),w=r(()=>{const s=new Map,c=e.overlaps??[];for(const v of c.filter(_=>_.includes(":"))){const[_,x]=v.split(":");if(!o.value.includes(_)||!o.value.includes(x))continue;const M=a.get(_),$=a.get(x),H=t.get(_),z=t.get(x);!M||!$||!H||!z||(s.set(x,{position:M.value,amount:parseInt(H.value,10)}),s.set(_,{position:$.value,amount:-parseInt(z.value,10)}))}return s}),d=r(()=>{const s=[...new Set([...i.values()].map(v=>v.value))].sort((v,_)=>v-_),c=[];for(const v of s){const _=o.value.filter(x=>{var M;return((M=i.get(x))==null?void 0:M.value)===v});c.push(..._)}return bt(c,a,t,h)}),m=r(()=>!Array.from(y.values()).some(s=>s.value)),b=r(()=>d.value[d.value.length-1].layer),C=r(()=>({"--v-layout-left":P(b.value.left),"--v-layout-right":P(b.value.right),"--v-layout-top":P(b.value.top),"--v-layout-bottom":P(b.value.bottom),...m.value?void 0:{transition:"none"}})),T=r(()=>d.value.slice(1).map((s,c)=>{let{id:v}=s;const{layer:_}=d.value[c],x=t.get(v),M=a.get(v);return{id:v,..._,size:Number(x.value),position:M.value}})),S=s=>T.value.find(c=>c.id===s),V=me("createLayout"),k=B(!1);se(()=>{k.value=!0}),Re(le,{register:(s,c)=>{let{id:v,order:_,position:x,layoutSize:M,elementSize:$,active:H,disableTransitions:z,absolute:G}=c;i.set(v,_),a.set(v,x),t.set(v,M),h.set(v,H),z&&y.set(v,z);const J=ot(Ne,V==null?void 0:V.vnode).indexOf(s);J>-1?o.value.splice(J,0,v):o.value.push(v);const Q=r(()=>T.value.findIndex(N=>N.id===v)),I=r(()=>n.value+d.value.length*2-Q.value*2),ee=r(()=>{const N=x.value==="left"||x.value==="right",Y=x.value==="right",je=x.value==="bottom",pe={[x.value]:0,zIndex:I.value,transform:`translate${N?"X":"Y"}(${(H.value?0:-110)*(Y||je?-1:1)}%)`,position:G.value||n.value!==Se?"absolute":"fixed",...m.value?void 0:{transition:"none"}};if(!k.value)return pe;const R=T.value[Q.value];if(!R)throw new Error(`[Vuetify] Could not find layout item "${v}"`);const ue=w.value.get(v);return ue&&(R[ue.position]+=ue.amount),{...pe,height:N?`calc(100% - ${R.top}px - ${R.bottom}px)`:$.value?`${$.value}px`:void 0,left:Y?void 0:`${R.left}px`,right:Y?`${R.right}px`:void 0,top:x.value!=="bottom"?`${R.top}px`:void 0,bottom:x.value!=="top"?`${R.bottom}px`:void 0,width:N?$.value?`${$.value}px`:void 0:`calc(100% - ${R.left}px - ${R.right}px)`}}),te=r(()=>({zIndex:I.value-1}));return{layoutItemStyles:ee,layoutItemScrimStyles:te,zIndex:I}},unregister:s=>{i.delete(s),a.delete(s),t.delete(s),h.delete(s),y.delete(s),o.value=o.value.filter(c=>c!==s)},mainRect:b,mainStyles:C,getLayoutItem:S,items:T,layoutRect:u,rootZIndex:n});const E=r(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),g=r(()=>({zIndex:l?n.value:void 0,position:l?"relative":void 0,overflow:l?"hidden":void 0}));return{layoutClasses:E,layoutStyles:g,getLayoutItem:S,items:T,layoutRect:u,layoutRef:p}}const St="admin.sc-voice.net",xt="0.36.0",_t={dev:"vite",build:"scripts/build-dist.sh","build:dist":"scripts/build-dist.sh","git:commit":"scripts/git-commit.sh",preview:"vite preview","gh-pages":"scripts/gh-pages.sh","push-action":"scripts/push-action","schedule-action":"scripts/schedule-action",lint:"eslint . --fix --ignore-path .gitignore"},Vt={"@jamescoyle/vue-icon":"^0.1.2","@mdi/font":"7.0.96","@mdi/js":"^7.3.67","@sc-voice/state-log":"^1.1.0","core-js":"^3.29.0","log-instance":"^1.5.0","merkle-json":"^2.6.0",pinia:"^2.0.0","roboto-fontface":"*","scv-esm":"^1.82.16",vue:"^3.2.0","vue-router":"^4.0.0",vuetify:"^3.0.0"},Tt={"@vitejs/plugin-vue":"^4.0.0",eslint:"^8.37.0","eslint-plugin-vue":"^9.3.0","memo-again":"^0.8.0",sass:"^1.60.0","unplugin-fonts":"^1.0.3",vite:"^4.2.0","vite-plugin-vuetify":"^1.0.0"},It={name:St,version:xt,private:!0,scripts:_t,dependencies:Vt,devDependencies:Tt};const Oe=A({text:String,...Z(),...ie()},"VToolbarTitle"),Ye=O()({name:"VToolbarTitle",props:Oe(),setup(e,l){let{slots:n}=l;return D(()=>{const o=!!(n.default||n.text||e.text);return f(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var a;return[o&&f("div",{class:"v-toolbar-title__placeholder"},[n.text?n.text():e.text,(a=n.default)==null?void 0:a.call(n)])]}})}),{}}}),kt=[null,"prominent","default","comfortable","compact"],We=A({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>kt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Te(),...Z(),...Ie(),...ke(),...ie({tag:"header"}),...fe()},"VToolbar"),xe=O()({name:"VToolbar",props:We(),setup(e,l){var m;let{slots:n}=l;const{backgroundColorClasses:o,backgroundColorStyles:a}=ce(U(e,"color")),{borderClasses:t}=Be(e),{elevationClasses:i}=Ce(e),{roundedClasses:h}=Ee(e),{themeClasses:y}=ge(e),{rtlClasses:p}=he(),u=B(!!(e.extended||(m=n.extension)!=null&&m.call(n))),w=r(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),d=r(()=>u.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Le({VBtn:{variant:"text"}}),D(()=>{var S;const b=!!(e.title||n.title),C=!!(n.image||e.image),T=(S=n.extension)==null?void 0:S.call(n);return u.value=!!(e.extended||T),f(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},o.value,t.value,i.value,h.value,y.value,p.value,e.class],style:[a.value,e.style]},{default:()=>[C&&f("div",{key:"image",class:"v-toolbar__image"},[n.image?f(re,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},n.image):f(Xe,{key:"image-img",cover:!0,src:e.image},null)]),f(re,{defaults:{VTabs:{height:P(w.value)}}},{default:()=>{var V,k,E;return[f("div",{class:"v-toolbar__content",style:{height:P(w.value)}},[n.prepend&&f("div",{class:"v-toolbar__prepend"},[(V=n.prepend)==null?void 0:V.call(n)]),b&&f(Ye,{key:"title",text:e.title},{text:n.title}),(k=n.default)==null?void 0:k.call(n),n.append&&f("div",{class:"v-toolbar__append"},[(E=n.append)==null?void 0:E.call(n)])])]}}),f(re,{defaults:{VTabs:{height:P(d.value)}}},{default:()=>[f(Fe,null,{default:()=>[u.value&&f("div",{class:"v-toolbar__extension",style:{height:P(d.value)}},[T])]})]})]})}),{contentHeight:w,extensionHeight:d}}}),Bt=A({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Ct(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:n}=l;let o=0;const a=X(null),t=B(0),i=B(0),h=B(0),y=B(!1),p=B(!1),u=r(()=>Number(e.scrollThreshold)),w=r(()=>lt((u.value-t.value)/u.value||0)),d=()=>{const m=a.value;!m||n&&!n.value||(o=t.value,t.value="window"in m?m.pageYOffset:m.scrollTop,p.value=t.value<o,h.value=Math.abs(t.value-u.value))};return L(p,()=>{i.value=i.value||t.value}),L(y,()=>{i.value=0}),se(()=>{L(()=>e.scrollTarget,m=>{var C;const b=m?document.querySelector(m):window;b&&b!==a.value&&((C=a.value)==null||C.removeEventListener("scroll",d),a.value=b,a.value.addEventListener("scroll",d,{passive:!0}))},{immediate:!0})}),K(()=>{var m;(m=a.value)==null||m.removeEventListener("scroll",d)}),n&&L(n,d,{immediate:!0}),{scrollThreshold:u,currentScroll:t,currentThreshold:h,isScrollActive:y,scrollRatio:w,isScrollingUp:p,savedScroll:i}}const Et=A({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...We(),...ze(),...Bt(),height:{type:[Number,String],default:64}},"VAppBar"),Mt=O()({name:"VAppBar",props:Et(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:n}=l;const o=X(),a=$e(e,"modelValue"),t=r(()=>{var V;const S=new Set(((V=e.scrollBehavior)==null?void 0:V.split(" "))??[]);return{hide:S.has("hide"),inverted:S.has("inverted"),collapse:S.has("collapse"),elevate:S.has("elevate"),fadeImage:S.has("fade-image")}}),i=r(()=>{const S=t.value;return S.hide||S.inverted||S.collapse||S.elevate||S.fadeImage||!a.value}),{currentScroll:h,scrollThreshold:y,isScrollingUp:p,scrollRatio:u}=Ct(e,{canScroll:i}),w=r(()=>e.collapse||t.value.collapse&&(t.value.inverted?u.value>0:u.value===0)),d=r(()=>e.flat||t.value.elevate&&(t.value.inverted?h.value>0:h.value===0)),m=r(()=>t.value.fadeImage?t.value.inverted?1-u.value:u.value:void 0),b=r(()=>{var k,E;if(t.value.hide&&t.value.inverted)return 0;const S=((k=o.value)==null?void 0:k.contentHeight)??0,V=((E=o.value)==null?void 0:E.extensionHeight)??0;return S+V});ae(r(()=>!!e.scrollBehavior),()=>{it(()=>{t.value.hide?t.value.inverted?a.value=h.value>y.value:a.value=p.value||h.value<y.value:a.value=!0})});const{ssrBootStyles:C}=ve(),{layoutItemStyles:T}=De({id:e.name,order:r(()=>parseInt(e.order,10)),position:U(e,"location"),layoutSize:b,elementSize:B(void 0),active:a,absolute:U(e,"absolute")});return D(()=>{const[S]=xe.filterProps(e);return f(xe,ne({ref:o,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...T.value,"--v-toolbar-image-opacity":m.value,height:void 0,...C.value},e.style]},S,{collapse:w.value,flat:d.value}),n)}),{}}}),Rt=O()({name:"VAppBarTitle",props:Oe(),setup(e,l){let{slots:n}=l;return D(()=>f(Ye,ne(e,{class:"v-app-bar-title"}),n)),{}}}),Lt=qe("v-spacer","div","VSpacer"),$t=Pe("div",{class:"text-caption"}," SuttaCentral Voice Administration ",-1),Pt={class:"mr-5"},At={__name:"AppBar",setup(e){var l=Me();function n(){let a=`[${Ze[l.itemIndex].title}](${window.location})`;navigator.clipboard.writeText(a),alert(`Copied Markdown link ${a}`)}return(o,a)=>(q(),oe(Mt,{flat:""},{default:j(()=>[f(Rt,null,{default:j(()=>[we(" admin.sc-voice.net "),$t]),_:1}),f(Lt),f(Ue,{class:"mr-5",onClick:n},{default:j(()=>[we("mdi-link")]),_:1}),Pe("div",Pt,"v"+st(Ae(It).version),1)]),_:1}))}};const Ht=A({scrollable:Boolean,...Z(),...ie({tag:"main"})},"VMain"),Nt=O()({name:"VMain",props:Ht(),setup(e,l){let{slots:n}=l;const{mainStyles:o}=pt(),{ssrBootStyles:a}=ve();return D(()=>f(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[o.value,a.value,e.style]},{default:()=>{var t,i;return[e.scrollable?f("div",{class:"v-main__scroller"},[(t=n.default)==null?void 0:t.call(n)]):(i=n.default)==null?void 0:i.call(n)]}})),{}}}),zt={__name:"View",setup(e){return(l,n)=>{const o=ut("router-view");return q(),oe(Nt,null,{default:j(()=>[f(o)]),_:1})}}};const Dt=A({...Z(),...yt({fullHeight:!0}),...fe()},"VApp"),Ot=O()({name:"VApp",props:Dt(),setup(e,l){let{slots:n}=l;const o=ge(e),{layoutClasses:a,getLayoutItem:t,items:i,layoutRef:h}=wt(e),{rtlClasses:y}=he();return D(()=>{var p;return f("div",{ref:h,class:["v-application",o.themeClasses.value,a.value,y.value,e.class],style:[e.style]},[f("div",{class:"v-application__wrap"},[(p=n.default)==null?void 0:p.call(n)])])}),{getLayoutItem:t,items:i,theme:o}}});function Yt(e){let{rootEl:l,isSticky:n,layoutItemStyles:o}=e;const a=B(!1),t=B(0),i=r(()=>{const p=typeof a.value=="boolean"?"top":a.value;return[n.value?{top:"auto",bottom:"auto",height:void 0}:void 0,a.value?{[p]:P(t.value)}:{top:o.value.top}]});se(()=>{L(n,p=>{p?window.addEventListener("scroll",y,{passive:!0}):window.removeEventListener("scroll",y)},{immediate:!0})}),K(()=>{window.removeEventListener("scroll",y)});let h=0;function y(){const p=h>window.scrollY?"up":"down",u=l.value.getBoundingClientRect(),w=parseFloat(o.value.top??0),d=window.scrollY-Math.max(0,t.value-w),m=u.height+Math.max(t.value,w)-window.scrollY-window.innerHeight,b=parseFloat(getComputedStyle(l.value).getPropertyValue("--v-body-scroll-y"))||0;u.height<window.innerHeight-w?(a.value="top",t.value=w):p==="up"&&a.value==="bottom"||p==="down"&&a.value==="top"?(t.value=window.scrollY+u.top-b,a.value=!0):p==="down"&&m<=0?(t.value=0,a.value="bottom"):p==="up"&&d<=0&&(b?a.value!=="top"&&(t.value=-d+b+w,a.value="top"):(t.value=u.top+d,a.value="top")),h=window.scrollY}return{isStuck:a,stickyStyles:i}}const Wt=100,jt=20;function _e(e){const l=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*l}function Ve(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let l=0;for(let n=e.length-1;n>0;n--){if(e[n].t===e[n-1].t)continue;const o=_e(l),a=(e[n].d-e[n-1].d)/(e[n].t-e[n-1].t);l+=(a-o)*Math.abs(a),n===e.length-1&&(l*=.5)}return _e(l)*1e3}function Xt(){const e={};function l(a){Array.from(a.changedTouches).forEach(t=>{(e[t.identifier]??(e[t.identifier]=new rt(jt))).push([a.timeStamp,t])})}function n(a){Array.from(a.changedTouches).forEach(t=>{delete e[t.identifier]})}function o(a){var p;const t=(p=e[a])==null?void 0:p.values().reverse();if(!t)throw new Error(`No samples for touch id ${a}`);const i=t[0],h=[],y=[];for(const u of t){if(i[0]-u[0]>Wt)break;h.push({t:u[0],d:u[1].clientX}),y.push({t:u[0],d:u[1].clientY})}return{x:Ve(h),y:Ve(y),get direction(){const{x:u,y:w}=this,[d,m]=[Math.abs(u),Math.abs(w)];return d>m&&u>=0?"right":d>m&&u<=0?"left":m>d&&w>=0?"down":m>d&&w<=0?"up":Ft()}}}return{addMovement:l,endTouch:n,getVelocity:o}}function Ft(){throw new Error}function qt(e){let{isActive:l,isTemporary:n,width:o,touchless:a,position:t}=e;se(()=>{window.addEventListener("touchstart",S,{passive:!0}),window.addEventListener("touchmove",V,{passive:!1}),window.addEventListener("touchend",k,{passive:!0})}),K(()=>{window.removeEventListener("touchstart",S),window.removeEventListener("touchmove",V),window.removeEventListener("touchend",k)});const i=r(()=>["left","right"].includes(t.value)),{addMovement:h,endTouch:y,getVelocity:p}=Xt();let u=!1;const w=B(!1),d=B(0),m=B(0);let b;function C(g,s){return(t.value==="left"?g:t.value==="right"?document.documentElement.clientWidth-g:t.value==="top"?g:t.value==="bottom"?document.documentElement.clientHeight-g:W())-(s?o.value:0)}function T(g){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const c=t.value==="left"?(g-m.value)/o.value:t.value==="right"?(document.documentElement.clientWidth-g-m.value)/o.value:t.value==="top"?(g-m.value)/o.value:t.value==="bottom"?(document.documentElement.clientHeight-g-m.value)/o.value:W();return s?Math.max(0,Math.min(1,c)):c}function S(g){if(a.value)return;const s=g.changedTouches[0].clientX,c=g.changedTouches[0].clientY,v=25,_=t.value==="left"?s<v:t.value==="right"?s>document.documentElement.clientWidth-v:t.value==="top"?c<v:t.value==="bottom"?c>document.documentElement.clientHeight-v:W(),x=l.value&&(t.value==="left"?s<o.value:t.value==="right"?s>document.documentElement.clientWidth-o.value:t.value==="top"?c<o.value:t.value==="bottom"?c>document.documentElement.clientHeight-o.value:W());(_||x||l.value&&n.value)&&(u=!0,b=[s,c],m.value=C(i.value?s:c,l.value),d.value=T(i.value?s:c),y(g),h(g))}function V(g){const s=g.changedTouches[0].clientX,c=g.changedTouches[0].clientY;if(u){if(!g.cancelable){u=!1;return}const _=Math.abs(s-b[0]),x=Math.abs(c-b[1]);(i.value?_>x&&_>3:x>_&&x>3)?(w.value=!0,u=!1):(i.value?x:_)>3&&(u=!1)}if(!w.value)return;g.preventDefault(),h(g);const v=T(i.value?s:c,!1);d.value=Math.max(0,Math.min(1,v)),v>1?m.value=C(i.value?s:c,!0):v<0&&(m.value=C(i.value?s:c,!1))}function k(g){if(u=!1,!w.value)return;h(g),w.value=!1;const s=p(g.changedTouches[0].identifier),c=Math.abs(s.x),v=Math.abs(s.y);(i.value?c>v&&c>400:v>c&&v>3)?l.value=s.direction===({left:"right",right:"left",top:"down",bottom:"up"}[t.value]||W()):l.value=d.value>.5}const E=r(()=>w.value?{transform:t.value==="left"?`translateX(calc(-100% + ${d.value*o.value}px))`:t.value==="right"?`translateX(calc(100% - ${d.value*o.value}px))`:t.value==="top"?`translateY(calc(-100% + ${d.value*o.value}px))`:t.value==="bottom"?`translateY(calc(100% - ${d.value*o.value}px))`:W(),transition:"none"}:void 0);return{isDragging:w,dragProgress:d,dragStyles:E}}function W(){throw new Error}function Ut(){const l=me("useScopeId").vnode.scopeId;return{scopeId:l?{[l]:""}:void 0}}const Zt=["start","end","left","right","top","bottom"],Kt=A({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Zt.includes(e)},sticky:Boolean,...Te(),...Z(),...Ie(),...ze(),...ke(),...ie({tag:"nav"}),...fe()},"VNavigationDrawer"),Gt=O()({name:"VNavigationDrawer",props:Kt(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,l){let{attrs:n,emit:o,slots:a}=l;const{isRtl:t}=he(),{themeClasses:i}=ge(e),{borderClasses:h}=Be(e),{backgroundColorClasses:y,backgroundColorStyles:p}=ce(U(e,"color")),{elevationClasses:u}=Ce(e),{mobile:w}=ct(),{roundedClasses:d}=Ee(e),m=Ke(),b=$e(e,"modelValue",null,I=>!!I),{ssrBootStyles:C}=ve(),{scopeId:T}=Ut(),S=X(),V=B(!1),k=r(()=>e.rail&&e.expandOnHover&&V.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),E=r(()=>Ge(e.location,t.value)),g=r(()=>!e.permanent&&(w.value||e.temporary)),s=r(()=>e.sticky&&!g.value&&E.value!=="bottom");ae(()=>e.expandOnHover&&e.rail!=null,()=>{L(V,I=>o("update:rail",!I))}),ae(()=>!e.disableResizeWatcher,()=>{L(g,I=>!e.permanent&&mt(()=>b.value=!I))}),ae(()=>!e.disableRouteWatcher&&!!m,()=>{L(m.currentRoute,()=>g.value&&(b.value=!1))}),L(()=>e.permanent,I=>{I&&(b.value=!0)}),vt(()=>{e.modelValue!=null||g.value||(b.value=e.permanent||!w.value)});const{isDragging:c,dragProgress:v,dragStyles:_}=qt({isActive:b,isTemporary:g,width:k,touchless:U(e,"touchless"),position:E}),x=r(()=>{const I=g.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):k.value;return c.value?I*v.value:I}),{layoutItemStyles:M,layoutItemScrimStyles:$}=De({id:e.name,order:r(()=>parseInt(e.order,10)),position:E,layoutSize:x,elementSize:k,active:r(()=>b.value||c.value),disableTransitions:r(()=>c.value),absolute:r(()=>e.absolute||s.value&&typeof H.value!="string")}),{isStuck:H,stickyStyles:z}=Yt({rootEl:S,isSticky:s,layoutItemStyles:M}),G=ce(r(()=>typeof e.scrim=="string"?e.scrim:null)),ye=r(()=>({...c.value?{opacity:v.value*.2,transition:"none"}:void 0,...$.value}));Le({VList:{bgColor:"transparent"}});function J(){V.value=!0}function Q(){V.value=!1}return D(()=>{const I=a.image||e.image;return f(He,null,[f(e.tag,ne({ref:S,onMouseenter:J,onMouseleave:Q,class:["v-navigation-drawer",`v-navigation-drawer--${E.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":V.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":g.value,"v-navigation-drawer--active":b.value,"v-navigation-drawer--sticky":s.value},i.value,y.value,h.value,u.value,d.value,e.class],style:[p.value,M.value,_.value,C.value,z.value,e.style]},T,n),{default:()=>{var ee,te,N,Y;return[I&&f("div",{key:"image",class:"v-navigation-drawer__img"},[a.image?(ee=a.image)==null?void 0:ee.call(a,{image:e.image}):f("img",{src:e.image,alt:""},null)]),a.prepend&&f("div",{class:"v-navigation-drawer__prepend"},[(te=a.prepend)==null?void 0:te.call(a)]),f("div",{class:"v-navigation-drawer__content"},[(N=a.default)==null?void 0:N.call(a)]),a.append&&f("div",{class:"v-navigation-drawer__append"},[(Y=a.append)==null?void 0:Y.call(a)])]}}),f(dt,{name:"fade-transition"},{default:()=>[g.value&&(c.value||b.value)&&!!e.scrim&&f("div",ne({class:["v-navigation-drawer__scrim",G.backgroundColorClasses.value],style:[ye.value,G.backgroundColorStyles.value],onClick:()=>b.value=!1},T),null)]})])}),{isStuck:H}}}),ea={__name:"Default",setup(e){const l=Me(),{servers:n,filters:o}=l;function a(i){return l.filter===i.value}function t(i){l.filter=i.value}return r(()=>"current-filter"),(i,h)=>(q(),oe(Ot,null,{default:j(()=>[f(At,{class:"bg-brown-darken-4"}),f(Gt,{floating:"",permanent:"",class:"bg-brown-darken-3","expand-on-hover":"",rail:""},{default:j(()=>[(q(!0),ft(He,null,gt(Ae(o),y=>(q(),oe(Je,{"prepend-icon":y.icon,title:y.title,"active-class":"current-filter",active:a(y),onClick:p=>t(y)},null,8,["prepend-icon","title","active","onClick"]))),256))]),_:1}),f(zt)]),_:1}))}};export{ea as default};
