(()=>{var g="https://bebildere-den.reisko.ch",d="Leider nichts gefunden";var m={"asia shop":"asial\xE4den",asiashop:"asial\xE4den",banoi:"ban\xF4i",bittermelone:"bittergurke",bombai:"bombay",broccoli:"brokkoli",burma:"myanmar",coconut:"kokosnuss",currygericht:"curry","curry paste":"currypaste",enokipilze:"enoki",entensalat:"larb ped","fak thong":"fak tong",faschiertes:"hackfleisch",fingerwurz:"krachai",fischsauce:"fischso\xDFe",fishsauce:"fischso\xDFe",fisolen:"bohnen",fondue:"hotpot","fried rice":"khao pad",gambas:"garnelen",gaprau:"kra pao","ga prau":"kra pao",geang:"gaeng",g\u00E4ng:"gaeng",gem\u00FCsecurry:"curry",grapau:"kra pao","gra pau":"kra pao",gung:"goong",gochuyang:"gochujang","hot pot":"hotpot",huad:"lao pot","hang lay":"hang lea","hung lay":"hang lea",kai:"khai",kanom:"khanom",karlrsruhe:"karlsruhe","ka prao":"kra pao","konjak nudeln":"shirataki",krapao:"kra pao",krapau:"kra pao",krapow:"kra pao",laab:"larb",ladna:"rad na","la lot":"l\xE1 l\u1ED1t",laphet:"lahpet",larp:"larb",masaman:"massaman",massamann:"massaman",mexico:"mexikanisch","mii ":"mee",muu:"moo","moo krob":"moo grob",namtok:"nam tok",normai:"nor mai",n\u00FCa:"nuea",nuae:"nuea",obergin:"aubergin",orlam:"or lam",padthai:"pad thai","pak choy":"pak choi",pakchoy:"pak choi",pakchoi:"pak choi",palabog:"palabok",panang:"panaeng",pan\u00E4ng:"panaeng",paneng:"panaeng","papaya salat":"som tam","peking ente":"pekingente",phet:"phed",pla:"plaa","plaa muk":"plaa muek","plaa m\xFCk":"plaa muek",radna:"rad na","rat na":"rad na",ratna:"rad na",reisnudeln:"nudeln",rheinwok:"rhein wok","rice cake":"tteokbokki",schabu:"shabu",shakshouka:"shakshuka",szechuan:"sichuan",somtam:"som tam",sojasprosse:"mungbohnensprosse",soya:"soja",squid:"tintenfisch",teesalat:"lahpet","thai park":"thaiwiese",thaipark:"thaiwiese",thalee:"talee","tom kah":"tom kha",woonsen:"woon sen","yam nuea sap":"larb nuea",yamwoon:"yam woon",yum:"yam"};var f={die:{url:"/dies-und-das/",display:"Dies und das"},get:{url:"/getranke/",display:"Getr\xE4nke"},ins:{url:"/insirationen/",display:"Inspirationen"},mit:{url:"/mittagspause/",display:"Mittagspause"},aus:{url:"/ausprobiert/",display:"Ausprobiert"},rei:{url:"/reisen/",display:"Reisen"},res:{url:"/restaurants/",display:"Restaurants"},rez:{url:"/rezepte/",display:"Rezepte"},ute:{url:"/utensilien/",display:"Utensilien"},zut:{url:"/zutaten/",display:"Zutaten"}};var O=`<img
    src="/svg/sprites/meta-sprite.svg#author"
    alt="Jens"
    title="Jens"
    class="meta__icon icon-author"
    width="18"
    height="18"
/>`,A=`<img
    src="/svg/sprites/meta-sprite.svg#category"
    alt="Kategorie"
    title="Kategorie"
    class="meta__icon icon-category"
    width="18"
    height="18"
/>`,J=`<img
    src="/svg/sprites/meta-sprite.svg#date"
    alt="Datum"
    title="Datum"
    class="meta__icon icon-date"
    width="18"
    height="18"
/>`,K={author:O,category:A,time:J},o=K;function P(a,e){let t={url:"",display:""};return e.hasOwnProperty(a)&&(t=e[a]),t}var k=P;function F(a){var e="";if(a){let t=k(a.toLowerCase(),f);t.url!==""&&t.display!==""&&(e=`<div class="meta__item-categories meta__item">${o.category}<span class="meta__text"><a class="meta__link" href="${t.url}" rel="category" title="Kategorie ${t.display}">${t.display}</a>
                    </span></div>`)}return e}var y=F;function G(a,e,t,r){var n=r&&r.toLowerCase()==="ins"&&(a.indexOf("blogs")>-1||a.indexOf("videos")>-1||a.indexOf("gruppen"))?"image__flat js-lazy-img":"js-lazy-img";return`<figure class="list__thumbnail">
    <a href="${a}" tabindex="-1"><img src="/img/lazy-loading.png" data-src="${e}" alt="${t}" title="${t}" class="${n}" /></a>
    </figure>`}var _=G;function N(){var a=`<div class="list__meta meta"><div class="meta__item-author meta__item">${o.author}<span class="meta__text"><a class="meta__link" href="/info/ueber-mich/">Jens</a></span></div>`;return a}var v=N;var Q="01.01.0001";function V(a){let t=a!==Q?a:"05.01.2021";return`<div class="meta__item-datetime meta__item">${o.time}<time class="meta__text" datetime="">${t}</time></div>`}var b=V;function X(a,e,t,r,n){return`<header class="list__header">    
    <h2 class="list__title post__title ">
    <a href="${e}">${a}</a>
    </h2>
    ${t}
    ${r}
    ${n}
    </header>`}var x=X;function Z(a){var e="";return a&&(e=`<div class="content list__excerpt post__content clearfix">${a}</div>`),e}var w=Z;function W(a,e){return`<div class="list__content">
    ${a}${e}
    </div>`}var $=W;var Y=function(a,e){let t="";return a&&e&&(t=`<div class="list__item post">
        ${a}${e}
        </div>`),t},L=Y;var p,l,c,s=null,z=[],q=g,aa=20;function T(a){var e=c.value,t=0;if(a.length>0){s.innerHTML="";let r="";a.forEach(n=>{var u=n.ref;if((e==="alle"||u.indexOf("/"+e+"/")>-1)&&t++<=aa){var i=z[n.ref];let S=_(u,q+i.image,i.title,i.category),H=v(),I=b(i.date),R=y(i.category),j=x(i.title,u,H,I,R),D=w(i.summary),E=$(j,D);r+=L(S,E)}}),s.innerHTML=r,lazyLoadImages!==void 0&&lazyLoadImages()}t===0&&(s.innerHTML='<p class="search__no-results">'+d+"</p>")}function C(a){var e=a?a.toLowerCase():"",t=new RegExp(Object.keys(m).join("|"),"gi");e=e.replace(t,function(n){return m[n]});var r=e.length<5?"*":"~0.2";return e=e+r,e}function ea(){var a=window.location.search;if(a&&URLSearchParams!==void 0){var e=new URLSearchParams(a),t="",r="";if(e.has("q")&&(t=e.get("q"),l.value=t),e.has("s")&&(r=e.get("s"),c.value=r),t){var n=p.search(C(t));T(n)}}}function ta(){ea(),l.onkeyup=function(){var a=l.value;if(c.value==="id")a!==""&&typeof!isNaN(a)&&a.length===4?document.location.href="/suchen/id/?e="+parseInt(a,10):s.innerHTML="Bitte vierstellige ID eingeben (z.B. 0333)";else if(a!==""&&a.length>=3){var e=p.search(C(a));T(e)}else s.innerHTML=""},l.focus(),l.placeholder=""}function ra(){l=document.getElementById("search-input"),c=document.getElementById("search-sections"),s=document.getElementById("search-results"),fetch("/index.json",{method:"get"}).then(a=>a.json()).then(a=>{p=lunr(function(){this.ref("u"),this.field("t",{boost:20}),this.field("s",{boost:10}),this.field("ts"),a.forEach(function(e){this.add(e),z[e.u]={title:e.t,summary:e.s,date:e.d,tags:e.t,category:e.c,image:e.i}},this)}),ta()}).catch(a=>{s.innerHTML=`<p>${a}</p>`})}window.addEventListener("load",function(){ra()});})();
