(()=>{var f="https://bebildere-den.reisko.ch",k="Leider nichts gefunden";var O="asial\xE4den",A="asial\xE4den",J="ban\xF4i",K="bittergurke",P="bombay",F="brokkoli",G="myanmar",N="kokosnuss",Q="curry",V="currypaste",X="enoki",Z="larb ped",W="fak tong",Y="hackfleisch",q="krachai",aa="fischso\xDFe",ea="fischso\xDFe",ta="bohnen",ra="hotpot",na="khao pad",ia="garnelen",sa="kra pao",oa="kra pao",la="gaeng",ua="gaeng",ca="curry",ma="kra pao",pa="kra pao",ha="goong",ga="gochujang",da="hotpot",fa="lao pot",ka="hang lea",ya="hang lea",_a="khai",va="khanom",ba="karlsruhe",xa="kra pao",wa="shirataki",$a="kra pao",La="kra pao",za="kra pao",Ta="larb",Ca="rad na",Sa="l\xE1 l\u1ED1t",Ha="lahpet",Ia="larb",Ra="massaman",ja="massaman",Da="mexikanisch",Ea="mee",Ma="moo",Ua="moo grob",Ba="nam tok",Oa="nor mai",Aa="nuea",Ja="nuea",Ka="aubergin",Pa="or lam",Fa="pad thai",Ga="pak choi",Na="pak choi",Qa="pak choi",Va="palabok",Xa="panaeng",Za="panaeng",Wa="panaeng",Ya="som tam",qa="pekingente",ae="phed",ee="plaa",te="plaa muek",re="plaa muek",ne="rad na",ie="rad na",se="rad na",oe="nudeln",le="rhein wok",ue="tteokbokki",ce="shabu",me="shakshuka",pe="sichuan",he="som tam",ge="mungbohnensprosse",de="soja",fe="tintenfisch",ke="lahpet",ye="thaiwiese",_e="thaiwiese",ve="talee",be="tom kha",xe="woon sen",we="larb nuea",$e="yam woon",Le="yam",h={"asia shop":O,asiashop:A,banoi:J,bittermelone:K,bombai:P,broccoli:F,burma:G,coconut:N,currygericht:Q,"curry paste":V,enokipilze:X,entensalat:Z,"fak thong":W,faschiertes:Y,fingerwurz:q,fischsauce:aa,fishsauce:ea,fisolen:ta,fondue:ra,"fried rice":na,gambas:ia,gaprau:sa,"ga prau":oa,geang:la,g\u00E4ng:ua,gem\u00FCsecurry:ca,grapau:ma,"gra pau":pa,gung:ha,gochuyang:ga,"hot pot":da,huad:fa,"hang lay":ka,"hung lay":ya,kai:_a,kanom:va,karlrsruhe:ba,"ka prao":xa,"konjak nudeln":wa,krapao:$a,krapau:La,krapow:za,laab:Ta,ladna:Ca,"la lot":Sa,laphet:Ha,larp:Ia,masaman:Ra,massamann:ja,mexico:Da,"mii ":Ea,muu:Ma,"moo krob":Ua,namtok:Ba,normai:Oa,n\u00FCa:Aa,nuae:Ja,obergin:Ka,orlam:Pa,padthai:Fa,"pak choy":Ga,pakchoy:Na,pakchoi:Qa,palabog:Va,panang:Xa,pan\u00E4ng:Za,paneng:Wa,"papaya salat":Ya,"peking ente":qa,phet:ae,pla:ee,"plaa muk":te,"plaa m\xFCk":re,radna:ne,"rat na":ie,ratna:se,reisnudeln:oe,rheinwok:le,"rice cake":ue,schabu:ce,shakshouka:me,szechuan:pe,somtam:he,sojasprosse:ge,soya:de,squid:fe,teesalat:ke,"thai park":ye,thaipark:_e,thalee:ve,"tom kah":be,woonsen:xe,"yam nuea sap":we,yamwoon:$e,yum:Le};var ze={url:"/dies-und-das/",display:"Dies und das"},Te={url:"/getranke/",display:"Getr\xE4nke"},Ce={url:"/insirationen/",display:"Inspirationen"},Se={url:"/mittagspause/",display:"Mittagspause"},He={url:"/ausprobiert/",display:"Ausprobiert"},Ie={url:"/reisen/",display:"Reisen"},Re={url:"/restaurants/",display:"Restaurants"},je={url:"/rezepte/",display:"Rezepte"},De={url:"/utensilien/",display:"Utensilien"},Ee={url:"/zutaten/",display:"Zutaten"},y={die:ze,get:Te,ins:Ce,mit:Se,aus:He,rei:Ie,res:Re,rez:je,ute:De,zut:Ee};var Me=`<img
    src="/svg/sprites/meta-sprite.svg#author"
    alt="Jens"
    title="Jens"
    class="meta__icon icon-author"
    width="18"
    height="18"
/>`,Ue=`<img
    src="/svg/sprites/meta-sprite.svg#category"
    alt="Kategorie"
    title="Kategorie"
    class="meta__icon icon-category"
    width="18"
    height="18"
/>`,Be=`<img
    src="/svg/sprites/meta-sprite.svg#date"
    alt="Datum"
    title="Datum"
    class="meta__icon icon-date"
    width="18"
    height="18"
/>`,Oe={author:Me,category:Ue,time:Be},u=Oe;function Ae(e,t){let r={url:"",display:""};return t.hasOwnProperty(e)&&(r=t[e]),r}var _=Ae;function Je(e){var t="";if(e){let r=_(e.toLowerCase(),y);r.url!==""&&r.display!==""&&(t=`<div class="meta__item-categories meta__item">${u.category}<span class="meta__text"><a class="meta__link" href="${r.url}" rel="category" title="Kategorie ${r.display}">${r.display}</a>
                    </span></div>`)}return t}var v=Je;function Ke(e,t,r,n){var s=n&&n.toLowerCase()==="ins"&&(e.indexOf("blogs")>-1||e.indexOf("videos")>-1||e.indexOf("gruppen"))?"image__flat js-lazy-img":"js-lazy-img";return`<figure class="list__thumbnail">
    <a href="${e}" tabindex="-1"><img src="/img/lazy-loading.png" data-src="${t}" alt="${r}" title="${r}" class="${s}" /></a>
    </figure>`}var b=Ke;function Pe(){var e=`<div class="list__meta meta"><div class="meta__item-author meta__item">${u.author}<span class="meta__text"><a class="meta__link" href="/info/ueber-mich/">Jens</a></span></div>`;return e}var x=Pe;var Fe="01.01.0001";function Ge(e){let r=e!==Fe?e:"05.01.2021";return`<div class="meta__item-datetime meta__item">${u.time}<time class="meta__text" datetime="">${r}</time></div>`}var w=Ge;function Ne(e,t,r,n,s){return`<header class="list__header">    
    <h2 class="list__title post__title ">
    <a href="${t}">${e}</a>
    </h2>
    ${r}
    ${n}
    ${s}
    </header>`}var $=Ne;function Qe(e){var t="";return e&&(t=`<div class="content list__excerpt post__content clearfix">${e}</div>`),t}var L=Qe;function Ve(e,t){return`<div class="list__content">
    ${e}${t}
    </div>`}var z=Ve;var Xe=function(e,t){let r="";return e&&t&&(r=`<div class="list__item post">
        ${e}${t}
        </div>`),r},T=Xe;var g,c,p,l=null,C=[],Ze=f,We=20;function S(e){var t=p.value,r=0;if(e.length>0){l.innerHTML="";let n="";e.forEach(s=>{var m=s.ref;if((t==="alle"||m.indexOf("/"+t+"/")>-1)&&r++<=We){var o=C[s.ref];let I=b(m,Ze+o.image,o.title,o.category),R=x(),j=w(o.date),D=v(o.category),E=$(o.title,m,R,j,D),M=L(o.summary),U=z(E,M);n+=T(I,U)}}),l.innerHTML=n,lazyLoadImages!==void 0&&lazyLoadImages()}r===0&&(l.innerHTML='<p class="search__no-results">'+k+"</p>")}function H(e){var t=e?e.toLowerCase():"",r=new RegExp(Object.keys(h).join("|"),"gi");t=t.replace(r,function(s){return h[s]});var n=t.length<5?"*":"~0.2";return t=t+n,t}function Ye(){var e=window.location.search;if(e&&URLSearchParams!==void 0){var t=new URLSearchParams(e),r="",n="";if(t.has("q")&&(r=t.get("q"),c.value=r),t.has("s")&&(n=t.get("s"),p.value=n),r){var s=g.search(H(r));S(s)}}}function qe(){Ye(),c.onkeyup=function(){var e=c.value;if(p.value==="id")e!==""&&typeof!isNaN(e)&&e.length===4?document.location.href="/suchen/id/?e="+parseInt(e,10):l.innerHTML="Bitte vierstellige ID eingeben (z.B. 0333)";else if(e!==""&&e.length>=3){var t=g.search(H(e));S(t)}else l.innerHTML=""},c.focus(),c.placeholder=""}function at(){c=document.getElementById("search-input"),p=document.getElementById("search-sections"),l=document.getElementById("search-results"),fetch("/index.json",{method:"get"}).then(e=>e.json()).then(e=>{g=lunr(function(){this.ref("u"),this.field("t",{boost:20}),this.field("s",{boost:10}),this.field("ts"),e.forEach(function(t){this.add(t),C[t.u]={title:t.t,summary:t.s,date:t.d,tags:t.t,category:t.c,image:t.i}},this)}),qe()}).catch(e=>{l.innerHTML=`<p>${e}</p>`})}window.addEventListener("load",function(){at()});})();
