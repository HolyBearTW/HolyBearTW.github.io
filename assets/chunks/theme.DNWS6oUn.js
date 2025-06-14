import{d as j,c as R,o as T,r as k,n as ue,a as Ge,t as re,b as H,T as yi,w as L,e as B,_ as q,u as Gs,i as oh,f as ah,g as Ei,h as K,j as C,k as A,l as Lt,m as da,p as Ke,q as lh,s as Ti,v as uh,x as Z,y as qe,z as Ks,A as Ii,B as wi,C as Pl,D as Kn,E as Wn,F as fa,G as bt,H as le,I as Se,J as U,K as Sl,L as Qe,M as pt,N as Ws,O as ch,P as Vl,Q as hh,R as Rl,S as kl,U as dh,V as Cl,W as Dl,X as fh,Y as ph,Z as mh,$ as gh,a0 as _h,a1 as pa,a2 as ma,a3 as vh}from"./framework.BLGVq54j.js";const yh=j({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(n){return(e,t)=>(T(),R("span",{class:ue(["VPBadge",e.type])},[k(e.$slots,"default",{},()=>[Ge(re(e.text),1)])],2))}}),Eh={key:0,class:"VPBackdrop"},Th=j({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(n){return(e,t)=>(T(),H(yi,{name:"fade"},{default:L(()=>[e.show?(T(),R("div",Eh)):B("",!0)]),_:1}))}}),Ih=q(Th,[["__scopeId","data-v-54a304ca"]]),ne=Gs;function wh(n,e){let t,s=!1;return()=>{t&&clearTimeout(t),s?t=setTimeout(n,e):(n(),(s=!0)&&setTimeout(()=>s=!1,e))}}function Gr(n){return n.startsWith("/")?n:`/${n}`}function Ai(n){const{pathname:e,search:t,hash:s,protocol:r}=new URL(n,"http://a.com");if(oh(n)||n.startsWith("#")||!r.startsWith("http")||!ah(e))return n;const{site:o}=ne(),a=e.endsWith("/")||e.endsWith(".html")?n:n.replace(/(?:(^\.+)\/)?.*$/,`$1${e.replace(/(\.md)?$/,o.value.cleanUrls?"":".html")}${t}${s}`);return Ei(a)}function Qn({correspondingLink:n=!1}={}){const{site:e,localeIndex:t,page:s,theme:r,hash:o}=ne(),a=K(()=>{var h,d;return{label:(h=e.value.locales[t.value])==null?void 0:h.label,link:((d=e.value.locales[t.value])==null?void 0:d.link)||(t.value==="root"?"/":`/${t.value}/`)}});return{localeLinks:K(()=>Object.entries(e.value.locales).flatMap(([h,d])=>a.value.label===d.label?[]:{text:d.label,link:Ah(d.link||(h==="root"?"/":`/${h}/`),r.value.i18nRouting!==!1&&n,s.value.relativePath.slice(a.value.link.length-1),!e.value.cleanUrls)+o.value})),currentLang:a}}function Ah(n,e,t,s){return e?n.replace(/\/$/,"")+Gr(t.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,s?".html":"")):n}const bh={class:"NotFound"},Ph={class:"code"},Sh={class:"title"},Vh={class:"quote"},Rh={class:"action"},kh=["href","aria-label"],Ch=j({__name:"NotFound",setup(n){const{theme:e}=ne(),{currentLang:t}=Qn();return(s,r)=>{var o,a,u,h,d,p;return T(),R("div",bh,[C("p",Ph,re(((o=A(e).notFound)==null?void 0:o.code)??"404"),1),C("h1",Sh,re(((a=A(e).notFound)==null?void 0:a.title)??"PAGE NOT FOUND"),1),r[0]||(r[0]=C("div",{class:"divider"},null,-1)),C("blockquote",Vh,re(((u=A(e).notFound)==null?void 0:u.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),C("div",Rh,[C("a",{class:"link",href:A(Ei)(((h=A(e).notFound)==null?void 0:h.link)??A(t).link),"aria-label":((d=A(e).notFound)==null?void 0:d.linkLabel)??"go to home"},re(((p=A(e).notFound)==null?void 0:p.linkText)??"Take me home"),9,kh)])])}}}),Dh=q(Ch,[["__scopeId","data-v-b0126292"]]);function Nl(n,e){if(Array.isArray(n))return As(n);if(n==null)return[];e=Gr(e);const t=Object.keys(n).sort((r,o)=>o.split("/").length-r.split("/").length).find(r=>e.startsWith(Gr(r))),s=t?n[t]:[];return Array.isArray(s)?As(s):As(s.items,s.base)}function Nh(n){const e=[];let t=0;for(const s in n){const r=n[s];if(r.items){t=e.push(r);continue}e[t]||e.push({items:[]}),e[t].items.push(r)}return e}function Lh(n){const e=[];function t(s){for(const r of s)r.text&&r.link&&e.push({text:r.text,link:r.link,docFooterText:r.docFooterText}),r.items&&t(r.items)}return t(n),e}function Kr(n,e){return Array.isArray(e)?e.some(t=>Kr(n,t)):Lt(n,e.link)?!0:e.items?Kr(n,e.items):!1}function As(n,e){return[...n].map(t=>{const s={...t},r=s.base||e;return r&&s.link&&(s.link=r+s.link),s.items&&(s.items=As(s.items,r)),s})}function Mh(){const{hasSidebar:n}=lt(),e=da("(min-width: 960px)"),t=da("(min-width: 1280px)");return{isAsideEnabled:K(()=>!t.value&&!e.value?!1:n.value?t.value:e.value)}}const Oh=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,Wr=[];function Ll(n){return typeof n.outline=="object"&&!Array.isArray(n.outline)&&n.outline.label||n.outlineTitle||"On this page"}function $h(n){const e=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(t=>t.id&&t.hasChildNodes()).map(t=>{const s=Number(t.tagName[1]);return{element:t,title:xh(t),link:"#"+t.id,level:s}});return Fh(e,n)}function xh(n){let e="";for(const t of n.childNodes)if(t.nodeType===1){if(Oh.test(t.className))continue;e+=t.textContent}else t.nodeType===3&&(e+=t.textContent);return e.trim()}function Fh(n,e){if(e===!1)return[];const t=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[s,r]=typeof t=="number"?[t,t]:t==="deep"?[2,6]:t;return jh(n,s,r)}function Bh(n,e){const{isAsideEnabled:t}=Mh(),s=wh(o,100);let r=null;Ke(()=>{requestAnimationFrame(o),window.addEventListener("scroll",s)}),lh(()=>{a(location.hash)}),Ti(()=>{window.removeEventListener("scroll",s)});function o(){if(!t.value)return;const u=window.scrollY,h=window.innerHeight,d=document.body.offsetHeight,p=Math.abs(u+h-d)<1,_=Wr.map(({element:S,link:N})=>({link:N,top:Uh(S)})).filter(({top:S})=>!Number.isNaN(S)).sort((S,N)=>S.top-N.top);if(!_.length){a(null);return}if(u<1){a(null);return}if(p){a(_[_.length-1].link);return}let y=null;for(const{link:S,top:N}of _){if(N>u+uh()+4)break;y=S}a(y)}function a(u){r&&r.classList.remove("active"),u==null?r=null:r=n.value.querySelector(`a[href="${decodeURIComponent(u)}"]`);const h=r;h?(h.classList.add("active"),e.value.style.top=h.offsetTop+39+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function Uh(n){let e=0;for(;n!==document.body;){if(n===null)return NaN;e+=n.offsetTop,n=n.offsetParent}return e}function jh(n,e,t){Wr.length=0;const s=[],r=[];return n.forEach(o=>{const a={...o,children:[]};let u=r[r.length-1];for(;u&&u.level>=a.level;)r.pop(),u=r[r.length-1];if(a.element.classList.contains("ignore-header")||u&&"shouldIgnore"in u){r.push({level:a.level,shouldIgnore:!0});return}a.level>t||a.level<e||(Wr.push({element:a.element,link:a.link}),u?u.children.push(a):s.push(a),r.push(a))}),s}const Qt=Z(!1);function Hh(n){let e;Ks(()=>{e=Qt.value?document.activeElement:void 0}),Ke(()=>{window.addEventListener("keyup",t)}),Ti(()=>{window.removeEventListener("keyup",t)});function t(s){s.key==="Escape"&&Qt.value&&(n(),e==null||e.focus())}}function qh(){function n(){Qt.value=!0}function e(){Qt.value=!1}function t(){Qt.value?e():n()}return{isOpen:Qt,open:n,close:e,toggle:t}}function zh(n){const{page:e,hash:t}=ne(),s=Z(!1),r=K(()=>n.value.collapsed!=null),o=K(()=>!!n.value.link),a=Z(!1),u=()=>{a.value=Lt(e.value.relativePath,n.value.link)};qe([e,n,t],u),Ke(u);const h=K(()=>a.value?!0:n.value.items?Kr(e.value.relativePath,n.value.items):!1),d=K(()=>!!(n.value.items&&n.value.items.length));Ks(()=>{s.value=!!(r.value&&n.value.collapsed)}),Ii(()=>{(a.value||h.value)&&(s.value=!1)});function p(){r.value&&(s.value=!s.value)}return{collapsed:s,collapsible:r,isLink:o,isActiveLink:a,hasActiveLink:h,hasChildren:d,toggle:p}}const Qr=wi([]),Cn=wi([]),Xr=wi(!1);function lt(){const{frontmatter:n,theme:e}=ne(),t=K(()=>!!(n.value.isHome??n.value.layout==="home")),s=K(()=>n.value.sidebar!==!1&&Cn.value.length>0&&!t.value),r=K(()=>s.value&&Xr.value),o=K(()=>s.value?Nh(Cn.value):[]),a=K(()=>t.value?!1:n.value.aside!=null?!!n.value.aside:e.value.aside!==!1),u=K(()=>a.value?n.value.aside==null?e.value.aside==="left":n.value.aside==="left":!1),h=K(()=>Qr.value.length>0);return{isHome:t,sidebar:fa(Cn),sidebarGroups:o,hasSidebar:s,isSidebarEnabled:r,hasAside:a,leftAside:u,headers:fa(Qr),hasLocalNav:h}}function Gh({closeSidebar:n}){const{frontmatter:e,page:t,theme:s}=ne();qe(()=>[t.value.relativePath,s.value.sidebar],([o,a])=>{const u=a?Nl(a,o):[];JSON.stringify(u)!==JSON.stringify(Cn.value)&&(Cn.value=u)},{immediate:!0,deep:!0,flush:"sync"}),Pl(()=>{Qr.value=$h(e.value.outline??s.value.outline)}),Kn&&(Xr.value=window.innerWidth>=960,window.addEventListener("resize",()=>{Xr.value=window.innerWidth>=960},{passive:!0}));const r=Wn();qe(()=>r.path,n),Hh(n)}const Kh=["href","title"],Wh=j({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(n){function e({target:t}){const s=t.href.split("#")[1],r=document.getElementById(decodeURIComponent(s));r==null||r.focus({preventScroll:!0})}return(t,s)=>{const r=bt("VPDocOutlineItem",!0);return T(),R("ul",{class:ue(["VPDocOutlineItem",t.root?"root":"nested"])},[(T(!0),R(le,null,Se(t.headers,({children:o,link:a,title:u})=>(T(),R("li",null,[C("a",{class:"outline-link",href:a,onClick:e,title:u},re(u),9,Kh),o!=null&&o.length?(T(),H(r,{key:0,headers:o},null,8,["headers"])):B("",!0)]))),256))],2)}}}),Ml=q(Wh,[["__scopeId","data-v-b7d7ef80"]]),Qh={class:"content"},Xh={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},Yh=j({__name:"VPDocAsideOutline",setup(n){const{theme:e}=ne(),t=Z(),s=Z(),{headers:r,hasLocalNav:o}=lt();return Bh(t,s),(a,u)=>(T(),R("nav",{"aria-labelledby":"doc-outline-aria-label",class:ue(["VPDocAsideOutline",{"has-outline":A(o)}]),ref_key:"container",ref:t},[C("div",Qh,[C("div",{class:"outline-marker",ref_key:"marker",ref:s},null,512),C("div",Xh,re(A(Ll)(A(e))),1),U(Ml,{headers:A(r),root:!0},null,8,["headers"])])],2))}}),Jh=q(Yh,[["__scopeId","data-v-c8b19031"]]),Zh={class:"VPDocAsideCarbonAds"},ed=j({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(n){const e=()=>null;return(t,s)=>(T(),R("div",Zh,[U(A(e),{"carbon-ads":t.carbonAds},null,8,["carbon-ads"])]))}}),td={class:"VPDocAside"},nd=j({__name:"VPDocAside",setup(n){const{theme:e}=ne();return(t,s)=>(T(),R("div",td,[k(t.$slots,"aside-top",{},void 0,!0),k(t.$slots,"aside-outline-before",{},void 0,!0),U(Jh),k(t.$slots,"aside-outline-after",{},void 0,!0),s[0]||(s[0]=C("div",{class:"spacer"},null,-1)),k(t.$slots,"aside-ads-before",{},void 0,!0),A(e).carbonAds?(T(),H(ed,{key:0,"carbon-ads":A(e).carbonAds},null,8,["carbon-ads"])):B("",!0),k(t.$slots,"aside-ads-after",{},void 0,!0),k(t.$slots,"aside-bottom",{},void 0,!0)]))}}),sd=q(nd,[["__scopeId","data-v-cb998dce"]]);function rd(){const{theme:n,page:e}=ne();return K(()=>{const{text:t="Edit this page",pattern:s=""}=n.value.editLink||{};let r;return typeof s=="function"?r=s(e.value):r=s.replace(/:path/g,e.value.filePath),{url:r,text:t}})}function id(){const{page:n,theme:e,frontmatter:t}=ne();return K(()=>{var d,p,_,y,S,N,x,M;const s=Nl(e.value.sidebar,n.value.relativePath),r=Lh(s),o=od(r,J=>J.link.replace(/[?#].*$/,"")),a=o.findIndex(J=>Lt(n.value.relativePath,J.link)),u=((d=e.value.docFooter)==null?void 0:d.prev)===!1&&!t.value.prev||t.value.prev===!1,h=((p=e.value.docFooter)==null?void 0:p.next)===!1&&!t.value.next||t.value.next===!1;return{prev:u?void 0:{text:(typeof t.value.prev=="string"?t.value.prev:typeof t.value.prev=="object"?t.value.prev.text:void 0)??((_=o[a-1])==null?void 0:_.docFooterText)??((y=o[a-1])==null?void 0:y.text),link:(typeof t.value.prev=="object"?t.value.prev.link:void 0)??((S=o[a-1])==null?void 0:S.link)},next:h?void 0:{text:(typeof t.value.next=="string"?t.value.next:typeof t.value.next=="object"?t.value.next.text:void 0)??((N=o[a+1])==null?void 0:N.docFooterText)??((x=o[a+1])==null?void 0:x.text),link:(typeof t.value.next=="object"?t.value.next.link:void 0)??((M=o[a+1])==null?void 0:M.link)}}})}function od(n,e){const t=new Set;return n.filter(s=>{const r=e(s);return t.has(r)?!1:t.add(r)})}const Xe=j({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(n){const e=n,t=K(()=>e.tag??(e.href?"a":"span")),s=K(()=>e.href&&Sl.test(e.href)||e.target==="_blank");return(r,o)=>(T(),H(Qe(t.value),{class:ue(["VPLink",{link:r.href,"vp-external-link-icon":s.value,"no-icon":r.noIcon}]),href:r.href?A(Ai)(r.href):void 0,target:r.target??(s.value?"_blank":void 0),rel:r.rel??(s.value?"noreferrer":void 0)},{default:L(()=>[k(r.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),ad={class:"VPLastUpdated"},ld=["datetime"],ud=j({__name:"VPDocFooterLastUpdated",setup(n){const{theme:e,page:t,lang:s}=ne(),r=K(()=>new Date(t.value.lastUpdated)),o=K(()=>r.value.toISOString()),a=Z("");return Ke(()=>{Ks(()=>{var u,h,d;a.value=new Intl.DateTimeFormat((h=(u=e.value.lastUpdated)==null?void 0:u.formatOptions)!=null&&h.forceLocale?s.value:void 0,((d=e.value.lastUpdated)==null?void 0:d.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(r.value)})}),(u,h)=>{var d;return T(),R("p",ad,[Ge(re(((d=A(e).lastUpdated)==null?void 0:d.text)||A(e).lastUpdatedText||"Last updated")+": ",1),C("time",{datetime:o.value},re(a.value),9,ld)])}}}),cd=q(ud,[["__scopeId","data-v-1bb0c8a8"]]),hd={key:0,class:"VPDocFooter"},dd={key:0,class:"edit-info"},fd={key:0,class:"edit-link"},pd={key:1,class:"last-updated"},md={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},gd={class:"pager"},_d=["innerHTML"],vd=["innerHTML"],yd={class:"pager"},Ed=["innerHTML"],Td=["innerHTML"],Id=j({__name:"VPDocFooter",setup(n){const{theme:e,page:t,frontmatter:s}=ne(),r=rd(),o=id(),a=K(()=>e.value.editLink&&s.value.editLink!==!1),u=K(()=>t.value.lastUpdated),h=K(()=>a.value||u.value||o.value.prev||o.value.next);return(d,p)=>{var _,y,S,N;return h.value?(T(),R("footer",hd,[k(d.$slots,"doc-footer-before",{},void 0,!0),a.value||u.value?(T(),R("div",dd,[a.value?(T(),R("div",fd,[U(Xe,{class:"edit-link-button",href:A(r).url,"no-icon":!0},{default:L(()=>[p[0]||(p[0]=C("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),Ge(" "+re(A(r).text),1)]),_:1,__:[0]},8,["href"])])):B("",!0),u.value?(T(),R("div",pd,[U(cd)])):B("",!0)])):B("",!0),(_=A(o).prev)!=null&&_.link||(y=A(o).next)!=null&&y.link?(T(),R("nav",md,[p[1]||(p[1]=C("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),C("div",gd,[(S=A(o).prev)!=null&&S.link?(T(),H(Xe,{key:0,class:"pager-link prev",href:A(o).prev.link},{default:L(()=>{var x;return[C("span",{class:"desc",innerHTML:((x=A(e).docFooter)==null?void 0:x.prev)||"Previous page"},null,8,_d),C("span",{class:"title",innerHTML:A(o).prev.text},null,8,vd)]}),_:1},8,["href"])):B("",!0)]),C("div",yd,[(N=A(o).next)!=null&&N.link?(T(),H(Xe,{key:0,class:"pager-link next",href:A(o).next.link},{default:L(()=>{var x;return[C("span",{class:"desc",innerHTML:((x=A(e).docFooter)==null?void 0:x.next)||"Next page"},null,8,Ed),C("span",{class:"title",innerHTML:A(o).next.text},null,8,Td)]}),_:1},8,["href"])):B("",!0)])])):B("",!0)])):B("",!0)}}}),wd=q(Id,[["__scopeId","data-v-1bcd8184"]]),Ad={class:"container"},bd={class:"aside-container"},Pd={class:"aside-content"},Sd={class:"content"},Vd={class:"content-container"},Rd={class:"main"},kd=j({__name:"VPDoc",setup(n){const{theme:e}=ne(),t=Wn(),{hasSidebar:s,hasAside:r,leftAside:o}=lt(),a=K(()=>t.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(u,h)=>{const d=bt("Content");return T(),R("div",{class:ue(["VPDoc",{"has-sidebar":A(s),"has-aside":A(r)}])},[k(u.$slots,"doc-top",{},void 0,!0),C("div",Ad,[A(r)?(T(),R("div",{key:0,class:ue(["aside",{"left-aside":A(o)}])},[h[0]||(h[0]=C("div",{class:"aside-curtain"},null,-1)),C("div",bd,[C("div",Pd,[U(sd,null,{"aside-top":L(()=>[k(u.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":L(()=>[k(u.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":L(()=>[k(u.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":L(()=>[k(u.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":L(()=>[k(u.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":L(()=>[k(u.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):B("",!0),C("div",Sd,[C("div",Vd,[k(u.$slots,"doc-before",{},void 0,!0),C("main",Rd,[U(d,{class:ue(["vp-doc",[a.value,A(e).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),U(wd,null,{"doc-footer-before":L(()=>[k(u.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),k(u.$slots,"doc-after",{},void 0,!0)])])]),k(u.$slots,"doc-bottom",{},void 0,!0)],2)}}}),Cd=q(kd,[["__scopeId","data-v-d668f7cc"]]),Dd=j({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(n){const e=n,t=K(()=>e.href&&Sl.test(e.href)),s=K(()=>e.tag||(e.href?"a":"button"));return(r,o)=>(T(),H(Qe(s.value),{class:ue(["VPButton",[r.size,r.theme]]),href:r.href?A(Ai)(r.href):void 0,target:e.target??(t.value?"_blank":void 0),rel:e.rel??(t.value?"noreferrer":void 0)},{default:L(()=>[k(r.$slots,"default",{},()=>[Ge(re(r.text),1)],!0)]),_:3},8,["class","href","target","rel"]))}}),Nd=q(Dd,[["__scopeId","data-v-58d3b43b"]]),Ld=["src","alt"],Md=j({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(n){return(e,t)=>{const s=bt("VPImage",!0);return e.image?(T(),R(le,{key:0},[typeof e.image=="string"||"src"in e.image?(T(),R("img",pt({key:0,class:"VPImage"},typeof e.image=="string"?e.$attrs:{...e.image,...e.$attrs},{src:A(Ei)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,Ld)):(T(),R(le,{key:1},[U(s,pt({class:"dark",image:e.image.dark,alt:e.image.alt},e.$attrs),null,16,["image","alt"]),U(s,pt({class:"light",image:e.image.light,alt:e.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):B("",!0)}}}),ks=q(Md,[["__scopeId","data-v-ab19afbb"]]),Od={class:"container"},$d={class:"main"},xd={class:"heading"},Fd=["innerHTML"],Bd=["innerHTML"],Ud=["innerHTML"],jd={key:0,class:"actions"},Hd={key:0,class:"image"},qd={class:"image-container"},zd=j({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(n){const e=Ws("hero-image-slot-exists");return(t,s)=>(T(),R("div",{class:ue(["VPHero",{"has-image":t.image||A(e)}])},[C("div",Od,[C("div",$d,[k(t.$slots,"home-hero-info-before",{},void 0,!0),k(t.$slots,"home-hero-info",{},()=>[C("h1",xd,[t.name?(T(),R("span",{key:0,innerHTML:t.name,class:"name clip"},null,8,Fd)):B("",!0),t.text?(T(),R("span",{key:1,innerHTML:t.text,class:"text"},null,8,Bd)):B("",!0)]),t.tagline?(T(),R("p",{key:0,innerHTML:t.tagline,class:"tagline"},null,8,Ud)):B("",!0)],!0),k(t.$slots,"home-hero-info-after",{},void 0,!0),t.actions?(T(),R("div",jd,[(T(!0),R(le,null,Se(t.actions,r=>(T(),R("div",{key:r.link,class:"action"},[U(Nd,{tag:"a",size:"medium",theme:r.theme,text:r.text,href:r.link,target:r.target,rel:r.rel},null,8,["theme","text","href","target","rel"])]))),128))])):B("",!0),k(t.$slots,"home-hero-actions-after",{},void 0,!0)]),t.image||A(e)?(T(),R("div",Hd,[C("div",qd,[s[0]||(s[0]=C("div",{class:"image-bg"},null,-1)),k(t.$slots,"home-hero-image",{},()=>[t.image?(T(),H(ks,{key:0,class:"image-src",image:t.image},null,8,["image"])):B("",!0)],!0)])])):B("",!0)])],2))}}),Gd=q(zd,[["__scopeId","data-v-8a17128e"]]),Kd=j({__name:"VPHomeHero",setup(n){const{frontmatter:e}=ne();return(t,s)=>A(e).hero?(T(),H(Gd,{key:0,class:"VPHomeHero",name:A(e).hero.name,text:A(e).hero.text,tagline:A(e).hero.tagline,image:A(e).hero.image,actions:A(e).hero.actions},{"home-hero-info-before":L(()=>[k(t.$slots,"home-hero-info-before")]),"home-hero-info":L(()=>[k(t.$slots,"home-hero-info")]),"home-hero-info-after":L(()=>[k(t.$slots,"home-hero-info-after")]),"home-hero-actions-after":L(()=>[k(t.$slots,"home-hero-actions-after")]),"home-hero-image":L(()=>[k(t.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):B("",!0)}}),Wd={class:"box"},Qd={key:0,class:"icon"},Xd=["innerHTML"],Yd=["innerHTML"],Jd=["innerHTML"],Zd={key:4,class:"link-text"},ef={class:"link-text-value"},tf=j({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(n){return(e,t)=>(T(),H(Xe,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:L(()=>[C("article",Wd,[typeof e.icon=="object"&&e.icon.wrap?(T(),R("div",Qd,[U(ks,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(T(),H(ks,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(T(),R("div",{key:2,class:"icon",innerHTML:e.icon},null,8,Xd)):B("",!0),C("h2",{class:"title",innerHTML:e.title},null,8,Yd),e.details?(T(),R("p",{key:3,class:"details",innerHTML:e.details},null,8,Jd)):B("",!0),e.linkText?(T(),R("div",Zd,[C("p",ef,[Ge(re(e.linkText)+" ",1),t[0]||(t[0]=C("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):B("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),nf=q(tf,[["__scopeId","data-v-02d1074d"]]),sf={key:0,class:"VPFeatures"},rf={class:"container"},of={class:"items"},af=j({__name:"VPFeatures",props:{features:{}},setup(n){const e=n,t=K(()=>{const s=e.features.length;if(s){if(s===2)return"grid-2";if(s===3)return"grid-3";if(s%3===0)return"grid-6";if(s>3)return"grid-4"}else return});return(s,r)=>s.features?(T(),R("div",sf,[C("div",rf,[C("div",of,[(T(!0),R(le,null,Se(s.features,o=>(T(),R("div",{key:o.title,class:ue(["item",[t.value]])},[U(nf,{icon:o.icon,title:o.title,details:o.details,link:o.link,"link-text":o.linkText,rel:o.rel,target:o.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):B("",!0)}}),lf=q(af,[["__scopeId","data-v-b1eea84a"]]),uf=j({__name:"VPHomeFeatures",setup(n){const{frontmatter:e}=ne();return(t,s)=>A(e).features?(T(),H(lf,{key:0,class:"VPHomeFeatures",features:A(e).features},null,8,["features"])):B("",!0)}}),cf=j({__name:"VPHomeContent",setup(n){const{width:e}=ch({initialWidth:0,includeScrollbar:!1});return(t,s)=>(T(),R("div",{class:"vp-doc container",style:Vl(A(e)?{"--vp-offset":`calc(50% - ${A(e)/2}px)`}:{})},[k(t.$slots,"default",{},void 0,!0)],4))}}),hf=q(cf,[["__scopeId","data-v-c141a4bd"]]),df=j({__name:"VPHome",setup(n){const{frontmatter:e,theme:t}=ne();return(s,r)=>{const o=bt("Content");return T(),R("div",{class:ue(["VPHome",{"external-link-icon-enabled":A(t).externalLinkIcon}])},[k(s.$slots,"home-hero-before",{},void 0,!0),U(Kd,null,{"home-hero-info-before":L(()=>[k(s.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":L(()=>[k(s.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":L(()=>[k(s.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":L(()=>[k(s.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":L(()=>[k(s.$slots,"home-hero-image",{},void 0,!0)]),_:3}),k(s.$slots,"home-hero-after",{},void 0,!0),k(s.$slots,"home-features-before",{},void 0,!0),U(uf),k(s.$slots,"home-features-after",{},void 0,!0),A(e).markdownStyles!==!1?(T(),H(hf,{key:0},{default:L(()=>[U(o)]),_:1})):(T(),H(o,{key:1}))],2)}}}),ff=q(df,[["__scopeId","data-v-e07eaea7"]]),pf={},mf={class:"VPPage"};function gf(n,e){const t=bt("Content");return T(),R("div",mf,[k(n.$slots,"page-top"),U(t),k(n.$slots,"page-bottom")])}const _f=q(pf,[["render",gf]]),vf=j({__name:"VPContent",setup(n){const{page:e,frontmatter:t}=ne(),{isHome:s,hasSidebar:r}=lt();return(o,a)=>(T(),R("div",{class:ue(["VPContent",{"has-sidebar":A(r),"is-home":A(s)}]),id:"VPContent"},[A(e).isNotFound?k(o.$slots,"not-found",{key:0},()=>[U(Dh)],!0):A(t).layout==="page"?(T(),H(_f,{key:1},{"page-top":L(()=>[k(o.$slots,"page-top",{},void 0,!0)]),"page-bottom":L(()=>[k(o.$slots,"page-bottom",{},void 0,!0)]),_:3})):A(t).layout==="home"?(T(),H(ff,{key:2},{"home-hero-before":L(()=>[k(o.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":L(()=>[k(o.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":L(()=>[k(o.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":L(()=>[k(o.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":L(()=>[k(o.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":L(()=>[k(o.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":L(()=>[k(o.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":L(()=>[k(o.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":L(()=>[k(o.$slots,"home-features-after",{},void 0,!0)]),_:3})):A(t).layout&&A(t).layout!=="doc"?(T(),H(Qe(A(t).layout),{key:3})):(T(),H(Cd,{key:4},{"doc-top":L(()=>[k(o.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":L(()=>[k(o.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":L(()=>[k(o.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":L(()=>[k(o.$slots,"doc-before",{},void 0,!0)]),"doc-after":L(()=>[k(o.$slots,"doc-after",{},void 0,!0)]),"aside-top":L(()=>[k(o.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":L(()=>[k(o.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":L(()=>[k(o.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":L(()=>[k(o.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":L(()=>[k(o.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":L(()=>[k(o.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),yf=q(vf,[["__scopeId","data-v-2652e39a"]]),Ef={class:"container"},Tf=["innerHTML"],If=["innerHTML"],wf=j({__name:"VPFooter",setup(n){const{theme:e,frontmatter:t}=ne(),{hasSidebar:s}=lt();return(r,o)=>A(e).footer&&A(t).footer!==!1?(T(),R("footer",{key:0,class:ue(["VPFooter",{"has-sidebar":A(s)}])},[C("div",Ef,[A(e).footer.message?(T(),R("p",{key:0,class:"message",innerHTML:A(e).footer.message},null,8,Tf)):B("",!0),A(e).footer.copyright?(T(),R("p",{key:1,class:"copyright",innerHTML:A(e).footer.copyright},null,8,If)):B("",!0)])],2)):B("",!0)}}),Af=q(wf,[["__scopeId","data-v-5b9946f5"]]),bf={class:"menu-text"},Pf={class:"header"},Sf={class:"outline"},Vf=j({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(n){const e=n,{theme:t}=ne(),s=Z(!1),r=Z(0),o=Z(),a=Z();function u(_){var y;(y=o.value)!=null&&y.contains(_.target)||(s.value=!1)}qe(s,_=>{if(_){document.addEventListener("click",u);return}document.removeEventListener("click",u)}),hh("Escape",()=>{s.value=!1}),Pl(()=>{s.value=!1});function h(){s.value=!s.value,r.value=window.innerHeight+Math.min(window.scrollY-e.navHeight,0)}function d(_){_.target.classList.contains("outline-link")&&(a.value&&(a.value.style.transition="none"),Rl(()=>{s.value=!1}))}function p(){s.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(_,y)=>(T(),R("div",{class:"VPLocalNavOutlineDropdown",style:Vl({"--vp-vh":r.value+"px"}),ref_key:"main",ref:o},[_.headers.length>0?(T(),R("button",{key:0,onClick:h,class:ue({open:s.value})},[C("span",bf,re(A(Ll)(A(t))),1),y[0]||(y[0]=C("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(T(),R("button",{key:1,onClick:p},re(A(t).returnToTopLabel||"Return to top"),1)),U(yi,{name:"flyout"},{default:L(()=>[s.value?(T(),R("div",{key:0,ref_key:"items",ref:a,class:"items",onClick:d},[C("div",Pf,[C("a",{class:"top-link",href:"#",onClick:p},re(A(t).returnToTopLabel||"Return to top"),1)]),C("div",Sf,[U(Ml,{headers:_.headers},null,8,["headers"])])],512)):B("",!0)]),_:1})],4))}}),Rf=q(Vf,[["__scopeId","data-v-92b7576c"]]),kf={class:"container"},Cf=["aria-expanded"],Df={class:"menu-text"},Nf=j({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(n){const{theme:e}=ne(),{isHome:t,hasSidebar:s,headers:r,hasLocalNav:o}=lt(),{y:a}=kl(),u=Z(0);Ke(()=>{u.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))});const h=K(()=>({VPLocalNav:!0,"has-sidebar":s.value,empty:!o.value,fixed:!o.value&&!s.value}));return(d,p)=>!A(t)&&(A(o)||A(s)||A(a)>=u.value)?(T(),R("div",{key:0,class:ue(h.value)},[C("div",kf,[A(s)?(T(),R("button",{key:0,class:"menu","aria-expanded":d.open,"aria-controls":"VPSidebarNav",onClick:p[0]||(p[0]=_=>d.$emit("open-menu"))},[p[1]||(p[1]=C("span",{class:"vpi-align-left menu-icon"},null,-1)),C("span",Df,re(A(e).sidebarMenuLabel||"Menu"),1)],8,Cf)):B("",!0),U(Rf,{headers:A(r),navHeight:u.value},null,8,["headers","navHeight"])])],2)):B("",!0)}}),Lf=q(Nf,[["__scopeId","data-v-6c0451ca"]]);function Mf(){const n=Z(!1);function e(){n.value=!0,window.addEventListener("resize",r)}function t(){n.value=!1,window.removeEventListener("resize",r)}function s(){n.value?t():e()}function r(){window.outerWidth>=768&&t()}const o=Wn();return qe(()=>o.path,t),{isScreenOpen:n,openScreen:e,closeScreen:t,toggleScreen:s}}const Of={},$f={class:"VPSwitch",type:"button",role:"switch"},xf={class:"check"},Ff={key:0,class:"icon"};function Bf(n,e){return T(),R("button",$f,[C("span",xf,[n.$slots.default?(T(),R("span",Ff,[k(n.$slots,"default",{},void 0,!0)])):B("",!0)])])}const Uf=q(Of,[["render",Bf],["__scopeId","data-v-b4ccac88"]]),jf=j({__name:"VPSwitchAppearance",setup(n){const{isDark:e,theme:t}=ne(),s=Ws("toggle-appearance",()=>{e.value=!e.value}),r=Z("");return Ii(()=>{r.value=e.value?t.value.lightModeSwitchTitle||"Switch to light theme":t.value.darkModeSwitchTitle||"Switch to dark theme"}),(o,a)=>(T(),H(Uf,{title:r.value,class:"VPSwitchAppearance","aria-checked":A(e),onClick:A(s)},{default:L(()=>a[0]||(a[0]=[C("span",{class:"vpi-sun sun"},null,-1),C("span",{class:"vpi-moon moon"},null,-1)])),_:1,__:[0]},8,["title","aria-checked","onClick"]))}}),bi=q(jf,[["__scopeId","data-v-be9742d9"]]),Hf={key:0,class:"VPNavBarAppearance"},qf=j({__name:"VPNavBarAppearance",setup(n){const{site:e}=ne();return(t,s)=>A(e).appearance&&A(e).appearance!=="force-dark"&&A(e).appearance!=="force-auto"?(T(),R("div",Hf,[U(bi)])):B("",!0)}}),zf=q(qf,[["__scopeId","data-v-3f90c1a5"]]),Pi=Z();let Ol=!1,$r=0;function Gf(n){const e=Z(!1);if(Kn){!Ol&&Kf(),$r++;const t=qe(Pi,s=>{var r,o,a;s===n.el.value||(r=n.el.value)!=null&&r.contains(s)?(e.value=!0,(o=n.onFocus)==null||o.call(n)):(e.value=!1,(a=n.onBlur)==null||a.call(n))});Ti(()=>{t(),$r--,$r||Wf()})}return dh(e)}function Kf(){document.addEventListener("focusin",$l),Ol=!0,Pi.value=document.activeElement}function Wf(){document.removeEventListener("focusin",$l)}function $l(){Pi.value=document.activeElement}const Qf={class:"VPMenuLink"},Xf=["innerHTML"],Yf=j({__name:"VPMenuLink",props:{item:{}},setup(n){const{page:e}=ne();return(t,s)=>(T(),R("div",Qf,[U(Xe,{class:ue({active:A(Lt)(A(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon},{default:L(()=>[C("span",{innerHTML:t.item.text},null,8,Xf)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),Qs=q(Yf,[["__scopeId","data-v-7eeeb2dc"]]),Jf={class:"VPMenuGroup"},Zf={key:0,class:"title"},ep=j({__name:"VPMenuGroup",props:{text:{},items:{}},setup(n){return(e,t)=>(T(),R("div",Jf,[e.text?(T(),R("p",Zf,re(e.text),1)):B("",!0),(T(!0),R(le,null,Se(e.items,s=>(T(),R(le,null,["link"in s?(T(),H(Qs,{key:0,item:s},null,8,["item"])):B("",!0)],64))),256))]))}}),tp=q(ep,[["__scopeId","data-v-383108e6"]]),np={class:"VPMenu"},sp={key:0,class:"items"},rp=j({__name:"VPMenu",props:{items:{}},setup(n){return(e,t)=>(T(),R("div",np,[e.items?(T(),R("div",sp,[(T(!0),R(le,null,Se(e.items,s=>(T(),R(le,{key:JSON.stringify(s)},["link"in s?(T(),H(Qs,{key:0,item:s},null,8,["item"])):"component"in s?(T(),H(Qe(s.component),pt({key:1,ref_for:!0},s.props),null,16)):(T(),H(tp,{key:2,text:s.text,items:s.items},null,8,["text","items"]))],64))),128))])):B("",!0),k(e.$slots,"default",{},void 0,!0)]))}}),ip=q(rp,[["__scopeId","data-v-2f78439e"]]),op=["aria-expanded","aria-label"],ap={key:0,class:"text"},lp=["innerHTML"],up={key:1,class:"vpi-more-horizontal icon"},cp={class:"menu"},hp=j({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(n){const e=Z(!1),t=Z();Gf({el:t,onBlur:s});function s(){e.value=!1}return(r,o)=>(T(),R("div",{class:"VPFlyout",ref_key:"el",ref:t,onMouseenter:o[1]||(o[1]=a=>e.value=!0),onMouseleave:o[2]||(o[2]=a=>e.value=!1)},[C("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":r.label,onClick:o[0]||(o[0]=a=>e.value=!e.value)},[r.button||r.icon?(T(),R("span",ap,[r.icon?(T(),R("span",{key:0,class:ue([r.icon,"option-icon"])},null,2)):B("",!0),r.button?(T(),R("span",{key:1,innerHTML:r.button},null,8,lp)):B("",!0),o[3]||(o[3]=C("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(T(),R("span",up))],8,op),C("div",cp,[U(ip,{items:r.items},{default:L(()=>[k(r.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),Si=q(hp,[["__scopeId","data-v-9bb987dd"]]),dp=["href","aria-label","innerHTML"],fp=j({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(n){const e=n,t=Z();Ke(async()=>{var o;await Rl();const r=(o=t.value)==null?void 0:o.children[0];r instanceof HTMLElement&&r.className.startsWith("vpi-social-")&&(getComputedStyle(r).maskImage||getComputedStyle(r).webkitMaskImage)==="none"&&r.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${e.icon}.svg')`)});const s=K(()=>typeof e.icon=="object"?e.icon.svg:`<span class="vpi-social-${e.icon}"></span>`);return(r,o)=>(T(),R("a",{ref_key:"el",ref:t,class:"VPSocialLink no-icon",href:r.link,"aria-label":r.ariaLabel??(typeof r.icon=="string"?r.icon:""),target:"_blank",rel:"noopener",innerHTML:s.value},null,8,dp))}}),pp=q(fp,[["__scopeId","data-v-60a9a2d3"]]),mp={class:"VPSocialLinks"},gp=j({__name:"VPSocialLinks",props:{links:{}},setup(n){return(e,t)=>(T(),R("div",mp,[(T(!0),R(le,null,Se(e.links,({link:s,icon:r,ariaLabel:o})=>(T(),H(pp,{key:s,icon:r,link:s,ariaLabel:o},null,8,["icon","link","ariaLabel"]))),128))]))}}),Vi=q(gp,[["__scopeId","data-v-b51b99b1"]]),_p={key:0,class:"group translations"},vp={class:"trans-title"},yp={key:1,class:"group"},Ep={class:"item appearance"},Tp={class:"label"},Ip={class:"appearance-action"},wp={key:2,class:"group"},Ap={class:"item social-links"},bp=j({__name:"VPNavBarExtra",setup(n){const{site:e,theme:t}=ne(),{localeLinks:s,currentLang:r}=Qn({correspondingLink:!0}),o=K(()=>s.value.length&&r.value.label||e.value.appearance||t.value.socialLinks);return(a,u)=>o.value?(T(),H(Si,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:L(()=>[A(s).length&&A(r).label?(T(),R("div",_p,[C("p",vp,re(A(r).label),1),(T(!0),R(le,null,Se(A(s),h=>(T(),H(Qs,{key:h.link,item:h},null,8,["item"]))),128))])):B("",!0),A(e).appearance&&A(e).appearance!=="force-dark"&&A(e).appearance!=="force-auto"?(T(),R("div",yp,[C("div",Ep,[C("p",Tp,re(A(t).darkModeSwitchLabel||"Appearance"),1),C("div",Ip,[U(bi)])])])):B("",!0),A(t).socialLinks?(T(),R("div",wp,[C("div",Ap,[U(Vi,{class:"social-links-list",links:A(t).socialLinks},null,8,["links"])])])):B("",!0)]),_:1})):B("",!0)}}),Pp=q(bp,[["__scopeId","data-v-f953d92f"]]),Sp=["aria-expanded"],Vp=j({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(n){return(e,t)=>(T(),R("button",{type:"button",class:ue(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:t[0]||(t[0]=s=>e.$emit("click"))},t[1]||(t[1]=[C("span",{class:"container"},[C("span",{class:"top"}),C("span",{class:"middle"}),C("span",{class:"bottom"})],-1)]),10,Sp))}}),Rp=q(Vp,[["__scopeId","data-v-6bee1efd"]]),kp=["innerHTML"],Cp=j({__name:"VPNavBarMenuLink",props:{item:{}},setup(n){const{page:e}=ne();return(t,s)=>(T(),H(Xe,{class:ue({VPNavBarMenuLink:!0,active:A(Lt)(A(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,tabindex:"0"},{default:L(()=>[C("span",{innerHTML:t.item.text},null,8,kp)]),_:1},8,["class","href","target","rel","no-icon"]))}}),Dp=q(Cp,[["__scopeId","data-v-815115f5"]]),Np=j({__name:"VPNavBarMenuGroup",props:{item:{}},setup(n){const e=n,{page:t}=ne(),s=o=>"component"in o?!1:"link"in o?Lt(t.value.relativePath,o.link,!!e.item.activeMatch):o.items.some(s),r=K(()=>s(e.item));return(o,a)=>(T(),H(Si,{class:ue({VPNavBarMenuGroup:!0,active:A(Lt)(A(t).relativePath,o.item.activeMatch,!!o.item.activeMatch)||r.value}),button:o.item.text,items:o.item.items},null,8,["class","button","items"]))}}),Lp={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},Mp=j({__name:"VPNavBarMenu",setup(n){const{theme:e}=ne();return(t,s)=>A(e).nav?(T(),R("nav",Lp,[s[0]||(s[0]=C("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(T(!0),R(le,null,Se(A(e).nav,r=>(T(),R(le,{key:JSON.stringify(r)},["link"in r?(T(),H(Dp,{key:0,item:r},null,8,["item"])):"component"in r?(T(),H(Qe(r.component),pt({key:1,ref_for:!0},r.props),null,16)):(T(),H(Np,{key:2,item:r},null,8,["item"]))],64))),128))])):B("",!0)}}),Op=q(Mp,[["__scopeId","data-v-020be4db"]]);function $p(n){const{localeIndex:e,theme:t}=ne();function s(r){var N,x,M;const o=r.split("."),a=(N=t.value.search)==null?void 0:N.options,u=a&&typeof a=="object",h=u&&((M=(x=a.locales)==null?void 0:x[e.value])==null?void 0:M.translations)||null,d=u&&a.translations||null;let p=h,_=d,y=n;const S=o.pop();for(const J of o){let Q=null;const ee=y==null?void 0:y[J];ee&&(Q=y=ee);const fe=_==null?void 0:_[J];fe&&(Q=_=fe);const Be=p==null?void 0:p[J];Be&&(Q=p=Be),ee||(y=Q),fe||(_=Q),Be||(p=Q)}return(p==null?void 0:p[S])??(_==null?void 0:_[S])??(y==null?void 0:y[S])??""}return s}const xp=["aria-label"],Fp={class:"DocSearch-Button-Container"},Bp={class:"DocSearch-Button-Placeholder"},ga=j({__name:"VPNavBarSearchButton",setup(n){const t=$p({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(s,r)=>(T(),R("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":A(t)("button.buttonAriaLabel")},[C("span",Fp,[r[0]||(r[0]=C("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),C("span",Bp,re(A(t)("button.buttonText")),1)]),r[1]||(r[1]=C("span",{class:"DocSearch-Button-Keys"},[C("kbd",{class:"DocSearch-Button-Key"}),C("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,xp))}}),Up={class:"VPNavBarSearch"},jp={id:"local-search"},Hp={key:1,id:"docsearch"},qp=j({__name:"VPNavBarSearch",setup(n){const e=()=>null,t=()=>null,{theme:s}=ne(),r=Z(!1),o=Z(!1);Ke(()=>{});function a(){r.value||(r.value=!0,setTimeout(u,16))}function u(){const p=new Event("keydown");p.key="k",p.metaKey=!0,window.dispatchEvent(p),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||u()},16)}const h=Z(!1),d="";return(p,_)=>{var y;return T(),R("div",Up,[A(d)==="local"?(T(),R(le,{key:0},[h.value?(T(),H(A(e),{key:0,onClose:_[0]||(_[0]=S=>h.value=!1)})):B("",!0),C("div",jp,[U(ga,{onClick:_[1]||(_[1]=S=>h.value=!0)})])],64)):A(d)==="algolia"?(T(),R(le,{key:1},[r.value?(T(),H(A(t),{key:0,algolia:((y=A(s).search)==null?void 0:y.options)??A(s).algolia,onVnodeBeforeMount:_[2]||(_[2]=S=>o.value=!0)},null,8,["algolia"])):B("",!0),o.value?B("",!0):(T(),R("div",Hp,[U(ga,{onClick:a})]))],64)):B("",!0)])}}}),zp=j({__name:"VPNavBarSocialLinks",setup(n){const{theme:e}=ne();return(t,s)=>A(e).socialLinks?(T(),H(Vi,{key:0,class:"VPNavBarSocialLinks",links:A(e).socialLinks},null,8,["links"])):B("",!0)}}),Gp=q(zp,[["__scopeId","data-v-ef6192dc"]]),Kp=["href","rel","target"],Wp=["innerHTML"],Qp={key:2},Xp=j({__name:"VPNavBarTitle",setup(n){const{site:e,theme:t}=ne(),{hasSidebar:s}=lt(),{currentLang:r}=Qn(),o=K(()=>{var h;return typeof t.value.logoLink=="string"?t.value.logoLink:(h=t.value.logoLink)==null?void 0:h.link}),a=K(()=>{var h;return typeof t.value.logoLink=="string"||(h=t.value.logoLink)==null?void 0:h.rel}),u=K(()=>{var h;return typeof t.value.logoLink=="string"||(h=t.value.logoLink)==null?void 0:h.target});return(h,d)=>(T(),R("div",{class:ue(["VPNavBarTitle",{"has-sidebar":A(s)}])},[C("a",{class:"title",href:o.value??A(Ai)(A(r).link),rel:a.value,target:u.value},[k(h.$slots,"nav-bar-title-before",{},void 0,!0),A(t).logo?(T(),H(ks,{key:0,class:"logo",image:A(t).logo},null,8,["image"])):B("",!0),A(t).siteTitle?(T(),R("span",{key:1,innerHTML:A(t).siteTitle},null,8,Wp)):A(t).siteTitle===void 0?(T(),R("span",Qp,re(A(e).title),1)):B("",!0),k(h.$slots,"nav-bar-title-after",{},void 0,!0)],8,Kp)],2))}}),Yp=q(Xp,[["__scopeId","data-v-d4488dd0"]]),Jp={class:"items"},Zp={class:"title"},em=j({__name:"VPNavBarTranslations",setup(n){const{theme:e}=ne(),{localeLinks:t,currentLang:s}=Qn({correspondingLink:!0});return(r,o)=>A(t).length&&A(s).label?(T(),H(Si,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:A(e).langMenuLabel||"Change language"},{default:L(()=>[C("div",Jp,[C("p",Zp,re(A(s).label),1),(T(!0),R(le,null,Se(A(t),a=>(T(),H(Qs,{key:a.link,item:a},null,8,["item"]))),128))])]),_:1},8,["label"])):B("",!0)}}),tm=q(em,[["__scopeId","data-v-acee064b"]]),nm={class:"wrapper"},sm={class:"container"},rm={class:"title"},im={class:"content"},om={class:"content-body"},am=j({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(n){const e=n,{y:t}=kl(),{isHome:s,hasSidebar:r}=lt(),o=Z({});return Ii(()=>{o.value={"has-sidebar":r.value,home:s.value,top:t.value===0,"screen-open":e.isScreenOpen}}),(a,u)=>(T(),R("div",{class:ue(["VPNavBar",o.value])},[C("div",nm,[C("div",sm,[C("div",rm,[U(Yp,null,{"nav-bar-title-before":L(()=>[k(a.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":L(()=>[k(a.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),C("div",im,[C("div",om,[k(a.$slots,"nav-bar-content-before",{},void 0,!0),U(qp,{class:"search"}),U(Op,{class:"menu"}),U(tm,{class:"translations"}),U(zf,{class:"appearance"}),U(Gp,{class:"social-links"}),U(Pp,{class:"extra"}),k(a.$slots,"nav-bar-content-after",{},void 0,!0),U(Rp,{class:"hamburger",active:a.isScreenOpen,onClick:u[0]||(u[0]=h=>a.$emit("toggle-screen"))},null,8,["active"])])])])]),u[1]||(u[1]=C("div",{class:"divider"},[C("div",{class:"divider-line"})],-1))],2))}}),lm=q(am,[["__scopeId","data-v-cb5e22fa"]]),um={key:0,class:"VPNavScreenAppearance"},cm={class:"text"},hm=j({__name:"VPNavScreenAppearance",setup(n){const{site:e,theme:t}=ne();return(s,r)=>A(e).appearance&&A(e).appearance!=="force-dark"&&A(e).appearance!=="force-auto"?(T(),R("div",um,[C("p",cm,re(A(t).darkModeSwitchLabel||"Appearance"),1),U(bi)])):B("",!0)}}),dm=q(hm,[["__scopeId","data-v-a3e2920d"]]),fm=["innerHTML"],pm=j({__name:"VPNavScreenMenuLink",props:{item:{}},setup(n){const e=Ws("close-screen");return(t,s)=>(T(),H(Xe,{class:"VPNavScreenMenuLink",href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,onClick:A(e)},{default:L(()=>[C("span",{innerHTML:t.item.text},null,8,fm)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),mm=q(pm,[["__scopeId","data-v-fa963d97"]]),gm=["innerHTML"],_m=j({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(n){const e=Ws("close-screen");return(t,s)=>(T(),H(Xe,{class:"VPNavScreenMenuGroupLink",href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,onClick:A(e)},{default:L(()=>[C("span",{innerHTML:t.item.text},null,8,gm)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),xl=q(_m,[["__scopeId","data-v-e04f3e85"]]),vm={class:"VPNavScreenMenuGroupSection"},ym={key:0,class:"title"},Em=j({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(n){return(e,t)=>(T(),R("div",vm,[e.text?(T(),R("p",ym,re(e.text),1)):B("",!0),(T(!0),R(le,null,Se(e.items,s=>(T(),H(xl,{key:s.text,item:s},null,8,["item"]))),128))]))}}),Tm=q(Em,[["__scopeId","data-v-7dfe209c"]]),Im=["aria-controls","aria-expanded"],wm=["innerHTML"],Am=["id"],bm={key:0,class:"item"},Pm={key:1,class:"item"},Sm={key:2,class:"group"},Vm=j({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(n){const e=n,t=Z(!1),s=K(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function r(){t.value=!t.value}return(o,a)=>(T(),R("div",{class:ue(["VPNavScreenMenuGroup",{open:t.value}])},[C("button",{class:"button","aria-controls":s.value,"aria-expanded":t.value,onClick:r},[C("span",{class:"button-text",innerHTML:o.text},null,8,wm),a[0]||(a[0]=C("span",{class:"vpi-plus button-icon"},null,-1))],8,Im),C("div",{id:s.value,class:"items"},[(T(!0),R(le,null,Se(o.items,u=>(T(),R(le,{key:JSON.stringify(u)},["link"in u?(T(),R("div",bm,[U(xl,{item:u},null,8,["item"])])):"component"in u?(T(),R("div",Pm,[(T(),H(Qe(u.component),pt({ref_for:!0},u.props,{"screen-menu":""}),null,16))])):(T(),R("div",Sm,[U(Tm,{text:u.text,items:u.items},null,8,["text","items"])]))],64))),128))],8,Am)],2))}}),Rm=q(Vm,[["__scopeId","data-v-d3547da8"]]),km={key:0,class:"VPNavScreenMenu"},Cm=j({__name:"VPNavScreenMenu",setup(n){const{theme:e}=ne();return(t,s)=>A(e).nav?(T(),R("nav",km,[(T(!0),R(le,null,Se(A(e).nav,r=>(T(),R(le,{key:JSON.stringify(r)},["link"in r?(T(),H(mm,{key:0,item:r},null,8,["item"])):"component"in r?(T(),H(Qe(r.component),pt({key:1,ref_for:!0},r.props,{"screen-menu":""}),null,16)):(T(),H(Rm,{key:2,text:r.text||"",items:r.items},null,8,["text","items"]))],64))),128))])):B("",!0)}}),Dm=j({__name:"VPNavScreenSocialLinks",setup(n){const{theme:e}=ne();return(t,s)=>A(e).socialLinks?(T(),H(Vi,{key:0,class:"VPNavScreenSocialLinks",links:A(e).socialLinks},null,8,["links"])):B("",!0)}}),Nm={class:"list"},Lm=j({__name:"VPNavScreenTranslations",setup(n){const{localeLinks:e,currentLang:t}=Qn({correspondingLink:!0}),s=Z(!1);function r(){s.value=!s.value}return(o,a)=>A(e).length&&A(t).label?(T(),R("div",{key:0,class:ue(["VPNavScreenTranslations",{open:s.value}])},[C("button",{class:"title",onClick:r},[a[0]||(a[0]=C("span",{class:"vpi-languages icon lang"},null,-1)),Ge(" "+re(A(t).label)+" ",1),a[1]||(a[1]=C("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),C("ul",Nm,[(T(!0),R(le,null,Se(A(e),u=>(T(),R("li",{key:u.link,class:"item"},[U(Xe,{class:"link",href:u.link},{default:L(()=>[Ge(re(u.text),1)]),_:2},1032,["href"])]))),128))])],2)):B("",!0)}}),Mm=q(Lm,[["__scopeId","data-v-516e4bc3"]]),Om={class:"container"},$m=j({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(n){const e=Z(null),t=Cl(Kn?document.body:null);return(s,r)=>(T(),H(yi,{name:"fade",onEnter:r[0]||(r[0]=o=>t.value=!0),onAfterLeave:r[1]||(r[1]=o=>t.value=!1)},{default:L(()=>[s.open?(T(),R("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e,id:"VPNavScreen"},[C("div",Om,[k(s.$slots,"nav-screen-content-before",{},void 0,!0),U(Cm,{class:"menu"}),U(Mm,{class:"translations"}),U(dm,{class:"appearance"}),U(Dm,{class:"social-links"}),k(s.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):B("",!0)]),_:3}))}}),xm=q($m,[["__scopeId","data-v-2dd6d0c7"]]),Fm={key:0,class:"VPNav"},Bm=j({__name:"VPNav",setup(n){const{isScreenOpen:e,closeScreen:t,toggleScreen:s}=Mf(),{frontmatter:r}=ne(),o=K(()=>r.value.navbar!==!1);return Dl("close-screen",t),Ks(()=>{Kn&&document.documentElement.classList.toggle("hide-nav",!o.value)}),(a,u)=>o.value?(T(),R("header",Fm,[U(lm,{"is-screen-open":A(e),onToggleScreen:A(s)},{"nav-bar-title-before":L(()=>[k(a.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":L(()=>[k(a.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":L(()=>[k(a.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":L(()=>[k(a.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),U(xm,{open:A(e)},{"nav-screen-content-before":L(()=>[k(a.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":L(()=>[k(a.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):B("",!0)}}),Um=q(Bm,[["__scopeId","data-v-7ad780c2"]]),jm=["role","tabindex"],Hm={key:1,class:"items"},qm=j({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(n){const e=n,{collapsed:t,collapsible:s,isLink:r,isActiveLink:o,hasActiveLink:a,hasChildren:u,toggle:h}=zh(K(()=>e.item)),d=K(()=>u.value?"section":"div"),p=K(()=>r.value?"a":"div"),_=K(()=>u.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),y=K(()=>r.value?void 0:"button"),S=K(()=>[[`level-${e.depth}`],{collapsible:s.value},{collapsed:t.value},{"is-link":r.value},{"is-active":o.value},{"has-active":a.value}]);function N(M){"key"in M&&M.key!=="Enter"||!e.item.link&&h()}function x(){e.item.link&&h()}return(M,J)=>{const Q=bt("VPSidebarItem",!0);return T(),H(Qe(d.value),{class:ue(["VPSidebarItem",S.value])},{default:L(()=>[M.item.text?(T(),R("div",pt({key:0,class:"item",role:y.value},fh(M.item.items?{click:N,keydown:N}:{},!0),{tabindex:M.item.items&&0}),[J[1]||(J[1]=C("div",{class:"indicator"},null,-1)),M.item.link?(T(),H(Xe,{key:0,tag:p.value,class:"link",href:M.item.link,rel:M.item.rel,target:M.item.target},{default:L(()=>[(T(),H(Qe(_.value),{class:"text",innerHTML:M.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(T(),H(Qe(_.value),{key:1,class:"text",innerHTML:M.item.text},null,8,["innerHTML"])),M.item.collapsed!=null&&M.item.items&&M.item.items.length?(T(),R("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:x,onKeydown:ph(x,["enter"]),tabindex:"0"},J[0]||(J[0]=[C("span",{class:"vpi-chevron-right caret-icon"},null,-1)]),32)):B("",!0)],16,jm)):B("",!0),M.item.items&&M.item.items.length?(T(),R("div",Hm,[M.depth<5?(T(!0),R(le,{key:0},Se(M.item.items,ee=>(T(),H(Q,{key:ee.text,item:ee,depth:M.depth+1},null,8,["item","depth"]))),128)):B("",!0)])):B("",!0)]),_:1},8,["class"])}}}),zm=q(qm,[["__scopeId","data-v-6b36a2fd"]]),Gm=j({__name:"VPSidebarGroup",props:{items:{}},setup(n){const e=Z(!0);let t=null;return Ke(()=>{t=setTimeout(()=>{t=null,e.value=!1},300)}),mh(()=>{t!=null&&(clearTimeout(t),t=null)}),(s,r)=>(T(!0),R(le,null,Se(s.items,o=>(T(),R("div",{key:o.text,class:ue(["group",{"no-transition":e.value}])},[U(zm,{item:o,depth:0},null,8,["item"])],2))),128))}}),Km=q(Gm,[["__scopeId","data-v-a84b7c21"]]),Wm={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},Qm=j({__name:"VPSidebar",props:{open:{type:Boolean}},setup(n){const{sidebarGroups:e,hasSidebar:t}=lt(),s=n,r=Z(null),o=Cl(Kn?document.body:null);qe([s,r],()=>{var u;s.open?(o.value=!0,(u=r.value)==null||u.focus()):o.value=!1},{immediate:!0,flush:"post"});const a=Z(0);return qe(e,()=>{a.value+=1},{deep:!0}),(u,h)=>A(t)?(T(),R("aside",{key:0,class:ue(["VPSidebar",{open:u.open}]),ref_key:"navEl",ref:r,onClick:h[0]||(h[0]=gh(()=>{},["stop"]))},[h[2]||(h[2]=C("div",{class:"curtain"},null,-1)),C("nav",Wm,[h[1]||(h[1]=C("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),k(u.$slots,"sidebar-nav-before",{},void 0,!0),(T(),H(Km,{items:A(e),key:a.value},null,8,["items"])),k(u.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):B("",!0)}}),Xm=q(Qm,[["__scopeId","data-v-606f96d3"]]),Ym=j({__name:"VPSkipLink",setup(n){const{theme:e}=ne(),t=Wn(),s=Z();qe(()=>t.path,()=>s.value.focus());function r({target:o}){const a=document.getElementById(decodeURIComponent(o.hash).slice(1));if(a){const u=()=>{a.removeAttribute("tabindex"),a.removeEventListener("blur",u)};a.setAttribute("tabindex","-1"),a.addEventListener("blur",u),a.focus(),window.scrollTo(0,0)}}return(o,a)=>(T(),R(le,null,[C("span",{ref_key:"backToTop",ref:s,tabindex:"-1"},null,512),C("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:r},re(A(e).skipToContentLabel||"Skip to content"),1)],64))}}),Jm=q(Ym,[["__scopeId","data-v-fcbfc0e0"]]),Zm=j({__name:"Layout",setup(n){const{isOpen:e,open:t,close:s}=qh();Gh({closeSidebar:s});const{frontmatter:r}=ne(),o=_h(),a=K(()=>!!o["home-hero-image"]);return Dl("hero-image-slot-exists",a),(u,h)=>{const d=bt("Content");return A(r).layout!==!1?(T(),R("div",{key:0,class:ue(["Layout",A(r).pageClass])},[k(u.$slots,"layout-top",{},void 0,!0),U(Jm),U(Ih,{class:"backdrop",show:A(e),onClick:A(s)},null,8,["show","onClick"]),U(Um,null,{"nav-bar-title-before":L(()=>[k(u.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":L(()=>[k(u.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":L(()=>[k(u.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":L(()=>[k(u.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":L(()=>[k(u.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":L(()=>[k(u.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),U(Lf,{open:A(e),onOpenMenu:A(t)},null,8,["open","onOpenMenu"]),U(Xm,{open:A(e)},{"sidebar-nav-before":L(()=>[k(u.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":L(()=>[k(u.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),U(yf,null,{"page-top":L(()=>[k(u.$slots,"page-top",{},void 0,!0)]),"page-bottom":L(()=>[k(u.$slots,"page-bottom",{},void 0,!0)]),"not-found":L(()=>[k(u.$slots,"not-found",{},void 0,!0)]),"home-hero-before":L(()=>[k(u.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":L(()=>[k(u.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":L(()=>[k(u.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":L(()=>[k(u.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":L(()=>[k(u.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":L(()=>[k(u.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":L(()=>[k(u.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":L(()=>[k(u.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":L(()=>[k(u.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":L(()=>[k(u.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":L(()=>[k(u.$slots,"doc-before",{},void 0,!0)]),"doc-after":L(()=>[k(u.$slots,"doc-after",{},void 0,!0)]),"doc-top":L(()=>[k(u.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":L(()=>[k(u.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":L(()=>[k(u.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":L(()=>[k(u.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":L(()=>[k(u.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":L(()=>[k(u.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":L(()=>[k(u.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":L(()=>[k(u.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),U(Af),k(u.$slots,"layout-bottom",{},void 0,!0)],2)):(T(),H(d,{key:1}))}}}),eg=q(Zm,[["__scopeId","data-v-4539713c"]]),tg={Layout:eg,enhanceApp:({app:n})=>{n.component("Badge",yh)}},ng={class:"giscus-comments-container"},sg={class:"giscus-comments-placeholder"},rg={__name:"GiscusComments",setup(n){const e=Z(!1),t=Z(null),s=Wn(),{isDark:r}=Gs(),o=K(()=>r.value?"dark_dimmed":"light");function a(){if(t.value){t.value.innerHTML="";const u=document.createElement("script");u.src="https://giscus.app/client.js",u.setAttribute("data-repo","HolyBearTW/holybear.me"),u.setAttribute("data-repo-id","R_kgDOJmguVg"),u.setAttribute("data-category","General"),u.setAttribute("data-category-id","DIC_kwDOJmguVs4Cqo90"),u.setAttribute("data-mapping","pathname"),u.setAttribute("data-strict","0"),u.setAttribute("data-reactions-enabled","1"),u.setAttribute("data-emit-metadata","0"),u.setAttribute("data-input-position","bottom"),u.setAttribute("data-theme",o.value),u.setAttribute("data-lang","zh-TW"),u.setAttribute("crossorigin","anonymous"),u.async=!0,t.value.appendChild(u),e.value=!0}}return Ke(()=>{a()}),qe(()=>s.path,()=>{e.value=!1,a()}),qe(o,u=>{{const h=document.querySelector("iframe.giscus-frame");h&&h.contentWindow&&h.contentWindow.postMessage({giscus:{setConfig:{theme:u}}},"https://giscus.app")}},{immediate:!0}),(u,h)=>(T(),R("div",ng,[pa(C("div",sg,h[0]||(h[0]=[C("p",null,"正在載入留言...",-1),C("div",{class:"spinner"},null,-1)]),512),[[ma,!e.value]]),pa(C("div",{ref_key:"giscusContainer",ref:t,class:"giscus-actual-comments"},null,512),[[ma,e.value]])]))}},ig=q(rg,[["__scopeId","data-v-0991216c"]]);function og(n){const e=Z(0),t=Z(0),s=Z(!0);async function r(){{s.value=!1;return}}async function o(u){}async function a(u){}return{up:e,down:t,vote:o,unvote:a,loading:s,fetchVotes:r}}const ag={key:0,class:"vote-panel"},lg=["disabled"],ug=["disabled"],cg={__name:"VotePanel",setup(n){const{page:e}=Gs(),t=K(()=>e.value.relativePath.replaceAll("/","__"));let s=Z(0),r=Z(0),o=Z(!0),a=null,u=null,h=null;const d=Z(null),p=Z(!1);function _(S){const N=og();s=N.up,r=N.down,o=N.loading,a=N.vote,u=N.unvote,h=N.fetchVotes}qe(t,S=>{_(),p.value&&(d.value=localStorage.getItem("vote_"+S)||null)}),Ke(()=>{_(t.value),d.value=localStorage.getItem("vote_"+t.value)||null,p.value=!0});async function y(S){o.value||(d.value===S?(await u(S),d.value=null,localStorage.removeItem("vote_"+t.value)):(d.value&&await u(d.value),await a(S),d.value=S,localStorage.setItem("vote_"+t.value,S)),await h())}return(S,N)=>p.value?(T(),R("div",ag,[C("button",{onClick:N[0]||(N[0]=x=>y("up")),disabled:A(o),class:ue({active:d.value==="up"})},"👍 推 ("+re(A(s))+")",11,lg),C("button",{onClick:N[1]||(N[1]=x=>y("down")),disabled:A(o),class:ue({active:d.value==="down"})},"👎 噓 ("+re(A(r))+")",11,ug)])):B("",!0)}},hg=()=>{};var _a={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},dg=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const o=n[t++];e[s++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=n[t++],a=n[t++],u=n[t++],h=((r&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;e[s++]=String.fromCharCode(55296+(h>>10)),e[s++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],a=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Bl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const o=n[r],a=r+1<n.length,u=a?n[r+1]:0,h=r+2<n.length,d=h?n[r+2]:0,p=o>>2,_=(o&3)<<4|u>>4;let y=(u&15)<<2|d>>6,S=d&63;h||(S=64,a||(y=64)),s.push(t[p],t[_],t[y],t[S])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Fl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):dg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const o=t[n.charAt(r++)],u=r<n.length?t[n.charAt(r)]:0;++r;const d=r<n.length?t[n.charAt(r)]:64;++r;const _=r<n.length?t[n.charAt(r)]:64;if(++r,o==null||u==null||d==null||_==null)throw new fg;const y=o<<2|u>>4;if(s.push(y),d!==64){const S=u<<4&240|d>>2;if(s.push(S),_!==64){const N=d<<6&192|_;s.push(N)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class fg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pg=function(n){const e=Fl(n);return Bl.encodeByteArray(e,!0)},Cs=function(n){return pg(n).replace(/\./g,"")},mg=function(n){try{return Bl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g=()=>gg().__FIREBASE_DEFAULTS__,vg=()=>{if(typeof process>"u"||typeof _a>"u")return;const n=_a.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},yg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&mg(n[1]);return e&&JSON.parse(e)},Ri=()=>{try{return hg()||_g()||vg()||yg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Eg=n=>{var e,t;return(t=(e=Ri())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Tg=n=>{const e=Eg(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Ul=()=>{var n;return(n=Ri())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(n){return n.endsWith(".cloudworkstations.dev")}async function wg(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Cs(JSON.stringify(t)),Cs(JSON.stringify(a)),""].join(".")}const Dn={};function bg(){const n={prod:[],emulator:[]};for(const e of Object.keys(Dn))Dn[e]?n.emulator.push(e):n.prod.push(e);return n}function Pg(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let va=!1;function Sg(n,e){if(typeof window>"u"||typeof document>"u"||!ki(window.location.host)||Dn[n]===e||Dn[n]||va)return;Dn[n]=e;function t(y){return`__firebase__banner__${y}`}const s="__firebase__banner",o=bg().prod.length>0;function a(){const y=document.getElementById(s);y&&y.remove()}function u(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function h(y,S){y.setAttribute("width","24"),y.setAttribute("id",S),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function d(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{va=!0,a()},y}function p(y,S){y.setAttribute("id",S),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function _(){const y=Pg(s),S=t("text"),N=document.getElementById(S)||document.createElement("span"),x=t("learnmore"),M=document.getElementById(x)||document.createElement("a"),J=t("preprendIcon"),Q=document.getElementById(J)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const ee=y.element;u(ee),p(M,x);const fe=d();h(Q,J),ee.append(Q,N,M,fe),document.body.appendChild(ee)}o?(N.innerText="Preview backend disconnected.",Q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Q.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",_):_()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rg(){var n;const e=(n=Ri())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kg(){return!Rg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Cg(){try{return typeof indexedDB=="object"}catch{return!1}}function Dg(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var o;e(((o=r.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng="FirebaseError";class on extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Ng,Object.setPrototypeOf(this,on.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jl.prototype.create)}}class jl{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],a=o?Lg(o,s):"Error",u=`${this.serviceName}: ${a} (${r}).`;return new on(r,u,s)}}function Lg(n,e){return n.replace(Mg,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Mg=/\{\$([^}]+)}/g;function Ds(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const o=n[r],a=e[r];if(ya(o)&&ya(a)){if(!Ds(o,a))return!1}else if(o!==a)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function ya(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(n){return n&&n._delegate?n._delegate:n}class $n{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Ig;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xg(e))try{this.getOrInitializeService({instanceIdentifier:Dt})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:r});s.resolve(o)}catch{}}}}clearInstance(e=Dt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dt){return this.instances.has(e)}getOptions(e=Dt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);s===u&&a.resolve(r)}return r}onInit(e,t){var s;const r=this.normalizeInstanceIdentifier(t),o=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;o.add(e),this.onInitCallbacks.set(r,o);const a=this.instances.get(r);return a&&e(a,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:$g(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Dt){return this.component?this.component.multipleInstances?e:Dt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $g(n){return n===Dt?void 0:n}function xg(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Og(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(oe||(oe={}));const Bg={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},Ug=oe.INFO,jg={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},Hg=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=jg[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hl{constructor(e){this.name=e,this._logLevel=Ug,this._logHandler=Hg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Bg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const qg=(n,e)=>e.some(t=>n instanceof t);let Ea,Ta;function zg(){return Ea||(Ea=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gg(){return Ta||(Ta=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ql=new WeakMap,Yr=new WeakMap,zl=new WeakMap,xr=new WeakMap,Ci=new WeakMap;function Kg(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(mt(n.result)),r()},a=()=>{s(n.error),r()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&ql.set(t,n)}).catch(()=>{}),Ci.set(e,n),e}function Wg(n){if(Yr.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),r()},a=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Yr.set(n,e)}let Jr={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Yr.get(n);if(e==="objectStoreNames")return n.objectStoreNames||zl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return mt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Qg(n){Jr=n(Jr)}function Xg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Fr(this),e,...t);return zl.set(s,e.sort?e.sort():[e]),mt(s)}:Gg().includes(n)?function(...e){return n.apply(Fr(this),e),mt(ql.get(this))}:function(...e){return mt(n.apply(Fr(this),e))}}function Yg(n){return typeof n=="function"?Xg(n):(n instanceof IDBTransaction&&Wg(n),qg(n,zg())?new Proxy(n,Jr):n)}function mt(n){if(n instanceof IDBRequest)return Kg(n);if(xr.has(n))return xr.get(n);const e=Yg(n);return e!==n&&(xr.set(n,e),Ci.set(e,n)),e}const Fr=n=>Ci.get(n);function Jg(n,e,{blocked:t,upgrade:s,blocking:r,terminated:o}={}){const a=indexedDB.open(n,e),u=mt(a);return s&&a.addEventListener("upgradeneeded",h=>{s(mt(a.result),h.oldVersion,h.newVersion,mt(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),r&&h.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const Zg=["get","getKey","getAll","getAllKeys","count"],e_=["put","add","delete","clear"],Br=new Map;function Ia(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Br.get(e))return Br.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=e_.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Zg.includes(t)))return;const o=async function(a,...u){const h=this.transaction(a,r?"readwrite":"readonly");let d=h.store;return s&&(d=d.index(u.shift())),(await Promise.all([d[t](...u),r&&h.done]))[0]};return Br.set(e,o),o}Qg(n=>({...n,get:(e,t,s)=>Ia(e,t)||n.get(e,t,s),has:(e,t)=>!!Ia(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(n_(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function n_(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zr="@firebase/app",wa="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it=new Hl("@firebase/app"),s_="@firebase/app-compat",r_="@firebase/analytics-compat",i_="@firebase/analytics",o_="@firebase/app-check-compat",a_="@firebase/app-check",l_="@firebase/auth",u_="@firebase/auth-compat",c_="@firebase/database",h_="@firebase/data-connect",d_="@firebase/database-compat",f_="@firebase/functions",p_="@firebase/functions-compat",m_="@firebase/installations",g_="@firebase/installations-compat",__="@firebase/messaging",v_="@firebase/messaging-compat",y_="@firebase/performance",E_="@firebase/performance-compat",T_="@firebase/remote-config",I_="@firebase/remote-config-compat",w_="@firebase/storage",A_="@firebase/storage-compat",b_="@firebase/firestore",P_="@firebase/ai",S_="@firebase/firestore-compat",V_="firebase",R_="11.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei="[DEFAULT]",k_={[Zr]:"fire-core",[s_]:"fire-core-compat",[i_]:"fire-analytics",[r_]:"fire-analytics-compat",[a_]:"fire-app-check",[o_]:"fire-app-check-compat",[l_]:"fire-auth",[u_]:"fire-auth-compat",[c_]:"fire-rtdb",[h_]:"fire-data-connect",[d_]:"fire-rtdb-compat",[f_]:"fire-fn",[p_]:"fire-fn-compat",[m_]:"fire-iid",[g_]:"fire-iid-compat",[__]:"fire-fcm",[v_]:"fire-fcm-compat",[y_]:"fire-perf",[E_]:"fire-perf-compat",[T_]:"fire-rc",[I_]:"fire-rc-compat",[w_]:"fire-gcs",[A_]:"fire-gcs-compat",[b_]:"fire-fst",[S_]:"fire-fst-compat",[P_]:"fire-vertex","fire-js":"fire-js",[V_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns=new Map,C_=new Map,ti=new Map;function Aa(n,e){try{n.container.addComponent(e)}catch(t){it.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ls(n){const e=n.name;if(ti.has(e))return it.debug(`There were multiple attempts to register component ${e}.`),!1;ti.set(e,n);for(const t of Ns.values())Aa(t,n);for(const t of C_.values())Aa(t,n);return!0}function D_(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function N_(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gt=new jl("app","Firebase",L_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_=R_;function Gl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ei,automaticDataCollectionEnabled:!0},e),r=s.name;if(typeof r!="string"||!r)throw gt.create("bad-app-name",{appName:String(r)});if(t||(t=Ul()),!t)throw gt.create("no-options");const o=Ns.get(r);if(o){if(Ds(t,o.options)&&Ds(s,o.config))return o;throw gt.create("duplicate-app",{appName:r})}const a=new Fg(r);for(const h of ti.values())a.addComponent(h);const u=new M_(t,s,a);return Ns.set(r,u),u}function $_(n=ei){const e=Ns.get(n);if(!e&&n===ei&&Ul())return Gl();if(!e)throw gt.create("no-app",{appName:n});return e}function Xt(n,e,t){var s;let r=(s=k_[n])!==null&&s!==void 0?s:n;t&&(r+=`-${t}`);const o=r.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const u=[`Unable to register library "${r}" with version "${e}":`];o&&u.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),it.warn(u.join(" "));return}Ls(new $n(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_="firebase-heartbeat-database",F_=1,xn="firebase-heartbeat-store";let Ur=null;function Kl(){return Ur||(Ur=Jg(x_,F_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(xn)}catch(t){console.warn(t)}}}}).catch(n=>{throw gt.create("idb-open",{originalErrorMessage:n.message})})),Ur}async function B_(n){try{const t=(await Kl()).transaction(xn),s=await t.objectStore(xn).get(Wl(n));return await t.done,s}catch(e){if(e instanceof on)it.warn(e.message);else{const t=gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});it.warn(t.message)}}}async function ba(n,e){try{const s=(await Kl()).transaction(xn,"readwrite");await s.objectStore(xn).put(e,Wl(n)),await s.done}catch(t){if(t instanceof on)it.warn(t.message);else{const s=gt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});it.warn(s.message)}}}function Wl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=1024,j_=30;class H_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new z_(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Pa();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:r}),this._heartbeatsCache.heartbeats.length>j_){const a=G_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){it.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Pa(),{heartbeatsToSend:s,unsentEntries:r}=q_(this._heartbeatsCache.heartbeats),o=Cs(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return it.warn(t),""}}}function Pa(){return new Date().toISOString().substring(0,10)}function q_(n,e=U_){const t=[];let s=n.slice();for(const r of n){const o=t.find(a=>a.agent===r.agent);if(o){if(o.dates.push(r.date),Sa(t)>e){o.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Sa(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class z_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Cg()?Dg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await B_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return ba(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return ba(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Sa(n){return Cs(JSON.stringify({version:2,heartbeats:n})).length}function G_(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(n){Ls(new $n("platform-logger",e=>new t_(e),"PRIVATE")),Ls(new $n("heartbeat",e=>new H_(e),"PRIVATE")),Xt(Zr,wa,n),Xt(Zr,wa,"esm2017"),Xt("fire-js","")}K_("");var Va=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _t,Ql;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,m){function v(){}v.prototype=m.prototype,w.D=m.prototype,w.prototype=new v,w.prototype.constructor=w,w.C=function(E,I,P){for(var g=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)g[nt-2]=arguments[nt];return m.prototype[I].apply(E,g)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(w,m,v){v||(v=0);var E=Array(16);if(typeof m=="string")for(var I=0;16>I;++I)E[I]=m.charCodeAt(v++)|m.charCodeAt(v++)<<8|m.charCodeAt(v++)<<16|m.charCodeAt(v++)<<24;else for(I=0;16>I;++I)E[I]=m[v++]|m[v++]<<8|m[v++]<<16|m[v++]<<24;m=w.g[0],v=w.g[1],I=w.g[2];var P=w.g[3],g=m+(P^v&(I^P))+E[0]+3614090360&4294967295;m=v+(g<<7&4294967295|g>>>25),g=P+(I^m&(v^I))+E[1]+3905402710&4294967295,P=m+(g<<12&4294967295|g>>>20),g=I+(v^P&(m^v))+E[2]+606105819&4294967295,I=P+(g<<17&4294967295|g>>>15),g=v+(m^I&(P^m))+E[3]+3250441966&4294967295,v=I+(g<<22&4294967295|g>>>10),g=m+(P^v&(I^P))+E[4]+4118548399&4294967295,m=v+(g<<7&4294967295|g>>>25),g=P+(I^m&(v^I))+E[5]+1200080426&4294967295,P=m+(g<<12&4294967295|g>>>20),g=I+(v^P&(m^v))+E[6]+2821735955&4294967295,I=P+(g<<17&4294967295|g>>>15),g=v+(m^I&(P^m))+E[7]+4249261313&4294967295,v=I+(g<<22&4294967295|g>>>10),g=m+(P^v&(I^P))+E[8]+1770035416&4294967295,m=v+(g<<7&4294967295|g>>>25),g=P+(I^m&(v^I))+E[9]+2336552879&4294967295,P=m+(g<<12&4294967295|g>>>20),g=I+(v^P&(m^v))+E[10]+4294925233&4294967295,I=P+(g<<17&4294967295|g>>>15),g=v+(m^I&(P^m))+E[11]+2304563134&4294967295,v=I+(g<<22&4294967295|g>>>10),g=m+(P^v&(I^P))+E[12]+1804603682&4294967295,m=v+(g<<7&4294967295|g>>>25),g=P+(I^m&(v^I))+E[13]+4254626195&4294967295,P=m+(g<<12&4294967295|g>>>20),g=I+(v^P&(m^v))+E[14]+2792965006&4294967295,I=P+(g<<17&4294967295|g>>>15),g=v+(m^I&(P^m))+E[15]+1236535329&4294967295,v=I+(g<<22&4294967295|g>>>10),g=m+(I^P&(v^I))+E[1]+4129170786&4294967295,m=v+(g<<5&4294967295|g>>>27),g=P+(v^I&(m^v))+E[6]+3225465664&4294967295,P=m+(g<<9&4294967295|g>>>23),g=I+(m^v&(P^m))+E[11]+643717713&4294967295,I=P+(g<<14&4294967295|g>>>18),g=v+(P^m&(I^P))+E[0]+3921069994&4294967295,v=I+(g<<20&4294967295|g>>>12),g=m+(I^P&(v^I))+E[5]+3593408605&4294967295,m=v+(g<<5&4294967295|g>>>27),g=P+(v^I&(m^v))+E[10]+38016083&4294967295,P=m+(g<<9&4294967295|g>>>23),g=I+(m^v&(P^m))+E[15]+3634488961&4294967295,I=P+(g<<14&4294967295|g>>>18),g=v+(P^m&(I^P))+E[4]+3889429448&4294967295,v=I+(g<<20&4294967295|g>>>12),g=m+(I^P&(v^I))+E[9]+568446438&4294967295,m=v+(g<<5&4294967295|g>>>27),g=P+(v^I&(m^v))+E[14]+3275163606&4294967295,P=m+(g<<9&4294967295|g>>>23),g=I+(m^v&(P^m))+E[3]+4107603335&4294967295,I=P+(g<<14&4294967295|g>>>18),g=v+(P^m&(I^P))+E[8]+1163531501&4294967295,v=I+(g<<20&4294967295|g>>>12),g=m+(I^P&(v^I))+E[13]+2850285829&4294967295,m=v+(g<<5&4294967295|g>>>27),g=P+(v^I&(m^v))+E[2]+4243563512&4294967295,P=m+(g<<9&4294967295|g>>>23),g=I+(m^v&(P^m))+E[7]+1735328473&4294967295,I=P+(g<<14&4294967295|g>>>18),g=v+(P^m&(I^P))+E[12]+2368359562&4294967295,v=I+(g<<20&4294967295|g>>>12),g=m+(v^I^P)+E[5]+4294588738&4294967295,m=v+(g<<4&4294967295|g>>>28),g=P+(m^v^I)+E[8]+2272392833&4294967295,P=m+(g<<11&4294967295|g>>>21),g=I+(P^m^v)+E[11]+1839030562&4294967295,I=P+(g<<16&4294967295|g>>>16),g=v+(I^P^m)+E[14]+4259657740&4294967295,v=I+(g<<23&4294967295|g>>>9),g=m+(v^I^P)+E[1]+2763975236&4294967295,m=v+(g<<4&4294967295|g>>>28),g=P+(m^v^I)+E[4]+1272893353&4294967295,P=m+(g<<11&4294967295|g>>>21),g=I+(P^m^v)+E[7]+4139469664&4294967295,I=P+(g<<16&4294967295|g>>>16),g=v+(I^P^m)+E[10]+3200236656&4294967295,v=I+(g<<23&4294967295|g>>>9),g=m+(v^I^P)+E[13]+681279174&4294967295,m=v+(g<<4&4294967295|g>>>28),g=P+(m^v^I)+E[0]+3936430074&4294967295,P=m+(g<<11&4294967295|g>>>21),g=I+(P^m^v)+E[3]+3572445317&4294967295,I=P+(g<<16&4294967295|g>>>16),g=v+(I^P^m)+E[6]+76029189&4294967295,v=I+(g<<23&4294967295|g>>>9),g=m+(v^I^P)+E[9]+3654602809&4294967295,m=v+(g<<4&4294967295|g>>>28),g=P+(m^v^I)+E[12]+3873151461&4294967295,P=m+(g<<11&4294967295|g>>>21),g=I+(P^m^v)+E[15]+530742520&4294967295,I=P+(g<<16&4294967295|g>>>16),g=v+(I^P^m)+E[2]+3299628645&4294967295,v=I+(g<<23&4294967295|g>>>9),g=m+(I^(v|~P))+E[0]+4096336452&4294967295,m=v+(g<<6&4294967295|g>>>26),g=P+(v^(m|~I))+E[7]+1126891415&4294967295,P=m+(g<<10&4294967295|g>>>22),g=I+(m^(P|~v))+E[14]+2878612391&4294967295,I=P+(g<<15&4294967295|g>>>17),g=v+(P^(I|~m))+E[5]+4237533241&4294967295,v=I+(g<<21&4294967295|g>>>11),g=m+(I^(v|~P))+E[12]+1700485571&4294967295,m=v+(g<<6&4294967295|g>>>26),g=P+(v^(m|~I))+E[3]+2399980690&4294967295,P=m+(g<<10&4294967295|g>>>22),g=I+(m^(P|~v))+E[10]+4293915773&4294967295,I=P+(g<<15&4294967295|g>>>17),g=v+(P^(I|~m))+E[1]+2240044497&4294967295,v=I+(g<<21&4294967295|g>>>11),g=m+(I^(v|~P))+E[8]+1873313359&4294967295,m=v+(g<<6&4294967295|g>>>26),g=P+(v^(m|~I))+E[15]+4264355552&4294967295,P=m+(g<<10&4294967295|g>>>22),g=I+(m^(P|~v))+E[6]+2734768916&4294967295,I=P+(g<<15&4294967295|g>>>17),g=v+(P^(I|~m))+E[13]+1309151649&4294967295,v=I+(g<<21&4294967295|g>>>11),g=m+(I^(v|~P))+E[4]+4149444226&4294967295,m=v+(g<<6&4294967295|g>>>26),g=P+(v^(m|~I))+E[11]+3174756917&4294967295,P=m+(g<<10&4294967295|g>>>22),g=I+(m^(P|~v))+E[2]+718787259&4294967295,I=P+(g<<15&4294967295|g>>>17),g=v+(P^(I|~m))+E[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(I+(g<<21&4294967295|g>>>11))&4294967295,w.g[2]=w.g[2]+I&4294967295,w.g[3]=w.g[3]+P&4294967295}s.prototype.u=function(w,m){m===void 0&&(m=w.length);for(var v=m-this.blockSize,E=this.B,I=this.h,P=0;P<m;){if(I==0)for(;P<=v;)r(this,w,P),P+=this.blockSize;if(typeof w=="string"){for(;P<m;)if(E[I++]=w.charCodeAt(P++),I==this.blockSize){r(this,E),I=0;break}}else for(;P<m;)if(E[I++]=w[P++],I==this.blockSize){r(this,E),I=0;break}}this.h=I,this.o+=m},s.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;var v=8*this.o;for(m=w.length-8;m<w.length;++m)w[m]=v&255,v/=256;for(this.u(w),w=Array(16),m=v=0;4>m;++m)for(var E=0;32>E;E+=8)w[v++]=this.g[m]>>>E&255;return w};function o(w,m){var v=u;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=m(w)}function a(w,m){this.h=m;for(var v=[],E=!0,I=w.length-1;0<=I;I--){var P=w[I]|0;E&&P==m||(v[I]=P,E=!1)}this.g=v}var u={};function h(w){return-128<=w&&128>w?o(w,function(m){return new a([m|0],0>m?-1:0)}):new a([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return _;if(0>w)return M(d(-w));for(var m=[],v=1,E=0;w>=v;E++)m[E]=w/v|0,v*=4294967296;return new a(m,0)}function p(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return M(p(w.substring(1),m));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=d(Math.pow(m,8)),E=_,I=0;I<w.length;I+=8){var P=Math.min(8,w.length-I),g=parseInt(w.substring(I,I+P),m);8>P?(P=d(Math.pow(m,P)),E=E.j(P).add(d(g))):(E=E.j(v),E=E.add(d(g)))}return E}var _=h(0),y=h(1),S=h(16777216);n=a.prototype,n.m=function(){if(x(this))return-M(this).m();for(var w=0,m=1,v=0;v<this.g.length;v++){var E=this.i(v);w+=(0<=E?E:4294967296+E)*m,m*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(N(this))return"0";if(x(this))return"-"+M(this).toString(w);for(var m=d(Math.pow(w,6)),v=this,E="";;){var I=fe(v,m).g;v=J(v,I.j(m));var P=((0<v.g.length?v.g[0]:v.h)>>>0).toString(w);if(v=I,N(v))return P+E;for(;6>P.length;)P="0"+P;E=P+E}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function N(w){if(w.h!=0)return!1;for(var m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function x(w){return w.h==-1}n.l=function(w){return w=J(this,w),x(w)?-1:N(w)?0:1};function M(w){for(var m=w.g.length,v=[],E=0;E<m;E++)v[E]=~w.g[E];return new a(v,~w.h).add(y)}n.abs=function(){return x(this)?M(this):this},n.add=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],E=0,I=0;I<=m;I++){var P=E+(this.i(I)&65535)+(w.i(I)&65535),g=(P>>>16)+(this.i(I)>>>16)+(w.i(I)>>>16);E=g>>>16,P&=65535,g&=65535,v[I]=g<<16|P}return new a(v,v[v.length-1]&-2147483648?-1:0)};function J(w,m){return w.add(M(m))}n.j=function(w){if(N(this)||N(w))return _;if(x(this))return x(w)?M(this).j(M(w)):M(M(this).j(w));if(x(w))return M(this.j(M(w)));if(0>this.l(S)&&0>w.l(S))return d(this.m()*w.m());for(var m=this.g.length+w.g.length,v=[],E=0;E<2*m;E++)v[E]=0;for(E=0;E<this.g.length;E++)for(var I=0;I<w.g.length;I++){var P=this.i(E)>>>16,g=this.i(E)&65535,nt=w.i(I)>>>16,hn=w.i(I)&65535;v[2*E+2*I]+=g*hn,Q(v,2*E+2*I),v[2*E+2*I+1]+=P*hn,Q(v,2*E+2*I+1),v[2*E+2*I+1]+=g*nt,Q(v,2*E+2*I+1),v[2*E+2*I+2]+=P*nt,Q(v,2*E+2*I+2)}for(E=0;E<m;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=m;E<2*m;E++)v[E]=0;return new a(v,0)};function Q(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function ee(w,m){this.g=w,this.h=m}function fe(w,m){if(N(m))throw Error("division by zero");if(N(w))return new ee(_,_);if(x(w))return m=fe(M(w),m),new ee(M(m.g),M(m.h));if(x(m))return m=fe(w,M(m)),new ee(M(m.g),m.h);if(30<w.g.length){if(x(w)||x(m))throw Error("slowDivide_ only works with positive integers.");for(var v=y,E=m;0>=E.l(w);)v=Be(v),E=Be(E);var I=we(v,1),P=we(E,1);for(E=we(E,2),v=we(v,2);!N(E);){var g=P.add(E);0>=g.l(w)&&(I=I.add(v),P=g),E=we(E,1),v=we(v,1)}return m=J(w,I.j(m)),new ee(I,m)}for(I=_;0<=w.l(m);){for(v=Math.max(1,Math.floor(w.m()/m.m())),E=Math.ceil(Math.log(v)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),P=d(v),g=P.j(m);x(g)||0<g.l(w);)v-=E,P=d(v),g=P.j(m);N(P)&&(P=y),I=I.add(P),w=J(w,g)}return new ee(I,w)}n.A=function(w){return fe(this,w).h},n.and=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],E=0;E<m;E++)v[E]=this.i(E)&w.i(E);return new a(v,this.h&w.h)},n.or=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],E=0;E<m;E++)v[E]=this.i(E)|w.i(E);return new a(v,this.h|w.h)},n.xor=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],E=0;E<m;E++)v[E]=this.i(E)^w.i(E);return new a(v,this.h^w.h)};function Be(w){for(var m=w.g.length+1,v=[],E=0;E<m;E++)v[E]=w.i(E)<<1|w.i(E-1)>>>31;return new a(v,w.h)}function we(w,m){var v=m>>5;m%=32;for(var E=w.g.length-v,I=[],P=0;P<E;P++)I[P]=0<m?w.i(P+v)>>>m|w.i(P+v+1)<<32-m:w.i(P+v);return new a(I,w.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Ql=s,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,_t=a}).apply(typeof Va<"u"?Va:typeof self<"u"?self:typeof window<"u"?window:{});var ys=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xl,Vn,Yl,bs,ni,Jl,Zl,eu;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,l,c){return i==Array.prototype||i==Object.prototype||(i[l]=c.value),i};function t(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof ys=="object"&&ys];for(var l=0;l<i.length;++l){var c=i[l];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var s=t(this);function r(i,l){if(l)e:{var c=s;i=i.split(".");for(var f=0;f<i.length-1;f++){var b=i[f];if(!(b in c))break e;c=c[b]}i=i[i.length-1],f=c[i],l=l(f),l!=f&&l!=null&&e(c,i,{configurable:!0,writable:!0,value:l})}}function o(i,l){i instanceof String&&(i+="");var c=0,f=!1,b={next:function(){if(!f&&c<i.length){var V=c++;return{value:l(V,i[V]),done:!1}}return f=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}r("Array.prototype.values",function(i){return i||function(){return o(this,function(l,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function h(i){var l=typeof i;return l=l!="object"?l:i?Array.isArray(i)?"array":l:"null",l=="array"||l=="object"&&typeof i.length=="number"}function d(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function p(i,l,c){return i.call.apply(i.bind,arguments)}function _(i,l,c){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,f),i.apply(l,b)}}return function(){return i.apply(l,arguments)}}function y(i,l,c){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:_,y.apply(null,arguments)}function S(i,l){var c=Array.prototype.slice.call(arguments,1);return function(){var f=c.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function N(i,l){function c(){}c.prototype=l.prototype,i.aa=l.prototype,i.prototype=new c,i.prototype.constructor=i,i.Qb=function(f,b,V){for(var $=Array(arguments.length-2),he=2;he<arguments.length;he++)$[he-2]=arguments[he];return l.prototype[b].apply(f,$)}}function x(i){const l=i.length;if(0<l){const c=Array(l);for(let f=0;f<l;f++)c[f]=i[f];return c}return[]}function M(i,l){for(let c=1;c<arguments.length;c++){const f=arguments[c];if(h(f)){const b=i.length||0,V=f.length||0;i.length=b+V;for(let $=0;$<V;$++)i[b+$]=f[$]}else i.push(f)}}class J{constructor(l,c){this.i=l,this.j=c,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function Q(i){return/^[\s\xa0]*$/.test(i)}function ee(){var i=u.navigator;return i&&(i=i.userAgent)?i:""}function fe(i){return fe[" "](i),i}fe[" "]=function(){};var Be=ee().indexOf("Gecko")!=-1&&!(ee().toLowerCase().indexOf("webkit")!=-1&&ee().indexOf("Edge")==-1)&&!(ee().indexOf("Trident")!=-1||ee().indexOf("MSIE")!=-1)&&ee().indexOf("Edge")==-1;function we(i,l,c){for(const f in i)l.call(c,i[f],f,i)}function w(i,l){for(const c in i)l.call(void 0,i[c],c,i)}function m(i){const l={};for(const c in i)l[c]=i[c];return l}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(i,l){let c,f;for(let b=1;b<arguments.length;b++){f=arguments[b];for(c in f)i[c]=f[c];for(let V=0;V<v.length;V++)c=v[V],Object.prototype.hasOwnProperty.call(f,c)&&(i[c]=f[c])}}function I(i){var l=1;i=i.split(":");const c=[];for(;0<l&&i.length;)c.push(i.shift()),l--;return i.length&&c.push(i.join(":")),c}function P(i){u.setTimeout(()=>{throw i},0)}function g(){var i=fr;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class nt{constructor(){this.h=this.g=null}add(l,c){const f=hn.get();f.set(l,c),this.h?this.h.next=f:this.g=f,this.h=f}}var hn=new J(()=>new bc,i=>i.reset());class bc{constructor(){this.next=this.g=this.h=null}set(l,c){this.h=l,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let dn,fn=!1,fr=new nt,ho=()=>{const i=u.Promise.resolve(void 0);dn=()=>{i.then(Pc)}};var Pc=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(c){P(c)}var l=hn;l.j(i),100>l.h&&(l.h++,i.next=l.g,l.g=i)}fn=!1};function ut(){this.s=this.s,this.C=this.C}ut.prototype.s=!1,ut.prototype.ma=function(){this.s||(this.s=!0,this.N())},ut.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Re(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}Re.prototype.h=function(){this.defaultPrevented=!0};var Sc=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const c=()=>{};u.addEventListener("test",c,l),u.removeEventListener("test",c,l)}catch{}return i}();function pn(i,l){if(Re.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var c=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget){if(Be){e:{try{fe(l.nodeName);var b=!0;break e}catch{}b=!1}b||(l=null)}}else c=="mouseover"?l=i.fromElement:c=="mouseout"&&(l=i.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Vc[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&pn.aa.h.call(this)}}N(pn,Re);var Vc={2:"touch",3:"pen",4:"mouse"};pn.prototype.h=function(){pn.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var es="closure_listenable_"+(1e6*Math.random()|0),Rc=0;function kc(i,l,c,f,b){this.listener=i,this.proxy=null,this.src=l,this.type=c,this.capture=!!f,this.ha=b,this.key=++Rc,this.da=this.fa=!1}function ts(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function ns(i){this.src=i,this.g={},this.h=0}ns.prototype.add=function(i,l,c,f,b){var V=i.toString();i=this.g[V],i||(i=this.g[V]=[],this.h++);var $=mr(i,l,f,b);return-1<$?(l=i[$],c||(l.fa=!1)):(l=new kc(l,this.src,V,!!f,b),l.fa=c,i.push(l)),l};function pr(i,l){var c=l.type;if(c in i.g){var f=i.g[c],b=Array.prototype.indexOf.call(f,l,void 0),V;(V=0<=b)&&Array.prototype.splice.call(f,b,1),V&&(ts(l),i.g[c].length==0&&(delete i.g[c],i.h--))}}function mr(i,l,c,f){for(var b=0;b<i.length;++b){var V=i[b];if(!V.da&&V.listener==l&&V.capture==!!c&&V.ha==f)return b}return-1}var gr="closure_lm_"+(1e6*Math.random()|0),_r={};function fo(i,l,c,f,b){if(Array.isArray(l)){for(var V=0;V<l.length;V++)fo(i,l[V],c,f,b);return null}return c=go(c),i&&i[es]?i.K(l,c,d(f)?!!f.capture:!1,b):Cc(i,l,c,!1,f,b)}function Cc(i,l,c,f,b,V){if(!l)throw Error("Invalid event type");var $=d(b)?!!b.capture:!!b,he=yr(i);if(he||(i[gr]=he=new ns(i)),c=he.add(l,c,f,$,V),c.proxy)return c;if(f=Dc(),c.proxy=f,f.src=i,f.listener=c,i.addEventListener)Sc||(b=$),b===void 0&&(b=!1),i.addEventListener(l.toString(),f,b);else if(i.attachEvent)i.attachEvent(mo(l.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return c}function Dc(){function i(c){return l.call(i.src,i.listener,c)}const l=Nc;return i}function po(i,l,c,f,b){if(Array.isArray(l))for(var V=0;V<l.length;V++)po(i,l[V],c,f,b);else f=d(f)?!!f.capture:!!f,c=go(c),i&&i[es]?(i=i.i,l=String(l).toString(),l in i.g&&(V=i.g[l],c=mr(V,c,f,b),-1<c&&(ts(V[c]),Array.prototype.splice.call(V,c,1),V.length==0&&(delete i.g[l],i.h--)))):i&&(i=yr(i))&&(l=i.g[l.toString()],i=-1,l&&(i=mr(l,c,f,b)),(c=-1<i?l[i]:null)&&vr(c))}function vr(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[es])pr(l.i,i);else{var c=i.type,f=i.proxy;l.removeEventListener?l.removeEventListener(c,f,i.capture):l.detachEvent?l.detachEvent(mo(c),f):l.addListener&&l.removeListener&&l.removeListener(f),(c=yr(l))?(pr(c,i),c.h==0&&(c.src=null,l[gr]=null)):ts(i)}}}function mo(i){return i in _r?_r[i]:_r[i]="on"+i}function Nc(i,l){if(i.da)i=!0;else{l=new pn(l,this);var c=i.listener,f=i.ha||i.src;i.fa&&vr(i),i=c.call(f,l)}return i}function yr(i){return i=i[gr],i instanceof ns?i:null}var Er="__closure_events_fn_"+(1e9*Math.random()>>>0);function go(i){return typeof i=="function"?i:(i[Er]||(i[Er]=function(l){return i.handleEvent(l)}),i[Er])}function ke(){ut.call(this),this.i=new ns(this),this.M=this,this.F=null}N(ke,ut),ke.prototype[es]=!0,ke.prototype.removeEventListener=function(i,l,c,f){po(this,i,l,c,f)};function Oe(i,l){var c,f=i.F;if(f)for(c=[];f;f=f.F)c.push(f);if(i=i.M,f=l.type||l,typeof l=="string")l=new Re(l,i);else if(l instanceof Re)l.target=l.target||i;else{var b=l;l=new Re(f,i),E(l,b)}if(b=!0,c)for(var V=c.length-1;0<=V;V--){var $=l.g=c[V];b=ss($,f,!0,l)&&b}if($=l.g=i,b=ss($,f,!0,l)&&b,b=ss($,f,!1,l)&&b,c)for(V=0;V<c.length;V++)$=l.g=c[V],b=ss($,f,!1,l)&&b}ke.prototype.N=function(){if(ke.aa.N.call(this),this.i){var i=this.i,l;for(l in i.g){for(var c=i.g[l],f=0;f<c.length;f++)ts(c[f]);delete i.g[l],i.h--}}this.F=null},ke.prototype.K=function(i,l,c,f){return this.i.add(String(i),l,!1,c,f)},ke.prototype.L=function(i,l,c,f){return this.i.add(String(i),l,!0,c,f)};function ss(i,l,c,f){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();for(var b=!0,V=0;V<l.length;++V){var $=l[V];if($&&!$.da&&$.capture==c){var he=$.listener,Ae=$.ha||$.src;$.fa&&pr(i.i,$),b=he.call(Ae,f)!==!1&&b}}return b&&!f.defaultPrevented}function _o(i,l,c){if(typeof i=="function")c&&(i=y(i,c));else if(i&&typeof i.handleEvent=="function")i=y(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(i,l||0)}function vo(i){i.g=_o(()=>{i.g=null,i.i&&(i.i=!1,vo(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class Lc extends ut{constructor(l,c){super(),this.m=l,this.l=c,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:vo(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mn(i){ut.call(this),this.h=i,this.g={}}N(mn,ut);var yo=[];function Eo(i){we(i.g,function(l,c){this.g.hasOwnProperty(c)&&vr(l)},i),i.g={}}mn.prototype.N=function(){mn.aa.N.call(this),Eo(this)},mn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Tr=u.JSON.stringify,Mc=u.JSON.parse,Oc=class{stringify(i){return u.JSON.stringify(i,void 0)}parse(i){return u.JSON.parse(i,void 0)}};function Ir(){}Ir.prototype.h=null;function To(i){return i.h||(i.h=i.i())}function Io(){}var gn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function wr(){Re.call(this,"d")}N(wr,Re);function Ar(){Re.call(this,"c")}N(Ar,Re);var Vt={},wo=null;function rs(){return wo=wo||new ke}Vt.La="serverreachability";function Ao(i){Re.call(this,Vt.La,i)}N(Ao,Re);function _n(i){const l=rs();Oe(l,new Ao(l))}Vt.STAT_EVENT="statevent";function bo(i,l){Re.call(this,Vt.STAT_EVENT,i),this.stat=l}N(bo,Re);function $e(i){const l=rs();Oe(l,new bo(l,i))}Vt.Ma="timingevent";function Po(i,l){Re.call(this,Vt.Ma,i),this.size=l}N(Po,Re);function vn(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){i()},l)}function yn(){this.g=!0}yn.prototype.xa=function(){this.g=!1};function $c(i,l,c,f,b,V){i.info(function(){if(i.g)if(V)for(var $="",he=V.split("&"),Ae=0;Ae<he.length;Ae++){var ae=he[Ae].split("=");if(1<ae.length){var Ce=ae[0];ae=ae[1];var De=Ce.split("_");$=2<=De.length&&De[1]=="type"?$+(Ce+"="+ae+"&"):$+(Ce+"=redacted&")}}else $=null;else $=V;return"XMLHTTP REQ ("+f+") [attempt "+b+"]: "+l+`
`+c+`
`+$})}function xc(i,l,c,f,b,V,$){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+b+"]: "+l+`
`+c+`
`+V+" "+$})}function Ut(i,l,c,f){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+Bc(i,c)+(f?" "+f:"")})}function Fc(i,l){i.info(function(){return"TIMEOUT: "+l})}yn.prototype.info=function(){};function Bc(i,l){if(!i.g)return l;if(!l)return null;try{var c=JSON.parse(l);if(c){for(i=0;i<c.length;i++)if(Array.isArray(c[i])){var f=c[i];if(!(2>f.length)){var b=f[1];if(Array.isArray(b)&&!(1>b.length)){var V=b[0];if(V!="noop"&&V!="stop"&&V!="close")for(var $=1;$<b.length;$++)b[$]=""}}}}return Tr(c)}catch{return l}}var is={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},So={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},br;function os(){}N(os,Ir),os.prototype.g=function(){return new XMLHttpRequest},os.prototype.i=function(){return{}},br=new os;function ct(i,l,c,f){this.j=i,this.i=l,this.l=c,this.R=f||1,this.U=new mn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vo}function Vo(){this.i=null,this.g="",this.h=!1}var Ro={},Pr={};function Sr(i,l,c){i.L=1,i.v=cs(st(l)),i.m=c,i.P=!0,ko(i,null)}function ko(i,l){i.F=Date.now(),as(i),i.A=st(i.v);var c=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),qo(c.i,"t",f),i.C=0,c=i.j.J,i.h=new Vo,i.g=la(i.j,c?l:null,!i.m),0<i.O&&(i.M=new Lc(y(i.Y,i,i.g),i.O)),l=i.U,c=i.g,f=i.ca;var b="readystatechange";Array.isArray(b)||(b&&(yo[0]=b.toString()),b=yo);for(var V=0;V<b.length;V++){var $=fo(c,b[V],f||l.handleEvent,!1,l.h||l);if(!$)break;l.g[$.key]=$}l=i.H?m(i.H):{},i.m?(i.u||(i.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,l)):(i.u="GET",i.g.ea(i.A,i.u,null,l)),_n(),$c(i.i,i.u,i.A,i.l,i.R,i.m)}ct.prototype.ca=function(i){i=i.target;const l=this.M;l&&rt(i)==3?l.j():this.Y(i)},ct.prototype.Y=function(i){try{if(i==this.g)e:{const De=rt(this.g);var l=this.g.Ba();const qt=this.g.Z();if(!(3>De)&&(De!=3||this.g&&(this.h.h||this.g.oa()||Yo(this.g)))){this.J||De!=4||l==7||(l==8||0>=qt?_n(3):_n(2)),Vr(this);var c=this.g.Z();this.X=c;t:if(Co(this)){var f=Yo(this.g);i="";var b=f.length,V=rt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Rt(this),En(this);var $="";break t}this.h.i=new u.TextDecoder}for(l=0;l<b;l++)this.h.h=!0,i+=this.h.i.decode(f[l],{stream:!(V&&l==b-1)});f.length=0,this.h.g+=i,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=c==200,xc(this.i,this.u,this.A,this.l,this.R,De,c),this.o){if(this.T&&!this.K){t:{if(this.g){var he,Ae=this.g;if((he=Ae.g?Ae.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Q(he)){var ae=he;break t}}ae=null}if(c=ae)Ut(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Rr(this,c);else{this.o=!1,this.s=3,$e(12),Rt(this),En(this);break e}}if(this.P){c=!0;let ze;for(;!this.J&&this.C<$.length;)if(ze=Uc(this,$),ze==Pr){De==4&&(this.s=4,$e(14),c=!1),Ut(this.i,this.l,null,"[Incomplete Response]");break}else if(ze==Ro){this.s=4,$e(15),Ut(this.i,this.l,$,"[Invalid Chunk]"),c=!1;break}else Ut(this.i,this.l,ze,null),Rr(this,ze);if(Co(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),De!=4||$.length!=0||this.h.h||(this.s=1,$e(16),c=!1),this.o=this.o&&c,!c)Ut(this.i,this.l,$,"[Invalid Chunked Response]"),Rt(this),En(this);else if(0<$.length&&!this.W){this.W=!0;var Ce=this.j;Ce.g==this&&Ce.ba&&!Ce.M&&(Ce.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),Mr(Ce),Ce.M=!0,$e(11))}}else Ut(this.i,this.l,$,null),Rr(this,$);De==4&&Rt(this),this.o&&!this.J&&(De==4?ra(this.j,this):(this.o=!1,as(this)))}else rh(this.g),c==400&&0<$.indexOf("Unknown SID")?(this.s=3,$e(12)):(this.s=0,$e(13)),Rt(this),En(this)}}}catch{}finally{}};function Co(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Uc(i,l){var c=i.C,f=l.indexOf(`
`,c);return f==-1?Pr:(c=Number(l.substring(c,f)),isNaN(c)?Ro:(f+=1,f+c>l.length?Pr:(l=l.slice(f,f+c),i.C=f+c,l)))}ct.prototype.cancel=function(){this.J=!0,Rt(this)};function as(i){i.S=Date.now()+i.I,Do(i,i.I)}function Do(i,l){if(i.B!=null)throw Error("WatchDog timer not null");i.B=vn(y(i.ba,i),l)}function Vr(i){i.B&&(u.clearTimeout(i.B),i.B=null)}ct.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Fc(this.i,this.A),this.L!=2&&(_n(),$e(17)),Rt(this),this.s=2,En(this)):Do(this,this.S-i)};function En(i){i.j.G==0||i.J||ra(i.j,i)}function Rt(i){Vr(i);var l=i.M;l&&typeof l.ma=="function"&&l.ma(),i.M=null,Eo(i.U),i.g&&(l=i.g,i.g=null,l.abort(),l.ma())}function Rr(i,l){try{var c=i.j;if(c.G!=0&&(c.g==i||kr(c.h,i))){if(!i.K&&kr(c.h,i)&&c.G==3){try{var f=c.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var b=f;if(b[0]==0){e:if(!c.u){if(c.g)if(c.g.F+3e3<i.F)gs(c),ps(c);else break e;Lr(c),$e(18)}}else c.za=b[1],0<c.za-c.T&&37500>b[2]&&c.F&&c.v==0&&!c.C&&(c.C=vn(y(c.Za,c),6e3));if(1>=Mo(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else Ct(c,11)}else if((i.K||c.g==i)&&gs(c),!Q(l))for(b=c.Da.g.parse(l),l=0;l<b.length;l++){let ae=b[l];if(c.T=ae[0],ae=ae[1],c.G==2)if(ae[0]=="c"){c.K=ae[1],c.ia=ae[2];const Ce=ae[3];Ce!=null&&(c.la=Ce,c.j.info("VER="+c.la));const De=ae[4];De!=null&&(c.Aa=De,c.j.info("SVER="+c.Aa));const qt=ae[5];qt!=null&&typeof qt=="number"&&0<qt&&(f=1.5*qt,c.L=f,c.j.info("backChannelRequestTimeoutMs_="+f)),f=c;const ze=i.g;if(ze){const vs=ze.g?ze.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vs){var V=f.h;V.g||vs.indexOf("spdy")==-1&&vs.indexOf("quic")==-1&&vs.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Cr(V,V.h),V.h=null))}if(f.D){const Or=ze.g?ze.g.getResponseHeader("X-HTTP-Session-Id"):null;Or&&(f.ya=Or,de(f.I,f.D,Or))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-i.F,c.j.info("Handshake RTT: "+c.R+"ms")),f=c;var $=i;if(f.qa=aa(f,f.J?f.ia:null,f.W),$.K){Oo(f.h,$);var he=$,Ae=f.L;Ae&&(he.I=Ae),he.B&&(Vr(he),as(he)),f.g=$}else na(f);0<c.i.length&&ms(c)}else ae[0]!="stop"&&ae[0]!="close"||Ct(c,7);else c.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?Ct(c,7):Nr(c):ae[0]!="noop"&&c.l&&c.l.ta(ae),c.v=0)}}_n(4)}catch{}}var jc=class{constructor(i,l){this.g=i,this.map=l}};function No(i){this.l=i||10,u.PerformanceNavigationTiming?(i=u.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Lo(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Mo(i){return i.h?1:i.g?i.g.size:0}function kr(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function Cr(i,l){i.g?i.g.add(l):i.h=l}function Oo(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}No.prototype.cancel=function(){if(this.i=$o(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function $o(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const c of i.g.values())l=l.concat(c.D);return l}return x(i.i)}function Hc(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var l=[],c=i.length,f=0;f<c;f++)l.push(i[f]);return l}l=[],c=0;for(f in i)l[c++]=i[f];return l}function qc(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var l=[];i=i.length;for(var c=0;c<i;c++)l.push(c);return l}l=[],c=0;for(const f in i)l[c++]=f;return l}}}function xo(i,l){if(i.forEach&&typeof i.forEach=="function")i.forEach(l,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,l,void 0);else for(var c=qc(i),f=Hc(i),b=f.length,V=0;V<b;V++)l.call(void 0,f[V],c&&c[V],i)}var Fo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zc(i,l){if(i){i=i.split("&");for(var c=0;c<i.length;c++){var f=i[c].indexOf("="),b=null;if(0<=f){var V=i[c].substring(0,f);b=i[c].substring(f+1)}else V=i[c];l(V,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function kt(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof kt){this.h=i.h,ls(this,i.j),this.o=i.o,this.g=i.g,us(this,i.s),this.l=i.l;var l=i.i,c=new wn;c.i=l.i,l.g&&(c.g=new Map(l.g),c.h=l.h),Bo(this,c),this.m=i.m}else i&&(l=String(i).match(Fo))?(this.h=!1,ls(this,l[1]||"",!0),this.o=Tn(l[2]||""),this.g=Tn(l[3]||"",!0),us(this,l[4]),this.l=Tn(l[5]||"",!0),Bo(this,l[6]||"",!0),this.m=Tn(l[7]||"")):(this.h=!1,this.i=new wn(null,this.h))}kt.prototype.toString=function(){var i=[],l=this.j;l&&i.push(In(l,Uo,!0),":");var c=this.g;return(c||l=="file")&&(i.push("//"),(l=this.o)&&i.push(In(l,Uo,!0),"@"),i.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&i.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&i.push("/"),i.push(In(c,c.charAt(0)=="/"?Wc:Kc,!0))),(c=this.i.toString())&&i.push("?",c),(c=this.m)&&i.push("#",In(c,Xc)),i.join("")};function st(i){return new kt(i)}function ls(i,l,c){i.j=c?Tn(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function us(i,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);i.s=l}else i.s=null}function Bo(i,l,c){l instanceof wn?(i.i=l,Yc(i.i,i.h)):(c||(l=In(l,Qc)),i.i=new wn(l,i.h))}function de(i,l,c){i.i.set(l,c)}function cs(i){return de(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Tn(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function In(i,l,c){return typeof i=="string"?(i=encodeURI(i).replace(l,Gc),c&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Gc(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Uo=/[#\/\?@]/g,Kc=/[#\?:]/g,Wc=/[#\?]/g,Qc=/[#\?@]/g,Xc=/#/g;function wn(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function ht(i){i.g||(i.g=new Map,i.h=0,i.i&&zc(i.i,function(l,c){i.add(decodeURIComponent(l.replace(/\+/g," ")),c)}))}n=wn.prototype,n.add=function(i,l){ht(this),this.i=null,i=jt(this,i);var c=this.g.get(i);return c||this.g.set(i,c=[]),c.push(l),this.h+=1,this};function jo(i,l){ht(i),l=jt(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function Ho(i,l){return ht(i),l=jt(i,l),i.g.has(l)}n.forEach=function(i,l){ht(this),this.g.forEach(function(c,f){c.forEach(function(b){i.call(l,b,f,this)},this)},this)},n.na=function(){ht(this);const i=Array.from(this.g.values()),l=Array.from(this.g.keys()),c=[];for(let f=0;f<l.length;f++){const b=i[f];for(let V=0;V<b.length;V++)c.push(l[f])}return c},n.V=function(i){ht(this);let l=[];if(typeof i=="string")Ho(this,i)&&(l=l.concat(this.g.get(jt(this,i))));else{i=Array.from(this.g.values());for(let c=0;c<i.length;c++)l=l.concat(i[c])}return l},n.set=function(i,l){return ht(this),this.i=null,i=jt(this,i),Ho(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},n.get=function(i,l){return i?(i=this.V(i),0<i.length?String(i[0]):l):l};function qo(i,l,c){jo(i,l),0<c.length&&(i.i=null,i.g.set(jt(i,l),x(c)),i.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(var c=0;c<l.length;c++){var f=l[c];const V=encodeURIComponent(String(f)),$=this.V(f);for(f=0;f<$.length;f++){var b=V;$[f]!==""&&(b+="="+encodeURIComponent(String($[f]))),i.push(b)}}return this.i=i.join("&")};function jt(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function Yc(i,l){l&&!i.j&&(ht(i),i.i=null,i.g.forEach(function(c,f){var b=f.toLowerCase();f!=b&&(jo(this,f),qo(this,b,c))},i)),i.j=l}function Jc(i,l){const c=new yn;if(u.Image){const f=new Image;f.onload=S(dt,c,"TestLoadImage: loaded",!0,l,f),f.onerror=S(dt,c,"TestLoadImage: error",!1,l,f),f.onabort=S(dt,c,"TestLoadImage: abort",!1,l,f),f.ontimeout=S(dt,c,"TestLoadImage: timeout",!1,l,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else l(!1)}function Zc(i,l){const c=new yn,f=new AbortController,b=setTimeout(()=>{f.abort(),dt(c,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:f.signal}).then(V=>{clearTimeout(b),V.ok?dt(c,"TestPingServer: ok",!0,l):dt(c,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(b),dt(c,"TestPingServer: error",!1,l)})}function dt(i,l,c,f,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),f(c)}catch{}}function eh(){this.g=new Oc}function th(i,l,c){const f=c||"";try{xo(i,function(b,V){let $=b;d(b)&&($=Tr(b)),l.push(f+V+"="+encodeURIComponent($))})}catch(b){throw l.push(f+"type="+encodeURIComponent("_badmap")),b}}function hs(i){this.l=i.Ub||null,this.j=i.eb||!1}N(hs,Ir),hs.prototype.g=function(){return new ds(this.l,this.j)},hs.prototype.i=function(i){return function(){return i}}({});function ds(i,l){ke.call(this),this.D=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(ds,ke),n=ds.prototype,n.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=l,this.readyState=1,bn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(l.body=i),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,An(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,bn(this)),this.g&&(this.readyState=3,bn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;zo(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function zo(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?An(this):bn(this),this.readyState==3&&zo(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,An(this))},n.Qa=function(i){this.g&&(this.response=i,An(this))},n.ga=function(){this.g&&An(this)};function An(i){i.readyState=4,i.l=null,i.j=null,i.v=null,bn(i)}n.setRequestHeader=function(i,l){this.u.append(i,l)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var c=l.next();!c.done;)c=c.value,i.push(c[0]+": "+c[1]),c=l.next();return i.join(`\r
`)};function bn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(ds.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Go(i){let l="";return we(i,function(c,f){l+=f,l+=":",l+=c,l+=`\r
`}),l}function Dr(i,l,c){e:{for(f in c){var f=!1;break e}f=!0}f||(c=Go(c),typeof i=="string"?c!=null&&encodeURIComponent(String(c)):de(i,l,c))}function me(i){ke.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(me,ke);var nh=/^https?$/i,sh=["POST","PUT"];n=me.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,l,c,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():br.g(),this.v=this.o?To(this.o):To(br),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(V){Ko(this,V);return}if(i=c||"",c=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var b in f)c.set(b,f[b]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const V of f.keys())c.set(V,f.get(V));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(c.keys()).find(V=>V.toLowerCase()=="content-type"),b=u.FormData&&i instanceof u.FormData,!(0<=Array.prototype.indexOf.call(sh,l,void 0))||f||b||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,$]of c)this.g.setRequestHeader(V,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Xo(this),this.u=!0,this.g.send(i),this.u=!1}catch(V){Ko(this,V)}};function Ko(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.m=5,Wo(i),fs(i)}function Wo(i){i.A||(i.A=!0,Oe(i,"complete"),Oe(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Oe(this,"complete"),Oe(this,"abort"),fs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fs(this,!0)),me.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Qo(this):this.bb())},n.bb=function(){Qo(this)};function Qo(i){if(i.h&&typeof a<"u"&&(!i.v[1]||rt(i)!=4||i.Z()!=2)){if(i.u&&rt(i)==4)_o(i.Ea,0,i);else if(Oe(i,"readystatechange"),rt(i)==4){i.h=!1;try{const $=i.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var c;if(!(c=l)){var f;if(f=$===0){var b=String(i.D).match(Fo)[1]||null;!b&&u.self&&u.self.location&&(b=u.self.location.protocol.slice(0,-1)),f=!nh.test(b?b.toLowerCase():"")}c=f}if(c)Oe(i,"complete"),Oe(i,"success");else{i.m=6;try{var V=2<rt(i)?i.g.statusText:""}catch{V=""}i.l=V+" ["+i.Z()+"]",Wo(i)}}finally{fs(i)}}}}function fs(i,l){if(i.g){Xo(i);const c=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,l||Oe(i,"ready");try{c.onreadystatechange=f}catch{}}}function Xo(i){i.I&&(u.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function rt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<rt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),Mc(l)}};function Yo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function rh(i){const l={};i=(i.g&&2<=rt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(Q(i[f]))continue;var c=I(i[f]);const b=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const V=l[b]||[];l[b]=V,V.push(c)}w(l,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Pn(i,l,c){return c&&c.internalChannelParams&&c.internalChannelParams[i]||l}function Jo(i){this.Aa=0,this.i=[],this.j=new yn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Pn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Pn("baseRetryDelayMs",5e3,i),this.cb=Pn("retryDelaySeedMs",1e4,i),this.Wa=Pn("forwardChannelMaxRetries",2,i),this.wa=Pn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new No(i&&i.concurrentRequestLimit),this.Da=new eh,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Jo.prototype,n.la=8,n.G=1,n.connect=function(i,l,c,f){$e(0),this.W=i,this.H=l||{},c&&f!==void 0&&(this.H.OSID=c,this.H.OAID=f),this.F=this.X,this.I=aa(this,null,this.W),ms(this)};function Nr(i){if(Zo(i),i.G==3){var l=i.U++,c=st(i.I);if(de(c,"SID",i.K),de(c,"RID",l),de(c,"TYPE","terminate"),Sn(i,c),l=new ct(i,i.j,l),l.L=2,l.v=cs(st(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=l.v,c=!0),c||(l.g=la(l.j,null),l.g.ea(l.v)),l.F=Date.now(),as(l)}oa(i)}function ps(i){i.g&&(Mr(i),i.g.cancel(),i.g=null)}function Zo(i){ps(i),i.u&&(u.clearTimeout(i.u),i.u=null),gs(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&u.clearTimeout(i.s),i.s=null)}function ms(i){if(!Lo(i.h)&&!i.s){i.s=!0;var l=i.Ga;dn||ho(),fn||(dn(),fn=!0),fr.add(l,i),i.B=0}}function ih(i,l){return Mo(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=l.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=vn(y(i.Ga,i,l),ia(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const b=new ct(this,this.j,i);let V=this.o;if(this.S&&(V?(V=m(V),E(V,this.S)):V=this.S),this.m!==null||this.O||(b.H=V,V=null),this.P)e:{for(var l=0,c=0;c<this.i.length;c++){t:{var f=this.i[c];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=c;break e}if(l===4096||c===this.i.length-1){l=c+1;break e}}l=1e3}else l=1e3;l=ta(this,b,l),c=st(this.I),de(c,"RID",i),de(c,"CVER",22),this.D&&de(c,"X-HTTP-Session-Id",this.D),Sn(this,c),V&&(this.O?l="headers="+encodeURIComponent(String(Go(V)))+"&"+l:this.m&&Dr(c,this.m,V)),Cr(this.h,b),this.Ua&&de(c,"TYPE","init"),this.P?(de(c,"$req",l),de(c,"SID","null"),b.T=!0,Sr(b,c,null)):Sr(b,c,l),this.G=2}}else this.G==3&&(i?ea(this,i):this.i.length==0||Lo(this.h)||ea(this))};function ea(i,l){var c;l?c=l.l:c=i.U++;const f=st(i.I);de(f,"SID",i.K),de(f,"RID",c),de(f,"AID",i.T),Sn(i,f),i.m&&i.o&&Dr(f,i.m,i.o),c=new ct(i,i.j,c,i.B+1),i.m===null&&(c.H=i.o),l&&(i.i=l.D.concat(i.i)),l=ta(i,c,1e3),c.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Cr(i.h,c),Sr(c,f,l)}function Sn(i,l){i.H&&we(i.H,function(c,f){de(l,f,c)}),i.l&&xo({},function(c,f){de(l,f,c)})}function ta(i,l,c){c=Math.min(i.i.length,c);var f=i.l?y(i.l.Na,i.l,i):null;e:{var b=i.i;let V=-1;for(;;){const $=["count="+c];V==-1?0<c?(V=b[0].g,$.push("ofs="+V)):V=0:$.push("ofs="+V);let he=!0;for(let Ae=0;Ae<c;Ae++){let ae=b[Ae].g;const Ce=b[Ae].map;if(ae-=V,0>ae)V=Math.max(0,b[Ae].g-100),he=!1;else try{th(Ce,$,"req"+ae+"_")}catch{f&&f(Ce)}}if(he){f=$.join("&");break e}}}return i=i.i.splice(0,c),l.D=i,f}function na(i){if(!i.g&&!i.u){i.Y=1;var l=i.Fa;dn||ho(),fn||(dn(),fn=!0),fr.add(l,i),i.v=0}}function Lr(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=vn(y(i.Fa,i),ia(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,sa(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=vn(y(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,$e(10),ps(this),sa(this))};function Mr(i){i.A!=null&&(u.clearTimeout(i.A),i.A=null)}function sa(i){i.g=new ct(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var l=st(i.qa);de(l,"RID","rpc"),de(l,"SID",i.K),de(l,"AID",i.T),de(l,"CI",i.F?"0":"1"),!i.F&&i.ja&&de(l,"TO",i.ja),de(l,"TYPE","xmlhttp"),Sn(i,l),i.m&&i.o&&Dr(l,i.m,i.o),i.L&&(i.g.I=i.L);var c=i.g;i=i.ia,c.L=1,c.v=cs(st(l)),c.m=null,c.P=!0,ko(c,i)}n.Za=function(){this.C!=null&&(this.C=null,ps(this),Lr(this),$e(19))};function gs(i){i.C!=null&&(u.clearTimeout(i.C),i.C=null)}function ra(i,l){var c=null;if(i.g==l){gs(i),Mr(i),i.g=null;var f=2}else if(kr(i.h,l))c=l.D,Oo(i.h,l),f=1;else return;if(i.G!=0){if(l.o)if(f==1){c=l.m?l.m.length:0,l=Date.now()-l.F;var b=i.B;f=rs(),Oe(f,new Po(f,c)),ms(i)}else na(i);else if(b=l.s,b==3||b==0&&0<l.X||!(f==1&&ih(i,l)||f==2&&Lr(i)))switch(c&&0<c.length&&(l=i.h,l.i=l.i.concat(c)),b){case 1:Ct(i,5);break;case 4:Ct(i,10);break;case 3:Ct(i,6);break;default:Ct(i,2)}}}function ia(i,l){let c=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(c*=2),c*l}function Ct(i,l){if(i.j.info("Error code "+l),l==2){var c=y(i.fb,i),f=i.Xa;const b=!f;f=new kt(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||ls(f,"https"),cs(f),b?Jc(f.toString(),c):Zc(f.toString(),c)}else $e(2);i.G=0,i.l&&i.l.sa(l),oa(i),Zo(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),$e(2)):(this.j.info("Failed to ping google.com"),$e(1))};function oa(i){if(i.G=0,i.ka=[],i.l){const l=$o(i.h);(l.length!=0||i.i.length!=0)&&(M(i.ka,l),M(i.ka,i.i),i.h.i.length=0,x(i.i),i.i.length=0),i.l.ra()}}function aa(i,l,c){var f=c instanceof kt?st(c):new kt(c);if(f.g!="")l&&(f.g=l+"."+f.g),us(f,f.s);else{var b=u.location;f=b.protocol,l=l?l+"."+b.hostname:b.hostname,b=+b.port;var V=new kt(null);f&&ls(V,f),l&&(V.g=l),b&&us(V,b),c&&(V.l=c),f=V}return c=i.D,l=i.ya,c&&l&&de(f,c,l),de(f,"VER",i.la),Sn(i,f),f}function la(i,l,c){if(l&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Ca&&!i.pa?new me(new hs({eb:c})):new me(i.pa),l.Ha(i.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ua(){}n=ua.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function _s(){}_s.prototype.g=function(i,l){return new Ue(i,l)};function Ue(i,l){ke.call(this),this.g=new Jo(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(i?i["X-WebChannel-Client-Profile"]=l.va:i={"X-WebChannel-Client-Profile":l.va}),this.g.S=i,(i=l&&l.Sb)&&!Q(i)&&(this.g.m=i),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!Q(l)&&(this.g.D=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new Ht(this)}N(Ue,ke),Ue.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ue.prototype.close=function(){Nr(this.g)},Ue.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var c={};c.__data__=i,i=c}else this.u&&(c={},c.__data__=Tr(i),i=c);l.i.push(new jc(l.Ya++,i)),l.G==3&&ms(l)},Ue.prototype.N=function(){this.g.l=null,delete this.j,Nr(this.g),delete this.g,Ue.aa.N.call(this)};function ca(i){wr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){e:{for(const c in l){i=c;break e}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}N(ca,wr);function ha(){Ar.call(this),this.status=1}N(ha,Ar);function Ht(i){this.g=i}N(Ht,ua),Ht.prototype.ua=function(){Oe(this.g,"a")},Ht.prototype.ta=function(i){Oe(this.g,new ca(i))},Ht.prototype.sa=function(i){Oe(this.g,new ha)},Ht.prototype.ra=function(){Oe(this.g,"b")},_s.prototype.createWebChannel=_s.prototype.g,Ue.prototype.send=Ue.prototype.o,Ue.prototype.open=Ue.prototype.m,Ue.prototype.close=Ue.prototype.close,eu=function(){return new _s},Zl=function(){return rs()},Jl=Vt,ni={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},is.NO_ERROR=0,is.TIMEOUT=8,is.HTTP_ERROR=6,bs=is,So.COMPLETE="complete",Yl=So,Io.EventType=gn,gn.OPEN="a",gn.CLOSE="b",gn.ERROR="c",gn.MESSAGE="d",ke.prototype.listen=ke.prototype.K,Vn=Io,me.prototype.listenOnce=me.prototype.L,me.prototype.getLastError=me.prototype.Ka,me.prototype.getLastErrorCode=me.prototype.Ba,me.prototype.getStatus=me.prototype.Z,me.prototype.getResponseJson=me.prototype.Oa,me.prototype.getResponseText=me.prototype.oa,me.prototype.send=me.prototype.ea,me.prototype.setWithCredentials=me.prototype.Ha,Xl=me}).apply(typeof ys<"u"?ys:typeof self<"u"?self:typeof window<"u"?window:{});const Ra="@firebase/firestore",ka="4.7.17";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Le.UNAUTHENTICATED=new Le(null),Le.GOOGLE_CREDENTIALS=new Le("google-credentials-uid"),Le.FIRST_PARTY=new Le("first-party-uid"),Le.MOCK_USER=new Le("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let an="11.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=new Hl("@firebase/firestore");function zt(){return Ot.logLevel}function F(n,...e){if(Ot.logLevel<=oe.DEBUG){const t=e.map(Di);Ot.debug(`Firestore (${an}): ${n}`,...t)}}function ot(n,...e){if(Ot.logLevel<=oe.ERROR){const t=e.map(Di);Ot.error(`Firestore (${an}): ${n}`,...t)}}function Jt(n,...e){if(Ot.logLevel<=oe.WARN){const t=e.map(Di);Ot.warn(`Firestore (${an}): ${n}`,...t)}}function Di(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,tu(n,s,t)}function tu(n,e,t){let s=`FIRESTORE (${an}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw ot(s),new Error(s)}function ce(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||tu(e,r,s)}function Y(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends on{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class W_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Le.UNAUTHENTICATED))}shutdown(){}}class Q_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class X_{constructor(e){this.t=e,this.currentUser=Le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ce(this.o===void 0,42304);let s=this.i;const r=h=>this.i!==s?(s=this.i,t(h)):Promise.resolve();let o=new vt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new vt,e.enqueueRetryable(()=>r(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await r(this.currentUser)})},u=h=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new vt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ce(typeof s.accessToken=="string",31837,{l:s}),new nu(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string",2055,{h:e}),new Le(e)}}class Y_{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class J_{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new Y_(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ca{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Z_{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,N_(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ce(this.o===void 0,3512);const s=o=>{o.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,F("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>s(o))};const r=o=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>r(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?r(o):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ca(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ce(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ca(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ev(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=ev(40);for(let o=0;o<r.length;++o)s.length<20&&r[o]<t&&(s+=e.charAt(r[o]%62))}return s}}function te(n,e){return n<e?-1:n>e?1:0}function si(n,e){let t=0;for(;t<n.length&&t<e.length;){const s=n.codePointAt(t),r=e.codePointAt(t);if(s!==r){if(s<128&&r<128)return te(s,r);{const o=su(),a=tv(o.encode(Da(n,t)),o.encode(Da(e,t)));return a!==0?a:te(s,r)}}t+=s>65535?2:1}return te(n.length,e.length)}function Da(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function tv(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return te(n[t],e[t]);return te(n.length,e.length)}function Zt(n,e,t){return n.length===e.length&&n.every((s,r)=>t(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na=-62135596800,La=1e6;class Ee{static now(){return Ee.fromMillis(Date.now())}static fromDate(e){return Ee.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*La);return new Ee(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new z(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new z(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Na)throw new z(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/La}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Na;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{static fromTimestamp(e){return new X(e)}static min(){return new X(new Ee(0,0))}static max(){return new X(new Ee(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma="__name__";class We{constructor(e,t,s){t===void 0?t=0:t>e.length&&W(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&W(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return We.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof We?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const o=We.compareSegments(e.get(r),t.get(r));if(o!==0)return o}return te(e.length,t.length)}static compareSegments(e,t){const s=We.isNumericId(e),r=We.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?We.extractNumericId(e).compare(We.extractNumericId(t)):si(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return _t.fromString(e.substring(4,e.length-2))}}class ge extends We{construct(e,t,s){return new ge(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new z(O.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(r=>r.length>0))}return new ge(t)}static emptyPath(){return new ge([])}}const nv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pe extends We{construct(e,t,s){return new Pe(e,t,s)}static isValidIdentifier(e){return nv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ma}static keyField(){return new Pe([Ma])}static fromServerFormat(e){const t=[];let s="",r=0;const o=()=>{if(s.length===0)throw new z(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let a=!1;for(;r<e.length;){const u=e[r];if(u==="\\"){if(r+1===e.length)throw new z(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[r+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new z(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=h,r+=2}else u==="`"?(a=!a,r++):u!=="."||a?(s+=u,r++):(o(),r++)}if(o(),a)throw new z(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pe(t)}static emptyPath(){return new Pe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(ge.fromString(e))}static fromName(e){return new G(ge.fromString(e).popFirst(5))}static empty(){return new G(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new ge(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=-1;function sv(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=X.fromTimestamp(s===1e9?new Ee(t+1,0):new Ee(t,s));return new yt(r,G.empty(),e)}function rv(n){return new yt(n.readTime,n.key,Fn)}class yt{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new yt(X.min(),G.empty(),Fn)}static max(){return new yt(X.max(),G.empty(),Fn)}}function iv(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=G.comparator(n.documentKey,e.documentKey),t!==0?t:te(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class av{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ln(n){if(n.code!==O.FAILED_PRECONDITION||n.message!==ov)throw n;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&W(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D((s,r)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(s,r)},this.catchCallback=o=>{this.wrapFailure(t,o).next(s,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):D.reject(t)}static resolve(e){return new D((t,s)=>{t(e)})}static reject(e){return new D((t,s)=>{s(e)})}static waitFor(e){return new D((t,s)=>{let r=0,o=0,a=!1;e.forEach(u=>{++r,u.next(()=>{++o,a&&o===r&&t()},h=>s(h))}),a=!0,o===r&&t()})}static or(e){let t=D.resolve(!1);for(const s of e)t=t.next(r=>r?D.resolve(r):s());return t}static forEach(e,t){const s=[];return e.forEach((r,o)=>{s.push(t.call(this,r,o))}),this.waitFor(s)}static mapArray(e,t){return new D((s,r)=>{const o=e.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const d=h;t(e[d]).next(p=>{a[d]=p,++u,u===o&&s(a)},p=>r(p))}})}static doWhile(e,t){return new D((s,r)=>{const o=()=>{e()===!0?t().next(()=>{o()},r):s()};o()})}}function lv(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function un(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ue(s),this.ce=s=>t.writeSequenceNumber(s))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Xs.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni=-1;function Ys(n){return n==null}function Ms(n){return n===0&&1/n==-1/0}function uv(n){return typeof n=="number"&&Number.isInteger(n)&&!Ms(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu="";function cv(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Oa(e)),e=hv(n.get(t),e);return Oa(e)}function hv(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const o=n.charAt(r);switch(o){case"\0":t+="";break;case iu:t+="";break;default:t+=o}}return t}function Oa(n){return n+iu+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Pt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function ou(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,t){this.comparator=e,this.root=t||be.EMPTY}insert(e,t){return new pe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,be.BLACK,null,null))}remove(e){return new pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,be.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Es(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Es(this.root,e,this.comparator,!1)}getReverseIterator(){return new Es(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Es(this.root,e,this.comparator,!0)}}class Es{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?s(e.key,t):1,t&&r&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class be{constructor(e,t,s,r,o){this.key=e,this.value=t,this.color=s??be.RED,this.left=r??be.EMPTY,this.right=o??be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,o){return new be(e??this.key,t??this.value,s??this.color,r??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const o=s(e,r.key);return r=o<0?r.copy(null,null,null,r.left.insert(e,t,s),null):o===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return be.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw W(43730,{key:this.key,value:this.value});if(this.right.isRed())throw W(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw W(27949);return e+(this.isRed()?0:1)}}be.EMPTY=null,be.RED=!0,be.BLACK=!1;be.EMPTY=new class{constructor(){this.size=0}get key(){throw W(57766)}get value(){throw W(16141)}get color(){throw W(16727)}get left(){throw W(29726)}get right(){throw W(36894)}copy(e,t,s,r,o){return this}insert(e,t,s){return new be(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.comparator=e,this.data=new pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new xa(this.data.getIterator())}getIteratorFrom(e){return new xa(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Te)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,o=s.getNext().key;if(this.comparator(r,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Te(this.comparator);return t.data=e,t}}class xa{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.fields=e,e.sort(Pe.comparator)}static empty(){return new je([])}unionWith(e){let t=new Te(Pe.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new je(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Zt(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new au("Invalid base64 string: "+o):o}}(e);return new Ve(t)}static fromUint8Array(e){const t=function(r){let o="";for(let a=0;a<r.length;++a)o+=String.fromCharCode(r[a]);return o}(e);return new Ve(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ve.EMPTY_BYTE_STRING=new Ve("");const dv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Et(n){if(ce(!!n,39018),typeof n=="string"){let e=0;const t=dv.exec(n);if(ce(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:_e(n.seconds),nanos:_e(n.nanos)}}function _e(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Tt(n){return typeof n=="string"?Ve.fromBase64String(n):Ve.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu="server_timestamp",uu="__type__",cu="__previous_value__",hu="__local_write_time__";function Li(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[uu])===null||t===void 0?void 0:t.stringValue)===lu}function Js(n){const e=n.mapValue.fields[cu];return Li(e)?Js(e):e}function Bn(n){const e=Et(n.mapValue.fields[hu].timestampValue);return new Ee(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e,t,s,r,o,a,u,h,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=p}}const Os="(default)";class Un{constructor(e,t){this.projectId=e,this.database=t||Os}static empty(){return new Un("","")}get isDefaultDatabase(){return this.database===Os}isEqual(e){return e instanceof Un&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du="__type__",pv="__max__",Ts={mapValue:{}},fu="__vector__",$s="value";function It(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Li(n)?4:gv(n)?9007199254740991:mv(n)?10:11:W(28295,{value:n})}function et(n,e){if(n===e)return!0;const t=It(n);if(t!==It(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Bn(n).isEqual(Bn(e));case 3:return function(r,o){if(typeof r.timestampValue=="string"&&typeof o.timestampValue=="string"&&r.timestampValue.length===o.timestampValue.length)return r.timestampValue===o.timestampValue;const a=Et(r.timestampValue),u=Et(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,o){return Tt(r.bytesValue).isEqual(Tt(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,o){return _e(r.geoPointValue.latitude)===_e(o.geoPointValue.latitude)&&_e(r.geoPointValue.longitude)===_e(o.geoPointValue.longitude)}(n,e);case 2:return function(r,o){if("integerValue"in r&&"integerValue"in o)return _e(r.integerValue)===_e(o.integerValue);if("doubleValue"in r&&"doubleValue"in o){const a=_e(r.doubleValue),u=_e(o.doubleValue);return a===u?Ms(a)===Ms(u):isNaN(a)&&isNaN(u)}return!1}(n,e);case 9:return Zt(n.arrayValue.values||[],e.arrayValue.values||[],et);case 10:case 11:return function(r,o){const a=r.mapValue.fields||{},u=o.mapValue.fields||{};if($a(a)!==$a(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!et(a[h],u[h])))return!1;return!0}(n,e);default:return W(52216,{left:n})}}function jn(n,e){return(n.values||[]).find(t=>et(t,e))!==void 0}function en(n,e){if(n===e)return 0;const t=It(n),s=It(e);if(t!==s)return te(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return te(n.booleanValue,e.booleanValue);case 2:return function(o,a){const u=_e(o.integerValue||o.doubleValue),h=_e(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,e);case 3:return Fa(n.timestampValue,e.timestampValue);case 4:return Fa(Bn(n),Bn(e));case 5:return si(n.stringValue,e.stringValue);case 6:return function(o,a){const u=Tt(o),h=Tt(a);return u.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){const p=te(u[d],h[d]);if(p!==0)return p}return te(u.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const u=te(_e(o.latitude),_e(a.latitude));return u!==0?u:te(_e(o.longitude),_e(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Ba(n.arrayValue,e.arrayValue);case 10:return function(o,a){var u,h,d,p;const _=o.fields||{},y=a.fields||{},S=(u=_[$s])===null||u===void 0?void 0:u.arrayValue,N=(h=y[$s])===null||h===void 0?void 0:h.arrayValue,x=te(((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0,((p=N==null?void 0:N.values)===null||p===void 0?void 0:p.length)||0);return x!==0?x:Ba(S,N)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===Ts.mapValue&&a===Ts.mapValue)return 0;if(o===Ts.mapValue)return 1;if(a===Ts.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),d=a.fields||{},p=Object.keys(d);h.sort(),p.sort();for(let _=0;_<h.length&&_<p.length;++_){const y=si(h[_],p[_]);if(y!==0)return y;const S=en(u[h[_]],d[p[_]]);if(S!==0)return S}return te(h.length,p.length)}(n.mapValue,e.mapValue);default:throw W(23264,{Pe:t})}}function Fa(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return te(n,e);const t=Et(n),s=Et(e),r=te(t.seconds,s.seconds);return r!==0?r:te(t.nanos,s.nanos)}function Ba(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const o=en(t[r],s[r]);if(o)return o}return te(t.length,s.length)}function tn(n){return ri(n)}function ri(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=Et(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Tt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return G.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",r=!0;for(const o of t.values||[])r?r=!1:s+=",",s+=ri(o);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${ri(t.fields[a])}`;return r+"}"}(n.mapValue):W(61005,{value:n})}function Ps(n){switch(It(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Js(n);return e?16+Ps(e):16;case 5:return 2*n.stringValue.length;case 6:return Tt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((r,o)=>r+Ps(o),0)}(n.arrayValue);case 10:case 11:return function(s){let r=0;return Pt(s.fields,(o,a)=>{r+=o.length+Ps(a)}),r}(n.mapValue);default:throw W(13486,{value:n})}}function ii(n){return!!n&&"integerValue"in n}function Mi(n){return!!n&&"arrayValue"in n}function Ua(n){return!!n&&"nullValue"in n}function ja(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ss(n){return!!n&&"mapValue"in n}function mv(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[du])===null||t===void 0?void 0:t.stringValue)===fu}function Nn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Pt(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Nn(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Nn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function gv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===pv}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.value=e}static empty(){return new Fe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Ss(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Nn(t)}setAll(e){let t=Pe.emptyPath(),s={},r=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){const h=this.getFieldsMap(t);this.applyChanges(h,s,r),s={},r=[],t=u.popLast()}a?s[u.lastSegment()]=Nn(a):r.push(u.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,s,r)}delete(e){const t=this.field(e.popLast());Ss(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return et(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];Ss(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){Pt(t,(r,o)=>e[r]=o);for(const r of s)delete e[r]}clone(){return new Fe(Nn(this.value))}}function pu(n){const e=[];return Pt(n.fields,(t,s)=>{const r=new Pe([t]);if(Ss(s)){const o=pu(s.mapValue).fields;if(o.length===0)e.push(r);else for(const a of o)e.push(r.child(a))}else e.push(r)}),new je(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,t,s,r,o,a,u){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(e){return new Me(e,0,X.min(),X.min(),X.min(),Fe.empty(),0)}static newFoundDocument(e,t,s,r){return new Me(e,1,t,X.min(),s,r,0)}static newNoDocument(e,t){return new Me(e,2,t,X.min(),X.min(),Fe.empty(),0)}static newUnknownDocument(e,t){return new Me(e,3,t,X.min(),X.min(),Fe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Fe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Fe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Me&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Me(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,t){this.position=e,this.inclusive=t}}function Ha(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const o=e[r],a=n.position[r];if(o.field.isKeyField()?s=G.comparator(G.fromName(a.referenceValue),t.key):s=en(a,t.data.field(o.field)),o.dir==="desc"&&(s*=-1),s!==0)break}return s}function qa(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!et(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,t="asc"){this.field=e,this.dir=t}}function _v(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{}class ye extends mu{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new yv(e,t,s):t==="array-contains"?new Iv(e,s):t==="in"?new wv(e,s):t==="not-in"?new Av(e,s):t==="array-contains-any"?new bv(e,s):new ye(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new Ev(e,s):new Tv(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(en(t,this.value)):t!==null&&It(this.value)===It(t)&&this.matchesComparison(en(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tt extends mu{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new tt(e,t)}matches(e){return gu(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function gu(n){return n.op==="and"}function _u(n){return vv(n)&&gu(n)}function vv(n){for(const e of n.filters)if(e instanceof tt)return!1;return!0}function oi(n){if(n instanceof ye)return n.field.canonicalString()+n.op.toString()+tn(n.value);if(_u(n))return n.filters.map(e=>oi(e)).join(",");{const e=n.filters.map(t=>oi(t)).join(",");return`${n.op}(${e})`}}function vu(n,e){return n instanceof ye?function(s,r){return r instanceof ye&&s.op===r.op&&s.field.isEqual(r.field)&&et(s.value,r.value)}(n,e):n instanceof tt?function(s,r){return r instanceof tt&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((o,a,u)=>o&&vu(a,r.filters[u]),!0):!1}(n,e):void W(19439)}function yu(n){return n instanceof ye?function(t){return`${t.field.canonicalString()} ${t.op} ${tn(t.value)}`}(n):n instanceof tt?function(t){return t.op.toString()+" {"+t.getFilters().map(yu).join(" ,")+"}"}(n):"Filter"}class yv extends ye{constructor(e,t,s){super(e,t,s),this.key=G.fromName(s.referenceValue)}matches(e){const t=G.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ev extends ye{constructor(e,t){super(e,"in",t),this.keys=Eu("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Tv extends ye{constructor(e,t){super(e,"not-in",t),this.keys=Eu("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Eu(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>G.fromName(s.referenceValue))}class Iv extends ye{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Mi(t)&&jn(t.arrayValue,this.value)}}class wv extends ye{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&jn(this.value.arrayValue,t)}}class Av extends ye{constructor(e,t){super(e,"not-in",t)}matches(e){if(jn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!jn(this.value.arrayValue,t)}}class bv extends ye{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Mi(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>jn(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e,t=null,s=[],r=[],o=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=o,this.startAt=a,this.endAt=u,this.Ie=null}}function za(n,e=null,t=[],s=[],r=null,o=null,a=null){return new Pv(n,e,t,s,r,o,a)}function Oi(n){const e=Y(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>oi(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(o){return o.field.canonicalString()+o.dir}(s)).join(","),Ys(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>tn(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>tn(s)).join(",")),e.Ie=t}return e.Ie}function $i(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!_v(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!vu(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!qa(n.startAt,e.startAt)&&qa(n.endAt,e.endAt)}function ai(n){return G.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,t=null,s=[],r=[],o=null,a="F",u=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function Sv(n,e,t,s,r,o,a,u){return new Zs(n,e,t,s,r,o,a,u)}function xi(n){return new Zs(n)}function Ga(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Vv(n){return n.collectionGroup!==null}function Ln(n){const e=Y(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ee.push(o),t.add(o.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new Te(Pe.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ee.push(new Fs(o,s))}),t.has(Pe.keyField().canonicalString())||e.Ee.push(new Fs(Pe.keyField(),s))}return e.Ee}function Ye(n){const e=Y(n);return e.de||(e.de=Rv(e,Ln(n))),e.de}function Rv(n,e){if(n.limitType==="F")return za(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(r=>{const o=r.dir==="desc"?"asc":"desc";return new Fs(r.field,o)});const t=n.endAt?new xs(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new xs(n.startAt.position,n.startAt.inclusive):null;return za(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function li(n,e,t){return new Zs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function er(n,e){return $i(Ye(n),Ye(e))&&n.limitType===e.limitType}function Tu(n){return`${Oi(Ye(n))}|lt:${n.limitType}`}function Gt(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(r=>yu(r)).join(", ")}]`),Ys(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(r=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(r)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(r=>tn(r)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(r=>tn(r)).join(",")),`Target(${s})`}(Ye(n))}; limitType=${n.limitType})`}function tr(n,e){return e.isFoundDocument()&&function(s,r){const o=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(o):G.isDocumentKey(s.path)?s.path.isEqual(o):s.path.isImmediateParentOf(o)}(n,e)&&function(s,r){for(const o of Ln(s))if(!o.field.isKeyField()&&r.data.field(o.field)===null)return!1;return!0}(n,e)&&function(s,r){for(const o of s.filters)if(!o.matches(r))return!1;return!0}(n,e)&&function(s,r){return!(s.startAt&&!function(a,u,h){const d=Ha(a,u,h);return a.inclusive?d<=0:d<0}(s.startAt,Ln(s),r)||s.endAt&&!function(a,u,h){const d=Ha(a,u,h);return a.inclusive?d>=0:d>0}(s.endAt,Ln(s),r))}(n,e)}function kv(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Iu(n){return(e,t)=>{let s=!1;for(const r of Ln(n)){const o=Cv(r,e,t);if(o!==0)return o;s=s||r.field.isKeyField()}return 0}}function Cv(n,e,t){const s=n.field.isKeyField()?G.comparator(e.key,t.key):function(o,a,u){const h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?en(h,d):W(42886)}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return W(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,o]of s)if(this.equalsFn(r,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return void(r[o]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Pt(this.inner,(t,s)=>{for(const[r,o]of s)e(r,o)})}isEmpty(){return ou(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv=new pe(G.comparator);function at(){return Dv}const wu=new pe(G.comparator);function Rn(...n){let e=wu;for(const t of n)e=e.insert(t.key,t);return e}function Au(n){let e=wu;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Nt(){return Mn()}function bu(){return Mn()}function Mn(){return new Ft(n=>n.toString(),(n,e)=>n.isEqual(e))}const Nv=new pe(G.comparator),Lv=new Te(G.comparator);function se(...n){let e=Lv;for(const t of n)e=e.add(t);return e}const Mv=new Te(te);function Ov(){return Mv}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ms(e)?"-0":e}}function Pu(n){return{integerValue:""+n}}function Su(n,e){return uv(e)?Pu(e):Fi(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(){this._=void 0}}function $v(n,e,t){return n instanceof Bs?function(r,o){const a={fields:{[uu]:{stringValue:lu},[hu]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return o&&Li(o)&&(o=Js(o)),o&&(a.fields[cu]=o),{mapValue:a}}(t,e):n instanceof Hn?Ru(n,e):n instanceof qn?ku(n,e):function(r,o){const a=Vu(r,o),u=Ka(a)+Ka(r.Re);return ii(a)&&ii(r.Re)?Pu(u):Fi(r.serializer,u)}(n,e)}function xv(n,e,t){return n instanceof Hn?Ru(n,e):n instanceof qn?ku(n,e):t}function Vu(n,e){return n instanceof zn?function(s){return ii(s)||function(o){return!!o&&"doubleValue"in o}(s)}(e)?e:{integerValue:0}:null}class Bs extends nr{}class Hn extends nr{constructor(e){super(),this.elements=e}}function Ru(n,e){const t=Cu(e);for(const s of n.elements)t.some(r=>et(r,s))||t.push(s);return{arrayValue:{values:t}}}class qn extends nr{constructor(e){super(),this.elements=e}}function ku(n,e){let t=Cu(e);for(const s of n.elements)t=t.filter(r=>!et(r,s));return{arrayValue:{values:t}}}class zn extends nr{constructor(e,t){super(),this.serializer=e,this.Re=t}}function Ka(n){return _e(n.integerValue||n.doubleValue)}function Cu(n){return Mi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(e,t){this.field=e,this.transform=t}}function Bv(n,e){return n.field.isEqual(e.field)&&function(s,r){return s instanceof Hn&&r instanceof Hn||s instanceof qn&&r instanceof qn?Zt(s.elements,r.elements,et):s instanceof zn&&r instanceof zn?et(s.Re,r.Re):s instanceof Bs&&r instanceof Bs}(n.transform,e.transform)}class Uv{constructor(e,t){this.version=e,this.transformResults=t}}class Je{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Je}static exists(e){return new Je(void 0,e)}static updateTime(e){return new Je(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class sr{}function Du(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Lu(n.key,Je.none()):new Xn(n.key,n.data,Je.none());{const t=n.data,s=Fe.empty();let r=new Te(Pe.comparator);for(let o of e.fields)if(!r.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?s.delete(o):s.set(o,a),r=r.add(o)}return new St(n.key,s,new je(r.toArray()),Je.none())}}function jv(n,e,t){n instanceof Xn?function(r,o,a){const u=r.value.clone(),h=Qa(r.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):n instanceof St?function(r,o,a){if(!Vs(r.precondition,o))return void o.convertToUnknownDocument(a.version);const u=Qa(r.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Nu(r)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,e,t):function(r,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function On(n,e,t,s){return n instanceof Xn?function(o,a,u,h){if(!Vs(o.precondition,a))return u;const d=o.value.clone(),p=Xa(o.fieldTransforms,h,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,s):n instanceof St?function(o,a,u,h){if(!Vs(o.precondition,a))return u;const d=Xa(o.fieldTransforms,h,a),p=a.data;return p.setAll(Nu(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(_=>_.field))}(n,e,t,s):function(o,a,u){return Vs(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,e,t)}function Hv(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),o=Vu(s.transform,r||null);o!=null&&(t===null&&(t=Fe.empty()),t.set(s.field,o))}return t||null}function Wa(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Zt(s,r,(o,a)=>Bv(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Xn extends sr{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class St extends sr{constructor(e,t,s,r,o=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Nu(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function Qa(n,e,t){const s=new Map;ce(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let r=0;r<t.length;r++){const o=n[r],a=o.transform,u=e.data.field(o.field);s.set(o.field,xv(a,u,t[r]))}return s}function Xa(n,e,t){const s=new Map;for(const r of n){const o=r.transform,a=t.data.field(r.field);s.set(r.field,$v(o,a,e))}return s}class Lu extends sr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qv extends sr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const o=this.mutations[r];o.key.isEqual(e.key)&&jv(o,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=On(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=On(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=bu();return this.mutations.forEach(r=>{const o=e.get(r.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=t.has(r.key)?null:u;const h=Du(a,u);h!==null&&s.set(r.key,h),a.isValidDocument()||a.convertToNoDocument(X.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),se())}isEqual(e){return this.batchId===e.batchId&&Zt(this.mutations,e.mutations,(t,s)=>Wa(t,s))&&Zt(this.baseMutations,e.baseMutations,(t,s)=>Wa(t,s))}}class Bi{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){ce(e.mutations.length===s.length,58842,{fe:e.mutations.length,ge:s.length});let r=function(){return Nv}();const o=e.mutations;for(let a=0;a<o.length;a++)r=r.insert(o[a].key,s[a].version);return new Bi(e,t,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve,ie;function Wv(n){switch(n){case O.OK:return W(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return W(15467,{code:n})}}function Mu(n){if(n===void 0)return ot("GRPC error has no .code"),O.UNKNOWN;switch(n){case ve.OK:return O.OK;case ve.CANCELLED:return O.CANCELLED;case ve.UNKNOWN:return O.UNKNOWN;case ve.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case ve.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case ve.INTERNAL:return O.INTERNAL;case ve.UNAVAILABLE:return O.UNAVAILABLE;case ve.UNAUTHENTICATED:return O.UNAUTHENTICATED;case ve.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case ve.NOT_FOUND:return O.NOT_FOUND;case ve.ALREADY_EXISTS:return O.ALREADY_EXISTS;case ve.PERMISSION_DENIED:return O.PERMISSION_DENIED;case ve.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case ve.ABORTED:return O.ABORTED;case ve.OUT_OF_RANGE:return O.OUT_OF_RANGE;case ve.UNIMPLEMENTED:return O.UNIMPLEMENTED;case ve.DATA_LOSS:return O.DATA_LOSS;default:return W(39323,{code:n})}}(ie=ve||(ve={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv=new _t([4294967295,4294967295],0);function Ya(n){const e=su().encode(n),t=new Ql;return t.update(e),new Uint8Array(t.digest())}function Ja(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new _t([t,s],0),new _t([r,o],0)]}class Ui{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new kn(`Invalid padding: ${t}`);if(s<0)throw new kn(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new kn(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new kn(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=_t.fromNumber(this.pe)}we(e,t,s){let r=e.add(t.multiply(_t.fromNumber(s)));return r.compare(Qv)===1&&(r=new _t([r.getBits(0),r.getBits(1)],0)),r.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=Ya(e),[s,r]=Ja(t);for(let o=0;o<this.hashCount;o++){const a=this.we(s,r,o);if(!this.be(a))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new Ui(o,r,t);return s.forEach(u=>a.insert(u)),a}insert(e){if(this.pe===0)return;const t=Ya(e),[s,r]=Ja(t);for(let o=0;o<this.hashCount;o++){const a=this.we(s,r,o);this.Se(a)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class kn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,t,s,r,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,Yn.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new rr(X.min(),r,new pe(te),at(),se())}}class Yn{constructor(e,t,s,r,o){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Yn(s,t,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,t,s,r){this.De=e,this.removedTargetIds=t,this.key=s,this.ve=r}}class Ou{constructor(e,t){this.targetId=e,this.Ce=t}}class $u{constructor(e,t,s=Ve.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class Za{constructor(){this.Fe=0,this.Me=el(),this.xe=Ve.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=se(),t=se(),s=se();return this.Me.forEach((r,o)=>{switch(o){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:W(38017,{changeType:o})}}),new Yn(this.xe,this.Oe,e,t,s)}Qe(){this.Ne=!1,this.Me=el()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,ce(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class Xv{constructor(e){this.ze=e,this.je=new Map,this.He=at(),this.Je=Is(),this.Ye=Is(),this.Ze=new pe(te)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const s=this.rt(t);switch(e.state){case 0:this.it(t)&&s.ke(e.resumeToken);break;case 1:s.We(),s.Be||s.Qe(),s.ke(e.resumeToken);break;case 2:s.We(),s.Be||this.removeTarget(t);break;case 3:this.it(t)&&(s.Ge(),s.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),s.ke(e.resumeToken));break;default:W(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((s,r)=>{this.it(r)&&t(r)})}ot(e){const t=e.targetId,s=e.Ce.count,r=this._t(t);if(r){const o=r.target;if(ai(o))if(s===0){const a=new G(o.path);this.tt(t,a,Me.newNoDocument(a,X.min()))}else ce(s===1,20013,{expectedCount:s});else{const a=this.ut(t);if(a!==s){const u=this.ct(e),h=u?this.lt(u,e,a):1;if(h!==0){this.st(t);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:o=0}=t;let a,u;try{a=Tt(s).toUint8Array()}catch(h){if(h instanceof au)return Jt("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new Ui(a,r,o)}catch(h){return Jt(h instanceof kn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.pe===0?null:u}lt(e,t,s){return t.Ce.count===s-this.Tt(e,t.targetId)?0:2}Tt(e,t){const s=this.ze.getRemoteKeysForTarget(t);let r=0;return s.forEach(o=>{const a=this.ze.Pt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(u)||(this.tt(t,o,null),r++)}),r}It(e){const t=new Map;this.je.forEach((o,a)=>{const u=this._t(a);if(u){if(o.current&&ai(u.target)){const h=new G(u.target.path);this.Et(h).has(a)||this.dt(a,h)||this.tt(a,h,Me.newNoDocument(h,e))}o.Le&&(t.set(a,o.qe()),o.Qe())}});let s=se();this.Ye.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{const d=this._t(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(s=s.add(o))}),this.He.forEach((o,a)=>a.setReadTime(e));const r=new rr(e,t,this.Ze,this.He,s);return this.He=at(),this.Je=Is(),this.Ye=Is(),this.Ze=new pe(te),r}et(e,t){if(!this.it(e))return;const s=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,s),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,s){if(!this.it(e))return;const r=this.rt(e);this.dt(e,t)?r.$e(t,1):r.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),s&&(this.He=this.He.insert(t,s))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new Za,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new Te(te),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new Te(te),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||F("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Za),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function Is(){return new pe(G.comparator)}function el(){return new pe(G.comparator)}const Yv={asc:"ASCENDING",desc:"DESCENDING"},Jv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Zv={and:"AND",or:"OR"};class ey{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ui(n,e){return n.useProto3Json||Ys(e)?e:{value:e}}function Us(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xu(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ty(n,e){return Us(n,e.toTimestamp())}function Ze(n){return ce(!!n,49232),X.fromTimestamp(function(t){const s=Et(t);return new Ee(s.seconds,s.nanos)}(n))}function ji(n,e){return ci(n,e).canonicalString()}function ci(n,e){const t=function(r){return new ge(["projects",r.projectId,"databases",r.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Fu(n){const e=ge.fromString(n);return ce(qu(e),10190,{key:e.toString()}),e}function hi(n,e){return ji(n.databaseId,e.path)}function jr(n,e){const t=Fu(e);if(t.get(1)!==n.databaseId.projectId)throw new z(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new z(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new G(Uu(t))}function Bu(n,e){return ji(n.databaseId,e)}function ny(n){const e=Fu(n);return e.length===4?ge.emptyPath():Uu(e)}function di(n){return new ge(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Uu(n){return ce(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function tl(n,e,t){return{name:hi(n,e),fields:t.value.mapValue.fields}}function sy(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:W(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?(ce(p===void 0||typeof p=="string",58123),Ve.fromBase64String(p||"")):(ce(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),Ve.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(d){const p=d.code===void 0?O.UNKNOWN:Mu(d.code);return new z(p,d.message||"")}(a);t=new $u(s,r,o,u||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=jr(n,s.document.name),o=Ze(s.document.updateTime),a=s.document.createTime?Ze(s.document.createTime):X.min(),u=new Fe({mapValue:{fields:s.document.fields}}),h=Me.newFoundDocument(r,o,a,u),d=s.targetIds||[],p=s.removedTargetIds||[];t=new Rs(d,p,h.key,h)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=jr(n,s.document),o=s.readTime?Ze(s.readTime):X.min(),a=Me.newNoDocument(r,o),u=s.removedTargetIds||[];t=new Rs([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=jr(n,s.document),o=s.removedTargetIds||[];t=new Rs([],o,r,null)}else{if(!("filter"in e))return W(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:o}=s,a=new Kv(r,o),u=s.targetId;t=new Ou(u,a)}}return t}function ry(n,e){let t;if(e instanceof Xn)t={update:tl(n,e.key,e.value)};else if(e instanceof Lu)t={delete:hi(n,e.key)};else if(e instanceof St)t={update:tl(n,e.key,e.data),updateMask:fy(e.fieldMask)};else{if(!(e instanceof qv))return W(16599,{ft:e.type});t={verify:hi(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(o,a){const u=a.transform;if(u instanceof Bs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Hn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof qn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof zn)return{fieldPath:a.field.canonicalString(),increment:u.Re};throw W(20930,{transform:a.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(r,o){return o.updateTime!==void 0?{updateTime:ty(r,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:W(27497)}(n,e.precondition)),t}function iy(n,e){return n&&n.length>0?(ce(e!==void 0,14353),n.map(t=>function(r,o){let a=r.updateTime?Ze(r.updateTime):Ze(o);return a.isEqual(X.min())&&(a=Ze(o)),new Uv(a,r.transformResults||[])}(t,e))):[]}function oy(n,e){return{documents:[Bu(n,e.path)]}}function ay(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Bu(n,r);const o=function(d){if(d.length!==0)return Hu(tt.create(d,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(p=>function(y){return{field:Kt(y.field),direction:cy(y.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const u=ui(n,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{gt:t,parent:r}}function ly(n){let e=ny(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){ce(s===1,65062);const p=t.from[0];p.allDescendants?r=p.collectionId:e=e.child(p.collectionId)}let o=[];t.where&&(o=function(_){const y=ju(_);return y instanceof tt&&_u(y)?y.getFilters():[y]}(t.where));let a=[];t.orderBy&&(a=function(_){return _.map(y=>function(N){return new Fs(Wt(N.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(y))}(t.orderBy));let u=null;t.limit&&(u=function(_){let y;return y=typeof _=="object"?_.value:_,Ys(y)?null:y}(t.limit));let h=null;t.startAt&&(h=function(_){const y=!!_.before,S=_.values||[];return new xs(S,y)}(t.startAt));let d=null;return t.endAt&&(d=function(_){const y=!_.before,S=_.values||[];return new xs(S,y)}(t.endAt)),Sv(e,r,a,o,u,"F",h,d)}function uy(n,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W(28987,{purpose:r})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ju(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Wt(t.unaryFilter.field);return ye.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Wt(t.unaryFilter.field);return ye.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Wt(t.unaryFilter.field);return ye.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Wt(t.unaryFilter.field);return ye.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return W(61313);default:return W(60726)}}(n):n.fieldFilter!==void 0?function(t){return ye.create(Wt(t.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return W(58110);default:return W(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return tt.create(t.compositeFilter.filters.map(s=>ju(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return W(1026)}}(t.compositeFilter.op))}(n):W(30097,{filter:n})}function cy(n){return Yv[n]}function hy(n){return Jv[n]}function dy(n){return Zv[n]}function Kt(n){return{fieldPath:n.canonicalString()}}function Wt(n){return Pe.fromServerFormat(n.fieldPath)}function Hu(n){return n instanceof ye?function(t){if(t.op==="=="){if(ja(t.value))return{unaryFilter:{field:Kt(t.field),op:"IS_NAN"}};if(Ua(t.value))return{unaryFilter:{field:Kt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ja(t.value))return{unaryFilter:{field:Kt(t.field),op:"IS_NOT_NAN"}};if(Ua(t.value))return{unaryFilter:{field:Kt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Kt(t.field),op:hy(t.op),value:t.value}}}(n):n instanceof tt?function(t){const s=t.getFilters().map(r=>Hu(r));return s.length===1?s[0]:{compositeFilter:{op:dy(t.op),filters:s}}}(n):W(54877,{filter:n})}function fy(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function qu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t,s,r,o=X.min(),a=X.min(),u=Ve.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(e){return new ft(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ft(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e){this.wt=e}}function my(n){const e=ly({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?li(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(){this.Cn=new _y}addToCollectionParentIndex(e,t){return this.Cn.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(yt.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(yt.min())}updateCollectionGroup(e,t,s){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class _y{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new Te(ge.comparator),o=!r.has(s);return this.index[t]=r.add(s),o}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Te(ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},zu=41943040;class xe{static withCacheSize(e){return new xe(e,xe.DEFAULT_COLLECTION_PERCENTILE,xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xe.DEFAULT_COLLECTION_PERCENTILE=10,xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,xe.DEFAULT=new xe(zu,xe.DEFAULT_COLLECTION_PERCENTILE,xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),xe.DISABLED=new xe(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new nn(0)}static lr(){return new nn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl="LruGarbageCollector",vy=1048576;function rl([n,e],[t,s]){const r=te(n,t);return r===0?te(e,s):r}class yy{constructor(e){this.Er=e,this.buffer=new Te(rl),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();rl(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Ey{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){F(sl,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){un(t)?F(sl,"Ignoring IndexedDB error during garbage collection: ",t):await ln(t)}await this.mr(3e5)})}}class Ty{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return D.resolve(Xs.le);const s=new yy(t);return this.gr.forEachTarget(e,r=>s.Rr(r.sequenceNumber)).next(()=>this.gr.yr(e,r=>s.Rr(r))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.gr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(F("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(nl)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(F("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),nl):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let s,r,o,a,u,h,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(_=>(_>this.params.maximumSequenceNumbersToCollect?(F("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${_}`),r=this.params.maximumSequenceNumbersToCollect):r=_,a=Date.now(),this.nthSequenceNumber(e,r))).next(_=>(s=_,u=Date.now(),this.removeTargets(e,s,t))).next(_=>(o=_,h=Date.now(),this.removeOrphanedDocuments(e,s))).next(_=>(d=Date.now(),zt()<=oe.DEBUG&&F("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${r} in `+(u-a)+`ms
	Removed ${o} targets in `+(h-u)+`ms
	Removed ${_} documents in `+(d-h)+`ms
Total Duration: ${d-p}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:o,documentsRemoved:_})))}}function Iy(n,e){return new Ty(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(){this.changes=new Ft(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Me.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?D.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(s!==null&&On(s.mutation,r,je.empty(),Ee.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,se()).next(()=>s))}getLocalViewOfDocuments(e,t,s=se()){const r=Nt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,s).next(o=>{let a=Rn();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const s=Nt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,se()))}populateOverlays(e,t,s){const r=[];return s.forEach(o=>{t.has(o)||r.push(o)}),this.documentOverlayCache.getOverlays(e,r).next(o=>{o.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,s,r){let o=at();const a=Mn(),u=function(){return Mn()}();return t.forEach((h,d)=>{const p=s.get(d.key);r.has(d.key)&&(p===void 0||p.mutation instanceof St)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),On(p.mutation,d,p.mutation.getFieldMask(),Ee.now())):a.set(d.key,je.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var _;return u.set(d,new Ay(p,(_=a.get(d))!==null&&_!==void 0?_:null))}),u))}recalculateAndSaveOverlays(e,t){const s=Mn();let r=new pe((a,u)=>a-u),o=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const u of a)u.keys().forEach(h=>{const d=t.get(h);if(d===null)return;let p=s.get(h)||je.empty();p=u.applyToLocalView(d,p),s.set(h,p);const _=(r.get(u.batchId)||se()).add(h);r=r.insert(u.batchId,_)})}).next(()=>{const a=[],u=r.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),d=h.key,p=h.value,_=bu();p.forEach(y=>{if(!o.has(y)){const S=Du(t.get(y),s.get(y));S!==null&&_.set(y,S),o=o.add(y)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,_))}return D.waitFor(a)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,r){return function(a){return G.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Vv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next(o=>{const a=r-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-o.size):D.resolve(Nt());let u=Fn,h=o;return a.next(d=>D.forEach(d,(p,_)=>(u<_.largestBatchId&&(u=_.largestBatchId),o.get(p)?D.resolve():this.remoteDocumentCache.getEntry(e,p).next(y=>{h=h.insert(p,y)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,h,d,se())).next(p=>({batchId:u,changes:Au(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new G(t)).next(s=>{let r=Rn();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const o=t.collectionGroup;let a=Rn();return this.indexManager.getCollectionParents(e,o).next(u=>D.forEach(u,h=>{const d=function(_,y){return new Zs(y,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,s,r).next(p=>{p.forEach((_,y)=>{a=a.insert(_,y)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,s,r){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,o,r))).next(a=>{o.forEach((h,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Me.newInvalidDocument(p)))});let u=Rn();return a.forEach((h,d)=>{const p=o.get(h);p!==void 0&&On(p.mutation,d,je.empty(),Ee.now()),tr(t,d)&&(u=u.insert(h,d))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return D.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(r){return{id:r.id,version:r.version,createTime:Ze(r.createTime)}}(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(r){return{name:r.name,query:my(r.bundledQuery),readTime:Ze(r.readTime)}}(t)),D.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(){this.overlays=new pe(G.comparator),this.Qr=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Nt();return D.forEach(t,r=>this.getOverlay(e,r).next(o=>{o!==null&&s.set(r,o)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((r,o)=>{this.St(e,t,o)}),D.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.Qr.get(s);return r!==void 0&&(r.forEach(o=>this.overlays=this.overlays.remove(o)),this.Qr.delete(s)),D.resolve()}getOverlaysForCollection(e,t,s){const r=Nt(),o=t.length+1,a=new G(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>s&&r.set(h.getKey(),h)}return D.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let o=new pe((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>s){let p=o.get(d.largestBatchId);p===null&&(p=Nt(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const u=Nt(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,p)=>u.set(d,p)),!(u.size()>=r)););return D.resolve(u)}St(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const a=this.Qr.get(r.largestBatchId).delete(s.key);this.Qr.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new Gv(t,s));let o=this.Qr.get(t);o===void 0&&(o=se(),this.Qr.set(t,o)),this.Qr.set(t,o.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(){this.sessionToken=Ve.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(){this.$r=new Te(Ie.Ur),this.Kr=new Te(Ie.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const s=new Ie(e,t);this.$r=this.$r.add(s),this.Kr=this.Kr.add(s)}Gr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.zr(new Ie(e,t))}jr(e,t){e.forEach(s=>this.removeReference(s,t))}Hr(e){const t=new G(new ge([])),s=new Ie(t,e),r=new Ie(t,e+1),o=[];return this.Kr.forEachInRange([s,r],a=>{this.zr(a),o.push(a.key)}),o}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new G(new ge([])),s=new Ie(t,e),r=new Ie(t,e+1);let o=se();return this.Kr.forEachInRange([s,r],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new Ie(e,0),s=this.$r.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Ie{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return G.comparator(e.key,t.key)||te(e.Zr,t.Zr)}static Wr(e,t){return te(e.Zr,t.Zr)||G.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new Te(Ie.Ur)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const o=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new zv(o,t,s,r);this.mutationQueue.push(a);for(const u of r)this.Xr=this.Xr.add(new Ie(u.key,o)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return D.resolve(a)}lookupMutationBatch(e,t){return D.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.ti(s),o=r<0?0:r;return D.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?Ni:this.nr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Ie(t,0),r=new Ie(t,Number.POSITIVE_INFINITY),o=[];return this.Xr.forEachInRange([s,r],a=>{const u=this.ei(a.Zr);o.push(u)}),D.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Te(te);return t.forEach(r=>{const o=new Ie(r,0),a=new Ie(r,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([o,a],u=>{s=s.add(u.Zr)})}),D.resolve(this.ni(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let o=s;G.isDocumentKey(o)||(o=o.child(""));const a=new Ie(new G(o),0);let u=new Te(te);return this.Xr.forEachWhile(h=>{const d=h.key.path;return!!s.isPrefixOf(d)&&(d.length===r&&(u=u.add(h.Zr)),!0)},a),D.resolve(this.ni(u))}ni(e){const t=[];return e.forEach(s=>{const r=this.ei(s);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){ce(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Xr;return D.forEach(t.mutations,r=>{const o=new Ie(r.key,t.batchId);return s=s.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Xr=s})}sr(e){}containsKey(e,t){const s=new Ie(t,0),r=this.Xr.firstAfterOrEqual(s);return D.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e){this.ii=e,this.docs=function(){return new pe(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),o=r?r.size:0,a=this.ii(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return D.resolve(s?s.document.mutableCopy():Me.newInvalidDocument(t))}getEntries(e,t){let s=at();return t.forEach(r=>{const o=this.docs.get(r);s=s.insert(r,o?o.document.mutableCopy():Me.newInvalidDocument(r))}),D.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let o=at();const a=t.path,u=new G(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:d,value:{document:p}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||iv(rv(p),s)<=0||(r.has(p.key)||tr(t,p))&&(o=o.insert(p.key,p.mutableCopy()))}return D.resolve(o)}getAllFromCollectionGroup(e,t,s,r){W(9500)}si(e,t){return D.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new Cy(this)}getSize(e){return D.resolve(this.size)}}class Cy extends wy{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?t.push(this.Br.addEntry(e,r)):this.Br.removeEntry(s)}),D.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e){this.persistence=e,this.oi=new Ft(t=>Oi(t),$i),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this._i=0,this.ai=new Hi,this.targetCount=0,this.ui=nn.cr()}forEachTarget(e,t){return this.oi.forEach((s,r)=>t(r)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this._i&&(this._i=t),D.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new nn(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.Tr(t),D.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,s){let r=0;const o=[];return this.oi.forEach((a,u)=>{u.sequenceNumber<=t&&s.get(u.targetId)===null&&(this.oi.delete(a),o.push(this.removeMatchingKeysForTargetId(e,u.targetId)),r++)}),D.waitFor(o).next(()=>r)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const s=this.oi.get(t)||null;return D.resolve(s)}addMatchingKeys(e,t,s){return this.ai.Gr(t,s),D.resolve()}removeMatchingKeys(e,t,s){this.ai.jr(t,s);const r=this.persistence.referenceDelegate,o=[];return r&&t.forEach(a=>{o.push(r.markPotentiallyOrphaned(e,a))}),D.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const s=this.ai.Yr(t);return D.resolve(s)}containsKey(e,t){return D.resolve(this.ai.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,t){this.ci={},this.overlays={},this.li=new Xs(0),this.hi=!1,this.hi=!0,this.Pi=new Vy,this.referenceDelegate=e(this),this.Ti=new Dy(this),this.indexManager=new gy,this.remoteDocumentCache=function(r){return new ky(r)}(s=>this.referenceDelegate.Ii(s)),this.serializer=new py(t),this.Ei=new Py(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Sy,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ci[e.toKey()];return s||(s=new Ry(t,this.referenceDelegate),this.ci[e.toKey()]=s),s}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,s){F("MemoryPersistence","Starting transaction:",e);const r=new Ny(this.li.next());return this.referenceDelegate.di(),s(r).next(o=>this.referenceDelegate.Ai(r).next(()=>o)).toPromise().then(o=>(r.raiseOnCommittedEvent(),o))}Ri(e,t){return D.or(Object.values(this.ci).map(s=>()=>s.containsKey(e,t)))}}class Ny extends av{constructor(e){super(),this.currentSequenceNumber=e}}class qi{constructor(e){this.persistence=e,this.Vi=new Hi,this.mi=null}static fi(e){return new qi(e)}get gi(){if(this.mi)return this.mi;throw W(60996)}addReference(e,t,s){return this.Vi.addReference(s,t),this.gi.delete(s.toString()),D.resolve()}removeReference(e,t,s){return this.Vi.removeReference(s,t),this.gi.add(s.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),D.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(r=>this.gi.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(o=>this.gi.add(o.toString()))}).next(()=>s.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.gi,s=>{const r=G.fromPath(s);return this.pi(e,r).next(o=>{o||t.removeEntry(r,X.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(s=>{s?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return D.or([()=>D.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class js{constructor(e,t){this.persistence=e,this.yi=new Ft(s=>cv(s.path),(s,r)=>s.isEqual(r)),this.garbageCollector=Iy(this,t)}static fi(e,t){return new js(e,t)}di(){}Ai(e){return D.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(r=>s+r))}br(e){let t=0;return this.yr(e,s=>{t++}).next(()=>t)}yr(e,t){return D.forEach(this.yi,(s,r)=>this.Dr(e,s,r).next(o=>o?D.resolve():t(r)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),o=r.newChangeBuffer();return r.si(e,a=>this.Dr(e,a,t).next(u=>{u||(s++,o.removeEntry(a,X.min()))})).next(()=>o.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),D.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.yi.set(s,e.currentSequenceNumber),D.resolve()}removeReference(e,t,s){return this.yi.set(s,e.currentSequenceNumber),D.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),D.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ps(e.data.value)),t}Dr(e,t,s){return D.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.yi.get(t);return D.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.ds=s,this.As=r}static Rs(e,t){let s=se(),r=se();for(const o of t.docChanges)switch(o.type){case 0:s=s.add(o.doc.key);break;case 1:r=r.add(o.doc.key)}return new zi(e,t.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return kg()?8:lv(Vg())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,s,r){const o={result:null};return this.ws(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.bs(e,t,r,s).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Ly;return this.Ss(e,t,a).next(u=>{if(o.result=u,this.fs)return this.Ds(e,t,a,u.size)})}).next(()=>o.result)}Ds(e,t,s,r){return s.documentReadCount<this.gs?(zt()<=oe.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",Gt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),D.resolve()):(zt()<=oe.DEBUG&&F("QueryEngine","Query:",Gt(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.ps*r?(zt()<=oe.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",Gt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ye(t))):D.resolve())}ws(e,t){if(Ga(t))return D.resolve(null);let s=Ye(t);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=li(t,null,"F"),s=Ye(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(o=>{const a=se(...o);return this.ys.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,s).next(h=>{const d=this.vs(t,u);return this.Cs(t,d,a,h.readTime)?this.ws(e,li(t,null,"F")):this.Fs(e,d,t,h)}))})))}bs(e,t,s,r){return Ga(t)||r.isEqual(X.min())?D.resolve(null):this.ys.getDocuments(e,s).next(o=>{const a=this.vs(t,o);return this.Cs(t,a,s,r)?D.resolve(null):(zt()<=oe.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Gt(t)),this.Fs(e,a,t,sv(r,Fn)).next(u=>u))})}vs(e,t){let s=new Te(Iu(e));return t.forEach((r,o)=>{tr(e,o)&&(s=s.add(o))}),s}Cs(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(r)>0)}Ss(e,t,s){return zt()<=oe.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",Gt(t)),this.ys.getDocumentsMatchingQuery(e,t,yt.min(),s)}Fs(e,t,s,r){return this.ys.getDocumentsMatchingQuery(e,s,r).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi="LocalStore",Oy=3e8;class $y{constructor(e,t,s,r){this.persistence=e,this.Ms=t,this.serializer=r,this.xs=new pe(te),this.Os=new Ft(o=>Oi(o),$i),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(s)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new by(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function xy(n,e,t,s){return new $y(n,e,t,s)}async function Ku(n,e){const t=Y(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next(o=>(r=o,t.Ls(e),t.mutationQueue.getAllMutationBatches(s))).next(o=>{const a=[],u=[];let h=se();for(const d of r){a.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of o){u.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return t.localDocuments.getDocuments(s,h).next(d=>({ks:d,removedBatchIds:a,addedBatchIds:u}))})})}function Fy(n,e){const t=Y(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),o=t.Bs.newChangeBuffer({trackRemovals:!0});return function(u,h,d,p){const _=d.batch,y=_.keys();let S=D.resolve();return y.forEach(N=>{S=S.next(()=>p.getEntry(h,N)).next(x=>{const M=d.docVersions.get(N);ce(M!==null,48541),x.version.compareTo(M)<0&&(_.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),p.addEntry(x)))})}),S.next(()=>u.mutationQueue.removeMutationBatch(h,_))}(t,s,e,o).next(()=>o.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(u){let h=se();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(h=h.add(u.batch.mutations[d].key));return h}(e))).next(()=>t.localDocuments.getDocuments(s,r))})}function Wu(n){const e=Y(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function By(n,e){const t=Y(n),s=e.snapshotVersion;let r=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=t.Bs.newChangeBuffer({trackRemovals:!0});r=t.xs;const u=[];e.targetChanges.forEach((p,_)=>{const y=r.get(_);if(!y)return;u.push(t.Ti.removeMatchingKeys(o,p.removedDocuments,_).next(()=>t.Ti.addMatchingKeys(o,p.addedDocuments,_)));let S=y.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(_)!==null?S=S.withResumeToken(Ve.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,s)),r=r.insert(_,S),function(x,M,J){return x.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=Oy?!0:J.addedDocuments.size+J.modifiedDocuments.size+J.removedDocuments.size>0}(y,S,p)&&u.push(t.Ti.updateTargetData(o,S))});let h=at(),d=se();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(o,p))}),u.push(Uy(o,a,e.documentUpdates).next(p=>{h=p.qs,d=p.Qs})),!s.isEqual(X.min())){const p=t.Ti.getLastRemoteSnapshotVersion(o).next(_=>t.Ti.setTargetsMetadata(o,o.currentSequenceNumber,s));u.push(p)}return D.waitFor(u).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(t.xs=r,o))}function Uy(n,e,t){let s=se(),r=se();return t.forEach(o=>s=s.add(o)),e.getEntries(n,s).next(o=>{let a=at();return t.forEach((u,h)=>{const d=o.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(r=r.add(u)),h.isNoDocument()&&h.version.isEqual(X.min())?(e.removeEntry(u,h.readTime),a=a.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(h),a=a.insert(u,h)):F(Gi,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)}),{qs:a,Qs:r}})}function jy(n,e){const t=Y(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Ni),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Hy(n,e){const t=Y(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return t.Ti.getTargetData(s,e).next(o=>o?(r=o,D.resolve(r)):t.Ti.allocateTargetId(s).next(a=>(r=new ft(e,a,"TargetPurposeListen",s.currentSequenceNumber),t.Ti.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=t.xs.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.xs=t.xs.insert(s.targetId,s),t.Os.set(e,s.targetId)),s})}async function fi(n,e,t){const s=Y(n),r=s.xs.get(e),o=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",o,a=>s.persistence.referenceDelegate.removeTarget(a,r))}catch(a){if(!un(a))throw a;F(Gi,`Failed to update sequence numbers for target ${e}: ${a}`)}s.xs=s.xs.remove(e),s.Os.delete(r.target)}function il(n,e,t){const s=Y(n);let r=X.min(),o=se();return s.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,p){const _=Y(h),y=_.Os.get(p);return y!==void 0?D.resolve(_.xs.get(y)):_.Ti.getTargetData(d,p)}(s,a,Ye(e)).next(u=>{if(u)return r=u.lastLimboFreeSnapshotVersion,s.Ti.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>s.Ms.getDocumentsMatchingQuery(a,e,t?r:X.min(),t?o:se())).next(u=>(qy(s,kv(e),u),{documents:u,$s:o})))}function qy(n,e,t){let s=n.Ns.get(e)||X.min();t.forEach((r,o)=>{o.readTime.compareTo(s)>0&&(s=o.readTime)}),n.Ns.set(e,s)}class ol{constructor(){this.activeTargetIds=Ov()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zy{constructor(){this.xo=new ol,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,s){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new ol,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{No(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al="ConnectivityMonitor";class ll{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){F(al,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){F(al,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ws=null;function pi(){return ws===null?ws=function(){return 268435456+Math.round(2147483648*Math.random())}():ws++,"0x"+ws.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr="RestConnection",Ky={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Wy{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${s}/databases/${r}`,this.Go=this.databaseId.database===Os?`project_id=${s}`:`project_id=${s}&database_id=${r}`}zo(e,t,s,r,o){const a=pi(),u=this.jo(e,t.toUriEncodedString());F(Hr,`Sending RPC '${e}' ${a}:`,u,s);const h={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(h,r,o);const{host:d}=new URL(u),p=ki(d);return this.Jo(e,u,h,s,p).then(_=>(F(Hr,`Received RPC '${e}' ${a}: `,_),_),_=>{throw Jt(Hr,`RPC '${e}' ${a} failed with error: `,_,"url: ",u,"request:",s),_})}Yo(e,t,s,r,o,a){return this.zo(e,t,s,r,o)}Ho(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+an}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,o)=>e[o]=r),s&&s.headers.forEach((r,o)=>e[o]=r)}jo(e,t){const s=Ky[e];return`${this.Ko}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne="WebChannelConnection";class Xy extends Wy{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,r,o){const a=pi();return new Promise((u,h)=>{const d=new Xl;d.setWithCredentials(!0),d.listenOnce(Yl.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case bs.NO_ERROR:const _=d.getResponseJson();F(Ne,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(_)),u(_);break;case bs.TIMEOUT:F(Ne,`RPC '${e}' ${a} timed out`),h(new z(O.DEADLINE_EXCEEDED,"Request time out"));break;case bs.HTTP_ERROR:const y=d.getStatus();if(F(Ne,`RPC '${e}' ${a} failed with status:`,y,"response text:",d.getResponseText()),y>0){let S=d.getResponseJson();Array.isArray(S)&&(S=S[0]);const N=S==null?void 0:S.error;if(N&&N.status&&N.message){const x=function(J){const Q=J.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(Q)>=0?Q:O.UNKNOWN}(N.status);h(new z(x,N.message))}else h(new z(O.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new z(O.UNAVAILABLE,"Connection failed."));break;default:W(9055,{h_:e,streamId:a,P_:d.getLastErrorCode(),T_:d.getLastError()})}}finally{F(Ne,`RPC '${e}' ${a} completed.`)}});const p=JSON.stringify(r);F(Ne,`RPC '${e}' ${a} sending request:`,r),d.send(t,"POST",p,s,15)})}I_(e,t,s){const r=pi(),o=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=eu(),u=Zl(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Ho(h.initMessageHeaders,t,s),h.encodeInitMessageHeaders=!0;const p=o.join("");F(Ne,`Creating RPC '${e}' stream ${r}: ${p}`,h);const _=a.createWebChannel(p,h);this.E_(_);let y=!1,S=!1;const N=new Qy({Zo:M=>{S?F(Ne,`Not sending because RPC '${e}' stream ${r} is closed:`,M):(y||(F(Ne,`Opening RPC '${e}' stream ${r} transport.`),_.open(),y=!0),F(Ne,`RPC '${e}' stream ${r} sending:`,M),_.send(M))},Xo:()=>_.close()}),x=(M,J,Q)=>{M.listen(J,ee=>{try{Q(ee)}catch(fe){setTimeout(()=>{throw fe},0)}})};return x(_,Vn.EventType.OPEN,()=>{S||(F(Ne,`RPC '${e}' stream ${r} transport opened.`),N.__())}),x(_,Vn.EventType.CLOSE,()=>{S||(S=!0,F(Ne,`RPC '${e}' stream ${r} transport closed`),N.u_(),this.d_(_))}),x(_,Vn.EventType.ERROR,M=>{S||(S=!0,Jt(Ne,`RPC '${e}' stream ${r} transport errored. Name:`,M.name,"Message:",M.message),N.u_(new z(O.UNAVAILABLE,"The operation could not be completed")))}),x(_,Vn.EventType.MESSAGE,M=>{var J;if(!S){const Q=M.data[0];ce(!!Q,16349);const ee=Q,fe=(ee==null?void 0:ee.error)||((J=ee[0])===null||J===void 0?void 0:J.error);if(fe){F(Ne,`RPC '${e}' stream ${r} received error:`,fe);const Be=fe.status;let we=function(v){const E=ve[v];if(E!==void 0)return Mu(E)}(Be),w=fe.message;we===void 0&&(we=O.INTERNAL,w="Unknown error status: "+Be+" with message "+fe.message),S=!0,N.u_(new z(we,w)),_.close()}else F(Ne,`RPC '${e}' stream ${r} received:`,Q),N.c_(Q)}}),x(u,Jl.STAT_EVENT,M=>{M.stat===ni.PROXY?F(Ne,`RPC '${e}' stream ${r} detected buffering proxy`):M.stat===ni.NOPROXY&&F(Ne,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{N.a_()},0),N}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(t=>t===e)}}function qr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(n){return new ey(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,t,s=1e3,r=1.5,o=6e4){this.xi=e,this.timerId=t,this.A_=s,this.R_=r,this.V_=o,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const t=Math.floor(this.m_+this.w_()),s=Math.max(0,Date.now()-this.g_),r=Math.max(0,t-s);r>0&&F("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.m_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,r,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul="PersistentStream";class Xu{constructor(e,t,s,r,o,a,u,h){this.xi=e,this.S_=s,this.D_=r,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new Qu(e,t)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,t){this.U_(),this.K_(),this.x_.cancel(),this.v_++,e!==4?this.x_.reset():t&&t.code===O.RESOURCE_EXHAUSTED?(ot(t.toString()),ot("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):t&&t.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}W_(){}auth(){this.state=1;const e=this.G_(this.v_),t=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.v_===t&&this.z_(s,r)},s=>{e(()=>{const r=new z(O.UNKNOWN,"Fetching auth token failed: "+s.message);return this.j_(r)})})}z_(e,t){const s=this.G_(this.v_);this.stream=this.H_(e,t),this.stream.e_(()=>{s(()=>this.listener.e_())}),this.stream.n_(()=>{s(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(r=>{s(()=>this.j_(r))}),this.stream.onMessage(r=>{s(()=>++this.M_==1?this.J_(r):this.onNext(r))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(e){return F(ul,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return t=>{this.xi.enqueueAndForget(()=>this.v_===e?t():(F(ul,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Yy extends Xu{constructor(e,t,s,r,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,a),this.serializer=o}H_(e,t){return this.connection.I_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();const t=sy(this.serializer,e),s=function(o){if(!("targetChange"in o))return X.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?X.min():a.readTime?Ze(a.readTime):X.min()}(e);return this.listener.Y_(t,s)}Z_(e){const t={};t.database=di(this.serializer),t.addTarget=function(o,a){let u;const h=a.target;if(u=ai(h)?{documents:oy(o,h)}:{query:ay(o,h).gt},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=xu(o,a.resumeToken);const d=ui(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(X.min())>0){u.readTime=Us(o,a.snapshotVersion.toTimestamp());const d=ui(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,e);const s=uy(this.serializer,e);s&&(t.labels=s),this.Q_(t)}X_(e){const t={};t.database=di(this.serializer),t.removeTarget=e,this.Q_(t)}}class Jy extends Xu{constructor(e,t,s,r,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,a),this.serializer=o}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(e,t){return this.connection.I_("Write",e,t)}J_(e){return ce(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ce(!e.writeResults||e.writeResults.length===0,55816),this.listener.na()}onNext(e){ce(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.x_.reset();const t=iy(e.writeResults,e.commitTime),s=Ze(e.commitTime);return this.listener.ra(s,t)}ia(){const e={};e.database=di(this.serializer),this.Q_(e)}ta(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>ry(this.serializer,s))};this.Q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{}class eE extends Zy{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.sa=!1}oa(){if(this.sa)throw new z(O.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,s,r){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.zo(e,ci(t,s),r,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(O.UNKNOWN,o.toString())})}Yo(e,t,s,r,o){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Yo(e,ci(t,s),r,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new z(O.UNKNOWN,a.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class tE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,e==="Online"&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(ot(t),this.ua=!1):F("OnlineStateTracker",t)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t="RemoteStore";class nE{constructor(e,t,s,r,o){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=o,this.Ra.No(a=>{s.enqueueAndForget(async()=>{Bt(this)&&(F($t,"Restarting streams for network reachability change."),await async function(h){const d=Y(h);d.da.add(4),await Jn(d),d.Va.set("Unknown"),d.da.delete(4),await or(d)}(this))})}),this.Va=new tE(s,r)}}async function or(n){if(Bt(n))for(const e of n.Aa)await e(!0)}async function Jn(n){for(const e of n.Aa)await e(!1)}function Yu(n,e){const t=Y(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),Xi(t)?Qi(t):cn(t).N_()&&Wi(t,e))}function Ki(n,e){const t=Y(n),s=cn(t);t.Ea.delete(e),s.N_()&&Ju(t,e),t.Ea.size===0&&(s.N_()?s.k_():Bt(t)&&t.Va.set("Unknown"))}function Wi(n,e){if(n.ma.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}cn(n).Z_(e)}function Ju(n,e){n.ma.Ke(e),cn(n).X_(e)}function Qi(n){n.ma=new Xv({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n.Ea.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),cn(n).start(),n.Va.ca()}function Xi(n){return Bt(n)&&!cn(n).O_()&&n.Ea.size>0}function Bt(n){return Y(n).da.size===0}function Zu(n){n.ma=void 0}async function sE(n){n.Va.set("Online")}async function rE(n){n.Ea.forEach((e,t)=>{Wi(n,e)})}async function iE(n,e){Zu(n),Xi(n)?(n.Va.Pa(e),Qi(n)):n.Va.set("Unknown")}async function oE(n,e,t){if(n.Va.set("Online"),e instanceof $u&&e.state===2&&e.cause)try{await async function(r,o){const a=o.cause;for(const u of o.targetIds)r.Ea.has(u)&&(await r.remoteSyncer.rejectListen(u,a),r.Ea.delete(u),r.ma.removeTarget(u))}(n,e)}catch(s){F($t,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Hs(n,s)}else if(e instanceof Rs?n.ma.Xe(e):e instanceof Ou?n.ma.ot(e):n.ma.nt(e),!t.isEqual(X.min()))try{const s=await Wu(n.localStore);t.compareTo(s)>=0&&await function(o,a){const u=o.ma.It(a);return u.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.Ea.get(d);p&&o.Ea.set(d,p.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,d)=>{const p=o.Ea.get(h);if(!p)return;o.Ea.set(h,p.withResumeToken(Ve.EMPTY_BYTE_STRING,p.snapshotVersion)),Ju(o,h);const _=new ft(p.target,h,d,p.sequenceNumber);Wi(o,_)}),o.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(s){F($t,"Failed to raise snapshot:",s),await Hs(n,s)}}async function Hs(n,e,t){if(!un(e))throw e;n.da.add(1),await Jn(n),n.Va.set("Offline"),t||(t=()=>Wu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{F($t,"Retrying IndexedDB access"),await t(),n.da.delete(1),await or(n)})}function ec(n,e){return e().catch(t=>Hs(n,t,e))}async function ar(n){const e=Y(n),t=wt(e);let s=e.Ia.length>0?e.Ia[e.Ia.length-1].batchId:Ni;for(;aE(e);)try{const r=await jy(e.localStore,s);if(r===null){e.Ia.length===0&&t.k_();break}s=r.batchId,lE(e,r)}catch(r){await Hs(e,r)}tc(e)&&nc(e)}function aE(n){return Bt(n)&&n.Ia.length<10}function lE(n,e){n.Ia.push(e);const t=wt(n);t.N_()&&t.ea&&t.ta(e.mutations)}function tc(n){return Bt(n)&&!wt(n).O_()&&n.Ia.length>0}function nc(n){wt(n).start()}async function uE(n){wt(n).ia()}async function cE(n){const e=wt(n);for(const t of n.Ia)e.ta(t.mutations)}async function hE(n,e,t){const s=n.Ia.shift(),r=Bi.from(s,e,t);await ec(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await ar(n)}async function dE(n,e){e&&wt(n).ea&&await async function(s,r){if(function(a){return Wv(a)&&a!==O.ABORTED}(r.code)){const o=s.Ia.shift();wt(s).L_(),await ec(s,()=>s.remoteSyncer.rejectFailedWrite(o.batchId,r)),await ar(s)}}(n,e),tc(n)&&nc(n)}async function cl(n,e){const t=Y(n);t.asyncQueue.verifyOperationInProgress(),F($t,"RemoteStore received new credentials");const s=Bt(t);t.da.add(3),await Jn(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await or(t)}async function fE(n,e){const t=Y(n);e?(t.da.delete(2),await or(t)):e||(t.da.add(2),await Jn(t),t.Va.set("Unknown"))}function cn(n){return n.fa||(n.fa=function(t,s,r){const o=Y(t);return o.oa(),new Yy(s,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,r)}(n.datastore,n.asyncQueue,{e_:sE.bind(null,n),n_:rE.bind(null,n),i_:iE.bind(null,n),Y_:oE.bind(null,n)}),n.Aa.push(async e=>{e?(n.fa.L_(),Xi(n)?Qi(n):n.Va.set("Unknown")):(await n.fa.stop(),Zu(n))})),n.fa}function wt(n){return n.ga||(n.ga=function(t,s,r){const o=Y(t);return o.oa(),new Jy(s,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,r)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:uE.bind(null,n),i_:dE.bind(null,n),na:cE.bind(null,n),ra:hE.bind(null,n)}),n.Aa.push(async e=>{e?(n.ga.L_(),await ar(n)):(await n.ga.stop(),n.Ia.length>0&&(F($t,`Stopping write stream with ${n.Ia.length} pending writes`),n.Ia=[]))})),n.ga}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,t,s,r,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=o,this.deferred=new vt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,o){const a=Date.now()+s,u=new Yi(e,t,a,r,o);return u.start(s),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ji(n,e){if(ot("AsyncQueue",`${e}: ${n}`),un(n))return new z(O.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{static emptySet(e){return new Yt(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||G.comparator(t.key,s.key):(t,s)=>G.comparator(t.key,s.key),this.keyedMap=Rn(),this.sortedSet=new pe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Yt)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,o=s.getNext().key;if(!r.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Yt;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(){this.pa=new pe(G.comparator)}track(e){const t=e.doc.key,s=this.pa.get(t);s?e.type!==0&&s.type===3?this.pa=this.pa.insert(t,e):e.type===3&&s.type!==1?this.pa=this.pa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.pa=this.pa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.pa=this.pa.remove(t):e.type===1&&s.type===2?this.pa=this.pa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):W(63341,{Vt:e,ya:s}):this.pa=this.pa.insert(t,e)}wa(){const e=[];return this.pa.inorderTraversal((t,s)=>{e.push(s)}),e}}class sn{constructor(e,t,s,r,o,a,u,h,d){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(e,t,s,r,o){const a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new sn(e,t,Yt.emptySet(t),a,s,r,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&er(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class mE{constructor(){this.queries=dl(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const r=Y(t),o=r.queries;r.queries=dl(),o.forEach((a,u)=>{for(const h of u.Sa)h.onError(s)})})(this,new z(O.ABORTED,"Firestore shutting down"))}}function dl(){return new Ft(n=>Tu(n),er)}async function gE(n,e){const t=Y(n);let s=3;const r=e.query;let o=t.queries.get(r);o?!o.Da()&&e.va()&&(s=2):(o=new pE,s=e.va()?0:1);try{switch(s){case 0:o.ba=await t.onListen(r,!0);break;case 1:o.ba=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(a){const u=Ji(a,`Initialization of query '${Gt(e.query)}' failed`);return void e.onError(u)}t.queries.set(r,o),o.Sa.push(e),e.Fa(t.onlineState),o.ba&&e.Ma(o.ba)&&Zi(t)}async function _E(n,e){const t=Y(n),s=e.query;let r=3;const o=t.queries.get(s);if(o){const a=o.Sa.indexOf(e);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?r=e.va()?0:1:!o.Da()&&e.va()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function vE(n,e){const t=Y(n);let s=!1;for(const r of e){const o=r.query,a=t.queries.get(o);if(a){for(const u of a.Sa)u.Ma(r)&&(s=!0);a.ba=r}}s&&Zi(t)}function yE(n,e,t){const s=Y(n),r=s.queries.get(e);if(r)for(const o of r.Sa)o.onError(t);s.queries.delete(e)}function Zi(n){n.Ca.forEach(e=>{e.next()})}var mi,fl;(fl=mi||(mi={})).xa="default",fl.Cache="cache";class EE{constructor(e,t,s){this.query=e,this.Oa=t,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=s||{}}Ma(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new sn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Na?this.La(e)&&(this.Oa.next(e),t=!0):this.ka(e,this.onlineState)&&(this.qa(e),t=!0),this.Ba=e,t}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let t=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),t=!0),t}ka(e,t){if(!e.fromCache||!this.va())return!0;const s=t!=="Offline";return(!this.options.Qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}La(e){if(e.docChanges.length>0)return!0;const t=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}qa(e){e=sn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==mi.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e){this.key=e}}class rc{constructor(e){this.key=e}}class TE{constructor(e,t){this.query=e,this.Ha=t,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=se(),this.mutatedKeys=se(),this.Za=Iu(e),this.Xa=new Yt(this.Za)}get eu(){return this.Ha}tu(e,t){const s=t?t.nu:new hl,r=t?t.Xa:this.Xa;let o=t?t.mutatedKeys:this.mutatedKeys,a=r,u=!1;const h=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,d=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((p,_)=>{const y=r.get(p),S=tr(this.query,_)?_:null,N=!!y&&this.mutatedKeys.has(y.key),x=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let M=!1;y&&S?y.data.isEqual(S.data)?N!==x&&(s.track({type:3,doc:S}),M=!0):this.ru(y,S)||(s.track({type:2,doc:S}),M=!0,(h&&this.Za(S,h)>0||d&&this.Za(S,d)<0)&&(u=!0)):!y&&S?(s.track({type:0,doc:S}),M=!0):y&&!S&&(s.track({type:1,doc:y}),M=!0,(h||d)&&(u=!0)),M&&(S?(a=a.add(S),o=x?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),s.track({type:1,doc:p})}return{Xa:a,nu:s,Cs:u,mutatedKeys:o}}ru(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const o=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;const a=e.nu.wa();a.sort((p,_)=>function(S,N){const x=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W(20277,{Vt:M})}};return x(S)-x(N)}(p.type,_.type)||this.Za(p.doc,_.doc)),this.iu(s),r=r!=null&&r;const u=t&&!r?this.su():[],h=this.Ya.size===0&&this.current&&!r?1:0,d=h!==this.Ja;return this.Ja=h,a.length!==0||d?{snapshot:new sn(this.query,e.Xa,o,a,e.mutatedKeys,h===0,d,!1,!!s&&s.resumeToken.approximateByteSize()>0),ou:u}:{ou:u}}Fa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new hl,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}su(){if(!this.current)return[];const e=this.Ya;this.Ya=se(),this.Xa.forEach(s=>{this._u(s.key)&&(this.Ya=this.Ya.add(s.key))});const t=[];return e.forEach(s=>{this.Ya.has(s)||t.push(new rc(s))}),this.Ya.forEach(s=>{e.has(s)||t.push(new sc(s))}),t}au(e){this.Ha=e.$s,this.Ya=se();const t=this.tu(e.documents);return this.applyChanges(t,!0)}uu(){return sn.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const eo="SyncEngine";class IE{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class wE{constructor(e){this.key=e,this.cu=!1}}class AE{constructor(e,t,s,r,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.lu={},this.hu=new Ft(u=>Tu(u),er),this.Pu=new Map,this.Tu=new Set,this.Iu=new pe(G.comparator),this.Eu=new Map,this.du=new Hi,this.Au={},this.Ru=new Map,this.Vu=nn.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function bE(n,e,t=!0){const s=cc(n);let r;const o=s.hu.get(e);return o?(s.sharedClientState.addLocalQueryTarget(o.targetId),r=o.view.uu()):r=await ic(s,e,t,!0),r}async function PE(n,e){const t=cc(n);await ic(t,e,!0,!1)}async function ic(n,e,t,s){const r=await Hy(n.localStore,Ye(e)),o=r.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let u;return s&&(u=await SE(n,e,o,a==="current",r.resumeToken)),n.isPrimaryClient&&t&&Yu(n.remoteStore,r),u}async function SE(n,e,t,s,r){n.fu=(_,y,S)=>async function(x,M,J,Q){let ee=M.view.tu(J);ee.Cs&&(ee=await il(x.localStore,M.query,!1).then(({documents:w})=>M.view.tu(w,ee)));const fe=Q&&Q.targetChanges.get(M.targetId),Be=Q&&Q.targetMismatches.get(M.targetId)!=null,we=M.view.applyChanges(ee,x.isPrimaryClient,fe,Be);return ml(x,M.targetId,we.ou),we.snapshot}(n,_,y,S);const o=await il(n.localStore,e,!0),a=new TE(e,o.$s),u=a.tu(o.documents),h=Yn.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),d=a.applyChanges(u,n.isPrimaryClient,h);ml(n,t,d.ou);const p=new IE(e,t,a);return n.hu.set(e,p),n.Pu.has(t)?n.Pu.get(t).push(e):n.Pu.set(t,[e]),d.snapshot}async function VE(n,e,t){const s=Y(n),r=s.hu.get(e),o=s.Pu.get(r.targetId);if(o.length>1)return s.Pu.set(r.targetId,o.filter(a=>!er(a,e))),void s.hu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await fi(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),t&&Ki(s.remoteStore,r.targetId),gi(s,r.targetId)}).catch(ln)):(gi(s,r.targetId),await fi(s.localStore,r.targetId,!0))}async function RE(n,e){const t=Y(n),s=t.hu.get(e),r=t.Pu.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Ki(t.remoteStore,s.targetId))}async function kE(n,e,t){const s=$E(n);try{const r=await function(a,u){const h=Y(a),d=Ee.now(),p=u.reduce((S,N)=>S.add(N.key),se());let _,y;return h.persistence.runTransaction("Locally write mutations","readwrite",S=>{let N=at(),x=se();return h.Bs.getEntries(S,p).next(M=>{N=M,N.forEach((J,Q)=>{Q.isValidDocument()||(x=x.add(J))})}).next(()=>h.localDocuments.getOverlayedDocuments(S,N)).next(M=>{_=M;const J=[];for(const Q of u){const ee=Hv(Q,_.get(Q.key).overlayedDocument);ee!=null&&J.push(new St(Q.key,ee,pu(ee.value.mapValue),Je.exists(!0)))}return h.mutationQueue.addMutationBatch(S,d,J,u)}).next(M=>{y=M;const J=M.applyToLocalDocumentSet(_,x);return h.documentOverlayCache.saveOverlays(S,M.batchId,J)})}).then(()=>({batchId:y.batchId,changes:Au(_)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(a,u,h){let d=a.Au[a.currentUser.toKey()];d||(d=new pe(te)),d=d.insert(u,h),a.Au[a.currentUser.toKey()]=d}(s,r.batchId,t),await Zn(s,r.changes),await ar(s.remoteStore)}catch(r){const o=Ji(r,"Failed to persist write");t.reject(o)}}async function oc(n,e){const t=Y(n);try{const s=await By(t.localStore,e);e.targetChanges.forEach((r,o)=>{const a=t.Eu.get(o);a&&(ce(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?a.cu=!0:r.modifiedDocuments.size>0?ce(a.cu,14607):r.removedDocuments.size>0&&(ce(a.cu,42227),a.cu=!1))}),await Zn(t,s,e)}catch(s){await ln(s)}}function pl(n,e,t){const s=Y(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.hu.forEach((o,a)=>{const u=a.view.Fa(e);u.snapshot&&r.push(u.snapshot)}),function(a,u){const h=Y(a);h.onlineState=u;let d=!1;h.queries.forEach((p,_)=>{for(const y of _.Sa)y.Fa(u)&&(d=!0)}),d&&Zi(h)}(s.eventManager,e),r.length&&s.lu.Y_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function CE(n,e,t){const s=Y(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Eu.get(e),o=r&&r.key;if(o){let a=new pe(G.comparator);a=a.insert(o,Me.newNoDocument(o,X.min()));const u=se().add(o),h=new rr(X.min(),new Map,new pe(te),a,u);await oc(s,h),s.Iu=s.Iu.remove(o),s.Eu.delete(e),to(s)}else await fi(s.localStore,e,!1).then(()=>gi(s,e,t)).catch(ln)}async function DE(n,e){const t=Y(n),s=e.batch.batchId;try{const r=await Fy(t.localStore,e);lc(t,s,null),ac(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Zn(t,r)}catch(r){await ln(r)}}async function NE(n,e,t){const s=Y(n);try{const r=await function(a,u){const h=Y(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return h.mutationQueue.lookupMutationBatch(d,u).next(_=>(ce(_!==null,37113),p=_.keys(),h.mutationQueue.removeMutationBatch(d,_))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,p,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>h.localDocuments.getDocuments(d,p))})}(s.localStore,e);lc(s,e,t),ac(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Zn(s,r)}catch(r){await ln(r)}}function ac(n,e){(n.Ru.get(e)||[]).forEach(t=>{t.resolve()}),n.Ru.delete(e)}function lc(n,e,t){const s=Y(n);let r=s.Au[s.currentUser.toKey()];if(r){const o=r.get(e);o&&(t?o.reject(t):o.resolve(),r=r.remove(e)),s.Au[s.currentUser.toKey()]=r}}function gi(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Pu.get(e))n.hu.delete(s),t&&n.lu.gu(s,t);n.Pu.delete(e),n.isPrimaryClient&&n.du.Hr(e).forEach(s=>{n.du.containsKey(s)||uc(n,s)})}function uc(n,e){n.Tu.delete(e.path.canonicalString());const t=n.Iu.get(e);t!==null&&(Ki(n.remoteStore,t),n.Iu=n.Iu.remove(e),n.Eu.delete(t),to(n))}function ml(n,e,t){for(const s of t)s instanceof sc?(n.du.addReference(s.key,e),LE(n,s)):s instanceof rc?(F(eo,"Document no longer in limbo: "+s.key),n.du.removeReference(s.key,e),n.du.containsKey(s.key)||uc(n,s.key)):W(19791,{pu:s})}function LE(n,e){const t=e.key,s=t.path.canonicalString();n.Iu.get(t)||n.Tu.has(s)||(F(eo,"New document in limbo: "+t),n.Tu.add(s),to(n))}function to(n){for(;n.Tu.size>0&&n.Iu.size<n.maxConcurrentLimboResolutions;){const e=n.Tu.values().next().value;n.Tu.delete(e);const t=new G(ge.fromString(e)),s=n.Vu.next();n.Eu.set(s,new wE(t)),n.Iu=n.Iu.insert(t,s),Yu(n.remoteStore,new ft(Ye(xi(t.path)),s,"TargetPurposeLimboResolution",Xs.le))}}async function Zn(n,e,t){const s=Y(n),r=[],o=[],a=[];s.hu.isEmpty()||(s.hu.forEach((u,h)=>{a.push(s.fu(h,e,t).then(d=>{var p;if((d||t)&&s.isPrimaryClient){const _=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(h.targetId))===null||p===void 0?void 0:p.current;s.sharedClientState.updateQueryState(h.targetId,_?"current":"not-current")}if(d){r.push(d);const _=zi.Rs(h.targetId,d);o.push(_)}}))}),await Promise.all(a),s.lu.Y_(r),await async function(h,d){const p=Y(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",_=>D.forEach(d,y=>D.forEach(y.ds,S=>p.persistence.referenceDelegate.addReference(_,y.targetId,S)).next(()=>D.forEach(y.As,S=>p.persistence.referenceDelegate.removeReference(_,y.targetId,S)))))}catch(_){if(!un(_))throw _;F(Gi,"Failed to update sequence numbers: "+_)}for(const _ of d){const y=_.targetId;if(!_.fromCache){const S=p.xs.get(y),N=S.snapshotVersion,x=S.withLastLimboFreeSnapshotVersion(N);p.xs=p.xs.insert(y,x)}}}(s.localStore,o))}async function ME(n,e){const t=Y(n);if(!t.currentUser.isEqual(e)){F(eo,"User change. New user:",e.toKey());const s=await Ku(t.localStore,e);t.currentUser=e,function(o,a){o.Ru.forEach(u=>{u.forEach(h=>{h.reject(new z(O.CANCELLED,a))})}),o.Ru.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Zn(t,s.ks)}}function OE(n,e){const t=Y(n),s=t.Eu.get(e);if(s&&s.cu)return se().add(s.key);{let r=se();const o=t.Pu.get(e);if(!o)return r;for(const a of o){const u=t.hu.get(a);r=r.unionWith(u.view.eu)}return r}}function cc(n){const e=Y(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=oc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=OE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=CE.bind(null,e),e.lu.Y_=vE.bind(null,e.eventManager),e.lu.gu=yE.bind(null,e.eventManager),e}function $E(n){const e=Y(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=DE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=NE.bind(null,e),e}class qs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ir(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,t){return null}Cu(e,t){return null}Du(e){return xy(this.persistence,new My,e.initialUser,this.serializer)}Su(e){return new Gu(qi.fi,this.serializer)}bu(e){return new zy}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}qs.provider={build:()=>new qs};class xE extends qs{constructor(e){super(),this.cacheSizeBytes=e}vu(e,t){ce(this.persistence.referenceDelegate instanceof js,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Ey(s,e.asyncQueue,t)}Su(e){const t=this.cacheSizeBytes!==void 0?xe.withCacheSize(this.cacheSizeBytes):xe.DEFAULT;return new Gu(s=>js.fi(s,t),this.serializer)}}class _i{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>pl(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=ME.bind(null,this.syncEngine),await fE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new mE}()}createDatastore(e){const t=ir(e.databaseInfo.databaseId),s=function(o){return new Xy(o)}(e.databaseInfo);return function(o,a,u,h){return new eE(o,a,u,h)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,r,o,a,u){return new nE(s,r,o,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>pl(this.syncEngine,t,0),function(){return ll.C()?new ll:new Gy}())}createSyncEngine(e,t){return function(r,o,a,u,h,d,p){const _=new AE(r,o,a,u,h,d);return p&&(_.mu=!0),_}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(r){const o=Y(r);F($t,"RemoteStore shutting down."),o.da.add(5),await Jn(o),o.Ra.shutdown(),o.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}_i.provider={build:()=>new _i};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):ot("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At="FirestoreClient";class BE{constructor(e,t,s,r,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=r,this.user=Le.UNAUTHENTICATED,this.clientId=ru.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(s,async a=>{F(At,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(s,a=>(F(At,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Ji(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function zr(n,e){n.asyncQueue.verifyOperationInProgress(),F(At,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Ku(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function gl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await UE(n);F(At,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>cl(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,r)=>cl(e.remoteStore,r)),n._onlineComponents=e}async function UE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){F(At,"Using user provided OfflineComponentProvider");try{await zr(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(r){return r.name==="FirebaseError"?r.code===O.FAILED_PRECONDITION||r.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(t))throw t;Jt("Error using user provided cache. Falling back to memory cache: "+t),await zr(n,new qs)}}else F(At,"Using default OfflineComponentProvider"),await zr(n,new xE(void 0));return n._offlineComponents}async function hc(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(F(At,"Using user provided OnlineComponentProvider"),await gl(n,n._uninitializedComponentsProvider._online)):(F(At,"Using default OnlineComponentProvider"),await gl(n,new _i))),n._onlineComponents}function jE(n){return hc(n).then(e=>e.syncEngine)}async function HE(n){const e=await hc(n),t=e.eventManager;return t.onListen=bE.bind(null,e.syncEngine),t.onUnlisten=VE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=PE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=RE.bind(null,e.syncEngine),t}function qE(n,e,t={}){const s=new vt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const p=new FE({next:y=>{p.xu(),a.enqueueAndForget(()=>_E(o,_));const S=y.docs.has(u);!S&&y.fromCache?d.reject(new z(O.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&y.fromCache&&h&&h.source==="server"?d.reject(new z(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(y)},error:y=>d.reject(y)}),_=new EE(xi(u.path),p,{includeMetadataChanges:!0,Qa:!0});return gE(o,_)}(await HE(n),n.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(n,e,t){if(!t)throw new z(O.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function GE(n,e,t,s){if(e===!0&&s===!0)throw new z(O.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function vl(n){if(!G.isDocumentKey(n))throw new z(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function no(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":W(12329,{type:typeof n})}function xt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new z(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=no(n);throw new z(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc="firestore.googleapis.com",yl=!0;class El{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new z(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=fc,this.ssl=yl}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:yl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=zu;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<vy)throw new z(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}GE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dc((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new z(O.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new z(O.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new z(O.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class so{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new El({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new El(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new W_;switch(s.type){case"firstParty":return new J_(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new z(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=_l.get(t);s&&(F("ComponentProvider","Removing Datastore"),_l.delete(t),s.terminate())}(this),Promise.resolve()}}function KE(n,e,t,s={}){var r;n=xt(n,so);const o=ki(e),a=n._getSettings(),u=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),h=`${e}:${t}`;o&&(wg(`https://${h}`),Sg("Firestore",!0)),a.host!==fc&&a.host!==h&&Jt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:h,ssl:o,emulatorOptions:s});if(!Ds(d,u)&&(n._setSettings(d),s.mockUserToken)){let p,_;if(typeof s.mockUserToken=="string")p=s.mockUserToken,_=Le.MOCK_USER;else{p=Ag(s.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const y=s.mockUserToken.sub||s.mockUserToken.user_id;if(!y)throw new z(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new Le(y)}n._authCredentials=new Q_(new nu(p,_))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ro(this.firestore,e,this._query)}}class He{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new He(this.firestore,e,this._key)}}class Gn extends ro{constructor(e,t,s){super(e,t,xi(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new He(this.firestore,null,new G(e))}withConverter(e){return new Gn(this.firestore,e,this._path)}}function WE(n,e,...t){if(n=Mt(n),arguments.length===1&&(e=ru.newId()),zE("doc","path",e),n instanceof so){const s=ge.fromString(e,...t);return vl(s),new He(n,null,new G(s))}{if(!(n instanceof He||n instanceof Gn))throw new z(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ge.fromString(e,...t));return vl(s),new He(n.firestore,n instanceof Gn?n.converter:null,new G(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl="AsyncQueue";class Il{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new Qu(this,"async_queue_retry"),this.rc=()=>{const s=qr();s&&F(Tl,"Visibility state changed to "+s.visibilityState),this.x_.b_()},this.sc=e;const t=qr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const t=qr();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const t=new vt;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!un(e))throw e;F(Tl,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const t=this.sc.then(()=>(this.ec=!0,e().catch(s=>{throw this.Xu=s,this.ec=!1,ot("INTERNAL UNHANDLED ERROR: ",wl(s)),s}).then(s=>(this.ec=!1,s))));return this.sc=t,t}enqueueAfterDelay(e,t,s){this.oc(),this.nc.indexOf(e)>-1&&(t=0);const r=Yi.createAndSchedule(this,e,t,s,o=>this.uc(o));return this.Zu.push(r),r}oc(){this.Xu&&W(47125,{cc:wl(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const t of this.Zu)if(t.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.Zu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const t=this.Zu.indexOf(e);this.Zu.splice(t,1)}}function wl(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class lr extends so{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new Il,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Il(e),this._firestoreClient=void 0,await e}}}function QE(n,e){const t=typeof n=="object"?n:$_(),s=typeof n=="string"?n:Os,r=D_(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const o=Tg("firestore");o&&KE(r,...o)}return r}function pc(n){if(n._terminated)throw new z(O.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||XE(n),n._firestoreClient}function XE(n){var e,t,s;const r=n._freezeSettings(),o=function(u,h,d,p){return new fv(u,h,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,dc(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,r);n._componentsProvider||!((t=r.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),n._firestoreClient=new BE(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new rn(Ve.fromBase64String(e))}catch(t){throw new z(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new rn(Ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new z(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new z(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new z(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let o=0;o<s.length;++o)if(s[o]!==r[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE=/^__.*__$/;class JE{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new St(e,this.data,this.fieldMask,t,this.fieldTransforms):new Xn(e,this.data,t,this.fieldTransforms)}}class mc{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new St(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function gc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W(40011,{Ic:n})}}class ao{constructor(e,t,s,r,o,a){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,o===void 0&&this.Ec(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(e){return new ao(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.dc({path:s,Rc:!1});return r.Vc(e),r}mc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.dc({path:s,Rc:!1});return r.Ec(),r}fc(e){return this.dc({path:void 0,Rc:!0})}gc(e){return zs(e,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ec(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vc(this.path.get(e))}Vc(e){if(e.length===0)throw this.gc("Document fields must not be empty");if(gc(this.Ic)&&YE.test(e))throw this.gc('Document fields cannot begin and end with "__"')}}class ZE{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||ir(e)}bc(e,t,s,r=!1){return new ao({Ic:e,methodName:t,wc:s,path:Pe.emptyPath(),Rc:!1,yc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _c(n){const e=n._freezeSettings(),t=ir(n._databaseId);return new ZE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function eT(n,e,t,s,r,o={}){const a=n.bc(o.merge||o.mergeFields?2:0,e,t,r);uo("Data must be an object, but it was:",a,s);const u=vc(s,a);let h,d;if(o.merge)h=new je(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const _ of o.mergeFields){const y=vi(e,_,t);if(!a.contains(y))throw new z(O.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);Ec(p,y)||p.push(y)}h=new je(p),d=a.fieldTransforms.filter(_=>h.covers(_.field))}else h=null,d=a.fieldTransforms;return new JE(new Fe(u),h,d)}class hr extends cr{_toFieldTransform(e){if(e.Ic!==2)throw e.Ic===1?e.gc(`${this._methodName}() can only appear at the top level of your update data`):e.gc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof hr}}class lo extends cr{constructor(e,t){super(e),this.Dc=t}_toFieldTransform(e){const t=new zn(e.serializer,Su(e.serializer,this.Dc));return new Fv(e.path,t)}isEqual(e){return e instanceof lo&&this.Dc===e.Dc}}function tT(n,e,t,s){const r=n.bc(1,e,t);uo("Data must be an object, but it was:",r,s);const o=[],a=Fe.empty();Pt(s,(h,d)=>{const p=co(e,h,t);d=Mt(d);const _=r.mc(p);if(d instanceof hr)o.push(p);else{const y=dr(d,_);y!=null&&(o.push(p),a.set(p,y))}});const u=new je(o);return new mc(a,u,r.fieldTransforms)}function nT(n,e,t,s,r,o){const a=n.bc(1,e,t),u=[vi(e,s,t)],h=[r];if(o.length%2!=0)throw new z(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<o.length;y+=2)u.push(vi(e,o[y])),h.push(o[y+1]);const d=[],p=Fe.empty();for(let y=u.length-1;y>=0;--y)if(!Ec(d,u[y])){const S=u[y];let N=h[y];N=Mt(N);const x=a.mc(S);if(N instanceof hr)d.push(S);else{const M=dr(N,x);M!=null&&(d.push(S),p.set(S,M))}}const _=new je(d);return new mc(p,_,a.fieldTransforms)}function dr(n,e){if(yc(n=Mt(n)))return uo("Unsupported field value:",e,n),vc(n,e);if(n instanceof cr)return function(s,r){if(!gc(r.Ic))throw r.gc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.gc(`${s._methodName}() is not currently supported inside arrays`);const o=s._toFieldTransform(r);o&&r.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Rc&&e.Ic!==4)throw e.gc("Nested arrays are not supported");return function(s,r){const o=[];let a=0;for(const u of s){let h=dr(u,r.fc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,e)}return function(s,r){if((s=Mt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Su(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const o=Ee.fromDate(s);return{timestampValue:Us(r.serializer,o)}}if(s instanceof Ee){const o=new Ee(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Us(r.serializer,o)}}if(s instanceof io)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof rn)return{bytesValue:xu(r.serializer,s._byteString)};if(s instanceof He){const o=r.databaseId,a=s.firestore._databaseId;if(!a.isEqual(o))throw r.gc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ji(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof oo)return function(a,u){return{mapValue:{fields:{[du]:{stringValue:fu},[$s]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw u.gc("VectorValues must only contain numeric values.");return Fi(u.serializer,d)})}}}}}}(s,r);throw r.gc(`Unsupported field value: ${no(s)}`)}(n,e)}function vc(n,e){const t={};return ou(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pt(n,(s,r)=>{const o=dr(r,e.Ac(s));o!=null&&(t[s]=o)}),{mapValue:{fields:t}}}function yc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ee||n instanceof io||n instanceof rn||n instanceof He||n instanceof cr||n instanceof oo)}function uo(n,e,t){if(!yc(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const s=no(t);throw s==="an object"?e.gc(n+" a custom object"):e.gc(n+" "+s)}}function vi(n,e,t){if((e=Mt(e))instanceof ur)return e._internalPath;if(typeof e=="string")return co(n,e);throw zs("Field path arguments must be of type string or ",n,!1,void 0,t)}const sT=new RegExp("[~\\*/\\[\\]]");function co(n,e,t){if(e.search(sT)>=0)throw zs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ur(...e.split("."))._internalPath}catch{throw zs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function zs(n,e,t,s,r){const o=s&&!s.isEmpty(),a=r!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${s}`),a&&(h+=` in document ${r}`),h+=")"),new z(O.INVALID_ARGUMENT,u+n+h)}function Ec(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,t,s,r,o){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new He(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ic("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class rT extends Tc{data(){return super.data()}}function Ic(n,e){return typeof e=="string"?co(n,e):e instanceof ur?e._internalPath:e._delegate._internalPath}class iT{convertValue(e,t="none"){switch(It(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Tt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw W(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Pt(e,(r,o)=>{s[r]=this.convertValue(o,t)}),s}convertVectorValue(e){var t,s,r;const o=(r=(s=(t=e.fields)===null||t===void 0?void 0:t[$s].arrayValue)===null||s===void 0?void 0:s.values)===null||r===void 0?void 0:r.map(a=>_e(a.doubleValue));return new oo(o)}convertGeoPoint(e){return new io(_e(e.latitude),_e(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Js(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Bn(e));default:return null}}convertTimestamp(e){const t=Et(e);return new Ee(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=ge.fromString(e);ce(qu(s),9688,{name:e});const r=new Un(s.get(1),s.get(3)),o=new G(s.popFirst(5));return r.isEqual(t)||ot(`Document ${o} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(n,e,t){let s;return s=n?n.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wc extends Tc{constructor(e,t,s,r,o,a){super(e,t,s,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new lT(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Ic("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class lT extends wc{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(n){n=xt(n,He);const e=xt(n.firestore,lr);return qE(pc(e),n._key).then(t=>dT(e,n,t))}class uT extends iT{constructor(e){super(),this.firestore=e}convertBytes(e){return new rn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new He(this.firestore,null,t)}}function cT(n,e,t){n=xt(n,He);const s=xt(n.firestore,lr),r=oT(n.converter,e);return Ac(s,[eT(_c(s),"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,Je.none())])}function hT(n,e,t,...s){n=xt(n,He);const r=xt(n.firestore,lr),o=_c(r);let a;return a=typeof(e=Mt(e))=="string"||e instanceof ur?nT(o,"updateDoc",n._key,e,t,s):tT(o,"updateDoc",n._key,e),Ac(r,[a.toMutation(n._key,Je.exists(!0))])}function Ac(n,e){return function(s,r){const o=new vt;return s.asyncQueue.enqueueAndForget(async()=>kE(await jE(s),r,o)),o.promise}(pc(n),e)}function dT(n,e,t){const s=t.docs.get(e._key),r=new uT(n);return new wc(n,r,e._key,s,new aT(t.hasPendingWrites,t.fromCache),e.converter)}function fT(n){return new lo("increment",n)}(function(e,t=!0){(function(r){an=r})(O_),Ls(new $n("firestore",(s,{instanceIdentifier:r,options:o})=>{const a=s.getProvider("app").getImmediate(),u=new lr(new X_(s.getProvider("auth-internal")),new Z_(a,s.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new z(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Un(d.options.projectId,p)}(a,r),a);return o=Object.assign({useFetchStreams:t},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),Xt(Ra,ka,e),Xt(Ra,ka,"esm2017")})();var pT="firebase",mT="11.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt(pT,mT,"app");const gT={apiKey:"AIzaSyA7DEXo4vLvGinpIrOhhCXtoawV0l4zBBc",authDomain:"holybear-goodbad.firebaseapp.com",projectId:"holybear-goodbad",storageBucket:"holybear-goodbad.appspot.com",messagingSenderId:"227880753618",appId:"1:227880753618:web:280ac7b02894ea857cd00b",measurementId:"G-1FQ8WE5HHE"},_T=Gl(gT),vT=QE(_T);async function bl(n,e={}){try{const t=WE(vT,"views",n),s=await Al(t);return e.onlyRead?s.exists()&&s.data().count||0:s.exists()?(await hT(t,{count:fT(1)}),(await Al(t)).data().count||0):(await cT(t,{count:1}),1)}catch(t){throw console.error("[view-count.js] Firestore error:",t),t}}const yT={class:"view-count"},ET={__name:"ViewCounter",props:{slug:String},setup(n){const e=n,t=Z(null);function s(a){return JSON.parse(localStorage.getItem("viewedSlugs")||"[]").includes(a)}function r(a){const u=JSON.parse(localStorage.getItem("viewedSlugs")||"[]");u.includes(a)||(u.push(a),localStorage.setItem("viewedSlugs",JSON.stringify(u)))}async function o(a){if(a)try{s(a)?t.value=await bl(a,{onlyRead:!0}):(t.value=await bl(a),r(a))}catch(u){t.value="錯誤",console.error("[ViewCounter] 讀取失敗:",u)}else t.value="無slug",console.warn("[ViewCounter] slug 為空")}return Ke(()=>{o(e.slug)}),qe(()=>e.slug,(a,u)=>{a&&a!==u&&o(a)}),(a,u)=>(T(),R("span",yT,[u[0]||(u[0]=C("img",{src:vh,alt:"人氣",class:"fire-icon",title:"人氣"},null,-1)),Ge(" "+re(t.value===null?"載入中...":t.value),1)]))}},TT=q(ET,[["__scopeId","data-v-743f918c"]]),IT={key:0,class:"blog-post-header-injected"},wT={class:"blog-post-title"},AT={key:0,class:"blog-post-meta-row"},bT={class:"blog-post-date-in-content"},PT={style:{float:"right"}},ST={__name:"MyCustomLayout",setup(n){const{frontmatter:e,page:t}=Gs(),s=K(()=>t.value&&(t.value.path==="/"||t.value.path==="/index.html")),r=K(()=>e.value?e.value.title||"無標題文章":"frontmatter.value is UNDEFINED"),o=K(()=>{var u,h,d;return((u=e.value)==null?void 0:u.slug)||((h=t.value)==null?void 0:h.path)||((d=e.value)==null?void 0:d.title)||"unknown"}),a=K(()=>{var u;if((u=e.value)!=null&&u.date){const h=new Date(e.value.date),d=new Date(h.toLocaleString("en-US",{timeZone:"Asia/Taipei"})),p=d.getFullYear(),_=String(d.getMonth()+1).padStart(2,"0"),y=String(d.getDate()).padStart(2,"0"),S=String(d.getHours()).padStart(2,"0"),N=String(d.getMinutes()).padStart(2,"0");return`${p}-${_}-${y} ${S}:${N}`}return""});return(u,h)=>{const d=bt("ClientOnly");return T(),H(A(tg).Layout,null,{"doc-before":L(()=>[s.value?B("",!0):(T(),R("div",IT,[C("h1",wT,re(r.value),1),A(e).category&&A(e).category.length||A(e).tag&&A(e).tag.length?(T(),R("div",AT,[(T(!0),R(le,null,Se(A(e).category,p=>(T(),R("span",{key:"cat-"+p,class:"category"},re(p),1))),128)),(T(!0),R(le,null,Se(A(e).tag,p=>(T(),R("span",{key:"tag-"+p,class:"tag"},re(p),1))),128))])):B("",!0),C("p",bT,[A(e).author?(T(),R(le,{key:0},[Ge("作者："+re(A(e).author),1)],64)):B("",!0),A(e).author&&a.value?(T(),R(le,{key:1},[Ge("｜")],64)):B("",!0),a.value?(T(),R(le,{key:2},[Ge(re(a.value),1)],64)):B("",!0),C("span",PT,[U(d,null,{default:L(()=>[U(TT,{slug:o.value},null,8,["slug"])]),_:1})])]),h[0]||(h[0]=C("div",{class:"blog-post-date-divider"},null,-1))]))]),"doc-after":L(()=>[U(d,null,{default:L(()=>[U(cg),U(ig)]),_:1})]),_:1})}}},VT=q(ST,[["__scopeId","data-v-0eb83b7b"]]),CT={Layout:VT};export{CT as R};
