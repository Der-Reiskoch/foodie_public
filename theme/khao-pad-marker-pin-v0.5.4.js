import{B as k,M as g,v as h,J as s,$ as d,g as f,D as l,P as $,X as m,A as p,W as u,K as v,o as b,i as x,c as y,R as N,e as w}from"./svelte-chunk-D9KZ3qjS.js";import{B}from"./khao-ui-icon-3.2.13.js";function A(a){f(a,"svelte-c2yd6g",':host{display:block;--khao-marker-pin-icon-color:var(--khao-sys-static-color-black);--khao-marker-pin-icon-bgcolor:var(--khao-sys-static-color-white);--khao-marker-pin-icon-offset-y:0.3rem;--khao-marker-pin-icon-offset-x:0.4rem}.pin.svelte-c2yd6g{width:32px;height:32px;border-radius:50% 50% 50% 0;position:relative;transform:rotate(-45deg);left:50%;top:50%}.pin.svelte-c2yd6g::before{content:"";width:26px;height:26px;margin:3px 0 0 3px;position:absolute;background:var(--khao-marker-pin-icon-bgcolor);color:var(--khao-marker-pin-icon-color);border-radius:50%}.icon.svelte-c2yd6g{position:absolute;top:var(--khao-marker-pin-icon-offset-y);left:var(--khao-marker-pin-icon-offset-x);transform:rotate(45deg);text-align:center}')}function M(a){let o,i,e,r;return e=new B({props:{iconName:a[1],sizeFactor:"5"}}),{c(){o=l("div"),i=l("span"),$(e.$$.fragment),m(i,"class","icon svelte-c2yd6g"),p(o,"background-color",a[0]),m(o,"class","pin svelte-c2yd6g")},m(t,n){u(t,o,n),v(o,i),b(e,i,null),r=!0},p(t,[n]){const c={};n&2&&(c.iconName=t[1]),e.$set(c),(!r||n&1)&&p(o,"background-color",t[0])},i(t){r||(x(e.$$.fragment,t),r=!0)},o(t){y(e.$$.fragment,t),r=!1},d(t){t&&N(o),w(e)}}}function P(a,o,i){let{color:e}=o,{iconName:r}=o;return a.$$set=t=>{"color"in t&&i(0,e=t.color),"iconName"in t&&i(1,r=t.iconName)},[e,r]}class S extends g{constructor(o){super(),h(this,o,P,M,d,{color:0,iconName:1},A)}get color(){return this.$$.ctx[0]}set color(o){this.$$set({color:o}),s()}get iconName(){return this.$$.ctx[1]}set iconName(o){this.$$set({iconName:o}),s()}}customElements.define("khao-map-marker-pin",k(S,{color:{},iconName:{}},[],[],!0));