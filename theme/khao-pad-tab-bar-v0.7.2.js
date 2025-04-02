import{B as W,M as K,v as T,J as d,$ as O,g as j,D as u,H as P,X as c,W as f,K as y,N as q,j as m,R as g,A as $,i as k,c as p,L as E,k as B,x as I,C as J,y as L,P as H,o as M,e as R,f as X}from"./svelte-chunk-D9KZ3qjS.js";import{u as w}from"./svelte-chunk-D6YF6ztN.js";var A=Object.defineProperty,C=(s,t,a)=>t in s?A(s,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[t]=a,v=(s,t,a)=>C(s,typeof t!="symbol"?t+"":t,a);class D{constructor(){v(this,"tablet",1024),v(this,"phone",620),v(this,"isTablet",()=>this.isEqualOrSmaller(this.tablet)),v(this,"isPhone",()=>this.isEqualOrSmaller(this.phone)),v(this,"isEqualOrSmaller",t=>window.innerWidth<=t)}}const Q=new D;function U(s){j(s,"svelte-1k1p0fp",`:host{--khao-tab-text-size:var(--khao-sys-size-typography-3);--khao-tab-leading-space:var(--khao-sys-size-regular-2);--khao-tab-trailing-space:var(--khao-sys-size-regular-2);--khao-tab-height:var(--khao-sys-size-regular-6);--khao-tab-width:var(--khao-sys-size-regular-8);--khao-tab-container-shape:var(--khao-sys-shape-corner-small);--khao-tab-active-height:var(--khao-sys-size-regular-7);--khao-tab-text-color:var(--khao-sys-color-neutral30);--khao-tab-state-layer-color:var(--khao-sys-color-neutral50);--khao-tab-border-color:var(--khao-sys-color-secondary);--khao-tab-hover-state-layer-opacity:var(
      --khao-sys-state-hover-state-layer-opacity
    );--khao-tab-focus-state-layer-opacity:var(
      --khao-sys-state-focus-state-layer-opacity
    );--khao-tab-pressed-state-layer-opacity:var(
      --khao-sys-state-pressed-state-layer-opacity
    )}.tab.svelte-1k1p0fp{align-items:center;background-color:var(--khao-sys-color-surface-variantd10);border-bottom-width:2px;border-top-left-radius:var(--khao-tab-container-shape);border-top-right-radius:var(--khao-tab-container-shape);border:1px solid var(--khao-tab-border-color);display:inline-flex;flex-direction:row;flex-wrap:nowrap;flex:0 0 auto;font-size:var(--khao-tab-text-size);height:var(--khao-tab-height);justify-content:center;list-style-type:none;padding:0.1rem var(--khao-tab-leading-space) 0.1rem
      var(--khao-tab-trailing-space);text-align:center;width:var(--khao-tab-width);&:hover {
      text-decoration: none !important;
      background-color: var(--khao-sys-color-outline);
    };&:focus-within {
      text-decoration: none !important;
      background-color: var(--khao-sys-color-outline);
    }}.tab-active.svelte-1k1p0fp{border-bottom:none;height:var(--khao-tab-active-height);background-color:transparent}.tab-size-flex.svelte-1k1p0fp{--khao-tab-width:100%}.tab-size-compact.svelte-1k1p0fp{--khao-tab-width:32px}.tab-size-medium.svelte-1k1p0fp{--khao-tab-width:64px}.tab-size-large.svelte-1k1p0fp{--khao-tab-width:96px}.link.svelte-1k1p0fp{font-weight:400;color:var(--khao-tab-text-color);white-space:nowrap;text-decoration:none;min-width:3rem;overflow-x:hidden;text-overflow:ellipsis;margin:0 0.4rem;&:hover {
      text-decoration: none !important;

      color: color-mix(
        in srgb,
        var(--khao-tab-text-color),
        var(--khao-tab-layer-color) var(--khao-tab-hover-state-layer-opacity)
      );
    };&:focus-visible {
      outline: none;
    }}.link-active.svelte-1k1p0fp{font-weight:700;&:hover {
      color: inherit;
      font-weight: 700;
    }}`)}function V(s){let t,a,r,e,i,o;return{c(){t=u("li"),a=u("a"),r=P(s[0]),c(a,"href",s[1]),c(a,"title",s[2]),c(a,"class",e="link "+(s[3]==="true"?"link-active":"")+" svelte-1k1p0fp"),c(t,"class",i="tab "+(s[3]==="true"?"tab-active":"")+" tab-size-"+s[4]+" svelte-1k1p0fp"),c(t,"role","tab"),c(t,"data-key",s[5]),c(t,"aria-selected",o=s[3]==="true"?"true":"false")},m(n,l){f(n,t,l),y(t,a),y(a,r)},p(n,[l]){l&1&&q(r,n[0]),l&2&&c(a,"href",n[1]),l&4&&c(a,"title",n[2]),l&8&&e!==(e="link "+(n[3]==="true"?"link-active":"")+" svelte-1k1p0fp")&&c(a,"class",e),l&24&&i!==(i="tab "+(n[3]==="true"?"tab-active":"")+" tab-size-"+n[4]+" svelte-1k1p0fp")&&c(t,"class",i),l&32&&c(t,"data-key",n[5]),l&8&&o!==(o=n[3]==="true"?"true":"false")&&c(t,"aria-selected",o)},i:m,o:m,d(n){n&&g(t)}}}function Y(s,t,a){let{label:r=""}=t,{href:e=""}=t,{title:i=""}=t,{active:o="false"}=t,{size:n=Q.isPhone()?"compact":"medium"}=t,{key:l=""}=t;return s.$$set=h=>{"label"in h&&a(0,r=h.label),"href"in h&&a(1,e=h.href),"title"in h&&a(2,i=h.title),"active"in h&&a(3,o=h.active),"size"in h&&a(4,n=h.size),"key"in h&&a(5,l=h.key)},[r,e,i,o,n,l]}class N extends K{constructor(t){super(),T(this,t,Y,V,O,{label:0,href:1,title:2,active:3,size:4,key:5},U)}get label(){return this.$$.ctx[0]}set label(t){this.$$set({label:t}),d()}get href(){return this.$$.ctx[1]}set href(t){this.$$set({href:t}),d()}get title(){return this.$$.ctx[2]}set title(t){this.$$set({title:t}),d()}get active(){return this.$$.ctx[3]}set active(t){this.$$set({active:t}),d()}get size(){return this.$$.ctx[4]}set size(t){this.$$set({size:t}),d()}get key(){return this.$$.ctx[5]}set key(t){this.$$set({key:t}),d()}}customElements.define("khao-tab",W(N,{label:{},href:{},title:{},active:{},size:{},key:{}},[],[],!0));const Z=s=>{if(window.IntersectionObserver){const t=function(a,r){a.forEach(e=>{e.isIntersecting&&(F(s),r.unobserve(e.target))})};new IntersectionObserver(t,{rootMargin:"0px 0px 0px 0px",threshold:1}).observe(s)}},F=s=>{const t=s.clientWidth,a=s.querySelector(".tab-bar > li.tab[aria-selected='true']");if(a){const r=a.clientWidth;a.offsetLeft+r>t&&a.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}};function G(s){j(s,"svelte-rznysc",`:host{--khao-tab-bar-height:var(--khao-sys-size-regular-9);--khao-tab-bar-bg-color:var(--khao-sys-color-background);--khao-tab-bar-scroll-shadow-color:rgba(216, 216, 216, 1);--khao-tab-bar-scroll-shadow-size:1rem;--khao-tab-bar-scroll-shadow-transparent:rgba(255, 255, 255, 0)}.tab-bar.svelte-rznysc{height:var(--khao-tab-bar-height);display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:start;align-items:end;gap:0;margin:0;overflow-x:auto;scrollbar-width:none;padding:0 1px}.tab-bar.svelte-rznysc::-webkit-scrollbar{display:none}.tab-bar-centered.svelte-rznysc{margin-left:auto;margin-right:auto}.tab-bar-scroll-shadow.svelte-rznysc{overflow-x:scroll;background:linear-gradient(
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
      var(--khao-tab-bar-scroll-shadow-size) 100%;height:calc(var(--khao-tab-bar-height)-20px)}`)}function x(s,t,a){const r=s.slice();return r[7]=t[a].label,r[8]=t[a].key,r[9]=t[a].href,r[10]=t[a].title,r[11]=t[a].size,r}function z(s){let t,a,r=w(JSON.parse(s[0])),e=[];for(let o=0;o<r.length;o+=1)e[o]=S(x(s,r,o));const i=o=>p(e[o],1,1,()=>{e[o]=null});return{c(){for(let o=0;o<e.length;o+=1)e[o].c();t=I()},m(o,n){for(let l=0;l<e.length;l+=1)e[l]&&e[l].m(o,n);f(o,t,n),a=!0},p(o,n){if(n&3){r=w(JSON.parse(o[0]));let l;for(l=0;l<r.length;l+=1){const h=x(o,r,l);e[l]?(e[l].p(h,n),k(e[l],1)):(e[l]=S(h),e[l].c(),k(e[l],1),e[l].m(t.parentNode,t))}for(J(),l=r.length;l<e.length;l+=1)i(l);E()}},i(o){if(!a){for(let n=0;n<r.length;n+=1)k(e[n]);a=!0}},o(o){e=e.filter(Boolean);for(let n=0;n<e.length;n+=1)p(e[n]);a=!1},d(o){o&&g(t),L(e,o)}}}function S(s){let t,a;return t=new N({props:{key:s[8],label:s[7],href:s[9],title:s[10],active:s[1]===s[8]?"true":"false",size:s[11]}}),{c(){H(t.$$.fragment)},m(r,e){M(t,r,e),a=!0},p(r,e){const i={};e&1&&(i.key=r[8]),e&1&&(i.label=r[7]),e&1&&(i.href=r[9]),e&1&&(i.title=r[10]),e&3&&(i.active=r[1]===r[8]?"true":"false"),e&1&&(i.size=r[11]),t.$set(i)},i(r){a||(k(t.$$.fragment,r),a=!0)},o(r){p(t.$$.fragment,r),a=!1},d(r){R(t,r)}}}function _(s){let t,a,r,e=s[0]&&z(s);return{c(){t=u("ul"),e&&e.c(),c(t,"class",a="tab-bar "+(s[3]==="true"?"tab-bar-centered":"")+" "+(s[4]==="true"?"tab-bar-scroll-shadow":"")+" svelte-rznysc"),c(t,"role","tablist"),$(t,"max-width",s[2])},m(i,o){f(i,t,o),e&&e.m(t,null),s[6](t),r=!0},p(i,[o]){i[0]?e?(e.p(i,o),o&1&&k(e,1)):(e=z(i),e.c(),k(e,1),e.m(t,null)):e&&(J(),p(e,1,1,()=>{e=null}),E()),(!r||o&24&&a!==(a="tab-bar "+(i[3]==="true"?"tab-bar-centered":"")+" "+(i[4]==="true"?"tab-bar-scroll-shadow":"")+" svelte-rznysc"))&&c(t,"class",a),(!r||o&4)&&$(t,"max-width",i[2])},i(i){r||(k(e),r=!0)},o(i){p(e),r=!1},d(i){i&&g(t),e&&e.d(),s[6](null)}}}function tt(s,t,a){let r;B(()=>{Z(r)});let{tabs:e=""}=t,{activeTabKey:i=""}=t,{maxWidth:o="860px"}=t,{centered:n="false"}=t,{scrollShadow:l="false"}=t;function h(b){X[b?"unshift":"push"](()=>{r=b,a(5,r)})}return s.$$set=b=>{"tabs"in b&&a(0,e=b.tabs),"activeTabKey"in b&&a(1,i=b.activeTabKey),"maxWidth"in b&&a(2,o=b.maxWidth),"centered"in b&&a(3,n=b.centered),"scrollShadow"in b&&a(4,l=b.scrollShadow)},[e,i,o,n,l,r,h]}class et extends K{constructor(t){super(),T(this,t,tt,_,O,{tabs:0,activeTabKey:1,maxWidth:2,centered:3,scrollShadow:4},G)}get tabs(){return this.$$.ctx[0]}set tabs(t){this.$$set({tabs:t}),d()}get activeTabKey(){return this.$$.ctx[1]}set activeTabKey(t){this.$$set({activeTabKey:t}),d()}get maxWidth(){return this.$$.ctx[2]}set maxWidth(t){this.$$set({maxWidth:t}),d()}get centered(){return this.$$.ctx[3]}set centered(t){this.$$set({centered:t}),d()}get scrollShadow(){return this.$$.ctx[4]}set scrollShadow(t){this.$$set({scrollShadow:t}),d()}}customElements.define("khao-tab-bar",W(et,{tabs:{},activeTabKey:{},maxWidth:{},centered:{},scrollShadow:{}},[],[],!0));
