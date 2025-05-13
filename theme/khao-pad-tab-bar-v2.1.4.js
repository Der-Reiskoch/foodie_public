import{Z as $,u as E,h as O,n as S,a as l,l as W,q as f,$ as q,V as j,y,c as i,i as J,Y as Q,b as c,e as Y,O as Z,M as w,Q as A,j as B,L as N,m as C,D as F,E as g,t as G,W as H}from"./khao-ui-svelte-dispatchRemoteControlEvent-4.9.4.js";import{b as m,v as R}from"./khao-ui-svelte-style-4.9.4.js";var U=Object.defineProperty,X=(r,a,t)=>a in r?U(r,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[a]=t,p=(r,a,t)=>X(r,typeof a!="symbol"?a+"":a,t);class _{constructor(){p(this,"tablet",1024),p(this,"phone",620),p(this,"isTablet",()=>this.isEqualOrSmaller(this.tablet)),p(this,"isPhone",()=>this.isEqualOrSmaller(this.phone)),p(this,"isEqualOrSmaller",a=>window.innerWidth<=a)}}const aa=new _;var ea=$('<li role="tab"><a> </a></li>');const ta={hash:"svelte-1k1p0fp",code:`:host {--khao-tab-text-size: var(--khao-sys-size-typography-3);--khao-tab-leading-space: var(--khao-sys-size-regular-2);--khao-tab-trailing-space: var(--khao-sys-size-regular-2);--khao-tab-height: var(--khao-sys-size-regular-6);--khao-tab-width: var(--khao-sys-size-regular-8);--khao-tab-container-shape: var(--khao-sys-shape-corner-small);--khao-tab-active-height: var(--khao-sys-size-regular-7);--khao-tab-text-color: var(--khao-sys-color-neutral30);--khao-tab-state-layer-color: var(--khao-sys-color-neutral50);--khao-tab-border-color: var(--khao-sys-color-secondary);--khao-tab-hover-state-layer-opacity: var(
      --khao-sys-state-hover-state-layer-opacity
    );--khao-tab-focus-state-layer-opacity: var(
      --khao-sys-state-focus-state-layer-opacity
    );--khao-tab-pressed-state-layer-opacity: var(
      --khao-sys-state-pressed-state-layer-opacity
    );}.tab.svelte-1k1p0fp {align-items:center;background-color:var(--khao-sys-color-surface-variantd10);border-bottom-width:2px;border-top-left-radius:var(--khao-tab-container-shape);border-top-right-radius:var(--khao-tab-container-shape);border:1px solid var(--khao-tab-border-color);display:inline-flex;flex-direction:row;flex-wrap:nowrap;flex:0 0 auto;font-size:var(--khao-tab-text-size);height:var(--khao-tab-height);justify-content:center;list-style-type:none;padding:0.1rem var(--khao-tab-leading-space) 0.1rem
      var(--khao-tab-trailing-space);text-align:center;width:var(--khao-tab-width);&:hover {text-decoration:none !important;background-color:var(--khao-sys-color-outline);}&:focus-within {text-decoration:none !important;background-color:var(--khao-sys-color-outline);}}.tab-active.svelte-1k1p0fp {border-bottom:none;height:var(--khao-tab-active-height);background-color:transparent;}.tab-size-flex.svelte-1k1p0fp {--khao-tab-width: 100%;}.tab-size-compact.svelte-1k1p0fp {--khao-tab-width: 32px;}.tab-size-medium.svelte-1k1p0fp {--khao-tab-width: 64px;}.tab-size-large.svelte-1k1p0fp {--khao-tab-width: 96px;}.link.svelte-1k1p0fp {font-weight:400;color:var(--khao-tab-text-color);white-space:nowrap;text-decoration:none;min-width:3rem;overflow-x:hidden;text-overflow:ellipsis;margin:0 0.4rem;&:hover {text-decoration:none !important;color:color-mix(
        in srgb,
        var(--khao-tab-text-color),
        var(--khao-tab-layer-color) var(--khao-tab-hover-state-layer-opacity)
      );}&:focus-visible {outline:none;}}.link-active.svelte-1k1p0fp {font-weight:700;&:hover {color:inherit;font-weight:700;}}`};function I(r,a){O(a,!1),S(r,ta);let t=l(a,"label",12,""),s=l(a,"href",12,""),n=l(a,"title",12,""),h=l(a,"active",12,"false"),b=l(a,"size",28,()=>aa.isPhone()?"compact":"medium"),v=l(a,"key",12,"");W();var o=ea(),d=f(o),u=f(d,!0);return w(d),w(o),j(()=>{m(o,1,`tab ${h()==="true"?"tab-active":""} tab-size-${b()??""}`,"svelte-1k1p0fp"),g(o,"data-key",v()),g(o,"aria-selected",h()==="true"?"true":"false"),g(d,"href",s()),g(d,"title",n()),m(d,1,`link ${h()==="true"?"link-active":""}`,"svelte-1k1p0fp"),G(u,t())}),y(r,o),q({get label(){return t()},set label(e){t(e),i()},get href(){return s()},set href(e){s(e),i()},get title(){return n()},set title(e){n(e),i()},get active(){return h()},set active(e){h(e),i()},get size(){return b()},set size(e){b(e),i()},get key(){return v()},set key(e){v(e),i()}})}customElements.define("khao-tab",E(I,{label:{},href:{},title:{},active:{},size:{},key:{}},[],[],!0));const ra=r=>{if(window.IntersectionObserver){const a=function(t,s){t.forEach(n=>{n.isIntersecting&&(oa(r),s.unobserve(n.target))})};new IntersectionObserver(a,{rootMargin:"0px 0px 0px 0px",threshold:1}).observe(r)}},oa=r=>{const a=r.clientWidth,t=r.querySelector(".tab-bar > li.tab[aria-selected='true']");if(t){const s=t.clientWidth;t.offsetLeft+s>a&&t.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}};var sa=$('<ul role="tablist"><!></ul>');const la={hash:"svelte-rznysc",code:`:host {--khao-tab-bar-height: var(--khao-sys-size-regular-9);--khao-tab-bar-bg-color: var(--khao-sys-color-background);--khao-tab-bar-scroll-shadow-color: rgba(216, 216, 216, 1);--khao-tab-bar-scroll-shadow-size: 1rem;--khao-tab-bar-scroll-shadow-transparent: rgba(255, 255, 255, 0);}.tab-bar.svelte-rznysc {height:var(--khao-tab-bar-height);display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:start;align-items:end;gap:0;margin:0;overflow-x:auto;scrollbar-width:none;padding:0 1px;}.tab-bar.svelte-rznysc::-webkit-scrollbar {display:none;}.tab-bar-centered.svelte-rznysc {margin-left:auto;margin-right:auto;}.tab-bar-scroll-shadow.svelte-rznysc {overflow-x:scroll;background:linear-gradient(
        to right,
        var(--khao-tab-bar-bg-color),
        var(--khao-tab-bar-bg-color),
        var(--khao-tab-bar-scroll-shadow-transparent)
          calc(var(--khao-tab-bar-scroll-shadow-size) * 2)
      ),
      radial-gradient(
        farthest-side at left bottom,
        var(--khao-tab-bar-scroll-shadow-color),
        var(--khao-tab-bar-scroll-shadow-transparent)
      ),
      linear-gradient(
        to left,
        var(--khao-tab-bar-bg-color),
        var(--khao-tab-bar-bg-color),
        var(--khao-tab-bar-scroll-shadow-transparent)
          calc(var(--khao-tab-bar-scroll-shadow-size) * 2)
      ),
      radial-gradient(
        farthest-side at right bottom,
          var(--khao-tab-bar-scroll-shadow-color),
          var(--khao-tab-bar-scroll-shadow-transparent)
        )
        100%;background-color:var(--khao-tab-bar-bg-color);background-repeat:no-repeat;background-attachment:local, scroll, local, scroll;background-size:100% 100%,
      var(--khao-tab-bar-scroll-shadow-size) 100%,
      100% 100%,
      var(--khao-tab-bar-scroll-shadow-size) 100%;height:calc(var(--khao-tab-bar-height)-20px);}`};function ia(r,a){O(a,!1),S(r,la);let t=J();Q(()=>{ra(c(t))});let s=l(a,"tabs",12,""),n=l(a,"activeTabKey",12,""),h=l(a,"maxWidth",12,"860px"),b=l(a,"centered",12,"false"),v=l(a,"scrollShadow",12,"false");W();var o=sa(),d=f(o);{var u=e=>{var x=A(),K=B(x);N(K,1,()=>JSON.parse(s()),C,(T,k)=>{let L=()=>c(k).label,z=()=>c(k).key,M=()=>c(k).href,P=()=>c(k).title,V=()=>c(k).size;const D=H(()=>n()===z()?"true":"false");I(T,{get key(){return z()},get label(){return L()},get href(){return M()},get title(){return P()},get active(){return c(D)},get size(){return V()}})}),y(e,x)};Y(d,e=>{s()&&e(u)})}return w(o),Z(o,e=>F(t,e),()=>c(t)),j(()=>{m(o,1,`tab-bar ${b()==="true"?"tab-bar-centered":""} ${v()==="true"?"tab-bar-scroll-shadow":""}`,"svelte-rznysc"),R(o,`max-width: ${h()??""}`)}),y(r,o),q({get tabs(){return s()},set tabs(e){s(e),i()},get activeTabKey(){return n()},set activeTabKey(e){n(e),i()},get maxWidth(){return h()},set maxWidth(e){h(e),i()},get centered(){return b()},set centered(e){b(e),i()},get scrollShadow(){return v()},set scrollShadow(e){v(e),i()}})}customElements.define("khao-tab-bar",E(ia,{tabs:{},activeTabKey:{},maxWidth:{},centered:{},scrollShadow:{}},[],[],!0));
