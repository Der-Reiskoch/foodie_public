import{c as y,S as v,i as u,f as n,s as f,a as g,r as d,e as b,d as h,j as m,x as _,y as x,z as j,u as q,v as z,o as L}from"./svelte-chunk-vhzq62JZ.js";const w="surface",C="outlined";function D(t){g(t,"svelte-11cqbj8",`:host{--khao-chip-min-width:var(--khao-sys-size-regular-4);--khao-chip-height:var(--khao-sys-size-regular-3);--khao-chip-top-space:var(--khao-sys-size-regular-2);--khao-chip-trailing-space:var(--khao-sys-size-regular-3);--khao-chip-container-shape:var(--khao-sys-shape-corner-full);--khao-chip-outline:none;--khao-chip-font-size:var(--khao-sys-size-typography-2);--khao-chip-hover-state-layer-opacity:var(
      --khao-sys-state-hover-state-layer-opacity
    );--khao-chip-focus-state-layer-opacity:var(
      --khao-sys-state-focus-state-layer-opacity
    );--khao-chip-pressed-state-layer-opacity:var(
      --khao-sys-state-pressed-state-layer-opacity
    )}.chip.svelte-11cqbj8{display:inline-flex;align-items:center;justify-content:center;padding:var(--khao-chip-top-space) var(--khao-chip-trailing-space);margin:0;min-width:var(--khao-chip-width);height:var(--khao-chip-height);font-size:var(--khao-chip-font-size);font-family:inherit;text-decoration:none;border-radius:var(--khao-chip-container-shape);outline:var(--khao-chip-outline);background-color:var(--khao-chip-container-color);color:var(--khao-chip-text-color);transition:background-color 0.1s,
      color 0.2s;&:hover {
      background-color: color-mix(
        in srgb,
        var(--khao-chip-container-color),
        var(--khao-chip-state-layer-color)
          var(--khao-chip-hover-state-layer-opacity)
      );
    };&:focus-visible {
      background-color: color-mix(
        in srgb,
        var(--khao-chip-container-color),
        var(--khao-chip-state-layer-color)
          var(--khao-chip-focus-state-layer-opacity)
      );
    };&:active {
      background-color: color-mix(
        in srgb,
        var(--khao-chip-container-color),
        var(--khao-chip-state-layer-color)
          var(--khao-chip-pressed-state-layer-opacity)
      );
    }}.chip-primary.svelte-11cqbj8{--khao-chip-container-color:var(--khao-sys-color-primary);--khao-chip-outline:1px solid var(--khao-sys-color-primary);--khao-chip-text-color:var(--khao-sys-color-on-primary);--khao-chip-state-layer-color:var(--khao-sys-color-on-primary)}.chip-secondary.svelte-11cqbj8{--khao-chip-container-color:var(--khao-sys-color-secondary);--khao-chip-outline:1px solid var(--khao-sys-color-secondary);--khao-chip-text-color:var(--khao-sys-color-on-secondary);--khao-chip-state-layer-color:var(--khao-sys-color-on-secondary)}.chip-tertiary.svelte-11cqbj8{--khao-chip-container-color:var(--khao-sys-color-tertiary);--khao-chip-outline:1px solid var(--khao-sys-color-tertiary);--khao-chip-text-color:var(--khao-sys-color-on-tertiary);--khao-chip-state-layer-color:var(--khao-sys-color-on-tertiary)}.chip-success.svelte-11cqbj8{--khao-chip-container-color:var(--khao-sys-static-color-green);--khao-chip-outline:1px solid var(--khao-sys-static-color-green);--khao-chip-text-color:var(--khao-sys-static-color-on-green);--khao-chip-state-layer-color:var(--khao-sys-static-color-on-green)}.chip-error.svelte-11cqbj8{--khao-chip-container-color:var(--khao-sys-static-color-red);--khao-chip-outline:1px solid var(--khao-sys-static-color-red);--khao-chip-text-color:var(--khao-sys-static-color-on-red);--khao-chip-state-layer-color:var(--khao-sys-static-color-on-red)}.chip-type-filled.svelte-11cqbj8{--khao-chip-outline:none}.chip-type-outlined.svelte-11cqbj8{--khao-chip-container-color:var(--khao-sys-color-surface);--khao-chip-text-color:var(--khao-sys-color-on-surface);--khao-chip-outline:1px solid var(--khao-sys-color-outline);&:hover {
      --khao-chip-container-color: var(--khao-sys-static-color-green);
      --khao-chip-text-color: var(--khao-sys-static-color-on-green);
      --khao-chip-state-layer-color: var(--khao-sys-color-surface);
    };&:focus-visible {
      --khao-chip-container-color: var(--khao-sys-static-color-green);
      --khao-chip-text-color: var(--khao-sys-static-color-on-green);
      --khao-chip-state-layer-color: var(--khao-sys-color-surface);
      --khao-chip-outline: 2px solid var(--khao-sys-color-neutral30);
    };&:active {
      --khao-chip-container-color: var(--khao-sys-static-color-green);
      --khao-chip-text-color: var(--khao-sys-static-color-on-green);
      --khao-chip-state-layer-color: var(--khao-sys-color-surface);
    }}`)}function S(t){let o,s,r;const l=t[6].default,e=d(l,t,t[5],null);return{c(){o=b("a"),e&&e.c(),h(o,"class",s="chip chip-"+t[1]+" chip-type-"+t[2]+" svelte-11cqbj8"),h(o,"href",t[0]),h(o,"title",t[3]),h(o,"aria-label",t[4])},m(a,c){m(a,o,c),e&&e.m(o,null),r=!0},p(a,[c]){e&&e.p&&(!r||c&32)&&_(e,l,a,a[5],r?j(l,a[5],c,null):x(a[5]),null),(!r||c&6&&s!==(s="chip chip-"+a[1]+" chip-type-"+a[2]+" svelte-11cqbj8"))&&h(o,"class",s),(!r||c&1)&&h(o,"href",a[0]),(!r||c&8)&&h(o,"title",a[3]),(!r||c&16)&&h(o,"aria-label",a[4])},i(a){r||(q(e,a),r=!0)},o(a){z(e,a),r=!1},d(a){a&&L(o),e&&e.d(a)}}}function E(t,o,s){let{$$slots:r={},$$scope:l}=o,{href:e=""}=o,{filling:a=w}=o,{type:c=C}=o,{title:k=""}=o,{ariaLabel:p=""}=o;return t.$$set=i=>{"href"in i&&s(0,e=i.href),"filling"in i&&s(1,a=i.filling),"type"in i&&s(2,c=i.type),"title"in i&&s(3,k=i.title),"ariaLabel"in i&&s(4,p=i.ariaLabel),"$$scope"in i&&s(5,l=i.$$scope)},[e,a,c,k,p,l,r]}class F extends v{constructor(o){super(),u(this,o,E,S,f,{href:0,filling:1,type:2,title:3,ariaLabel:4},D)}get href(){return this.$$.ctx[0]}set href(o){this.$$set({href:o}),n()}get filling(){return this.$$.ctx[1]}set filling(o){this.$$set({filling:o}),n()}get type(){return this.$$.ctx[2]}set type(o){this.$$set({type:o}),n()}get title(){return this.$$.ctx[3]}set title(o){this.$$set({title:o}),n()}get ariaLabel(){return this.$$.ctx[4]}set ariaLabel(o){this.$$set({ariaLabel:o}),n()}}customElements.define("khao-chip",y(F,{href:{},filling:{},type:{},title:{},ariaLabel:{}},["default"],[],!0));
