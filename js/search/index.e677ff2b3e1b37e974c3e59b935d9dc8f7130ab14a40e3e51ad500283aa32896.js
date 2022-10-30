(()=>{var f="https://bebildere-den.reisko.ch",k="Leider nichts gefunden";var O="asial\xE4den",A="asial\xE4den",J="ban\xF4i",K="bittergurke",P="bombay",F="brokkoli",G="myanmar",N="kokosnuss",Q="curry",V="currypaste",X="enoki",Z="larb ped",W="fak tong",Y="hackfleisch",q="krachai",aa="fischso\xDFe",ea="fischso\xDFe",ta="bohnen",ra="hotpot",na="khao pad",ia="garnelen",sa="kra pao",oa="kra pao",la="gaeng",ua="gaeng",ca="curry",ma="kra pao",pa="kra pao",ha="goong",ga="gochujang",da="hotpot",fa="lao pot",ka="hang lea",ya="hang lea",_a="khai",va="khanom",ba="karlsruhe",xa="kra pao",wa="shirataki",$a="kra pao",La="kra pao",za="kra pao",Ta="larb",Ca="rad na",Sa="l\xE1 l\u1ED1t",Ha="lahpet",Ia="larb",Ra="massaman",ja="massaman",Da="mexikanisch",Ea="mee",Ma="moo",Ua="moo grob",Ba="nam tok",Oa="nor mai",Aa="nuea",Ja="nuea",Ka="aubergin",Pa="pad thai",Fa="pak choi",Ga="pak choi",Na="pak choi",Qa="palabok",Va="panaeng",Xa="panaeng",Za="panaeng",Wa="som tam",Ya="pekingente",qa="phed",ae="plaa",ee="plaa muek",te="plaa muek",re="rad na",ne="rad na",ie="rad na",se="nudeln",oe="rhein wok",le="tteokbokki",ue="shabu",ce="shakshuka",me="sichuan",pe="som tam",he="mungbohnensprosse",ge="soja",de="tintenfisch",fe="lahpet",ke="thaiwiese",ye="thaiwiese",_e="talee",ve="tom kha",be="woon sen",xe="larb nuea",we="yam woon",$e="yam",h={"asia shop":O,asiashop:A,banoi:J,bittermelone:K,bombai:P,broccoli:F,burma:G,coconut:N,currygericht:Q,"curry paste":V,enokipilze:X,entensalat:Z,"fak thong":W,faschiertes:Y,fingerwurz:q,fischsauce:aa,fishsauce:ea,fisolen:ta,fondue:ra,"fried rice":na,gambas:ia,gaprau:sa,"ga prau":oa,geang:la,g\u00E4ng:ua,gem\u00FCsecurry:ca,grapau:ma,"gra pau":pa,gung:ha,gochuyang:ga,"hot pot":da,huad:fa,"hang lay":ka,"hung lay":ya,kai:_a,kanom:va,karlrsruhe:ba,"ka prao":xa,"konjak nudeln":wa,krapao:$a,krapau:La,krapow:za,laab:Ta,ladna:Ca,"la lot":Sa,laphet:Ha,larp:Ia,masaman:Ra,massamann:ja,mexico:Da,"mii ":Ea,muu:Ma,"moo krob":Ua,namtok:Ba,normai:Oa,n\u00FCa:Aa,nuae:Ja,obergin:Ka,padthai:Pa,"pak choy":Fa,pakchoy:Ga,pakchoi:Na,palabog:Qa,panang:Va,pan\u00E4ng:Xa,paneng:Za,"papaya salat":Wa,"peking ente":Ya,phet:qa,pla:ae,"plaa muk":ee,"plaa m\xFCk":te,radna:re,"rat na":ne,ratna:ie,reisnudeln:se,rheinwok:oe,"rice cake":le,schabu:ue,shakshouka:ce,szechuan:me,somtam:pe,sojasprosse:he,soya:ge,squid:de,teesalat:fe,"thai park":ke,thaipark:ye,thalee:_e,"tom kah":ve,woonsen:be,"yam nuea sap":xe,yamwoon:we,yum:$e};var Le={url:"/dies-und-das/",display:"Dies und das"},ze={url:"/getranke/",display:"Getr\xE4nke"},Te={url:"/insirationen/",display:"Inspirationen"},Ce={url:"/mittagspause/",display:"Mittagspause"},Se={url:"/ausprobiert/",display:"Ausprobiert"},He={url:"/reisen/",display:"Reisen"},Ie={url:"/restaurants/",display:"Restaurants"},Re={url:"/rezepte/",display:"Rezepte"},je={url:"/utensilien/",display:"Utensilien"},De={url:"/zutaten/",display:"Zutaten"},y={die:Le,get:ze,ins:Te,mit:Ce,aus:Se,rei:He,res:Ie,rez:Re,ute:je,zut:De};var Ee=`<img
    src="/svg/sprites/meta-sprite.svg#author"
    alt="Jens"
    title="Jens"
    class="meta__icon icon-author"
    width="18"
    height="18"
/>`,Me=`<img
    src="/svg/sprites/meta-sprite.svg#category"
    alt="Kategorie"
    title="Kategorie"
    class="meta__icon icon-category"
    width="18"
    height="18"
/>`,Ue=`<img
    src="/svg/sprites/meta-sprite.svg#date"
    alt="Datum"
    title="Datum"
    class="meta__icon icon-date"
    width="18"
    height="18"
/>`,Be={author:Ee,category:Me,time:Ue},u=Be;function Oe(e,t){let r={url:"",display:""};return t.hasOwnProperty(e)&&(r=t[e]),r}var _=Oe;function Ae(e){var t="";if(e){let r=_(e.toLowerCase(),y);r.url!==""&&r.display!==""&&(t=`<div class="meta__item-categories meta__item">${u.category}<span class="meta__text"><a class="meta__link" href="${r.url}" rel="category" title="Kategorie ${r.display}">${r.display}</a>
                    </span></div>`)}return t}var v=Ae;function Je(e,t,r,n){var s=n&&n.toLowerCase()==="ins"&&(e.indexOf("blogs")>-1||e.indexOf("videos")>-1||e.indexOf("gruppen"))?"image__flat js-lazy-img":"js-lazy-img";return`<figure class="list__thumbnail">
    <a href="${e}" tabindex="-1"><img src="/img/lazy-loading.png" data-src="${t}" alt="${r}" title="${r}" class="${s}" /></a>
    </figure>`}var b=Je;function Ke(){var e=`<div class="list__meta meta"><div class="meta__item-author meta__item">${u.author}<span class="meta__text"><a class="meta__link" href="/info/ueber-mich/">Jens</a></span></div>`;return e}var x=Ke;var Pe="01.01.0001";function Fe(e){let r=e!==Pe?e:"05.01.2021";return`<div class="meta__item-datetime meta__item">${u.time}<time class="meta__text" datetime="">${r}</time></div>`}var w=Fe;function Ge(e,t,r,n,s){return`<header class="list__header">    
    <h2 class="list__title post__title ">
    <a href="${t}">${e}</a>
    </h2>
    ${r}
    ${n}
    ${s}
    </header>`}var $=Ge;function Ne(e){var t="";return e&&(t=`<div class="content list__excerpt post__content clearfix">${e}</div>`),t}var L=Ne;function Qe(e,t){return`<div class="list__content">
    ${e}${t}
    </div>`}var z=Qe;var Ve=function(e,t){let r="";return e&&t&&(r=`<div class="list__item post">
        ${e}${t}
        </div>`),r},T=Ve;var g,c,p,l=null,C=[],Xe=f,Ze=20;function S(e){var t=p.value,r=0;if(e.length>0){l.innerHTML="";let n="";e.forEach(s=>{var m=s.ref;if((t==="alle"||m.indexOf("/"+t+"/")>-1)&&r++<=Ze){var o=C[s.ref];let I=b(m,Xe+o.image,o.title,o.category),R=x(),j=w(o.date),D=v(o.category),E=$(o.title,m,R,j,D),M=L(o.summary),U=z(E,M);n+=T(I,U)}}),l.innerHTML=n,lazyLoadImages!==void 0&&lazyLoadImages()}r===0&&(l.innerHTML='<p class="search__no-results">'+k+"</p>")}function H(e){var t=e?e.toLowerCase():"",r=new RegExp(Object.keys(h).join("|"),"gi");t=t.replace(r,function(s){return h[s]});var n=t.length<5?"*":"~0.2";return t=t+n,t}function We(){var e=window.location.search;if(e&&URLSearchParams!==void 0){var t=new URLSearchParams(e),r="",n="";if(t.has("q")&&(r=t.get("q"),c.value=r),t.has("s")&&(n=t.get("s"),p.value=n),r){var s=g.search(H(r));S(s)}}}function Ye(){We(),c.onkeyup=function(){var e=c.value;if(p.value==="id")e!==""&&typeof!isNaN(e)&&e.length===4?document.location.href="/suchen/id/?e="+parseInt(e,10):l.innerHTML="Bitte vierstellige ID eingeben (z.B. 0333)";else if(e!==""&&e.length>=3){var t=g.search(H(e));S(t)}else l.innerHTML=""},c.focus(),c.placeholder=""}function qe(){c=document.getElementById("search-input"),p=document.getElementById("search-sections"),l=document.getElementById("search-results"),fetch("/index.json",{method:"get"}).then(e=>e.json()).then(e=>{g=lunr(function(){this.ref("u"),this.field("t",{boost:20}),this.field("s",{boost:10}),this.field("ts"),e.forEach(function(t){this.add(t),C[t.u]={title:t.t,summary:t.s,date:t.d,tags:t.t,category:t.c,image:t.i}},this)}),Ye()}).catch(e=>{l.innerHTML=`<p>${e}</p>`})}window.addEventListener("load",function(){qe()});})();
