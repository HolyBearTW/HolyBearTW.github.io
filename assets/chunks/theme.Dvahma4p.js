import{d as j,c as R,o as E,r as k,n as ue,a as He,t as Z,b as H,T as yi,w as N,e as B,_ as q,u as Gs,i as oh,f as ah,g as Ei,h as K,j as C,k as b,l as Lt,m as da,p as Ke,q as lh,s as Ti,v as uh,x as ne,y as ze,z as Ks,A as Ii,B as wi,C as Pl,D as Kn,E as Wn,F as fa,G as bt,H as le,I as Se,J as U,K as Sl,L as Qe,M as pt,N as Ws,O as ch,P as Vl,Q as hh,R as Rl,S as kl,U as dh,V as Cl,W as Dl,X as fh,Y as ph,Z as mh,$ as gh,a0 as _h,a1 as pa,a2 as ma,a3 as vh}from"./framework.BLGVq54j.js";const yh=j({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(s){return(e,t)=>(E(),R("span",{class:ue(["VPBadge",e.type])},[k(e.$slots,"default",{},()=>[He(Z(e.text),1)])],2))}}),Eh={key:0,class:"VPBackdrop"},Th=j({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(s){return(e,t)=>(E(),H(yi,{name:"fade"},{default:N(()=>[e.show?(E(),R("div",Eh)):B("",!0)]),_:1}))}}),Ih=q(Th,[["__scopeId","data-v-54a304ca"]]),se=Gs;function wh(s,e){let t,n=!1;return()=>{t&&clearTimeout(t),n?t=setTimeout(s,e):(s(),(n=!0)&&setTimeout(()=>n=!1,e))}}function Gr(s){return s.startsWith("/")?s:`/${s}`}function Ai(s){const{pathname:e,search:t,hash:n,protocol:r}=new URL(s,"http://a.com");if(oh(s)||s.startsWith("#")||!r.startsWith("http")||!ah(e))return s;const{site:o}=se(),a=e.endsWith("/")||e.endsWith(".html")?s:s.replace(/(?:(^\.+)\/)?.*$/,`$1${e.replace(/(\.md)?$/,o.value.cleanUrls?"":".html")}${t}${n}`);return Ei(a)}function Qn({correspondingLink:s=!1}={}){const{site:e,localeIndex:t,page:n,theme:r,hash:o}=se(),a=K(()=>{var h,d;return{label:(h=e.value.locales[t.value])==null?void 0:h.label,link:((d=e.value.locales[t.value])==null?void 0:d.link)||(t.value==="root"?"/":`/${t.value}/`)}});return{localeLinks:K(()=>Object.entries(e.value.locales).flatMap(([h,d])=>a.value.label===d.label?[]:{text:d.label,link:Ah(d.link||(h==="root"?"/":`/${h}/`),r.value.i18nRouting!==!1&&s,n.value.relativePath.slice(a.value.link.length-1),!e.value.cleanUrls)+o.value})),currentLang:a}}function Ah(s,e,t,n){return e?s.replace(/\/$/,"")+Gr(t.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,n?".html":"")):s}const bh={class:"NotFound"},Ph={class:"code"},Sh={class:"title"},Vh={class:"quote"},Rh={class:"action"},kh=["href","aria-label"],Ch=j({__name:"NotFound",setup(s){const{theme:e}=se(),{currentLang:t}=Qn();return(n,r)=>{var o,a,u,h,d,p;return E(),R("div",bh,[C("p",Ph,Z(((o=b(e).notFound)==null?void 0:o.code)??"404"),1),C("h1",Sh,Z(((a=b(e).notFound)==null?void 0:a.title)??"PAGE NOT FOUND"),1),r[0]||(r[0]=C("div",{class:"divider"},null,-1)),C("blockquote",Vh,Z(((u=b(e).notFound)==null?void 0:u.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),C("div",Rh,[C("a",{class:"link",href:b(Ei)(((h=b(e).notFound)==null?void 0:h.link)??b(t).link),"aria-label":((d=b(e).notFound)==null?void 0:d.linkLabel)??"go to home"},Z(((p=b(e).notFound)==null?void 0:p.linkText)??"Take me home"),9,kh)])])}}}),Dh=q(Ch,[["__scopeId","data-v-b0126292"]]);function Nl(s,e){if(Array.isArray(s))return As(s);if(s==null)return[];e=Gr(e);const t=Object.keys(s).sort((r,o)=>o.split("/").length-r.split("/").length).find(r=>e.startsWith(Gr(r))),n=t?s[t]:[];return Array.isArray(n)?As(n):As(n.items,n.base)}function Nh(s){const e=[];let t=0;for(const n in s){const r=s[n];if(r.items){t=e.push(r);continue}e[t]||e.push({items:[]}),e[t].items.push(r)}return e}function Lh(s){const e=[];function t(n){for(const r of n)r.text&&r.link&&e.push({text:r.text,link:r.link,docFooterText:r.docFooterText}),r.items&&t(r.items)}return t(s),e}function Kr(s,e){return Array.isArray(e)?e.some(t=>Kr(s,t)):Lt(s,e.link)?!0:e.items?Kr(s,e.items):!1}function As(s,e){return[...s].map(t=>{const n={...t},r=n.base||e;return r&&n.link&&(n.link=r+n.link),n.items&&(n.items=As(n.items,r)),n})}function Mh(){const{hasSidebar:s}=lt(),e=da("(min-width: 960px)"),t=da("(min-width: 1280px)");return{isAsideEnabled:K(()=>!t.value&&!e.value?!1:s.value?t.value:e.value)}}const Oh=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,Wr=[];function Ll(s){return typeof s.outline=="object"&&!Array.isArray(s.outline)&&s.outline.label||s.outlineTitle||"On this page"}function $h(s){const e=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(t=>t.id&&t.hasChildNodes()).map(t=>{const n=Number(t.tagName[1]);return{element:t,title:xh(t),link:"#"+t.id,level:n}});return Fh(e,s)}function xh(s){let e="";for(const t of s.childNodes)if(t.nodeType===1){if(Oh.test(t.className))continue;e+=t.textContent}else t.nodeType===3&&(e+=t.textContent);return e.trim()}function Fh(s,e){if(e===!1)return[];const t=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[n,r]=typeof t=="number"?[t,t]:t==="deep"?[2,6]:t;return jh(s,n,r)}function Bh(s,e){const{isAsideEnabled:t}=Mh(),n=wh(o,100);let r=null;Ke(()=>{requestAnimationFrame(o),window.addEventListener("scroll",n)}),lh(()=>{a(location.hash)}),Ti(()=>{window.removeEventListener("scroll",n)});function o(){if(!t.value)return;const u=window.scrollY,h=window.innerHeight,d=document.body.offsetHeight,p=Math.abs(u+h-d)<1,_=Wr.map(({element:V,link:M})=>({link:M,top:Uh(V)})).filter(({top:V})=>!Number.isNaN(V)).sort((V,M)=>V.top-M.top);if(!_.length){a(null);return}if(u<1){a(null);return}if(p){a(_[_.length-1].link);return}let y=null;for(const{link:V,top:M}of _){if(M>u+uh()+4)break;y=V}a(y)}function a(u){r&&r.classList.remove("active"),u==null?r=null:r=s.value.querySelector(`a[href="${decodeURIComponent(u)}"]`);const h=r;h?(h.classList.add("active"),e.value.style.top=h.offsetTop+39+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function Uh(s){let e=0;for(;s!==document.body;){if(s===null)return NaN;e+=s.offsetTop,s=s.offsetParent}return e}function jh(s,e,t){Wr.length=0;const n=[],r=[];return s.forEach(o=>{const a={...o,children:[]};let u=r[r.length-1];for(;u&&u.level>=a.level;)r.pop(),u=r[r.length-1];if(a.element.classList.contains("ignore-header")||u&&"shouldIgnore"in u){r.push({level:a.level,shouldIgnore:!0});return}a.level>t||a.level<e||(Wr.push({element:a.element,link:a.link}),u?u.children.push(a):n.push(a),r.push(a))}),n}const Qt=ne(!1);function Hh(s){let e;Ks(()=>{e=Qt.value?document.activeElement:void 0}),Ke(()=>{window.addEventListener("keyup",t)}),Ti(()=>{window.removeEventListener("keyup",t)});function t(n){n.key==="Escape"&&Qt.value&&(s(),e==null||e.focus())}}function qh(){function s(){Qt.value=!0}function e(){Qt.value=!1}function t(){Qt.value?e():s()}return{isOpen:Qt,open:s,close:e,toggle:t}}function zh(s){const{page:e,hash:t}=se(),n=ne(!1),r=K(()=>s.value.collapsed!=null),o=K(()=>!!s.value.link),a=ne(!1),u=()=>{a.value=Lt(e.value.relativePath,s.value.link)};ze([e,s,t],u),Ke(u);const h=K(()=>a.value?!0:s.value.items?Kr(e.value.relativePath,s.value.items):!1),d=K(()=>!!(s.value.items&&s.value.items.length));Ks(()=>{n.value=!!(r.value&&s.value.collapsed)}),Ii(()=>{(a.value||h.value)&&(n.value=!1)});function p(){r.value&&(n.value=!n.value)}return{collapsed:n,collapsible:r,isLink:o,isActiveLink:a,hasActiveLink:h,hasChildren:d,toggle:p}}const Qr=wi([]),Cn=wi([]),Xr=wi(!1);function lt(){const{frontmatter:s,theme:e}=se(),t=K(()=>!!(s.value.isHome??s.value.layout==="home")),n=K(()=>s.value.sidebar!==!1&&Cn.value.length>0&&!t.value),r=K(()=>n.value&&Xr.value),o=K(()=>n.value?Nh(Cn.value):[]),a=K(()=>t.value?!1:s.value.aside!=null?!!s.value.aside:e.value.aside!==!1),u=K(()=>a.value?s.value.aside==null?e.value.aside==="left":s.value.aside==="left":!1),h=K(()=>Qr.value.length>0);return{isHome:t,sidebar:fa(Cn),sidebarGroups:o,hasSidebar:n,isSidebarEnabled:r,hasAside:a,leftAside:u,headers:fa(Qr),hasLocalNav:h}}function Gh({closeSidebar:s}){const{frontmatter:e,page:t,theme:n}=se();ze(()=>[t.value.relativePath,n.value.sidebar],([o,a])=>{const u=a?Nl(a,o):[];JSON.stringify(u)!==JSON.stringify(Cn.value)&&(Cn.value=u)},{immediate:!0,deep:!0,flush:"sync"}),Pl(()=>{Qr.value=$h(e.value.outline??n.value.outline)}),Kn&&(Xr.value=window.innerWidth>=960,window.addEventListener("resize",()=>{Xr.value=window.innerWidth>=960},{passive:!0}));const r=Wn();ze(()=>r.path,s),Hh(s)}const Kh=["href","title"],Wh=j({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(s){function e({target:t}){const n=t.href.split("#")[1],r=document.getElementById(decodeURIComponent(n));r==null||r.focus({preventScroll:!0})}return(t,n)=>{const r=bt("VPDocOutlineItem",!0);return E(),R("ul",{class:ue(["VPDocOutlineItem",t.root?"root":"nested"])},[(E(!0),R(le,null,Se(t.headers,({children:o,link:a,title:u})=>(E(),R("li",null,[C("a",{class:"outline-link",href:a,onClick:e,title:u},Z(u),9,Kh),o!=null&&o.length?(E(),H(r,{key:0,headers:o},null,8,["headers"])):B("",!0)]))),256))],2)}}}),Ml=q(Wh,[["__scopeId","data-v-b7d7ef80"]]),Qh={class:"content"},Xh={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},Yh=j({__name:"VPDocAsideOutline",setup(s){const{theme:e}=se(),t=ne(),n=ne(),{headers:r,hasLocalNav:o}=lt();return Bh(t,n),(a,u)=>(E(),R("nav",{"aria-labelledby":"doc-outline-aria-label",class:ue(["VPDocAsideOutline",{"has-outline":b(o)}]),ref_key:"container",ref:t},[C("div",Qh,[C("div",{class:"outline-marker",ref_key:"marker",ref:n},null,512),C("div",Xh,Z(b(Ll)(b(e))),1),U(Ml,{headers:b(r),root:!0},null,8,["headers"])])],2))}}),Jh=q(Yh,[["__scopeId","data-v-c8b19031"]]),Zh={class:"VPDocAsideCarbonAds"},ed=j({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(s){const e=()=>null;return(t,n)=>(E(),R("div",Zh,[U(b(e),{"carbon-ads":t.carbonAds},null,8,["carbon-ads"])]))}}),td={class:"VPDocAside"},nd=j({__name:"VPDocAside",setup(s){const{theme:e}=se();return(t,n)=>(E(),R("div",td,[k(t.$slots,"aside-top",{},void 0,!0),k(t.$slots,"aside-outline-before",{},void 0,!0),U(Jh),k(t.$slots,"aside-outline-after",{},void 0,!0),n[0]||(n[0]=C("div",{class:"spacer"},null,-1)),k(t.$slots,"aside-ads-before",{},void 0,!0),b(e).carbonAds?(E(),H(ed,{key:0,"carbon-ads":b(e).carbonAds},null,8,["carbon-ads"])):B("",!0),k(t.$slots,"aside-ads-after",{},void 0,!0),k(t.$slots,"aside-bottom",{},void 0,!0)]))}}),sd=q(nd,[["__scopeId","data-v-cb998dce"]]);function rd(){const{theme:s,page:e}=se();return K(()=>{const{text:t="Edit this page",pattern:n=""}=s.value.editLink||{};let r;return typeof n=="function"?r=n(e.value):r=n.replace(/:path/g,e.value.filePath),{url:r,text:t}})}function id(){const{page:s,theme:e,frontmatter:t}=se();return K(()=>{var d,p,_,y,V,M,x,L;const n=Nl(e.value.sidebar,s.value.relativePath),r=Lh(n),o=od(r,J=>J.link.replace(/[?#].*$/,"")),a=o.findIndex(J=>Lt(s.value.relativePath,J.link)),u=((d=e.value.docFooter)==null?void 0:d.prev)===!1&&!t.value.prev||t.value.prev===!1,h=((p=e.value.docFooter)==null?void 0:p.next)===!1&&!t.value.next||t.value.next===!1;return{prev:u?void 0:{text:(typeof t.value.prev=="string"?t.value.prev:typeof t.value.prev=="object"?t.value.prev.text:void 0)??((_=o[a-1])==null?void 0:_.docFooterText)??((y=o[a-1])==null?void 0:y.text),link:(typeof t.value.prev=="object"?t.value.prev.link:void 0)??((V=o[a-1])==null?void 0:V.link)},next:h?void 0:{text:(typeof t.value.next=="string"?t.value.next:typeof t.value.next=="object"?t.value.next.text:void 0)??((M=o[a+1])==null?void 0:M.docFooterText)??((x=o[a+1])==null?void 0:x.text),link:(typeof t.value.next=="object"?t.value.next.link:void 0)??((L=o[a+1])==null?void 0:L.link)}}})}function od(s,e){const t=new Set;return s.filter(n=>{const r=e(n);return t.has(r)?!1:t.add(r)})}const Xe=j({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(s){const e=s,t=K(()=>e.tag??(e.href?"a":"span")),n=K(()=>e.href&&Sl.test(e.href)||e.target==="_blank");return(r,o)=>(E(),H(Qe(t.value),{class:ue(["VPLink",{link:r.href,"vp-external-link-icon":n.value,"no-icon":r.noIcon}]),href:r.href?b(Ai)(r.href):void 0,target:r.target??(n.value?"_blank":void 0),rel:r.rel??(n.value?"noreferrer":void 0)},{default:N(()=>[k(r.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),ad={class:"VPLastUpdated"},ld=["datetime"],ud=j({__name:"VPDocFooterLastUpdated",setup(s){const{theme:e,page:t,lang:n}=se(),r=K(()=>new Date(t.value.lastUpdated)),o=K(()=>r.value.toISOString()),a=ne("");return Ke(()=>{Ks(()=>{var u,h,d;a.value=new Intl.DateTimeFormat((h=(u=e.value.lastUpdated)==null?void 0:u.formatOptions)!=null&&h.forceLocale?n.value:void 0,((d=e.value.lastUpdated)==null?void 0:d.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(r.value)})}),(u,h)=>{var d;return E(),R("p",ad,[He(Z(((d=b(e).lastUpdated)==null?void 0:d.text)||b(e).lastUpdatedText||"Last updated")+": ",1),C("time",{datetime:o.value},Z(a.value),9,ld)])}}}),cd=q(ud,[["__scopeId","data-v-1bb0c8a8"]]),hd={key:0,class:"VPDocFooter"},dd={key:0,class:"edit-info"},fd={key:0,class:"edit-link"},pd={key:1,class:"last-updated"},md={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},gd={class:"pager"},_d=["innerHTML"],vd=["innerHTML"],yd={class:"pager"},Ed=["innerHTML"],Td=["innerHTML"],Id=j({__name:"VPDocFooter",setup(s){const{theme:e,page:t,frontmatter:n}=se(),r=rd(),o=id(),a=K(()=>e.value.editLink&&n.value.editLink!==!1),u=K(()=>t.value.lastUpdated),h=K(()=>a.value||u.value||o.value.prev||o.value.next);return(d,p)=>{var _,y,V,M;return h.value?(E(),R("footer",hd,[k(d.$slots,"doc-footer-before",{},void 0,!0),a.value||u.value?(E(),R("div",dd,[a.value?(E(),R("div",fd,[U(Xe,{class:"edit-link-button",href:b(r).url,"no-icon":!0},{default:N(()=>[p[0]||(p[0]=C("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),He(" "+Z(b(r).text),1)]),_:1,__:[0]},8,["href"])])):B("",!0),u.value?(E(),R("div",pd,[U(cd)])):B("",!0)])):B("",!0),(_=b(o).prev)!=null&&_.link||(y=b(o).next)!=null&&y.link?(E(),R("nav",md,[p[1]||(p[1]=C("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),C("div",gd,[(V=b(o).prev)!=null&&V.link?(E(),H(Xe,{key:0,class:"pager-link prev",href:b(o).prev.link},{default:N(()=>{var x;return[C("span",{class:"desc",innerHTML:((x=b(e).docFooter)==null?void 0:x.prev)||"Previous page"},null,8,_d),C("span",{class:"title",innerHTML:b(o).prev.text},null,8,vd)]}),_:1},8,["href"])):B("",!0)]),C("div",yd,[(M=b(o).next)!=null&&M.link?(E(),H(Xe,{key:0,class:"pager-link next",href:b(o).next.link},{default:N(()=>{var x;return[C("span",{class:"desc",innerHTML:((x=b(e).docFooter)==null?void 0:x.next)||"Next page"},null,8,Ed),C("span",{class:"title",innerHTML:b(o).next.text},null,8,Td)]}),_:1},8,["href"])):B("",!0)])])):B("",!0)])):B("",!0)}}}),wd=q(Id,[["__scopeId","data-v-1bcd8184"]]),Ad={class:"container"},bd={class:"aside-container"},Pd={class:"aside-content"},Sd={class:"content"},Vd={class:"content-container"},Rd={class:"main"},kd=j({__name:"VPDoc",setup(s){const{theme:e}=se(),t=Wn(),{hasSidebar:n,hasAside:r,leftAside:o}=lt(),a=K(()=>t.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(u,h)=>{const d=bt("Content");return E(),R("div",{class:ue(["VPDoc",{"has-sidebar":b(n),"has-aside":b(r)}])},[k(u.$slots,"doc-top",{},void 0,!0),C("div",Ad,[b(r)?(E(),R("div",{key:0,class:ue(["aside",{"left-aside":b(o)}])},[h[0]||(h[0]=C("div",{class:"aside-curtain"},null,-1)),C("div",bd,[C("div",Pd,[U(sd,null,{"aside-top":N(()=>[k(u.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":N(()=>[k(u.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":N(()=>[k(u.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":N(()=>[k(u.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":N(()=>[k(u.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":N(()=>[k(u.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):B("",!0),C("div",Sd,[C("div",Vd,[k(u.$slots,"doc-before",{},void 0,!0),C("main",Rd,[U(d,{class:ue(["vp-doc",[a.value,b(e).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),U(wd,null,{"doc-footer-before":N(()=>[k(u.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),k(u.$slots,"doc-after",{},void 0,!0)])])]),k(u.$slots,"doc-bottom",{},void 0,!0)],2)}}}),Cd=q(kd,[["__scopeId","data-v-d668f7cc"]]),Dd=j({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(s){const e=s,t=K(()=>e.href&&Sl.test(e.href)),n=K(()=>e.tag||(e.href?"a":"button"));return(r,o)=>(E(),H(Qe(n.value),{class:ue(["VPButton",[r.size,r.theme]]),href:r.href?b(Ai)(r.href):void 0,target:e.target??(t.value?"_blank":void 0),rel:e.rel??(t.value?"noreferrer":void 0)},{default:N(()=>[k(r.$slots,"default",{},()=>[He(Z(r.text),1)],!0)]),_:3},8,["class","href","target","rel"]))}}),Nd=q(Dd,[["__scopeId","data-v-58d3b43b"]]),Ld=["src","alt"],Md=j({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(s){return(e,t)=>{const n=bt("VPImage",!0);return e.image?(E(),R(le,{key:0},[typeof e.image=="string"||"src"in e.image?(E(),R("img",pt({key:0,class:"VPImage"},typeof e.image=="string"?e.$attrs:{...e.image,...e.$attrs},{src:b(Ei)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,Ld)):(E(),R(le,{key:1},[U(n,pt({class:"dark",image:e.image.dark,alt:e.image.alt},e.$attrs),null,16,["image","alt"]),U(n,pt({class:"light",image:e.image.light,alt:e.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):B("",!0)}}}),ks=q(Md,[["__scopeId","data-v-ab19afbb"]]),Od={class:"container"},$d={class:"main"},xd={class:"heading"},Fd=["innerHTML"],Bd=["innerHTML"],Ud=["innerHTML"],jd={key:0,class:"actions"},Hd={key:0,class:"image"},qd={class:"image-container"},zd=j({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(s){const e=Ws("hero-image-slot-exists");return(t,n)=>(E(),R("div",{class:ue(["VPHero",{"has-image":t.image||b(e)}])},[C("div",Od,[C("div",$d,[k(t.$slots,"home-hero-info-before",{},void 0,!0),k(t.$slots,"home-hero-info",{},()=>[C("h1",xd,[t.name?(E(),R("span",{key:0,innerHTML:t.name,class:"name clip"},null,8,Fd)):B("",!0),t.text?(E(),R("span",{key:1,innerHTML:t.text,class:"text"},null,8,Bd)):B("",!0)]),t.tagline?(E(),R("p",{key:0,innerHTML:t.tagline,class:"tagline"},null,8,Ud)):B("",!0)],!0),k(t.$slots,"home-hero-info-after",{},void 0,!0),t.actions?(E(),R("div",jd,[(E(!0),R(le,null,Se(t.actions,r=>(E(),R("div",{key:r.link,class:"action"},[U(Nd,{tag:"a",size:"medium",theme:r.theme,text:r.text,href:r.link,target:r.target,rel:r.rel},null,8,["theme","text","href","target","rel"])]))),128))])):B("",!0),k(t.$slots,"home-hero-actions-after",{},void 0,!0)]),t.image||b(e)?(E(),R("div",Hd,[C("div",qd,[n[0]||(n[0]=C("div",{class:"image-bg"},null,-1)),k(t.$slots,"home-hero-image",{},()=>[t.image?(E(),H(ks,{key:0,class:"image-src",image:t.image},null,8,["image"])):B("",!0)],!0)])])):B("",!0)])],2))}}),Gd=q(zd,[["__scopeId","data-v-8a17128e"]]),Kd=j({__name:"VPHomeHero",setup(s){const{frontmatter:e}=se();return(t,n)=>b(e).hero?(E(),H(Gd,{key:0,class:"VPHomeHero",name:b(e).hero.name,text:b(e).hero.text,tagline:b(e).hero.tagline,image:b(e).hero.image,actions:b(e).hero.actions},{"home-hero-info-before":N(()=>[k(t.$slots,"home-hero-info-before")]),"home-hero-info":N(()=>[k(t.$slots,"home-hero-info")]),"home-hero-info-after":N(()=>[k(t.$slots,"home-hero-info-after")]),"home-hero-actions-after":N(()=>[k(t.$slots,"home-hero-actions-after")]),"home-hero-image":N(()=>[k(t.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):B("",!0)}}),Wd={class:"box"},Qd={key:0,class:"icon"},Xd=["innerHTML"],Yd=["innerHTML"],Jd=["innerHTML"],Zd={key:4,class:"link-text"},ef={class:"link-text-value"},tf=j({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(s){return(e,t)=>(E(),H(Xe,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:N(()=>[C("article",Wd,[typeof e.icon=="object"&&e.icon.wrap?(E(),R("div",Qd,[U(ks,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(E(),H(ks,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(E(),R("div",{key:2,class:"icon",innerHTML:e.icon},null,8,Xd)):B("",!0),C("h2",{class:"title",innerHTML:e.title},null,8,Yd),e.details?(E(),R("p",{key:3,class:"details",innerHTML:e.details},null,8,Jd)):B("",!0),e.linkText?(E(),R("div",Zd,[C("p",ef,[He(Z(e.linkText)+" ",1),t[0]||(t[0]=C("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):B("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),nf=q(tf,[["__scopeId","data-v-02d1074d"]]),sf={key:0,class:"VPFeatures"},rf={class:"container"},of={class:"items"},af=j({__name:"VPFeatures",props:{features:{}},setup(s){const e=s,t=K(()=>{const n=e.features.length;if(n){if(n===2)return"grid-2";if(n===3)return"grid-3";if(n%3===0)return"grid-6";if(n>3)return"grid-4"}else return});return(n,r)=>n.features?(E(),R("div",sf,[C("div",rf,[C("div",of,[(E(!0),R(le,null,Se(n.features,o=>(E(),R("div",{key:o.title,class:ue(["item",[t.value]])},[U(nf,{icon:o.icon,title:o.title,details:o.details,link:o.link,"link-text":o.linkText,rel:o.rel,target:o.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):B("",!0)}}),lf=q(af,[["__scopeId","data-v-b1eea84a"]]),uf=j({__name:"VPHomeFeatures",setup(s){const{frontmatter:e}=se();return(t,n)=>b(e).features?(E(),H(lf,{key:0,class:"VPHomeFeatures",features:b(e).features},null,8,["features"])):B("",!0)}}),cf=j({__name:"VPHomeContent",setup(s){const{width:e}=ch({initialWidth:0,includeScrollbar:!1});return(t,n)=>(E(),R("div",{class:"vp-doc container",style:Vl(b(e)?{"--vp-offset":`calc(50% - ${b(e)/2}px)`}:{})},[k(t.$slots,"default",{},void 0,!0)],4))}}),hf=q(cf,[["__scopeId","data-v-c141a4bd"]]),df=j({__name:"VPHome",setup(s){const{frontmatter:e,theme:t}=se();return(n,r)=>{const o=bt("Content");return E(),R("div",{class:ue(["VPHome",{"external-link-icon-enabled":b(t).externalLinkIcon}])},[k(n.$slots,"home-hero-before",{},void 0,!0),U(Kd,null,{"home-hero-info-before":N(()=>[k(n.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":N(()=>[k(n.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":N(()=>[k(n.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":N(()=>[k(n.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":N(()=>[k(n.$slots,"home-hero-image",{},void 0,!0)]),_:3}),k(n.$slots,"home-hero-after",{},void 0,!0),k(n.$slots,"home-features-before",{},void 0,!0),U(uf),k(n.$slots,"home-features-after",{},void 0,!0),b(e).markdownStyles!==!1?(E(),H(hf,{key:0},{default:N(()=>[U(o)]),_:1})):(E(),H(o,{key:1}))],2)}}}),ff=q(df,[["__scopeId","data-v-e07eaea7"]]),pf={},mf={class:"VPPage"};function gf(s,e){const t=bt("Content");return E(),R("div",mf,[k(s.$slots,"page-top"),U(t),k(s.$slots,"page-bottom")])}const _f=q(pf,[["render",gf]]),vf=j({__name:"VPContent",setup(s){const{page:e,frontmatter:t}=se(),{isHome:n,hasSidebar:r}=lt();return(o,a)=>(E(),R("div",{class:ue(["VPContent",{"has-sidebar":b(r),"is-home":b(n)}]),id:"VPContent"},[b(e).isNotFound?k(o.$slots,"not-found",{key:0},()=>[U(Dh)],!0):b(t).layout==="page"?(E(),H(_f,{key:1},{"page-top":N(()=>[k(o.$slots,"page-top",{},void 0,!0)]),"page-bottom":N(()=>[k(o.$slots,"page-bottom",{},void 0,!0)]),_:3})):b(t).layout==="home"?(E(),H(ff,{key:2},{"home-hero-before":N(()=>[k(o.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":N(()=>[k(o.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":N(()=>[k(o.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":N(()=>[k(o.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":N(()=>[k(o.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":N(()=>[k(o.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":N(()=>[k(o.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":N(()=>[k(o.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":N(()=>[k(o.$slots,"home-features-after",{},void 0,!0)]),_:3})):b(t).layout&&b(t).layout!=="doc"?(E(),H(Qe(b(t).layout),{key:3})):(E(),H(Cd,{key:4},{"doc-top":N(()=>[k(o.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":N(()=>[k(o.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":N(()=>[k(o.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":N(()=>[k(o.$slots,"doc-before",{},void 0,!0)]),"doc-after":N(()=>[k(o.$slots,"doc-after",{},void 0,!0)]),"aside-top":N(()=>[k(o.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":N(()=>[k(o.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":N(()=>[k(o.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":N(()=>[k(o.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":N(()=>[k(o.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":N(()=>[k(o.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),yf=q(vf,[["__scopeId","data-v-2652e39a"]]),Ef={class:"container"},Tf=["innerHTML"],If=["innerHTML"],wf=j({__name:"VPFooter",setup(s){const{theme:e,frontmatter:t}=se(),{hasSidebar:n}=lt();return(r,o)=>b(e).footer&&b(t).footer!==!1?(E(),R("footer",{key:0,class:ue(["VPFooter",{"has-sidebar":b(n)}])},[C("div",Ef,[b(e).footer.message?(E(),R("p",{key:0,class:"message",innerHTML:b(e).footer.message},null,8,Tf)):B("",!0),b(e).footer.copyright?(E(),R("p",{key:1,class:"copyright",innerHTML:b(e).footer.copyright},null,8,If)):B("",!0)])],2)):B("",!0)}}),Af=q(wf,[["__scopeId","data-v-5b9946f5"]]),bf={class:"menu-text"},Pf={class:"header"},Sf={class:"outline"},Vf=j({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(s){const e=s,{theme:t}=se(),n=ne(!1),r=ne(0),o=ne(),a=ne();function u(_){var y;(y=o.value)!=null&&y.contains(_.target)||(n.value=!1)}ze(n,_=>{if(_){document.addEventListener("click",u);return}document.removeEventListener("click",u)}),hh("Escape",()=>{n.value=!1}),Pl(()=>{n.value=!1});function h(){n.value=!n.value,r.value=window.innerHeight+Math.min(window.scrollY-e.navHeight,0)}function d(_){_.target.classList.contains("outline-link")&&(a.value&&(a.value.style.transition="none"),Rl(()=>{n.value=!1}))}function p(){n.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(_,y)=>(E(),R("div",{class:"VPLocalNavOutlineDropdown",style:Vl({"--vp-vh":r.value+"px"}),ref_key:"main",ref:o},[_.headers.length>0?(E(),R("button",{key:0,onClick:h,class:ue({open:n.value})},[C("span",bf,Z(b(Ll)(b(t))),1),y[0]||(y[0]=C("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(E(),R("button",{key:1,onClick:p},Z(b(t).returnToTopLabel||"Return to top"),1)),U(yi,{name:"flyout"},{default:N(()=>[n.value?(E(),R("div",{key:0,ref_key:"items",ref:a,class:"items",onClick:d},[C("div",Pf,[C("a",{class:"top-link",href:"#",onClick:p},Z(b(t).returnToTopLabel||"Return to top"),1)]),C("div",Sf,[U(Ml,{headers:_.headers},null,8,["headers"])])],512)):B("",!0)]),_:1})],4))}}),Rf=q(Vf,[["__scopeId","data-v-92b7576c"]]),kf={class:"container"},Cf=["aria-expanded"],Df={class:"menu-text"},Nf=j({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(s){const{theme:e}=se(),{isHome:t,hasSidebar:n,headers:r,hasLocalNav:o}=lt(),{y:a}=kl(),u=ne(0);Ke(()=>{u.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))});const h=K(()=>({VPLocalNav:!0,"has-sidebar":n.value,empty:!o.value,fixed:!o.value&&!n.value}));return(d,p)=>!b(t)&&(b(o)||b(n)||b(a)>=u.value)?(E(),R("div",{key:0,class:ue(h.value)},[C("div",kf,[b(n)?(E(),R("button",{key:0,class:"menu","aria-expanded":d.open,"aria-controls":"VPSidebarNav",onClick:p[0]||(p[0]=_=>d.$emit("open-menu"))},[p[1]||(p[1]=C("span",{class:"vpi-align-left menu-icon"},null,-1)),C("span",Df,Z(b(e).sidebarMenuLabel||"Menu"),1)],8,Cf)):B("",!0),U(Rf,{headers:b(r),navHeight:u.value},null,8,["headers","navHeight"])])],2)):B("",!0)}}),Lf=q(Nf,[["__scopeId","data-v-6c0451ca"]]);function Mf(){const s=ne(!1);function e(){s.value=!0,window.addEventListener("resize",r)}function t(){s.value=!1,window.removeEventListener("resize",r)}function n(){s.value?t():e()}function r(){window.outerWidth>=768&&t()}const o=Wn();return ze(()=>o.path,t),{isScreenOpen:s,openScreen:e,closeScreen:t,toggleScreen:n}}const Of={},$f={class:"VPSwitch",type:"button",role:"switch"},xf={class:"check"},Ff={key:0,class:"icon"};function Bf(s,e){return E(),R("button",$f,[C("span",xf,[s.$slots.default?(E(),R("span",Ff,[k(s.$slots,"default",{},void 0,!0)])):B("",!0)])])}const Uf=q(Of,[["render",Bf],["__scopeId","data-v-b4ccac88"]]),jf=j({__name:"VPSwitchAppearance",setup(s){const{isDark:e,theme:t}=se(),n=Ws("toggle-appearance",()=>{e.value=!e.value}),r=ne("");return Ii(()=>{r.value=e.value?t.value.lightModeSwitchTitle||"Switch to light theme":t.value.darkModeSwitchTitle||"Switch to dark theme"}),(o,a)=>(E(),H(Uf,{title:r.value,class:"VPSwitchAppearance","aria-checked":b(e),onClick:b(n)},{default:N(()=>a[0]||(a[0]=[C("span",{class:"vpi-sun sun"},null,-1),C("span",{class:"vpi-moon moon"},null,-1)])),_:1,__:[0]},8,["title","aria-checked","onClick"]))}}),bi=q(jf,[["__scopeId","data-v-be9742d9"]]),Hf={key:0,class:"VPNavBarAppearance"},qf=j({__name:"VPNavBarAppearance",setup(s){const{site:e}=se();return(t,n)=>b(e).appearance&&b(e).appearance!=="force-dark"&&b(e).appearance!=="force-auto"?(E(),R("div",Hf,[U(bi)])):B("",!0)}}),zf=q(qf,[["__scopeId","data-v-3f90c1a5"]]),Pi=ne();let Ol=!1,$r=0;function Gf(s){const e=ne(!1);if(Kn){!Ol&&Kf(),$r++;const t=ze(Pi,n=>{var r,o,a;n===s.el.value||(r=s.el.value)!=null&&r.contains(n)?(e.value=!0,(o=s.onFocus)==null||o.call(s)):(e.value=!1,(a=s.onBlur)==null||a.call(s))});Ti(()=>{t(),$r--,$r||Wf()})}return dh(e)}function Kf(){document.addEventListener("focusin",$l),Ol=!0,Pi.value=document.activeElement}function Wf(){document.removeEventListener("focusin",$l)}function $l(){Pi.value=document.activeElement}const Qf={class:"VPMenuLink"},Xf=["innerHTML"],Yf=j({__name:"VPMenuLink",props:{item:{}},setup(s){const{page:e}=se();return(t,n)=>(E(),R("div",Qf,[U(Xe,{class:ue({active:b(Lt)(b(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon},{default:N(()=>[C("span",{innerHTML:t.item.text},null,8,Xf)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),Qs=q(Yf,[["__scopeId","data-v-7eeeb2dc"]]),Jf={class:"VPMenuGroup"},Zf={key:0,class:"title"},ep=j({__name:"VPMenuGroup",props:{text:{},items:{}},setup(s){return(e,t)=>(E(),R("div",Jf,[e.text?(E(),R("p",Zf,Z(e.text),1)):B("",!0),(E(!0),R(le,null,Se(e.items,n=>(E(),R(le,null,["link"in n?(E(),H(Qs,{key:0,item:n},null,8,["item"])):B("",!0)],64))),256))]))}}),tp=q(ep,[["__scopeId","data-v-383108e6"]]),np={class:"VPMenu"},sp={key:0,class:"items"},rp=j({__name:"VPMenu",props:{items:{}},setup(s){return(e,t)=>(E(),R("div",np,[e.items?(E(),R("div",sp,[(E(!0),R(le,null,Se(e.items,n=>(E(),R(le,{key:JSON.stringify(n)},["link"in n?(E(),H(Qs,{key:0,item:n},null,8,["item"])):"component"in n?(E(),H(Qe(n.component),pt({key:1,ref_for:!0},n.props),null,16)):(E(),H(tp,{key:2,text:n.text,items:n.items},null,8,["text","items"]))],64))),128))])):B("",!0),k(e.$slots,"default",{},void 0,!0)]))}}),ip=q(rp,[["__scopeId","data-v-2f78439e"]]),op=["aria-expanded","aria-label"],ap={key:0,class:"text"},lp=["innerHTML"],up={key:1,class:"vpi-more-horizontal icon"},cp={class:"menu"},hp=j({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(s){const e=ne(!1),t=ne();Gf({el:t,onBlur:n});function n(){e.value=!1}return(r,o)=>(E(),R("div",{class:"VPFlyout",ref_key:"el",ref:t,onMouseenter:o[1]||(o[1]=a=>e.value=!0),onMouseleave:o[2]||(o[2]=a=>e.value=!1)},[C("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":r.label,onClick:o[0]||(o[0]=a=>e.value=!e.value)},[r.button||r.icon?(E(),R("span",ap,[r.icon?(E(),R("span",{key:0,class:ue([r.icon,"option-icon"])},null,2)):B("",!0),r.button?(E(),R("span",{key:1,innerHTML:r.button},null,8,lp)):B("",!0),o[3]||(o[3]=C("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(E(),R("span",up))],8,op),C("div",cp,[U(ip,{items:r.items},{default:N(()=>[k(r.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),Si=q(hp,[["__scopeId","data-v-9bb987dd"]]),dp=["href","aria-label","innerHTML"],fp=j({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(s){const e=s,t=ne();Ke(async()=>{var o;await Rl();const r=(o=t.value)==null?void 0:o.children[0];r instanceof HTMLElement&&r.className.startsWith("vpi-social-")&&(getComputedStyle(r).maskImage||getComputedStyle(r).webkitMaskImage)==="none"&&r.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${e.icon}.svg')`)});const n=K(()=>typeof e.icon=="object"?e.icon.svg:`<span class="vpi-social-${e.icon}"></span>`);return(r,o)=>(E(),R("a",{ref_key:"el",ref:t,class:"VPSocialLink no-icon",href:r.link,"aria-label":r.ariaLabel??(typeof r.icon=="string"?r.icon:""),target:"_blank",rel:"noopener",innerHTML:n.value},null,8,dp))}}),pp=q(fp,[["__scopeId","data-v-60a9a2d3"]]),mp={class:"VPSocialLinks"},gp=j({__name:"VPSocialLinks",props:{links:{}},setup(s){return(e,t)=>(E(),R("div",mp,[(E(!0),R(le,null,Se(e.links,({link:n,icon:r,ariaLabel:o})=>(E(),H(pp,{key:n,icon:r,link:n,ariaLabel:o},null,8,["icon","link","ariaLabel"]))),128))]))}}),Vi=q(gp,[["__scopeId","data-v-b51b99b1"]]),_p={key:0,class:"group translations"},vp={class:"trans-title"},yp={key:1,class:"group"},Ep={class:"item appearance"},Tp={class:"label"},Ip={class:"appearance-action"},wp={key:2,class:"group"},Ap={class:"item social-links"},bp=j({__name:"VPNavBarExtra",setup(s){const{site:e,theme:t}=se(),{localeLinks:n,currentLang:r}=Qn({correspondingLink:!0}),o=K(()=>n.value.length&&r.value.label||e.value.appearance||t.value.socialLinks);return(a,u)=>o.value?(E(),H(Si,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:N(()=>[b(n).length&&b(r).label?(E(),R("div",_p,[C("p",vp,Z(b(r).label),1),(E(!0),R(le,null,Se(b(n),h=>(E(),H(Qs,{key:h.link,item:h},null,8,["item"]))),128))])):B("",!0),b(e).appearance&&b(e).appearance!=="force-dark"&&b(e).appearance!=="force-auto"?(E(),R("div",yp,[C("div",Ep,[C("p",Tp,Z(b(t).darkModeSwitchLabel||"Appearance"),1),C("div",Ip,[U(bi)])])])):B("",!0),b(t).socialLinks?(E(),R("div",wp,[C("div",Ap,[U(Vi,{class:"social-links-list",links:b(t).socialLinks},null,8,["links"])])])):B("",!0)]),_:1})):B("",!0)}}),Pp=q(bp,[["__scopeId","data-v-f953d92f"]]),Sp=["aria-expanded"],Vp=j({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(s){return(e,t)=>(E(),R("button",{type:"button",class:ue(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:t[0]||(t[0]=n=>e.$emit("click"))},t[1]||(t[1]=[C("span",{class:"container"},[C("span",{class:"top"}),C("span",{class:"middle"}),C("span",{class:"bottom"})],-1)]),10,Sp))}}),Rp=q(Vp,[["__scopeId","data-v-6bee1efd"]]),kp=["innerHTML"],Cp=j({__name:"VPNavBarMenuLink",props:{item:{}},setup(s){const{page:e}=se();return(t,n)=>(E(),H(Xe,{class:ue({VPNavBarMenuLink:!0,active:b(Lt)(b(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,tabindex:"0"},{default:N(()=>[C("span",{innerHTML:t.item.text},null,8,kp)]),_:1},8,["class","href","target","rel","no-icon"]))}}),Dp=q(Cp,[["__scopeId","data-v-815115f5"]]),Np=j({__name:"VPNavBarMenuGroup",props:{item:{}},setup(s){const e=s,{page:t}=se(),n=o=>"component"in o?!1:"link"in o?Lt(t.value.relativePath,o.link,!!e.item.activeMatch):o.items.some(n),r=K(()=>n(e.item));return(o,a)=>(E(),H(Si,{class:ue({VPNavBarMenuGroup:!0,active:b(Lt)(b(t).relativePath,o.item.activeMatch,!!o.item.activeMatch)||r.value}),button:o.item.text,items:o.item.items},null,8,["class","button","items"]))}}),Lp={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},Mp=j({__name:"VPNavBarMenu",setup(s){const{theme:e}=se();return(t,n)=>b(e).nav?(E(),R("nav",Lp,[n[0]||(n[0]=C("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(E(!0),R(le,null,Se(b(e).nav,r=>(E(),R(le,{key:JSON.stringify(r)},["link"in r?(E(),H(Dp,{key:0,item:r},null,8,["item"])):"component"in r?(E(),H(Qe(r.component),pt({key:1,ref_for:!0},r.props),null,16)):(E(),H(Np,{key:2,item:r},null,8,["item"]))],64))),128))])):B("",!0)}}),Op=q(Mp,[["__scopeId","data-v-020be4db"]]);function $p(s){const{localeIndex:e,theme:t}=se();function n(r){var M,x,L;const o=r.split("."),a=(M=t.value.search)==null?void 0:M.options,u=a&&typeof a=="object",h=u&&((L=(x=a.locales)==null?void 0:x[e.value])==null?void 0:L.translations)||null,d=u&&a.translations||null;let p=h,_=d,y=s;const V=o.pop();for(const J of o){let Q=null;const ee=y==null?void 0:y[J];ee&&(Q=y=ee);const fe=_==null?void 0:_[J];fe&&(Q=_=fe);const Be=p==null?void 0:p[J];Be&&(Q=p=Be),ee||(y=Q),fe||(_=Q),Be||(p=Q)}return(p==null?void 0:p[V])??(_==null?void 0:_[V])??(y==null?void 0:y[V])??""}return n}const xp=["aria-label"],Fp={class:"DocSearch-Button-Container"},Bp={class:"DocSearch-Button-Placeholder"},ga=j({__name:"VPNavBarSearchButton",setup(s){const t=$p({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(n,r)=>(E(),R("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":b(t)("button.buttonAriaLabel")},[C("span",Fp,[r[0]||(r[0]=C("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),C("span",Bp,Z(b(t)("button.buttonText")),1)]),r[1]||(r[1]=C("span",{class:"DocSearch-Button-Keys"},[C("kbd",{class:"DocSearch-Button-Key"}),C("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,xp))}}),Up={class:"VPNavBarSearch"},jp={id:"local-search"},Hp={key:1,id:"docsearch"},qp=j({__name:"VPNavBarSearch",setup(s){const e=()=>null,t=()=>null,{theme:n}=se(),r=ne(!1),o=ne(!1);Ke(()=>{});function a(){r.value||(r.value=!0,setTimeout(u,16))}function u(){const p=new Event("keydown");p.key="k",p.metaKey=!0,window.dispatchEvent(p),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||u()},16)}const h=ne(!1),d="";return(p,_)=>{var y;return E(),R("div",Up,[b(d)==="local"?(E(),R(le,{key:0},[h.value?(E(),H(b(e),{key:0,onClose:_[0]||(_[0]=V=>h.value=!1)})):B("",!0),C("div",jp,[U(ga,{onClick:_[1]||(_[1]=V=>h.value=!0)})])],64)):b(d)==="algolia"?(E(),R(le,{key:1},[r.value?(E(),H(b(t),{key:0,algolia:((y=b(n).search)==null?void 0:y.options)??b(n).algolia,onVnodeBeforeMount:_[2]||(_[2]=V=>o.value=!0)},null,8,["algolia"])):B("",!0),o.value?B("",!0):(E(),R("div",Hp,[U(ga,{onClick:a})]))],64)):B("",!0)])}}}),zp=j({__name:"VPNavBarSocialLinks",setup(s){const{theme:e}=se();return(t,n)=>b(e).socialLinks?(E(),H(Vi,{key:0,class:"VPNavBarSocialLinks",links:b(e).socialLinks},null,8,["links"])):B("",!0)}}),Gp=q(zp,[["__scopeId","data-v-ef6192dc"]]),Kp=["href","rel","target"],Wp=["innerHTML"],Qp={key:2},Xp=j({__name:"VPNavBarTitle",setup(s){const{site:e,theme:t}=se(),{hasSidebar:n}=lt(),{currentLang:r}=Qn(),o=K(()=>{var h;return typeof t.value.logoLink=="string"?t.value.logoLink:(h=t.value.logoLink)==null?void 0:h.link}),a=K(()=>{var h;return typeof t.value.logoLink=="string"||(h=t.value.logoLink)==null?void 0:h.rel}),u=K(()=>{var h;return typeof t.value.logoLink=="string"||(h=t.value.logoLink)==null?void 0:h.target});return(h,d)=>(E(),R("div",{class:ue(["VPNavBarTitle",{"has-sidebar":b(n)}])},[C("a",{class:"title",href:o.value??b(Ai)(b(r).link),rel:a.value,target:u.value},[k(h.$slots,"nav-bar-title-before",{},void 0,!0),b(t).logo?(E(),H(ks,{key:0,class:"logo",image:b(t).logo},null,8,["image"])):B("",!0),b(t).siteTitle?(E(),R("span",{key:1,innerHTML:b(t).siteTitle},null,8,Wp)):b(t).siteTitle===void 0?(E(),R("span",Qp,Z(b(e).title),1)):B("",!0),k(h.$slots,"nav-bar-title-after",{},void 0,!0)],8,Kp)],2))}}),Yp=q(Xp,[["__scopeId","data-v-d4488dd0"]]),Jp={class:"items"},Zp={class:"title"},em=j({__name:"VPNavBarTranslations",setup(s){const{theme:e}=se(),{localeLinks:t,currentLang:n}=Qn({correspondingLink:!0});return(r,o)=>b(t).length&&b(n).label?(E(),H(Si,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:b(e).langMenuLabel||"Change language"},{default:N(()=>[C("div",Jp,[C("p",Zp,Z(b(n).label),1),(E(!0),R(le,null,Se(b(t),a=>(E(),H(Qs,{key:a.link,item:a},null,8,["item"]))),128))])]),_:1},8,["label"])):B("",!0)}}),tm=q(em,[["__scopeId","data-v-acee064b"]]),nm={class:"wrapper"},sm={class:"container"},rm={class:"title"},im={class:"content"},om={class:"content-body"},am=j({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(s){const e=s,{y:t}=kl(),{isHome:n,hasSidebar:r}=lt(),o=ne({});return Ii(()=>{o.value={"has-sidebar":r.value,home:n.value,top:t.value===0,"screen-open":e.isScreenOpen}}),(a,u)=>(E(),R("div",{class:ue(["VPNavBar",o.value])},[C("div",nm,[C("div",sm,[C("div",rm,[U(Yp,null,{"nav-bar-title-before":N(()=>[k(a.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":N(()=>[k(a.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),C("div",im,[C("div",om,[k(a.$slots,"nav-bar-content-before",{},void 0,!0),U(qp,{class:"search"}),U(Op,{class:"menu"}),U(tm,{class:"translations"}),U(zf,{class:"appearance"}),U(Gp,{class:"social-links"}),U(Pp,{class:"extra"}),k(a.$slots,"nav-bar-content-after",{},void 0,!0),U(Rp,{class:"hamburger",active:a.isScreenOpen,onClick:u[0]||(u[0]=h=>a.$emit("toggle-screen"))},null,8,["active"])])])])]),u[1]||(u[1]=C("div",{class:"divider"},[C("div",{class:"divider-line"})],-1))],2))}}),lm=q(am,[["__scopeId","data-v-cb5e22fa"]]),um={key:0,class:"VPNavScreenAppearance"},cm={class:"text"},hm=j({__name:"VPNavScreenAppearance",setup(s){const{site:e,theme:t}=se();return(n,r)=>b(e).appearance&&b(e).appearance!=="force-dark"&&b(e).appearance!=="force-auto"?(E(),R("div",um,[C("p",cm,Z(b(t).darkModeSwitchLabel||"Appearance"),1),U(bi)])):B("",!0)}}),dm=q(hm,[["__scopeId","data-v-a3e2920d"]]),fm=["innerHTML"],pm=j({__name:"VPNavScreenMenuLink",props:{item:{}},setup(s){const e=Ws("close-screen");return(t,n)=>(E(),H(Xe,{class:"VPNavScreenMenuLink",href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,onClick:b(e)},{default:N(()=>[C("span",{innerHTML:t.item.text},null,8,fm)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),mm=q(pm,[["__scopeId","data-v-fa963d97"]]),gm=["innerHTML"],_m=j({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(s){const e=Ws("close-screen");return(t,n)=>(E(),H(Xe,{class:"VPNavScreenMenuGroupLink",href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,onClick:b(e)},{default:N(()=>[C("span",{innerHTML:t.item.text},null,8,gm)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),xl=q(_m,[["__scopeId","data-v-e04f3e85"]]),vm={class:"VPNavScreenMenuGroupSection"},ym={key:0,class:"title"},Em=j({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(s){return(e,t)=>(E(),R("div",vm,[e.text?(E(),R("p",ym,Z(e.text),1)):B("",!0),(E(!0),R(le,null,Se(e.items,n=>(E(),H(xl,{key:n.text,item:n},null,8,["item"]))),128))]))}}),Tm=q(Em,[["__scopeId","data-v-7dfe209c"]]),Im=["aria-controls","aria-expanded"],wm=["innerHTML"],Am=["id"],bm={key:0,class:"item"},Pm={key:1,class:"item"},Sm={key:2,class:"group"},Vm=j({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(s){const e=s,t=ne(!1),n=K(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function r(){t.value=!t.value}return(o,a)=>(E(),R("div",{class:ue(["VPNavScreenMenuGroup",{open:t.value}])},[C("button",{class:"button","aria-controls":n.value,"aria-expanded":t.value,onClick:r},[C("span",{class:"button-text",innerHTML:o.text},null,8,wm),a[0]||(a[0]=C("span",{class:"vpi-plus button-icon"},null,-1))],8,Im),C("div",{id:n.value,class:"items"},[(E(!0),R(le,null,Se(o.items,u=>(E(),R(le,{key:JSON.stringify(u)},["link"in u?(E(),R("div",bm,[U(xl,{item:u},null,8,["item"])])):"component"in u?(E(),R("div",Pm,[(E(),H(Qe(u.component),pt({ref_for:!0},u.props,{"screen-menu":""}),null,16))])):(E(),R("div",Sm,[U(Tm,{text:u.text,items:u.items},null,8,["text","items"])]))],64))),128))],8,Am)],2))}}),Rm=q(Vm,[["__scopeId","data-v-d3547da8"]]),km={key:0,class:"VPNavScreenMenu"},Cm=j({__name:"VPNavScreenMenu",setup(s){const{theme:e}=se();return(t,n)=>b(e).nav?(E(),R("nav",km,[(E(!0),R(le,null,Se(b(e).nav,r=>(E(),R(le,{key:JSON.stringify(r)},["link"in r?(E(),H(mm,{key:0,item:r},null,8,["item"])):"component"in r?(E(),H(Qe(r.component),pt({key:1,ref_for:!0},r.props,{"screen-menu":""}),null,16)):(E(),H(Rm,{key:2,text:r.text||"",items:r.items},null,8,["text","items"]))],64))),128))])):B("",!0)}}),Dm=j({__name:"VPNavScreenSocialLinks",setup(s){const{theme:e}=se();return(t,n)=>b(e).socialLinks?(E(),H(Vi,{key:0,class:"VPNavScreenSocialLinks",links:b(e).socialLinks},null,8,["links"])):B("",!0)}}),Nm={class:"list"},Lm=j({__name:"VPNavScreenTranslations",setup(s){const{localeLinks:e,currentLang:t}=Qn({correspondingLink:!0}),n=ne(!1);function r(){n.value=!n.value}return(o,a)=>b(e).length&&b(t).label?(E(),R("div",{key:0,class:ue(["VPNavScreenTranslations",{open:n.value}])},[C("button",{class:"title",onClick:r},[a[0]||(a[0]=C("span",{class:"vpi-languages icon lang"},null,-1)),He(" "+Z(b(t).label)+" ",1),a[1]||(a[1]=C("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),C("ul",Nm,[(E(!0),R(le,null,Se(b(e),u=>(E(),R("li",{key:u.link,class:"item"},[U(Xe,{class:"link",href:u.link},{default:N(()=>[He(Z(u.text),1)]),_:2},1032,["href"])]))),128))])],2)):B("",!0)}}),Mm=q(Lm,[["__scopeId","data-v-516e4bc3"]]),Om={class:"container"},$m=j({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(s){const e=ne(null),t=Cl(Kn?document.body:null);return(n,r)=>(E(),H(yi,{name:"fade",onEnter:r[0]||(r[0]=o=>t.value=!0),onAfterLeave:r[1]||(r[1]=o=>t.value=!1)},{default:N(()=>[n.open?(E(),R("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e,id:"VPNavScreen"},[C("div",Om,[k(n.$slots,"nav-screen-content-before",{},void 0,!0),U(Cm,{class:"menu"}),U(Mm,{class:"translations"}),U(dm,{class:"appearance"}),U(Dm,{class:"social-links"}),k(n.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):B("",!0)]),_:3}))}}),xm=q($m,[["__scopeId","data-v-2dd6d0c7"]]),Fm={key:0,class:"VPNav"},Bm=j({__name:"VPNav",setup(s){const{isScreenOpen:e,closeScreen:t,toggleScreen:n}=Mf(),{frontmatter:r}=se(),o=K(()=>r.value.navbar!==!1);return Dl("close-screen",t),Ks(()=>{Kn&&document.documentElement.classList.toggle("hide-nav",!o.value)}),(a,u)=>o.value?(E(),R("header",Fm,[U(lm,{"is-screen-open":b(e),onToggleScreen:b(n)},{"nav-bar-title-before":N(()=>[k(a.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":N(()=>[k(a.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":N(()=>[k(a.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":N(()=>[k(a.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),U(xm,{open:b(e)},{"nav-screen-content-before":N(()=>[k(a.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":N(()=>[k(a.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):B("",!0)}}),Um=q(Bm,[["__scopeId","data-v-7ad780c2"]]),jm=["role","tabindex"],Hm={key:1,class:"items"},qm=j({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(s){const e=s,{collapsed:t,collapsible:n,isLink:r,isActiveLink:o,hasActiveLink:a,hasChildren:u,toggle:h}=zh(K(()=>e.item)),d=K(()=>u.value?"section":"div"),p=K(()=>r.value?"a":"div"),_=K(()=>u.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),y=K(()=>r.value?void 0:"button"),V=K(()=>[[`level-${e.depth}`],{collapsible:n.value},{collapsed:t.value},{"is-link":r.value},{"is-active":o.value},{"has-active":a.value}]);function M(L){"key"in L&&L.key!=="Enter"||!e.item.link&&h()}function x(){e.item.link&&h()}return(L,J)=>{const Q=bt("VPSidebarItem",!0);return E(),H(Qe(d.value),{class:ue(["VPSidebarItem",V.value])},{default:N(()=>[L.item.text?(E(),R("div",pt({key:0,class:"item",role:y.value},fh(L.item.items?{click:M,keydown:M}:{},!0),{tabindex:L.item.items&&0}),[J[1]||(J[1]=C("div",{class:"indicator"},null,-1)),L.item.link?(E(),H(Xe,{key:0,tag:p.value,class:"link",href:L.item.link,rel:L.item.rel,target:L.item.target},{default:N(()=>[(E(),H(Qe(_.value),{class:"text",innerHTML:L.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(E(),H(Qe(_.value),{key:1,class:"text",innerHTML:L.item.text},null,8,["innerHTML"])),L.item.collapsed!=null&&L.item.items&&L.item.items.length?(E(),R("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:x,onKeydown:ph(x,["enter"]),tabindex:"0"},J[0]||(J[0]=[C("span",{class:"vpi-chevron-right caret-icon"},null,-1)]),32)):B("",!0)],16,jm)):B("",!0),L.item.items&&L.item.items.length?(E(),R("div",Hm,[L.depth<5?(E(!0),R(le,{key:0},Se(L.item.items,ee=>(E(),H(Q,{key:ee.text,item:ee,depth:L.depth+1},null,8,["item","depth"]))),128)):B("",!0)])):B("",!0)]),_:1},8,["class"])}}}),zm=q(qm,[["__scopeId","data-v-6b36a2fd"]]),Gm=j({__name:"VPSidebarGroup",props:{items:{}},setup(s){const e=ne(!0);let t=null;return Ke(()=>{t=setTimeout(()=>{t=null,e.value=!1},300)}),mh(()=>{t!=null&&(clearTimeout(t),t=null)}),(n,r)=>(E(!0),R(le,null,Se(n.items,o=>(E(),R("div",{key:o.text,class:ue(["group",{"no-transition":e.value}])},[U(zm,{item:o,depth:0},null,8,["item"])],2))),128))}}),Km=q(Gm,[["__scopeId","data-v-a84b7c21"]]),Wm={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},Qm=j({__name:"VPSidebar",props:{open:{type:Boolean}},setup(s){const{sidebarGroups:e,hasSidebar:t}=lt(),n=s,r=ne(null),o=Cl(Kn?document.body:null);ze([n,r],()=>{var u;n.open?(o.value=!0,(u=r.value)==null||u.focus()):o.value=!1},{immediate:!0,flush:"post"});const a=ne(0);return ze(e,()=>{a.value+=1},{deep:!0}),(u,h)=>b(t)?(E(),R("aside",{key:0,class:ue(["VPSidebar",{open:u.open}]),ref_key:"navEl",ref:r,onClick:h[0]||(h[0]=gh(()=>{},["stop"]))},[h[2]||(h[2]=C("div",{class:"curtain"},null,-1)),C("nav",Wm,[h[1]||(h[1]=C("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),k(u.$slots,"sidebar-nav-before",{},void 0,!0),(E(),H(Km,{items:b(e),key:a.value},null,8,["items"])),k(u.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):B("",!0)}}),Xm=q(Qm,[["__scopeId","data-v-606f96d3"]]),Ym=j({__name:"VPSkipLink",setup(s){const{theme:e}=se(),t=Wn(),n=ne();ze(()=>t.path,()=>n.value.focus());function r({target:o}){const a=document.getElementById(decodeURIComponent(o.hash).slice(1));if(a){const u=()=>{a.removeAttribute("tabindex"),a.removeEventListener("blur",u)};a.setAttribute("tabindex","-1"),a.addEventListener("blur",u),a.focus(),window.scrollTo(0,0)}}return(o,a)=>(E(),R(le,null,[C("span",{ref_key:"backToTop",ref:n,tabindex:"-1"},null,512),C("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:r},Z(b(e).skipToContentLabel||"Skip to content"),1)],64))}}),Jm=q(Ym,[["__scopeId","data-v-fcbfc0e0"]]),Zm=j({__name:"Layout",setup(s){const{isOpen:e,open:t,close:n}=qh();Gh({closeSidebar:n});const{frontmatter:r}=se(),o=_h(),a=K(()=>!!o["home-hero-image"]);return Dl("hero-image-slot-exists",a),(u,h)=>{const d=bt("Content");return b(r).layout!==!1?(E(),R("div",{key:0,class:ue(["Layout",b(r).pageClass])},[k(u.$slots,"layout-top",{},void 0,!0),U(Jm),U(Ih,{class:"backdrop",show:b(e),onClick:b(n)},null,8,["show","onClick"]),U(Um,null,{"nav-bar-title-before":N(()=>[k(u.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":N(()=>[k(u.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":N(()=>[k(u.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":N(()=>[k(u.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":N(()=>[k(u.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":N(()=>[k(u.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),U(Lf,{open:b(e),onOpenMenu:b(t)},null,8,["open","onOpenMenu"]),U(Xm,{open:b(e)},{"sidebar-nav-before":N(()=>[k(u.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":N(()=>[k(u.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),U(yf,null,{"page-top":N(()=>[k(u.$slots,"page-top",{},void 0,!0)]),"page-bottom":N(()=>[k(u.$slots,"page-bottom",{},void 0,!0)]),"not-found":N(()=>[k(u.$slots,"not-found",{},void 0,!0)]),"home-hero-before":N(()=>[k(u.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":N(()=>[k(u.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":N(()=>[k(u.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":N(()=>[k(u.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":N(()=>[k(u.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":N(()=>[k(u.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":N(()=>[k(u.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":N(()=>[k(u.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":N(()=>[k(u.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":N(()=>[k(u.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":N(()=>[k(u.$slots,"doc-before",{},void 0,!0)]),"doc-after":N(()=>[k(u.$slots,"doc-after",{},void 0,!0)]),"doc-top":N(()=>[k(u.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":N(()=>[k(u.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":N(()=>[k(u.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":N(()=>[k(u.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":N(()=>[k(u.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":N(()=>[k(u.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":N(()=>[k(u.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":N(()=>[k(u.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),U(Af),k(u.$slots,"layout-bottom",{},void 0,!0)],2)):(E(),H(d,{key:1}))}}}),eg=q(Zm,[["__scopeId","data-v-4539713c"]]),tg={Layout:eg,enhanceApp:({app:s})=>{s.component("Badge",yh)}},ng={class:"giscus-comments-container"},sg={class:"giscus-comments-placeholder"},rg={__name:"GiscusComments",setup(s){const e=ne(!1),t=ne(null),n=Wn(),{isDark:r}=Gs(),o=K(()=>r.value?"dark_dimmed":"light");function a(){if(t.value){t.value.innerHTML="";const u=document.createElement("script");u.src="https://giscus.app/client.js",u.setAttribute("data-repo","HolyBearTW/holybear.me"),u.setAttribute("data-repo-id","R_kgDOJmguVg"),u.setAttribute("data-category","General"),u.setAttribute("data-category-id","DIC_kwDOJmguVs4Cqo90"),u.setAttribute("data-mapping","pathname"),u.setAttribute("data-strict","0"),u.setAttribute("data-reactions-enabled","1"),u.setAttribute("data-emit-metadata","0"),u.setAttribute("data-input-position","bottom"),u.setAttribute("data-theme",o.value),u.setAttribute("data-lang","zh-TW"),u.setAttribute("crossorigin","anonymous"),u.async=!0,t.value.appendChild(u),e.value=!0}}return Ke(()=>{a()}),ze(()=>n.path,()=>{e.value=!1,a()}),ze(o,u=>{{const h=document.querySelector("iframe.giscus-frame");h&&h.contentWindow&&h.contentWindow.postMessage({giscus:{setConfig:{theme:u}}},"https://giscus.app")}},{immediate:!0}),(u,h)=>(E(),R("div",ng,[pa(C("div",sg,h[0]||(h[0]=[C("p",null,"正在載入留言...",-1),C("div",{class:"spinner"},null,-1)]),512),[[ma,!e.value]]),pa(C("div",{ref_key:"giscusContainer",ref:t,class:"giscus-actual-comments"},null,512),[[ma,e.value]])]))}},ig=q(rg,[["__scopeId","data-v-0991216c"]]);function og(s){const e=ne(0),t=ne(0),n=ne(!0);async function r(){{n.value=!1;return}}async function o(u){}async function a(u){}return{up:e,down:t,vote:o,unvote:a,loading:n,fetchVotes:r}}const ag={key:0,class:"vote-panel"},lg=["disabled"],ug={key:0},cg={key:1},hg=["disabled"],dg={key:0},fg={key:1},pg={__name:"VotePanel",setup(s){const{page:e}=Gs(),t=K(()=>e.value.relativePath.replaceAll("/","__")),n=ne(null),r=ne(null),o=ne(!1);async function a(h){n.value=og(),r.value=localStorage.getItem("vote_"+h)||null,await n.value.fetchVotes()}Ke(async()=>{o.value=!0,await a(t.value)}),ze(t,async h=>{await a(h)});async function u(h){!n.value||n.value.loading.value||(r.value===h?(await n.value.unvote(h),r.value=null,localStorage.removeItem("vote_"+t.value)):(r.value&&await n.value.unvote(r.value),await n.value.vote(h),r.value=h,localStorage.setItem("vote_"+t.value,h)),await n.value.fetchVotes())}return(h,d)=>{var p,_,y,V;return E(),R("div",null,[C("div",null,"hydrated: "+Z(o.value?"yes":"no"),1),C("div",null,"voteState: "+Z(n.value.value?"ok":"not ready"),1),C("div",null,"voteState.value.up: "+Z((_=(p=n.value.value)==null?void 0:p.up)==null?void 0:_.value),1),C("div",null,"voteState.value.down: "+Z((V=(y=n.value.value)==null?void 0:y.down)==null?void 0:V.value),1),C("div",null,"userVote: "+Z(r.value.value),1),o.value&&n.value.value&&n.value.value.up&&n.value.value.down?(E(),R("div",ag,[C("button",{onClick:d[0]||(d[0]=M=>u("up")),disabled:n.value.value.loading.value,class:ue({active:r.value.value==="up"})},[d[2]||(d[2]=He(" 👍 推 ")),n.value.value.loading.value?(E(),R("span",cg,"...")):(E(),R("span",ug,"("+Z(n.value.value.up.value)+")",1))],10,lg),C("button",{onClick:d[1]||(d[1]=M=>u("down")),disabled:n.value.value.loading.value,class:ue({active:r.value.value==="down"})},[d[3]||(d[3]=He(" 👎 噓 ")),n.value.value.loading.value?(E(),R("span",fg,"...")):(E(),R("span",dg,"("+Z(n.value.value.down.value)+")",1))],10,hg)])):B("",!0)])}}},mg=q(pg,[["__scopeId","data-v-a9005e1c"]]),gg=()=>{};var _a={};/**
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
 */const Fl=function(s){const e=[];let t=0;for(let n=0;n<s.length;n++){let r=s.charCodeAt(n);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&n+1<s.length&&(s.charCodeAt(n+1)&64512)===56320?(r=65536+((r&1023)<<10)+(s.charCodeAt(++n)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},_g=function(s){const e=[];let t=0,n=0;for(;t<s.length;){const r=s[t++];if(r<128)e[n++]=String.fromCharCode(r);else if(r>191&&r<224){const o=s[t++];e[n++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=s[t++],a=s[t++],u=s[t++],h=((r&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;e[n++]=String.fromCharCode(55296+(h>>10)),e[n++]=String.fromCharCode(56320+(h&1023))}else{const o=s[t++],a=s[t++];e[n++]=String.fromCharCode((r&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Bl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<s.length;r+=3){const o=s[r],a=r+1<s.length,u=a?s[r+1]:0,h=r+2<s.length,d=h?s[r+2]:0,p=o>>2,_=(o&3)<<4|u>>4;let y=(u&15)<<2|d>>6,V=d&63;h||(V=64,a||(y=64)),n.push(t[p],t[_],t[y],t[V])}return n.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(Fl(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):_g(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<s.length;){const o=t[s.charAt(r++)],u=r<s.length?t[s.charAt(r)]:0;++r;const d=r<s.length?t[s.charAt(r)]:64;++r;const _=r<s.length?t[s.charAt(r)]:64;if(++r,o==null||u==null||d==null||_==null)throw new vg;const y=o<<2|u>>4;if(n.push(y),d!==64){const V=u<<4&240|d>>2;if(n.push(V),_!==64){const M=d<<6&192|_;n.push(M)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class vg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yg=function(s){const e=Fl(s);return Bl.encodeByteArray(e,!0)},Cs=function(s){return yg(s).replace(/\./g,"")},Eg=function(s){try{return Bl.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Tg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ig=()=>Tg().__FIREBASE_DEFAULTS__,wg=()=>{if(typeof process>"u"||typeof _a>"u")return;const s=_a.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},Ag=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&Eg(s[1]);return e&&JSON.parse(e)},Ri=()=>{try{return gg()||Ig()||wg()||Ag()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},bg=s=>{var e,t;return(t=(e=Ri())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[s]},Pg=s=>{const e=bg(s);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},Ul=()=>{var s;return(s=Ri())===null||s===void 0?void 0:s.config};/**
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
 */class Sg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function ki(s){return s.endsWith(".cloudworkstations.dev")}async function Vg(s){return(await fetch(s,{credentials:"include"})).ok}/**
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
 */function Rg(s,e){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",r=s.iat||0,o=s.sub||s.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},s);return[Cs(JSON.stringify(t)),Cs(JSON.stringify(a)),""].join(".")}const Dn={};function kg(){const s={prod:[],emulator:[]};for(const e of Object.keys(Dn))Dn[e]?s.emulator.push(e):s.prod.push(e);return s}function Cg(s){let e=document.getElementById(s),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",s),t=!0),{created:t,element:e}}let va=!1;function Dg(s,e){if(typeof window>"u"||typeof document>"u"||!ki(window.location.host)||Dn[s]===e||Dn[s]||va)return;Dn[s]=e;function t(y){return`__firebase__banner__${y}`}const n="__firebase__banner",o=kg().prod.length>0;function a(){const y=document.getElementById(n);y&&y.remove()}function u(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function h(y,V){y.setAttribute("width","24"),y.setAttribute("id",V),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function d(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{va=!0,a()},y}function p(y,V){y.setAttribute("id",V),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function _(){const y=Cg(n),V=t("text"),M=document.getElementById(V)||document.createElement("span"),x=t("learnmore"),L=document.getElementById(x)||document.createElement("a"),J=t("preprendIcon"),Q=document.getElementById(J)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const ee=y.element;u(ee),p(L,x);const fe=d();h(Q,J),ee.append(Q,M,L,fe),document.body.appendChild(ee)}o?(M.innerText="Preview backend disconnected.",Q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,M.innerText="Preview backend running in this workspace."),M.setAttribute("id",V)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",_):_()}/**
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
 */function Ng(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Lg(){var s;const e=(s=Ri())===null||s===void 0?void 0:s.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Mg(){return!Lg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Og(){try{return typeof indexedDB=="object"}catch{return!1}}function $g(){return new Promise((s,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(n),s(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var o;e(((o=r.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
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
 */const xg="FirebaseError";class on extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=xg,Object.setPrototypeOf(this,on.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jl.prototype.create)}}class jl{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],a=o?Fg(o,n):"Error",u=`${this.serviceName}: ${a} (${r}).`;return new on(r,u,n)}}function Fg(s,e){return s.replace(Bg,(t,n)=>{const r=e[n];return r!=null?String(r):`<${n}?>`})}const Bg=/\{\$([^}]+)}/g;function Ds(s,e){if(s===e)return!0;const t=Object.keys(s),n=Object.keys(e);for(const r of t){if(!n.includes(r))return!1;const o=s[r],a=e[r];if(ya(o)&&ya(a)){if(!Ds(o,a))return!1}else if(o!==a)return!1}for(const r of n)if(!t.includes(r))return!1;return!0}function ya(s){return s!==null&&typeof s=="object"}/**
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
 */function Mt(s){return s&&s._delegate?s._delegate:s}class $n{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Ug{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Sg;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Hg(e))try{this.getOrInitializeService({instanceIdentifier:Dt})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:r});n.resolve(o)}catch{}}}}clearInstance(e=Dt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dt){return this.instances.has(e)}getOptions(e=Dt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);n===u&&a.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),o=(n=this.onInitCallbacks.get(r))!==null&&n!==void 0?n:new Set;o.add(e),this.onInitCallbacks.set(r,o);const a=this.instances.get(r);return a&&e(a,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:jg(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Dt){return this.component?this.component.multipleInstances?e:Dt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jg(s){return s===Dt?void 0:s}function Hg(s){return s.instantiationMode==="EAGER"}/**
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
 */class qg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ug(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(oe||(oe={}));const zg={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},Gg=oe.INFO,Kg={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},Wg=(s,e,...t)=>{if(e<s.logLevel)return;const n=new Date().toISOString(),r=Kg[e];if(r)console[r](`[${n}]  ${s.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hl{constructor(e){this.name=e,this._logLevel=Gg,this._logHandler=Wg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const Qg=(s,e)=>e.some(t=>s instanceof t);let Ea,Ta;function Xg(){return Ea||(Ea=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yg(){return Ta||(Ta=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ql=new WeakMap,Yr=new WeakMap,zl=new WeakMap,xr=new WeakMap,Ci=new WeakMap;function Jg(s){const e=new Promise((t,n)=>{const r=()=>{s.removeEventListener("success",o),s.removeEventListener("error",a)},o=()=>{t(mt(s.result)),r()},a=()=>{n(s.error),r()};s.addEventListener("success",o),s.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&ql.set(t,s)}).catch(()=>{}),Ci.set(e,s),e}function Zg(s){if(Yr.has(s))return;const e=new Promise((t,n)=>{const r=()=>{s.removeEventListener("complete",o),s.removeEventListener("error",a),s.removeEventListener("abort",a)},o=()=>{t(),r()},a=()=>{n(s.error||new DOMException("AbortError","AbortError")),r()};s.addEventListener("complete",o),s.addEventListener("error",a),s.addEventListener("abort",a)});Yr.set(s,e)}let Jr={get(s,e,t){if(s instanceof IDBTransaction){if(e==="done")return Yr.get(s);if(e==="objectStoreNames")return s.objectStoreNames||zl.get(s);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return mt(s[e])},set(s,e,t){return s[e]=t,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function e_(s){Jr=s(Jr)}function t_(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=s.call(Fr(this),e,...t);return zl.set(n,e.sort?e.sort():[e]),mt(n)}:Yg().includes(s)?function(...e){return s.apply(Fr(this),e),mt(ql.get(this))}:function(...e){return mt(s.apply(Fr(this),e))}}function n_(s){return typeof s=="function"?t_(s):(s instanceof IDBTransaction&&Zg(s),Qg(s,Xg())?new Proxy(s,Jr):s)}function mt(s){if(s instanceof IDBRequest)return Jg(s);if(xr.has(s))return xr.get(s);const e=n_(s);return e!==s&&(xr.set(s,e),Ci.set(e,s)),e}const Fr=s=>Ci.get(s);function s_(s,e,{blocked:t,upgrade:n,blocking:r,terminated:o}={}){const a=indexedDB.open(s,e),u=mt(a);return n&&a.addEventListener("upgradeneeded",h=>{n(mt(a.result),h.oldVersion,h.newVersion,mt(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),r&&h.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const r_=["get","getKey","getAll","getAllKeys","count"],i_=["put","add","delete","clear"],Br=new Map;function Ia(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(Br.get(e))return Br.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,r=i_.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(r||r_.includes(t)))return;const o=async function(a,...u){const h=this.transaction(a,r?"readwrite":"readonly");let d=h.store;return n&&(d=d.index(u.shift())),(await Promise.all([d[t](...u),r&&h.done]))[0]};return Br.set(e,o),o}e_(s=>({...s,get:(e,t,n)=>Ia(e,t)||s.get(e,t,n),has:(e,t)=>!!Ia(e,t)||s.has(e,t)}));/**
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
 */class o_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(a_(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function a_(s){const e=s.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zr="@firebase/app",wa="0.13.1";/**
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
 */const it=new Hl("@firebase/app"),l_="@firebase/app-compat",u_="@firebase/analytics-compat",c_="@firebase/analytics",h_="@firebase/app-check-compat",d_="@firebase/app-check",f_="@firebase/auth",p_="@firebase/auth-compat",m_="@firebase/database",g_="@firebase/data-connect",__="@firebase/database-compat",v_="@firebase/functions",y_="@firebase/functions-compat",E_="@firebase/installations",T_="@firebase/installations-compat",I_="@firebase/messaging",w_="@firebase/messaging-compat",A_="@firebase/performance",b_="@firebase/performance-compat",P_="@firebase/remote-config",S_="@firebase/remote-config-compat",V_="@firebase/storage",R_="@firebase/storage-compat",k_="@firebase/firestore",C_="@firebase/ai",D_="@firebase/firestore-compat",N_="firebase",L_="11.9.0";/**
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
 */const ei="[DEFAULT]",M_={[Zr]:"fire-core",[l_]:"fire-core-compat",[c_]:"fire-analytics",[u_]:"fire-analytics-compat",[d_]:"fire-app-check",[h_]:"fire-app-check-compat",[f_]:"fire-auth",[p_]:"fire-auth-compat",[m_]:"fire-rtdb",[g_]:"fire-data-connect",[__]:"fire-rtdb-compat",[v_]:"fire-fn",[y_]:"fire-fn-compat",[E_]:"fire-iid",[T_]:"fire-iid-compat",[I_]:"fire-fcm",[w_]:"fire-fcm-compat",[A_]:"fire-perf",[b_]:"fire-perf-compat",[P_]:"fire-rc",[S_]:"fire-rc-compat",[V_]:"fire-gcs",[R_]:"fire-gcs-compat",[k_]:"fire-fst",[D_]:"fire-fst-compat",[C_]:"fire-vertex","fire-js":"fire-js",[N_]:"fire-js-all"};/**
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
 */const Ns=new Map,O_=new Map,ti=new Map;function Aa(s,e){try{s.container.addComponent(e)}catch(t){it.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,t)}}function Ls(s){const e=s.name;if(ti.has(e))return it.debug(`There were multiple attempts to register component ${e}.`),!1;ti.set(e,s);for(const t of Ns.values())Aa(t,s);for(const t of O_.values())Aa(t,s);return!0}function $_(s,e){const t=s.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),s.container.getProvider(e)}function x_(s){return s==null?!1:s.settings!==void 0}/**
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
 */const F_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gt=new jl("app","Firebase",F_);/**
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
 */class B_{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gt.create("app-deleted",{appName:this._name})}}/**
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
 */const U_=L_;function Gl(s,e={}){let t=s;typeof e!="object"&&(e={name:e});const n=Object.assign({name:ei,automaticDataCollectionEnabled:!0},e),r=n.name;if(typeof r!="string"||!r)throw gt.create("bad-app-name",{appName:String(r)});if(t||(t=Ul()),!t)throw gt.create("no-options");const o=Ns.get(r);if(o){if(Ds(t,o.options)&&Ds(n,o.config))return o;throw gt.create("duplicate-app",{appName:r})}const a=new qg(r);for(const h of ti.values())a.addComponent(h);const u=new B_(t,n,a);return Ns.set(r,u),u}function j_(s=ei){const e=Ns.get(s);if(!e&&s===ei&&Ul())return Gl();if(!e)throw gt.create("no-app",{appName:s});return e}function Xt(s,e,t){var n;let r=(n=M_[s])!==null&&n!==void 0?n:s;t&&(r+=`-${t}`);const o=r.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const u=[`Unable to register library "${r}" with version "${e}":`];o&&u.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),it.warn(u.join(" "));return}Ls(new $n(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const H_="firebase-heartbeat-database",q_=1,xn="firebase-heartbeat-store";let Ur=null;function Kl(){return Ur||(Ur=s_(H_,q_,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(xn)}catch(t){console.warn(t)}}}}).catch(s=>{throw gt.create("idb-open",{originalErrorMessage:s.message})})),Ur}async function z_(s){try{const t=(await Kl()).transaction(xn),n=await t.objectStore(xn).get(Wl(s));return await t.done,n}catch(e){if(e instanceof on)it.warn(e.message);else{const t=gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});it.warn(t.message)}}}async function ba(s,e){try{const n=(await Kl()).transaction(xn,"readwrite");await n.objectStore(xn).put(e,Wl(s)),await n.done}catch(t){if(t instanceof on)it.warn(t.message);else{const n=gt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});it.warn(n.message)}}}function Wl(s){return`${s.name}!${s.options.appId}`}/**
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
 */const G_=1024,K_=30;class W_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new X_(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Pa();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:r}),this._heartbeatsCache.heartbeats.length>K_){const a=Y_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){it.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Pa(),{heartbeatsToSend:n,unsentEntries:r}=Q_(this._heartbeatsCache.heartbeats),o=Cs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return it.warn(t),""}}}function Pa(){return new Date().toISOString().substring(0,10)}function Q_(s,e=G_){const t=[];let n=s.slice();for(const r of s){const o=t.find(a=>a.agent===r.agent);if(o){if(o.dates.push(r.date),Sa(t)>e){o.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Sa(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class X_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Og()?$g().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await z_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return ba(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return ba(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Sa(s){return Cs(JSON.stringify({version:2,heartbeats:s})).length}function Y_(s){if(s.length===0)return-1;let e=0,t=s[0].date;for(let n=1;n<s.length;n++)s[n].date<t&&(t=s[n].date,e=n);return e}/**
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
 */function J_(s){Ls(new $n("platform-logger",e=>new o_(e),"PRIVATE")),Ls(new $n("heartbeat",e=>new W_(e),"PRIVATE")),Xt(Zr,wa,s),Xt(Zr,wa,"esm2017"),Xt("fire-js","")}J_("");var Va=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _t,Ql;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,m){function v(){}v.prototype=m.prototype,w.D=m.prototype,w.prototype=new v,w.prototype.constructor=w,w.C=function(T,I,P){for(var g=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)g[nt-2]=arguments[nt];return m.prototype[I].apply(T,g)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(w,m,v){v||(v=0);var T=Array(16);if(typeof m=="string")for(var I=0;16>I;++I)T[I]=m.charCodeAt(v++)|m.charCodeAt(v++)<<8|m.charCodeAt(v++)<<16|m.charCodeAt(v++)<<24;else for(I=0;16>I;++I)T[I]=m[v++]|m[v++]<<8|m[v++]<<16|m[v++]<<24;m=w.g[0],v=w.g[1],I=w.g[2];var P=w.g[3],g=m+(P^v&(I^P))+T[0]+3614090360&4294967295;m=v+(g<<7&4294967295|g>>>25),g=P+(I^m&(v^I))+T[1]+3905402710&4294967295,P=m+(g<<12&4294967295|g>>>20),g=I+(v^P&(m^v))+T[2]+606105819&4294967295,I=P+(g<<17&4294967295|g>>>15),g=v+(m^I&(P^m))+T[3]+3250441966&4294967295,v=I+(g<<22&4294967295|g>>>10),g=m+(P^v&(I^P))+T[4]+4118548399&4294967295,m=v+(g<<7&4294967295|g>>>25),g=P+(I^m&(v^I))+T[5]+1200080426&4294967295,P=m+(g<<12&4294967295|g>>>20),g=I+(v^P&(m^v))+T[6]+2821735955&4294967295,I=P+(g<<17&4294967295|g>>>15),g=v+(m^I&(P^m))+T[7]+4249261313&4294967295,v=I+(g<<22&4294967295|g>>>10),g=m+(P^v&(I^P))+T[8]+1770035416&4294967295,m=v+(g<<7&4294967295|g>>>25),g=P+(I^m&(v^I))+T[9]+2336552879&4294967295,P=m+(g<<12&4294967295|g>>>20),g=I+(v^P&(m^v))+T[10]+4294925233&4294967295,I=P+(g<<17&4294967295|g>>>15),g=v+(m^I&(P^m))+T[11]+2304563134&4294967295,v=I+(g<<22&4294967295|g>>>10),g=m+(P^v&(I^P))+T[12]+1804603682&4294967295,m=v+(g<<7&4294967295|g>>>25),g=P+(I^m&(v^I))+T[13]+4254626195&4294967295,P=m+(g<<12&4294967295|g>>>20),g=I+(v^P&(m^v))+T[14]+2792965006&4294967295,I=P+(g<<17&4294967295|g>>>15),g=v+(m^I&(P^m))+T[15]+1236535329&4294967295,v=I+(g<<22&4294967295|g>>>10),g=m+(I^P&(v^I))+T[1]+4129170786&4294967295,m=v+(g<<5&4294967295|g>>>27),g=P+(v^I&(m^v))+T[6]+3225465664&4294967295,P=m+(g<<9&4294967295|g>>>23),g=I+(m^v&(P^m))+T[11]+643717713&4294967295,I=P+(g<<14&4294967295|g>>>18),g=v+(P^m&(I^P))+T[0]+3921069994&4294967295,v=I+(g<<20&4294967295|g>>>12),g=m+(I^P&(v^I))+T[5]+3593408605&4294967295,m=v+(g<<5&4294967295|g>>>27),g=P+(v^I&(m^v))+T[10]+38016083&4294967295,P=m+(g<<9&4294967295|g>>>23),g=I+(m^v&(P^m))+T[15]+3634488961&4294967295,I=P+(g<<14&4294967295|g>>>18),g=v+(P^m&(I^P))+T[4]+3889429448&4294967295,v=I+(g<<20&4294967295|g>>>12),g=m+(I^P&(v^I))+T[9]+568446438&4294967295,m=v+(g<<5&4294967295|g>>>27),g=P+(v^I&(m^v))+T[14]+3275163606&4294967295,P=m+(g<<9&4294967295|g>>>23),g=I+(m^v&(P^m))+T[3]+4107603335&4294967295,I=P+(g<<14&4294967295|g>>>18),g=v+(P^m&(I^P))+T[8]+1163531501&4294967295,v=I+(g<<20&4294967295|g>>>12),g=m+(I^P&(v^I))+T[13]+2850285829&4294967295,m=v+(g<<5&4294967295|g>>>27),g=P+(v^I&(m^v))+T[2]+4243563512&4294967295,P=m+(g<<9&4294967295|g>>>23),g=I+(m^v&(P^m))+T[7]+1735328473&4294967295,I=P+(g<<14&4294967295|g>>>18),g=v+(P^m&(I^P))+T[12]+2368359562&4294967295,v=I+(g<<20&4294967295|g>>>12),g=m+(v^I^P)+T[5]+4294588738&4294967295,m=v+(g<<4&4294967295|g>>>28),g=P+(m^v^I)+T[8]+2272392833&4294967295,P=m+(g<<11&4294967295|g>>>21),g=I+(P^m^v)+T[11]+1839030562&4294967295,I=P+(g<<16&4294967295|g>>>16),g=v+(I^P^m)+T[14]+4259657740&4294967295,v=I+(g<<23&4294967295|g>>>9),g=m+(v^I^P)+T[1]+2763975236&4294967295,m=v+(g<<4&4294967295|g>>>28),g=P+(m^v^I)+T[4]+1272893353&4294967295,P=m+(g<<11&4294967295|g>>>21),g=I+(P^m^v)+T[7]+4139469664&4294967295,I=P+(g<<16&4294967295|g>>>16),g=v+(I^P^m)+T[10]+3200236656&4294967295,v=I+(g<<23&4294967295|g>>>9),g=m+(v^I^P)+T[13]+681279174&4294967295,m=v+(g<<4&4294967295|g>>>28),g=P+(m^v^I)+T[0]+3936430074&4294967295,P=m+(g<<11&4294967295|g>>>21),g=I+(P^m^v)+T[3]+3572445317&4294967295,I=P+(g<<16&4294967295|g>>>16),g=v+(I^P^m)+T[6]+76029189&4294967295,v=I+(g<<23&4294967295|g>>>9),g=m+(v^I^P)+T[9]+3654602809&4294967295,m=v+(g<<4&4294967295|g>>>28),g=P+(m^v^I)+T[12]+3873151461&4294967295,P=m+(g<<11&4294967295|g>>>21),g=I+(P^m^v)+T[15]+530742520&4294967295,I=P+(g<<16&4294967295|g>>>16),g=v+(I^P^m)+T[2]+3299628645&4294967295,v=I+(g<<23&4294967295|g>>>9),g=m+(I^(v|~P))+T[0]+4096336452&4294967295,m=v+(g<<6&4294967295|g>>>26),g=P+(v^(m|~I))+T[7]+1126891415&4294967295,P=m+(g<<10&4294967295|g>>>22),g=I+(m^(P|~v))+T[14]+2878612391&4294967295,I=P+(g<<15&4294967295|g>>>17),g=v+(P^(I|~m))+T[5]+4237533241&4294967295,v=I+(g<<21&4294967295|g>>>11),g=m+(I^(v|~P))+T[12]+1700485571&4294967295,m=v+(g<<6&4294967295|g>>>26),g=P+(v^(m|~I))+T[3]+2399980690&4294967295,P=m+(g<<10&4294967295|g>>>22),g=I+(m^(P|~v))+T[10]+4293915773&4294967295,I=P+(g<<15&4294967295|g>>>17),g=v+(P^(I|~m))+T[1]+2240044497&4294967295,v=I+(g<<21&4294967295|g>>>11),g=m+(I^(v|~P))+T[8]+1873313359&4294967295,m=v+(g<<6&4294967295|g>>>26),g=P+(v^(m|~I))+T[15]+4264355552&4294967295,P=m+(g<<10&4294967295|g>>>22),g=I+(m^(P|~v))+T[6]+2734768916&4294967295,I=P+(g<<15&4294967295|g>>>17),g=v+(P^(I|~m))+T[13]+1309151649&4294967295,v=I+(g<<21&4294967295|g>>>11),g=m+(I^(v|~P))+T[4]+4149444226&4294967295,m=v+(g<<6&4294967295|g>>>26),g=P+(v^(m|~I))+T[11]+3174756917&4294967295,P=m+(g<<10&4294967295|g>>>22),g=I+(m^(P|~v))+T[2]+718787259&4294967295,I=P+(g<<15&4294967295|g>>>17),g=v+(P^(I|~m))+T[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(I+(g<<21&4294967295|g>>>11))&4294967295,w.g[2]=w.g[2]+I&4294967295,w.g[3]=w.g[3]+P&4294967295}n.prototype.u=function(w,m){m===void 0&&(m=w.length);for(var v=m-this.blockSize,T=this.B,I=this.h,P=0;P<m;){if(I==0)for(;P<=v;)r(this,w,P),P+=this.blockSize;if(typeof w=="string"){for(;P<m;)if(T[I++]=w.charCodeAt(P++),I==this.blockSize){r(this,T),I=0;break}}else for(;P<m;)if(T[I++]=w[P++],I==this.blockSize){r(this,T),I=0;break}}this.h=I,this.o+=m},n.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;var v=8*this.o;for(m=w.length-8;m<w.length;++m)w[m]=v&255,v/=256;for(this.u(w),w=Array(16),m=v=0;4>m;++m)for(var T=0;32>T;T+=8)w[v++]=this.g[m]>>>T&255;return w};function o(w,m){var v=u;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=m(w)}function a(w,m){this.h=m;for(var v=[],T=!0,I=w.length-1;0<=I;I--){var P=w[I]|0;T&&P==m||(v[I]=P,T=!1)}this.g=v}var u={};function h(w){return-128<=w&&128>w?o(w,function(m){return new a([m|0],0>m?-1:0)}):new a([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return _;if(0>w)return L(d(-w));for(var m=[],v=1,T=0;w>=v;T++)m[T]=w/v|0,v*=4294967296;return new a(m,0)}function p(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return L(p(w.substring(1),m));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=d(Math.pow(m,8)),T=_,I=0;I<w.length;I+=8){var P=Math.min(8,w.length-I),g=parseInt(w.substring(I,I+P),m);8>P?(P=d(Math.pow(m,P)),T=T.j(P).add(d(g))):(T=T.j(v),T=T.add(d(g)))}return T}var _=h(0),y=h(1),V=h(16777216);s=a.prototype,s.m=function(){if(x(this))return-L(this).m();for(var w=0,m=1,v=0;v<this.g.length;v++){var T=this.i(v);w+=(0<=T?T:4294967296+T)*m,m*=4294967296}return w},s.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(M(this))return"0";if(x(this))return"-"+L(this).toString(w);for(var m=d(Math.pow(w,6)),v=this,T="";;){var I=fe(v,m).g;v=J(v,I.j(m));var P=((0<v.g.length?v.g[0]:v.h)>>>0).toString(w);if(v=I,M(v))return P+T;for(;6>P.length;)P="0"+P;T=P+T}},s.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function M(w){if(w.h!=0)return!1;for(var m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function x(w){return w.h==-1}s.l=function(w){return w=J(this,w),x(w)?-1:M(w)?0:1};function L(w){for(var m=w.g.length,v=[],T=0;T<m;T++)v[T]=~w.g[T];return new a(v,~w.h).add(y)}s.abs=function(){return x(this)?L(this):this},s.add=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],T=0,I=0;I<=m;I++){var P=T+(this.i(I)&65535)+(w.i(I)&65535),g=(P>>>16)+(this.i(I)>>>16)+(w.i(I)>>>16);T=g>>>16,P&=65535,g&=65535,v[I]=g<<16|P}return new a(v,v[v.length-1]&-2147483648?-1:0)};function J(w,m){return w.add(L(m))}s.j=function(w){if(M(this)||M(w))return _;if(x(this))return x(w)?L(this).j(L(w)):L(L(this).j(w));if(x(w))return L(this.j(L(w)));if(0>this.l(V)&&0>w.l(V))return d(this.m()*w.m());for(var m=this.g.length+w.g.length,v=[],T=0;T<2*m;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var I=0;I<w.g.length;I++){var P=this.i(T)>>>16,g=this.i(T)&65535,nt=w.i(I)>>>16,hn=w.i(I)&65535;v[2*T+2*I]+=g*hn,Q(v,2*T+2*I),v[2*T+2*I+1]+=P*hn,Q(v,2*T+2*I+1),v[2*T+2*I+1]+=g*nt,Q(v,2*T+2*I+1),v[2*T+2*I+2]+=P*nt,Q(v,2*T+2*I+2)}for(T=0;T<m;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=m;T<2*m;T++)v[T]=0;return new a(v,0)};function Q(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function ee(w,m){this.g=w,this.h=m}function fe(w,m){if(M(m))throw Error("division by zero");if(M(w))return new ee(_,_);if(x(w))return m=fe(L(w),m),new ee(L(m.g),L(m.h));if(x(m))return m=fe(w,L(m)),new ee(L(m.g),m.h);if(30<w.g.length){if(x(w)||x(m))throw Error("slowDivide_ only works with positive integers.");for(var v=y,T=m;0>=T.l(w);)v=Be(v),T=Be(T);var I=we(v,1),P=we(T,1);for(T=we(T,2),v=we(v,2);!M(T);){var g=P.add(T);0>=g.l(w)&&(I=I.add(v),P=g),T=we(T,1),v=we(v,1)}return m=J(w,I.j(m)),new ee(I,m)}for(I=_;0<=w.l(m);){for(v=Math.max(1,Math.floor(w.m()/m.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),P=d(v),g=P.j(m);x(g)||0<g.l(w);)v-=T,P=d(v),g=P.j(m);M(P)&&(P=y),I=I.add(P),w=J(w,g)}return new ee(I,w)}s.A=function(w){return fe(this,w).h},s.and=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],T=0;T<m;T++)v[T]=this.i(T)&w.i(T);return new a(v,this.h&w.h)},s.or=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],T=0;T<m;T++)v[T]=this.i(T)|w.i(T);return new a(v,this.h|w.h)},s.xor=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],T=0;T<m;T++)v[T]=this.i(T)^w.i(T);return new a(v,this.h^w.h)};function Be(w){for(var m=w.g.length+1,v=[],T=0;T<m;T++)v[T]=w.i(T)<<1|w.i(T-1)>>>31;return new a(v,w.h)}function we(w,m){var v=m>>5;m%=32;for(var T=w.g.length-v,I=[],P=0;P<T;P++)I[P]=0<m?w.i(P+v)>>>m|w.i(P+v+1)<<32-m:w.i(P+v);return new a(I,w.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Ql=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,_t=a}).apply(typeof Va<"u"?Va:typeof self<"u"?self:typeof window<"u"?window:{});var ys=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xl,Vn,Yl,bs,ni,Jl,Zl,eu;(function(){var s,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,l,c){return i==Array.prototype||i==Object.prototype||(i[l]=c.value),i};function t(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof ys=="object"&&ys];for(var l=0;l<i.length;++l){var c=i[l];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var n=t(this);function r(i,l){if(l)e:{var c=n;i=i.split(".");for(var f=0;f<i.length-1;f++){var A=i[f];if(!(A in c))break e;c=c[A]}i=i[i.length-1],f=c[i],l=l(f),l!=f&&l!=null&&e(c,i,{configurable:!0,writable:!0,value:l})}}function o(i,l){i instanceof String&&(i+="");var c=0,f=!1,A={next:function(){if(!f&&c<i.length){var S=c++;return{value:l(S,i[S]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}r("Array.prototype.values",function(i){return i||function(){return o(this,function(l,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function h(i){var l=typeof i;return l=l!="object"?l:i?Array.isArray(i)?"array":l:"null",l=="array"||l=="object"&&typeof i.length=="number"}function d(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function p(i,l,c){return i.call.apply(i.bind,arguments)}function _(i,l,c){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),i.apply(l,A)}}return function(){return i.apply(l,arguments)}}function y(i,l,c){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:_,y.apply(null,arguments)}function V(i,l){var c=Array.prototype.slice.call(arguments,1);return function(){var f=c.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function M(i,l){function c(){}c.prototype=l.prototype,i.aa=l.prototype,i.prototype=new c,i.prototype.constructor=i,i.Qb=function(f,A,S){for(var $=Array(arguments.length-2),he=2;he<arguments.length;he++)$[he-2]=arguments[he];return l.prototype[A].apply(f,$)}}function x(i){const l=i.length;if(0<l){const c=Array(l);for(let f=0;f<l;f++)c[f]=i[f];return c}return[]}function L(i,l){for(let c=1;c<arguments.length;c++){const f=arguments[c];if(h(f)){const A=i.length||0,S=f.length||0;i.length=A+S;for(let $=0;$<S;$++)i[A+$]=f[$]}else i.push(f)}}class J{constructor(l,c){this.i=l,this.j=c,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function Q(i){return/^[\s\xa0]*$/.test(i)}function ee(){var i=u.navigator;return i&&(i=i.userAgent)?i:""}function fe(i){return fe[" "](i),i}fe[" "]=function(){};var Be=ee().indexOf("Gecko")!=-1&&!(ee().toLowerCase().indexOf("webkit")!=-1&&ee().indexOf("Edge")==-1)&&!(ee().indexOf("Trident")!=-1||ee().indexOf("MSIE")!=-1)&&ee().indexOf("Edge")==-1;function we(i,l,c){for(const f in i)l.call(c,i[f],f,i)}function w(i,l){for(const c in i)l.call(void 0,i[c],c,i)}function m(i){const l={};for(const c in i)l[c]=i[c];return l}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(i,l){let c,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(c in f)i[c]=f[c];for(let S=0;S<v.length;S++)c=v[S],Object.prototype.hasOwnProperty.call(f,c)&&(i[c]=f[c])}}function I(i){var l=1;i=i.split(":");const c=[];for(;0<l&&i.length;)c.push(i.shift()),l--;return i.length&&c.push(i.join(":")),c}function P(i){u.setTimeout(()=>{throw i},0)}function g(){var i=fr;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class nt{constructor(){this.h=this.g=null}add(l,c){const f=hn.get();f.set(l,c),this.h?this.h.next=f:this.g=f,this.h=f}}var hn=new J(()=>new bc,i=>i.reset());class bc{constructor(){this.next=this.g=this.h=null}set(l,c){this.h=l,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let dn,fn=!1,fr=new nt,ho=()=>{const i=u.Promise.resolve(void 0);dn=()=>{i.then(Pc)}};var Pc=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(c){P(c)}var l=hn;l.j(i),100>l.h&&(l.h++,i.next=l.g,l.g=i)}fn=!1};function ut(){this.s=this.s,this.C=this.C}ut.prototype.s=!1,ut.prototype.ma=function(){this.s||(this.s=!0,this.N())},ut.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Re(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}Re.prototype.h=function(){this.defaultPrevented=!0};var Sc=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const c=()=>{};u.addEventListener("test",c,l),u.removeEventListener("test",c,l)}catch{}return i}();function pn(i,l){if(Re.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var c=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget){if(Be){e:{try{fe(l.nodeName);var A=!0;break e}catch{}A=!1}A||(l=null)}}else c=="mouseover"?l=i.fromElement:c=="mouseout"&&(l=i.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Vc[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&pn.aa.h.call(this)}}M(pn,Re);var Vc={2:"touch",3:"pen",4:"mouse"};pn.prototype.h=function(){pn.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var es="closure_listenable_"+(1e6*Math.random()|0),Rc=0;function kc(i,l,c,f,A){this.listener=i,this.proxy=null,this.src=l,this.type=c,this.capture=!!f,this.ha=A,this.key=++Rc,this.da=this.fa=!1}function ts(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function ns(i){this.src=i,this.g={},this.h=0}ns.prototype.add=function(i,l,c,f,A){var S=i.toString();i=this.g[S],i||(i=this.g[S]=[],this.h++);var $=mr(i,l,f,A);return-1<$?(l=i[$],c||(l.fa=!1)):(l=new kc(l,this.src,S,!!f,A),l.fa=c,i.push(l)),l};function pr(i,l){var c=l.type;if(c in i.g){var f=i.g[c],A=Array.prototype.indexOf.call(f,l,void 0),S;(S=0<=A)&&Array.prototype.splice.call(f,A,1),S&&(ts(l),i.g[c].length==0&&(delete i.g[c],i.h--))}}function mr(i,l,c,f){for(var A=0;A<i.length;++A){var S=i[A];if(!S.da&&S.listener==l&&S.capture==!!c&&S.ha==f)return A}return-1}var gr="closure_lm_"+(1e6*Math.random()|0),_r={};function fo(i,l,c,f,A){if(Array.isArray(l)){for(var S=0;S<l.length;S++)fo(i,l[S],c,f,A);return null}return c=go(c),i&&i[es]?i.K(l,c,d(f)?!!f.capture:!1,A):Cc(i,l,c,!1,f,A)}function Cc(i,l,c,f,A,S){if(!l)throw Error("Invalid event type");var $=d(A)?!!A.capture:!!A,he=yr(i);if(he||(i[gr]=he=new ns(i)),c=he.add(l,c,f,$,S),c.proxy)return c;if(f=Dc(),c.proxy=f,f.src=i,f.listener=c,i.addEventListener)Sc||(A=$),A===void 0&&(A=!1),i.addEventListener(l.toString(),f,A);else if(i.attachEvent)i.attachEvent(mo(l.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return c}function Dc(){function i(c){return l.call(i.src,i.listener,c)}const l=Nc;return i}function po(i,l,c,f,A){if(Array.isArray(l))for(var S=0;S<l.length;S++)po(i,l[S],c,f,A);else f=d(f)?!!f.capture:!!f,c=go(c),i&&i[es]?(i=i.i,l=String(l).toString(),l in i.g&&(S=i.g[l],c=mr(S,c,f,A),-1<c&&(ts(S[c]),Array.prototype.splice.call(S,c,1),S.length==0&&(delete i.g[l],i.h--)))):i&&(i=yr(i))&&(l=i.g[l.toString()],i=-1,l&&(i=mr(l,c,f,A)),(c=-1<i?l[i]:null)&&vr(c))}function vr(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[es])pr(l.i,i);else{var c=i.type,f=i.proxy;l.removeEventListener?l.removeEventListener(c,f,i.capture):l.detachEvent?l.detachEvent(mo(c),f):l.addListener&&l.removeListener&&l.removeListener(f),(c=yr(l))?(pr(c,i),c.h==0&&(c.src=null,l[gr]=null)):ts(i)}}}function mo(i){return i in _r?_r[i]:_r[i]="on"+i}function Nc(i,l){if(i.da)i=!0;else{l=new pn(l,this);var c=i.listener,f=i.ha||i.src;i.fa&&vr(i),i=c.call(f,l)}return i}function yr(i){return i=i[gr],i instanceof ns?i:null}var Er="__closure_events_fn_"+(1e9*Math.random()>>>0);function go(i){return typeof i=="function"?i:(i[Er]||(i[Er]=function(l){return i.handleEvent(l)}),i[Er])}function ke(){ut.call(this),this.i=new ns(this),this.M=this,this.F=null}M(ke,ut),ke.prototype[es]=!0,ke.prototype.removeEventListener=function(i,l,c,f){po(this,i,l,c,f)};function Oe(i,l){var c,f=i.F;if(f)for(c=[];f;f=f.F)c.push(f);if(i=i.M,f=l.type||l,typeof l=="string")l=new Re(l,i);else if(l instanceof Re)l.target=l.target||i;else{var A=l;l=new Re(f,i),T(l,A)}if(A=!0,c)for(var S=c.length-1;0<=S;S--){var $=l.g=c[S];A=ss($,f,!0,l)&&A}if($=l.g=i,A=ss($,f,!0,l)&&A,A=ss($,f,!1,l)&&A,c)for(S=0;S<c.length;S++)$=l.g=c[S],A=ss($,f,!1,l)&&A}ke.prototype.N=function(){if(ke.aa.N.call(this),this.i){var i=this.i,l;for(l in i.g){for(var c=i.g[l],f=0;f<c.length;f++)ts(c[f]);delete i.g[l],i.h--}}this.F=null},ke.prototype.K=function(i,l,c,f){return this.i.add(String(i),l,!1,c,f)},ke.prototype.L=function(i,l,c,f){return this.i.add(String(i),l,!0,c,f)};function ss(i,l,c,f){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,S=0;S<l.length;++S){var $=l[S];if($&&!$.da&&$.capture==c){var he=$.listener,Ae=$.ha||$.src;$.fa&&pr(i.i,$),A=he.call(Ae,f)!==!1&&A}}return A&&!f.defaultPrevented}function _o(i,l,c){if(typeof i=="function")c&&(i=y(i,c));else if(i&&typeof i.handleEvent=="function")i=y(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(i,l||0)}function vo(i){i.g=_o(()=>{i.g=null,i.i&&(i.i=!1,vo(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class Lc extends ut{constructor(l,c){super(),this.m=l,this.l=c,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:vo(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mn(i){ut.call(this),this.h=i,this.g={}}M(mn,ut);var yo=[];function Eo(i){we(i.g,function(l,c){this.g.hasOwnProperty(c)&&vr(l)},i),i.g={}}mn.prototype.N=function(){mn.aa.N.call(this),Eo(this)},mn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Tr=u.JSON.stringify,Mc=u.JSON.parse,Oc=class{stringify(i){return u.JSON.stringify(i,void 0)}parse(i){return u.JSON.parse(i,void 0)}};function Ir(){}Ir.prototype.h=null;function To(i){return i.h||(i.h=i.i())}function Io(){}var gn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function wr(){Re.call(this,"d")}M(wr,Re);function Ar(){Re.call(this,"c")}M(Ar,Re);var Vt={},wo=null;function rs(){return wo=wo||new ke}Vt.La="serverreachability";function Ao(i){Re.call(this,Vt.La,i)}M(Ao,Re);function _n(i){const l=rs();Oe(l,new Ao(l))}Vt.STAT_EVENT="statevent";function bo(i,l){Re.call(this,Vt.STAT_EVENT,i),this.stat=l}M(bo,Re);function $e(i){const l=rs();Oe(l,new bo(l,i))}Vt.Ma="timingevent";function Po(i,l){Re.call(this,Vt.Ma,i),this.size=l}M(Po,Re);function vn(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){i()},l)}function yn(){this.g=!0}yn.prototype.xa=function(){this.g=!1};function $c(i,l,c,f,A,S){i.info(function(){if(i.g)if(S)for(var $="",he=S.split("&"),Ae=0;Ae<he.length;Ae++){var ae=he[Ae].split("=");if(1<ae.length){var Ce=ae[0];ae=ae[1];var De=Ce.split("_");$=2<=De.length&&De[1]=="type"?$+(Ce+"="+ae+"&"):$+(Ce+"=redacted&")}}else $=null;else $=S;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+l+`
`+c+`
`+$})}function xc(i,l,c,f,A,S,$){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+l+`
`+c+`
`+S+" "+$})}function Ut(i,l,c,f){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+Bc(i,c)+(f?" "+f:"")})}function Fc(i,l){i.info(function(){return"TIMEOUT: "+l})}yn.prototype.info=function(){};function Bc(i,l){if(!i.g)return l;if(!l)return null;try{var c=JSON.parse(l);if(c){for(i=0;i<c.length;i++)if(Array.isArray(c[i])){var f=c[i];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var S=A[0];if(S!="noop"&&S!="stop"&&S!="close")for(var $=1;$<A.length;$++)A[$]=""}}}}return Tr(c)}catch{return l}}var is={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},So={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},br;function os(){}M(os,Ir),os.prototype.g=function(){return new XMLHttpRequest},os.prototype.i=function(){return{}},br=new os;function ct(i,l,c,f){this.j=i,this.i=l,this.l=c,this.R=f||1,this.U=new mn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vo}function Vo(){this.i=null,this.g="",this.h=!1}var Ro={},Pr={};function Sr(i,l,c){i.L=1,i.v=cs(st(l)),i.m=c,i.P=!0,ko(i,null)}function ko(i,l){i.F=Date.now(),as(i),i.A=st(i.v);var c=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),qo(c.i,"t",f),i.C=0,c=i.j.J,i.h=new Vo,i.g=la(i.j,c?l:null,!i.m),0<i.O&&(i.M=new Lc(y(i.Y,i,i.g),i.O)),l=i.U,c=i.g,f=i.ca;var A="readystatechange";Array.isArray(A)||(A&&(yo[0]=A.toString()),A=yo);for(var S=0;S<A.length;S++){var $=fo(c,A[S],f||l.handleEvent,!1,l.h||l);if(!$)break;l.g[$.key]=$}l=i.H?m(i.H):{},i.m?(i.u||(i.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,l)):(i.u="GET",i.g.ea(i.A,i.u,null,l)),_n(),$c(i.i,i.u,i.A,i.l,i.R,i.m)}ct.prototype.ca=function(i){i=i.target;const l=this.M;l&&rt(i)==3?l.j():this.Y(i)},ct.prototype.Y=function(i){try{if(i==this.g)e:{const De=rt(this.g);var l=this.g.Ba();const qt=this.g.Z();if(!(3>De)&&(De!=3||this.g&&(this.h.h||this.g.oa()||Yo(this.g)))){this.J||De!=4||l==7||(l==8||0>=qt?_n(3):_n(2)),Vr(this);var c=this.g.Z();this.X=c;t:if(Co(this)){var f=Yo(this.g);i="";var A=f.length,S=rt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Rt(this),En(this);var $="";break t}this.h.i=new u.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,i+=this.h.i.decode(f[l],{stream:!(S&&l==A-1)});f.length=0,this.h.g+=i,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=c==200,xc(this.i,this.u,this.A,this.l,this.R,De,c),this.o){if(this.T&&!this.K){t:{if(this.g){var he,Ae=this.g;if((he=Ae.g?Ae.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Q(he)){var ae=he;break t}}ae=null}if(c=ae)Ut(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Rr(this,c);else{this.o=!1,this.s=3,$e(12),Rt(this),En(this);break e}}if(this.P){c=!0;let Ge;for(;!this.J&&this.C<$.length;)if(Ge=Uc(this,$),Ge==Pr){De==4&&(this.s=4,$e(14),c=!1),Ut(this.i,this.l,null,"[Incomplete Response]");break}else if(Ge==Ro){this.s=4,$e(15),Ut(this.i,this.l,$,"[Invalid Chunk]"),c=!1;break}else Ut(this.i,this.l,Ge,null),Rr(this,Ge);if(Co(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),De!=4||$.length!=0||this.h.h||(this.s=1,$e(16),c=!1),this.o=this.o&&c,!c)Ut(this.i,this.l,$,"[Invalid Chunked Response]"),Rt(this),En(this);else if(0<$.length&&!this.W){this.W=!0;var Ce=this.j;Ce.g==this&&Ce.ba&&!Ce.M&&(Ce.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),Mr(Ce),Ce.M=!0,$e(11))}}else Ut(this.i,this.l,$,null),Rr(this,$);De==4&&Rt(this),this.o&&!this.J&&(De==4?ra(this.j,this):(this.o=!1,as(this)))}else rh(this.g),c==400&&0<$.indexOf("Unknown SID")?(this.s=3,$e(12)):(this.s=0,$e(13)),Rt(this),En(this)}}}catch{}finally{}};function Co(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Uc(i,l){var c=i.C,f=l.indexOf(`
`,c);return f==-1?Pr:(c=Number(l.substring(c,f)),isNaN(c)?Ro:(f+=1,f+c>l.length?Pr:(l=l.slice(f,f+c),i.C=f+c,l)))}ct.prototype.cancel=function(){this.J=!0,Rt(this)};function as(i){i.S=Date.now()+i.I,Do(i,i.I)}function Do(i,l){if(i.B!=null)throw Error("WatchDog timer not null");i.B=vn(y(i.ba,i),l)}function Vr(i){i.B&&(u.clearTimeout(i.B),i.B=null)}ct.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Fc(this.i,this.A),this.L!=2&&(_n(),$e(17)),Rt(this),this.s=2,En(this)):Do(this,this.S-i)};function En(i){i.j.G==0||i.J||ra(i.j,i)}function Rt(i){Vr(i);var l=i.M;l&&typeof l.ma=="function"&&l.ma(),i.M=null,Eo(i.U),i.g&&(l=i.g,i.g=null,l.abort(),l.ma())}function Rr(i,l){try{var c=i.j;if(c.G!=0&&(c.g==i||kr(c.h,i))){if(!i.K&&kr(c.h,i)&&c.G==3){try{var f=c.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){e:if(!c.u){if(c.g)if(c.g.F+3e3<i.F)gs(c),ps(c);else break e;Lr(c),$e(18)}}else c.za=A[1],0<c.za-c.T&&37500>A[2]&&c.F&&c.v==0&&!c.C&&(c.C=vn(y(c.Za,c),6e3));if(1>=Mo(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else Ct(c,11)}else if((i.K||c.g==i)&&gs(c),!Q(l))for(A=c.Da.g.parse(l),l=0;l<A.length;l++){let ae=A[l];if(c.T=ae[0],ae=ae[1],c.G==2)if(ae[0]=="c"){c.K=ae[1],c.ia=ae[2];const Ce=ae[3];Ce!=null&&(c.la=Ce,c.j.info("VER="+c.la));const De=ae[4];De!=null&&(c.Aa=De,c.j.info("SVER="+c.Aa));const qt=ae[5];qt!=null&&typeof qt=="number"&&0<qt&&(f=1.5*qt,c.L=f,c.j.info("backChannelRequestTimeoutMs_="+f)),f=c;const Ge=i.g;if(Ge){const vs=Ge.g?Ge.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vs){var S=f.h;S.g||vs.indexOf("spdy")==-1&&vs.indexOf("quic")==-1&&vs.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Cr(S,S.h),S.h=null))}if(f.D){const Or=Ge.g?Ge.g.getResponseHeader("X-HTTP-Session-Id"):null;Or&&(f.ya=Or,de(f.I,f.D,Or))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-i.F,c.j.info("Handshake RTT: "+c.R+"ms")),f=c;var $=i;if(f.qa=aa(f,f.J?f.ia:null,f.W),$.K){Oo(f.h,$);var he=$,Ae=f.L;Ae&&(he.I=Ae),he.B&&(Vr(he),as(he)),f.g=$}else na(f);0<c.i.length&&ms(c)}else ae[0]!="stop"&&ae[0]!="close"||Ct(c,7);else c.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?Ct(c,7):Nr(c):ae[0]!="noop"&&c.l&&c.l.ta(ae),c.v=0)}}_n(4)}catch{}}var jc=class{constructor(i,l){this.g=i,this.map=l}};function No(i){this.l=i||10,u.PerformanceNavigationTiming?(i=u.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Lo(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Mo(i){return i.h?1:i.g?i.g.size:0}function kr(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function Cr(i,l){i.g?i.g.add(l):i.h=l}function Oo(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}No.prototype.cancel=function(){if(this.i=$o(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function $o(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const c of i.g.values())l=l.concat(c.D);return l}return x(i.i)}function Hc(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var l=[],c=i.length,f=0;f<c;f++)l.push(i[f]);return l}l=[],c=0;for(f in i)l[c++]=i[f];return l}function qc(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var l=[];i=i.length;for(var c=0;c<i;c++)l.push(c);return l}l=[],c=0;for(const f in i)l[c++]=f;return l}}}function xo(i,l){if(i.forEach&&typeof i.forEach=="function")i.forEach(l,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,l,void 0);else for(var c=qc(i),f=Hc(i),A=f.length,S=0;S<A;S++)l.call(void 0,f[S],c&&c[S],i)}var Fo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zc(i,l){if(i){i=i.split("&");for(var c=0;c<i.length;c++){var f=i[c].indexOf("="),A=null;if(0<=f){var S=i[c].substring(0,f);A=i[c].substring(f+1)}else S=i[c];l(S,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function kt(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof kt){this.h=i.h,ls(this,i.j),this.o=i.o,this.g=i.g,us(this,i.s),this.l=i.l;var l=i.i,c=new wn;c.i=l.i,l.g&&(c.g=new Map(l.g),c.h=l.h),Bo(this,c),this.m=i.m}else i&&(l=String(i).match(Fo))?(this.h=!1,ls(this,l[1]||"",!0),this.o=Tn(l[2]||""),this.g=Tn(l[3]||"",!0),us(this,l[4]),this.l=Tn(l[5]||"",!0),Bo(this,l[6]||"",!0),this.m=Tn(l[7]||"")):(this.h=!1,this.i=new wn(null,this.h))}kt.prototype.toString=function(){var i=[],l=this.j;l&&i.push(In(l,Uo,!0),":");var c=this.g;return(c||l=="file")&&(i.push("//"),(l=this.o)&&i.push(In(l,Uo,!0),"@"),i.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&i.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&i.push("/"),i.push(In(c,c.charAt(0)=="/"?Wc:Kc,!0))),(c=this.i.toString())&&i.push("?",c),(c=this.m)&&i.push("#",In(c,Xc)),i.join("")};function st(i){return new kt(i)}function ls(i,l,c){i.j=c?Tn(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function us(i,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);i.s=l}else i.s=null}function Bo(i,l,c){l instanceof wn?(i.i=l,Yc(i.i,i.h)):(c||(l=In(l,Qc)),i.i=new wn(l,i.h))}function de(i,l,c){i.i.set(l,c)}function cs(i){return de(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Tn(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function In(i,l,c){return typeof i=="string"?(i=encodeURI(i).replace(l,Gc),c&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Gc(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Uo=/[#\/\?@]/g,Kc=/[#\?:]/g,Wc=/[#\?]/g,Qc=/[#\?@]/g,Xc=/#/g;function wn(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function ht(i){i.g||(i.g=new Map,i.h=0,i.i&&zc(i.i,function(l,c){i.add(decodeURIComponent(l.replace(/\+/g," ")),c)}))}s=wn.prototype,s.add=function(i,l){ht(this),this.i=null,i=jt(this,i);var c=this.g.get(i);return c||this.g.set(i,c=[]),c.push(l),this.h+=1,this};function jo(i,l){ht(i),l=jt(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function Ho(i,l){return ht(i),l=jt(i,l),i.g.has(l)}s.forEach=function(i,l){ht(this),this.g.forEach(function(c,f){c.forEach(function(A){i.call(l,A,f,this)},this)},this)},s.na=function(){ht(this);const i=Array.from(this.g.values()),l=Array.from(this.g.keys()),c=[];for(let f=0;f<l.length;f++){const A=i[f];for(let S=0;S<A.length;S++)c.push(l[f])}return c},s.V=function(i){ht(this);let l=[];if(typeof i=="string")Ho(this,i)&&(l=l.concat(this.g.get(jt(this,i))));else{i=Array.from(this.g.values());for(let c=0;c<i.length;c++)l=l.concat(i[c])}return l},s.set=function(i,l){return ht(this),this.i=null,i=jt(this,i),Ho(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},s.get=function(i,l){return i?(i=this.V(i),0<i.length?String(i[0]):l):l};function qo(i,l,c){jo(i,l),0<c.length&&(i.i=null,i.g.set(jt(i,l),x(c)),i.h+=c.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(var c=0;c<l.length;c++){var f=l[c];const S=encodeURIComponent(String(f)),$=this.V(f);for(f=0;f<$.length;f++){var A=S;$[f]!==""&&(A+="="+encodeURIComponent(String($[f]))),i.push(A)}}return this.i=i.join("&")};function jt(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function Yc(i,l){l&&!i.j&&(ht(i),i.i=null,i.g.forEach(function(c,f){var A=f.toLowerCase();f!=A&&(jo(this,f),qo(this,A,c))},i)),i.j=l}function Jc(i,l){const c=new yn;if(u.Image){const f=new Image;f.onload=V(dt,c,"TestLoadImage: loaded",!0,l,f),f.onerror=V(dt,c,"TestLoadImage: error",!1,l,f),f.onabort=V(dt,c,"TestLoadImage: abort",!1,l,f),f.ontimeout=V(dt,c,"TestLoadImage: timeout",!1,l,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else l(!1)}function Zc(i,l){const c=new yn,f=new AbortController,A=setTimeout(()=>{f.abort(),dt(c,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:f.signal}).then(S=>{clearTimeout(A),S.ok?dt(c,"TestPingServer: ok",!0,l):dt(c,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),dt(c,"TestPingServer: error",!1,l)})}function dt(i,l,c,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(c)}catch{}}function eh(){this.g=new Oc}function th(i,l,c){const f=c||"";try{xo(i,function(A,S){let $=A;d(A)&&($=Tr(A)),l.push(f+S+"="+encodeURIComponent($))})}catch(A){throw l.push(f+"type="+encodeURIComponent("_badmap")),A}}function hs(i){this.l=i.Ub||null,this.j=i.eb||!1}M(hs,Ir),hs.prototype.g=function(){return new ds(this.l,this.j)},hs.prototype.i=function(i){return function(){return i}}({});function ds(i,l){ke.call(this),this.D=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}M(ds,ke),s=ds.prototype,s.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=l,this.readyState=1,bn(this)},s.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(l.body=i),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,An(this)),this.readyState=0},s.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,bn(this)),this.g&&(this.readyState=3,bn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;zo(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function zo(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}s.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?An(this):bn(this),this.readyState==3&&zo(this)}},s.Ra=function(i){this.g&&(this.response=this.responseText=i,An(this))},s.Qa=function(i){this.g&&(this.response=i,An(this))},s.ga=function(){this.g&&An(this)};function An(i){i.readyState=4,i.l=null,i.j=null,i.v=null,bn(i)}s.setRequestHeader=function(i,l){this.u.append(i,l)},s.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var c=l.next();!c.done;)c=c.value,i.push(c[0]+": "+c[1]),c=l.next();return i.join(`\r
`)};function bn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(ds.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Go(i){let l="";return we(i,function(c,f){l+=f,l+=":",l+=c,l+=`\r
`}),l}function Dr(i,l,c){e:{for(f in c){var f=!1;break e}f=!0}f||(c=Go(c),typeof i=="string"?c!=null&&encodeURIComponent(String(c)):de(i,l,c))}function me(i){ke.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}M(me,ke);var nh=/^https?$/i,sh=["POST","PUT"];s=me.prototype,s.Ha=function(i){this.J=i},s.ea=function(i,l,c,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():br.g(),this.v=this.o?To(this.o):To(br),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(S){Ko(this,S);return}if(i=c||"",c=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)c.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const S of f.keys())c.set(S,f.get(S));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(c.keys()).find(S=>S.toLowerCase()=="content-type"),A=u.FormData&&i instanceof u.FormData,!(0<=Array.prototype.indexOf.call(sh,l,void 0))||f||A||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,$]of c)this.g.setRequestHeader(S,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Xo(this),this.u=!0,this.g.send(i),this.u=!1}catch(S){Ko(this,S)}};function Ko(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.m=5,Wo(i),fs(i)}function Wo(i){i.A||(i.A=!0,Oe(i,"complete"),Oe(i,"error"))}s.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Oe(this,"complete"),Oe(this,"abort"),fs(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fs(this,!0)),me.aa.N.call(this)},s.Ea=function(){this.s||(this.B||this.u||this.j?Qo(this):this.bb())},s.bb=function(){Qo(this)};function Qo(i){if(i.h&&typeof a<"u"&&(!i.v[1]||rt(i)!=4||i.Z()!=2)){if(i.u&&rt(i)==4)_o(i.Ea,0,i);else if(Oe(i,"readystatechange"),rt(i)==4){i.h=!1;try{const $=i.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var c;if(!(c=l)){var f;if(f=$===0){var A=String(i.D).match(Fo)[1]||null;!A&&u.self&&u.self.location&&(A=u.self.location.protocol.slice(0,-1)),f=!nh.test(A?A.toLowerCase():"")}c=f}if(c)Oe(i,"complete"),Oe(i,"success");else{i.m=6;try{var S=2<rt(i)?i.g.statusText:""}catch{S=""}i.l=S+" ["+i.Z()+"]",Wo(i)}}finally{fs(i)}}}}function fs(i,l){if(i.g){Xo(i);const c=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,l||Oe(i,"ready");try{c.onreadystatechange=f}catch{}}}function Xo(i){i.I&&(u.clearTimeout(i.I),i.I=null)}s.isActive=function(){return!!this.g};function rt(i){return i.g?i.g.readyState:0}s.Z=function(){try{return 2<rt(this)?this.g.status:-1}catch{return-1}},s.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.Oa=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),Mc(l)}};function Yo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function rh(i){const l={};i=(i.g&&2<=rt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(Q(i[f]))continue;var c=I(i[f]);const A=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const S=l[A]||[];l[A]=S,S.push(c)}w(l,function(f){return f.join(", ")})}s.Ba=function(){return this.m},s.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Pn(i,l,c){return c&&c.internalChannelParams&&c.internalChannelParams[i]||l}function Jo(i){this.Aa=0,this.i=[],this.j=new yn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Pn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Pn("baseRetryDelayMs",5e3,i),this.cb=Pn("retryDelaySeedMs",1e4,i),this.Wa=Pn("forwardChannelMaxRetries",2,i),this.wa=Pn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new No(i&&i.concurrentRequestLimit),this.Da=new eh,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}s=Jo.prototype,s.la=8,s.G=1,s.connect=function(i,l,c,f){$e(0),this.W=i,this.H=l||{},c&&f!==void 0&&(this.H.OSID=c,this.H.OAID=f),this.F=this.X,this.I=aa(this,null,this.W),ms(this)};function Nr(i){if(Zo(i),i.G==3){var l=i.U++,c=st(i.I);if(de(c,"SID",i.K),de(c,"RID",l),de(c,"TYPE","terminate"),Sn(i,c),l=new ct(i,i.j,l),l.L=2,l.v=cs(st(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=l.v,c=!0),c||(l.g=la(l.j,null),l.g.ea(l.v)),l.F=Date.now(),as(l)}oa(i)}function ps(i){i.g&&(Mr(i),i.g.cancel(),i.g=null)}function Zo(i){ps(i),i.u&&(u.clearTimeout(i.u),i.u=null),gs(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&u.clearTimeout(i.s),i.s=null)}function ms(i){if(!Lo(i.h)&&!i.s){i.s=!0;var l=i.Ga;dn||ho(),fn||(dn(),fn=!0),fr.add(l,i),i.B=0}}function ih(i,l){return Mo(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=l.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=vn(y(i.Ga,i,l),ia(i,i.B)),i.B++,!0)}s.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const A=new ct(this,this.j,i);let S=this.o;if(this.S&&(S?(S=m(S),T(S,this.S)):S=this.S),this.m!==null||this.O||(A.H=S,S=null),this.P)e:{for(var l=0,c=0;c<this.i.length;c++){t:{var f=this.i[c];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=c;break e}if(l===4096||c===this.i.length-1){l=c+1;break e}}l=1e3}else l=1e3;l=ta(this,A,l),c=st(this.I),de(c,"RID",i),de(c,"CVER",22),this.D&&de(c,"X-HTTP-Session-Id",this.D),Sn(this,c),S&&(this.O?l="headers="+encodeURIComponent(String(Go(S)))+"&"+l:this.m&&Dr(c,this.m,S)),Cr(this.h,A),this.Ua&&de(c,"TYPE","init"),this.P?(de(c,"$req",l),de(c,"SID","null"),A.T=!0,Sr(A,c,null)):Sr(A,c,l),this.G=2}}else this.G==3&&(i?ea(this,i):this.i.length==0||Lo(this.h)||ea(this))};function ea(i,l){var c;l?c=l.l:c=i.U++;const f=st(i.I);de(f,"SID",i.K),de(f,"RID",c),de(f,"AID",i.T),Sn(i,f),i.m&&i.o&&Dr(f,i.m,i.o),c=new ct(i,i.j,c,i.B+1),i.m===null&&(c.H=i.o),l&&(i.i=l.D.concat(i.i)),l=ta(i,c,1e3),c.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Cr(i.h,c),Sr(c,f,l)}function Sn(i,l){i.H&&we(i.H,function(c,f){de(l,f,c)}),i.l&&xo({},function(c,f){de(l,f,c)})}function ta(i,l,c){c=Math.min(i.i.length,c);var f=i.l?y(i.l.Na,i.l,i):null;e:{var A=i.i;let S=-1;for(;;){const $=["count="+c];S==-1?0<c?(S=A[0].g,$.push("ofs="+S)):S=0:$.push("ofs="+S);let he=!0;for(let Ae=0;Ae<c;Ae++){let ae=A[Ae].g;const Ce=A[Ae].map;if(ae-=S,0>ae)S=Math.max(0,A[Ae].g-100),he=!1;else try{th(Ce,$,"req"+ae+"_")}catch{f&&f(Ce)}}if(he){f=$.join("&");break e}}}return i=i.i.splice(0,c),l.D=i,f}function na(i){if(!i.g&&!i.u){i.Y=1;var l=i.Fa;dn||ho(),fn||(dn(),fn=!0),fr.add(l,i),i.v=0}}function Lr(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=vn(y(i.Fa,i),ia(i,i.v)),i.v++,!0)}s.Fa=function(){if(this.u=null,sa(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=vn(y(this.ab,this),i)}},s.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,$e(10),ps(this),sa(this))};function Mr(i){i.A!=null&&(u.clearTimeout(i.A),i.A=null)}function sa(i){i.g=new ct(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var l=st(i.qa);de(l,"RID","rpc"),de(l,"SID",i.K),de(l,"AID",i.T),de(l,"CI",i.F?"0":"1"),!i.F&&i.ja&&de(l,"TO",i.ja),de(l,"TYPE","xmlhttp"),Sn(i,l),i.m&&i.o&&Dr(l,i.m,i.o),i.L&&(i.g.I=i.L);var c=i.g;i=i.ia,c.L=1,c.v=cs(st(l)),c.m=null,c.P=!0,ko(c,i)}s.Za=function(){this.C!=null&&(this.C=null,ps(this),Lr(this),$e(19))};function gs(i){i.C!=null&&(u.clearTimeout(i.C),i.C=null)}function ra(i,l){var c=null;if(i.g==l){gs(i),Mr(i),i.g=null;var f=2}else if(kr(i.h,l))c=l.D,Oo(i.h,l),f=1;else return;if(i.G!=0){if(l.o)if(f==1){c=l.m?l.m.length:0,l=Date.now()-l.F;var A=i.B;f=rs(),Oe(f,new Po(f,c)),ms(i)}else na(i);else if(A=l.s,A==3||A==0&&0<l.X||!(f==1&&ih(i,l)||f==2&&Lr(i)))switch(c&&0<c.length&&(l=i.h,l.i=l.i.concat(c)),A){case 1:Ct(i,5);break;case 4:Ct(i,10);break;case 3:Ct(i,6);break;default:Ct(i,2)}}}function ia(i,l){let c=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(c*=2),c*l}function Ct(i,l){if(i.j.info("Error code "+l),l==2){var c=y(i.fb,i),f=i.Xa;const A=!f;f=new kt(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||ls(f,"https"),cs(f),A?Jc(f.toString(),c):Zc(f.toString(),c)}else $e(2);i.G=0,i.l&&i.l.sa(l),oa(i),Zo(i)}s.fb=function(i){i?(this.j.info("Successfully pinged google.com"),$e(2)):(this.j.info("Failed to ping google.com"),$e(1))};function oa(i){if(i.G=0,i.ka=[],i.l){const l=$o(i.h);(l.length!=0||i.i.length!=0)&&(L(i.ka,l),L(i.ka,i.i),i.h.i.length=0,x(i.i),i.i.length=0),i.l.ra()}}function aa(i,l,c){var f=c instanceof kt?st(c):new kt(c);if(f.g!="")l&&(f.g=l+"."+f.g),us(f,f.s);else{var A=u.location;f=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var S=new kt(null);f&&ls(S,f),l&&(S.g=l),A&&us(S,A),c&&(S.l=c),f=S}return c=i.D,l=i.ya,c&&l&&de(f,c,l),de(f,"VER",i.la),Sn(i,f),f}function la(i,l,c){if(l&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Ca&&!i.pa?new me(new hs({eb:c})):new me(i.pa),l.Ha(i.J),l}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function ua(){}s=ua.prototype,s.ua=function(){},s.ta=function(){},s.sa=function(){},s.ra=function(){},s.isActive=function(){return!0},s.Na=function(){};function _s(){}_s.prototype.g=function(i,l){return new Ue(i,l)};function Ue(i,l){ke.call(this),this.g=new Jo(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(i?i["X-WebChannel-Client-Profile"]=l.va:i={"X-WebChannel-Client-Profile":l.va}),this.g.S=i,(i=l&&l.Sb)&&!Q(i)&&(this.g.m=i),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!Q(l)&&(this.g.D=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new Ht(this)}M(Ue,ke),Ue.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ue.prototype.close=function(){Nr(this.g)},Ue.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var c={};c.__data__=i,i=c}else this.u&&(c={},c.__data__=Tr(i),i=c);l.i.push(new jc(l.Ya++,i)),l.G==3&&ms(l)},Ue.prototype.N=function(){this.g.l=null,delete this.j,Nr(this.g),delete this.g,Ue.aa.N.call(this)};function ca(i){wr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){e:{for(const c in l){i=c;break e}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}M(ca,wr);function ha(){Ar.call(this),this.status=1}M(ha,Ar);function Ht(i){this.g=i}M(Ht,ua),Ht.prototype.ua=function(){Oe(this.g,"a")},Ht.prototype.ta=function(i){Oe(this.g,new ca(i))},Ht.prototype.sa=function(i){Oe(this.g,new ha)},Ht.prototype.ra=function(){Oe(this.g,"b")},_s.prototype.createWebChannel=_s.prototype.g,Ue.prototype.send=Ue.prototype.o,Ue.prototype.open=Ue.prototype.m,Ue.prototype.close=Ue.prototype.close,eu=function(){return new _s},Zl=function(){return rs()},Jl=Vt,ni={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},is.NO_ERROR=0,is.TIMEOUT=8,is.HTTP_ERROR=6,bs=is,So.COMPLETE="complete",Yl=So,Io.EventType=gn,gn.OPEN="a",gn.CLOSE="b",gn.ERROR="c",gn.MESSAGE="d",ke.prototype.listen=ke.prototype.K,Vn=Io,me.prototype.listenOnce=me.prototype.L,me.prototype.getLastError=me.prototype.Ka,me.prototype.getLastErrorCode=me.prototype.Ba,me.prototype.getStatus=me.prototype.Z,me.prototype.getResponseJson=me.prototype.Oa,me.prototype.getResponseText=me.prototype.oa,me.prototype.send=me.prototype.ea,me.prototype.setWithCredentials=me.prototype.Ha,Xl=me}).apply(typeof ys<"u"?ys:typeof self<"u"?self:typeof window<"u"?window:{});const Ra="@firebase/firestore",ka="4.7.17";/**
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
 */const Ot=new Hl("@firebase/firestore");function zt(){return Ot.logLevel}function F(s,...e){if(Ot.logLevel<=oe.DEBUG){const t=e.map(Di);Ot.debug(`Firestore (${an}): ${s}`,...t)}}function ot(s,...e){if(Ot.logLevel<=oe.ERROR){const t=e.map(Di);Ot.error(`Firestore (${an}): ${s}`,...t)}}function Jt(s,...e){if(Ot.logLevel<=oe.WARN){const t=e.map(Di);Ot.warn(`Firestore (${an}): ${s}`,...t)}}function Di(s){if(typeof s=="string")return s;try{/**
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
*/return function(t){return JSON.stringify(t)}(s)}catch{return s}}/**
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
 */function W(s,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,tu(s,n,t)}function tu(s,e,t){let n=`FIRESTORE (${an}) INTERNAL ASSERTION FAILED: ${e} (ID: ${s.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw ot(n),new Error(n)}function ce(s,e,t,n){let r="Unexpected state";typeof t=="string"?r=t:n=t,s||tu(e,r,n)}function Y(s,e){return s}/**
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
 */class nu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Z_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Le.UNAUTHENTICATED))}shutdown(){}}class ev{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class tv{constructor(e){this.t=e,this.currentUser=Le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ce(this.o===void 0,42304);let n=this.i;const r=h=>this.i!==n?(n=this.i,t(h)):Promise.resolve();let o=new vt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new vt,e.enqueueRetryable(()=>r(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await r(this.currentUser)})},u=h=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new vt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(ce(typeof n.accessToken=="string",31837,{l:n}),new nu(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string",2055,{h:e}),new Le(e)}}class nv{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class sv{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new nv(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ca{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rv{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,x_(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ce(this.o===void 0,3512);const n=o=>{o.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,F("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>n(o))};const r=o=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>r(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?r(o):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ca(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ce(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ca(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function iv(s){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(s);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<s;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */class ru{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const r=iv(40);for(let o=0;o<r.length;++o)n.length<20&&r[o]<t&&(n+=e.charAt(r[o]%62))}return n}}function te(s,e){return s<e?-1:s>e?1:0}function si(s,e){let t=0;for(;t<s.length&&t<e.length;){const n=s.codePointAt(t),r=e.codePointAt(t);if(n!==r){if(n<128&&r<128)return te(n,r);{const o=su(),a=ov(o.encode(Da(s,t)),o.encode(Da(e,t)));return a!==0?a:te(n,r)}}t+=n>65535?2:1}return te(s.length,e.length)}function Da(s,e){return s.codePointAt(e)>65535?s.substring(e,e+2):s.substring(e,e+1)}function ov(s,e){for(let t=0;t<s.length&&t<e.length;++t)if(s[t]!==e[t])return te(s[t],e[t]);return te(s.length,e.length)}function Zt(s,e,t){return s.length===e.length&&s.every((n,r)=>t(n,e[r]))}/**
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
 */const Na=-62135596800,La=1e6;class Ee{static now(){return Ee.fromMillis(Date.now())}static fromDate(e){return Ee.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*La);return new Ee(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new z(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new z(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Na)throw new z(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/La}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Na;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */const Ma="__name__";class We{constructor(e,t,n){t===void 0?t=0:t>e.length&&W(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&W(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return We.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof We?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const o=We.compareSegments(e.get(r),t.get(r));if(o!==0)return o}return te(e.length,t.length)}static compareSegments(e,t){const n=We.isNumericId(e),r=We.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?We.extractNumericId(e).compare(We.extractNumericId(t)):si(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return _t.fromString(e.substring(4,e.length-2))}}class ge extends We{construct(e,t,n){return new ge(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new z(O.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(r=>r.length>0))}return new ge(t)}static emptyPath(){return new ge([])}}const av=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pe extends We{construct(e,t,n){return new Pe(e,t,n)}static isValidIdentifier(e){return av.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ma}static keyField(){return new Pe([Ma])}static fromServerFormat(e){const t=[];let n="",r=0;const o=()=>{if(n.length===0)throw new z(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let a=!1;for(;r<e.length;){const u=e[r];if(u==="\\"){if(r+1===e.length)throw new z(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[r+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new z(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=h,r+=2}else u==="`"?(a=!a,r++):u!=="."||a?(n+=u,r++):(o(),r++)}if(o(),a)throw new z(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pe(t)}static emptyPath(){return new Pe([])}}/**
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
 */const Fn=-1;function lv(s,e){const t=s.toTimestamp().seconds,n=s.toTimestamp().nanoseconds+1,r=X.fromTimestamp(n===1e9?new Ee(t+1,0):new Ee(t,n));return new yt(r,G.empty(),e)}function uv(s){return new yt(s.readTime,s.key,Fn)}class yt{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new yt(X.min(),G.empty(),Fn)}static max(){return new yt(X.max(),G.empty(),Fn)}}function cv(s,e){let t=s.readTime.compareTo(e.readTime);return t!==0?t:(t=G.comparator(s.documentKey,e.documentKey),t!==0?t:te(s.largestBatchId,e.largestBatchId))}/**
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
 */const hv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ln(s){if(s.code!==O.FAILED_PRECONDITION||s.message!==hv)throw s;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&W(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D((n,r)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(n,r)},this.catchCallback=o=>{this.wrapFailure(t,o).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):D.reject(t)}static resolve(e){return new D((t,n)=>{t(e)})}static reject(e){return new D((t,n)=>{n(e)})}static waitFor(e){return new D((t,n)=>{let r=0,o=0,a=!1;e.forEach(u=>{++r,u.next(()=>{++o,a&&o===r&&t()},h=>n(h))}),a=!0,o===r&&t()})}static or(e){let t=D.resolve(!1);for(const n of e)t=t.next(r=>r?D.resolve(r):n());return t}static forEach(e,t){const n=[];return e.forEach((r,o)=>{n.push(t.call(this,r,o))}),this.waitFor(n)}static mapArray(e,t){return new D((n,r)=>{const o=e.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const d=h;t(e[d]).next(p=>{a[d]=p,++u,u===o&&n(a)},p=>r(p))}})}static doWhile(e,t){return new D((n,r)=>{const o=()=>{e()===!0?t().next(()=>{o()},r):n()};o()})}}function fv(s){const e=s.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function un(s){return s.name==="IndexedDbTransactionError"}/**
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
 */class Xs{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ue(n),this.ce=n=>t.writeSequenceNumber(n))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Xs.le=-1;/**
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
 */const Ni=-1;function Ys(s){return s==null}function Ms(s){return s===0&&1/s==-1/0}function pv(s){return typeof s=="number"&&Number.isInteger(s)&&!Ms(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER}/**
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
 */const iu="";function mv(s){let e="";for(let t=0;t<s.length;t++)e.length>0&&(e=Oa(e)),e=gv(s.get(t),e);return Oa(e)}function gv(s,e){let t=e;const n=s.length;for(let r=0;r<n;r++){const o=s.charAt(r);switch(o){case"\0":t+="";break;case iu:t+="";break;default:t+=o}}return t}function Oa(s){return s+iu+""}/**
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
 */function $a(s){let e=0;for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e++;return e}function Pt(s,e){for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e(t,s[t])}function ou(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}/**
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
 */class pe{constructor(e,t){this.comparator=e,this.root=t||be.EMPTY}insert(e,t){return new pe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,be.BLACK,null,null))}remove(e){return new pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,be.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Es(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Es(this.root,e,this.comparator,!1)}getReverseIterator(){return new Es(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Es(this.root,e,this.comparator,!0)}}class Es{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?n(e.key,t):1,t&&r&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class be{constructor(e,t,n,r,o){this.key=e,this.value=t,this.color=n??be.RED,this.left=r??be.EMPTY,this.right=o??be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,o){return new be(e??this.key,t??this.value,n??this.color,r??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const o=n(e,r.key);return r=o<0?r.copy(null,null,null,r.left.insert(e,t,n),null):o===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return be.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw W(43730,{key:this.key,value:this.value});if(this.right.isRed())throw W(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw W(27949);return e+(this.isRed()?0:1)}}be.EMPTY=null,be.RED=!0,be.BLACK=!1;be.EMPTY=new class{constructor(){this.size=0}get key(){throw W(57766)}get value(){throw W(16141)}get color(){throw W(16727)}get left(){throw W(29726)}get right(){throw W(36894)}copy(e,t,n,r,o){return this}insert(e,t,n){return new be(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Te{constructor(e){this.comparator=e,this.data=new pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new xa(this.data.getIterator())}getIteratorFrom(e){return new xa(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof Te)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,o=n.getNext().key;if(this.comparator(r,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Te(this.comparator);return t.data=e,t}}class xa{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class je{constructor(e){this.fields=e,e.sort(Pe.comparator)}static empty(){return new je([])}unionWith(e){let t=new Te(Pe.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new je(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Zt(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
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
 */class Ve{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new au("Invalid base64 string: "+o):o}}(e);return new Ve(t)}static fromUint8Array(e){const t=function(r){let o="";for(let a=0;a<r.length;++a)o+=String.fromCharCode(r[a]);return o}(e);return new Ve(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ve.EMPTY_BYTE_STRING=new Ve("");const _v=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Et(s){if(ce(!!s,39018),typeof s=="string"){let e=0;const t=_v.exec(s);if(ce(!!t,46558,{timestamp:s}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const n=new Date(s);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:_e(s.seconds),nanos:_e(s.nanos)}}function _e(s){return typeof s=="number"?s:typeof s=="string"?Number(s):0}function Tt(s){return typeof s=="string"?Ve.fromBase64String(s):Ve.fromUint8Array(s)}/**
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
 */const lu="server_timestamp",uu="__type__",cu="__previous_value__",hu="__local_write_time__";function Li(s){var e,t;return((t=(((e=s==null?void 0:s.mapValue)===null||e===void 0?void 0:e.fields)||{})[uu])===null||t===void 0?void 0:t.stringValue)===lu}function Js(s){const e=s.mapValue.fields[cu];return Li(e)?Js(e):e}function Bn(s){const e=Et(s.mapValue.fields[hu].timestampValue);return new Ee(e.seconds,e.nanos)}/**
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
 */class vv{constructor(e,t,n,r,o,a,u,h,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=p}}const Os="(default)";class Un{constructor(e,t){this.projectId=e,this.database=t||Os}static empty(){return new Un("","")}get isDefaultDatabase(){return this.database===Os}isEqual(e){return e instanceof Un&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const du="__type__",yv="__max__",Ts={mapValue:{}},fu="__vector__",$s="value";function It(s){return"nullValue"in s?0:"booleanValue"in s?1:"integerValue"in s||"doubleValue"in s?2:"timestampValue"in s?3:"stringValue"in s?5:"bytesValue"in s?6:"referenceValue"in s?7:"geoPointValue"in s?8:"arrayValue"in s?9:"mapValue"in s?Li(s)?4:Tv(s)?9007199254740991:Ev(s)?10:11:W(28295,{value:s})}function et(s,e){if(s===e)return!0;const t=It(s);if(t!==It(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return s.booleanValue===e.booleanValue;case 4:return Bn(s).isEqual(Bn(e));case 3:return function(r,o){if(typeof r.timestampValue=="string"&&typeof o.timestampValue=="string"&&r.timestampValue.length===o.timestampValue.length)return r.timestampValue===o.timestampValue;const a=Et(r.timestampValue),u=Et(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(s,e);case 5:return s.stringValue===e.stringValue;case 6:return function(r,o){return Tt(r.bytesValue).isEqual(Tt(o.bytesValue))}(s,e);case 7:return s.referenceValue===e.referenceValue;case 8:return function(r,o){return _e(r.geoPointValue.latitude)===_e(o.geoPointValue.latitude)&&_e(r.geoPointValue.longitude)===_e(o.geoPointValue.longitude)}(s,e);case 2:return function(r,o){if("integerValue"in r&&"integerValue"in o)return _e(r.integerValue)===_e(o.integerValue);if("doubleValue"in r&&"doubleValue"in o){const a=_e(r.doubleValue),u=_e(o.doubleValue);return a===u?Ms(a)===Ms(u):isNaN(a)&&isNaN(u)}return!1}(s,e);case 9:return Zt(s.arrayValue.values||[],e.arrayValue.values||[],et);case 10:case 11:return function(r,o){const a=r.mapValue.fields||{},u=o.mapValue.fields||{};if($a(a)!==$a(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!et(a[h],u[h])))return!1;return!0}(s,e);default:return W(52216,{left:s})}}function jn(s,e){return(s.values||[]).find(t=>et(t,e))!==void 0}function en(s,e){if(s===e)return 0;const t=It(s),n=It(e);if(t!==n)return te(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return te(s.booleanValue,e.booleanValue);case 2:return function(o,a){const u=_e(o.integerValue||o.doubleValue),h=_e(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(s,e);case 3:return Fa(s.timestampValue,e.timestampValue);case 4:return Fa(Bn(s),Bn(e));case 5:return si(s.stringValue,e.stringValue);case 6:return function(o,a){const u=Tt(o),h=Tt(a);return u.compareTo(h)}(s.bytesValue,e.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){const p=te(u[d],h[d]);if(p!==0)return p}return te(u.length,h.length)}(s.referenceValue,e.referenceValue);case 8:return function(o,a){const u=te(_e(o.latitude),_e(a.latitude));return u!==0?u:te(_e(o.longitude),_e(a.longitude))}(s.geoPointValue,e.geoPointValue);case 9:return Ba(s.arrayValue,e.arrayValue);case 10:return function(o,a){var u,h,d,p;const _=o.fields||{},y=a.fields||{},V=(u=_[$s])===null||u===void 0?void 0:u.arrayValue,M=(h=y[$s])===null||h===void 0?void 0:h.arrayValue,x=te(((d=V==null?void 0:V.values)===null||d===void 0?void 0:d.length)||0,((p=M==null?void 0:M.values)===null||p===void 0?void 0:p.length)||0);return x!==0?x:Ba(V,M)}(s.mapValue,e.mapValue);case 11:return function(o,a){if(o===Ts.mapValue&&a===Ts.mapValue)return 0;if(o===Ts.mapValue)return 1;if(a===Ts.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),d=a.fields||{},p=Object.keys(d);h.sort(),p.sort();for(let _=0;_<h.length&&_<p.length;++_){const y=si(h[_],p[_]);if(y!==0)return y;const V=en(u[h[_]],d[p[_]]);if(V!==0)return V}return te(h.length,p.length)}(s.mapValue,e.mapValue);default:throw W(23264,{Pe:t})}}function Fa(s,e){if(typeof s=="string"&&typeof e=="string"&&s.length===e.length)return te(s,e);const t=Et(s),n=Et(e),r=te(t.seconds,n.seconds);return r!==0?r:te(t.nanos,n.nanos)}function Ba(s,e){const t=s.values||[],n=e.values||[];for(let r=0;r<t.length&&r<n.length;++r){const o=en(t[r],n[r]);if(o)return o}return te(t.length,n.length)}function tn(s){return ri(s)}function ri(s){return"nullValue"in s?"null":"booleanValue"in s?""+s.booleanValue:"integerValue"in s?""+s.integerValue:"doubleValue"in s?""+s.doubleValue:"timestampValue"in s?function(t){const n=Et(t);return`time(${n.seconds},${n.nanos})`}(s.timestampValue):"stringValue"in s?s.stringValue:"bytesValue"in s?function(t){return Tt(t).toBase64()}(s.bytesValue):"referenceValue"in s?function(t){return G.fromName(t).toString()}(s.referenceValue):"geoPointValue"in s?function(t){return`geo(${t.latitude},${t.longitude})`}(s.geoPointValue):"arrayValue"in s?function(t){let n="[",r=!0;for(const o of t.values||[])r?r=!1:n+=",",n+=ri(o);return n+"]"}(s.arrayValue):"mapValue"in s?function(t){const n=Object.keys(t.fields||{}).sort();let r="{",o=!0;for(const a of n)o?o=!1:r+=",",r+=`${a}:${ri(t.fields[a])}`;return r+"}"}(s.mapValue):W(61005,{value:s})}function Ps(s){switch(It(s)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Js(s);return e?16+Ps(e):16;case 5:return 2*s.stringValue.length;case 6:return Tt(s.bytesValue).approximateByteSize();case 7:return s.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((r,o)=>r+Ps(o),0)}(s.arrayValue);case 10:case 11:return function(n){let r=0;return Pt(n.fields,(o,a)=>{r+=o.length+Ps(a)}),r}(s.mapValue);default:throw W(13486,{value:s})}}function ii(s){return!!s&&"integerValue"in s}function Mi(s){return!!s&&"arrayValue"in s}function Ua(s){return!!s&&"nullValue"in s}function ja(s){return!!s&&"doubleValue"in s&&isNaN(Number(s.doubleValue))}function Ss(s){return!!s&&"mapValue"in s}function Ev(s){var e,t;return((t=(((e=s==null?void 0:s.mapValue)===null||e===void 0?void 0:e.fields)||{})[du])===null||t===void 0?void 0:t.stringValue)===fu}function Nn(s){if(s.geoPointValue)return{geoPointValue:Object.assign({},s.geoPointValue)};if(s.timestampValue&&typeof s.timestampValue=="object")return{timestampValue:Object.assign({},s.timestampValue)};if(s.mapValue){const e={mapValue:{fields:{}}};return Pt(s.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Nn(n)),e}if(s.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(s.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Nn(s.arrayValue.values[t]);return e}return Object.assign({},s)}function Tv(s){return(((s.mapValue||{}).fields||{}).__type__||{}).stringValue===yv}/**
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
 */class Fe{constructor(e){this.value=e}static empty(){return new Fe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Ss(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Nn(t)}setAll(e){let t=Pe.emptyPath(),n={},r=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){const h=this.getFieldsMap(t);this.applyChanges(h,n,r),n={},r=[],t=u.popLast()}a?n[u.lastSegment()]=Nn(a):r.push(u.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,n,r)}delete(e){const t=this.field(e.popLast());Ss(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return et(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Ss(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Pt(t,(r,o)=>e[r]=o);for(const r of n)delete e[r]}clone(){return new Fe(Nn(this.value))}}function pu(s){const e=[];return Pt(s.fields,(t,n)=>{const r=new Pe([t]);if(Ss(n)){const o=pu(n.mapValue).fields;if(o.length===0)e.push(r);else for(const a of o)e.push(r.child(a))}else e.push(r)}),new je(e)}/**
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
 */class Me{constructor(e,t,n,r,o,a,u){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(e){return new Me(e,0,X.min(),X.min(),X.min(),Fe.empty(),0)}static newFoundDocument(e,t,n,r){return new Me(e,1,t,X.min(),n,r,0)}static newNoDocument(e,t){return new Me(e,2,t,X.min(),X.min(),Fe.empty(),0)}static newUnknownDocument(e,t){return new Me(e,3,t,X.min(),X.min(),Fe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Fe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Fe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Me&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Me(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class xs{constructor(e,t){this.position=e,this.inclusive=t}}function Ha(s,e,t){let n=0;for(let r=0;r<s.position.length;r++){const o=e[r],a=s.position[r];if(o.field.isKeyField()?n=G.comparator(G.fromName(a.referenceValue),t.key):n=en(a,t.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function qa(s,e){if(s===null)return e===null;if(e===null||s.inclusive!==e.inclusive||s.position.length!==e.position.length)return!1;for(let t=0;t<s.position.length;t++)if(!et(s.position[t],e.position[t]))return!1;return!0}/**
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
 */class Fs{constructor(e,t="asc"){this.field=e,this.dir=t}}function Iv(s,e){return s.dir===e.dir&&s.field.isEqual(e.field)}/**
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
 */class mu{}class ye extends mu{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new Av(e,t,n):t==="array-contains"?new Sv(e,n):t==="in"?new Vv(e,n):t==="not-in"?new Rv(e,n):t==="array-contains-any"?new kv(e,n):new ye(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new bv(e,n):new Pv(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(en(t,this.value)):t!==null&&It(this.value)===It(t)&&this.matchesComparison(en(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tt extends mu{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new tt(e,t)}matches(e){return gu(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function gu(s){return s.op==="and"}function _u(s){return wv(s)&&gu(s)}function wv(s){for(const e of s.filters)if(e instanceof tt)return!1;return!0}function oi(s){if(s instanceof ye)return s.field.canonicalString()+s.op.toString()+tn(s.value);if(_u(s))return s.filters.map(e=>oi(e)).join(",");{const e=s.filters.map(t=>oi(t)).join(",");return`${s.op}(${e})`}}function vu(s,e){return s instanceof ye?function(n,r){return r instanceof ye&&n.op===r.op&&n.field.isEqual(r.field)&&et(n.value,r.value)}(s,e):s instanceof tt?function(n,r){return r instanceof tt&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((o,a,u)=>o&&vu(a,r.filters[u]),!0):!1}(s,e):void W(19439)}function yu(s){return s instanceof ye?function(t){return`${t.field.canonicalString()} ${t.op} ${tn(t.value)}`}(s):s instanceof tt?function(t){return t.op.toString()+" {"+t.getFilters().map(yu).join(" ,")+"}"}(s):"Filter"}class Av extends ye{constructor(e,t,n){super(e,t,n),this.key=G.fromName(n.referenceValue)}matches(e){const t=G.comparator(e.key,this.key);return this.matchesComparison(t)}}class bv extends ye{constructor(e,t){super(e,"in",t),this.keys=Eu("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Pv extends ye{constructor(e,t){super(e,"not-in",t),this.keys=Eu("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Eu(s,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>G.fromName(n.referenceValue))}class Sv extends ye{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Mi(t)&&jn(t.arrayValue,this.value)}}class Vv extends ye{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&jn(this.value.arrayValue,t)}}class Rv extends ye{constructor(e,t){super(e,"not-in",t)}matches(e){if(jn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!jn(this.value.arrayValue,t)}}class kv extends ye{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Mi(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>jn(this.value.arrayValue,n))}}/**
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
 */class Cv{constructor(e,t=null,n=[],r=[],o=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=o,this.startAt=a,this.endAt=u,this.Ie=null}}function za(s,e=null,t=[],n=[],r=null,o=null,a=null){return new Cv(s,e,t,n,r,o,a)}function Oi(s){const e=Y(s);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>oi(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),Ys(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>tn(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>tn(n)).join(",")),e.Ie=t}return e.Ie}function $i(s,e){if(s.limit!==e.limit||s.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<s.orderBy.length;t++)if(!Iv(s.orderBy[t],e.orderBy[t]))return!1;if(s.filters.length!==e.filters.length)return!1;for(let t=0;t<s.filters.length;t++)if(!vu(s.filters[t],e.filters[t]))return!1;return s.collectionGroup===e.collectionGroup&&!!s.path.isEqual(e.path)&&!!qa(s.startAt,e.startAt)&&qa(s.endAt,e.endAt)}function ai(s){return G.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}/**
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
 */class Zs{constructor(e,t=null,n=[],r=[],o=null,a="F",u=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function Dv(s,e,t,n,r,o,a,u){return new Zs(s,e,t,n,r,o,a,u)}function xi(s){return new Zs(s)}function Ga(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}function Nv(s){return s.collectionGroup!==null}function Ln(s){const e=Y(s);if(e.Ee===null){e.Ee=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ee.push(o),t.add(o.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new Te(Pe.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ee.push(new Fs(o,n))}),t.has(Pe.keyField().canonicalString())||e.Ee.push(new Fs(Pe.keyField(),n))}return e.Ee}function Ye(s){const e=Y(s);return e.de||(e.de=Lv(e,Ln(s))),e.de}function Lv(s,e){if(s.limitType==="F")return za(s.path,s.collectionGroup,e,s.filters,s.limit,s.startAt,s.endAt);{e=e.map(r=>{const o=r.dir==="desc"?"asc":"desc";return new Fs(r.field,o)});const t=s.endAt?new xs(s.endAt.position,s.endAt.inclusive):null,n=s.startAt?new xs(s.startAt.position,s.startAt.inclusive):null;return za(s.path,s.collectionGroup,e,s.filters,s.limit,t,n)}}function li(s,e,t){return new Zs(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),e,t,s.startAt,s.endAt)}function er(s,e){return $i(Ye(s),Ye(e))&&s.limitType===e.limitType}function Tu(s){return`${Oi(Ye(s))}|lt:${s.limitType}`}function Gt(s){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(r=>yu(r)).join(", ")}]`),Ys(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(r=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(r)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>tn(r)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>tn(r)).join(",")),`Target(${n})`}(Ye(s))}; limitType=${s.limitType})`}function tr(s,e){return e.isFoundDocument()&&function(n,r){const o=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):G.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(s,e)&&function(n,r){for(const o of Ln(n))if(!o.field.isKeyField()&&r.data.field(o.field)===null)return!1;return!0}(s,e)&&function(n,r){for(const o of n.filters)if(!o.matches(r))return!1;return!0}(s,e)&&function(n,r){return!(n.startAt&&!function(a,u,h){const d=Ha(a,u,h);return a.inclusive?d<=0:d<0}(n.startAt,Ln(n),r)||n.endAt&&!function(a,u,h){const d=Ha(a,u,h);return a.inclusive?d>=0:d>0}(n.endAt,Ln(n),r))}(s,e)}function Mv(s){return s.collectionGroup||(s.path.length%2==1?s.path.lastSegment():s.path.get(s.path.length-2))}function Iu(s){return(e,t)=>{let n=!1;for(const r of Ln(s)){const o=Ov(r,e,t);if(o!==0)return o;n=n||r.field.isKeyField()}return 0}}function Ov(s,e,t){const n=s.field.isKeyField()?G.comparator(e.key,t.key):function(o,a,u){const h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?en(h,d):W(42886)}(s.field,e,t);switch(s.dir){case"asc":return n;case"desc":return-1*n;default:return W(19790,{direction:s.dir})}}/**
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
 */class Ft{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[r,o]of n)if(this.equalsFn(r,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return void(r[o]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return n.length===1?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Pt(this.inner,(t,n)=>{for(const[r,o]of n)e(r,o)})}isEmpty(){return ou(this.inner)}size(){return this.innerSize}}/**
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
 */const $v=new pe(G.comparator);function at(){return $v}const wu=new pe(G.comparator);function Rn(...s){let e=wu;for(const t of s)e=e.insert(t.key,t);return e}function Au(s){let e=wu;return s.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function Nt(){return Mn()}function bu(){return Mn()}function Mn(){return new Ft(s=>s.toString(),(s,e)=>s.isEqual(e))}const xv=new pe(G.comparator),Fv=new Te(G.comparator);function re(...s){let e=Fv;for(const t of s)e=e.add(t);return e}const Bv=new Te(te);function Uv(){return Bv}/**
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
 */function Fi(s,e){if(s.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ms(e)?"-0":e}}function Pu(s){return{integerValue:""+s}}function Su(s,e){return pv(e)?Pu(e):Fi(s,e)}/**
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
 */class nr{constructor(){this._=void 0}}function jv(s,e,t){return s instanceof Bs?function(r,o){const a={fields:{[uu]:{stringValue:lu},[hu]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return o&&Li(o)&&(o=Js(o)),o&&(a.fields[cu]=o),{mapValue:a}}(t,e):s instanceof Hn?Ru(s,e):s instanceof qn?ku(s,e):function(r,o){const a=Vu(r,o),u=Ka(a)+Ka(r.Re);return ii(a)&&ii(r.Re)?Pu(u):Fi(r.serializer,u)}(s,e)}function Hv(s,e,t){return s instanceof Hn?Ru(s,e):s instanceof qn?ku(s,e):t}function Vu(s,e){return s instanceof zn?function(n){return ii(n)||function(o){return!!o&&"doubleValue"in o}(n)}(e)?e:{integerValue:0}:null}class Bs extends nr{}class Hn extends nr{constructor(e){super(),this.elements=e}}function Ru(s,e){const t=Cu(e);for(const n of s.elements)t.some(r=>et(r,n))||t.push(n);return{arrayValue:{values:t}}}class qn extends nr{constructor(e){super(),this.elements=e}}function ku(s,e){let t=Cu(e);for(const n of s.elements)t=t.filter(r=>!et(r,n));return{arrayValue:{values:t}}}class zn extends nr{constructor(e,t){super(),this.serializer=e,this.Re=t}}function Ka(s){return _e(s.integerValue||s.doubleValue)}function Cu(s){return Mi(s)&&s.arrayValue.values?s.arrayValue.values.slice():[]}/**
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
 */class qv{constructor(e,t){this.field=e,this.transform=t}}function zv(s,e){return s.field.isEqual(e.field)&&function(n,r){return n instanceof Hn&&r instanceof Hn||n instanceof qn&&r instanceof qn?Zt(n.elements,r.elements,et):n instanceof zn&&r instanceof zn?et(n.Re,r.Re):n instanceof Bs&&r instanceof Bs}(s.transform,e.transform)}class Gv{constructor(e,t){this.version=e,this.transformResults=t}}class Je{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Je}static exists(e){return new Je(void 0,e)}static updateTime(e){return new Je(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vs(s,e){return s.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(s.updateTime):s.exists===void 0||s.exists===e.isFoundDocument()}class sr{}function Du(s,e){if(!s.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return s.isNoDocument()?new Lu(s.key,Je.none()):new Xn(s.key,s.data,Je.none());{const t=s.data,n=Fe.empty();let r=new Te(Pe.comparator);for(let o of e.fields)if(!r.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?n.delete(o):n.set(o,a),r=r.add(o)}return new St(s.key,n,new je(r.toArray()),Je.none())}}function Kv(s,e,t){s instanceof Xn?function(r,o,a){const u=r.value.clone(),h=Qa(r.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(s,e,t):s instanceof St?function(r,o,a){if(!Vs(r.precondition,o))return void o.convertToUnknownDocument(a.version);const u=Qa(r.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Nu(r)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(s,e,t):function(r,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function On(s,e,t,n){return s instanceof Xn?function(o,a,u,h){if(!Vs(o.precondition,a))return u;const d=o.value.clone(),p=Xa(o.fieldTransforms,h,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(s,e,t,n):s instanceof St?function(o,a,u,h){if(!Vs(o.precondition,a))return u;const d=Xa(o.fieldTransforms,h,a),p=a.data;return p.setAll(Nu(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(_=>_.field))}(s,e,t,n):function(o,a,u){return Vs(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(s,e,t)}function Wv(s,e){let t=null;for(const n of s.fieldTransforms){const r=e.data.field(n.field),o=Vu(n.transform,r||null);o!=null&&(t===null&&(t=Fe.empty()),t.set(n.field,o))}return t||null}function Wa(s,e){return s.type===e.type&&!!s.key.isEqual(e.key)&&!!s.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Zt(n,r,(o,a)=>zv(o,a))}(s.fieldTransforms,e.fieldTransforms)&&(s.type===0?s.value.isEqual(e.value):s.type!==1||s.data.isEqual(e.data)&&s.fieldMask.isEqual(e.fieldMask))}class Xn extends sr{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class St extends sr{constructor(e,t,n,r,o=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Nu(s){const e=new Map;return s.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=s.data.field(t);e.set(t,n)}}),e}function Qa(s,e,t){const n=new Map;ce(s.length===t.length,32656,{Ve:t.length,me:s.length});for(let r=0;r<t.length;r++){const o=s[r],a=o.transform,u=e.data.field(o.field);n.set(o.field,Hv(a,u,t[r]))}return n}function Xa(s,e,t){const n=new Map;for(const r of s){const o=r.transform,a=t.data.field(r.field);n.set(r.field,jv(o,a,e))}return n}class Lu extends sr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Qv extends sr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Xv{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const o=this.mutations[r];o.key.isEqual(e.key)&&Kv(o,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=On(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=On(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=bu();return this.mutations.forEach(r=>{const o=e.get(r.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=t.has(r.key)?null:u;const h=Du(a,u);h!==null&&n.set(r.key,h),a.isValidDocument()||a.convertToNoDocument(X.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),re())}isEqual(e){return this.batchId===e.batchId&&Zt(this.mutations,e.mutations,(t,n)=>Wa(t,n))&&Zt(this.baseMutations,e.baseMutations,(t,n)=>Wa(t,n))}}class Bi{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){ce(e.mutations.length===n.length,58842,{fe:e.mutations.length,ge:n.length});let r=function(){return xv}();const o=e.mutations;for(let a=0;a<o.length;a++)r=r.insert(o[a].key,n[a].version);return new Bi(e,t,n,r)}}/**
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
 */class Yv{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Jv{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ve,ie;function Zv(s){switch(s){case O.OK:return W(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return W(15467,{code:s})}}function Mu(s){if(s===void 0)return ot("GRPC error has no .code"),O.UNKNOWN;switch(s){case ve.OK:return O.OK;case ve.CANCELLED:return O.CANCELLED;case ve.UNKNOWN:return O.UNKNOWN;case ve.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case ve.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case ve.INTERNAL:return O.INTERNAL;case ve.UNAVAILABLE:return O.UNAVAILABLE;case ve.UNAUTHENTICATED:return O.UNAUTHENTICATED;case ve.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case ve.NOT_FOUND:return O.NOT_FOUND;case ve.ALREADY_EXISTS:return O.ALREADY_EXISTS;case ve.PERMISSION_DENIED:return O.PERMISSION_DENIED;case ve.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case ve.ABORTED:return O.ABORTED;case ve.OUT_OF_RANGE:return O.OUT_OF_RANGE;case ve.UNIMPLEMENTED:return O.UNIMPLEMENTED;case ve.DATA_LOSS:return O.DATA_LOSS;default:return W(39323,{code:s})}}(ie=ve||(ve={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const ey=new _t([4294967295,4294967295],0);function Ya(s){const e=su().encode(s),t=new Ql;return t.update(e),new Uint8Array(t.digest())}function Ja(s){const e=new DataView(s.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),r=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new _t([t,n],0),new _t([r,o],0)]}class Ui{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new kn(`Invalid padding: ${t}`);if(n<0)throw new kn(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new kn(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new kn(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=_t.fromNumber(this.pe)}we(e,t,n){let r=e.add(t.multiply(_t.fromNumber(n)));return r.compare(ey)===1&&(r=new _t([r.getBits(0),r.getBits(1)],0)),r.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=Ya(e),[n,r]=Ja(t);for(let o=0;o<this.hashCount;o++){const a=this.we(n,r,o);if(!this.be(a))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new Ui(o,r,t);return n.forEach(u=>a.insert(u)),a}insert(e){if(this.pe===0)return;const t=Ya(e),[n,r]=Ja(t);for(let o=0;o<this.hashCount;o++){const a=this.we(n,r,o);this.Se(a)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class kn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class rr{constructor(e,t,n,r,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Yn.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new rr(X.min(),r,new pe(te),at(),re())}}class Yn{constructor(e,t,n,r,o){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Yn(n,t,re(),re(),re())}}/**
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
 */class Rs{constructor(e,t,n,r){this.De=e,this.removedTargetIds=t,this.key=n,this.ve=r}}class Ou{constructor(e,t){this.targetId=e,this.Ce=t}}class $u{constructor(e,t,n=Ve.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Za{constructor(){this.Fe=0,this.Me=el(),this.xe=Ve.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=re(),t=re(),n=re();return this.Me.forEach((r,o)=>{switch(o){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:W(38017,{changeType:o})}}),new Yn(this.xe,this.Oe,e,t,n)}Qe(){this.Ne=!1,this.Me=el()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,ce(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class ty{constructor(e){this.ze=e,this.je=new Map,this.He=at(),this.Je=Is(),this.Ye=Is(),this.Ze=new pe(te)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const n=this.rt(t);switch(e.state){case 0:this.it(t)&&n.ke(e.resumeToken);break;case 1:n.We(),n.Be||n.Qe(),n.ke(e.resumeToken);break;case 2:n.We(),n.Be||this.removeTarget(t);break;case 3:this.it(t)&&(n.Ge(),n.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),n.ke(e.resumeToken));break;default:W(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((n,r)=>{this.it(r)&&t(r)})}ot(e){const t=e.targetId,n=e.Ce.count,r=this._t(t);if(r){const o=r.target;if(ai(o))if(n===0){const a=new G(o.path);this.tt(t,a,Me.newNoDocument(a,X.min()))}else ce(n===1,20013,{expectedCount:n});else{const a=this.ut(t);if(a!==n){const u=this.ct(e),h=u?this.lt(u,e,a):1;if(h!==0){this.st(t);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:o=0}=t;let a,u;try{a=Tt(n).toUint8Array()}catch(h){if(h instanceof au)return Jt("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new Ui(a,r,o)}catch(h){return Jt(h instanceof kn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.pe===0?null:u}lt(e,t,n){return t.Ce.count===n-this.Tt(e,t.targetId)?0:2}Tt(e,t){const n=this.ze.getRemoteKeysForTarget(t);let r=0;return n.forEach(o=>{const a=this.ze.Pt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(u)||(this.tt(t,o,null),r++)}),r}It(e){const t=new Map;this.je.forEach((o,a)=>{const u=this._t(a);if(u){if(o.current&&ai(u.target)){const h=new G(u.target.path);this.Et(h).has(a)||this.dt(a,h)||this.tt(a,h,Me.newNoDocument(h,e))}o.Le&&(t.set(a,o.qe()),o.Qe())}});let n=re();this.Ye.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{const d=this._t(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(n=n.add(o))}),this.He.forEach((o,a)=>a.setReadTime(e));const r=new rr(e,t,this.Ze,this.He,n);return this.He=at(),this.Je=Is(),this.Ye=Is(),this.Ze=new pe(te),r}et(e,t){if(!this.it(e))return;const n=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,n),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,n){if(!this.it(e))return;const r=this.rt(e);this.dt(e,t)?r.$e(t,1):r.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),n&&(this.He=this.He.insert(t,n))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new Za,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new Te(te),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new Te(te),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||F("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Za),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function Is(){return new pe(G.comparator)}function el(){return new pe(G.comparator)}const ny={asc:"ASCENDING",desc:"DESCENDING"},sy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ry={and:"AND",or:"OR"};class iy{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ui(s,e){return s.useProto3Json||Ys(e)?e:{value:e}}function Us(s,e){return s.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xu(s,e){return s.useProto3Json?e.toBase64():e.toUint8Array()}function oy(s,e){return Us(s,e.toTimestamp())}function Ze(s){return ce(!!s,49232),X.fromTimestamp(function(t){const n=Et(t);return new Ee(n.seconds,n.nanos)}(s))}function ji(s,e){return ci(s,e).canonicalString()}function ci(s,e){const t=function(r){return new ge(["projects",r.projectId,"databases",r.database])}(s).child("documents");return e===void 0?t:t.child(e)}function Fu(s){const e=ge.fromString(s);return ce(qu(e),10190,{key:e.toString()}),e}function hi(s,e){return ji(s.databaseId,e.path)}function jr(s,e){const t=Fu(e);if(t.get(1)!==s.databaseId.projectId)throw new z(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+s.databaseId.projectId);if(t.get(3)!==s.databaseId.database)throw new z(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+s.databaseId.database);return new G(Uu(t))}function Bu(s,e){return ji(s.databaseId,e)}function ay(s){const e=Fu(s);return e.length===4?ge.emptyPath():Uu(e)}function di(s){return new ge(["projects",s.databaseId.projectId,"databases",s.databaseId.database]).canonicalString()}function Uu(s){return ce(s.length>4&&s.get(4)==="documents",29091,{key:s.toString()}),s.popFirst(5)}function tl(s,e,t){return{name:hi(s,e),fields:t.value.mapValue.fields}}function ly(s,e){let t;if("targetChange"in e){e.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:W(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?(ce(p===void 0||typeof p=="string",58123),Ve.fromBase64String(p||"")):(ce(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),Ve.fromUint8Array(p||new Uint8Array))}(s,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(d){const p=d.code===void 0?O.UNKNOWN:Mu(d.code);return new z(p,d.message||"")}(a);t=new $u(n,r,o,u||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const r=jr(s,n.document.name),o=Ze(n.document.updateTime),a=n.document.createTime?Ze(n.document.createTime):X.min(),u=new Fe({mapValue:{fields:n.document.fields}}),h=Me.newFoundDocument(r,o,a,u),d=n.targetIds||[],p=n.removedTargetIds||[];t=new Rs(d,p,h.key,h)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const r=jr(s,n.document),o=n.readTime?Ze(n.readTime):X.min(),a=Me.newNoDocument(r,o),u=n.removedTargetIds||[];t=new Rs([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const r=jr(s,n.document),o=n.removedTargetIds||[];t=new Rs([],o,r,null)}else{if(!("filter"in e))return W(11601,{Vt:e});{e.filter;const n=e.filter;n.targetId;const{count:r=0,unchangedNames:o}=n,a=new Jv(r,o),u=n.targetId;t=new Ou(u,a)}}return t}function uy(s,e){let t;if(e instanceof Xn)t={update:tl(s,e.key,e.value)};else if(e instanceof Lu)t={delete:hi(s,e.key)};else if(e instanceof St)t={update:tl(s,e.key,e.data),updateMask:vy(e.fieldMask)};else{if(!(e instanceof Qv))return W(16599,{ft:e.type});t={verify:hi(s,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(o,a){const u=a.transform;if(u instanceof Bs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Hn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof qn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof zn)return{fieldPath:a.field.canonicalString(),increment:u.Re};throw W(20930,{transform:a.transform})}(0,n))),e.precondition.isNone||(t.currentDocument=function(r,o){return o.updateTime!==void 0?{updateTime:oy(r,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:W(27497)}(s,e.precondition)),t}function cy(s,e){return s&&s.length>0?(ce(e!==void 0,14353),s.map(t=>function(r,o){let a=r.updateTime?Ze(r.updateTime):Ze(o);return a.isEqual(X.min())&&(a=Ze(o)),new Gv(a,r.transformResults||[])}(t,e))):[]}function hy(s,e){return{documents:[Bu(s,e.path)]}}function dy(s,e){const t={structuredQuery:{}},n=e.path;let r;e.collectionGroup!==null?(r=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=Bu(s,r);const o=function(d){if(d.length!==0)return Hu(tt.create(d,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(p=>function(y){return{field:Kt(y.field),direction:my(y.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const u=ui(s,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{gt:t,parent:r}}function fy(s){let e=ay(s.parent);const t=s.structuredQuery,n=t.from?t.from.length:0;let r=null;if(n>0){ce(n===1,65062);const p=t.from[0];p.allDescendants?r=p.collectionId:e=e.child(p.collectionId)}let o=[];t.where&&(o=function(_){const y=ju(_);return y instanceof tt&&_u(y)?y.getFilters():[y]}(t.where));let a=[];t.orderBy&&(a=function(_){return _.map(y=>function(M){return new Fs(Wt(M.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(M.direction))}(y))}(t.orderBy));let u=null;t.limit&&(u=function(_){let y;return y=typeof _=="object"?_.value:_,Ys(y)?null:y}(t.limit));let h=null;t.startAt&&(h=function(_){const y=!!_.before,V=_.values||[];return new xs(V,y)}(t.startAt));let d=null;return t.endAt&&(d=function(_){const y=!_.before,V=_.values||[];return new xs(V,y)}(t.endAt)),Dv(e,r,a,o,u,"F",h,d)}function py(s,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W(28987,{purpose:r})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ju(s){return s.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Wt(t.unaryFilter.field);return ye.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Wt(t.unaryFilter.field);return ye.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Wt(t.unaryFilter.field);return ye.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Wt(t.unaryFilter.field);return ye.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return W(61313);default:return W(60726)}}(s):s.fieldFilter!==void 0?function(t){return ye.create(Wt(t.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return W(58110);default:return W(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(s):s.compositeFilter!==void 0?function(t){return tt.create(t.compositeFilter.filters.map(n=>ju(n)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return W(1026)}}(t.compositeFilter.op))}(s):W(30097,{filter:s})}function my(s){return ny[s]}function gy(s){return sy[s]}function _y(s){return ry[s]}function Kt(s){return{fieldPath:s.canonicalString()}}function Wt(s){return Pe.fromServerFormat(s.fieldPath)}function Hu(s){return s instanceof ye?function(t){if(t.op==="=="){if(ja(t.value))return{unaryFilter:{field:Kt(t.field),op:"IS_NAN"}};if(Ua(t.value))return{unaryFilter:{field:Kt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ja(t.value))return{unaryFilter:{field:Kt(t.field),op:"IS_NOT_NAN"}};if(Ua(t.value))return{unaryFilter:{field:Kt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Kt(t.field),op:gy(t.op),value:t.value}}}(s):s instanceof tt?function(t){const n=t.getFilters().map(r=>Hu(r));return n.length===1?n[0]:{compositeFilter:{op:_y(t.op),filters:n}}}(s):W(54877,{filter:s})}function vy(s){const e=[];return s.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function qu(s){return s.length>=4&&s.get(0)==="projects"&&s.get(2)==="databases"}/**
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
 */class ft{constructor(e,t,n,r,o=X.min(),a=X.min(),u=Ve.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(e){return new ft(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ft(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class yy{constructor(e){this.wt=e}}function Ey(s){const e=fy({parent:s.parent,structuredQuery:s.structuredQuery});return s.limitType==="LAST"?li(e,e.limit,"L"):e}/**
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
 */class Ty{constructor(){this.Cn=new Iy}addToCollectionParentIndex(e,t){return this.Cn.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(yt.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(yt.min())}updateCollectionGroup(e,t,n){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class Iy{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Te(ge.comparator),o=!r.has(n);return this.index[t]=r.add(n),o}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Te(ge.comparator)).toArray()}}/**
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
 */const nl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},zu=41943040;class xe{static withCacheSize(e){return new xe(e,xe.DEFAULT_COLLECTION_PERCENTILE,xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
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
 */const sl="LruGarbageCollector",wy=1048576;function rl([s,e],[t,n]){const r=te(s,t);return r===0?te(e,n):r}class Ay{constructor(e){this.Er=e,this.buffer=new Te(rl),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();rl(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class by{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){F(sl,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){un(t)?F(sl,"Ignoring IndexedDB error during garbage collection: ",t):await ln(t)}await this.mr(3e5)})}}class Py{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return D.resolve(Xs.le);const n=new Ay(t);return this.gr.forEachTarget(e,r=>n.Rr(r.sequenceNumber)).next(()=>this.gr.yr(e,r=>n.Rr(r))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.gr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(F("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(nl)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(F("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),nl):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let n,r,o,a,u,h,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(_=>(_>this.params.maximumSequenceNumbersToCollect?(F("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${_}`),r=this.params.maximumSequenceNumbersToCollect):r=_,a=Date.now(),this.nthSequenceNumber(e,r))).next(_=>(n=_,u=Date.now(),this.removeTargets(e,n,t))).next(_=>(o=_,h=Date.now(),this.removeOrphanedDocuments(e,n))).next(_=>(d=Date.now(),zt()<=oe.DEBUG&&F("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${r} in `+(u-a)+`ms
	Removed ${o} targets in `+(h-u)+`ms
	Removed ${_} documents in `+(d-h)+`ms
Total Duration: ${d-p}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:o,documentsRemoved:_})))}}function Sy(s,e){return new Py(s,e)}/**
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
 */class Vy{constructor(){this.changes=new Ft(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Me.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?D.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Ry{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class ky{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(n!==null&&On(n.mutation,r,je.empty(),Ee.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,re()).next(()=>n))}getLocalViewOfDocuments(e,t,n=re()){const r=Nt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(o=>{let a=Rn();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const n=Nt();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,re()))}populateOverlays(e,t,n){const r=[];return n.forEach(o=>{t.has(o)||r.push(o)}),this.documentOverlayCache.getOverlays(e,r).next(o=>{o.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,n,r){let o=at();const a=Mn(),u=function(){return Mn()}();return t.forEach((h,d)=>{const p=n.get(d.key);r.has(d.key)&&(p===void 0||p.mutation instanceof St)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),On(p.mutation,d,p.mutation.getFieldMask(),Ee.now())):a.set(d.key,je.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var _;return u.set(d,new Ry(p,(_=a.get(d))!==null&&_!==void 0?_:null))}),u))}recalculateAndSaveOverlays(e,t){const n=Mn();let r=new pe((a,u)=>a-u),o=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const u of a)u.keys().forEach(h=>{const d=t.get(h);if(d===null)return;let p=n.get(h)||je.empty();p=u.applyToLocalView(d,p),n.set(h,p);const _=(r.get(u.batchId)||re()).add(h);r=r.insert(u.batchId,_)})}).next(()=>{const a=[],u=r.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),d=h.key,p=h.value,_=bu();p.forEach(y=>{if(!o.has(y)){const V=Du(t.get(y),n.get(y));V!==null&&_.set(y,V),o=o.add(y)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,_))}return D.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,r){return function(a){return G.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Nv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(o=>{const a=r-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-o.size):D.resolve(Nt());let u=Fn,h=o;return a.next(d=>D.forEach(d,(p,_)=>(u<_.largestBatchId&&(u=_.largestBatchId),o.get(p)?D.resolve():this.remoteDocumentCache.getEntry(e,p).next(y=>{h=h.insert(p,y)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,h,d,re())).next(p=>({batchId:u,changes:Au(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new G(t)).next(n=>{let r=Rn();return n.isFoundDocument()&&(r=r.insert(n.key,n)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const o=t.collectionGroup;let a=Rn();return this.indexManager.getCollectionParents(e,o).next(u=>D.forEach(u,h=>{const d=function(_,y){return new Zs(y,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,n,r).next(p=>{p.forEach((_,y)=>{a=a.insert(_,y)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,n,r){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,o,r))).next(a=>{o.forEach((h,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Me.newInvalidDocument(p)))});let u=Rn();return a.forEach((h,d)=>{const p=o.get(h);p!==void 0&&On(p.mutation,d,je.empty(),Ee.now()),tr(t,d)&&(u=u.insert(h,d))}),u})}}/**
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
 */class Cy{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return D.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(r){return{id:r.id,version:r.version,createTime:Ze(r.createTime)}}(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(r){return{name:r.name,query:Ey(r.bundledQuery),readTime:Ze(r.readTime)}}(t)),D.resolve()}}/**
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
 */class Dy{constructor(){this.overlays=new pe(G.comparator),this.Qr=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Nt();return D.forEach(t,r=>this.getOverlay(e,r).next(o=>{o!==null&&n.set(r,o)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((r,o)=>{this.St(e,t,o)}),D.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Qr.get(n);return r!==void 0&&(r.forEach(o=>this.overlays=this.overlays.remove(o)),this.Qr.delete(n)),D.resolve()}getOverlaysForCollection(e,t,n){const r=Nt(),o=t.length+1,a=new G(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>n&&r.set(h.getKey(),h)}return D.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let o=new pe((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>n){let p=o.get(d.largestBatchId);p===null&&(p=Nt(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const u=Nt(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,p)=>u.set(d,p)),!(u.size()>=r)););return D.resolve(u)}St(e,t,n){const r=this.overlays.get(n.key);if(r!==null){const a=this.Qr.get(r.largestBatchId).delete(n.key);this.Qr.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new Yv(t,n));let o=this.Qr.get(t);o===void 0&&(o=re(),this.Qr.set(t,o)),this.Qr.set(t,o.add(n.key))}}/**
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
 */class Ny{constructor(){this.sessionToken=Ve.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
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
 */class Hi{constructor(){this.$r=new Te(Ie.Ur),this.Kr=new Te(Ie.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const n=new Ie(e,t);this.$r=this.$r.add(n),this.Kr=this.Kr.add(n)}Gr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.zr(new Ie(e,t))}jr(e,t){e.forEach(n=>this.removeReference(n,t))}Hr(e){const t=new G(new ge([])),n=new Ie(t,e),r=new Ie(t,e+1),o=[];return this.Kr.forEachInRange([n,r],a=>{this.zr(a),o.push(a.key)}),o}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new G(new ge([])),n=new Ie(t,e),r=new Ie(t,e+1);let o=re();return this.Kr.forEachInRange([n,r],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new Ie(e,0),n=this.$r.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Ie{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return G.comparator(e.key,t.key)||te(e.Zr,t.Zr)}static Wr(e,t){return te(e.Zr,t.Zr)||G.comparator(e.key,t.key)}}/**
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
 */class Ly{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new Te(Ie.Ur)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,r){const o=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Xv(o,t,n,r);this.mutationQueue.push(a);for(const u of r)this.Xr=this.Xr.add(new Ie(u.key,o)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return D.resolve(a)}lookupMutationBatch(e,t){return D.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ti(n),o=r<0?0:r;return D.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?Ni:this.nr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ie(t,0),r=new Ie(t,Number.POSITIVE_INFINITY),o=[];return this.Xr.forEachInRange([n,r],a=>{const u=this.ei(a.Zr);o.push(u)}),D.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Te(te);return t.forEach(r=>{const o=new Ie(r,0),a=new Ie(r,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([o,a],u=>{n=n.add(u.Zr)})}),D.resolve(this.ni(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let o=n;G.isDocumentKey(o)||(o=o.child(""));const a=new Ie(new G(o),0);let u=new Te(te);return this.Xr.forEachWhile(h=>{const d=h.key.path;return!!n.isPrefixOf(d)&&(d.length===r&&(u=u.add(h.Zr)),!0)},a),D.resolve(this.ni(u))}ni(e){const t=[];return e.forEach(n=>{const r=this.ei(n);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){ce(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Xr;return D.forEach(t.mutations,r=>{const o=new Ie(r.key,t.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Xr=n})}sr(e){}containsKey(e,t){const n=new Ie(t,0),r=this.Xr.firstAfterOrEqual(n);return D.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class My{constructor(e){this.ii=e,this.docs=function(){return new pe(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),o=r?r.size:0,a=this.ii(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return D.resolve(n?n.document.mutableCopy():Me.newInvalidDocument(t))}getEntries(e,t){let n=at();return t.forEach(r=>{const o=this.docs.get(r);n=n.insert(r,o?o.document.mutableCopy():Me.newInvalidDocument(r))}),D.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let o=at();const a=t.path,u=new G(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:d,value:{document:p}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||cv(uv(p),n)<=0||(r.has(p.key)||tr(t,p))&&(o=o.insert(p.key,p.mutableCopy()))}return D.resolve(o)}getAllFromCollectionGroup(e,t,n,r){W(9500)}si(e,t){return D.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new Oy(this)}getSize(e){return D.resolve(this.size)}}class Oy extends Vy{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Br.addEntry(e,r)):this.Br.removeEntry(n)}),D.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
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
 */class $y{constructor(e){this.persistence=e,this.oi=new Ft(t=>Oi(t),$i),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this._i=0,this.ai=new Hi,this.targetCount=0,this.ui=nn.cr()}forEachTarget(e,t){return this.oi.forEach((n,r)=>t(r)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this._i&&(this._i=t),D.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new nn(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.Tr(t),D.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,n){let r=0;const o=[];return this.oi.forEach((a,u)=>{u.sequenceNumber<=t&&n.get(u.targetId)===null&&(this.oi.delete(a),o.push(this.removeMatchingKeysForTargetId(e,u.targetId)),r++)}),D.waitFor(o).next(()=>r)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const n=this.oi.get(t)||null;return D.resolve(n)}addMatchingKeys(e,t,n){return this.ai.Gr(t,n),D.resolve()}removeMatchingKeys(e,t,n){this.ai.jr(t,n);const r=this.persistence.referenceDelegate,o=[];return r&&t.forEach(a=>{o.push(r.markPotentiallyOrphaned(e,a))}),D.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const n=this.ai.Yr(t);return D.resolve(n)}containsKey(e,t){return D.resolve(this.ai.containsKey(t))}}/**
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
 */class Gu{constructor(e,t){this.ci={},this.overlays={},this.li=new Xs(0),this.hi=!1,this.hi=!0,this.Pi=new Ny,this.referenceDelegate=e(this),this.Ti=new $y(this),this.indexManager=new Ty,this.remoteDocumentCache=function(r){return new My(r)}(n=>this.referenceDelegate.Ii(n)),this.serializer=new yy(t),this.Ei=new Cy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Dy,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ci[e.toKey()];return n||(n=new Ly(t,this.referenceDelegate),this.ci[e.toKey()]=n),n}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,n){F("MemoryPersistence","Starting transaction:",e);const r=new xy(this.li.next());return this.referenceDelegate.di(),n(r).next(o=>this.referenceDelegate.Ai(r).next(()=>o)).toPromise().then(o=>(r.raiseOnCommittedEvent(),o))}Ri(e,t){return D.or(Object.values(this.ci).map(n=>()=>n.containsKey(e,t)))}}class xy extends dv{constructor(e){super(),this.currentSequenceNumber=e}}class qi{constructor(e){this.persistence=e,this.Vi=new Hi,this.mi=null}static fi(e){return new qi(e)}get gi(){if(this.mi)return this.mi;throw W(60996)}addReference(e,t,n){return this.Vi.addReference(n,t),this.gi.delete(n.toString()),D.resolve()}removeReference(e,t,n){return this.Vi.removeReference(n,t),this.gi.add(n.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),D.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(r=>this.gi.add(r.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(o=>this.gi.add(o.toString()))}).next(()=>n.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.gi,n=>{const r=G.fromPath(n);return this.pi(e,r).next(o=>{o||t.removeEntry(r,X.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(n=>{n?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return D.or([()=>D.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class js{constructor(e,t){this.persistence=e,this.yi=new Ft(n=>mv(n.path),(n,r)=>n.isEqual(r)),this.garbageCollector=Sy(this,t)}static fi(e,t){return new js(e,t)}di(){}Ai(e){return D.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(r=>n+r))}br(e){let t=0;return this.yr(e,n=>{t++}).next(()=>t)}yr(e,t){return D.forEach(this.yi,(n,r)=>this.Dr(e,n,r).next(o=>o?D.resolve():t(r)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),o=r.newChangeBuffer();return r.si(e,a=>this.Dr(e,a,t).next(u=>{u||(n++,o.removeEntry(a,X.min()))})).next(()=>o.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),D.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.yi.set(n,e.currentSequenceNumber),D.resolve()}removeReference(e,t,n){return this.yi.set(n,e.currentSequenceNumber),D.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),D.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ps(e.data.value)),t}Dr(e,t,n){return D.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.yi.get(t);return D.resolve(r!==void 0&&r>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class zi{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.ds=n,this.As=r}static Rs(e,t){let n=re(),r=re();for(const o of t.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:r=r.add(o.doc.key)}return new zi(e,t.fromCache,n,r)}}/**
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
 */class Fy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class By{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return Mg()?8:fv(Ng())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,n,r){const o={result:null};return this.ws(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.bs(e,t,r,n).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Fy;return this.Ss(e,t,a).next(u=>{if(o.result=u,this.fs)return this.Ds(e,t,a,u.size)})}).next(()=>o.result)}Ds(e,t,n,r){return n.documentReadCount<this.gs?(zt()<=oe.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",Gt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),D.resolve()):(zt()<=oe.DEBUG&&F("QueryEngine","Query:",Gt(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ps*r?(zt()<=oe.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",Gt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ye(t))):D.resolve())}ws(e,t){if(Ga(t))return D.resolve(null);let n=Ye(t);return this.indexManager.getIndexType(e,n).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=li(t,null,"F"),n=Ye(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(o=>{const a=re(...o);return this.ys.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,n).next(h=>{const d=this.vs(t,u);return this.Cs(t,d,a,h.readTime)?this.ws(e,li(t,null,"F")):this.Fs(e,d,t,h)}))})))}bs(e,t,n,r){return Ga(t)||r.isEqual(X.min())?D.resolve(null):this.ys.getDocuments(e,n).next(o=>{const a=this.vs(t,o);return this.Cs(t,a,n,r)?D.resolve(null):(zt()<=oe.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Gt(t)),this.Fs(e,a,t,lv(r,Fn)).next(u=>u))})}vs(e,t){let n=new Te(Iu(e));return t.forEach((r,o)=>{tr(e,o)&&(n=n.add(o))}),n}Cs(e,t,n,r){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(r)>0)}Ss(e,t,n){return zt()<=oe.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",Gt(t)),this.ys.getDocumentsMatchingQuery(e,t,yt.min(),n)}Fs(e,t,n,r){return this.ys.getDocumentsMatchingQuery(e,n,r).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */const Gi="LocalStore",Uy=3e8;class jy{constructor(e,t,n,r){this.persistence=e,this.Ms=t,this.serializer=r,this.xs=new pe(te),this.Os=new Ft(o=>Oi(o),$i),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(n)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ky(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function Hy(s,e,t,n){return new jy(s,e,t,n)}async function Ku(s,e){const t=Y(s);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let r;return t.mutationQueue.getAllMutationBatches(n).next(o=>(r=o,t.Ls(e),t.mutationQueue.getAllMutationBatches(n))).next(o=>{const a=[],u=[];let h=re();for(const d of r){a.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of o){u.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return t.localDocuments.getDocuments(n,h).next(d=>({ks:d,removedBatchIds:a,addedBatchIds:u}))})})}function qy(s,e){const t=Y(s);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const r=e.batch.keys(),o=t.Bs.newChangeBuffer({trackRemovals:!0});return function(u,h,d,p){const _=d.batch,y=_.keys();let V=D.resolve();return y.forEach(M=>{V=V.next(()=>p.getEntry(h,M)).next(x=>{const L=d.docVersions.get(M);ce(L!==null,48541),x.version.compareTo(L)<0&&(_.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),p.addEntry(x)))})}),V.next(()=>u.mutationQueue.removeMutationBatch(h,_))}(t,n,e,o).next(()=>o.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(u){let h=re();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(h=h.add(u.batch.mutations[d].key));return h}(e))).next(()=>t.localDocuments.getDocuments(n,r))})}function Wu(s){const e=Y(s);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function zy(s,e){const t=Y(s),n=e.snapshotVersion;let r=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=t.Bs.newChangeBuffer({trackRemovals:!0});r=t.xs;const u=[];e.targetChanges.forEach((p,_)=>{const y=r.get(_);if(!y)return;u.push(t.Ti.removeMatchingKeys(o,p.removedDocuments,_).next(()=>t.Ti.addMatchingKeys(o,p.addedDocuments,_)));let V=y.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(_)!==null?V=V.withResumeToken(Ve.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):p.resumeToken.approximateByteSize()>0&&(V=V.withResumeToken(p.resumeToken,n)),r=r.insert(_,V),function(x,L,J){return x.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=Uy?!0:J.addedDocuments.size+J.modifiedDocuments.size+J.removedDocuments.size>0}(y,V,p)&&u.push(t.Ti.updateTargetData(o,V))});let h=at(),d=re();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(o,p))}),u.push(Gy(o,a,e.documentUpdates).next(p=>{h=p.qs,d=p.Qs})),!n.isEqual(X.min())){const p=t.Ti.getLastRemoteSnapshotVersion(o).next(_=>t.Ti.setTargetsMetadata(o,o.currentSequenceNumber,n));u.push(p)}return D.waitFor(u).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(t.xs=r,o))}function Gy(s,e,t){let n=re(),r=re();return t.forEach(o=>n=n.add(o)),e.getEntries(s,n).next(o=>{let a=at();return t.forEach((u,h)=>{const d=o.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(r=r.add(u)),h.isNoDocument()&&h.version.isEqual(X.min())?(e.removeEntry(u,h.readTime),a=a.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(h),a=a.insert(u,h)):F(Gi,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)}),{qs:a,Qs:r}})}function Ky(s,e){const t=Y(s);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=Ni),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function Wy(s,e){const t=Y(s);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let r;return t.Ti.getTargetData(n,e).next(o=>o?(r=o,D.resolve(r)):t.Ti.allocateTargetId(n).next(a=>(r=new ft(e,a,"TargetPurposeListen",n.currentSequenceNumber),t.Ti.addTargetData(n,r).next(()=>r))))}).then(n=>{const r=t.xs.get(n.targetId);return(r===null||n.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.xs=t.xs.insert(n.targetId,n),t.Os.set(e,n.targetId)),n})}async function fi(s,e,t){const n=Y(s),r=n.xs.get(e),o=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",o,a=>n.persistence.referenceDelegate.removeTarget(a,r))}catch(a){if(!un(a))throw a;F(Gi,`Failed to update sequence numbers for target ${e}: ${a}`)}n.xs=n.xs.remove(e),n.Os.delete(r.target)}function il(s,e,t){const n=Y(s);let r=X.min(),o=re();return n.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,p){const _=Y(h),y=_.Os.get(p);return y!==void 0?D.resolve(_.xs.get(y)):_.Ti.getTargetData(d,p)}(n,a,Ye(e)).next(u=>{if(u)return r=u.lastLimboFreeSnapshotVersion,n.Ti.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>n.Ms.getDocumentsMatchingQuery(a,e,t?r:X.min(),t?o:re())).next(u=>(Qy(n,Mv(e),u),{documents:u,$s:o})))}function Qy(s,e,t){let n=s.Ns.get(e)||X.min();t.forEach((r,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),s.Ns.set(e,n)}class ol{constructor(){this.activeTargetIds=Uv()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Xy{constructor(){this.xo=new ol,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,n){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new ol,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Yy{No(e){}shutdown(){}}/**
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
 */const Hr="RestConnection",Jy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Zy{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${n}/databases/${r}`,this.Go=this.databaseId.database===Os?`project_id=${n}`:`project_id=${n}&database_id=${r}`}zo(e,t,n,r,o){const a=pi(),u=this.jo(e,t.toUriEncodedString());F(Hr,`Sending RPC '${e}' ${a}:`,u,n);const h={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(h,r,o);const{host:d}=new URL(u),p=ki(d);return this.Jo(e,u,h,n,p).then(_=>(F(Hr,`Received RPC '${e}' ${a}: `,_),_),_=>{throw Jt(Hr,`RPC '${e}' ${a} failed with error: `,_,"url: ",u,"request:",n),_})}Yo(e,t,n,r,o,a){return this.zo(e,t,n,r,o)}Ho(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+an}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,o)=>e[o]=r),n&&n.headers.forEach((r,o)=>e[o]=r)}jo(e,t){const n=Jy[e];return`${this.Ko}/v1/${t}:${n}`}terminate(){}}/**
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
 */class eE{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const Ne="WebChannelConnection";class tE extends Zy{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,n,r,o){const a=pi();return new Promise((u,h)=>{const d=new Xl;d.setWithCredentials(!0),d.listenOnce(Yl.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case bs.NO_ERROR:const _=d.getResponseJson();F(Ne,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(_)),u(_);break;case bs.TIMEOUT:F(Ne,`RPC '${e}' ${a} timed out`),h(new z(O.DEADLINE_EXCEEDED,"Request time out"));break;case bs.HTTP_ERROR:const y=d.getStatus();if(F(Ne,`RPC '${e}' ${a} failed with status:`,y,"response text:",d.getResponseText()),y>0){let V=d.getResponseJson();Array.isArray(V)&&(V=V[0]);const M=V==null?void 0:V.error;if(M&&M.status&&M.message){const x=function(J){const Q=J.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(Q)>=0?Q:O.UNKNOWN}(M.status);h(new z(x,M.message))}else h(new z(O.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new z(O.UNAVAILABLE,"Connection failed."));break;default:W(9055,{h_:e,streamId:a,P_:d.getLastErrorCode(),T_:d.getLastError()})}}finally{F(Ne,`RPC '${e}' ${a} completed.`)}});const p=JSON.stringify(r);F(Ne,`RPC '${e}' ${a} sending request:`,r),d.send(t,"POST",p,n,15)})}I_(e,t,n){const r=pi(),o=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=eu(),u=Zl(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Ho(h.initMessageHeaders,t,n),h.encodeInitMessageHeaders=!0;const p=o.join("");F(Ne,`Creating RPC '${e}' stream ${r}: ${p}`,h);const _=a.createWebChannel(p,h);this.E_(_);let y=!1,V=!1;const M=new eE({Zo:L=>{V?F(Ne,`Not sending because RPC '${e}' stream ${r} is closed:`,L):(y||(F(Ne,`Opening RPC '${e}' stream ${r} transport.`),_.open(),y=!0),F(Ne,`RPC '${e}' stream ${r} sending:`,L),_.send(L))},Xo:()=>_.close()}),x=(L,J,Q)=>{L.listen(J,ee=>{try{Q(ee)}catch(fe){setTimeout(()=>{throw fe},0)}})};return x(_,Vn.EventType.OPEN,()=>{V||(F(Ne,`RPC '${e}' stream ${r} transport opened.`),M.__())}),x(_,Vn.EventType.CLOSE,()=>{V||(V=!0,F(Ne,`RPC '${e}' stream ${r} transport closed`),M.u_(),this.d_(_))}),x(_,Vn.EventType.ERROR,L=>{V||(V=!0,Jt(Ne,`RPC '${e}' stream ${r} transport errored. Name:`,L.name,"Message:",L.message),M.u_(new z(O.UNAVAILABLE,"The operation could not be completed")))}),x(_,Vn.EventType.MESSAGE,L=>{var J;if(!V){const Q=L.data[0];ce(!!Q,16349);const ee=Q,fe=(ee==null?void 0:ee.error)||((J=ee[0])===null||J===void 0?void 0:J.error);if(fe){F(Ne,`RPC '${e}' stream ${r} received error:`,fe);const Be=fe.status;let we=function(v){const T=ve[v];if(T!==void 0)return Mu(T)}(Be),w=fe.message;we===void 0&&(we=O.INTERNAL,w="Unknown error status: "+Be+" with message "+fe.message),V=!0,M.u_(new z(we,w)),_.close()}else F(Ne,`RPC '${e}' stream ${r} received:`,Q),M.c_(Q)}}),x(u,Jl.STAT_EVENT,L=>{L.stat===ni.PROXY?F(Ne,`RPC '${e}' stream ${r} detected buffering proxy`):L.stat===ni.NOPROXY&&F(Ne,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{M.a_()},0),M}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(t=>t===e)}}function qr(){return typeof document<"u"?document:null}/**
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
 */function ir(s){return new iy(s,!0)}/**
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
 */class Qu{constructor(e,t,n=1e3,r=1.5,o=6e4){this.xi=e,this.timerId=t,this.A_=n,this.R_=r,this.V_=o,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const t=Math.floor(this.m_+this.w_()),n=Math.max(0,Date.now()-this.g_),r=Math.max(0,t-n);r>0&&F("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.m_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,r,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
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
 */const ul="PersistentStream";class Xu{constructor(e,t,n,r,o,a,u,h){this.xi=e,this.S_=n,this.D_=r,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new Qu(e,t)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,t){this.U_(),this.K_(),this.x_.cancel(),this.v_++,e!==4?this.x_.reset():t&&t.code===O.RESOURCE_EXHAUSTED?(ot(t.toString()),ot("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):t&&t.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}W_(){}auth(){this.state=1;const e=this.G_(this.v_),t=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,r])=>{this.v_===t&&this.z_(n,r)},n=>{e(()=>{const r=new z(O.UNKNOWN,"Fetching auth token failed: "+n.message);return this.j_(r)})})}z_(e,t){const n=this.G_(this.v_);this.stream=this.H_(e,t),this.stream.e_(()=>{n(()=>this.listener.e_())}),this.stream.n_(()=>{n(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(r=>{n(()=>this.j_(r))}),this.stream.onMessage(r=>{n(()=>++this.M_==1?this.J_(r):this.onNext(r))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(e){return F(ul,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return t=>{this.xi.enqueueAndForget(()=>this.v_===e?t():(F(ul,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nE extends Xu{constructor(e,t,n,r,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,a),this.serializer=o}H_(e,t){return this.connection.I_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();const t=ly(this.serializer,e),n=function(o){if(!("targetChange"in o))return X.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?X.min():a.readTime?Ze(a.readTime):X.min()}(e);return this.listener.Y_(t,n)}Z_(e){const t={};t.database=di(this.serializer),t.addTarget=function(o,a){let u;const h=a.target;if(u=ai(h)?{documents:hy(o,h)}:{query:dy(o,h).gt},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=xu(o,a.resumeToken);const d=ui(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(X.min())>0){u.readTime=Us(o,a.snapshotVersion.toTimestamp());const d=ui(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,e);const n=py(this.serializer,e);n&&(t.labels=n),this.Q_(t)}X_(e){const t={};t.database=di(this.serializer),t.removeTarget=e,this.Q_(t)}}class sE extends Xu{constructor(e,t,n,r,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,a),this.serializer=o}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(e,t){return this.connection.I_("Write",e,t)}J_(e){return ce(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ce(!e.writeResults||e.writeResults.length===0,55816),this.listener.na()}onNext(e){ce(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.x_.reset();const t=cy(e.writeResults,e.commitTime),n=Ze(e.commitTime);return this.listener.ra(n,t)}ia(){const e={};e.database=di(this.serializer),this.Q_(e)}ta(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>uy(this.serializer,n))};this.Q_(t)}}/**
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
 */class rE{}class iE extends rE{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.sa=!1}oa(){if(this.sa)throw new z(O.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,n,r){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.zo(e,ci(t,n),r,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(O.UNKNOWN,o.toString())})}Yo(e,t,n,r,o){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Yo(e,ci(t,n),r,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new z(O.UNKNOWN,a.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class oE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,e==="Online"&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){const t=`Could not reach Cloud Firestore backend. ${e}
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
 */const $t="RemoteStore";class aE{constructor(e,t,n,r,o){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=o,this.Ra.No(a=>{n.enqueueAndForget(async()=>{Bt(this)&&(F($t,"Restarting streams for network reachability change."),await async function(h){const d=Y(h);d.da.add(4),await Jn(d),d.Va.set("Unknown"),d.da.delete(4),await or(d)}(this))})}),this.Va=new oE(n,r)}}async function or(s){if(Bt(s))for(const e of s.Aa)await e(!0)}async function Jn(s){for(const e of s.Aa)await e(!1)}function Yu(s,e){const t=Y(s);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),Xi(t)?Qi(t):cn(t).N_()&&Wi(t,e))}function Ki(s,e){const t=Y(s),n=cn(t);t.Ea.delete(e),n.N_()&&Ju(t,e),t.Ea.size===0&&(n.N_()?n.k_():Bt(t)&&t.Va.set("Unknown"))}function Wi(s,e){if(s.ma.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const t=s.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}cn(s).Z_(e)}function Ju(s,e){s.ma.Ke(e),cn(s).X_(e)}function Qi(s){s.ma=new ty({getRemoteKeysForTarget:e=>s.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>s.Ea.get(e)||null,Pt:()=>s.datastore.serializer.databaseId}),cn(s).start(),s.Va.ca()}function Xi(s){return Bt(s)&&!cn(s).O_()&&s.Ea.size>0}function Bt(s){return Y(s).da.size===0}function Zu(s){s.ma=void 0}async function lE(s){s.Va.set("Online")}async function uE(s){s.Ea.forEach((e,t)=>{Wi(s,e)})}async function cE(s,e){Zu(s),Xi(s)?(s.Va.Pa(e),Qi(s)):s.Va.set("Unknown")}async function hE(s,e,t){if(s.Va.set("Online"),e instanceof $u&&e.state===2&&e.cause)try{await async function(r,o){const a=o.cause;for(const u of o.targetIds)r.Ea.has(u)&&(await r.remoteSyncer.rejectListen(u,a),r.Ea.delete(u),r.ma.removeTarget(u))}(s,e)}catch(n){F($t,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Hs(s,n)}else if(e instanceof Rs?s.ma.Xe(e):e instanceof Ou?s.ma.ot(e):s.ma.nt(e),!t.isEqual(X.min()))try{const n=await Wu(s.localStore);t.compareTo(n)>=0&&await function(o,a){const u=o.ma.It(a);return u.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.Ea.get(d);p&&o.Ea.set(d,p.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,d)=>{const p=o.Ea.get(h);if(!p)return;o.Ea.set(h,p.withResumeToken(Ve.EMPTY_BYTE_STRING,p.snapshotVersion)),Ju(o,h);const _=new ft(p.target,h,d,p.sequenceNumber);Wi(o,_)}),o.remoteSyncer.applyRemoteEvent(u)}(s,t)}catch(n){F($t,"Failed to raise snapshot:",n),await Hs(s,n)}}async function Hs(s,e,t){if(!un(e))throw e;s.da.add(1),await Jn(s),s.Va.set("Offline"),t||(t=()=>Wu(s.localStore)),s.asyncQueue.enqueueRetryable(async()=>{F($t,"Retrying IndexedDB access"),await t(),s.da.delete(1),await or(s)})}function ec(s,e){return e().catch(t=>Hs(s,t,e))}async function ar(s){const e=Y(s),t=wt(e);let n=e.Ia.length>0?e.Ia[e.Ia.length-1].batchId:Ni;for(;dE(e);)try{const r=await Ky(e.localStore,n);if(r===null){e.Ia.length===0&&t.k_();break}n=r.batchId,fE(e,r)}catch(r){await Hs(e,r)}tc(e)&&nc(e)}function dE(s){return Bt(s)&&s.Ia.length<10}function fE(s,e){s.Ia.push(e);const t=wt(s);t.N_()&&t.ea&&t.ta(e.mutations)}function tc(s){return Bt(s)&&!wt(s).O_()&&s.Ia.length>0}function nc(s){wt(s).start()}async function pE(s){wt(s).ia()}async function mE(s){const e=wt(s);for(const t of s.Ia)e.ta(t.mutations)}async function gE(s,e,t){const n=s.Ia.shift(),r=Bi.from(n,e,t);await ec(s,()=>s.remoteSyncer.applySuccessfulWrite(r)),await ar(s)}async function _E(s,e){e&&wt(s).ea&&await async function(n,r){if(function(a){return Zv(a)&&a!==O.ABORTED}(r.code)){const o=n.Ia.shift();wt(n).L_(),await ec(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,r)),await ar(n)}}(s,e),tc(s)&&nc(s)}async function cl(s,e){const t=Y(s);t.asyncQueue.verifyOperationInProgress(),F($t,"RemoteStore received new credentials");const n=Bt(t);t.da.add(3),await Jn(t),n&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await or(t)}async function vE(s,e){const t=Y(s);e?(t.da.delete(2),await or(t)):e||(t.da.add(2),await Jn(t),t.Va.set("Unknown"))}function cn(s){return s.fa||(s.fa=function(t,n,r){const o=Y(t);return o.oa(),new nE(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,r)}(s.datastore,s.asyncQueue,{e_:lE.bind(null,s),n_:uE.bind(null,s),i_:cE.bind(null,s),Y_:hE.bind(null,s)}),s.Aa.push(async e=>{e?(s.fa.L_(),Xi(s)?Qi(s):s.Va.set("Unknown")):(await s.fa.stop(),Zu(s))})),s.fa}function wt(s){return s.ga||(s.ga=function(t,n,r){const o=Y(t);return o.oa(),new sE(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,r)}(s.datastore,s.asyncQueue,{e_:()=>Promise.resolve(),n_:pE.bind(null,s),i_:_E.bind(null,s),na:mE.bind(null,s),ra:gE.bind(null,s)}),s.Aa.push(async e=>{e?(s.ga.L_(),await ar(s)):(await s.ga.stop(),s.Ia.length>0&&(F($t,`Stopping write stream with ${s.Ia.length} pending writes`),s.Ia=[]))})),s.ga}/**
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
 */class Yi{constructor(e,t,n,r,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=o,this.deferred=new vt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,o){const a=Date.now()+n,u=new Yi(e,t,a,r,o);return u.start(n),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ji(s,e){if(ot("AsyncQueue",`${e}: ${s}`),un(s))return new z(O.UNAVAILABLE,`${e}: ${s}`);throw s}/**
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
 */class Yt{static emptySet(e){return new Yt(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||G.comparator(t.key,n.key):(t,n)=>G.comparator(t.key,n.key),this.keyedMap=Rn(),this.sortedSet=new pe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Yt)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,o=n.getNext().key;if(!r.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Yt;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class hl{constructor(){this.pa=new pe(G.comparator)}track(e){const t=e.doc.key,n=this.pa.get(t);n?e.type!==0&&n.type===3?this.pa=this.pa.insert(t,e):e.type===3&&n.type!==1?this.pa=this.pa.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.pa=this.pa.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.pa=this.pa.remove(t):e.type===1&&n.type===2?this.pa=this.pa.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):W(63341,{Vt:e,ya:n}):this.pa=this.pa.insert(t,e)}wa(){const e=[];return this.pa.inorderTraversal((t,n)=>{e.push(n)}),e}}class sn{constructor(e,t,n,r,o,a,u,h,d){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(e,t,n,r,o){const a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new sn(e,t,Yt.emptySet(t),a,n,r,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&er(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}/**
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
 */class yE{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class EE{constructor(){this.queries=dl(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,n){const r=Y(t),o=r.queries;r.queries=dl(),o.forEach((a,u)=>{for(const h of u.Sa)h.onError(n)})})(this,new z(O.ABORTED,"Firestore shutting down"))}}function dl(){return new Ft(s=>Tu(s),er)}async function TE(s,e){const t=Y(s);let n=3;const r=e.query;let o=t.queries.get(r);o?!o.Da()&&e.va()&&(n=2):(o=new yE,n=e.va()?0:1);try{switch(n){case 0:o.ba=await t.onListen(r,!0);break;case 1:o.ba=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(a){const u=Ji(a,`Initialization of query '${Gt(e.query)}' failed`);return void e.onError(u)}t.queries.set(r,o),o.Sa.push(e),e.Fa(t.onlineState),o.ba&&e.Ma(o.ba)&&Zi(t)}async function IE(s,e){const t=Y(s),n=e.query;let r=3;const o=t.queries.get(n);if(o){const a=o.Sa.indexOf(e);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?r=e.va()?0:1:!o.Da()&&e.va()&&(r=2))}switch(r){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function wE(s,e){const t=Y(s);let n=!1;for(const r of e){const o=r.query,a=t.queries.get(o);if(a){for(const u of a.Sa)u.Ma(r)&&(n=!0);a.ba=r}}n&&Zi(t)}function AE(s,e,t){const n=Y(s),r=n.queries.get(e);if(r)for(const o of r.Sa)o.onError(t);n.queries.delete(e)}function Zi(s){s.Ca.forEach(e=>{e.next()})}var mi,fl;(fl=mi||(mi={})).xa="default",fl.Cache="cache";class bE{constructor(e,t,n){this.query=e,this.Oa=t,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=n||{}}Ma(e){if(!this.options.includeMetadataChanges){const n=[];for(const r of e.docChanges)r.type!==3&&n.push(r);e=new sn(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Na?this.La(e)&&(this.Oa.next(e),t=!0):this.ka(e,this.onlineState)&&(this.qa(e),t=!0),this.Ba=e,t}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let t=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),t=!0),t}ka(e,t){if(!e.fromCache||!this.va())return!0;const n=t!=="Offline";return(!this.options.Qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}La(e){if(e.docChanges.length>0)return!0;const t=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}qa(e){e=sn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==mi.Cache}}/**
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
 */class sc{constructor(e){this.key=e}}class rc{constructor(e){this.key=e}}class PE{constructor(e,t){this.query=e,this.Ha=t,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=re(),this.mutatedKeys=re(),this.Za=Iu(e),this.Xa=new Yt(this.Za)}get eu(){return this.Ha}tu(e,t){const n=t?t.nu:new hl,r=t?t.Xa:this.Xa;let o=t?t.mutatedKeys:this.mutatedKeys,a=r,u=!1;const h=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,d=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((p,_)=>{const y=r.get(p),V=tr(this.query,_)?_:null,M=!!y&&this.mutatedKeys.has(y.key),x=!!V&&(V.hasLocalMutations||this.mutatedKeys.has(V.key)&&V.hasCommittedMutations);let L=!1;y&&V?y.data.isEqual(V.data)?M!==x&&(n.track({type:3,doc:V}),L=!0):this.ru(y,V)||(n.track({type:2,doc:V}),L=!0,(h&&this.Za(V,h)>0||d&&this.Za(V,d)<0)&&(u=!0)):!y&&V?(n.track({type:0,doc:V}),L=!0):y&&!V&&(n.track({type:1,doc:y}),L=!0,(h||d)&&(u=!0)),L&&(V?(a=a.add(V),o=x?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),n.track({type:1,doc:p})}return{Xa:a,nu:n,Cs:u,mutatedKeys:o}}ru(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const o=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;const a=e.nu.wa();a.sort((p,_)=>function(V,M){const x=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W(20277,{Vt:L})}};return x(V)-x(M)}(p.type,_.type)||this.Za(p.doc,_.doc)),this.iu(n),r=r!=null&&r;const u=t&&!r?this.su():[],h=this.Ya.size===0&&this.current&&!r?1:0,d=h!==this.Ja;return this.Ja=h,a.length!==0||d?{snapshot:new sn(this.query,e.Xa,o,a,e.mutatedKeys,h===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),ou:u}:{ou:u}}Fa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new hl,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}su(){if(!this.current)return[];const e=this.Ya;this.Ya=re(),this.Xa.forEach(n=>{this._u(n.key)&&(this.Ya=this.Ya.add(n.key))});const t=[];return e.forEach(n=>{this.Ya.has(n)||t.push(new rc(n))}),this.Ya.forEach(n=>{e.has(n)||t.push(new sc(n))}),t}au(e){this.Ha=e.$s,this.Ya=re();const t=this.tu(e.documents);return this.applyChanges(t,!0)}uu(){return sn.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const eo="SyncEngine";class SE{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class VE{constructor(e){this.key=e,this.cu=!1}}class RE{constructor(e,t,n,r,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.lu={},this.hu=new Ft(u=>Tu(u),er),this.Pu=new Map,this.Tu=new Set,this.Iu=new pe(G.comparator),this.Eu=new Map,this.du=new Hi,this.Au={},this.Ru=new Map,this.Vu=nn.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function kE(s,e,t=!0){const n=cc(s);let r;const o=n.hu.get(e);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),r=o.view.uu()):r=await ic(n,e,t,!0),r}async function CE(s,e){const t=cc(s);await ic(t,e,!0,!1)}async function ic(s,e,t,n){const r=await Wy(s.localStore,Ye(e)),o=r.targetId,a=s.sharedClientState.addLocalQueryTarget(o,t);let u;return n&&(u=await DE(s,e,o,a==="current",r.resumeToken)),s.isPrimaryClient&&t&&Yu(s.remoteStore,r),u}async function DE(s,e,t,n,r){s.fu=(_,y,V)=>async function(x,L,J,Q){let ee=L.view.tu(J);ee.Cs&&(ee=await il(x.localStore,L.query,!1).then(({documents:w})=>L.view.tu(w,ee)));const fe=Q&&Q.targetChanges.get(L.targetId),Be=Q&&Q.targetMismatches.get(L.targetId)!=null,we=L.view.applyChanges(ee,x.isPrimaryClient,fe,Be);return ml(x,L.targetId,we.ou),we.snapshot}(s,_,y,V);const o=await il(s.localStore,e,!0),a=new PE(e,o.$s),u=a.tu(o.documents),h=Yn.createSynthesizedTargetChangeForCurrentChange(t,n&&s.onlineState!=="Offline",r),d=a.applyChanges(u,s.isPrimaryClient,h);ml(s,t,d.ou);const p=new SE(e,t,a);return s.hu.set(e,p),s.Pu.has(t)?s.Pu.get(t).push(e):s.Pu.set(t,[e]),d.snapshot}async function NE(s,e,t){const n=Y(s),r=n.hu.get(e),o=n.Pu.get(r.targetId);if(o.length>1)return n.Pu.set(r.targetId,o.filter(a=>!er(a,e))),void n.hu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await fi(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),t&&Ki(n.remoteStore,r.targetId),gi(n,r.targetId)}).catch(ln)):(gi(n,r.targetId),await fi(n.localStore,r.targetId,!0))}async function LE(s,e){const t=Y(s),n=t.hu.get(e),r=t.Pu.get(n.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Ki(t.remoteStore,n.targetId))}async function ME(s,e,t){const n=jE(s);try{const r=await function(a,u){const h=Y(a),d=Ee.now(),p=u.reduce((V,M)=>V.add(M.key),re());let _,y;return h.persistence.runTransaction("Locally write mutations","readwrite",V=>{let M=at(),x=re();return h.Bs.getEntries(V,p).next(L=>{M=L,M.forEach((J,Q)=>{Q.isValidDocument()||(x=x.add(J))})}).next(()=>h.localDocuments.getOverlayedDocuments(V,M)).next(L=>{_=L;const J=[];for(const Q of u){const ee=Wv(Q,_.get(Q.key).overlayedDocument);ee!=null&&J.push(new St(Q.key,ee,pu(ee.value.mapValue),Je.exists(!0)))}return h.mutationQueue.addMutationBatch(V,d,J,u)}).next(L=>{y=L;const J=L.applyToLocalDocumentSet(_,x);return h.documentOverlayCache.saveOverlays(V,L.batchId,J)})}).then(()=>({batchId:y.batchId,changes:Au(_)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(r.batchId),function(a,u,h){let d=a.Au[a.currentUser.toKey()];d||(d=new pe(te)),d=d.insert(u,h),a.Au[a.currentUser.toKey()]=d}(n,r.batchId,t),await Zn(n,r.changes),await ar(n.remoteStore)}catch(r){const o=Ji(r,"Failed to persist write");t.reject(o)}}async function oc(s,e){const t=Y(s);try{const n=await zy(t.localStore,e);e.targetChanges.forEach((r,o)=>{const a=t.Eu.get(o);a&&(ce(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?a.cu=!0:r.modifiedDocuments.size>0?ce(a.cu,14607):r.removedDocuments.size>0&&(ce(a.cu,42227),a.cu=!1))}),await Zn(t,n,e)}catch(n){await ln(n)}}function pl(s,e,t){const n=Y(s);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const r=[];n.hu.forEach((o,a)=>{const u=a.view.Fa(e);u.snapshot&&r.push(u.snapshot)}),function(a,u){const h=Y(a);h.onlineState=u;let d=!1;h.queries.forEach((p,_)=>{for(const y of _.Sa)y.Fa(u)&&(d=!0)}),d&&Zi(h)}(n.eventManager,e),r.length&&n.lu.Y_(r),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function OE(s,e,t){const n=Y(s);n.sharedClientState.updateQueryState(e,"rejected",t);const r=n.Eu.get(e),o=r&&r.key;if(o){let a=new pe(G.comparator);a=a.insert(o,Me.newNoDocument(o,X.min()));const u=re().add(o),h=new rr(X.min(),new Map,new pe(te),a,u);await oc(n,h),n.Iu=n.Iu.remove(o),n.Eu.delete(e),to(n)}else await fi(n.localStore,e,!1).then(()=>gi(n,e,t)).catch(ln)}async function $E(s,e){const t=Y(s),n=e.batch.batchId;try{const r=await qy(t.localStore,e);lc(t,n,null),ac(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Zn(t,r)}catch(r){await ln(r)}}async function xE(s,e,t){const n=Y(s);try{const r=await function(a,u){const h=Y(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return h.mutationQueue.lookupMutationBatch(d,u).next(_=>(ce(_!==null,37113),p=_.keys(),h.mutationQueue.removeMutationBatch(d,_))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,p,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>h.localDocuments.getDocuments(d,p))})}(n.localStore,e);lc(n,e,t),ac(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Zn(n,r)}catch(r){await ln(r)}}function ac(s,e){(s.Ru.get(e)||[]).forEach(t=>{t.resolve()}),s.Ru.delete(e)}function lc(s,e,t){const n=Y(s);let r=n.Au[n.currentUser.toKey()];if(r){const o=r.get(e);o&&(t?o.reject(t):o.resolve(),r=r.remove(e)),n.Au[n.currentUser.toKey()]=r}}function gi(s,e,t=null){s.sharedClientState.removeLocalQueryTarget(e);for(const n of s.Pu.get(e))s.hu.delete(n),t&&s.lu.gu(n,t);s.Pu.delete(e),s.isPrimaryClient&&s.du.Hr(e).forEach(n=>{s.du.containsKey(n)||uc(s,n)})}function uc(s,e){s.Tu.delete(e.path.canonicalString());const t=s.Iu.get(e);t!==null&&(Ki(s.remoteStore,t),s.Iu=s.Iu.remove(e),s.Eu.delete(t),to(s))}function ml(s,e,t){for(const n of t)n instanceof sc?(s.du.addReference(n.key,e),FE(s,n)):n instanceof rc?(F(eo,"Document no longer in limbo: "+n.key),s.du.removeReference(n.key,e),s.du.containsKey(n.key)||uc(s,n.key)):W(19791,{pu:n})}function FE(s,e){const t=e.key,n=t.path.canonicalString();s.Iu.get(t)||s.Tu.has(n)||(F(eo,"New document in limbo: "+t),s.Tu.add(n),to(s))}function to(s){for(;s.Tu.size>0&&s.Iu.size<s.maxConcurrentLimboResolutions;){const e=s.Tu.values().next().value;s.Tu.delete(e);const t=new G(ge.fromString(e)),n=s.Vu.next();s.Eu.set(n,new VE(t)),s.Iu=s.Iu.insert(t,n),Yu(s.remoteStore,new ft(Ye(xi(t.path)),n,"TargetPurposeLimboResolution",Xs.le))}}async function Zn(s,e,t){const n=Y(s),r=[],o=[],a=[];n.hu.isEmpty()||(n.hu.forEach((u,h)=>{a.push(n.fu(h,e,t).then(d=>{var p;if((d||t)&&n.isPrimaryClient){const _=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(h.targetId))===null||p===void 0?void 0:p.current;n.sharedClientState.updateQueryState(h.targetId,_?"current":"not-current")}if(d){r.push(d);const _=zi.Rs(h.targetId,d);o.push(_)}}))}),await Promise.all(a),n.lu.Y_(r),await async function(h,d){const p=Y(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",_=>D.forEach(d,y=>D.forEach(y.ds,V=>p.persistence.referenceDelegate.addReference(_,y.targetId,V)).next(()=>D.forEach(y.As,V=>p.persistence.referenceDelegate.removeReference(_,y.targetId,V)))))}catch(_){if(!un(_))throw _;F(Gi,"Failed to update sequence numbers: "+_)}for(const _ of d){const y=_.targetId;if(!_.fromCache){const V=p.xs.get(y),M=V.snapshotVersion,x=V.withLastLimboFreeSnapshotVersion(M);p.xs=p.xs.insert(y,x)}}}(n.localStore,o))}async function BE(s,e){const t=Y(s);if(!t.currentUser.isEqual(e)){F(eo,"User change. New user:",e.toKey());const n=await Ku(t.localStore,e);t.currentUser=e,function(o,a){o.Ru.forEach(u=>{u.forEach(h=>{h.reject(new z(O.CANCELLED,a))})}),o.Ru.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Zn(t,n.ks)}}function UE(s,e){const t=Y(s),n=t.Eu.get(e);if(n&&n.cu)return re().add(n.key);{let r=re();const o=t.Pu.get(e);if(!o)return r;for(const a of o){const u=t.hu.get(a);r=r.unionWith(u.view.eu)}return r}}function cc(s){const e=Y(s);return e.remoteStore.remoteSyncer.applyRemoteEvent=oc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=UE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=OE.bind(null,e),e.lu.Y_=wE.bind(null,e.eventManager),e.lu.gu=AE.bind(null,e.eventManager),e}function jE(s){const e=Y(s);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$E.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xE.bind(null,e),e}class qs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ir(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,t){return null}Cu(e,t){return null}Du(e){return Hy(this.persistence,new By,e.initialUser,this.serializer)}Su(e){return new Gu(qi.fi,this.serializer)}bu(e){return new Xy}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}qs.provider={build:()=>new qs};class HE extends qs{constructor(e){super(),this.cacheSizeBytes=e}vu(e,t){ce(this.persistence.referenceDelegate instanceof js,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new by(n,e.asyncQueue,t)}Su(e){const t=this.cacheSizeBytes!==void 0?xe.withCacheSize(this.cacheSizeBytes):xe.DEFAULT;return new Gu(n=>js.fi(n,t),this.serializer)}}class _i{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>pl(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=BE.bind(null,this.syncEngine),await vE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new EE}()}createDatastore(e){const t=ir(e.databaseInfo.databaseId),n=function(o){return new tE(o)}(e.databaseInfo);return function(o,a,u,h){return new iE(o,a,u,h)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,r,o,a,u){return new aE(n,r,o,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>pl(this.syncEngine,t,0),function(){return ll.C()?new ll:new Yy}())}createSyncEngine(e,t){return function(r,o,a,u,h,d,p){const _=new RE(r,o,a,u,h,d);return p&&(_.mu=!0),_}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(r){const o=Y(r);F($t,"RemoteStore shutting down."),o.da.add(5),await Jn(o),o.Ra.shutdown(),o.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}_i.provider={build:()=>new _i};/**
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
 */class qE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):ot("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const At="FirestoreClient";class zE{constructor(e,t,n,r,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Le.UNAUTHENTICATED,this.clientId=ru.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async a=>{F(At,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(F(At,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Ji(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function zr(s,e){s.asyncQueue.verifyOperationInProgress(),F(At,"Initializing OfflineComponentProvider");const t=s.configuration;await e.initialize(t);let n=t.initialUser;s.setCredentialChangeListener(async r=>{n.isEqual(r)||(await Ku(e.localStore,r),n=r)}),e.persistence.setDatabaseDeletedListener(()=>s.terminate()),s._offlineComponents=e}async function gl(s,e){s.asyncQueue.verifyOperationInProgress();const t=await GE(s);F(At,"Initializing OnlineComponentProvider"),await e.initialize(t,s.configuration),s.setCredentialChangeListener(n=>cl(e.remoteStore,n)),s.setAppCheckTokenChangeListener((n,r)=>cl(e.remoteStore,r)),s._onlineComponents=e}async function GE(s){if(!s._offlineComponents)if(s._uninitializedComponentsProvider){F(At,"Using user provided OfflineComponentProvider");try{await zr(s,s._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(r){return r.name==="FirebaseError"?r.code===O.FAILED_PRECONDITION||r.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(t))throw t;Jt("Error using user provided cache. Falling back to memory cache: "+t),await zr(s,new qs)}}else F(At,"Using default OfflineComponentProvider"),await zr(s,new HE(void 0));return s._offlineComponents}async function hc(s){return s._onlineComponents||(s._uninitializedComponentsProvider?(F(At,"Using user provided OnlineComponentProvider"),await gl(s,s._uninitializedComponentsProvider._online)):(F(At,"Using default OnlineComponentProvider"),await gl(s,new _i))),s._onlineComponents}function KE(s){return hc(s).then(e=>e.syncEngine)}async function WE(s){const e=await hc(s),t=e.eventManager;return t.onListen=kE.bind(null,e.syncEngine),t.onUnlisten=NE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=CE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=LE.bind(null,e.syncEngine),t}function QE(s,e,t={}){const n=new vt;return s.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const p=new qE({next:y=>{p.xu(),a.enqueueAndForget(()=>IE(o,_));const V=y.docs.has(u);!V&&y.fromCache?d.reject(new z(O.UNAVAILABLE,"Failed to get document because the client is offline.")):V&&y.fromCache&&h&&h.source==="server"?d.reject(new z(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(y)},error:y=>d.reject(y)}),_=new bE(xi(u.path),p,{includeMetadataChanges:!0,Qa:!0});return TE(o,_)}(await WE(s),s.asyncQueue,e,t,n)),n.promise}/**
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
 */function dc(s){const e={};return s.timeoutSeconds!==void 0&&(e.timeoutSeconds=s.timeoutSeconds),e}/**
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
 */function XE(s,e,t){if(!t)throw new z(O.INVALID_ARGUMENT,`Function ${s}() cannot be called with an empty ${e}.`)}function YE(s,e,t,n){if(e===!0&&n===!0)throw new z(O.INVALID_ARGUMENT,`${s} and ${t} cannot be used together.`)}function vl(s){if(!G.isDocumentKey(s))throw new z(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${s} has ${s.length}.`)}function no(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(s);return e?`a custom ${e} object`:"an object"}}return typeof s=="function"?"a function":W(12329,{type:typeof s})}function xt(s,e){if("_delegate"in s&&(s=s._delegate),!(s instanceof e)){if(e.name===s.constructor.name)throw new z(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=no(s);throw new z(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return s}/**
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
 */const fc="firestore.googleapis.com",yl=!0;class El{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new z(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=fc,this.ssl=yl}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:yl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=zu;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<wy)throw new z(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}YE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dc((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new z(O.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new z(O.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new z(O.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,r){return n.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class so{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new El({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new El(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Z_;switch(n.type){case"firstParty":return new sv(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new z(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=_l.get(t);n&&(F("ComponentProvider","Removing Datastore"),_l.delete(t),n.terminate())}(this),Promise.resolve()}}function JE(s,e,t,n={}){var r;s=xt(s,so);const o=ki(e),a=s._getSettings(),u=Object.assign(Object.assign({},a),{emulatorOptions:s._getEmulatorOptions()}),h=`${e}:${t}`;o&&(Vg(`https://${h}`),Dg("Firestore",!0)),a.host!==fc&&a.host!==h&&Jt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:h,ssl:o,emulatorOptions:n});if(!Ds(d,u)&&(s._setSettings(d),n.mockUserToken)){let p,_;if(typeof n.mockUserToken=="string")p=n.mockUserToken,_=Le.MOCK_USER;else{p=Rg(n.mockUserToken,(r=s._app)===null||r===void 0?void 0:r.options.projectId);const y=n.mockUserToken.sub||n.mockUserToken.user_id;if(!y)throw new z(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new Le(y)}s._authCredentials=new ev(new nu(p,_))}}/**
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
 */class ro{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new ro(this.firestore,e,this._query)}}class qe{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qe(this.firestore,e,this._key)}}class Gn extends ro{constructor(e,t,n){super(e,t,xi(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qe(this.firestore,null,new G(e))}withConverter(e){return new Gn(this.firestore,e,this._path)}}function ZE(s,e,...t){if(s=Mt(s),arguments.length===1&&(e=ru.newId()),XE("doc","path",e),s instanceof so){const n=ge.fromString(e,...t);return vl(n),new qe(s,null,new G(n))}{if(!(s instanceof qe||s instanceof Gn))throw new z(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(ge.fromString(e,...t));return vl(n),new qe(s.firestore,s instanceof Gn?s.converter:null,new G(n))}}/**
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
 */const Tl="AsyncQueue";class Il{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new Qu(this,"async_queue_retry"),this.rc=()=>{const n=qr();n&&F(Tl,"Visibility state changed to "+n.visibilityState),this.x_.b_()},this.sc=e;const t=qr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const t=qr();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const t=new vt;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!un(e))throw e;F(Tl,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const t=this.sc.then(()=>(this.ec=!0,e().catch(n=>{throw this.Xu=n,this.ec=!1,ot("INTERNAL UNHANDLED ERROR: ",wl(n)),n}).then(n=>(this.ec=!1,n))));return this.sc=t,t}enqueueAfterDelay(e,t,n){this.oc(),this.nc.indexOf(e)>-1&&(t=0);const r=Yi.createAndSchedule(this,e,t,n,o=>this.uc(o));return this.Zu.push(r),r}oc(){this.Xu&&W(47125,{cc:wl(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const t of this.Zu)if(t.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.Zu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const t=this.Zu.indexOf(e);this.Zu.splice(t,1)}}function wl(s){let e=s.message||"";return s.stack&&(e=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),e}class lr extends so{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Il,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Il(e),this._firestoreClient=void 0,await e}}}function eT(s,e){const t=typeof s=="object"?s:j_(),n=typeof s=="string"?s:Os,r=$_(t,"firestore").getImmediate({identifier:n});if(!r._initialized){const o=Pg("firestore");o&&JE(r,...o)}return r}function pc(s){if(s._terminated)throw new z(O.FAILED_PRECONDITION,"The client has already been terminated.");return s._firestoreClient||tT(s),s._firestoreClient}function tT(s){var e,t,n;const r=s._freezeSettings(),o=function(u,h,d,p){return new vv(u,h,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,dc(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)}(s._databaseId,((e=s._app)===null||e===void 0?void 0:e.options.appId)||"",s._persistenceKey,r);s._componentsProvider||!((t=r.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=r.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(s._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),s._firestoreClient=new zE(s._authCredentials,s._appCheckCredentials,s._queue,o,s._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(s._componentsProvider))}/**
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
 */class oo{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,r){if(n.length!==r.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==r[o])return!1;return!0}(this._values,e._values)}}/**
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
 */const nT=/^__.*__$/;class sT{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new St(e,this.data,this.fieldMask,t,this.fieldTransforms):new Xn(e,this.data,t,this.fieldTransforms)}}class mc{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new St(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function gc(s){switch(s){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W(40011,{Ic:s})}}class ao{constructor(e,t,n,r,o,a){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,o===void 0&&this.Ec(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(e){return new ao(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.dc({path:n,Rc:!1});return r.Vc(e),r}mc(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.dc({path:n,Rc:!1});return r.Ec(),r}fc(e){return this.dc({path:void 0,Rc:!0})}gc(e){return zs(e,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ec(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vc(this.path.get(e))}Vc(e){if(e.length===0)throw this.gc("Document fields must not be empty");if(gc(this.Ic)&&nT.test(e))throw this.gc('Document fields cannot begin and end with "__"')}}class rT{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||ir(e)}bc(e,t,n,r=!1){return new ao({Ic:e,methodName:t,wc:n,path:Pe.emptyPath(),Rc:!1,yc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _c(s){const e=s._freezeSettings(),t=ir(s._databaseId);return new rT(s._databaseId,!!e.ignoreUndefinedProperties,t)}function iT(s,e,t,n,r,o={}){const a=s.bc(o.merge||o.mergeFields?2:0,e,t,r);uo("Data must be an object, but it was:",a,n);const u=vc(n,a);let h,d;if(o.merge)h=new je(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const _ of o.mergeFields){const y=vi(e,_,t);if(!a.contains(y))throw new z(O.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);Ec(p,y)||p.push(y)}h=new je(p),d=a.fieldTransforms.filter(_=>h.covers(_.field))}else h=null,d=a.fieldTransforms;return new sT(new Fe(u),h,d)}class hr extends cr{_toFieldTransform(e){if(e.Ic!==2)throw e.Ic===1?e.gc(`${this._methodName}() can only appear at the top level of your update data`):e.gc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof hr}}class lo extends cr{constructor(e,t){super(e),this.Dc=t}_toFieldTransform(e){const t=new zn(e.serializer,Su(e.serializer,this.Dc));return new qv(e.path,t)}isEqual(e){return e instanceof lo&&this.Dc===e.Dc}}function oT(s,e,t,n){const r=s.bc(1,e,t);uo("Data must be an object, but it was:",r,n);const o=[],a=Fe.empty();Pt(n,(h,d)=>{const p=co(e,h,t);d=Mt(d);const _=r.mc(p);if(d instanceof hr)o.push(p);else{const y=dr(d,_);y!=null&&(o.push(p),a.set(p,y))}});const u=new je(o);return new mc(a,u,r.fieldTransforms)}function aT(s,e,t,n,r,o){const a=s.bc(1,e,t),u=[vi(e,n,t)],h=[r];if(o.length%2!=0)throw new z(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<o.length;y+=2)u.push(vi(e,o[y])),h.push(o[y+1]);const d=[],p=Fe.empty();for(let y=u.length-1;y>=0;--y)if(!Ec(d,u[y])){const V=u[y];let M=h[y];M=Mt(M);const x=a.mc(V);if(M instanceof hr)d.push(V);else{const L=dr(M,x);L!=null&&(d.push(V),p.set(V,L))}}const _=new je(d);return new mc(p,_,a.fieldTransforms)}function dr(s,e){if(yc(s=Mt(s)))return uo("Unsupported field value:",e,s),vc(s,e);if(s instanceof cr)return function(n,r){if(!gc(r.Ic))throw r.gc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.gc(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(r);o&&r.fieldTransforms.push(o)}(s,e),null;if(s===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),s instanceof Array){if(e.settings.Rc&&e.Ic!==4)throw e.gc("Nested arrays are not supported");return function(n,r){const o=[];let a=0;for(const u of n){let h=dr(u,r.fc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(s,e)}return function(n,r){if((n=Mt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Su(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=Ee.fromDate(n);return{timestampValue:Us(r.serializer,o)}}if(n instanceof Ee){const o=new Ee(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Us(r.serializer,o)}}if(n instanceof io)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof rn)return{bytesValue:xu(r.serializer,n._byteString)};if(n instanceof qe){const o=r.databaseId,a=n.firestore._databaseId;if(!a.isEqual(o))throw r.gc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ji(n.firestore._databaseId||r.databaseId,n._key.path)}}if(n instanceof oo)return function(a,u){return{mapValue:{fields:{[du]:{stringValue:fu},[$s]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw u.gc("VectorValues must only contain numeric values.");return Fi(u.serializer,d)})}}}}}}(n,r);throw r.gc(`Unsupported field value: ${no(n)}`)}(s,e)}function vc(s,e){const t={};return ou(s)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pt(s,(n,r)=>{const o=dr(r,e.Ac(n));o!=null&&(t[n]=o)}),{mapValue:{fields:t}}}function yc(s){return!(typeof s!="object"||s===null||s instanceof Array||s instanceof Date||s instanceof Ee||s instanceof io||s instanceof rn||s instanceof qe||s instanceof cr||s instanceof oo)}function uo(s,e,t){if(!yc(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const n=no(t);throw n==="an object"?e.gc(s+" a custom object"):e.gc(s+" "+n)}}function vi(s,e,t){if((e=Mt(e))instanceof ur)return e._internalPath;if(typeof e=="string")return co(s,e);throw zs("Field path arguments must be of type string or ",s,!1,void 0,t)}const lT=new RegExp("[~\\*/\\[\\]]");function co(s,e,t){if(e.search(lT)>=0)throw zs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,s,!1,void 0,t);try{return new ur(...e.split("."))._internalPath}catch{throw zs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s,!1,void 0,t)}}function zs(s,e,t,n,r){const o=n&&!n.isEmpty(),a=r!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${n}`),a&&(h+=` in document ${r}`),h+=")"),new z(O.INVALID_ARGUMENT,u+s+h)}function Ec(s,e){return s.some(t=>t.isEqual(e))}/**
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
 */class Tc{constructor(e,t,n,r,o){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new uT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ic("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class uT extends Tc{data(){return super.data()}}function Ic(s,e){return typeof e=="string"?co(s,e):e instanceof ur?e._internalPath:e._delegate._internalPath}class cT{convertValue(e,t="none"){switch(It(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Tt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw W(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Pt(e,(r,o)=>{n[r]=this.convertValue(o,t)}),n}convertVectorValue(e){var t,n,r;const o=(r=(n=(t=e.fields)===null||t===void 0?void 0:t[$s].arrayValue)===null||n===void 0?void 0:n.values)===null||r===void 0?void 0:r.map(a=>_e(a.doubleValue));return new oo(o)}convertGeoPoint(e){return new io(_e(e.latitude),_e(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Js(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Bn(e));default:return null}}convertTimestamp(e){const t=Et(e);return new Ee(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ge.fromString(e);ce(qu(n),9688,{name:e});const r=new Un(n.get(1),n.get(3)),o=new G(n.popFirst(5));return r.isEqual(t)||ot(`Document ${o} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
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
 */function hT(s,e,t){let n;return n=s?s.toFirestore(e):e,n}/**
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
 */class dT{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wc extends Tc{constructor(e,t,n,r,o,a){super(e,t,n,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new fT(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Ic("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class fT extends wc{data(e={}){return super.data(e)}}/**
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
 */function Al(s){s=xt(s,qe);const e=xt(s.firestore,lr);return QE(pc(e),s._key).then(t=>_T(e,s,t))}class pT extends cT{constructor(e){super(),this.firestore=e}convertBytes(e){return new rn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new qe(this.firestore,null,t)}}function mT(s,e,t){s=xt(s,qe);const n=xt(s.firestore,lr),r=hT(s.converter,e);return Ac(n,[iT(_c(n),"setDoc",s._key,r,s.converter!==null,t).toMutation(s._key,Je.none())])}function gT(s,e,t,...n){s=xt(s,qe);const r=xt(s.firestore,lr),o=_c(r);let a;return a=typeof(e=Mt(e))=="string"||e instanceof ur?aT(o,"updateDoc",s._key,e,t,n):oT(o,"updateDoc",s._key,e),Ac(r,[a.toMutation(s._key,Je.exists(!0))])}function Ac(s,e){return function(n,r){const o=new vt;return n.asyncQueue.enqueueAndForget(async()=>ME(await KE(n),r,o)),o.promise}(pc(s),e)}function _T(s,e,t){const n=t.docs.get(e._key),r=new pT(s);return new wc(s,r,e._key,n,new dT(t.hasPendingWrites,t.fromCache),e.converter)}function vT(s){return new lo("increment",s)}(function(e,t=!0){(function(r){an=r})(U_),Ls(new $n("firestore",(n,{instanceIdentifier:r,options:o})=>{const a=n.getProvider("app").getImmediate(),u=new lr(new tv(n.getProvider("auth-internal")),new rv(a,n.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new z(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Un(d.options.projectId,p)}(a,r),a);return o=Object.assign({useFetchStreams:t},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),Xt(Ra,ka,e),Xt(Ra,ka,"esm2017")})();var yT="firebase",ET="11.9.1";/**
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
 */Xt(yT,ET,"app");const TT={apiKey:"AIzaSyA7DEXo4vLvGinpIrOhhCXtoawV0l4zBBc",authDomain:"holybear-goodbad.firebaseapp.com",projectId:"holybear-goodbad",storageBucket:"holybear-goodbad.appspot.com",messagingSenderId:"227880753618",appId:"1:227880753618:web:280ac7b02894ea857cd00b",measurementId:"G-1FQ8WE5HHE"},IT=Gl(TT),wT=eT(IT);async function bl(s,e={}){try{const t=ZE(wT,"views",s),n=await Al(t);return e.onlyRead?n.exists()&&n.data().count||0:n.exists()?(await gT(t,{count:vT(1)}),(await Al(t)).data().count||0):(await mT(t,{count:1}),1)}catch(t){throw console.error("[view-count.js] Firestore error:",t),t}}const AT={class:"view-count"},bT={__name:"ViewCounter",props:{slug:String},setup(s){const e=s,t=ne(null);function n(a){return JSON.parse(localStorage.getItem("viewedSlugs")||"[]").includes(a)}function r(a){const u=JSON.parse(localStorage.getItem("viewedSlugs")||"[]");u.includes(a)||(u.push(a),localStorage.setItem("viewedSlugs",JSON.stringify(u)))}async function o(a){if(a)try{n(a)?t.value=await bl(a,{onlyRead:!0}):(t.value=await bl(a),r(a))}catch(u){t.value="錯誤",console.error("[ViewCounter] 讀取失敗:",u)}else t.value="無slug",console.warn("[ViewCounter] slug 為空")}return Ke(()=>{o(e.slug)}),ze(()=>e.slug,(a,u)=>{a&&a!==u&&o(a)}),(a,u)=>(E(),R("span",AT,[u[0]||(u[0]=C("img",{src:vh,alt:"人氣",class:"fire-icon",title:"人氣"},null,-1)),He(" "+Z(t.value===null?"載入中...":t.value),1)]))}},PT=q(bT,[["__scopeId","data-v-743f918c"]]),ST={key:0,class:"blog-post-header-injected"},VT={class:"blog-post-title"},RT={key:0,class:"blog-post-meta-row"},kT={class:"blog-post-date-in-content"},CT={style:{float:"right"}},DT={__name:"MyCustomLayout",setup(s){const{frontmatter:e,page:t}=Gs(),n=K(()=>t.value&&(t.value.path==="/"||t.value.path==="/index.html")),r=K(()=>e.value?e.value.title||"無標題文章":"frontmatter.value is UNDEFINED"),o=K(()=>{var u,h,d;return((u=e.value)==null?void 0:u.slug)||((h=t.value)==null?void 0:h.path)||((d=e.value)==null?void 0:d.title)||"unknown"}),a=K(()=>{var u;if((u=e.value)!=null&&u.date){const h=new Date(e.value.date),d=new Date(h.toLocaleString("en-US",{timeZone:"Asia/Taipei"})),p=d.getFullYear(),_=String(d.getMonth()+1).padStart(2,"0"),y=String(d.getDate()).padStart(2,"0"),V=String(d.getHours()).padStart(2,"0"),M=String(d.getMinutes()).padStart(2,"0");return`${p}-${_}-${y} ${V}:${M}`}return""});return(u,h)=>{const d=bt("ClientOnly");return E(),H(b(tg).Layout,null,{"doc-before":N(()=>[n.value?B("",!0):(E(),R("div",ST,[C("h1",VT,Z(r.value),1),b(e).category&&b(e).category.length||b(e).tag&&b(e).tag.length?(E(),R("div",RT,[(E(!0),R(le,null,Se(b(e).category,p=>(E(),R("span",{key:"cat-"+p,class:"category"},Z(p),1))),128)),(E(!0),R(le,null,Se(b(e).tag,p=>(E(),R("span",{key:"tag-"+p,class:"tag"},Z(p),1))),128))])):B("",!0),C("p",kT,[b(e).author?(E(),R(le,{key:0},[He("作者："+Z(b(e).author),1)],64)):B("",!0),b(e).author&&a.value?(E(),R(le,{key:1},[He("｜")],64)):B("",!0),a.value?(E(),R(le,{key:2},[He(Z(a.value),1)],64)):B("",!0),C("span",CT,[U(d,null,{default:N(()=>[U(PT,{slug:o.value},null,8,["slug"])]),_:1})])]),h[0]||(h[0]=C("div",{class:"blog-post-date-divider"},null,-1))]))]),"doc-after":N(()=>[U(d,null,{default:N(()=>[U(mg),U(ig)]),_:1})]),_:1})}}},NT=q(DT,[["__scopeId","data-v-0eb83b7b"]]),OT={Layout:NT};export{OT as R};
