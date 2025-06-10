import{d as U,c as R,o as T,r as k,n as ce,a as ze,t as ie,b as H,T as vi,w as N,e as B,_ as z,u as wl,i as sh,f as ih,g as yi,h as W,j as D,k as b,l as Lt,m as ha,p as at,q as oh,s as Ei,v as ah,x as le,y as rt,z as zr,A as Ti,B as Ii,C as Al,D as Kn,E as Gr,F as da,G as bt,H as ae,I as Se,J as j,K as bl,L as Ke,M as pt,N as Kr,O as lh,P as Pl,Q as uh,R as Sl,S as Vl,U as ch,V as Rl,W as kl,X as hh,Y as dh,Z as fh,$ as ph,a0 as mh}from"./framework.aik2lbzm.js";const gh=U({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(n){return(e,t)=>(T(),R("span",{class:ce(["VPBadge",e.type])},[k(e.$slots,"default",{},()=>[ze(ie(e.text),1)])],2))}}),_h={key:0,class:"VPBackdrop"},vh=U({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(n){return(e,t)=>(T(),H(vi,{name:"fade"},{default:N(()=>[e.show?(T(),R("div",_h)):B("",!0)]),_:1}))}}),yh=z(vh,[["__scopeId","data-v-54a304ca"]]),te=wl;function Eh(n,e){let t,r=!1;return()=>{t&&clearTimeout(t),r?t=setTimeout(n,e):(n(),(r=!0)&&setTimeout(()=>r=!1,e))}}function zs(n){return n.startsWith("/")?n:`/${n}`}function wi(n){const{pathname:e,search:t,hash:r,protocol:s}=new URL(n,"http://a.com");if(sh(n)||n.startsWith("#")||!s.startsWith("http")||!ih(e))return n;const{site:o}=te(),a=e.endsWith("/")||e.endsWith(".html")?n:n.replace(/(?:(^\.+)\/)?.*$/,`$1${e.replace(/(\.md)?$/,o.value.cleanUrls?"":".html")}${t}${r}`);return yi(a)}function Wn({correspondingLink:n=!1}={}){const{site:e,localeIndex:t,page:r,theme:s,hash:o}=te(),a=W(()=>{var h,d;return{label:(h=e.value.locales[t.value])==null?void 0:h.label,link:((d=e.value.locales[t.value])==null?void 0:d.link)||(t.value==="root"?"/":`/${t.value}/`)}});return{localeLinks:W(()=>Object.entries(e.value.locales).flatMap(([h,d])=>a.value.label===d.label?[]:{text:d.label,link:Th(d.link||(h==="root"?"/":`/${h}/`),s.value.i18nRouting!==!1&&n,r.value.relativePath.slice(a.value.link.length-1),!e.value.cleanUrls)+o.value})),currentLang:a}}function Th(n,e,t,r){return e?n.replace(/\/$/,"")+zs(t.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,r?".html":"")):n}const Ih={class:"NotFound"},wh={class:"code"},Ah={class:"title"},bh={class:"quote"},Ph={class:"action"},Sh=["href","aria-label"],Vh=U({__name:"NotFound",setup(n){const{theme:e}=te(),{currentLang:t}=Wn();return(r,s)=>{var o,a,u,h,d,p;return T(),R("div",Ih,[D("p",wh,ie(((o=b(e).notFound)==null?void 0:o.code)??"404"),1),D("h1",Ah,ie(((a=b(e).notFound)==null?void 0:a.title)??"PAGE NOT FOUND"),1),s[0]||(s[0]=D("div",{class:"divider"},null,-1)),D("blockquote",bh,ie(((u=b(e).notFound)==null?void 0:u.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),D("div",Ph,[D("a",{class:"link",href:b(yi)(((h=b(e).notFound)==null?void 0:h.link)??b(t).link),"aria-label":((d=b(e).notFound)==null?void 0:d.linkLabel)??"go to home"},ie(((p=b(e).notFound)==null?void 0:p.linkText)??"Take me home"),9,Sh)])])}}}),Rh=z(Vh,[["__scopeId","data-v-b0126292"]]);function Cl(n,e){if(Array.isArray(n))return wr(n);if(n==null)return[];e=zs(e);const t=Object.keys(n).sort((s,o)=>o.split("/").length-s.split("/").length).find(s=>e.startsWith(zs(s))),r=t?n[t]:[];return Array.isArray(r)?wr(r):wr(r.items,r.base)}function kh(n){const e=[];let t=0;for(const r in n){const s=n[r];if(s.items){t=e.push(s);continue}e[t]||e.push({items:[]}),e[t].items.push(s)}return e}function Ch(n){const e=[];function t(r){for(const s of r)s.text&&s.link&&e.push({text:s.text,link:s.link,docFooterText:s.docFooterText}),s.items&&t(s.items)}return t(n),e}function Gs(n,e){return Array.isArray(e)?e.some(t=>Gs(n,t)):Lt(n,e.link)?!0:e.items?Gs(n,e.items):!1}function wr(n,e){return[...n].map(t=>{const r={...t},s=r.base||e;return s&&r.link&&(r.link=s+r.link),r.items&&(r.items=wr(r.items,s)),r})}function Dh(){const{hasSidebar:n}=lt(),e=ha("(min-width: 960px)"),t=ha("(min-width: 1280px)");return{isAsideEnabled:W(()=>!t.value&&!e.value?!1:n.value?t.value:e.value)}}const Nh=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,Ks=[];function Dl(n){return typeof n.outline=="object"&&!Array.isArray(n.outline)&&n.outline.label||n.outlineTitle||"On this page"}function Lh(n){const e=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(t=>t.id&&t.hasChildNodes()).map(t=>{const r=Number(t.tagName[1]);return{element:t,title:Mh(t),link:"#"+t.id,level:r}});return Oh(e,n)}function Mh(n){let e="";for(const t of n.childNodes)if(t.nodeType===1){if(Nh.test(t.className))continue;e+=t.textContent}else t.nodeType===3&&(e+=t.textContent);return e.trim()}function Oh(n,e){if(e===!1)return[];const t=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[r,s]=typeof t=="number"?[t,t]:t==="deep"?[2,6]:t;return Fh(n,r,s)}function $h(n,e){const{isAsideEnabled:t}=Dh(),r=Eh(o,100);let s=null;at(()=>{requestAnimationFrame(o),window.addEventListener("scroll",r)}),oh(()=>{a(location.hash)}),Ei(()=>{window.removeEventListener("scroll",r)});function o(){if(!t.value)return;const u=window.scrollY,h=window.innerHeight,d=document.body.offsetHeight,p=Math.abs(u+h-d)<1,v=Ks.map(({element:V,link:M})=>({link:M,top:xh(V)})).filter(({top:V})=>!Number.isNaN(V)).sort((V,M)=>V.top-M.top);if(!v.length){a(null);return}if(u<1){a(null);return}if(p){a(v[v.length-1].link);return}let y=null;for(const{link:V,top:M}of v){if(M>u+ah()+4)break;y=V}a(y)}function a(u){s&&s.classList.remove("active"),u==null?s=null:s=n.value.querySelector(`a[href="${decodeURIComponent(u)}"]`);const h=s;h?(h.classList.add("active"),e.value.style.top=h.offsetTop+39+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function xh(n){let e=0;for(;n!==document.body;){if(n===null)return NaN;e+=n.offsetTop,n=n.offsetParent}return e}function Fh(n,e,t){Ks.length=0;const r=[],s=[];return n.forEach(o=>{const a={...o,children:[]};let u=s[s.length-1];for(;u&&u.level>=a.level;)s.pop(),u=s[s.length-1];if(a.element.classList.contains("ignore-header")||u&&"shouldIgnore"in u){s.push({level:a.level,shouldIgnore:!0});return}a.level>t||a.level<e||(Ks.push({element:a.element,link:a.link}),u?u.children.push(a):r.push(a),s.push(a))}),r}const Qt=le(!1);function Bh(n){let e;zr(()=>{e=Qt.value?document.activeElement:void 0}),at(()=>{window.addEventListener("keyup",t)}),Ei(()=>{window.removeEventListener("keyup",t)});function t(r){r.key==="Escape"&&Qt.value&&(n(),e==null||e.focus())}}function Uh(){function n(){Qt.value=!0}function e(){Qt.value=!1}function t(){Qt.value?e():n()}return{isOpen:Qt,open:n,close:e,toggle:t}}function jh(n){const{page:e,hash:t}=te(),r=le(!1),s=W(()=>n.value.collapsed!=null),o=W(()=>!!n.value.link),a=le(!1),u=()=>{a.value=Lt(e.value.relativePath,n.value.link)};rt([e,n,t],u),at(u);const h=W(()=>a.value?!0:n.value.items?Gs(e.value.relativePath,n.value.items):!1),d=W(()=>!!(n.value.items&&n.value.items.length));zr(()=>{r.value=!!(s.value&&n.value.collapsed)}),Ti(()=>{(a.value||h.value)&&(r.value=!1)});function p(){s.value&&(r.value=!r.value)}return{collapsed:r,collapsible:s,isLink:o,isActiveLink:a,hasActiveLink:h,hasChildren:d,toggle:p}}const Ws=Ii([]),Cn=Ii([]),Qs=Ii(!1);function lt(){const{frontmatter:n,theme:e}=te(),t=W(()=>!!(n.value.isHome??n.value.layout==="home")),r=W(()=>n.value.sidebar!==!1&&Cn.value.length>0&&!t.value),s=W(()=>r.value&&Qs.value),o=W(()=>r.value?kh(Cn.value):[]),a=W(()=>t.value?!1:n.value.aside!=null?!!n.value.aside:e.value.aside!==!1),u=W(()=>a.value?n.value.aside==null?e.value.aside==="left":n.value.aside==="left":!1),h=W(()=>Ws.value.length>0);return{isHome:t,sidebar:da(Cn),sidebarGroups:o,hasSidebar:r,isSidebarEnabled:s,hasAside:a,leftAside:u,headers:da(Ws),hasLocalNav:h}}function Hh({closeSidebar:n}){const{frontmatter:e,page:t,theme:r}=te();rt(()=>[t.value.relativePath,r.value.sidebar],([o,a])=>{const u=a?Cl(a,o):[];JSON.stringify(u)!==JSON.stringify(Cn.value)&&(Cn.value=u)},{immediate:!0,deep:!0,flush:"sync"}),Al(()=>{Ws.value=Lh(e.value.outline??r.value.outline)}),Kn&&(Qs.value=window.innerWidth>=960,window.addEventListener("resize",()=>{Qs.value=window.innerWidth>=960},{passive:!0}));const s=Gr();rt(()=>s.path,n),Bh(n)}const qh=["href","title"],zh=U({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(n){function e({target:t}){const r=t.href.split("#")[1],s=document.getElementById(decodeURIComponent(r));s==null||s.focus({preventScroll:!0})}return(t,r)=>{const s=bt("VPDocOutlineItem",!0);return T(),R("ul",{class:ce(["VPDocOutlineItem",t.root?"root":"nested"])},[(T(!0),R(ae,null,Se(t.headers,({children:o,link:a,title:u})=>(T(),R("li",null,[D("a",{class:"outline-link",href:a,onClick:e,title:u},ie(u),9,qh),o!=null&&o.length?(T(),H(s,{key:0,headers:o},null,8,["headers"])):B("",!0)]))),256))],2)}}}),Nl=z(zh,[["__scopeId","data-v-b7d7ef80"]]),Gh={class:"content"},Kh={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},Wh=U({__name:"VPDocAsideOutline",setup(n){const{theme:e}=te(),t=le(),r=le(),{headers:s,hasLocalNav:o}=lt();return $h(t,r),(a,u)=>(T(),R("nav",{"aria-labelledby":"doc-outline-aria-label",class:ce(["VPDocAsideOutline",{"has-outline":b(o)}]),ref_key:"container",ref:t},[D("div",Gh,[D("div",{class:"outline-marker",ref_key:"marker",ref:r},null,512),D("div",Kh,ie(b(Dl)(b(e))),1),j(Nl,{headers:b(s),root:!0},null,8,["headers"])])],2))}}),Qh=z(Wh,[["__scopeId","data-v-c8b19031"]]),Xh={class:"VPDocAsideCarbonAds"},Yh=U({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(n){const e=()=>null;return(t,r)=>(T(),R("div",Xh,[j(b(e),{"carbon-ads":t.carbonAds},null,8,["carbon-ads"])]))}}),Jh={class:"VPDocAside"},Zh=U({__name:"VPDocAside",setup(n){const{theme:e}=te();return(t,r)=>(T(),R("div",Jh,[k(t.$slots,"aside-top",{},void 0,!0),k(t.$slots,"aside-outline-before",{},void 0,!0),j(Qh),k(t.$slots,"aside-outline-after",{},void 0,!0),r[0]||(r[0]=D("div",{class:"spacer"},null,-1)),k(t.$slots,"aside-ads-before",{},void 0,!0),b(e).carbonAds?(T(),H(Yh,{key:0,"carbon-ads":b(e).carbonAds},null,8,["carbon-ads"])):B("",!0),k(t.$slots,"aside-ads-after",{},void 0,!0),k(t.$slots,"aside-bottom",{},void 0,!0)]))}}),ed=z(Zh,[["__scopeId","data-v-cb998dce"]]);function td(){const{theme:n,page:e}=te();return W(()=>{const{text:t="Edit this page",pattern:r=""}=n.value.editLink||{};let s;return typeof r=="function"?s=r(e.value):s=r.replace(/:path/g,e.value.filePath),{url:s,text:t}})}function nd(){const{page:n,theme:e,frontmatter:t}=te();return W(()=>{var d,p,v,y,V,M,x,L;const r=Cl(e.value.sidebar,n.value.relativePath),s=Ch(r),o=rd(s,J=>J.link.replace(/[?#].*$/,"")),a=o.findIndex(J=>Lt(n.value.relativePath,J.link)),u=((d=e.value.docFooter)==null?void 0:d.prev)===!1&&!t.value.prev||t.value.prev===!1,h=((p=e.value.docFooter)==null?void 0:p.next)===!1&&!t.value.next||t.value.next===!1;return{prev:u?void 0:{text:(typeof t.value.prev=="string"?t.value.prev:typeof t.value.prev=="object"?t.value.prev.text:void 0)??((v=o[a-1])==null?void 0:v.docFooterText)??((y=o[a-1])==null?void 0:y.text),link:(typeof t.value.prev=="object"?t.value.prev.link:void 0)??((V=o[a-1])==null?void 0:V.link)},next:h?void 0:{text:(typeof t.value.next=="string"?t.value.next:typeof t.value.next=="object"?t.value.next.text:void 0)??((M=o[a+1])==null?void 0:M.docFooterText)??((x=o[a+1])==null?void 0:x.text),link:(typeof t.value.next=="object"?t.value.next.link:void 0)??((L=o[a+1])==null?void 0:L.link)}}})}function rd(n,e){const t=new Set;return n.filter(r=>{const s=e(r);return t.has(s)?!1:t.add(s)})}const We=U({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(n){const e=n,t=W(()=>e.tag??(e.href?"a":"span")),r=W(()=>e.href&&bl.test(e.href)||e.target==="_blank");return(s,o)=>(T(),H(Ke(t.value),{class:ce(["VPLink",{link:s.href,"vp-external-link-icon":r.value,"no-icon":s.noIcon}]),href:s.href?b(wi)(s.href):void 0,target:s.target??(r.value?"_blank":void 0),rel:s.rel??(r.value?"noreferrer":void 0)},{default:N(()=>[k(s.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),sd={class:"VPLastUpdated"},id=["datetime"],od=U({__name:"VPDocFooterLastUpdated",setup(n){const{theme:e,page:t,lang:r}=te(),s=W(()=>new Date(t.value.lastUpdated)),o=W(()=>s.value.toISOString()),a=le("");return at(()=>{zr(()=>{var u,h,d;a.value=new Intl.DateTimeFormat((h=(u=e.value.lastUpdated)==null?void 0:u.formatOptions)!=null&&h.forceLocale?r.value:void 0,((d=e.value.lastUpdated)==null?void 0:d.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(s.value)})}),(u,h)=>{var d;return T(),R("p",sd,[ze(ie(((d=b(e).lastUpdated)==null?void 0:d.text)||b(e).lastUpdatedText||"Last updated")+": ",1),D("time",{datetime:o.value},ie(a.value),9,id)])}}}),ad=z(od,[["__scopeId","data-v-1bb0c8a8"]]),ld={key:0,class:"VPDocFooter"},ud={key:0,class:"edit-info"},cd={key:0,class:"edit-link"},hd={key:1,class:"last-updated"},dd={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},fd={class:"pager"},pd=["innerHTML"],md=["innerHTML"],gd={class:"pager"},_d=["innerHTML"],vd=["innerHTML"],yd=U({__name:"VPDocFooter",setup(n){const{theme:e,page:t,frontmatter:r}=te(),s=td(),o=nd(),a=W(()=>e.value.editLink&&r.value.editLink!==!1),u=W(()=>t.value.lastUpdated),h=W(()=>a.value||u.value||o.value.prev||o.value.next);return(d,p)=>{var v,y,V,M;return h.value?(T(),R("footer",ld,[k(d.$slots,"doc-footer-before",{},void 0,!0),a.value||u.value?(T(),R("div",ud,[a.value?(T(),R("div",cd,[j(We,{class:"edit-link-button",href:b(s).url,"no-icon":!0},{default:N(()=>[p[0]||(p[0]=D("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),ze(" "+ie(b(s).text),1)]),_:1,__:[0]},8,["href"])])):B("",!0),u.value?(T(),R("div",hd,[j(ad)])):B("",!0)])):B("",!0),(v=b(o).prev)!=null&&v.link||(y=b(o).next)!=null&&y.link?(T(),R("nav",dd,[p[1]||(p[1]=D("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),D("div",fd,[(V=b(o).prev)!=null&&V.link?(T(),H(We,{key:0,class:"pager-link prev",href:b(o).prev.link},{default:N(()=>{var x;return[D("span",{class:"desc",innerHTML:((x=b(e).docFooter)==null?void 0:x.prev)||"Previous page"},null,8,pd),D("span",{class:"title",innerHTML:b(o).prev.text},null,8,md)]}),_:1},8,["href"])):B("",!0)]),D("div",gd,[(M=b(o).next)!=null&&M.link?(T(),H(We,{key:0,class:"pager-link next",href:b(o).next.link},{default:N(()=>{var x;return[D("span",{class:"desc",innerHTML:((x=b(e).docFooter)==null?void 0:x.next)||"Next page"},null,8,_d),D("span",{class:"title",innerHTML:b(o).next.text},null,8,vd)]}),_:1},8,["href"])):B("",!0)])])):B("",!0)])):B("",!0)}}}),Ed=z(yd,[["__scopeId","data-v-1bcd8184"]]),Td={class:"container"},Id={class:"aside-container"},wd={class:"aside-content"},Ad={class:"content"},bd={class:"content-container"},Pd={class:"main"},Sd=U({__name:"VPDoc",setup(n){const{theme:e}=te(),t=Gr(),{hasSidebar:r,hasAside:s,leftAside:o}=lt(),a=W(()=>t.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(u,h)=>{const d=bt("Content");return T(),R("div",{class:ce(["VPDoc",{"has-sidebar":b(r),"has-aside":b(s)}])},[k(u.$slots,"doc-top",{},void 0,!0),D("div",Td,[b(s)?(T(),R("div",{key:0,class:ce(["aside",{"left-aside":b(o)}])},[h[0]||(h[0]=D("div",{class:"aside-curtain"},null,-1)),D("div",Id,[D("div",wd,[j(ed,null,{"aside-top":N(()=>[k(u.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":N(()=>[k(u.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":N(()=>[k(u.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":N(()=>[k(u.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":N(()=>[k(u.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":N(()=>[k(u.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):B("",!0),D("div",Ad,[D("div",bd,[k(u.$slots,"doc-before",{},void 0,!0),D("main",Pd,[j(d,{class:ce(["vp-doc",[a.value,b(e).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),j(Ed,null,{"doc-footer-before":N(()=>[k(u.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),k(u.$slots,"doc-after",{},void 0,!0)])])]),k(u.$slots,"doc-bottom",{},void 0,!0)],2)}}}),Vd=z(Sd,[["__scopeId","data-v-d668f7cc"]]),Rd=U({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(n){const e=n,t=W(()=>e.href&&bl.test(e.href)),r=W(()=>e.tag||(e.href?"a":"button"));return(s,o)=>(T(),H(Ke(r.value),{class:ce(["VPButton",[s.size,s.theme]]),href:s.href?b(wi)(s.href):void 0,target:e.target??(t.value?"_blank":void 0),rel:e.rel??(t.value?"noreferrer":void 0)},{default:N(()=>[k(s.$slots,"default",{},()=>[ze(ie(s.text),1)],!0)]),_:3},8,["class","href","target","rel"]))}}),kd=z(Rd,[["__scopeId","data-v-58d3b43b"]]),Cd=["src","alt"],Dd=U({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(n){return(e,t)=>{const r=bt("VPImage",!0);return e.image?(T(),R(ae,{key:0},[typeof e.image=="string"||"src"in e.image?(T(),R("img",pt({key:0,class:"VPImage"},typeof e.image=="string"?e.$attrs:{...e.image,...e.$attrs},{src:b(yi)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,Cd)):(T(),R(ae,{key:1},[j(r,pt({class:"dark",image:e.image.dark,alt:e.image.alt},e.$attrs),null,16,["image","alt"]),j(r,pt({class:"light",image:e.image.light,alt:e.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):B("",!0)}}}),Rr=z(Dd,[["__scopeId","data-v-ab19afbb"]]),Nd={class:"container"},Ld={class:"main"},Md={class:"heading"},Od=["innerHTML"],$d=["innerHTML"],xd=["innerHTML"],Fd={key:0,class:"actions"},Bd={key:0,class:"image"},Ud={class:"image-container"},jd=U({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(n){const e=Kr("hero-image-slot-exists");return(t,r)=>(T(),R("div",{class:ce(["VPHero",{"has-image":t.image||b(e)}])},[D("div",Nd,[D("div",Ld,[k(t.$slots,"home-hero-info-before",{},void 0,!0),k(t.$slots,"home-hero-info",{},()=>[D("h1",Md,[t.name?(T(),R("span",{key:0,innerHTML:t.name,class:"name clip"},null,8,Od)):B("",!0),t.text?(T(),R("span",{key:1,innerHTML:t.text,class:"text"},null,8,$d)):B("",!0)]),t.tagline?(T(),R("p",{key:0,innerHTML:t.tagline,class:"tagline"},null,8,xd)):B("",!0)],!0),k(t.$slots,"home-hero-info-after",{},void 0,!0),t.actions?(T(),R("div",Fd,[(T(!0),R(ae,null,Se(t.actions,s=>(T(),R("div",{key:s.link,class:"action"},[j(kd,{tag:"a",size:"medium",theme:s.theme,text:s.text,href:s.link,target:s.target,rel:s.rel},null,8,["theme","text","href","target","rel"])]))),128))])):B("",!0),k(t.$slots,"home-hero-actions-after",{},void 0,!0)]),t.image||b(e)?(T(),R("div",Bd,[D("div",Ud,[r[0]||(r[0]=D("div",{class:"image-bg"},null,-1)),k(t.$slots,"home-hero-image",{},()=>[t.image?(T(),H(Rr,{key:0,class:"image-src",image:t.image},null,8,["image"])):B("",!0)],!0)])])):B("",!0)])],2))}}),Hd=z(jd,[["__scopeId","data-v-8a17128e"]]),qd=U({__name:"VPHomeHero",setup(n){const{frontmatter:e}=te();return(t,r)=>b(e).hero?(T(),H(Hd,{key:0,class:"VPHomeHero",name:b(e).hero.name,text:b(e).hero.text,tagline:b(e).hero.tagline,image:b(e).hero.image,actions:b(e).hero.actions},{"home-hero-info-before":N(()=>[k(t.$slots,"home-hero-info-before")]),"home-hero-info":N(()=>[k(t.$slots,"home-hero-info")]),"home-hero-info-after":N(()=>[k(t.$slots,"home-hero-info-after")]),"home-hero-actions-after":N(()=>[k(t.$slots,"home-hero-actions-after")]),"home-hero-image":N(()=>[k(t.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):B("",!0)}}),zd={class:"box"},Gd={key:0,class:"icon"},Kd=["innerHTML"],Wd=["innerHTML"],Qd=["innerHTML"],Xd={key:4,class:"link-text"},Yd={class:"link-text-value"},Jd=U({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(n){return(e,t)=>(T(),H(We,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:N(()=>[D("article",zd,[typeof e.icon=="object"&&e.icon.wrap?(T(),R("div",Gd,[j(Rr,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(T(),H(Rr,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(T(),R("div",{key:2,class:"icon",innerHTML:e.icon},null,8,Kd)):B("",!0),D("h2",{class:"title",innerHTML:e.title},null,8,Wd),e.details?(T(),R("p",{key:3,class:"details",innerHTML:e.details},null,8,Qd)):B("",!0),e.linkText?(T(),R("div",Xd,[D("p",Yd,[ze(ie(e.linkText)+" ",1),t[0]||(t[0]=D("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):B("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Zd=z(Jd,[["__scopeId","data-v-02d1074d"]]),ef={key:0,class:"VPFeatures"},tf={class:"container"},nf={class:"items"},rf=U({__name:"VPFeatures",props:{features:{}},setup(n){const e=n,t=W(()=>{const r=e.features.length;if(r){if(r===2)return"grid-2";if(r===3)return"grid-3";if(r%3===0)return"grid-6";if(r>3)return"grid-4"}else return});return(r,s)=>r.features?(T(),R("div",ef,[D("div",tf,[D("div",nf,[(T(!0),R(ae,null,Se(r.features,o=>(T(),R("div",{key:o.title,class:ce(["item",[t.value]])},[j(Zd,{icon:o.icon,title:o.title,details:o.details,link:o.link,"link-text":o.linkText,rel:o.rel,target:o.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):B("",!0)}}),sf=z(rf,[["__scopeId","data-v-b1eea84a"]]),of=U({__name:"VPHomeFeatures",setup(n){const{frontmatter:e}=te();return(t,r)=>b(e).features?(T(),H(sf,{key:0,class:"VPHomeFeatures",features:b(e).features},null,8,["features"])):B("",!0)}}),af=U({__name:"VPHomeContent",setup(n){const{width:e}=lh({initialWidth:0,includeScrollbar:!1});return(t,r)=>(T(),R("div",{class:"vp-doc container",style:Pl(b(e)?{"--vp-offset":`calc(50% - ${b(e)/2}px)`}:{})},[k(t.$slots,"default",{},void 0,!0)],4))}}),lf=z(af,[["__scopeId","data-v-c141a4bd"]]),uf=U({__name:"VPHome",setup(n){const{frontmatter:e,theme:t}=te();return(r,s)=>{const o=bt("Content");return T(),R("div",{class:ce(["VPHome",{"external-link-icon-enabled":b(t).externalLinkIcon}])},[k(r.$slots,"home-hero-before",{},void 0,!0),j(qd,null,{"home-hero-info-before":N(()=>[k(r.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":N(()=>[k(r.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":N(()=>[k(r.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":N(()=>[k(r.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":N(()=>[k(r.$slots,"home-hero-image",{},void 0,!0)]),_:3}),k(r.$slots,"home-hero-after",{},void 0,!0),k(r.$slots,"home-features-before",{},void 0,!0),j(of),k(r.$slots,"home-features-after",{},void 0,!0),b(e).markdownStyles!==!1?(T(),H(lf,{key:0},{default:N(()=>[j(o)]),_:1})):(T(),H(o,{key:1}))],2)}}}),cf=z(uf,[["__scopeId","data-v-e07eaea7"]]),hf={},df={class:"VPPage"};function ff(n,e){const t=bt("Content");return T(),R("div",df,[k(n.$slots,"page-top"),j(t),k(n.$slots,"page-bottom")])}const pf=z(hf,[["render",ff]]),mf=U({__name:"VPContent",setup(n){const{page:e,frontmatter:t}=te(),{isHome:r,hasSidebar:s}=lt();return(o,a)=>(T(),R("div",{class:ce(["VPContent",{"has-sidebar":b(s),"is-home":b(r)}]),id:"VPContent"},[b(e).isNotFound?k(o.$slots,"not-found",{key:0},()=>[j(Rh)],!0):b(t).layout==="page"?(T(),H(pf,{key:1},{"page-top":N(()=>[k(o.$slots,"page-top",{},void 0,!0)]),"page-bottom":N(()=>[k(o.$slots,"page-bottom",{},void 0,!0)]),_:3})):b(t).layout==="home"?(T(),H(cf,{key:2},{"home-hero-before":N(()=>[k(o.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":N(()=>[k(o.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":N(()=>[k(o.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":N(()=>[k(o.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":N(()=>[k(o.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":N(()=>[k(o.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":N(()=>[k(o.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":N(()=>[k(o.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":N(()=>[k(o.$slots,"home-features-after",{},void 0,!0)]),_:3})):b(t).layout&&b(t).layout!=="doc"?(T(),H(Ke(b(t).layout),{key:3})):(T(),H(Vd,{key:4},{"doc-top":N(()=>[k(o.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":N(()=>[k(o.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":N(()=>[k(o.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":N(()=>[k(o.$slots,"doc-before",{},void 0,!0)]),"doc-after":N(()=>[k(o.$slots,"doc-after",{},void 0,!0)]),"aside-top":N(()=>[k(o.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":N(()=>[k(o.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":N(()=>[k(o.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":N(()=>[k(o.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":N(()=>[k(o.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":N(()=>[k(o.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),gf=z(mf,[["__scopeId","data-v-2652e39a"]]),_f={class:"container"},vf=["innerHTML"],yf=["innerHTML"],Ef=U({__name:"VPFooter",setup(n){const{theme:e,frontmatter:t}=te(),{hasSidebar:r}=lt();return(s,o)=>b(e).footer&&b(t).footer!==!1?(T(),R("footer",{key:0,class:ce(["VPFooter",{"has-sidebar":b(r)}])},[D("div",_f,[b(e).footer.message?(T(),R("p",{key:0,class:"message",innerHTML:b(e).footer.message},null,8,vf)):B("",!0),b(e).footer.copyright?(T(),R("p",{key:1,class:"copyright",innerHTML:b(e).footer.copyright},null,8,yf)):B("",!0)])],2)):B("",!0)}}),Tf=z(Ef,[["__scopeId","data-v-5b9946f5"]]),If={class:"menu-text"},wf={class:"header"},Af={class:"outline"},bf=U({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(n){const e=n,{theme:t}=te(),r=le(!1),s=le(0),o=le(),a=le();function u(v){var y;(y=o.value)!=null&&y.contains(v.target)||(r.value=!1)}rt(r,v=>{if(v){document.addEventListener("click",u);return}document.removeEventListener("click",u)}),uh("Escape",()=>{r.value=!1}),Al(()=>{r.value=!1});function h(){r.value=!r.value,s.value=window.innerHeight+Math.min(window.scrollY-e.navHeight,0)}function d(v){v.target.classList.contains("outline-link")&&(a.value&&(a.value.style.transition="none"),Sl(()=>{r.value=!1}))}function p(){r.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(v,y)=>(T(),R("div",{class:"VPLocalNavOutlineDropdown",style:Pl({"--vp-vh":s.value+"px"}),ref_key:"main",ref:o},[v.headers.length>0?(T(),R("button",{key:0,onClick:h,class:ce({open:r.value})},[D("span",If,ie(b(Dl)(b(t))),1),y[0]||(y[0]=D("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(T(),R("button",{key:1,onClick:p},ie(b(t).returnToTopLabel||"Return to top"),1)),j(vi,{name:"flyout"},{default:N(()=>[r.value?(T(),R("div",{key:0,ref_key:"items",ref:a,class:"items",onClick:d},[D("div",wf,[D("a",{class:"top-link",href:"#",onClick:p},ie(b(t).returnToTopLabel||"Return to top"),1)]),D("div",Af,[j(Nl,{headers:v.headers},null,8,["headers"])])],512)):B("",!0)]),_:1})],4))}}),Pf=z(bf,[["__scopeId","data-v-92b7576c"]]),Sf={class:"container"},Vf=["aria-expanded"],Rf={class:"menu-text"},kf=U({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(n){const{theme:e}=te(),{isHome:t,hasSidebar:r,headers:s,hasLocalNav:o}=lt(),{y:a}=Vl(),u=le(0);at(()=>{u.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))});const h=W(()=>({VPLocalNav:!0,"has-sidebar":r.value,empty:!o.value,fixed:!o.value&&!r.value}));return(d,p)=>!b(t)&&(b(o)||b(r)||b(a)>=u.value)?(T(),R("div",{key:0,class:ce(h.value)},[D("div",Sf,[b(r)?(T(),R("button",{key:0,class:"menu","aria-expanded":d.open,"aria-controls":"VPSidebarNav",onClick:p[0]||(p[0]=v=>d.$emit("open-menu"))},[p[1]||(p[1]=D("span",{class:"vpi-align-left menu-icon"},null,-1)),D("span",Rf,ie(b(e).sidebarMenuLabel||"Menu"),1)],8,Vf)):B("",!0),j(Pf,{headers:b(s),navHeight:u.value},null,8,["headers","navHeight"])])],2)):B("",!0)}}),Cf=z(kf,[["__scopeId","data-v-6c0451ca"]]);function Df(){const n=le(!1);function e(){n.value=!0,window.addEventListener("resize",s)}function t(){n.value=!1,window.removeEventListener("resize",s)}function r(){n.value?t():e()}function s(){window.outerWidth>=768&&t()}const o=Gr();return rt(()=>o.path,t),{isScreenOpen:n,openScreen:e,closeScreen:t,toggleScreen:r}}const Nf={},Lf={class:"VPSwitch",type:"button",role:"switch"},Mf={class:"check"},Of={key:0,class:"icon"};function $f(n,e){return T(),R("button",Lf,[D("span",Mf,[n.$slots.default?(T(),R("span",Of,[k(n.$slots,"default",{},void 0,!0)])):B("",!0)])])}const xf=z(Nf,[["render",$f],["__scopeId","data-v-b4ccac88"]]),Ff=U({__name:"VPSwitchAppearance",setup(n){const{isDark:e,theme:t}=te(),r=Kr("toggle-appearance",()=>{e.value=!e.value}),s=le("");return Ti(()=>{s.value=e.value?t.value.lightModeSwitchTitle||"Switch to light theme":t.value.darkModeSwitchTitle||"Switch to dark theme"}),(o,a)=>(T(),H(xf,{title:s.value,class:"VPSwitchAppearance","aria-checked":b(e),onClick:b(r)},{default:N(()=>a[0]||(a[0]=[D("span",{class:"vpi-sun sun"},null,-1),D("span",{class:"vpi-moon moon"},null,-1)])),_:1,__:[0]},8,["title","aria-checked","onClick"]))}}),Ai=z(Ff,[["__scopeId","data-v-be9742d9"]]),Bf={key:0,class:"VPNavBarAppearance"},Uf=U({__name:"VPNavBarAppearance",setup(n){const{site:e}=te();return(t,r)=>b(e).appearance&&b(e).appearance!=="force-dark"&&b(e).appearance!=="force-auto"?(T(),R("div",Bf,[j(Ai)])):B("",!0)}}),jf=z(Uf,[["__scopeId","data-v-3f90c1a5"]]),bi=le();let Ll=!1,Os=0;function Hf(n){const e=le(!1);if(Kn){!Ll&&qf(),Os++;const t=rt(bi,r=>{var s,o,a;r===n.el.value||(s=n.el.value)!=null&&s.contains(r)?(e.value=!0,(o=n.onFocus)==null||o.call(n)):(e.value=!1,(a=n.onBlur)==null||a.call(n))});Ei(()=>{t(),Os--,Os||zf()})}return ch(e)}function qf(){document.addEventListener("focusin",Ml),Ll=!0,bi.value=document.activeElement}function zf(){document.removeEventListener("focusin",Ml)}function Ml(){bi.value=document.activeElement}const Gf={class:"VPMenuLink"},Kf=["innerHTML"],Wf=U({__name:"VPMenuLink",props:{item:{}},setup(n){const{page:e}=te();return(t,r)=>(T(),R("div",Gf,[j(We,{class:ce({active:b(Lt)(b(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon},{default:N(()=>[D("span",{innerHTML:t.item.text},null,8,Kf)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),Wr=z(Wf,[["__scopeId","data-v-7eeeb2dc"]]),Qf={class:"VPMenuGroup"},Xf={key:0,class:"title"},Yf=U({__name:"VPMenuGroup",props:{text:{},items:{}},setup(n){return(e,t)=>(T(),R("div",Qf,[e.text?(T(),R("p",Xf,ie(e.text),1)):B("",!0),(T(!0),R(ae,null,Se(e.items,r=>(T(),R(ae,null,["link"in r?(T(),H(Wr,{key:0,item:r},null,8,["item"])):B("",!0)],64))),256))]))}}),Jf=z(Yf,[["__scopeId","data-v-383108e6"]]),Zf={class:"VPMenu"},ep={key:0,class:"items"},tp=U({__name:"VPMenu",props:{items:{}},setup(n){return(e,t)=>(T(),R("div",Zf,[e.items?(T(),R("div",ep,[(T(!0),R(ae,null,Se(e.items,r=>(T(),R(ae,{key:JSON.stringify(r)},["link"in r?(T(),H(Wr,{key:0,item:r},null,8,["item"])):"component"in r?(T(),H(Ke(r.component),pt({key:1,ref_for:!0},r.props),null,16)):(T(),H(Jf,{key:2,text:r.text,items:r.items},null,8,["text","items"]))],64))),128))])):B("",!0),k(e.$slots,"default",{},void 0,!0)]))}}),np=z(tp,[["__scopeId","data-v-2f78439e"]]),rp=["aria-expanded","aria-label"],sp={key:0,class:"text"},ip=["innerHTML"],op={key:1,class:"vpi-more-horizontal icon"},ap={class:"menu"},lp=U({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(n){const e=le(!1),t=le();Hf({el:t,onBlur:r});function r(){e.value=!1}return(s,o)=>(T(),R("div",{class:"VPFlyout",ref_key:"el",ref:t,onMouseenter:o[1]||(o[1]=a=>e.value=!0),onMouseleave:o[2]||(o[2]=a=>e.value=!1)},[D("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":s.label,onClick:o[0]||(o[0]=a=>e.value=!e.value)},[s.button||s.icon?(T(),R("span",sp,[s.icon?(T(),R("span",{key:0,class:ce([s.icon,"option-icon"])},null,2)):B("",!0),s.button?(T(),R("span",{key:1,innerHTML:s.button},null,8,ip)):B("",!0),o[3]||(o[3]=D("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(T(),R("span",op))],8,rp),D("div",ap,[j(np,{items:s.items},{default:N(()=>[k(s.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),Pi=z(lp,[["__scopeId","data-v-9bb987dd"]]),up=["href","aria-label","innerHTML"],cp=U({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(n){const e=n,t=le();at(async()=>{var o;await Sl();const s=(o=t.value)==null?void 0:o.children[0];s instanceof HTMLElement&&s.className.startsWith("vpi-social-")&&(getComputedStyle(s).maskImage||getComputedStyle(s).webkitMaskImage)==="none"&&s.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${e.icon}.svg')`)});const r=W(()=>typeof e.icon=="object"?e.icon.svg:`<span class="vpi-social-${e.icon}"></span>`);return(s,o)=>(T(),R("a",{ref_key:"el",ref:t,class:"VPSocialLink no-icon",href:s.link,"aria-label":s.ariaLabel??(typeof s.icon=="string"?s.icon:""),target:"_blank",rel:"noopener",innerHTML:r.value},null,8,up))}}),hp=z(cp,[["__scopeId","data-v-60a9a2d3"]]),dp={class:"VPSocialLinks"},fp=U({__name:"VPSocialLinks",props:{links:{}},setup(n){return(e,t)=>(T(),R("div",dp,[(T(!0),R(ae,null,Se(e.links,({link:r,icon:s,ariaLabel:o})=>(T(),H(hp,{key:r,icon:s,link:r,ariaLabel:o},null,8,["icon","link","ariaLabel"]))),128))]))}}),Si=z(fp,[["__scopeId","data-v-b51b99b1"]]),pp={key:0,class:"group translations"},mp={class:"trans-title"},gp={key:1,class:"group"},_p={class:"item appearance"},vp={class:"label"},yp={class:"appearance-action"},Ep={key:2,class:"group"},Tp={class:"item social-links"},Ip=U({__name:"VPNavBarExtra",setup(n){const{site:e,theme:t}=te(),{localeLinks:r,currentLang:s}=Wn({correspondingLink:!0}),o=W(()=>r.value.length&&s.value.label||e.value.appearance||t.value.socialLinks);return(a,u)=>o.value?(T(),H(Pi,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:N(()=>[b(r).length&&b(s).label?(T(),R("div",pp,[D("p",mp,ie(b(s).label),1),(T(!0),R(ae,null,Se(b(r),h=>(T(),H(Wr,{key:h.link,item:h},null,8,["item"]))),128))])):B("",!0),b(e).appearance&&b(e).appearance!=="force-dark"&&b(e).appearance!=="force-auto"?(T(),R("div",gp,[D("div",_p,[D("p",vp,ie(b(t).darkModeSwitchLabel||"Appearance"),1),D("div",yp,[j(Ai)])])])):B("",!0),b(t).socialLinks?(T(),R("div",Ep,[D("div",Tp,[j(Si,{class:"social-links-list",links:b(t).socialLinks},null,8,["links"])])])):B("",!0)]),_:1})):B("",!0)}}),wp=z(Ip,[["__scopeId","data-v-f953d92f"]]),Ap=["aria-expanded"],bp=U({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(n){return(e,t)=>(T(),R("button",{type:"button",class:ce(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:t[0]||(t[0]=r=>e.$emit("click"))},t[1]||(t[1]=[D("span",{class:"container"},[D("span",{class:"top"}),D("span",{class:"middle"}),D("span",{class:"bottom"})],-1)]),10,Ap))}}),Pp=z(bp,[["__scopeId","data-v-6bee1efd"]]),Sp=["innerHTML"],Vp=U({__name:"VPNavBarMenuLink",props:{item:{}},setup(n){const{page:e}=te();return(t,r)=>(T(),H(We,{class:ce({VPNavBarMenuLink:!0,active:b(Lt)(b(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,tabindex:"0"},{default:N(()=>[D("span",{innerHTML:t.item.text},null,8,Sp)]),_:1},8,["class","href","target","rel","no-icon"]))}}),Rp=z(Vp,[["__scopeId","data-v-815115f5"]]),kp=U({__name:"VPNavBarMenuGroup",props:{item:{}},setup(n){const e=n,{page:t}=te(),r=o=>"component"in o?!1:"link"in o?Lt(t.value.relativePath,o.link,!!e.item.activeMatch):o.items.some(r),s=W(()=>r(e.item));return(o,a)=>(T(),H(Pi,{class:ce({VPNavBarMenuGroup:!0,active:b(Lt)(b(t).relativePath,o.item.activeMatch,!!o.item.activeMatch)||s.value}),button:o.item.text,items:o.item.items},null,8,["class","button","items"]))}}),Cp={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},Dp=U({__name:"VPNavBarMenu",setup(n){const{theme:e}=te();return(t,r)=>b(e).nav?(T(),R("nav",Cp,[r[0]||(r[0]=D("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(T(!0),R(ae,null,Se(b(e).nav,s=>(T(),R(ae,{key:JSON.stringify(s)},["link"in s?(T(),H(Rp,{key:0,item:s},null,8,["item"])):"component"in s?(T(),H(Ke(s.component),pt({key:1,ref_for:!0},s.props),null,16)):(T(),H(kp,{key:2,item:s},null,8,["item"]))],64))),128))])):B("",!0)}}),Np=z(Dp,[["__scopeId","data-v-020be4db"]]);function Lp(n){const{localeIndex:e,theme:t}=te();function r(s){var M,x,L;const o=s.split("."),a=(M=t.value.search)==null?void 0:M.options,u=a&&typeof a=="object",h=u&&((L=(x=a.locales)==null?void 0:x[e.value])==null?void 0:L.translations)||null,d=u&&a.translations||null;let p=h,v=d,y=n;const V=o.pop();for(const J of o){let Q=null;const Z=y==null?void 0:y[J];Z&&(Q=y=Z);const fe=v==null?void 0:v[J];fe&&(Q=v=fe);const Be=p==null?void 0:p[J];Be&&(Q=p=Be),Z||(y=Q),fe||(v=Q),Be||(p=Q)}return(p==null?void 0:p[V])??(v==null?void 0:v[V])??(y==null?void 0:y[V])??""}return r}const Mp=["aria-label"],Op={class:"DocSearch-Button-Container"},$p={class:"DocSearch-Button-Placeholder"},fa=U({__name:"VPNavBarSearchButton",setup(n){const t=Lp({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(r,s)=>(T(),R("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":b(t)("button.buttonAriaLabel")},[D("span",Op,[s[0]||(s[0]=D("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),D("span",$p,ie(b(t)("button.buttonText")),1)]),s[1]||(s[1]=D("span",{class:"DocSearch-Button-Keys"},[D("kbd",{class:"DocSearch-Button-Key"}),D("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,Mp))}}),xp={class:"VPNavBarSearch"},Fp={id:"local-search"},Bp={key:1,id:"docsearch"},Up=U({__name:"VPNavBarSearch",setup(n){const e=()=>null,t=()=>null,{theme:r}=te(),s=le(!1),o=le(!1);at(()=>{});function a(){s.value||(s.value=!0,setTimeout(u,16))}function u(){const p=new Event("keydown");p.key="k",p.metaKey=!0,window.dispatchEvent(p),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||u()},16)}const h=le(!1),d="";return(p,v)=>{var y;return T(),R("div",xp,[b(d)==="local"?(T(),R(ae,{key:0},[h.value?(T(),H(b(e),{key:0,onClose:v[0]||(v[0]=V=>h.value=!1)})):B("",!0),D("div",Fp,[j(fa,{onClick:v[1]||(v[1]=V=>h.value=!0)})])],64)):b(d)==="algolia"?(T(),R(ae,{key:1},[s.value?(T(),H(b(t),{key:0,algolia:((y=b(r).search)==null?void 0:y.options)??b(r).algolia,onVnodeBeforeMount:v[2]||(v[2]=V=>o.value=!0)},null,8,["algolia"])):B("",!0),o.value?B("",!0):(T(),R("div",Bp,[j(fa,{onClick:a})]))],64)):B("",!0)])}}}),jp=U({__name:"VPNavBarSocialLinks",setup(n){const{theme:e}=te();return(t,r)=>b(e).socialLinks?(T(),H(Si,{key:0,class:"VPNavBarSocialLinks",links:b(e).socialLinks},null,8,["links"])):B("",!0)}}),Hp=z(jp,[["__scopeId","data-v-ef6192dc"]]),qp=["href","rel","target"],zp=["innerHTML"],Gp={key:2},Kp=U({__name:"VPNavBarTitle",setup(n){const{site:e,theme:t}=te(),{hasSidebar:r}=lt(),{currentLang:s}=Wn(),o=W(()=>{var h;return typeof t.value.logoLink=="string"?t.value.logoLink:(h=t.value.logoLink)==null?void 0:h.link}),a=W(()=>{var h;return typeof t.value.logoLink=="string"||(h=t.value.logoLink)==null?void 0:h.rel}),u=W(()=>{var h;return typeof t.value.logoLink=="string"||(h=t.value.logoLink)==null?void 0:h.target});return(h,d)=>(T(),R("div",{class:ce(["VPNavBarTitle",{"has-sidebar":b(r)}])},[D("a",{class:"title",href:o.value??b(wi)(b(s).link),rel:a.value,target:u.value},[k(h.$slots,"nav-bar-title-before",{},void 0,!0),b(t).logo?(T(),H(Rr,{key:0,class:"logo",image:b(t).logo},null,8,["image"])):B("",!0),b(t).siteTitle?(T(),R("span",{key:1,innerHTML:b(t).siteTitle},null,8,zp)):b(t).siteTitle===void 0?(T(),R("span",Gp,ie(b(e).title),1)):B("",!0),k(h.$slots,"nav-bar-title-after",{},void 0,!0)],8,qp)],2))}}),Wp=z(Kp,[["__scopeId","data-v-d4488dd0"]]),Qp={class:"items"},Xp={class:"title"},Yp=U({__name:"VPNavBarTranslations",setup(n){const{theme:e}=te(),{localeLinks:t,currentLang:r}=Wn({correspondingLink:!0});return(s,o)=>b(t).length&&b(r).label?(T(),H(Pi,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:b(e).langMenuLabel||"Change language"},{default:N(()=>[D("div",Qp,[D("p",Xp,ie(b(r).label),1),(T(!0),R(ae,null,Se(b(t),a=>(T(),H(Wr,{key:a.link,item:a},null,8,["item"]))),128))])]),_:1},8,["label"])):B("",!0)}}),Jp=z(Yp,[["__scopeId","data-v-acee064b"]]),Zp={class:"wrapper"},em={class:"container"},tm={class:"title"},nm={class:"content"},rm={class:"content-body"},sm=U({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(n){const e=n,{y:t}=Vl(),{isHome:r,hasSidebar:s}=lt(),o=le({});return Ti(()=>{o.value={"has-sidebar":s.value,home:r.value,top:t.value===0,"screen-open":e.isScreenOpen}}),(a,u)=>(T(),R("div",{class:ce(["VPNavBar",o.value])},[D("div",Zp,[D("div",em,[D("div",tm,[j(Wp,null,{"nav-bar-title-before":N(()=>[k(a.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":N(()=>[k(a.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),D("div",nm,[D("div",rm,[k(a.$slots,"nav-bar-content-before",{},void 0,!0),j(Up,{class:"search"}),j(Np,{class:"menu"}),j(Jp,{class:"translations"}),j(jf,{class:"appearance"}),j(Hp,{class:"social-links"}),j(wp,{class:"extra"}),k(a.$slots,"nav-bar-content-after",{},void 0,!0),j(Pp,{class:"hamburger",active:a.isScreenOpen,onClick:u[0]||(u[0]=h=>a.$emit("toggle-screen"))},null,8,["active"])])])])]),u[1]||(u[1]=D("div",{class:"divider"},[D("div",{class:"divider-line"})],-1))],2))}}),im=z(sm,[["__scopeId","data-v-cb5e22fa"]]),om={key:0,class:"VPNavScreenAppearance"},am={class:"text"},lm=U({__name:"VPNavScreenAppearance",setup(n){const{site:e,theme:t}=te();return(r,s)=>b(e).appearance&&b(e).appearance!=="force-dark"&&b(e).appearance!=="force-auto"?(T(),R("div",om,[D("p",am,ie(b(t).darkModeSwitchLabel||"Appearance"),1),j(Ai)])):B("",!0)}}),um=z(lm,[["__scopeId","data-v-a3e2920d"]]),cm=["innerHTML"],hm=U({__name:"VPNavScreenMenuLink",props:{item:{}},setup(n){const e=Kr("close-screen");return(t,r)=>(T(),H(We,{class:"VPNavScreenMenuLink",href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,onClick:b(e)},{default:N(()=>[D("span",{innerHTML:t.item.text},null,8,cm)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),dm=z(hm,[["__scopeId","data-v-fa963d97"]]),fm=["innerHTML"],pm=U({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(n){const e=Kr("close-screen");return(t,r)=>(T(),H(We,{class:"VPNavScreenMenuGroupLink",href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,onClick:b(e)},{default:N(()=>[D("span",{innerHTML:t.item.text},null,8,fm)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Ol=z(pm,[["__scopeId","data-v-e04f3e85"]]),mm={class:"VPNavScreenMenuGroupSection"},gm={key:0,class:"title"},_m=U({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(n){return(e,t)=>(T(),R("div",mm,[e.text?(T(),R("p",gm,ie(e.text),1)):B("",!0),(T(!0),R(ae,null,Se(e.items,r=>(T(),H(Ol,{key:r.text,item:r},null,8,["item"]))),128))]))}}),vm=z(_m,[["__scopeId","data-v-7dfe209c"]]),ym=["aria-controls","aria-expanded"],Em=["innerHTML"],Tm=["id"],Im={key:0,class:"item"},wm={key:1,class:"item"},Am={key:2,class:"group"},bm=U({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(n){const e=n,t=le(!1),r=W(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function s(){t.value=!t.value}return(o,a)=>(T(),R("div",{class:ce(["VPNavScreenMenuGroup",{open:t.value}])},[D("button",{class:"button","aria-controls":r.value,"aria-expanded":t.value,onClick:s},[D("span",{class:"button-text",innerHTML:o.text},null,8,Em),a[0]||(a[0]=D("span",{class:"vpi-plus button-icon"},null,-1))],8,ym),D("div",{id:r.value,class:"items"},[(T(!0),R(ae,null,Se(o.items,u=>(T(),R(ae,{key:JSON.stringify(u)},["link"in u?(T(),R("div",Im,[j(Ol,{item:u},null,8,["item"])])):"component"in u?(T(),R("div",wm,[(T(),H(Ke(u.component),pt({ref_for:!0},u.props,{"screen-menu":""}),null,16))])):(T(),R("div",Am,[j(vm,{text:u.text,items:u.items},null,8,["text","items"])]))],64))),128))],8,Tm)],2))}}),Pm=z(bm,[["__scopeId","data-v-d3547da8"]]),Sm={key:0,class:"VPNavScreenMenu"},Vm=U({__name:"VPNavScreenMenu",setup(n){const{theme:e}=te();return(t,r)=>b(e).nav?(T(),R("nav",Sm,[(T(!0),R(ae,null,Se(b(e).nav,s=>(T(),R(ae,{key:JSON.stringify(s)},["link"in s?(T(),H(dm,{key:0,item:s},null,8,["item"])):"component"in s?(T(),H(Ke(s.component),pt({key:1,ref_for:!0},s.props,{"screen-menu":""}),null,16)):(T(),H(Pm,{key:2,text:s.text||"",items:s.items},null,8,["text","items"]))],64))),128))])):B("",!0)}}),Rm=U({__name:"VPNavScreenSocialLinks",setup(n){const{theme:e}=te();return(t,r)=>b(e).socialLinks?(T(),H(Si,{key:0,class:"VPNavScreenSocialLinks",links:b(e).socialLinks},null,8,["links"])):B("",!0)}}),km={class:"list"},Cm=U({__name:"VPNavScreenTranslations",setup(n){const{localeLinks:e,currentLang:t}=Wn({correspondingLink:!0}),r=le(!1);function s(){r.value=!r.value}return(o,a)=>b(e).length&&b(t).label?(T(),R("div",{key:0,class:ce(["VPNavScreenTranslations",{open:r.value}])},[D("button",{class:"title",onClick:s},[a[0]||(a[0]=D("span",{class:"vpi-languages icon lang"},null,-1)),ze(" "+ie(b(t).label)+" ",1),a[1]||(a[1]=D("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),D("ul",km,[(T(!0),R(ae,null,Se(b(e),u=>(T(),R("li",{key:u.link,class:"item"},[j(We,{class:"link",href:u.link},{default:N(()=>[ze(ie(u.text),1)]),_:2},1032,["href"])]))),128))])],2)):B("",!0)}}),Dm=z(Cm,[["__scopeId","data-v-516e4bc3"]]),Nm={class:"container"},Lm=U({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(n){const e=le(null),t=Rl(Kn?document.body:null);return(r,s)=>(T(),H(vi,{name:"fade",onEnter:s[0]||(s[0]=o=>t.value=!0),onAfterLeave:s[1]||(s[1]=o=>t.value=!1)},{default:N(()=>[r.open?(T(),R("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e,id:"VPNavScreen"},[D("div",Nm,[k(r.$slots,"nav-screen-content-before",{},void 0,!0),j(Vm,{class:"menu"}),j(Dm,{class:"translations"}),j(um,{class:"appearance"}),j(Rm,{class:"social-links"}),k(r.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):B("",!0)]),_:3}))}}),Mm=z(Lm,[["__scopeId","data-v-2dd6d0c7"]]),Om={key:0,class:"VPNav"},$m=U({__name:"VPNav",setup(n){const{isScreenOpen:e,closeScreen:t,toggleScreen:r}=Df(),{frontmatter:s}=te(),o=W(()=>s.value.navbar!==!1);return kl("close-screen",t),zr(()=>{Kn&&document.documentElement.classList.toggle("hide-nav",!o.value)}),(a,u)=>o.value?(T(),R("header",Om,[j(im,{"is-screen-open":b(e),onToggleScreen:b(r)},{"nav-bar-title-before":N(()=>[k(a.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":N(()=>[k(a.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":N(()=>[k(a.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":N(()=>[k(a.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),j(Mm,{open:b(e)},{"nav-screen-content-before":N(()=>[k(a.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":N(()=>[k(a.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):B("",!0)}}),xm=z($m,[["__scopeId","data-v-7ad780c2"]]),Fm=["role","tabindex"],Bm={key:1,class:"items"},Um=U({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(n){const e=n,{collapsed:t,collapsible:r,isLink:s,isActiveLink:o,hasActiveLink:a,hasChildren:u,toggle:h}=jh(W(()=>e.item)),d=W(()=>u.value?"section":"div"),p=W(()=>s.value?"a":"div"),v=W(()=>u.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),y=W(()=>s.value?void 0:"button"),V=W(()=>[[`level-${e.depth}`],{collapsible:r.value},{collapsed:t.value},{"is-link":s.value},{"is-active":o.value},{"has-active":a.value}]);function M(L){"key"in L&&L.key!=="Enter"||!e.item.link&&h()}function x(){e.item.link&&h()}return(L,J)=>{const Q=bt("VPSidebarItem",!0);return T(),H(Ke(d.value),{class:ce(["VPSidebarItem",V.value])},{default:N(()=>[L.item.text?(T(),R("div",pt({key:0,class:"item",role:y.value},hh(L.item.items?{click:M,keydown:M}:{},!0),{tabindex:L.item.items&&0}),[J[1]||(J[1]=D("div",{class:"indicator"},null,-1)),L.item.link?(T(),H(We,{key:0,tag:p.value,class:"link",href:L.item.link,rel:L.item.rel,target:L.item.target},{default:N(()=>[(T(),H(Ke(v.value),{class:"text",innerHTML:L.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(T(),H(Ke(v.value),{key:1,class:"text",innerHTML:L.item.text},null,8,["innerHTML"])),L.item.collapsed!=null&&L.item.items&&L.item.items.length?(T(),R("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:x,onKeydown:dh(x,["enter"]),tabindex:"0"},J[0]||(J[0]=[D("span",{class:"vpi-chevron-right caret-icon"},null,-1)]),32)):B("",!0)],16,Fm)):B("",!0),L.item.items&&L.item.items.length?(T(),R("div",Bm,[L.depth<5?(T(!0),R(ae,{key:0},Se(L.item.items,Z=>(T(),H(Q,{key:Z.text,item:Z,depth:L.depth+1},null,8,["item","depth"]))),128)):B("",!0)])):B("",!0)]),_:1},8,["class"])}}}),jm=z(Um,[["__scopeId","data-v-6b36a2fd"]]),Hm=U({__name:"VPSidebarGroup",props:{items:{}},setup(n){const e=le(!0);let t=null;return at(()=>{t=setTimeout(()=>{t=null,e.value=!1},300)}),fh(()=>{t!=null&&(clearTimeout(t),t=null)}),(r,s)=>(T(!0),R(ae,null,Se(r.items,o=>(T(),R("div",{key:o.text,class:ce(["group",{"no-transition":e.value}])},[j(jm,{item:o,depth:0},null,8,["item"])],2))),128))}}),qm=z(Hm,[["__scopeId","data-v-a84b7c21"]]),zm={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},Gm=U({__name:"VPSidebar",props:{open:{type:Boolean}},setup(n){const{sidebarGroups:e,hasSidebar:t}=lt(),r=n,s=le(null),o=Rl(Kn?document.body:null);rt([r,s],()=>{var u;r.open?(o.value=!0,(u=s.value)==null||u.focus()):o.value=!1},{immediate:!0,flush:"post"});const a=le(0);return rt(e,()=>{a.value+=1},{deep:!0}),(u,h)=>b(t)?(T(),R("aside",{key:0,class:ce(["VPSidebar",{open:u.open}]),ref_key:"navEl",ref:s,onClick:h[0]||(h[0]=ph(()=>{},["stop"]))},[h[2]||(h[2]=D("div",{class:"curtain"},null,-1)),D("nav",zm,[h[1]||(h[1]=D("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),k(u.$slots,"sidebar-nav-before",{},void 0,!0),(T(),H(qm,{items:b(e),key:a.value},null,8,["items"])),k(u.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):B("",!0)}}),Km=z(Gm,[["__scopeId","data-v-606f96d3"]]),Wm=U({__name:"VPSkipLink",setup(n){const{theme:e}=te(),t=Gr(),r=le();rt(()=>t.path,()=>r.value.focus());function s({target:o}){const a=document.getElementById(decodeURIComponent(o.hash).slice(1));if(a){const u=()=>{a.removeAttribute("tabindex"),a.removeEventListener("blur",u)};a.setAttribute("tabindex","-1"),a.addEventListener("blur",u),a.focus(),window.scrollTo(0,0)}}return(o,a)=>(T(),R(ae,null,[D("span",{ref_key:"backToTop",ref:r,tabindex:"-1"},null,512),D("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:s},ie(b(e).skipToContentLabel||"Skip to content"),1)],64))}}),Qm=z(Wm,[["__scopeId","data-v-fcbfc0e0"]]),Xm=U({__name:"Layout",setup(n){const{isOpen:e,open:t,close:r}=Uh();Hh({closeSidebar:r});const{frontmatter:s}=te(),o=mh(),a=W(()=>!!o["home-hero-image"]);return kl("hero-image-slot-exists",a),(u,h)=>{const d=bt("Content");return b(s).layout!==!1?(T(),R("div",{key:0,class:ce(["Layout",b(s).pageClass])},[k(u.$slots,"layout-top",{},void 0,!0),j(Qm),j(yh,{class:"backdrop",show:b(e),onClick:b(r)},null,8,["show","onClick"]),j(xm,null,{"nav-bar-title-before":N(()=>[k(u.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":N(()=>[k(u.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":N(()=>[k(u.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":N(()=>[k(u.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":N(()=>[k(u.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":N(()=>[k(u.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),j(Cf,{open:b(e),onOpenMenu:b(t)},null,8,["open","onOpenMenu"]),j(Km,{open:b(e)},{"sidebar-nav-before":N(()=>[k(u.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":N(()=>[k(u.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),j(gf,null,{"page-top":N(()=>[k(u.$slots,"page-top",{},void 0,!0)]),"page-bottom":N(()=>[k(u.$slots,"page-bottom",{},void 0,!0)]),"not-found":N(()=>[k(u.$slots,"not-found",{},void 0,!0)]),"home-hero-before":N(()=>[k(u.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":N(()=>[k(u.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":N(()=>[k(u.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":N(()=>[k(u.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":N(()=>[k(u.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":N(()=>[k(u.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":N(()=>[k(u.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":N(()=>[k(u.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":N(()=>[k(u.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":N(()=>[k(u.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":N(()=>[k(u.$slots,"doc-before",{},void 0,!0)]),"doc-after":N(()=>[k(u.$slots,"doc-after",{},void 0,!0)]),"doc-top":N(()=>[k(u.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":N(()=>[k(u.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":N(()=>[k(u.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":N(()=>[k(u.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":N(()=>[k(u.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":N(()=>[k(u.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":N(()=>[k(u.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":N(()=>[k(u.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),j(Tf),k(u.$slots,"layout-bottom",{},void 0,!0)],2)):(T(),H(d,{key:1}))}}}),Ym=z(Xm,[["__scopeId","data-v-4539713c"]]),Jm={Layout:Ym,enhanceApp:({app:n})=>{n.component("Badge",gh)}},Zm="/icon_fire-outline.svg",eg=()=>{};var pa={};/**
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
 */const $l=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},tg=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[t++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[t++],a=n[t++],u=n[t++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},xl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,u=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,p=o>>2,v=(o&3)<<4|u>>4;let y=(u&15)<<2|d>>6,V=d&63;h||(V=64,a||(y=64)),r.push(t[p],t[v],t[y],t[V])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray($l(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):tg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=t[n.charAt(s++)],u=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const v=s<n.length?t[n.charAt(s)]:64;if(++s,o==null||u==null||d==null||v==null)throw new ng;const y=o<<2|u>>4;if(r.push(y),d!==64){const V=u<<4&240|d>>2;if(r.push(V),v!==64){const M=d<<6&192|v;r.push(M)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ng extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rg=function(n){const e=$l(n);return xl.encodeByteArray(e,!0)},kr=function(n){return rg(n).replace(/\./g,"")},sg=function(n){try{return xl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ig(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const og=()=>ig().__FIREBASE_DEFAULTS__,ag=()=>{if(typeof process>"u"||typeof pa>"u")return;const n=pa.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},lg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&sg(n[1]);return e&&JSON.parse(e)},Vi=()=>{try{return eg()||og()||ag()||lg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ug=n=>{var e,t;return(t=(e=Vi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},cg=n=>{const e=ug(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Fl=()=>{var n;return(n=Vi())===null||n===void 0?void 0:n.config};/**
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
 */class hg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Ri(n){return n.endsWith(".cloudworkstations.dev")}async function dg(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function fg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[kr(JSON.stringify(t)),kr(JSON.stringify(a)),""].join(".")}const Dn={};function pg(){const n={prod:[],emulator:[]};for(const e of Object.keys(Dn))Dn[e]?n.emulator.push(e):n.prod.push(e);return n}function mg(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let ma=!1;function gg(n,e){if(typeof window>"u"||typeof document>"u"||!Ri(window.location.host)||Dn[n]===e||Dn[n]||ma)return;Dn[n]=e;function t(y){return`__firebase__banner__${y}`}const r="__firebase__banner",o=pg().prod.length>0;function a(){const y=document.getElementById(r);y&&y.remove()}function u(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function h(y,V){y.setAttribute("width","24"),y.setAttribute("id",V),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function d(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{ma=!0,a()},y}function p(y,V){y.setAttribute("id",V),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function v(){const y=mg(r),V=t("text"),M=document.getElementById(V)||document.createElement("span"),x=t("learnmore"),L=document.getElementById(x)||document.createElement("a"),J=t("preprendIcon"),Q=document.getElementById(J)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const Z=y.element;u(Z),p(L,x);const fe=d();h(Q,J),Z.append(Q,M,L,fe),document.body.appendChild(Z)}o?(M.innerText="Preview backend disconnected.",Q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,M.innerText="Preview backend running in this workspace."),M.setAttribute("id",V)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",v):v()}/**
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
 */function _g(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vg(){var n;const e=(n=Vi())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yg(){return!vg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Eg(){try{return typeof indexedDB=="object"}catch{return!1}}function Tg(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
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
 */const Ig="FirebaseError";class on extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Ig,Object.setPrototypeOf(this,on.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bl.prototype.create)}}class Bl{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?wg(o,r):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new on(s,u,r)}}function wg(n,e){return n.replace(Ag,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Ag=/\{\$([^}]+)}/g;function Cr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const o=n[s],a=e[s];if(ga(o)&&ga(a)){if(!Cr(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function ga(n){return n!==null&&typeof n=="object"}/**
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
 */function Mt(n){return n&&n._delegate?n._delegate:n}class $n{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class bg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new hg;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Sg(e))try{this.getOrInitializeService({instanceIdentifier:Dt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=Dt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dt){return this.instances.has(e)}getOptions(e=Dt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&e(a,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Pg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Dt){return this.component?this.component.multipleInstances?e:Dt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Pg(n){return n===Dt?void 0:n}function Sg(n){return n.instantiationMode==="EAGER"}/**
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
 */class Vg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new bg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(se||(se={}));const Rg={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},kg=se.INFO,Cg={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},Dg=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Cg[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ul{constructor(e){this.name=e,this._logLevel=kg,this._logHandler=Dg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const Ng=(n,e)=>e.some(t=>n instanceof t);let _a,va;function Lg(){return _a||(_a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Mg(){return va||(va=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jl=new WeakMap,Xs=new WeakMap,Hl=new WeakMap,$s=new WeakMap,ki=new WeakMap;function Og(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(mt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&jl.set(t,n)}).catch(()=>{}),ki.set(e,n),e}function $g(n){if(Xs.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Xs.set(n,e)}let Ys={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Xs.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Hl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return mt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function xg(n){Ys=n(Ys)}function Fg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(xs(this),e,...t);return Hl.set(r,e.sort?e.sort():[e]),mt(r)}:Mg().includes(n)?function(...e){return n.apply(xs(this),e),mt(jl.get(this))}:function(...e){return mt(n.apply(xs(this),e))}}function Bg(n){return typeof n=="function"?Fg(n):(n instanceof IDBTransaction&&$g(n),Ng(n,Lg())?new Proxy(n,Ys):n)}function mt(n){if(n instanceof IDBRequest)return Og(n);if($s.has(n))return $s.get(n);const e=Bg(n);return e!==n&&($s.set(n,e),ki.set(e,n)),e}const xs=n=>ki.get(n);function Ug(n,e,{blocked:t,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,e),u=mt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(mt(a.result),h.oldVersion,h.newVersion,mt(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const jg=["get","getKey","getAll","getAllKeys","count"],Hg=["put","add","delete","clear"],Fs=new Map;function ya(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Fs.get(e))return Fs.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Hg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||jg.includes(t)))return;const o=async function(a,...u){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[t](...u),s&&h.done]))[0]};return Fs.set(e,o),o}xg(n=>({...n,get:(e,t,r)=>ya(e,t)||n.get(e,t,r),has:(e,t)=>!!ya(e,t)||n.has(e,t)}));/**
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
 */class qg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(zg(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function zg(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Js="@firebase/app",Ea="0.13.1";/**
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
 */const st=new Ul("@firebase/app"),Gg="@firebase/app-compat",Kg="@firebase/analytics-compat",Wg="@firebase/analytics",Qg="@firebase/app-check-compat",Xg="@firebase/app-check",Yg="@firebase/auth",Jg="@firebase/auth-compat",Zg="@firebase/database",e_="@firebase/data-connect",t_="@firebase/database-compat",n_="@firebase/functions",r_="@firebase/functions-compat",s_="@firebase/installations",i_="@firebase/installations-compat",o_="@firebase/messaging",a_="@firebase/messaging-compat",l_="@firebase/performance",u_="@firebase/performance-compat",c_="@firebase/remote-config",h_="@firebase/remote-config-compat",d_="@firebase/storage",f_="@firebase/storage-compat",p_="@firebase/firestore",m_="@firebase/ai",g_="@firebase/firestore-compat",__="firebase",v_="11.9.0";/**
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
 */const Zs="[DEFAULT]",y_={[Js]:"fire-core",[Gg]:"fire-core-compat",[Wg]:"fire-analytics",[Kg]:"fire-analytics-compat",[Xg]:"fire-app-check",[Qg]:"fire-app-check-compat",[Yg]:"fire-auth",[Jg]:"fire-auth-compat",[Zg]:"fire-rtdb",[e_]:"fire-data-connect",[t_]:"fire-rtdb-compat",[n_]:"fire-fn",[r_]:"fire-fn-compat",[s_]:"fire-iid",[i_]:"fire-iid-compat",[o_]:"fire-fcm",[a_]:"fire-fcm-compat",[l_]:"fire-perf",[u_]:"fire-perf-compat",[c_]:"fire-rc",[h_]:"fire-rc-compat",[d_]:"fire-gcs",[f_]:"fire-gcs-compat",[p_]:"fire-fst",[g_]:"fire-fst-compat",[m_]:"fire-vertex","fire-js":"fire-js",[__]:"fire-js-all"};/**
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
 */const Dr=new Map,E_=new Map,ei=new Map;function Ta(n,e){try{n.container.addComponent(e)}catch(t){st.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Nr(n){const e=n.name;if(ei.has(e))return st.debug(`There were multiple attempts to register component ${e}.`),!1;ei.set(e,n);for(const t of Dr.values())Ta(t,n);for(const t of E_.values())Ta(t,n);return!0}function T_(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function I_(n){return n==null?!1:n.settings!==void 0}/**
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
 */const w_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gt=new Bl("app","Firebase",w_);/**
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
 */class A_{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gt.create("app-deleted",{appName:this._name})}}/**
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
 */const b_=v_;function ql(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Zs,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw gt.create("bad-app-name",{appName:String(s)});if(t||(t=Fl()),!t)throw gt.create("no-options");const o=Dr.get(s);if(o){if(Cr(t,o.options)&&Cr(r,o.config))return o;throw gt.create("duplicate-app",{appName:s})}const a=new Vg(s);for(const h of ei.values())a.addComponent(h);const u=new A_(t,r,a);return Dr.set(s,u),u}function P_(n=Zs){const e=Dr.get(n);if(!e&&n===Zs&&Fl())return ql();if(!e)throw gt.create("no-app",{appName:n});return e}function Xt(n,e,t){var r;let s=(r=y_[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const u=[`Unable to register library "${s}" with version "${e}":`];o&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),st.warn(u.join(" "));return}Nr(new $n(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const S_="firebase-heartbeat-database",V_=1,xn="firebase-heartbeat-store";let Bs=null;function zl(){return Bs||(Bs=Ug(S_,V_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(xn)}catch(t){console.warn(t)}}}}).catch(n=>{throw gt.create("idb-open",{originalErrorMessage:n.message})})),Bs}async function R_(n){try{const t=(await zl()).transaction(xn),r=await t.objectStore(xn).get(Gl(n));return await t.done,r}catch(e){if(e instanceof on)st.warn(e.message);else{const t=gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});st.warn(t.message)}}}async function Ia(n,e){try{const r=(await zl()).transaction(xn,"readwrite");await r.objectStore(xn).put(e,Gl(n)),await r.done}catch(t){if(t instanceof on)st.warn(t.message);else{const r=gt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});st.warn(r.message)}}}function Gl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const k_=1024,C_=30;class D_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new L_(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=wa();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>C_){const a=M_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){st.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=wa(),{heartbeatsToSend:r,unsentEntries:s}=N_(this._heartbeatsCache.heartbeats),o=kr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return st.warn(t),""}}}function wa(){return new Date().toISOString().substring(0,10)}function N_(n,e=k_){const t=[];let r=n.slice();for(const s of n){const o=t.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Aa(t)>e){o.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Aa(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class L_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Eg()?Tg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await R_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ia(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ia(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Aa(n){return kr(JSON.stringify({version:2,heartbeats:n})).length}function M_(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function O_(n){Nr(new $n("platform-logger",e=>new qg(e),"PRIVATE")),Nr(new $n("heartbeat",e=>new D_(e),"PRIVATE")),Xt(Js,Ea,n),Xt(Js,Ea,"esm2017"),Xt("fire-js","")}O_("");var ba=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _t,Kl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,m){function _(){}_.prototype=m.prototype,w.D=m.prototype,w.prototype=new _,w.prototype.constructor=w,w.C=function(E,I,P){for(var g=Array(arguments.length-2),et=2;et<arguments.length;et++)g[et-2]=arguments[et];return m.prototype[I].apply(E,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,m,_){_||(_=0);var E=Array(16);if(typeof m=="string")for(var I=0;16>I;++I)E[I]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(I=0;16>I;++I)E[I]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=w.g[0],_=w.g[1],I=w.g[2];var P=w.g[3],g=m+(P^_&(I^P))+E[0]+3614090360&4294967295;m=_+(g<<7&4294967295|g>>>25),g=P+(I^m&(_^I))+E[1]+3905402710&4294967295,P=m+(g<<12&4294967295|g>>>20),g=I+(_^P&(m^_))+E[2]+606105819&4294967295,I=P+(g<<17&4294967295|g>>>15),g=_+(m^I&(P^m))+E[3]+3250441966&4294967295,_=I+(g<<22&4294967295|g>>>10),g=m+(P^_&(I^P))+E[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=P+(I^m&(_^I))+E[5]+1200080426&4294967295,P=m+(g<<12&4294967295|g>>>20),g=I+(_^P&(m^_))+E[6]+2821735955&4294967295,I=P+(g<<17&4294967295|g>>>15),g=_+(m^I&(P^m))+E[7]+4249261313&4294967295,_=I+(g<<22&4294967295|g>>>10),g=m+(P^_&(I^P))+E[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=P+(I^m&(_^I))+E[9]+2336552879&4294967295,P=m+(g<<12&4294967295|g>>>20),g=I+(_^P&(m^_))+E[10]+4294925233&4294967295,I=P+(g<<17&4294967295|g>>>15),g=_+(m^I&(P^m))+E[11]+2304563134&4294967295,_=I+(g<<22&4294967295|g>>>10),g=m+(P^_&(I^P))+E[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=P+(I^m&(_^I))+E[13]+4254626195&4294967295,P=m+(g<<12&4294967295|g>>>20),g=I+(_^P&(m^_))+E[14]+2792965006&4294967295,I=P+(g<<17&4294967295|g>>>15),g=_+(m^I&(P^m))+E[15]+1236535329&4294967295,_=I+(g<<22&4294967295|g>>>10),g=m+(I^P&(_^I))+E[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=P+(_^I&(m^_))+E[6]+3225465664&4294967295,P=m+(g<<9&4294967295|g>>>23),g=I+(m^_&(P^m))+E[11]+643717713&4294967295,I=P+(g<<14&4294967295|g>>>18),g=_+(P^m&(I^P))+E[0]+3921069994&4294967295,_=I+(g<<20&4294967295|g>>>12),g=m+(I^P&(_^I))+E[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=P+(_^I&(m^_))+E[10]+38016083&4294967295,P=m+(g<<9&4294967295|g>>>23),g=I+(m^_&(P^m))+E[15]+3634488961&4294967295,I=P+(g<<14&4294967295|g>>>18),g=_+(P^m&(I^P))+E[4]+3889429448&4294967295,_=I+(g<<20&4294967295|g>>>12),g=m+(I^P&(_^I))+E[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=P+(_^I&(m^_))+E[14]+3275163606&4294967295,P=m+(g<<9&4294967295|g>>>23),g=I+(m^_&(P^m))+E[3]+4107603335&4294967295,I=P+(g<<14&4294967295|g>>>18),g=_+(P^m&(I^P))+E[8]+1163531501&4294967295,_=I+(g<<20&4294967295|g>>>12),g=m+(I^P&(_^I))+E[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=P+(_^I&(m^_))+E[2]+4243563512&4294967295,P=m+(g<<9&4294967295|g>>>23),g=I+(m^_&(P^m))+E[7]+1735328473&4294967295,I=P+(g<<14&4294967295|g>>>18),g=_+(P^m&(I^P))+E[12]+2368359562&4294967295,_=I+(g<<20&4294967295|g>>>12),g=m+(_^I^P)+E[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=P+(m^_^I)+E[8]+2272392833&4294967295,P=m+(g<<11&4294967295|g>>>21),g=I+(P^m^_)+E[11]+1839030562&4294967295,I=P+(g<<16&4294967295|g>>>16),g=_+(I^P^m)+E[14]+4259657740&4294967295,_=I+(g<<23&4294967295|g>>>9),g=m+(_^I^P)+E[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=P+(m^_^I)+E[4]+1272893353&4294967295,P=m+(g<<11&4294967295|g>>>21),g=I+(P^m^_)+E[7]+4139469664&4294967295,I=P+(g<<16&4294967295|g>>>16),g=_+(I^P^m)+E[10]+3200236656&4294967295,_=I+(g<<23&4294967295|g>>>9),g=m+(_^I^P)+E[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=P+(m^_^I)+E[0]+3936430074&4294967295,P=m+(g<<11&4294967295|g>>>21),g=I+(P^m^_)+E[3]+3572445317&4294967295,I=P+(g<<16&4294967295|g>>>16),g=_+(I^P^m)+E[6]+76029189&4294967295,_=I+(g<<23&4294967295|g>>>9),g=m+(_^I^P)+E[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=P+(m^_^I)+E[12]+3873151461&4294967295,P=m+(g<<11&4294967295|g>>>21),g=I+(P^m^_)+E[15]+530742520&4294967295,I=P+(g<<16&4294967295|g>>>16),g=_+(I^P^m)+E[2]+3299628645&4294967295,_=I+(g<<23&4294967295|g>>>9),g=m+(I^(_|~P))+E[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=P+(_^(m|~I))+E[7]+1126891415&4294967295,P=m+(g<<10&4294967295|g>>>22),g=I+(m^(P|~_))+E[14]+2878612391&4294967295,I=P+(g<<15&4294967295|g>>>17),g=_+(P^(I|~m))+E[5]+4237533241&4294967295,_=I+(g<<21&4294967295|g>>>11),g=m+(I^(_|~P))+E[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=P+(_^(m|~I))+E[3]+2399980690&4294967295,P=m+(g<<10&4294967295|g>>>22),g=I+(m^(P|~_))+E[10]+4293915773&4294967295,I=P+(g<<15&4294967295|g>>>17),g=_+(P^(I|~m))+E[1]+2240044497&4294967295,_=I+(g<<21&4294967295|g>>>11),g=m+(I^(_|~P))+E[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=P+(_^(m|~I))+E[15]+4264355552&4294967295,P=m+(g<<10&4294967295|g>>>22),g=I+(m^(P|~_))+E[6]+2734768916&4294967295,I=P+(g<<15&4294967295|g>>>17),g=_+(P^(I|~m))+E[13]+1309151649&4294967295,_=I+(g<<21&4294967295|g>>>11),g=m+(I^(_|~P))+E[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=P+(_^(m|~I))+E[11]+3174756917&4294967295,P=m+(g<<10&4294967295|g>>>22),g=I+(m^(P|~_))+E[2]+718787259&4294967295,I=P+(g<<15&4294967295|g>>>17),g=_+(P^(I|~m))+E[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(I+(g<<21&4294967295|g>>>11))&4294967295,w.g[2]=w.g[2]+I&4294967295,w.g[3]=w.g[3]+P&4294967295}r.prototype.u=function(w,m){m===void 0&&(m=w.length);for(var _=m-this.blockSize,E=this.B,I=this.h,P=0;P<m;){if(I==0)for(;P<=_;)s(this,w,P),P+=this.blockSize;if(typeof w=="string"){for(;P<m;)if(E[I++]=w.charCodeAt(P++),I==this.blockSize){s(this,E),I=0;break}}else for(;P<m;)if(E[I++]=w[P++],I==this.blockSize){s(this,E),I=0;break}}this.h=I,this.o+=m},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;var _=8*this.o;for(m=w.length-8;m<w.length;++m)w[m]=_&255,_/=256;for(this.u(w),w=Array(16),m=_=0;4>m;++m)for(var E=0;32>E;E+=8)w[_++]=this.g[m]>>>E&255;return w};function o(w,m){var _=u;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=m(w)}function a(w,m){this.h=m;for(var _=[],E=!0,I=w.length-1;0<=I;I--){var P=w[I]|0;E&&P==m||(_[I]=P,E=!1)}this.g=_}var u={};function h(w){return-128<=w&&128>w?o(w,function(m){return new a([m|0],0>m?-1:0)}):new a([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return v;if(0>w)return L(d(-w));for(var m=[],_=1,E=0;w>=_;E++)m[E]=w/_|0,_*=4294967296;return new a(m,0)}function p(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return L(p(w.substring(1),m));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),E=v,I=0;I<w.length;I+=8){var P=Math.min(8,w.length-I),g=parseInt(w.substring(I,I+P),m);8>P?(P=d(Math.pow(m,P)),E=E.j(P).add(d(g))):(E=E.j(_),E=E.add(d(g)))}return E}var v=h(0),y=h(1),V=h(16777216);n=a.prototype,n.m=function(){if(x(this))return-L(this).m();for(var w=0,m=1,_=0;_<this.g.length;_++){var E=this.i(_);w+=(0<=E?E:4294967296+E)*m,m*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(M(this))return"0";if(x(this))return"-"+L(this).toString(w);for(var m=d(Math.pow(w,6)),_=this,E="";;){var I=fe(_,m).g;_=J(_,I.j(m));var P=((0<_.g.length?_.g[0]:_.h)>>>0).toString(w);if(_=I,M(_))return P+E;for(;6>P.length;)P="0"+P;E=P+E}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function M(w){if(w.h!=0)return!1;for(var m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function x(w){return w.h==-1}n.l=function(w){return w=J(this,w),x(w)?-1:M(w)?0:1};function L(w){for(var m=w.g.length,_=[],E=0;E<m;E++)_[E]=~w.g[E];return new a(_,~w.h).add(y)}n.abs=function(){return x(this)?L(this):this},n.add=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],E=0,I=0;I<=m;I++){var P=E+(this.i(I)&65535)+(w.i(I)&65535),g=(P>>>16)+(this.i(I)>>>16)+(w.i(I)>>>16);E=g>>>16,P&=65535,g&=65535,_[I]=g<<16|P}return new a(_,_[_.length-1]&-2147483648?-1:0)};function J(w,m){return w.add(L(m))}n.j=function(w){if(M(this)||M(w))return v;if(x(this))return x(w)?L(this).j(L(w)):L(L(this).j(w));if(x(w))return L(this.j(L(w)));if(0>this.l(V)&&0>w.l(V))return d(this.m()*w.m());for(var m=this.g.length+w.g.length,_=[],E=0;E<2*m;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(var I=0;I<w.g.length;I++){var P=this.i(E)>>>16,g=this.i(E)&65535,et=w.i(I)>>>16,hn=w.i(I)&65535;_[2*E+2*I]+=g*hn,Q(_,2*E+2*I),_[2*E+2*I+1]+=P*hn,Q(_,2*E+2*I+1),_[2*E+2*I+1]+=g*et,Q(_,2*E+2*I+1),_[2*E+2*I+2]+=P*et,Q(_,2*E+2*I+2)}for(E=0;E<m;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=m;E<2*m;E++)_[E]=0;return new a(_,0)};function Q(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function Z(w,m){this.g=w,this.h=m}function fe(w,m){if(M(m))throw Error("division by zero");if(M(w))return new Z(v,v);if(x(w))return m=fe(L(w),m),new Z(L(m.g),L(m.h));if(x(m))return m=fe(w,L(m)),new Z(L(m.g),m.h);if(30<w.g.length){if(x(w)||x(m))throw Error("slowDivide_ only works with positive integers.");for(var _=y,E=m;0>=E.l(w);)_=Be(_),E=Be(E);var I=we(_,1),P=we(E,1);for(E=we(E,2),_=we(_,2);!M(E);){var g=P.add(E);0>=g.l(w)&&(I=I.add(_),P=g),E=we(E,1),_=we(_,1)}return m=J(w,I.j(m)),new Z(I,m)}for(I=v;0<=w.l(m);){for(_=Math.max(1,Math.floor(w.m()/m.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),P=d(_),g=P.j(m);x(g)||0<g.l(w);)_-=E,P=d(_),g=P.j(m);M(P)&&(P=y),I=I.add(P),w=J(w,g)}return new Z(I,w)}n.A=function(w){return fe(this,w).h},n.and=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],E=0;E<m;E++)_[E]=this.i(E)&w.i(E);return new a(_,this.h&w.h)},n.or=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],E=0;E<m;E++)_[E]=this.i(E)|w.i(E);return new a(_,this.h|w.h)},n.xor=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],E=0;E<m;E++)_[E]=this.i(E)^w.i(E);return new a(_,this.h^w.h)};function Be(w){for(var m=w.g.length+1,_=[],E=0;E<m;E++)_[E]=w.i(E)<<1|w.i(E-1)>>>31;return new a(_,w.h)}function we(w,m){var _=m>>5;m%=32;for(var E=w.g.length-_,I=[],P=0;P<E;P++)I[P]=0<m?w.i(P+_)>>>m|w.i(P+_+1)<<32-m:w.i(P+_);return new a(I,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Kl=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,_t=a}).apply(typeof ba<"u"?ba:typeof self<"u"?self:typeof window<"u"?window:{});var vr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wl,Vn,Ql,Ar,ti,Xl,Yl,Jl;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,l,c){return i==Array.prototype||i==Object.prototype||(i[l]=c.value),i};function t(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof vr=="object"&&vr];for(var l=0;l<i.length;++l){var c=i[l];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=t(this);function s(i,l){if(l)e:{var c=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var A=i[f];if(!(A in c))break e;c=c[A]}i=i[i.length-1],f=c[i],l=l(f),l!=f&&l!=null&&e(c,i,{configurable:!0,writable:!0,value:l})}}function o(i,l){i instanceof String&&(i+="");var c=0,f=!1,A={next:function(){if(!f&&c<i.length){var S=c++;return{value:l(S,i[S]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(i){return i||function(){return o(this,function(l,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function h(i){var l=typeof i;return l=l!="object"?l:i?Array.isArray(i)?"array":l:"null",l=="array"||l=="object"&&typeof i.length=="number"}function d(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function p(i,l,c){return i.call.apply(i.bind,arguments)}function v(i,l,c){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),i.apply(l,A)}}return function(){return i.apply(l,arguments)}}function y(i,l,c){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:v,y.apply(null,arguments)}function V(i,l){var c=Array.prototype.slice.call(arguments,1);return function(){var f=c.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function M(i,l){function c(){}c.prototype=l.prototype,i.aa=l.prototype,i.prototype=new c,i.prototype.constructor=i,i.Qb=function(f,A,S){for(var $=Array(arguments.length-2),he=2;he<arguments.length;he++)$[he-2]=arguments[he];return l.prototype[A].apply(f,$)}}function x(i){const l=i.length;if(0<l){const c=Array(l);for(let f=0;f<l;f++)c[f]=i[f];return c}return[]}function L(i,l){for(let c=1;c<arguments.length;c++){const f=arguments[c];if(h(f)){const A=i.length||0,S=f.length||0;i.length=A+S;for(let $=0;$<S;$++)i[A+$]=f[$]}else i.push(f)}}class J{constructor(l,c){this.i=l,this.j=c,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function Q(i){return/^[\s\xa0]*$/.test(i)}function Z(){var i=u.navigator;return i&&(i=i.userAgent)?i:""}function fe(i){return fe[" "](i),i}fe[" "]=function(){};var Be=Z().indexOf("Gecko")!=-1&&!(Z().toLowerCase().indexOf("webkit")!=-1&&Z().indexOf("Edge")==-1)&&!(Z().indexOf("Trident")!=-1||Z().indexOf("MSIE")!=-1)&&Z().indexOf("Edge")==-1;function we(i,l,c){for(const f in i)l.call(c,i[f],f,i)}function w(i,l){for(const c in i)l.call(void 0,i[c],c,i)}function m(i){const l={};for(const c in i)l[c]=i[c];return l}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(i,l){let c,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(c in f)i[c]=f[c];for(let S=0;S<_.length;S++)c=_[S],Object.prototype.hasOwnProperty.call(f,c)&&(i[c]=f[c])}}function I(i){var l=1;i=i.split(":");const c=[];for(;0<l&&i.length;)c.push(i.shift()),l--;return i.length&&c.push(i.join(":")),c}function P(i){u.setTimeout(()=>{throw i},0)}function g(){var i=ds;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class et{constructor(){this.h=this.g=null}add(l,c){const f=hn.get();f.set(l,c),this.h?this.h.next=f:this.g=f,this.h=f}}var hn=new J(()=>new wc,i=>i.reset());class wc{constructor(){this.next=this.g=this.h=null}set(l,c){this.h=l,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let dn,fn=!1,ds=new et,co=()=>{const i=u.Promise.resolve(void 0);dn=()=>{i.then(Ac)}};var Ac=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(c){P(c)}var l=hn;l.j(i),100>l.h&&(l.h++,i.next=l.g,l.g=i)}fn=!1};function ut(){this.s=this.s,this.C=this.C}ut.prototype.s=!1,ut.prototype.ma=function(){this.s||(this.s=!0,this.N())},ut.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Re(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}Re.prototype.h=function(){this.defaultPrevented=!0};var bc=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const c=()=>{};u.addEventListener("test",c,l),u.removeEventListener("test",c,l)}catch{}return i}();function pn(i,l){if(Re.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var c=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget){if(Be){e:{try{fe(l.nodeName);var A=!0;break e}catch{}A=!1}A||(l=null)}}else c=="mouseover"?l=i.fromElement:c=="mouseout"&&(l=i.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Pc[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&pn.aa.h.call(this)}}M(pn,Re);var Pc={2:"touch",3:"pen",4:"mouse"};pn.prototype.h=function(){pn.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Zn="closure_listenable_"+(1e6*Math.random()|0),Sc=0;function Vc(i,l,c,f,A){this.listener=i,this.proxy=null,this.src=l,this.type=c,this.capture=!!f,this.ha=A,this.key=++Sc,this.da=this.fa=!1}function er(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function tr(i){this.src=i,this.g={},this.h=0}tr.prototype.add=function(i,l,c,f,A){var S=i.toString();i=this.g[S],i||(i=this.g[S]=[],this.h++);var $=ps(i,l,f,A);return-1<$?(l=i[$],c||(l.fa=!1)):(l=new Vc(l,this.src,S,!!f,A),l.fa=c,i.push(l)),l};function fs(i,l){var c=l.type;if(c in i.g){var f=i.g[c],A=Array.prototype.indexOf.call(f,l,void 0),S;(S=0<=A)&&Array.prototype.splice.call(f,A,1),S&&(er(l),i.g[c].length==0&&(delete i.g[c],i.h--))}}function ps(i,l,c,f){for(var A=0;A<i.length;++A){var S=i[A];if(!S.da&&S.listener==l&&S.capture==!!c&&S.ha==f)return A}return-1}var ms="closure_lm_"+(1e6*Math.random()|0),gs={};function ho(i,l,c,f,A){if(Array.isArray(l)){for(var S=0;S<l.length;S++)ho(i,l[S],c,f,A);return null}return c=mo(c),i&&i[Zn]?i.K(l,c,d(f)?!!f.capture:!1,A):Rc(i,l,c,!1,f,A)}function Rc(i,l,c,f,A,S){if(!l)throw Error("Invalid event type");var $=d(A)?!!A.capture:!!A,he=vs(i);if(he||(i[ms]=he=new tr(i)),c=he.add(l,c,f,$,S),c.proxy)return c;if(f=kc(),c.proxy=f,f.src=i,f.listener=c,i.addEventListener)bc||(A=$),A===void 0&&(A=!1),i.addEventListener(l.toString(),f,A);else if(i.attachEvent)i.attachEvent(po(l.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return c}function kc(){function i(c){return l.call(i.src,i.listener,c)}const l=Cc;return i}function fo(i,l,c,f,A){if(Array.isArray(l))for(var S=0;S<l.length;S++)fo(i,l[S],c,f,A);else f=d(f)?!!f.capture:!!f,c=mo(c),i&&i[Zn]?(i=i.i,l=String(l).toString(),l in i.g&&(S=i.g[l],c=ps(S,c,f,A),-1<c&&(er(S[c]),Array.prototype.splice.call(S,c,1),S.length==0&&(delete i.g[l],i.h--)))):i&&(i=vs(i))&&(l=i.g[l.toString()],i=-1,l&&(i=ps(l,c,f,A)),(c=-1<i?l[i]:null)&&_s(c))}function _s(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[Zn])fs(l.i,i);else{var c=i.type,f=i.proxy;l.removeEventListener?l.removeEventListener(c,f,i.capture):l.detachEvent?l.detachEvent(po(c),f):l.addListener&&l.removeListener&&l.removeListener(f),(c=vs(l))?(fs(c,i),c.h==0&&(c.src=null,l[ms]=null)):er(i)}}}function po(i){return i in gs?gs[i]:gs[i]="on"+i}function Cc(i,l){if(i.da)i=!0;else{l=new pn(l,this);var c=i.listener,f=i.ha||i.src;i.fa&&_s(i),i=c.call(f,l)}return i}function vs(i){return i=i[ms],i instanceof tr?i:null}var ys="__closure_events_fn_"+(1e9*Math.random()>>>0);function mo(i){return typeof i=="function"?i:(i[ys]||(i[ys]=function(l){return i.handleEvent(l)}),i[ys])}function ke(){ut.call(this),this.i=new tr(this),this.M=this,this.F=null}M(ke,ut),ke.prototype[Zn]=!0,ke.prototype.removeEventListener=function(i,l,c,f){fo(this,i,l,c,f)};function Oe(i,l){var c,f=i.F;if(f)for(c=[];f;f=f.F)c.push(f);if(i=i.M,f=l.type||l,typeof l=="string")l=new Re(l,i);else if(l instanceof Re)l.target=l.target||i;else{var A=l;l=new Re(f,i),E(l,A)}if(A=!0,c)for(var S=c.length-1;0<=S;S--){var $=l.g=c[S];A=nr($,f,!0,l)&&A}if($=l.g=i,A=nr($,f,!0,l)&&A,A=nr($,f,!1,l)&&A,c)for(S=0;S<c.length;S++)$=l.g=c[S],A=nr($,f,!1,l)&&A}ke.prototype.N=function(){if(ke.aa.N.call(this),this.i){var i=this.i,l;for(l in i.g){for(var c=i.g[l],f=0;f<c.length;f++)er(c[f]);delete i.g[l],i.h--}}this.F=null},ke.prototype.K=function(i,l,c,f){return this.i.add(String(i),l,!1,c,f)},ke.prototype.L=function(i,l,c,f){return this.i.add(String(i),l,!0,c,f)};function nr(i,l,c,f){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,S=0;S<l.length;++S){var $=l[S];if($&&!$.da&&$.capture==c){var he=$.listener,Ae=$.ha||$.src;$.fa&&fs(i.i,$),A=he.call(Ae,f)!==!1&&A}}return A&&!f.defaultPrevented}function go(i,l,c){if(typeof i=="function")c&&(i=y(i,c));else if(i&&typeof i.handleEvent=="function")i=y(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(i,l||0)}function _o(i){i.g=go(()=>{i.g=null,i.i&&(i.i=!1,_o(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class Dc extends ut{constructor(l,c){super(),this.m=l,this.l=c,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:_o(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mn(i){ut.call(this),this.h=i,this.g={}}M(mn,ut);var vo=[];function yo(i){we(i.g,function(l,c){this.g.hasOwnProperty(c)&&_s(l)},i),i.g={}}mn.prototype.N=function(){mn.aa.N.call(this),yo(this)},mn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Es=u.JSON.stringify,Nc=u.JSON.parse,Lc=class{stringify(i){return u.JSON.stringify(i,void 0)}parse(i){return u.JSON.parse(i,void 0)}};function Ts(){}Ts.prototype.h=null;function Eo(i){return i.h||(i.h=i.i())}function To(){}var gn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Is(){Re.call(this,"d")}M(Is,Re);function ws(){Re.call(this,"c")}M(ws,Re);var Vt={},Io=null;function rr(){return Io=Io||new ke}Vt.La="serverreachability";function wo(i){Re.call(this,Vt.La,i)}M(wo,Re);function _n(i){const l=rr();Oe(l,new wo(l))}Vt.STAT_EVENT="statevent";function Ao(i,l){Re.call(this,Vt.STAT_EVENT,i),this.stat=l}M(Ao,Re);function $e(i){const l=rr();Oe(l,new Ao(l,i))}Vt.Ma="timingevent";function bo(i,l){Re.call(this,Vt.Ma,i),this.size=l}M(bo,Re);function vn(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){i()},l)}function yn(){this.g=!0}yn.prototype.xa=function(){this.g=!1};function Mc(i,l,c,f,A,S){i.info(function(){if(i.g)if(S)for(var $="",he=S.split("&"),Ae=0;Ae<he.length;Ae++){var oe=he[Ae].split("=");if(1<oe.length){var Ce=oe[0];oe=oe[1];var De=Ce.split("_");$=2<=De.length&&De[1]=="type"?$+(Ce+"="+oe+"&"):$+(Ce+"=redacted&")}}else $=null;else $=S;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+l+`
`+c+`
`+$})}function Oc(i,l,c,f,A,S,$){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+l+`
`+c+`
`+S+" "+$})}function Ut(i,l,c,f){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+xc(i,c)+(f?" "+f:"")})}function $c(i,l){i.info(function(){return"TIMEOUT: "+l})}yn.prototype.info=function(){};function xc(i,l){if(!i.g)return l;if(!l)return null;try{var c=JSON.parse(l);if(c){for(i=0;i<c.length;i++)if(Array.isArray(c[i])){var f=c[i];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var S=A[0];if(S!="noop"&&S!="stop"&&S!="close")for(var $=1;$<A.length;$++)A[$]=""}}}}return Es(c)}catch{return l}}var sr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Po={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},As;function ir(){}M(ir,Ts),ir.prototype.g=function(){return new XMLHttpRequest},ir.prototype.i=function(){return{}},As=new ir;function ct(i,l,c,f){this.j=i,this.i=l,this.l=c,this.R=f||1,this.U=new mn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new So}function So(){this.i=null,this.g="",this.h=!1}var Vo={},bs={};function Ps(i,l,c){i.L=1,i.v=ur(tt(l)),i.m=c,i.P=!0,Ro(i,null)}function Ro(i,l){i.F=Date.now(),or(i),i.A=tt(i.v);var c=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),Ho(c.i,"t",f),i.C=0,c=i.j.J,i.h=new So,i.g=aa(i.j,c?l:null,!i.m),0<i.O&&(i.M=new Dc(y(i.Y,i,i.g),i.O)),l=i.U,c=i.g,f=i.ca;var A="readystatechange";Array.isArray(A)||(A&&(vo[0]=A.toString()),A=vo);for(var S=0;S<A.length;S++){var $=ho(c,A[S],f||l.handleEvent,!1,l.h||l);if(!$)break;l.g[$.key]=$}l=i.H?m(i.H):{},i.m?(i.u||(i.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,l)):(i.u="GET",i.g.ea(i.A,i.u,null,l)),_n(),Mc(i.i,i.u,i.A,i.l,i.R,i.m)}ct.prototype.ca=function(i){i=i.target;const l=this.M;l&&nt(i)==3?l.j():this.Y(i)},ct.prototype.Y=function(i){try{if(i==this.g)e:{const De=nt(this.g);var l=this.g.Ba();const qt=this.g.Z();if(!(3>De)&&(De!=3||this.g&&(this.h.h||this.g.oa()||Xo(this.g)))){this.J||De!=4||l==7||(l==8||0>=qt?_n(3):_n(2)),Ss(this);var c=this.g.Z();this.X=c;t:if(ko(this)){var f=Xo(this.g);i="";var A=f.length,S=nt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Rt(this),En(this);var $="";break t}this.h.i=new u.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,i+=this.h.i.decode(f[l],{stream:!(S&&l==A-1)});f.length=0,this.h.g+=i,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=c==200,Oc(this.i,this.u,this.A,this.l,this.R,De,c),this.o){if(this.T&&!this.K){t:{if(this.g){var he,Ae=this.g;if((he=Ae.g?Ae.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Q(he)){var oe=he;break t}}oe=null}if(c=oe)Ut(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Vs(this,c);else{this.o=!1,this.s=3,$e(12),Rt(this),En(this);break e}}if(this.P){c=!0;let qe;for(;!this.J&&this.C<$.length;)if(qe=Fc(this,$),qe==bs){De==4&&(this.s=4,$e(14),c=!1),Ut(this.i,this.l,null,"[Incomplete Response]");break}else if(qe==Vo){this.s=4,$e(15),Ut(this.i,this.l,$,"[Invalid Chunk]"),c=!1;break}else Ut(this.i,this.l,qe,null),Vs(this,qe);if(ko(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),De!=4||$.length!=0||this.h.h||(this.s=1,$e(16),c=!1),this.o=this.o&&c,!c)Ut(this.i,this.l,$,"[Invalid Chunked Response]"),Rt(this),En(this);else if(0<$.length&&!this.W){this.W=!0;var Ce=this.j;Ce.g==this&&Ce.ba&&!Ce.M&&(Ce.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),Ls(Ce),Ce.M=!0,$e(11))}}else Ut(this.i,this.l,$,null),Vs(this,$);De==4&&Rt(this),this.o&&!this.J&&(De==4?ra(this.j,this):(this.o=!1,or(this)))}else nh(this.g),c==400&&0<$.indexOf("Unknown SID")?(this.s=3,$e(12)):(this.s=0,$e(13)),Rt(this),En(this)}}}catch{}finally{}};function ko(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Fc(i,l){var c=i.C,f=l.indexOf(`
`,c);return f==-1?bs:(c=Number(l.substring(c,f)),isNaN(c)?Vo:(f+=1,f+c>l.length?bs:(l=l.slice(f,f+c),i.C=f+c,l)))}ct.prototype.cancel=function(){this.J=!0,Rt(this)};function or(i){i.S=Date.now()+i.I,Co(i,i.I)}function Co(i,l){if(i.B!=null)throw Error("WatchDog timer not null");i.B=vn(y(i.ba,i),l)}function Ss(i){i.B&&(u.clearTimeout(i.B),i.B=null)}ct.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?($c(this.i,this.A),this.L!=2&&(_n(),$e(17)),Rt(this),this.s=2,En(this)):Co(this,this.S-i)};function En(i){i.j.G==0||i.J||ra(i.j,i)}function Rt(i){Ss(i);var l=i.M;l&&typeof l.ma=="function"&&l.ma(),i.M=null,yo(i.U),i.g&&(l=i.g,i.g=null,l.abort(),l.ma())}function Vs(i,l){try{var c=i.j;if(c.G!=0&&(c.g==i||Rs(c.h,i))){if(!i.K&&Rs(c.h,i)&&c.G==3){try{var f=c.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){e:if(!c.u){if(c.g)if(c.g.F+3e3<i.F)mr(c),fr(c);else break e;Ns(c),$e(18)}}else c.za=A[1],0<c.za-c.T&&37500>A[2]&&c.F&&c.v==0&&!c.C&&(c.C=vn(y(c.Za,c),6e3));if(1>=Lo(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else Ct(c,11)}else if((i.K||c.g==i)&&mr(c),!Q(l))for(A=c.Da.g.parse(l),l=0;l<A.length;l++){let oe=A[l];if(c.T=oe[0],oe=oe[1],c.G==2)if(oe[0]=="c"){c.K=oe[1],c.ia=oe[2];const Ce=oe[3];Ce!=null&&(c.la=Ce,c.j.info("VER="+c.la));const De=oe[4];De!=null&&(c.Aa=De,c.j.info("SVER="+c.Aa));const qt=oe[5];qt!=null&&typeof qt=="number"&&0<qt&&(f=1.5*qt,c.L=f,c.j.info("backChannelRequestTimeoutMs_="+f)),f=c;const qe=i.g;if(qe){const _r=qe.g?qe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_r){var S=f.h;S.g||_r.indexOf("spdy")==-1&&_r.indexOf("quic")==-1&&_r.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(ks(S,S.h),S.h=null))}if(f.D){const Ms=qe.g?qe.g.getResponseHeader("X-HTTP-Session-Id"):null;Ms&&(f.ya=Ms,de(f.I,f.D,Ms))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-i.F,c.j.info("Handshake RTT: "+c.R+"ms")),f=c;var $=i;if(f.qa=oa(f,f.J?f.ia:null,f.W),$.K){Mo(f.h,$);var he=$,Ae=f.L;Ae&&(he.I=Ae),he.B&&(Ss(he),or(he)),f.g=$}else ta(f);0<c.i.length&&pr(c)}else oe[0]!="stop"&&oe[0]!="close"||Ct(c,7);else c.G==3&&(oe[0]=="stop"||oe[0]=="close"?oe[0]=="stop"?Ct(c,7):Ds(c):oe[0]!="noop"&&c.l&&c.l.ta(oe),c.v=0)}}_n(4)}catch{}}var Bc=class{constructor(i,l){this.g=i,this.map=l}};function Do(i){this.l=i||10,u.PerformanceNavigationTiming?(i=u.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function No(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Lo(i){return i.h?1:i.g?i.g.size:0}function Rs(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function ks(i,l){i.g?i.g.add(l):i.h=l}function Mo(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}Do.prototype.cancel=function(){if(this.i=Oo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Oo(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const c of i.g.values())l=l.concat(c.D);return l}return x(i.i)}function Uc(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var l=[],c=i.length,f=0;f<c;f++)l.push(i[f]);return l}l=[],c=0;for(f in i)l[c++]=i[f];return l}function jc(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var l=[];i=i.length;for(var c=0;c<i;c++)l.push(c);return l}l=[],c=0;for(const f in i)l[c++]=f;return l}}}function $o(i,l){if(i.forEach&&typeof i.forEach=="function")i.forEach(l,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,l,void 0);else for(var c=jc(i),f=Uc(i),A=f.length,S=0;S<A;S++)l.call(void 0,f[S],c&&c[S],i)}var xo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Hc(i,l){if(i){i=i.split("&");for(var c=0;c<i.length;c++){var f=i[c].indexOf("="),A=null;if(0<=f){var S=i[c].substring(0,f);A=i[c].substring(f+1)}else S=i[c];l(S,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function kt(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof kt){this.h=i.h,ar(this,i.j),this.o=i.o,this.g=i.g,lr(this,i.s),this.l=i.l;var l=i.i,c=new wn;c.i=l.i,l.g&&(c.g=new Map(l.g),c.h=l.h),Fo(this,c),this.m=i.m}else i&&(l=String(i).match(xo))?(this.h=!1,ar(this,l[1]||"",!0),this.o=Tn(l[2]||""),this.g=Tn(l[3]||"",!0),lr(this,l[4]),this.l=Tn(l[5]||"",!0),Fo(this,l[6]||"",!0),this.m=Tn(l[7]||"")):(this.h=!1,this.i=new wn(null,this.h))}kt.prototype.toString=function(){var i=[],l=this.j;l&&i.push(In(l,Bo,!0),":");var c=this.g;return(c||l=="file")&&(i.push("//"),(l=this.o)&&i.push(In(l,Bo,!0),"@"),i.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&i.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&i.push("/"),i.push(In(c,c.charAt(0)=="/"?Gc:zc,!0))),(c=this.i.toString())&&i.push("?",c),(c=this.m)&&i.push("#",In(c,Wc)),i.join("")};function tt(i){return new kt(i)}function ar(i,l,c){i.j=c?Tn(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function lr(i,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);i.s=l}else i.s=null}function Fo(i,l,c){l instanceof wn?(i.i=l,Qc(i.i,i.h)):(c||(l=In(l,Kc)),i.i=new wn(l,i.h))}function de(i,l,c){i.i.set(l,c)}function ur(i){return de(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Tn(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function In(i,l,c){return typeof i=="string"?(i=encodeURI(i).replace(l,qc),c&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function qc(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Bo=/[#\/\?@]/g,zc=/[#\?:]/g,Gc=/[#\?]/g,Kc=/[#\?@]/g,Wc=/#/g;function wn(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function ht(i){i.g||(i.g=new Map,i.h=0,i.i&&Hc(i.i,function(l,c){i.add(decodeURIComponent(l.replace(/\+/g," ")),c)}))}n=wn.prototype,n.add=function(i,l){ht(this),this.i=null,i=jt(this,i);var c=this.g.get(i);return c||this.g.set(i,c=[]),c.push(l),this.h+=1,this};function Uo(i,l){ht(i),l=jt(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function jo(i,l){return ht(i),l=jt(i,l),i.g.has(l)}n.forEach=function(i,l){ht(this),this.g.forEach(function(c,f){c.forEach(function(A){i.call(l,A,f,this)},this)},this)},n.na=function(){ht(this);const i=Array.from(this.g.values()),l=Array.from(this.g.keys()),c=[];for(let f=0;f<l.length;f++){const A=i[f];for(let S=0;S<A.length;S++)c.push(l[f])}return c},n.V=function(i){ht(this);let l=[];if(typeof i=="string")jo(this,i)&&(l=l.concat(this.g.get(jt(this,i))));else{i=Array.from(this.g.values());for(let c=0;c<i.length;c++)l=l.concat(i[c])}return l},n.set=function(i,l){return ht(this),this.i=null,i=jt(this,i),jo(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},n.get=function(i,l){return i?(i=this.V(i),0<i.length?String(i[0]):l):l};function Ho(i,l,c){Uo(i,l),0<c.length&&(i.i=null,i.g.set(jt(i,l),x(c)),i.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(var c=0;c<l.length;c++){var f=l[c];const S=encodeURIComponent(String(f)),$=this.V(f);for(f=0;f<$.length;f++){var A=S;$[f]!==""&&(A+="="+encodeURIComponent(String($[f]))),i.push(A)}}return this.i=i.join("&")};function jt(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function Qc(i,l){l&&!i.j&&(ht(i),i.i=null,i.g.forEach(function(c,f){var A=f.toLowerCase();f!=A&&(Uo(this,f),Ho(this,A,c))},i)),i.j=l}function Xc(i,l){const c=new yn;if(u.Image){const f=new Image;f.onload=V(dt,c,"TestLoadImage: loaded",!0,l,f),f.onerror=V(dt,c,"TestLoadImage: error",!1,l,f),f.onabort=V(dt,c,"TestLoadImage: abort",!1,l,f),f.ontimeout=V(dt,c,"TestLoadImage: timeout",!1,l,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else l(!1)}function Yc(i,l){const c=new yn,f=new AbortController,A=setTimeout(()=>{f.abort(),dt(c,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:f.signal}).then(S=>{clearTimeout(A),S.ok?dt(c,"TestPingServer: ok",!0,l):dt(c,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),dt(c,"TestPingServer: error",!1,l)})}function dt(i,l,c,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(c)}catch{}}function Jc(){this.g=new Lc}function Zc(i,l,c){const f=c||"";try{$o(i,function(A,S){let $=A;d(A)&&($=Es(A)),l.push(f+S+"="+encodeURIComponent($))})}catch(A){throw l.push(f+"type="+encodeURIComponent("_badmap")),A}}function cr(i){this.l=i.Ub||null,this.j=i.eb||!1}M(cr,Ts),cr.prototype.g=function(){return new hr(this.l,this.j)},cr.prototype.i=function(i){return function(){return i}}({});function hr(i,l){ke.call(this),this.D=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}M(hr,ke),n=hr.prototype,n.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=l,this.readyState=1,bn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(l.body=i),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,An(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,bn(this)),this.g&&(this.readyState=3,bn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;qo(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function qo(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?An(this):bn(this),this.readyState==3&&qo(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,An(this))},n.Qa=function(i){this.g&&(this.response=i,An(this))},n.ga=function(){this.g&&An(this)};function An(i){i.readyState=4,i.l=null,i.j=null,i.v=null,bn(i)}n.setRequestHeader=function(i,l){this.u.append(i,l)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var c=l.next();!c.done;)c=c.value,i.push(c[0]+": "+c[1]),c=l.next();return i.join(`\r
`)};function bn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(hr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function zo(i){let l="";return we(i,function(c,f){l+=f,l+=":",l+=c,l+=`\r
`}),l}function Cs(i,l,c){e:{for(f in c){var f=!1;break e}f=!0}f||(c=zo(c),typeof i=="string"?c!=null&&encodeURIComponent(String(c)):de(i,l,c))}function me(i){ke.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}M(me,ke);var eh=/^https?$/i,th=["POST","PUT"];n=me.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,l,c,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():As.g(),this.v=this.o?Eo(this.o):Eo(As),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(S){Go(this,S);return}if(i=c||"",c=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)c.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const S of f.keys())c.set(S,f.get(S));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(c.keys()).find(S=>S.toLowerCase()=="content-type"),A=u.FormData&&i instanceof u.FormData,!(0<=Array.prototype.indexOf.call(th,l,void 0))||f||A||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,$]of c)this.g.setRequestHeader(S,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Qo(this),this.u=!0,this.g.send(i),this.u=!1}catch(S){Go(this,S)}};function Go(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.m=5,Ko(i),dr(i)}function Ko(i){i.A||(i.A=!0,Oe(i,"complete"),Oe(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Oe(this,"complete"),Oe(this,"abort"),dr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),dr(this,!0)),me.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Wo(this):this.bb())},n.bb=function(){Wo(this)};function Wo(i){if(i.h&&typeof a<"u"&&(!i.v[1]||nt(i)!=4||i.Z()!=2)){if(i.u&&nt(i)==4)go(i.Ea,0,i);else if(Oe(i,"readystatechange"),nt(i)==4){i.h=!1;try{const $=i.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var c;if(!(c=l)){var f;if(f=$===0){var A=String(i.D).match(xo)[1]||null;!A&&u.self&&u.self.location&&(A=u.self.location.protocol.slice(0,-1)),f=!eh.test(A?A.toLowerCase():"")}c=f}if(c)Oe(i,"complete"),Oe(i,"success");else{i.m=6;try{var S=2<nt(i)?i.g.statusText:""}catch{S=""}i.l=S+" ["+i.Z()+"]",Ko(i)}}finally{dr(i)}}}}function dr(i,l){if(i.g){Qo(i);const c=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,l||Oe(i,"ready");try{c.onreadystatechange=f}catch{}}}function Qo(i){i.I&&(u.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function nt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<nt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),Nc(l)}};function Xo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function nh(i){const l={};i=(i.g&&2<=nt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(Q(i[f]))continue;var c=I(i[f]);const A=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const S=l[A]||[];l[A]=S,S.push(c)}w(l,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Pn(i,l,c){return c&&c.internalChannelParams&&c.internalChannelParams[i]||l}function Yo(i){this.Aa=0,this.i=[],this.j=new yn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Pn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Pn("baseRetryDelayMs",5e3,i),this.cb=Pn("retryDelaySeedMs",1e4,i),this.Wa=Pn("forwardChannelMaxRetries",2,i),this.wa=Pn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Do(i&&i.concurrentRequestLimit),this.Da=new Jc,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Yo.prototype,n.la=8,n.G=1,n.connect=function(i,l,c,f){$e(0),this.W=i,this.H=l||{},c&&f!==void 0&&(this.H.OSID=c,this.H.OAID=f),this.F=this.X,this.I=oa(this,null,this.W),pr(this)};function Ds(i){if(Jo(i),i.G==3){var l=i.U++,c=tt(i.I);if(de(c,"SID",i.K),de(c,"RID",l),de(c,"TYPE","terminate"),Sn(i,c),l=new ct(i,i.j,l),l.L=2,l.v=ur(tt(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=l.v,c=!0),c||(l.g=aa(l.j,null),l.g.ea(l.v)),l.F=Date.now(),or(l)}ia(i)}function fr(i){i.g&&(Ls(i),i.g.cancel(),i.g=null)}function Jo(i){fr(i),i.u&&(u.clearTimeout(i.u),i.u=null),mr(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&u.clearTimeout(i.s),i.s=null)}function pr(i){if(!No(i.h)&&!i.s){i.s=!0;var l=i.Ga;dn||co(),fn||(dn(),fn=!0),ds.add(l,i),i.B=0}}function rh(i,l){return Lo(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=l.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=vn(y(i.Ga,i,l),sa(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const A=new ct(this,this.j,i);let S=this.o;if(this.S&&(S?(S=m(S),E(S,this.S)):S=this.S),this.m!==null||this.O||(A.H=S,S=null),this.P)e:{for(var l=0,c=0;c<this.i.length;c++){t:{var f=this.i[c];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=c;break e}if(l===4096||c===this.i.length-1){l=c+1;break e}}l=1e3}else l=1e3;l=ea(this,A,l),c=tt(this.I),de(c,"RID",i),de(c,"CVER",22),this.D&&de(c,"X-HTTP-Session-Id",this.D),Sn(this,c),S&&(this.O?l="headers="+encodeURIComponent(String(zo(S)))+"&"+l:this.m&&Cs(c,this.m,S)),ks(this.h,A),this.Ua&&de(c,"TYPE","init"),this.P?(de(c,"$req",l),de(c,"SID","null"),A.T=!0,Ps(A,c,null)):Ps(A,c,l),this.G=2}}else this.G==3&&(i?Zo(this,i):this.i.length==0||No(this.h)||Zo(this))};function Zo(i,l){var c;l?c=l.l:c=i.U++;const f=tt(i.I);de(f,"SID",i.K),de(f,"RID",c),de(f,"AID",i.T),Sn(i,f),i.m&&i.o&&Cs(f,i.m,i.o),c=new ct(i,i.j,c,i.B+1),i.m===null&&(c.H=i.o),l&&(i.i=l.D.concat(i.i)),l=ea(i,c,1e3),c.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),ks(i.h,c),Ps(c,f,l)}function Sn(i,l){i.H&&we(i.H,function(c,f){de(l,f,c)}),i.l&&$o({},function(c,f){de(l,f,c)})}function ea(i,l,c){c=Math.min(i.i.length,c);var f=i.l?y(i.l.Na,i.l,i):null;e:{var A=i.i;let S=-1;for(;;){const $=["count="+c];S==-1?0<c?(S=A[0].g,$.push("ofs="+S)):S=0:$.push("ofs="+S);let he=!0;for(let Ae=0;Ae<c;Ae++){let oe=A[Ae].g;const Ce=A[Ae].map;if(oe-=S,0>oe)S=Math.max(0,A[Ae].g-100),he=!1;else try{Zc(Ce,$,"req"+oe+"_")}catch{f&&f(Ce)}}if(he){f=$.join("&");break e}}}return i=i.i.splice(0,c),l.D=i,f}function ta(i){if(!i.g&&!i.u){i.Y=1;var l=i.Fa;dn||co(),fn||(dn(),fn=!0),ds.add(l,i),i.v=0}}function Ns(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=vn(y(i.Fa,i),sa(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,na(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=vn(y(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,$e(10),fr(this),na(this))};function Ls(i){i.A!=null&&(u.clearTimeout(i.A),i.A=null)}function na(i){i.g=new ct(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var l=tt(i.qa);de(l,"RID","rpc"),de(l,"SID",i.K),de(l,"AID",i.T),de(l,"CI",i.F?"0":"1"),!i.F&&i.ja&&de(l,"TO",i.ja),de(l,"TYPE","xmlhttp"),Sn(i,l),i.m&&i.o&&Cs(l,i.m,i.o),i.L&&(i.g.I=i.L);var c=i.g;i=i.ia,c.L=1,c.v=ur(tt(l)),c.m=null,c.P=!0,Ro(c,i)}n.Za=function(){this.C!=null&&(this.C=null,fr(this),Ns(this),$e(19))};function mr(i){i.C!=null&&(u.clearTimeout(i.C),i.C=null)}function ra(i,l){var c=null;if(i.g==l){mr(i),Ls(i),i.g=null;var f=2}else if(Rs(i.h,l))c=l.D,Mo(i.h,l),f=1;else return;if(i.G!=0){if(l.o)if(f==1){c=l.m?l.m.length:0,l=Date.now()-l.F;var A=i.B;f=rr(),Oe(f,new bo(f,c)),pr(i)}else ta(i);else if(A=l.s,A==3||A==0&&0<l.X||!(f==1&&rh(i,l)||f==2&&Ns(i)))switch(c&&0<c.length&&(l=i.h,l.i=l.i.concat(c)),A){case 1:Ct(i,5);break;case 4:Ct(i,10);break;case 3:Ct(i,6);break;default:Ct(i,2)}}}function sa(i,l){let c=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(c*=2),c*l}function Ct(i,l){if(i.j.info("Error code "+l),l==2){var c=y(i.fb,i),f=i.Xa;const A=!f;f=new kt(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||ar(f,"https"),ur(f),A?Xc(f.toString(),c):Yc(f.toString(),c)}else $e(2);i.G=0,i.l&&i.l.sa(l),ia(i),Jo(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),$e(2)):(this.j.info("Failed to ping google.com"),$e(1))};function ia(i){if(i.G=0,i.ka=[],i.l){const l=Oo(i.h);(l.length!=0||i.i.length!=0)&&(L(i.ka,l),L(i.ka,i.i),i.h.i.length=0,x(i.i),i.i.length=0),i.l.ra()}}function oa(i,l,c){var f=c instanceof kt?tt(c):new kt(c);if(f.g!="")l&&(f.g=l+"."+f.g),lr(f,f.s);else{var A=u.location;f=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var S=new kt(null);f&&ar(S,f),l&&(S.g=l),A&&lr(S,A),c&&(S.l=c),f=S}return c=i.D,l=i.ya,c&&l&&de(f,c,l),de(f,"VER",i.la),Sn(i,f),f}function aa(i,l,c){if(l&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Ca&&!i.pa?new me(new cr({eb:c})):new me(i.pa),l.Ha(i.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function la(){}n=la.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function gr(){}gr.prototype.g=function(i,l){return new Ue(i,l)};function Ue(i,l){ke.call(this),this.g=new Yo(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(i?i["X-WebChannel-Client-Profile"]=l.va:i={"X-WebChannel-Client-Profile":l.va}),this.g.S=i,(i=l&&l.Sb)&&!Q(i)&&(this.g.m=i),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!Q(l)&&(this.g.D=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new Ht(this)}M(Ue,ke),Ue.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ue.prototype.close=function(){Ds(this.g)},Ue.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var c={};c.__data__=i,i=c}else this.u&&(c={},c.__data__=Es(i),i=c);l.i.push(new Bc(l.Ya++,i)),l.G==3&&pr(l)},Ue.prototype.N=function(){this.g.l=null,delete this.j,Ds(this.g),delete this.g,Ue.aa.N.call(this)};function ua(i){Is.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){e:{for(const c in l){i=c;break e}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}M(ua,Is);function ca(){ws.call(this),this.status=1}M(ca,ws);function Ht(i){this.g=i}M(Ht,la),Ht.prototype.ua=function(){Oe(this.g,"a")},Ht.prototype.ta=function(i){Oe(this.g,new ua(i))},Ht.prototype.sa=function(i){Oe(this.g,new ca)},Ht.prototype.ra=function(){Oe(this.g,"b")},gr.prototype.createWebChannel=gr.prototype.g,Ue.prototype.send=Ue.prototype.o,Ue.prototype.open=Ue.prototype.m,Ue.prototype.close=Ue.prototype.close,Jl=function(){return new gr},Yl=function(){return rr()},Xl=Vt,ti={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},sr.NO_ERROR=0,sr.TIMEOUT=8,sr.HTTP_ERROR=6,Ar=sr,Po.COMPLETE="complete",Ql=Po,To.EventType=gn,gn.OPEN="a",gn.CLOSE="b",gn.ERROR="c",gn.MESSAGE="d",ke.prototype.listen=ke.prototype.K,Vn=To,me.prototype.listenOnce=me.prototype.L,me.prototype.getLastError=me.prototype.Ka,me.prototype.getLastErrorCode=me.prototype.Ba,me.prototype.getStatus=me.prototype.Z,me.prototype.getResponseJson=me.prototype.Oa,me.prototype.getResponseText=me.prototype.oa,me.prototype.send=me.prototype.ea,me.prototype.setWithCredentials=me.prototype.Ha,Wl=me}).apply(typeof vr<"u"?vr:typeof self<"u"?self:typeof window<"u"?window:{});const Pa="@firebase/firestore",Sa="4.7.17";/**
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
 */const Ot=new Ul("@firebase/firestore");function zt(){return Ot.logLevel}function F(n,...e){if(Ot.logLevel<=se.DEBUG){const t=e.map(Ci);Ot.debug(`Firestore (${an}): ${n}`,...t)}}function it(n,...e){if(Ot.logLevel<=se.ERROR){const t=e.map(Ci);Ot.error(`Firestore (${an}): ${n}`,...t)}}function Jt(n,...e){if(Ot.logLevel<=se.WARN){const t=e.map(Ci);Ot.warn(`Firestore (${an}): ${n}`,...t)}}function Ci(n){if(typeof n=="string")return n;try{/**
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
 */function K(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Zl(n,r,t)}function Zl(n,e,t){let r=`FIRESTORE (${an}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw it(r),new Error(r)}function ue(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Zl(e,s,r)}function Y(n,e){return n}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends on{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class eu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Le.UNAUTHENTICATED))}shutdown(){}}class x_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class F_{constructor(e){this.t=e,this.currentUser=Le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ue(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve();let o=new vt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new vt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},u=h=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new vt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string",31837,{l:r}),new eu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string",2055,{h:e}),new Le(e)}}class B_{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class U_{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new B_(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Va{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class j_{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,I_(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ue(this.o===void 0,3512);const r=o=>{o.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,F("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const s=o=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Va(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ue(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Va(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function H_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function tu(){return new TextEncoder}/**
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
 */class nu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=H_(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<t&&(r+=e.charAt(s[o]%62))}return r}}function ee(n,e){return n<e?-1:n>e?1:0}function ni(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return ee(r,s);{const o=tu(),a=q_(o.encode(Ra(n,t)),o.encode(Ra(e,t)));return a!==0?a:ee(r,s)}}t+=r>65535?2:1}return ee(n.length,e.length)}function Ra(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function q_(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return ee(n[t],e[t]);return ee(n.length,e.length)}function Zt(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const ka=-62135596800,Ca=1e6;class Ee{static now(){return Ee.fromMillis(Date.now())}static fromDate(e){return Ee.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Ca);return new Ee(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new q(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new q(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ka)throw new q(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ca}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-ka;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */const Da="__name__";class Ge{constructor(e,t,r){t===void 0?t=0:t>e.length&&K(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&K(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ge.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ge?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const o=Ge.compareSegments(e.get(s),t.get(s));if(o!==0)return o}return ee(e.length,t.length)}static compareSegments(e,t){const r=Ge.isNumericId(e),s=Ge.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Ge.extractNumericId(e).compare(Ge.extractNumericId(t)):ni(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return _t.fromString(e.substring(4,e.length-2))}}class ge extends Ge{construct(e,t,r){return new ge(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ge(t)}static emptyPath(){return new ge([])}}const z_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pe extends Ge{construct(e,t,r){return new Pe(e,t,r)}static isValidIdentifier(e){return z_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Da}static keyField(){return new Pe([Da])}static fromServerFormat(e){const t=[];let r="",s=0;const o=()=>{if(r.length===0)throw new q(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const u=e[s];if(u==="\\"){if(s+1===e.length)throw new q(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new q(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(r+=u,s++):(o(),s++)}if(o(),a)throw new q(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pe(t)}static emptyPath(){return new Pe([])}}/**
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
 */const Fn=-1;function G_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=X.fromTimestamp(r===1e9?new Ee(t+1,0):new Ee(t,r));return new yt(s,G.empty(),e)}function K_(n){return new yt(n.readTime,n.key,Fn)}class yt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new yt(X.min(),G.empty(),Fn)}static max(){return new yt(X.max(),G.empty(),Fn)}}function W_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=G.comparator(n.documentKey,e.documentKey),t!==0?t:ee(n.largestBatchId,e.largestBatchId))}/**
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
 */const Q_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class X_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ln(n){if(n.code!==O.FAILED_PRECONDITION||n.message!==Q_)throw n;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&K(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new C((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof C?t:C.resolve(t)}catch(t){return C.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):C.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):C.reject(t)}static resolve(e){return new C((t,r)=>{t(e)})}static reject(e){return new C((t,r)=>{r(e)})}static waitFor(e){return new C((t,r)=>{let s=0,o=0,a=!1;e.forEach(u=>{++s,u.next(()=>{++o,a&&o===s&&t()},h=>r(h))}),a=!0,o===s&&t()})}static or(e){let t=C.resolve(!1);for(const r of e)t=t.next(s=>s?C.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,o)=>{r.push(t.call(this,s,o))}),this.waitFor(r)}static mapArray(e,t){return new C((r,s)=>{const o=e.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const d=h;t(e[d]).next(p=>{a[d]=p,++u,u===o&&r(a)},p=>s(p))}})}static doWhile(e,t){return new C((r,s)=>{const o=()=>{e()===!0?t().next(()=>{o()},s):r()};o()})}}function Y_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function un(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Qr{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>t.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Qr.le=-1;/**
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
 */const Di=-1;function Xr(n){return n==null}function Lr(n){return n===0&&1/n==-1/0}function J_(n){return typeof n=="number"&&Number.isInteger(n)&&!Lr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const ru="";function Z_(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Na(e)),e=ev(n.get(t),e);return Na(e)}function ev(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":t+="";break;case ru:t+="";break;default:t+=o}}return t}function Na(n){return n+ru+""}/**
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
 */function La(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Pt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function su(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class pe{constructor(e,t){this.comparator=e,this.root=t||be.EMPTY}insert(e,t){return new pe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,be.BLACK,null,null))}remove(e){return new pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,be.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yr(this.root,e,this.comparator,!1)}getReverseIterator(){return new yr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yr(this.root,e,this.comparator,!0)}}class yr{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&s&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class be{constructor(e,t,r,s,o){this.key=e,this.value=t,this.color=r??be.RED,this.left=s??be.EMPTY,this.right=o??be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,o){return new be(e??this.key,t??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const o=r(e,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(e,t,r),null):o===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return be.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw K(43730,{key:this.key,value:this.value});if(this.right.isRed())throw K(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw K(27949);return e+(this.isRed()?0:1)}}be.EMPTY=null,be.RED=!0,be.BLACK=!1;be.EMPTY=new class{constructor(){this.size=0}get key(){throw K(57766)}get value(){throw K(16141)}get color(){throw K(16727)}get left(){throw K(29726)}get right(){throw K(36894)}copy(e,t,r,s,o){return this}insert(e,t,r){return new be(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Te{constructor(e){this.comparator=e,this.data=new pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ma(this.data.getIterator())}getIteratorFrom(e){return new Ma(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Te)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Te(this.comparator);return t.data=e,t}}class Ma{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class je{constructor(e){this.fields=e,e.sort(Pe.comparator)}static empty(){return new je([])}unionWith(e){let t=new Te(Pe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new je(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Zt(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class iu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ve{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new iu("Invalid base64 string: "+o):o}}(e);return new Ve(t)}static fromUint8Array(e){const t=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(e);return new Ve(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ve.EMPTY_BYTE_STRING=new Ve("");const tv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Et(n){if(ue(!!n,39018),typeof n=="string"){let e=0;const t=tv.exec(n);if(ue(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:_e(n.seconds),nanos:_e(n.nanos)}}function _e(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Tt(n){return typeof n=="string"?Ve.fromBase64String(n):Ve.fromUint8Array(n)}/**
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
 */const ou="server_timestamp",au="__type__",lu="__previous_value__",uu="__local_write_time__";function Ni(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[au])===null||t===void 0?void 0:t.stringValue)===ou}function Yr(n){const e=n.mapValue.fields[lu];return Ni(e)?Yr(e):e}function Bn(n){const e=Et(n.mapValue.fields[uu].timestampValue);return new Ee(e.seconds,e.nanos)}/**
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
 */class nv{constructor(e,t,r,s,o,a,u,h,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=p}}const Mr="(default)";class Un{constructor(e,t){this.projectId=e,this.database=t||Mr}static empty(){return new Un("","")}get isDefaultDatabase(){return this.database===Mr}isEqual(e){return e instanceof Un&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const cu="__type__",rv="__max__",Er={mapValue:{}},hu="__vector__",Or="value";function It(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ni(n)?4:iv(n)?9007199254740991:sv(n)?10:11:K(28295,{value:n})}function Je(n,e){if(n===e)return!0;const t=It(n);if(t!==It(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Bn(n).isEqual(Bn(e));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=Et(s.timestampValue),u=Et(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,o){return Tt(s.bytesValue).isEqual(Tt(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,o){return _e(s.geoPointValue.latitude)===_e(o.geoPointValue.latitude)&&_e(s.geoPointValue.longitude)===_e(o.geoPointValue.longitude)}(n,e);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return _e(s.integerValue)===_e(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=_e(s.doubleValue),u=_e(o.doubleValue);return a===u?Lr(a)===Lr(u):isNaN(a)&&isNaN(u)}return!1}(n,e);case 9:return Zt(n.arrayValue.values||[],e.arrayValue.values||[],Je);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},u=o.mapValue.fields||{};if(La(a)!==La(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!Je(a[h],u[h])))return!1;return!0}(n,e);default:return K(52216,{left:n})}}function jn(n,e){return(n.values||[]).find(t=>Je(t,e))!==void 0}function en(n,e){if(n===e)return 0;const t=It(n),r=It(e);if(t!==r)return ee(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ee(n.booleanValue,e.booleanValue);case 2:return function(o,a){const u=_e(o.integerValue||o.doubleValue),h=_e(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,e);case 3:return Oa(n.timestampValue,e.timestampValue);case 4:return Oa(Bn(n),Bn(e));case 5:return ni(n.stringValue,e.stringValue);case 6:return function(o,a){const u=Tt(o),h=Tt(a);return u.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){const p=ee(u[d],h[d]);if(p!==0)return p}return ee(u.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const u=ee(_e(o.latitude),_e(a.latitude));return u!==0?u:ee(_e(o.longitude),_e(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return $a(n.arrayValue,e.arrayValue);case 10:return function(o,a){var u,h,d,p;const v=o.fields||{},y=a.fields||{},V=(u=v[Or])===null||u===void 0?void 0:u.arrayValue,M=(h=y[Or])===null||h===void 0?void 0:h.arrayValue,x=ee(((d=V==null?void 0:V.values)===null||d===void 0?void 0:d.length)||0,((p=M==null?void 0:M.values)===null||p===void 0?void 0:p.length)||0);return x!==0?x:$a(V,M)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===Er.mapValue&&a===Er.mapValue)return 0;if(o===Er.mapValue)return 1;if(a===Er.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),d=a.fields||{},p=Object.keys(d);h.sort(),p.sort();for(let v=0;v<h.length&&v<p.length;++v){const y=ni(h[v],p[v]);if(y!==0)return y;const V=en(u[h[v]],d[p[v]]);if(V!==0)return V}return ee(h.length,p.length)}(n.mapValue,e.mapValue);default:throw K(23264,{Pe:t})}}function Oa(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ee(n,e);const t=Et(n),r=Et(e),s=ee(t.seconds,r.seconds);return s!==0?s:ee(t.nanos,r.nanos)}function $a(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const o=en(t[s],r[s]);if(o)return o}return ee(t.length,r.length)}function tn(n){return ri(n)}function ri(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Et(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Tt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return G.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const o of t.values||[])s?s=!1:r+=",",r+=ri(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${ri(t.fields[a])}`;return s+"}"}(n.mapValue):K(61005,{value:n})}function br(n){switch(It(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Yr(n);return e?16+br(e):16;case 5:return 2*n.stringValue.length;case 6:return Tt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+br(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Pt(r.fields,(o,a)=>{s+=o.length+br(a)}),s}(n.mapValue);default:throw K(13486,{value:n})}}function si(n){return!!n&&"integerValue"in n}function Li(n){return!!n&&"arrayValue"in n}function xa(n){return!!n&&"nullValue"in n}function Fa(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Pr(n){return!!n&&"mapValue"in n}function sv(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[cu])===null||t===void 0?void 0:t.stringValue)===hu}function Nn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Pt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Nn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Nn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function iv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===rv}/**
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
 */class Fe{constructor(e){this.value=e}static empty(){return new Fe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Pr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Nn(t)}setAll(e){let t=Pe.emptyPath(),r={},s=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){const h=this.getFieldsMap(t);this.applyChanges(h,r,s),r={},s=[],t=u.popLast()}a?r[u.lastSegment()]=Nn(a):s.push(u.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,s)}delete(e){const t=this.field(e.popLast());Pr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Je(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Pr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Pt(t,(s,o)=>e[s]=o);for(const s of r)delete e[s]}clone(){return new Fe(Nn(this.value))}}function du(n){const e=[];return Pt(n.fields,(t,r)=>{const s=new Pe([t]);if(Pr(r)){const o=du(r.mapValue).fields;if(o.length===0)e.push(s);else for(const a of o)e.push(s.child(a))}else e.push(s)}),new je(e)}/**
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
 */class Me{constructor(e,t,r,s,o,a,u){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(e){return new Me(e,0,X.min(),X.min(),X.min(),Fe.empty(),0)}static newFoundDocument(e,t,r,s){return new Me(e,1,t,X.min(),r,s,0)}static newNoDocument(e,t){return new Me(e,2,t,X.min(),X.min(),Fe.empty(),0)}static newUnknownDocument(e,t){return new Me(e,3,t,X.min(),X.min(),Fe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Fe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Fe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Me&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Me(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class $r{constructor(e,t){this.position=e,this.inclusive=t}}function Ba(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const o=e[s],a=n.position[s];if(o.field.isKeyField()?r=G.comparator(G.fromName(a.referenceValue),t.key):r=en(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ua(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Je(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class xr{constructor(e,t="asc"){this.field=e,this.dir=t}}function ov(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class fu{}class ye extends fu{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new lv(e,t,r):t==="array-contains"?new hv(e,r):t==="in"?new dv(e,r):t==="not-in"?new fv(e,r):t==="array-contains-any"?new pv(e,r):new ye(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new uv(e,r):new cv(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(en(t,this.value)):t!==null&&It(this.value)===It(t)&&this.matchesComparison(en(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ze extends fu{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new Ze(e,t)}matches(e){return pu(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function pu(n){return n.op==="and"}function mu(n){return av(n)&&pu(n)}function av(n){for(const e of n.filters)if(e instanceof Ze)return!1;return!0}function ii(n){if(n instanceof ye)return n.field.canonicalString()+n.op.toString()+tn(n.value);if(mu(n))return n.filters.map(e=>ii(e)).join(",");{const e=n.filters.map(t=>ii(t)).join(",");return`${n.op}(${e})`}}function gu(n,e){return n instanceof ye?function(r,s){return s instanceof ye&&r.op===s.op&&r.field.isEqual(s.field)&&Je(r.value,s.value)}(n,e):n instanceof Ze?function(r,s){return s instanceof Ze&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,u)=>o&&gu(a,s.filters[u]),!0):!1}(n,e):void K(19439)}function _u(n){return n instanceof ye?function(t){return`${t.field.canonicalString()} ${t.op} ${tn(t.value)}`}(n):n instanceof Ze?function(t){return t.op.toString()+" {"+t.getFilters().map(_u).join(" ,")+"}"}(n):"Filter"}class lv extends ye{constructor(e,t,r){super(e,t,r),this.key=G.fromName(r.referenceValue)}matches(e){const t=G.comparator(e.key,this.key);return this.matchesComparison(t)}}class uv extends ye{constructor(e,t){super(e,"in",t),this.keys=vu("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class cv extends ye{constructor(e,t){super(e,"not-in",t),this.keys=vu("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function vu(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>G.fromName(r.referenceValue))}class hv extends ye{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Li(t)&&jn(t.arrayValue,this.value)}}class dv extends ye{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&jn(this.value.arrayValue,t)}}class fv extends ye{constructor(e,t){super(e,"not-in",t)}matches(e){if(jn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!jn(this.value.arrayValue,t)}}class pv extends ye{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Li(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>jn(this.value.arrayValue,r))}}/**
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
 */class mv{constructor(e,t=null,r=[],s=[],o=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=u,this.Ie=null}}function ja(n,e=null,t=[],r=[],s=null,o=null,a=null){return new mv(n,e,t,r,s,o,a)}function Mi(n){const e=Y(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>ii(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Xr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>tn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>tn(r)).join(",")),e.Ie=t}return e.Ie}function Oi(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!ov(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!gu(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ua(n.startAt,e.startAt)&&Ua(n.endAt,e.endAt)}function oi(n){return G.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Jr{constructor(e,t=null,r=[],s=[],o=null,a="F",u=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function gv(n,e,t,r,s,o,a,u){return new Jr(n,e,t,r,s,o,a,u)}function $i(n){return new Jr(n)}function Ha(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function _v(n){return n.collectionGroup!==null}function Ln(n){const e=Y(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ee.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new Te(Pe.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ee.push(new xr(o,r))}),t.has(Pe.keyField().canonicalString())||e.Ee.push(new xr(Pe.keyField(),r))}return e.Ee}function Qe(n){const e=Y(n);return e.de||(e.de=vv(e,Ln(n))),e.de}function vv(n,e){if(n.limitType==="F")return ja(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new xr(s.field,o)});const t=n.endAt?new $r(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new $r(n.startAt.position,n.startAt.inclusive):null;return ja(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function ai(n,e,t){return new Jr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Zr(n,e){return Oi(Qe(n),Qe(e))&&n.limitType===e.limitType}function yu(n){return`${Mi(Qe(n))}|lt:${n.limitType}`}function Gt(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>_u(s)).join(", ")}]`),Xr(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>tn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>tn(s)).join(",")),`Target(${r})`}(Qe(n))}; limitType=${n.limitType})`}function es(n,e){return e.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):G.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,s){for(const o of Ln(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,u,h){const d=Ba(a,u,h);return a.inclusive?d<=0:d<0}(r.startAt,Ln(r),s)||r.endAt&&!function(a,u,h){const d=Ba(a,u,h);return a.inclusive?d>=0:d>0}(r.endAt,Ln(r),s))}(n,e)}function yv(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Eu(n){return(e,t)=>{let r=!1;for(const s of Ln(n)){const o=Ev(s,e,t);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Ev(n,e,t){const r=n.field.isKeyField()?G.comparator(e.key,t.key):function(o,a,u){const h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?en(h,d):K(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return K(19790,{direction:n.dir})}}/**
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
 */class Ft{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return void(s[o]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Pt(this.inner,(t,r)=>{for(const[s,o]of r)e(s,o)})}isEmpty(){return su(this.inner)}size(){return this.innerSize}}/**
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
 */const Tv=new pe(G.comparator);function ot(){return Tv}const Tu=new pe(G.comparator);function Rn(...n){let e=Tu;for(const t of n)e=e.insert(t.key,t);return e}function Iu(n){let e=Tu;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Nt(){return Mn()}function wu(){return Mn()}function Mn(){return new Ft(n=>n.toString(),(n,e)=>n.isEqual(e))}const Iv=new pe(G.comparator),wv=new Te(G.comparator);function ne(...n){let e=wv;for(const t of n)e=e.add(t);return e}const Av=new Te(ee);function bv(){return Av}/**
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
 */function xi(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Lr(e)?"-0":e}}function Au(n){return{integerValue:""+n}}function bu(n,e){return J_(e)?Au(e):xi(n,e)}/**
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
 */class ts{constructor(){this._=void 0}}function Pv(n,e,t){return n instanceof Fr?function(s,o){const a={fields:{[au]:{stringValue:ou},[uu]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Ni(o)&&(o=Yr(o)),o&&(a.fields[lu]=o),{mapValue:a}}(t,e):n instanceof Hn?Su(n,e):n instanceof qn?Vu(n,e):function(s,o){const a=Pu(s,o),u=qa(a)+qa(s.Re);return si(a)&&si(s.Re)?Au(u):xi(s.serializer,u)}(n,e)}function Sv(n,e,t){return n instanceof Hn?Su(n,e):n instanceof qn?Vu(n,e):t}function Pu(n,e){return n instanceof zn?function(r){return si(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class Fr extends ts{}class Hn extends ts{constructor(e){super(),this.elements=e}}function Su(n,e){const t=Ru(e);for(const r of n.elements)t.some(s=>Je(s,r))||t.push(r);return{arrayValue:{values:t}}}class qn extends ts{constructor(e){super(),this.elements=e}}function Vu(n,e){let t=Ru(e);for(const r of n.elements)t=t.filter(s=>!Je(s,r));return{arrayValue:{values:t}}}class zn extends ts{constructor(e,t){super(),this.serializer=e,this.Re=t}}function qa(n){return _e(n.integerValue||n.doubleValue)}function Ru(n){return Li(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Vv{constructor(e,t){this.field=e,this.transform=t}}function Rv(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Hn&&s instanceof Hn||r instanceof qn&&s instanceof qn?Zt(r.elements,s.elements,Je):r instanceof zn&&s instanceof zn?Je(r.Re,s.Re):r instanceof Fr&&s instanceof Fr}(n.transform,e.transform)}class kv{constructor(e,t){this.version=e,this.transformResults=t}}class Xe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Xe}static exists(e){return new Xe(void 0,e)}static updateTime(e){return new Xe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Sr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ns{}function ku(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Du(n.key,Xe.none()):new Qn(n.key,n.data,Xe.none());{const t=n.data,r=Fe.empty();let s=new Te(Pe.comparator);for(let o of e.fields)if(!s.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new St(n.key,r,new je(s.toArray()),Xe.none())}}function Cv(n,e,t){n instanceof Qn?function(s,o,a){const u=s.value.clone(),h=Ga(s.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):n instanceof St?function(s,o,a){if(!Sr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const u=Ga(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Cu(s)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,e,t):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function On(n,e,t,r){return n instanceof Qn?function(o,a,u,h){if(!Sr(o.precondition,a))return u;const d=o.value.clone(),p=Ka(o.fieldTransforms,h,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof St?function(o,a,u,h){if(!Sr(o.precondition,a))return u;const d=Ka(o.fieldTransforms,h,a),p=a.data;return p.setAll(Cu(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(v=>v.field))}(n,e,t,r):function(o,a,u){return Sr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,e,t)}function Dv(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),o=Pu(r.transform,s||null);o!=null&&(t===null&&(t=Fe.empty()),t.set(r.field,o))}return t||null}function za(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Zt(r,s,(o,a)=>Rv(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Qn extends ns{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class St extends ns{constructor(e,t,r,s,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Cu(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Ga(n,e,t){const r=new Map;ue(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let s=0;s<t.length;s++){const o=n[s],a=o.transform,u=e.data.field(o.field);r.set(o.field,Sv(a,u,t[s]))}return r}function Ka(n,e,t){const r=new Map;for(const s of n){const o=s.transform,a=t.data.field(s.field);r.set(s.field,Pv(o,a,e))}return r}class Du extends ns{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Nv extends ns{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Lv{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(e.key)&&Cv(o,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=On(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=On(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=wu();return this.mutations.forEach(s=>{const o=e.get(s.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=t.has(s.key)?null:u;const h=ku(a,u);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ne())}isEqual(e){return this.batchId===e.batchId&&Zt(this.mutations,e.mutations,(t,r)=>za(t,r))&&Zt(this.baseMutations,e.baseMutations,(t,r)=>za(t,r))}}class Fi{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){ue(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return Iv}();const o=e.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Fi(e,t,r,s)}}/**
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
 */class Mv{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Ov{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ve,re;function $v(n){switch(n){case O.OK:return K(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return K(15467,{code:n})}}function Nu(n){if(n===void 0)return it("GRPC error has no .code"),O.UNKNOWN;switch(n){case ve.OK:return O.OK;case ve.CANCELLED:return O.CANCELLED;case ve.UNKNOWN:return O.UNKNOWN;case ve.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case ve.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case ve.INTERNAL:return O.INTERNAL;case ve.UNAVAILABLE:return O.UNAVAILABLE;case ve.UNAUTHENTICATED:return O.UNAUTHENTICATED;case ve.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case ve.NOT_FOUND:return O.NOT_FOUND;case ve.ALREADY_EXISTS:return O.ALREADY_EXISTS;case ve.PERMISSION_DENIED:return O.PERMISSION_DENIED;case ve.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case ve.ABORTED:return O.ABORTED;case ve.OUT_OF_RANGE:return O.OUT_OF_RANGE;case ve.UNIMPLEMENTED:return O.UNIMPLEMENTED;case ve.DATA_LOSS:return O.DATA_LOSS;default:return K(39323,{code:n})}}(re=ve||(ve={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const xv=new _t([4294967295,4294967295],0);function Wa(n){const e=tu().encode(n),t=new Kl;return t.update(e),new Uint8Array(t.digest())}function Qa(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new _t([t,r],0),new _t([s,o],0)]}class Bi{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new kn(`Invalid padding: ${t}`);if(r<0)throw new kn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new kn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new kn(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=_t.fromNumber(this.pe)}we(e,t,r){let s=e.add(t.multiply(_t.fromNumber(r)));return s.compare(xv)===1&&(s=new _t([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=Wa(e),[r,s]=Qa(t);for(let o=0;o<this.hashCount;o++){const a=this.we(r,s,o);if(!this.be(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new Bi(o,s,t);return r.forEach(u=>a.insert(u)),a}insert(e){if(this.pe===0)return;const t=Wa(e),[r,s]=Qa(t);for(let o=0;o<this.hashCount;o++){const a=this.we(r,s,o);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class kn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class rs{constructor(e,t,r,s,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Xn.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new rs(X.min(),s,new pe(ee),ot(),ne())}}class Xn{constructor(e,t,r,s,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Xn(r,t,ne(),ne(),ne())}}/**
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
 */class Vr{constructor(e,t,r,s){this.De=e,this.removedTargetIds=t,this.key=r,this.ve=s}}class Lu{constructor(e,t){this.targetId=e,this.Ce=t}}class Mu{constructor(e,t,r=Ve.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Xa{constructor(){this.Fe=0,this.Me=Ya(),this.xe=Ve.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=ne(),t=ne(),r=ne();return this.Me.forEach((s,o)=>{switch(o){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:K(38017,{changeType:o})}}),new Xn(this.xe,this.Oe,e,t,r)}Qe(){this.Ne=!1,this.Me=Ya()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,ue(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class Fv{constructor(e){this.ze=e,this.je=new Map,this.He=ot(),this.Je=Tr(),this.Ye=Tr(),this.Ze=new pe(ee)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const r=this.rt(t);switch(e.state){case 0:this.it(t)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.ke(e.resumeToken));break;default:K(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((r,s)=>{this.it(s)&&t(s)})}ot(e){const t=e.targetId,r=e.Ce.count,s=this._t(t);if(s){const o=s.target;if(oi(o))if(r===0){const a=new G(o.path);this.tt(t,a,Me.newNoDocument(a,X.min()))}else ue(r===1,20013,{expectedCount:r});else{const a=this.ut(t);if(a!==r){const u=this.ct(e),h=u?this.lt(u,e,a):1;if(h!==0){this.st(t);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=t;let a,u;try{a=Tt(r).toUint8Array()}catch(h){if(h instanceof iu)return Jt("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new Bi(a,s,o)}catch(h){return Jt(h instanceof kn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.pe===0?null:u}lt(e,t,r){return t.Ce.count===r-this.Tt(e,t.targetId)?0:2}Tt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let s=0;return r.forEach(o=>{const a=this.ze.Pt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(u)||(this.tt(t,o,null),s++)}),s}It(e){const t=new Map;this.je.forEach((o,a)=>{const u=this._t(a);if(u){if(o.current&&oi(u.target)){const h=new G(u.target.path);this.Et(h).has(a)||this.dt(a,h)||this.tt(a,h,Me.newNoDocument(h,e))}o.Le&&(t.set(a,o.qe()),o.Qe())}});let r=ne();this.Ye.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{const d=this._t(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.He.forEach((o,a)=>a.setReadTime(e));const s=new rs(e,t,this.Ze,this.He,r);return this.He=ot(),this.Je=Tr(),this.Ye=Tr(),this.Ze=new pe(ee),s}et(e,t){if(!this.it(e))return;const r=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,r),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,r){if(!this.it(e))return;const s=this.rt(e);this.dt(e,t)?s.$e(t,1):s.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),r&&(this.He=this.He.insert(t,r))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new Xa,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new Te(ee),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new Te(ee),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||F("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Xa),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function Tr(){return new pe(G.comparator)}function Ya(){return new pe(G.comparator)}const Bv={asc:"ASCENDING",desc:"DESCENDING"},Uv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},jv={and:"AND",or:"OR"};class Hv{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function li(n,e){return n.useProto3Json||Xr(e)?e:{value:e}}function Br(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ou(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function qv(n,e){return Br(n,e.toTimestamp())}function Ye(n){return ue(!!n,49232),X.fromTimestamp(function(t){const r=Et(t);return new Ee(r.seconds,r.nanos)}(n))}function Ui(n,e){return ui(n,e).canonicalString()}function ui(n,e){const t=function(s){return new ge(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function $u(n){const e=ge.fromString(n);return ue(ju(e),10190,{key:e.toString()}),e}function ci(n,e){return Ui(n.databaseId,e.path)}function Us(n,e){const t=$u(e);if(t.get(1)!==n.databaseId.projectId)throw new q(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new q(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new G(Fu(t))}function xu(n,e){return Ui(n.databaseId,e)}function zv(n){const e=$u(n);return e.length===4?ge.emptyPath():Fu(e)}function hi(n){return new ge(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Fu(n){return ue(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Ja(n,e,t){return{name:ci(n,e),fields:t.value.mapValue.fields}}function Gv(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:K(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?(ue(p===void 0||typeof p=="string",58123),Ve.fromBase64String(p||"")):(ue(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),Ve.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(d){const p=d.code===void 0?O.UNKNOWN:Nu(d.code);return new q(p,d.message||"")}(a);t=new Mu(r,s,o,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Us(n,r.document.name),o=Ye(r.document.updateTime),a=r.document.createTime?Ye(r.document.createTime):X.min(),u=new Fe({mapValue:{fields:r.document.fields}}),h=Me.newFoundDocument(s,o,a,u),d=r.targetIds||[],p=r.removedTargetIds||[];t=new Vr(d,p,h.key,h)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Us(n,r.document),o=r.readTime?Ye(r.readTime):X.min(),a=Me.newNoDocument(s,o),u=r.removedTargetIds||[];t=new Vr([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Us(n,r.document),o=r.removedTargetIds||[];t=new Vr([],o,s,null)}else{if(!("filter"in e))return K(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Ov(s,o),u=r.targetId;t=new Lu(u,a)}}return t}function Kv(n,e){let t;if(e instanceof Qn)t={update:Ja(n,e.key,e.value)};else if(e instanceof Du)t={delete:ci(n,e.key)};else if(e instanceof St)t={update:Ja(n,e.key,e.data),updateMask:ny(e.fieldMask)};else{if(!(e instanceof Nv))return K(16599,{ft:e.type});t={verify:ci(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,a){const u=a.transform;if(u instanceof Fr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Hn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof qn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof zn)return{fieldPath:a.field.canonicalString(),increment:u.Re};throw K(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:qv(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:K(27497)}(n,e.precondition)),t}function Wv(n,e){return n&&n.length>0?(ue(e!==void 0,14353),n.map(t=>function(s,o){let a=s.updateTime?Ye(s.updateTime):Ye(o);return a.isEqual(X.min())&&(a=Ye(o)),new kv(a,s.transformResults||[])}(t,e))):[]}function Qv(n,e){return{documents:[xu(n,e.path)]}}function Xv(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=xu(n,s);const o=function(d){if(d.length!==0)return Uu(Ze.create(d,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(p=>function(y){return{field:Kt(y.field),direction:Zv(y.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const u=li(n,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{gt:t,parent:s}}function Yv(n){let e=zv(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){ue(r===1,65062);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let o=[];t.where&&(o=function(v){const y=Bu(v);return y instanceof Ze&&mu(y)?y.getFilters():[y]}(t.where));let a=[];t.orderBy&&(a=function(v){return v.map(y=>function(M){return new xr(Wt(M.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(M.direction))}(y))}(t.orderBy));let u=null;t.limit&&(u=function(v){let y;return y=typeof v=="object"?v.value:v,Xr(y)?null:y}(t.limit));let h=null;t.startAt&&(h=function(v){const y=!!v.before,V=v.values||[];return new $r(V,y)}(t.startAt));let d=null;return t.endAt&&(d=function(v){const y=!v.before,V=v.values||[];return new $r(V,y)}(t.endAt)),gv(e,s,a,o,u,"F",h,d)}function Jv(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Bu(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Wt(t.unaryFilter.field);return ye.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Wt(t.unaryFilter.field);return ye.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Wt(t.unaryFilter.field);return ye.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Wt(t.unaryFilter.field);return ye.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return K(61313);default:return K(60726)}}(n):n.fieldFilter!==void 0?function(t){return ye.create(Wt(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return K(58110);default:return K(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ze.create(t.compositeFilter.filters.map(r=>Bu(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return K(1026)}}(t.compositeFilter.op))}(n):K(30097,{filter:n})}function Zv(n){return Bv[n]}function ey(n){return Uv[n]}function ty(n){return jv[n]}function Kt(n){return{fieldPath:n.canonicalString()}}function Wt(n){return Pe.fromServerFormat(n.fieldPath)}function Uu(n){return n instanceof ye?function(t){if(t.op==="=="){if(Fa(t.value))return{unaryFilter:{field:Kt(t.field),op:"IS_NAN"}};if(xa(t.value))return{unaryFilter:{field:Kt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Fa(t.value))return{unaryFilter:{field:Kt(t.field),op:"IS_NOT_NAN"}};if(xa(t.value))return{unaryFilter:{field:Kt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Kt(t.field),op:ey(t.op),value:t.value}}}(n):n instanceof Ze?function(t){const r=t.getFilters().map(s=>Uu(s));return r.length===1?r[0]:{compositeFilter:{op:ty(t.op),filters:r}}}(n):K(54877,{filter:n})}function ny(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ju(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class ft{constructor(e,t,r,s,o=X.min(),a=X.min(),u=Ve.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(e){return new ft(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ft(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class ry{constructor(e){this.wt=e}}function sy(n){const e=Yv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ai(e,e.limit,"L"):e}/**
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
 */class iy{constructor(){this.Cn=new oy}addToCollectionParentIndex(e,t){return this.Cn.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(yt.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(yt.min())}updateCollectionGroup(e,t,r){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}}class oy{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Te(ge.comparator),o=!s.has(r);return this.index[t]=s.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Te(ge.comparator)).toArray()}}/**
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
 */const Za={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Hu=41943040;class xe{static withCacheSize(e){return new xe(e,xe.DEFAULT_COLLECTION_PERCENTILE,xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */xe.DEFAULT_COLLECTION_PERCENTILE=10,xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,xe.DEFAULT=new xe(Hu,xe.DEFAULT_COLLECTION_PERCENTILE,xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),xe.DISABLED=new xe(-1,0,0);/**
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
 */const el="LruGarbageCollector",ay=1048576;function tl([n,e],[t,r]){const s=ee(n,t);return s===0?ee(e,r):s}class ly{constructor(e){this.Er=e,this.buffer=new Te(tl),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();tl(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class uy{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){F(el,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){un(t)?F(el,"Ignoring IndexedDB error during garbage collection: ",t):await ln(t)}await this.mr(3e5)})}}class cy{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return C.resolve(Qr.le);const r=new ly(t);return this.gr.forEachTarget(e,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(e,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.gr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(F("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(Za)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(F("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Za):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let r,s,o,a,u,h,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(v=>(v>this.params.maximumSequenceNumbersToCollect?(F("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),s=this.params.maximumSequenceNumbersToCollect):s=v,a=Date.now(),this.nthSequenceNumber(e,s))).next(v=>(r=v,u=Date.now(),this.removeTargets(e,r,t))).next(v=>(o=v,h=Date.now(),this.removeOrphanedDocuments(e,r))).next(v=>(d=Date.now(),zt()<=se.DEBUG&&F("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${o} targets in `+(h-u)+`ms
	Removed ${v} documents in `+(d-h)+`ms
Total Duration: ${d-p}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:v})))}}function hy(n,e){return new cy(n,e)}/**
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
 */class dy{constructor(){this.changes=new Ft(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Me.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?C.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class fy{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class py{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&On(r.mutation,s,je.empty(),Ee.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ne()){const s=Nt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(o=>{let a=Rn();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Nt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ne()))}populateOverlays(e,t,r){const s=[];return r.forEach(o=>{t.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(e,s).next(o=>{o.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,r,s){let o=ot();const a=Mn(),u=function(){return Mn()}();return t.forEach((h,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof St)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),On(p.mutation,d,p.mutation.getFieldMask(),Ee.now())):a.set(d.key,je.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var v;return u.set(d,new fy(p,(v=a.get(d))!==null&&v!==void 0?v:null))}),u))}recalculateAndSaveOverlays(e,t){const r=Mn();let s=new pe((a,u)=>a-u),o=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const u of a)u.keys().forEach(h=>{const d=t.get(h);if(d===null)return;let p=r.get(h)||je.empty();p=u.applyToLocalView(d,p),r.set(h,p);const v=(s.get(u.batchId)||ne()).add(h);s=s.insert(u.batchId,v)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),d=h.key,p=h.value,v=wu();p.forEach(y=>{if(!o.has(y)){const V=ku(t.get(y),r.get(y));V!==null&&v.set(y,V),o=o.add(y)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,v))}return C.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return G.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):_v(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-o.size):C.resolve(Nt());let u=Fn,h=o;return a.next(d=>C.forEach(d,(p,v)=>(u<v.largestBatchId&&(u=v.largestBatchId),o.get(p)?C.resolve():this.remoteDocumentCache.getEntry(e,p).next(y=>{h=h.insert(p,y)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,h,d,ne())).next(p=>({batchId:u,changes:Iu(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new G(t)).next(r=>{let s=Rn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const o=t.collectionGroup;let a=Rn();return this.indexManager.getCollectionParents(e,o).next(u=>C.forEach(u,h=>{const d=function(v,y){return new Jr(y,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(p=>{p.forEach((v,y)=>{a=a.insert(v,y)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,s))).next(a=>{o.forEach((h,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Me.newInvalidDocument(p)))});let u=Rn();return a.forEach((h,d)=>{const p=o.get(h);p!==void 0&&On(p.mutation,d,je.empty(),Ee.now()),es(t,d)&&(u=u.insert(h,d))}),u})}}/**
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
 */class my{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return C.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Ye(s.createTime)}}(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(s){return{name:s.name,query:sy(s.bundledQuery),readTime:Ye(s.readTime)}}(t)),C.resolve()}}/**
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
 */class gy{constructor(){this.overlays=new pe(G.comparator),this.Qr=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Nt();return C.forEach(t,s=>this.getOverlay(e,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,o)=>{this.St(e,t,o)}),C.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Qr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Qr.delete(r)),C.resolve()}getOverlaysForCollection(e,t,r){const s=Nt(),o=t.length+1,a=new G(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return C.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let o=new pe((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=o.get(d.largestBatchId);p===null&&(p=Nt(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const u=Nt(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,p)=>u.set(d,p)),!(u.size()>=s)););return C.resolve(u)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Qr.get(s.largestBatchId).delete(r.key);this.Qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Mv(t,r));let o=this.Qr.get(t);o===void 0&&(o=ne(),this.Qr.set(t,o)),this.Qr.set(t,o.add(r.key))}}/**
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
 */class _y{constructor(){this.sessionToken=Ve.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}}/**
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
 */class ji{constructor(){this.$r=new Te(Ie.Ur),this.Kr=new Te(Ie.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const r=new Ie(e,t);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.zr(new Ie(e,t))}jr(e,t){e.forEach(r=>this.removeReference(r,t))}Hr(e){const t=new G(new ge([])),r=new Ie(t,e),s=new Ie(t,e+1),o=[];return this.Kr.forEachInRange([r,s],a=>{this.zr(a),o.push(a.key)}),o}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new G(new ge([])),r=new Ie(t,e),s=new Ie(t,e+1);let o=ne();return this.Kr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new Ie(e,0),r=this.$r.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ie{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return G.comparator(e.key,t.key)||ee(e.Zr,t.Zr)}static Wr(e,t){return ee(e.Zr,t.Zr)||G.comparator(e.key,t.key)}}/**
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
 */class vy{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new Te(Ie.Ur)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const o=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Lv(o,t,r,s);this.mutationQueue.push(a);for(const u of s)this.Xr=this.Xr.add(new Ie(u.key,o)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return C.resolve(a)}lookupMutationBatch(e,t){return C.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ti(r),o=s<0?0:s;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?Di:this.nr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ie(t,0),s=new Ie(t,Number.POSITIVE_INFINITY),o=[];return this.Xr.forEachInRange([r,s],a=>{const u=this.ei(a.Zr);o.push(u)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Te(ee);return t.forEach(s=>{const o=new Ie(s,0),a=new Ie(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([o,a],u=>{r=r.add(u.Zr)})}),C.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let o=r;G.isDocumentKey(o)||(o=o.child(""));const a=new Ie(new G(o),0);let u=new Te(ee);return this.Xr.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(u=u.add(h.Zr)),!0)},a),C.resolve(this.ni(u))}ni(e){const t=[];return e.forEach(r=>{const s=this.ei(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){ue(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return C.forEach(t.mutations,s=>{const o=new Ie(s.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,t){const r=new Ie(t,0),s=this.Xr.firstAfterOrEqual(r);return C.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class yy{constructor(e){this.ii=e,this.docs=function(){return new pe(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),o=s?s.size:0,a=this.ii(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return C.resolve(r?r.document.mutableCopy():Me.newInvalidDocument(t))}getEntries(e,t){let r=ot();return t.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Me.newInvalidDocument(s))}),C.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let o=ot();const a=t.path,u=new G(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:d,value:{document:p}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||W_(K_(p),r)<=0||(s.has(p.key)||es(t,p))&&(o=o.insert(p.key,p.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(e,t,r,s){K(9500)}si(e,t){return C.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Ey(this)}getSize(e){return C.resolve(this.size)}}class Ey extends dy{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Br.addEntry(e,s)):this.Br.removeEntry(r)}),C.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
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
 */class Ty{constructor(e){this.persistence=e,this.oi=new Ft(t=>Mi(t),Oi),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this._i=0,this.ai=new ji,this.targetCount=0,this.ui=nn.cr()}forEachTarget(e,t){return this.oi.forEach((r,s)=>t(s)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this._i&&(this._i=t),C.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new nn(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.Tr(t),C.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,r){let s=0;const o=[];return this.oi.forEach((a,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.oi.delete(a),o.push(this.removeMatchingKeysForTargetId(e,u.targetId)),s++)}),C.waitFor(o).next(()=>s)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){const r=this.oi.get(t)||null;return C.resolve(r)}addMatchingKeys(e,t,r){return this.ai.Gr(t,r),C.resolve()}removeMatchingKeys(e,t,r){this.ai.jr(t,r);const s=this.persistence.referenceDelegate,o=[];return s&&t.forEach(a=>{o.push(s.markPotentiallyOrphaned(e,a))}),C.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),C.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ai.Yr(t);return C.resolve(r)}containsKey(e,t){return C.resolve(this.ai.containsKey(t))}}/**
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
 */class qu{constructor(e,t){this.ci={},this.overlays={},this.li=new Qr(0),this.hi=!1,this.hi=!0,this.Pi=new _y,this.referenceDelegate=e(this),this.Ti=new Ty(this),this.indexManager=new iy,this.remoteDocumentCache=function(s){return new yy(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new ry(t),this.Ei=new my(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new gy,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ci[e.toKey()];return r||(r=new vy(t,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,r){F("MemoryPersistence","Starting transaction:",e);const s=new Iy(this.li.next());return this.referenceDelegate.di(),r(s).next(o=>this.referenceDelegate.Ai(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Ri(e,t){return C.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,t)))}}class Iy extends X_{constructor(e){super(),this.currentSequenceNumber=e}}class Hi{constructor(e){this.persistence=e,this.Vi=new ji,this.mi=null}static fi(e){return new Hi(e)}get gi(){if(this.mi)return this.mi;throw K(60996)}addReference(e,t,r){return this.Vi.addReference(r,t),this.gi.delete(r.toString()),C.resolve()}removeReference(e,t,r){return this.Vi.removeReference(r,t),this.gi.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),C.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(o=>this.gi.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.gi,r=>{const s=G.fromPath(r);return this.pi(e,s).next(o=>{o||t.removeEntry(s,X.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(r=>{r?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return C.or([()=>C.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class Ur{constructor(e,t){this.persistence=e,this.yi=new Ft(r=>Z_(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=hy(this,t)}static fi(e,t){return new Ur(e,t)}di(){}Ai(e){return C.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}br(e){let t=0;return this.yr(e,r=>{t++}).next(()=>t)}yr(e,t){return C.forEach(this.yi,(r,s)=>this.Dr(e,r,s).next(o=>o?C.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.si(e,a=>this.Dr(e,a,t).next(u=>{u||(r++,o.removeEntry(a,X.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),C.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),C.resolve()}removeReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),C.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),C.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=br(e.data.value)),t}Dr(e,t,r){return C.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.yi.get(t);return C.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class qi{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.ds=r,this.As=s}static Rs(e,t){let r=ne(),s=ne();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new qi(e,t.fromCache,r,s)}}/**
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
 */class wy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Ay{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return yg()?8:Y_(_g())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,r,s){const o={result:null};return this.ws(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.bs(e,t,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new wy;return this.Ss(e,t,a).next(u=>{if(o.result=u,this.fs)return this.Ds(e,t,a,u.size)})}).next(()=>o.result)}Ds(e,t,r,s){return r.documentReadCount<this.gs?(zt()<=se.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",Gt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),C.resolve()):(zt()<=se.DEBUG&&F("QueryEngine","Query:",Gt(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?(zt()<=se.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",Gt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qe(t))):C.resolve())}ws(e,t){if(Ha(t))return C.resolve(null);let r=Qe(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=ai(t,null,"F"),r=Qe(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=ne(...o);return this.ys.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,r).next(h=>{const d=this.vs(t,u);return this.Cs(t,d,a,h.readTime)?this.ws(e,ai(t,null,"F")):this.Fs(e,d,t,h)}))})))}bs(e,t,r,s){return Ha(t)||s.isEqual(X.min())?C.resolve(null):this.ys.getDocuments(e,r).next(o=>{const a=this.vs(t,o);return this.Cs(t,a,r,s)?C.resolve(null):(zt()<=se.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Gt(t)),this.Fs(e,a,t,G_(s,Fn)).next(u=>u))})}vs(e,t){let r=new Te(Eu(e));return t.forEach((s,o)=>{es(e,o)&&(r=r.add(o))}),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ss(e,t,r){return zt()<=se.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",Gt(t)),this.ys.getDocumentsMatchingQuery(e,t,yt.min(),r)}Fs(e,t,r,s){return this.ys.getDocumentsMatchingQuery(e,r,s).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */const zi="LocalStore",by=3e8;class Py{constructor(e,t,r,s){this.persistence=e,this.Ms=t,this.serializer=s,this.xs=new pe(ee),this.Os=new Ft(o=>Mi(o),Oi),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new py(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function Sy(n,e,t,r){return new Py(n,e,t,r)}async function zu(n,e){const t=Y(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,t.Ls(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let h=ne();for(const d of s){a.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of o){u.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return t.localDocuments.getDocuments(r,h).next(d=>({ks:d,removedBatchIds:a,addedBatchIds:u}))})})}function Vy(n,e){const t=Y(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),o=t.Bs.newChangeBuffer({trackRemovals:!0});return function(u,h,d,p){const v=d.batch,y=v.keys();let V=C.resolve();return y.forEach(M=>{V=V.next(()=>p.getEntry(h,M)).next(x=>{const L=d.docVersions.get(M);ue(L!==null,48541),x.version.compareTo(L)<0&&(v.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),p.addEntry(x)))})}),V.next(()=>u.mutationQueue.removeMutationBatch(h,v))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=ne();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(h=h.add(u.batch.mutations[d].key));return h}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Gu(n){const e=Y(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function Ry(n,e){const t=Y(n),r=e.snapshotVersion;let s=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=t.Bs.newChangeBuffer({trackRemovals:!0});s=t.xs;const u=[];e.targetChanges.forEach((p,v)=>{const y=s.get(v);if(!y)return;u.push(t.Ti.removeMatchingKeys(o,p.removedDocuments,v).next(()=>t.Ti.addMatchingKeys(o,p.addedDocuments,v)));let V=y.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(v)!==null?V=V.withResumeToken(Ve.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):p.resumeToken.approximateByteSize()>0&&(V=V.withResumeToken(p.resumeToken,r)),s=s.insert(v,V),function(x,L,J){return x.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=by?!0:J.addedDocuments.size+J.modifiedDocuments.size+J.removedDocuments.size>0}(y,V,p)&&u.push(t.Ti.updateTargetData(o,V))});let h=ot(),d=ne();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(o,p))}),u.push(ky(o,a,e.documentUpdates).next(p=>{h=p.qs,d=p.Qs})),!r.isEqual(X.min())){const p=t.Ti.getLastRemoteSnapshotVersion(o).next(v=>t.Ti.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(p)}return C.waitFor(u).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(t.xs=s,o))}function ky(n,e,t){let r=ne(),s=ne();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let a=ot();return t.forEach((u,h)=>{const d=o.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),h.isNoDocument()&&h.version.isEqual(X.min())?(e.removeEntry(u,h.readTime),a=a.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(h),a=a.insert(u,h)):F(zi,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)}),{qs:a,Qs:s}})}function Cy(n,e){const t=Y(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Di),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Dy(n,e){const t=Y(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ti.getTargetData(r,e).next(o=>o?(s=o,C.resolve(s)):t.Ti.allocateTargetId(r).next(a=>(s=new ft(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ti.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.xs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.xs=t.xs.insert(r.targetId,r),t.Os.set(e,r.targetId)),r})}async function di(n,e,t){const r=Y(n),s=r.xs.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!un(a))throw a;F(zi,`Failed to update sequence numbers for target ${e}: ${a}`)}r.xs=r.xs.remove(e),r.Os.delete(s.target)}function nl(n,e,t){const r=Y(n);let s=X.min(),o=ne();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,p){const v=Y(h),y=v.Os.get(p);return y!==void 0?C.resolve(v.xs.get(y)):v.Ti.getTargetData(d,p)}(r,a,Qe(e)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>r.Ms.getDocumentsMatchingQuery(a,e,t?s:X.min(),t?o:ne())).next(u=>(Ny(r,yv(e),u),{documents:u,$s:o})))}function Ny(n,e,t){let r=n.Ns.get(e)||X.min();t.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Ns.set(e,r)}class rl{constructor(){this.activeTargetIds=bv()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ly{constructor(){this.xo=new rl,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,r){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new rl,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class My{No(e){}shutdown(){}}/**
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
 */const sl="ConnectivityMonitor";class il{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){F(sl,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){F(sl,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ir=null;function fi(){return Ir===null?Ir=function(){return 268435456+Math.round(2147483648*Math.random())}():Ir++,"0x"+Ir.toString(16)}/**
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
 */const js="RestConnection",Oy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class $y{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===Mr?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(e,t,r,s,o){const a=fi(),u=this.jo(e,t.toUriEncodedString());F(js,`Sending RPC '${e}' ${a}:`,u,r);const h={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(h,s,o);const{host:d}=new URL(u),p=Ri(d);return this.Jo(e,u,h,r,p).then(v=>(F(js,`Received RPC '${e}' ${a}: `,v),v),v=>{throw Jt(js,`RPC '${e}' ${a} failed with error: `,v,"url: ",u,"request:",r),v})}Yo(e,t,r,s,o,a){return this.zo(e,t,r,s,o)}Ho(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+an}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,o)=>e[o]=s),r&&r.headers.forEach((s,o)=>e[o]=s)}jo(e,t){const r=Oy[e];return`${this.Ko}/v1/${t}:${r}`}terminate(){}}/**
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
 */class xy{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const Ne="WebChannelConnection";class Fy extends $y{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,o){const a=fi();return new Promise((u,h)=>{const d=new Wl;d.setWithCredentials(!0),d.listenOnce(Ql.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Ar.NO_ERROR:const v=d.getResponseJson();F(Ne,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(v)),u(v);break;case Ar.TIMEOUT:F(Ne,`RPC '${e}' ${a} timed out`),h(new q(O.DEADLINE_EXCEEDED,"Request time out"));break;case Ar.HTTP_ERROR:const y=d.getStatus();if(F(Ne,`RPC '${e}' ${a} failed with status:`,y,"response text:",d.getResponseText()),y>0){let V=d.getResponseJson();Array.isArray(V)&&(V=V[0]);const M=V==null?void 0:V.error;if(M&&M.status&&M.message){const x=function(J){const Q=J.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(Q)>=0?Q:O.UNKNOWN}(M.status);h(new q(x,M.message))}else h(new q(O.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new q(O.UNAVAILABLE,"Connection failed."));break;default:K(9055,{h_:e,streamId:a,P_:d.getLastErrorCode(),T_:d.getLastError()})}}finally{F(Ne,`RPC '${e}' ${a} completed.`)}});const p=JSON.stringify(s);F(Ne,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",p,r,15)})}I_(e,t,r){const s=fi(),o=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Jl(),u=Yl(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Ho(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;const p=o.join("");F(Ne,`Creating RPC '${e}' stream ${s}: ${p}`,h);const v=a.createWebChannel(p,h);this.E_(v);let y=!1,V=!1;const M=new xy({Zo:L=>{V?F(Ne,`Not sending because RPC '${e}' stream ${s} is closed:`,L):(y||(F(Ne,`Opening RPC '${e}' stream ${s} transport.`),v.open(),y=!0),F(Ne,`RPC '${e}' stream ${s} sending:`,L),v.send(L))},Xo:()=>v.close()}),x=(L,J,Q)=>{L.listen(J,Z=>{try{Q(Z)}catch(fe){setTimeout(()=>{throw fe},0)}})};return x(v,Vn.EventType.OPEN,()=>{V||(F(Ne,`RPC '${e}' stream ${s} transport opened.`),M.__())}),x(v,Vn.EventType.CLOSE,()=>{V||(V=!0,F(Ne,`RPC '${e}' stream ${s} transport closed`),M.u_(),this.d_(v))}),x(v,Vn.EventType.ERROR,L=>{V||(V=!0,Jt(Ne,`RPC '${e}' stream ${s} transport errored. Name:`,L.name,"Message:",L.message),M.u_(new q(O.UNAVAILABLE,"The operation could not be completed")))}),x(v,Vn.EventType.MESSAGE,L=>{var J;if(!V){const Q=L.data[0];ue(!!Q,16349);const Z=Q,fe=(Z==null?void 0:Z.error)||((J=Z[0])===null||J===void 0?void 0:J.error);if(fe){F(Ne,`RPC '${e}' stream ${s} received error:`,fe);const Be=fe.status;let we=function(_){const E=ve[_];if(E!==void 0)return Nu(E)}(Be),w=fe.message;we===void 0&&(we=O.INTERNAL,w="Unknown error status: "+Be+" with message "+fe.message),V=!0,M.u_(new q(we,w)),v.close()}else F(Ne,`RPC '${e}' stream ${s} received:`,Q),M.c_(Q)}}),x(u,Xl.STAT_EVENT,L=>{L.stat===ti.PROXY?F(Ne,`RPC '${e}' stream ${s} detected buffering proxy`):L.stat===ti.NOPROXY&&F(Ne,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{M.a_()},0),M}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(t=>t===e)}}function Hs(){return typeof document<"u"?document:null}/**
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
 */function ss(n){return new Hv(n,!0)}/**
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
 */class Ku{constructor(e,t,r=1e3,s=1.5,o=6e4){this.xi=e,this.timerId=t,this.A_=r,this.R_=s,this.V_=o,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const t=Math.floor(this.m_+this.w_()),r=Math.max(0,Date.now()-this.g_),s=Math.max(0,t-r);s>0&&F("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.m_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
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
 */const ol="PersistentStream";class Wu{constructor(e,t,r,s,o,a,u,h){this.xi=e,this.S_=r,this.D_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new Ku(e,t)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,t){this.U_(),this.K_(),this.x_.cancel(),this.v_++,e!==4?this.x_.reset():t&&t.code===O.RESOURCE_EXHAUSTED?(it(t.toString()),it("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):t&&t.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}W_(){}auth(){this.state=1;const e=this.G_(this.v_),t=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.v_===t&&this.z_(r,s)},r=>{e(()=>{const s=new q(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.j_(s)})})}z_(e,t){const r=this.G_(this.v_);this.stream=this.H_(e,t),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.j_(s))}),this.stream.onMessage(s=>{r(()=>++this.M_==1?this.J_(s):this.onNext(s))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(e){return F(ol,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return t=>{this.xi.enqueueAndForget(()=>this.v_===e?t():(F(ol,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class By extends Wu{constructor(e,t,r,s,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=o}H_(e,t){return this.connection.I_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();const t=Gv(this.serializer,e),r=function(o){if(!("targetChange"in o))return X.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?X.min():a.readTime?Ye(a.readTime):X.min()}(e);return this.listener.Y_(t,r)}Z_(e){const t={};t.database=hi(this.serializer),t.addTarget=function(o,a){let u;const h=a.target;if(u=oi(h)?{documents:Qv(o,h)}:{query:Xv(o,h).gt},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Ou(o,a.resumeToken);const d=li(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(X.min())>0){u.readTime=Br(o,a.snapshotVersion.toTimestamp());const d=li(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,e);const r=Jv(this.serializer,e);r&&(t.labels=r),this.Q_(t)}X_(e){const t={};t.database=hi(this.serializer),t.removeTarget=e,this.Q_(t)}}class Uy extends Wu{constructor(e,t,r,s,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=o}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(e,t){return this.connection.I_("Write",e,t)}J_(e){return ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.na()}onNext(e){ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.x_.reset();const t=Wv(e.writeResults,e.commitTime),r=Ye(e.commitTime);return this.listener.ra(r,t)}ia(){const e={};e.database=hi(this.serializer),this.Q_(e)}ta(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Kv(this.serializer,r))};this.Q_(t)}}/**
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
 */class jy{}class Hy extends jy{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.sa=!1}oa(){if(this.sa)throw new q(O.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,r,s){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.zo(e,ui(t,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(O.UNKNOWN,o.toString())})}Yo(e,t,r,s,o){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Yo(e,ui(t,r),s,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new q(O.UNKNOWN,a.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class qy{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,e==="Online"&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(it(t),this.ua=!1):F("OnlineStateTracker",t)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
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
 */const $t="RemoteStore";class zy{constructor(e,t,r,s,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=o,this.Ra.No(a=>{r.enqueueAndForget(async()=>{Bt(this)&&(F($t,"Restarting streams for network reachability change."),await async function(h){const d=Y(h);d.da.add(4),await Yn(d),d.Va.set("Unknown"),d.da.delete(4),await is(d)}(this))})}),this.Va=new qy(r,s)}}async function is(n){if(Bt(n))for(const e of n.Aa)await e(!0)}async function Yn(n){for(const e of n.Aa)await e(!1)}function Qu(n,e){const t=Y(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),Qi(t)?Wi(t):cn(t).N_()&&Ki(t,e))}function Gi(n,e){const t=Y(n),r=cn(t);t.Ea.delete(e),r.N_()&&Xu(t,e),t.Ea.size===0&&(r.N_()?r.k_():Bt(t)&&t.Va.set("Unknown"))}function Ki(n,e){if(n.ma.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}cn(n).Z_(e)}function Xu(n,e){n.ma.Ke(e),cn(n).X_(e)}function Wi(n){n.ma=new Fv({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n.Ea.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),cn(n).start(),n.Va.ca()}function Qi(n){return Bt(n)&&!cn(n).O_()&&n.Ea.size>0}function Bt(n){return Y(n).da.size===0}function Yu(n){n.ma=void 0}async function Gy(n){n.Va.set("Online")}async function Ky(n){n.Ea.forEach((e,t)=>{Ki(n,e)})}async function Wy(n,e){Yu(n),Qi(n)?(n.Va.Pa(e),Wi(n)):n.Va.set("Unknown")}async function Qy(n,e,t){if(n.Va.set("Online"),e instanceof Mu&&e.state===2&&e.cause)try{await async function(s,o){const a=o.cause;for(const u of o.targetIds)s.Ea.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.Ea.delete(u),s.ma.removeTarget(u))}(n,e)}catch(r){F($t,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await jr(n,r)}else if(e instanceof Vr?n.ma.Xe(e):e instanceof Lu?n.ma.ot(e):n.ma.nt(e),!t.isEqual(X.min()))try{const r=await Gu(n.localStore);t.compareTo(r)>=0&&await function(o,a){const u=o.ma.It(a);return u.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.Ea.get(d);p&&o.Ea.set(d,p.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,d)=>{const p=o.Ea.get(h);if(!p)return;o.Ea.set(h,p.withResumeToken(Ve.EMPTY_BYTE_STRING,p.snapshotVersion)),Xu(o,h);const v=new ft(p.target,h,d,p.sequenceNumber);Ki(o,v)}),o.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){F($t,"Failed to raise snapshot:",r),await jr(n,r)}}async function jr(n,e,t){if(!un(e))throw e;n.da.add(1),await Yn(n),n.Va.set("Offline"),t||(t=()=>Gu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{F($t,"Retrying IndexedDB access"),await t(),n.da.delete(1),await is(n)})}function Ju(n,e){return e().catch(t=>jr(n,t,e))}async function os(n){const e=Y(n),t=wt(e);let r=e.Ia.length>0?e.Ia[e.Ia.length-1].batchId:Di;for(;Xy(e);)try{const s=await Cy(e.localStore,r);if(s===null){e.Ia.length===0&&t.k_();break}r=s.batchId,Yy(e,s)}catch(s){await jr(e,s)}Zu(e)&&ec(e)}function Xy(n){return Bt(n)&&n.Ia.length<10}function Yy(n,e){n.Ia.push(e);const t=wt(n);t.N_()&&t.ea&&t.ta(e.mutations)}function Zu(n){return Bt(n)&&!wt(n).O_()&&n.Ia.length>0}function ec(n){wt(n).start()}async function Jy(n){wt(n).ia()}async function Zy(n){const e=wt(n);for(const t of n.Ia)e.ta(t.mutations)}async function eE(n,e,t){const r=n.Ia.shift(),s=Fi.from(r,e,t);await Ju(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await os(n)}async function tE(n,e){e&&wt(n).ea&&await async function(r,s){if(function(a){return $v(a)&&a!==O.ABORTED}(s.code)){const o=r.Ia.shift();wt(r).L_(),await Ju(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await os(r)}}(n,e),Zu(n)&&ec(n)}async function al(n,e){const t=Y(n);t.asyncQueue.verifyOperationInProgress(),F($t,"RemoteStore received new credentials");const r=Bt(t);t.da.add(3),await Yn(t),r&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await is(t)}async function nE(n,e){const t=Y(n);e?(t.da.delete(2),await is(t)):e||(t.da.add(2),await Yn(t),t.Va.set("Unknown"))}function cn(n){return n.fa||(n.fa=function(t,r,s){const o=Y(t);return o.oa(),new By(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{e_:Gy.bind(null,n),n_:Ky.bind(null,n),i_:Wy.bind(null,n),Y_:Qy.bind(null,n)}),n.Aa.push(async e=>{e?(n.fa.L_(),Qi(n)?Wi(n):n.Va.set("Unknown")):(await n.fa.stop(),Yu(n))})),n.fa}function wt(n){return n.ga||(n.ga=function(t,r,s){const o=Y(t);return o.oa(),new Uy(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:Jy.bind(null,n),i_:tE.bind(null,n),na:Zy.bind(null,n),ra:eE.bind(null,n)}),n.Aa.push(async e=>{e?(n.ga.L_(),await os(n)):(await n.ga.stop(),n.Ia.length>0&&(F($t,`Stopping write stream with ${n.Ia.length} pending writes`),n.Ia=[]))})),n.ga}/**
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
 */class Xi{constructor(e,t,r,s,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new vt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,o){const a=Date.now()+r,u=new Xi(e,t,a,s,o);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yi(n,e){if(it("AsyncQueue",`${e}: ${n}`),un(n))return new q(O.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Yt{static emptySet(e){return new Yt(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||G.comparator(t.key,r.key):(t,r)=>G.comparator(t.key,r.key),this.keyedMap=Rn(),this.sortedSet=new pe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Yt)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Yt;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class ll{constructor(){this.pa=new pe(G.comparator)}track(e){const t=e.doc.key,r=this.pa.get(t);r?e.type!==0&&r.type===3?this.pa=this.pa.insert(t,e):e.type===3&&r.type!==1?this.pa=this.pa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.pa=this.pa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.pa=this.pa.remove(t):e.type===1&&r.type===2?this.pa=this.pa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):K(63341,{Vt:e,ya:r}):this.pa=this.pa.insert(t,e)}wa(){const e=[];return this.pa.inorderTraversal((t,r)=>{e.push(r)}),e}}class rn{constructor(e,t,r,s,o,a,u,h,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,o){const a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new rn(e,t,Yt.emptySet(t),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class rE{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class sE{constructor(){this.queries=ul(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=Y(t),o=s.queries;s.queries=ul(),o.forEach((a,u)=>{for(const h of u.Sa)h.onError(r)})})(this,new q(O.ABORTED,"Firestore shutting down"))}}function ul(){return new Ft(n=>yu(n),Zr)}async function iE(n,e){const t=Y(n);let r=3;const s=e.query;let o=t.queries.get(s);o?!o.Da()&&e.va()&&(r=2):(o=new rE,r=e.va()?0:1);try{switch(r){case 0:o.ba=await t.onListen(s,!0);break;case 1:o.ba=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const u=Yi(a,`Initialization of query '${Gt(e.query)}' failed`);return void e.onError(u)}t.queries.set(s,o),o.Sa.push(e),e.Fa(t.onlineState),o.ba&&e.Ma(o.ba)&&Ji(t)}async function oE(n,e){const t=Y(n),r=e.query;let s=3;const o=t.queries.get(r);if(o){const a=o.Sa.indexOf(e);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?s=e.va()?0:1:!o.Da()&&e.va()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function aE(n,e){const t=Y(n);let r=!1;for(const s of e){const o=s.query,a=t.queries.get(o);if(a){for(const u of a.Sa)u.Ma(s)&&(r=!0);a.ba=s}}r&&Ji(t)}function lE(n,e,t){const r=Y(n),s=r.queries.get(e);if(s)for(const o of s.Sa)o.onError(t);r.queries.delete(e)}function Ji(n){n.Ca.forEach(e=>{e.next()})}var pi,cl;(cl=pi||(pi={})).xa="default",cl.Cache="cache";class uE{constructor(e,t,r){this.query=e,this.Oa=t,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=r||{}}Ma(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new rn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Na?this.La(e)&&(this.Oa.next(e),t=!0):this.ka(e,this.onlineState)&&(this.qa(e),t=!0),this.Ba=e,t}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let t=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),t=!0),t}ka(e,t){if(!e.fromCache||!this.va())return!0;const r=t!=="Offline";return(!this.options.Qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}La(e){if(e.docChanges.length>0)return!0;const t=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}qa(e){e=rn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==pi.Cache}}/**
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
 */class tc{constructor(e){this.key=e}}class nc{constructor(e){this.key=e}}class cE{constructor(e,t){this.query=e,this.Ha=t,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ne(),this.mutatedKeys=ne(),this.Za=Eu(e),this.Xa=new Yt(this.Za)}get eu(){return this.Ha}tu(e,t){const r=t?t.nu:new ll,s=t?t.Xa:this.Xa;let o=t?t.mutatedKeys:this.mutatedKeys,a=s,u=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,v)=>{const y=s.get(p),V=es(this.query,v)?v:null,M=!!y&&this.mutatedKeys.has(y.key),x=!!V&&(V.hasLocalMutations||this.mutatedKeys.has(V.key)&&V.hasCommittedMutations);let L=!1;y&&V?y.data.isEqual(V.data)?M!==x&&(r.track({type:3,doc:V}),L=!0):this.ru(y,V)||(r.track({type:2,doc:V}),L=!0,(h&&this.Za(V,h)>0||d&&this.Za(V,d)<0)&&(u=!0)):!y&&V?(r.track({type:0,doc:V}),L=!0):y&&!V&&(r.track({type:1,doc:y}),L=!0,(h||d)&&(u=!0)),L&&(V?(a=a.add(V),o=x?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{Xa:a,nu:r,Cs:u,mutatedKeys:o}}ru(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const o=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;const a=e.nu.wa();a.sort((p,v)=>function(V,M){const x=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K(20277,{Vt:L})}};return x(V)-x(M)}(p.type,v.type)||this.Za(p.doc,v.doc)),this.iu(r),s=s!=null&&s;const u=t&&!s?this.su():[],h=this.Ya.size===0&&this.current&&!s?1:0,d=h!==this.Ja;return this.Ja=h,a.length!==0||d?{snapshot:new rn(this.query,e.Xa,o,a,e.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),ou:u}:{ou:u}}Fa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new ll,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}su(){if(!this.current)return[];const e=this.Ya;this.Ya=ne(),this.Xa.forEach(r=>{this._u(r.key)&&(this.Ya=this.Ya.add(r.key))});const t=[];return e.forEach(r=>{this.Ya.has(r)||t.push(new nc(r))}),this.Ya.forEach(r=>{e.has(r)||t.push(new tc(r))}),t}au(e){this.Ha=e.$s,this.Ya=ne();const t=this.tu(e.documents);return this.applyChanges(t,!0)}uu(){return rn.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const Zi="SyncEngine";class hE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class dE{constructor(e){this.key=e,this.cu=!1}}class fE{constructor(e,t,r,s,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.lu={},this.hu=new Ft(u=>yu(u),Zr),this.Pu=new Map,this.Tu=new Set,this.Iu=new pe(G.comparator),this.Eu=new Map,this.du=new ji,this.Au={},this.Ru=new Map,this.Vu=nn.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function pE(n,e,t=!0){const r=lc(n);let s;const o=r.hu.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.uu()):s=await rc(r,e,t,!0),s}async function mE(n,e){const t=lc(n);await rc(t,e,!0,!1)}async function rc(n,e,t,r){const s=await Dy(n.localStore,Qe(e)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let u;return r&&(u=await gE(n,e,o,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Qu(n.remoteStore,s),u}async function gE(n,e,t,r,s){n.fu=(v,y,V)=>async function(x,L,J,Q){let Z=L.view.tu(J);Z.Cs&&(Z=await nl(x.localStore,L.query,!1).then(({documents:w})=>L.view.tu(w,Z)));const fe=Q&&Q.targetChanges.get(L.targetId),Be=Q&&Q.targetMismatches.get(L.targetId)!=null,we=L.view.applyChanges(Z,x.isPrimaryClient,fe,Be);return dl(x,L.targetId,we.ou),we.snapshot}(n,v,y,V);const o=await nl(n.localStore,e,!0),a=new cE(e,o.$s),u=a.tu(o.documents),h=Xn.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(u,n.isPrimaryClient,h);dl(n,t,d.ou);const p=new hE(e,t,a);return n.hu.set(e,p),n.Pu.has(t)?n.Pu.get(t).push(e):n.Pu.set(t,[e]),d.snapshot}async function _E(n,e,t){const r=Y(n),s=r.hu.get(e),o=r.Pu.get(s.targetId);if(o.length>1)return r.Pu.set(s.targetId,o.filter(a=>!Zr(a,e))),void r.hu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await di(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Gi(r.remoteStore,s.targetId),mi(r,s.targetId)}).catch(ln)):(mi(r,s.targetId),await di(r.localStore,s.targetId,!0))}async function vE(n,e){const t=Y(n),r=t.hu.get(e),s=t.Pu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Gi(t.remoteStore,r.targetId))}async function yE(n,e,t){const r=PE(n);try{const s=await function(a,u){const h=Y(a),d=Ee.now(),p=u.reduce((V,M)=>V.add(M.key),ne());let v,y;return h.persistence.runTransaction("Locally write mutations","readwrite",V=>{let M=ot(),x=ne();return h.Bs.getEntries(V,p).next(L=>{M=L,M.forEach((J,Q)=>{Q.isValidDocument()||(x=x.add(J))})}).next(()=>h.localDocuments.getOverlayedDocuments(V,M)).next(L=>{v=L;const J=[];for(const Q of u){const Z=Dv(Q,v.get(Q.key).overlayedDocument);Z!=null&&J.push(new St(Q.key,Z,du(Z.value.mapValue),Xe.exists(!0)))}return h.mutationQueue.addMutationBatch(V,d,J,u)}).next(L=>{y=L;const J=L.applyToLocalDocumentSet(v,x);return h.documentOverlayCache.saveOverlays(V,L.batchId,J)})}).then(()=>({batchId:y.batchId,changes:Iu(v)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,u,h){let d=a.Au[a.currentUser.toKey()];d||(d=new pe(ee)),d=d.insert(u,h),a.Au[a.currentUser.toKey()]=d}(r,s.batchId,t),await Jn(r,s.changes),await os(r.remoteStore)}catch(s){const o=Yi(s,"Failed to persist write");t.reject(o)}}async function sc(n,e){const t=Y(n);try{const r=await Ry(t.localStore,e);e.targetChanges.forEach((s,o)=>{const a=t.Eu.get(o);a&&(ue(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.cu=!0:s.modifiedDocuments.size>0?ue(a.cu,14607):s.removedDocuments.size>0&&(ue(a.cu,42227),a.cu=!1))}),await Jn(t,r,e)}catch(r){await ln(r)}}function hl(n,e,t){const r=Y(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.hu.forEach((o,a)=>{const u=a.view.Fa(e);u.snapshot&&s.push(u.snapshot)}),function(a,u){const h=Y(a);h.onlineState=u;let d=!1;h.queries.forEach((p,v)=>{for(const y of v.Sa)y.Fa(u)&&(d=!0)}),d&&Ji(h)}(r.eventManager,e),s.length&&r.lu.Y_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function EE(n,e,t){const r=Y(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),o=s&&s.key;if(o){let a=new pe(G.comparator);a=a.insert(o,Me.newNoDocument(o,X.min()));const u=ne().add(o),h=new rs(X.min(),new Map,new pe(ee),a,u);await sc(r,h),r.Iu=r.Iu.remove(o),r.Eu.delete(e),eo(r)}else await di(r.localStore,e,!1).then(()=>mi(r,e,t)).catch(ln)}async function TE(n,e){const t=Y(n),r=e.batch.batchId;try{const s=await Vy(t.localStore,e);oc(t,r,null),ic(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Jn(t,s)}catch(s){await ln(s)}}async function IE(n,e,t){const r=Y(n);try{const s=await function(a,u){const h=Y(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return h.mutationQueue.lookupMutationBatch(d,u).next(v=>(ue(v!==null,37113),p=v.keys(),h.mutationQueue.removeMutationBatch(d,v))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,p,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>h.localDocuments.getDocuments(d,p))})}(r.localStore,e);oc(r,e,t),ic(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Jn(r,s)}catch(s){await ln(s)}}function ic(n,e){(n.Ru.get(e)||[]).forEach(t=>{t.resolve()}),n.Ru.delete(e)}function oc(n,e,t){const r=Y(n);let s=r.Au[r.currentUser.toKey()];if(s){const o=s.get(e);o&&(t?o.reject(t):o.resolve(),s=s.remove(e)),r.Au[r.currentUser.toKey()]=s}}function mi(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Pu.get(e))n.hu.delete(r),t&&n.lu.gu(r,t);n.Pu.delete(e),n.isPrimaryClient&&n.du.Hr(e).forEach(r=>{n.du.containsKey(r)||ac(n,r)})}function ac(n,e){n.Tu.delete(e.path.canonicalString());const t=n.Iu.get(e);t!==null&&(Gi(n.remoteStore,t),n.Iu=n.Iu.remove(e),n.Eu.delete(t),eo(n))}function dl(n,e,t){for(const r of t)r instanceof tc?(n.du.addReference(r.key,e),wE(n,r)):r instanceof nc?(F(Zi,"Document no longer in limbo: "+r.key),n.du.removeReference(r.key,e),n.du.containsKey(r.key)||ac(n,r.key)):K(19791,{pu:r})}function wE(n,e){const t=e.key,r=t.path.canonicalString();n.Iu.get(t)||n.Tu.has(r)||(F(Zi,"New document in limbo: "+t),n.Tu.add(r),eo(n))}function eo(n){for(;n.Tu.size>0&&n.Iu.size<n.maxConcurrentLimboResolutions;){const e=n.Tu.values().next().value;n.Tu.delete(e);const t=new G(ge.fromString(e)),r=n.Vu.next();n.Eu.set(r,new dE(t)),n.Iu=n.Iu.insert(t,r),Qu(n.remoteStore,new ft(Qe($i(t.path)),r,"TargetPurposeLimboResolution",Qr.le))}}async function Jn(n,e,t){const r=Y(n),s=[],o=[],a=[];r.hu.isEmpty()||(r.hu.forEach((u,h)=>{a.push(r.fu(h,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){const v=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(h.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(h.targetId,v?"current":"not-current")}if(d){s.push(d);const v=qi.Rs(h.targetId,d);o.push(v)}}))}),await Promise.all(a),r.lu.Y_(s),await async function(h,d){const p=Y(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>C.forEach(d,y=>C.forEach(y.ds,V=>p.persistence.referenceDelegate.addReference(v,y.targetId,V)).next(()=>C.forEach(y.As,V=>p.persistence.referenceDelegate.removeReference(v,y.targetId,V)))))}catch(v){if(!un(v))throw v;F(zi,"Failed to update sequence numbers: "+v)}for(const v of d){const y=v.targetId;if(!v.fromCache){const V=p.xs.get(y),M=V.snapshotVersion,x=V.withLastLimboFreeSnapshotVersion(M);p.xs=p.xs.insert(y,x)}}}(r.localStore,o))}async function AE(n,e){const t=Y(n);if(!t.currentUser.isEqual(e)){F(Zi,"User change. New user:",e.toKey());const r=await zu(t.localStore,e);t.currentUser=e,function(o,a){o.Ru.forEach(u=>{u.forEach(h=>{h.reject(new q(O.CANCELLED,a))})}),o.Ru.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Jn(t,r.ks)}}function bE(n,e){const t=Y(n),r=t.Eu.get(e);if(r&&r.cu)return ne().add(r.key);{let s=ne();const o=t.Pu.get(e);if(!o)return s;for(const a of o){const u=t.hu.get(a);s=s.unionWith(u.view.eu)}return s}}function lc(n){const e=Y(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=sc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=EE.bind(null,e),e.lu.Y_=aE.bind(null,e.eventManager),e.lu.gu=lE.bind(null,e.eventManager),e}function PE(n){const e=Y(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=TE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=IE.bind(null,e),e}class Hr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ss(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,t){return null}Cu(e,t){return null}Du(e){return Sy(this.persistence,new Ay,e.initialUser,this.serializer)}Su(e){return new qu(Hi.fi,this.serializer)}bu(e){return new Ly}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Hr.provider={build:()=>new Hr};class SE extends Hr{constructor(e){super(),this.cacheSizeBytes=e}vu(e,t){ue(this.persistence.referenceDelegate instanceof Ur,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new uy(r,e.asyncQueue,t)}Su(e){const t=this.cacheSizeBytes!==void 0?xe.withCacheSize(this.cacheSizeBytes):xe.DEFAULT;return new qu(r=>Ur.fi(r,t),this.serializer)}}class gi{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>hl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=AE.bind(null,this.syncEngine),await nE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new sE}()}createDatastore(e){const t=ss(e.databaseInfo.databaseId),r=function(o){return new Fy(o)}(e.databaseInfo);return function(o,a,u,h){return new Hy(o,a,u,h)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,o,a,u){return new zy(r,s,o,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>hl(this.syncEngine,t,0),function(){return il.C()?new il:new My}())}createSyncEngine(e,t){return function(s,o,a,u,h,d,p){const v=new fE(s,o,a,u,h,d);return p&&(v.mu=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const o=Y(s);F($t,"RemoteStore shutting down."),o.da.add(5),await Yn(o),o.Ra.shutdown(),o.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}gi.provider={build:()=>new gi};/**
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
 */class VE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):it("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const At="FirestoreClient";class RE{constructor(e,t,r,s,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Le.UNAUTHENTICATED,this.clientId=nu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{F(At,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(F(At,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Yi(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function qs(n,e){n.asyncQueue.verifyOperationInProgress(),F(At,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await zu(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function fl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await kE(n);F(At,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>al(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>al(e.remoteStore,s)),n._onlineComponents=e}async function kE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){F(At,"Using user provided OfflineComponentProvider");try{await qs(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===O.FAILED_PRECONDITION||s.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Jt("Error using user provided cache. Falling back to memory cache: "+t),await qs(n,new Hr)}}else F(At,"Using default OfflineComponentProvider"),await qs(n,new SE(void 0));return n._offlineComponents}async function uc(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(F(At,"Using user provided OnlineComponentProvider"),await fl(n,n._uninitializedComponentsProvider._online)):(F(At,"Using default OnlineComponentProvider"),await fl(n,new gi))),n._onlineComponents}function CE(n){return uc(n).then(e=>e.syncEngine)}async function DE(n){const e=await uc(n),t=e.eventManager;return t.onListen=pE.bind(null,e.syncEngine),t.onUnlisten=_E.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=mE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=vE.bind(null,e.syncEngine),t}function NE(n,e,t={}){const r=new vt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const p=new VE({next:y=>{p.xu(),a.enqueueAndForget(()=>oE(o,v));const V=y.docs.has(u);!V&&y.fromCache?d.reject(new q(O.UNAVAILABLE,"Failed to get document because the client is offline.")):V&&y.fromCache&&h&&h.source==="server"?d.reject(new q(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(y)},error:y=>d.reject(y)}),v=new uE($i(u.path),p,{includeMetadataChanges:!0,Qa:!0});return iE(o,v)}(await DE(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function cc(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const pl=new Map;/**
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
 */function LE(n,e,t){if(!t)throw new q(O.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function ME(n,e,t,r){if(e===!0&&r===!0)throw new q(O.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ml(n){if(!G.isDocumentKey(n))throw new q(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function to(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":K(12329,{type:typeof n})}function xt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new q(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=to(n);throw new q(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */const hc="firestore.googleapis.com",gl=!0;class _l{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=hc,this.ssl=gl}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:gl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Hu;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ay)throw new q(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ME("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cc((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new q(O.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new q(O.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new q(O.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class no{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _l({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _l(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new $_;switch(r.type){case"firstParty":return new U_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=pl.get(t);r&&(F("ComponentProvider","Removing Datastore"),pl.delete(t),r.terminate())}(this),Promise.resolve()}}function OE(n,e,t,r={}){var s;n=xt(n,no);const o=Ri(e),a=n._getSettings(),u=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),h=`${e}:${t}`;o&&(dg(`https://${h}`),gg("Firestore",!0)),a.host!==hc&&a.host!==h&&Jt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:h,ssl:o,emulatorOptions:r});if(!Cr(d,u)&&(n._setSettings(d),r.mockUserToken)){let p,v;if(typeof r.mockUserToken=="string")p=r.mockUserToken,v=Le.MOCK_USER;else{p=fg(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new q(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new Le(y)}n._authCredentials=new x_(new eu(p,v))}}/**
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
 */class ro{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ro(this.firestore,e,this._query)}}class He{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new He(this.firestore,e,this._key)}}class Gn extends ro{constructor(e,t,r){super(e,t,$i(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new He(this.firestore,null,new G(e))}withConverter(e){return new Gn(this.firestore,e,this._path)}}function $E(n,e,...t){if(n=Mt(n),arguments.length===1&&(e=nu.newId()),LE("doc","path",e),n instanceof no){const r=ge.fromString(e,...t);return ml(r),new He(n,null,new G(r))}{if(!(n instanceof He||n instanceof Gn))throw new q(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ge.fromString(e,...t));return ml(r),new He(n.firestore,n instanceof Gn?n.converter:null,new G(r))}}/**
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
 */const vl="AsyncQueue";class yl{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new Ku(this,"async_queue_retry"),this.rc=()=>{const r=Hs();r&&F(vl,"Visibility state changed to "+r.visibilityState),this.x_.b_()},this.sc=e;const t=Hs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const t=Hs();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const t=new vt;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!un(e))throw e;F(vl,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const t=this.sc.then(()=>(this.ec=!0,e().catch(r=>{throw this.Xu=r,this.ec=!1,it("INTERNAL UNHANDLED ERROR: ",El(r)),r}).then(r=>(this.ec=!1,r))));return this.sc=t,t}enqueueAfterDelay(e,t,r){this.oc(),this.nc.indexOf(e)>-1&&(t=0);const s=Xi.createAndSchedule(this,e,t,r,o=>this.uc(o));return this.Zu.push(s),s}oc(){this.Xu&&K(47125,{cc:El(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const t of this.Zu)if(t.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Zu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const t=this.Zu.indexOf(e);this.Zu.splice(t,1)}}function El(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class as extends no{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new yl,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new yl(e),this._firestoreClient=void 0,await e}}}function xE(n,e){const t=typeof n=="object"?n:P_(),r=typeof n=="string"?n:Mr,s=T_(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=cg("firestore");o&&OE(s,...o)}return s}function dc(n){if(n._terminated)throw new q(O.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||FE(n),n._firestoreClient}function FE(n){var e,t,r;const s=n._freezeSettings(),o=function(u,h,d,p){return new nv(u,h,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,cc(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new RE(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class sn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new sn(Ve.fromBase64String(e))}catch(t){throw new q(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new sn(Ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ls{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new q(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class us{constructor(e){this._methodName=e}}/**
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
 */class so{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new q(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new q(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}}/**
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
 */class io{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,e._values)}}/**
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
 */const BE=/^__.*__$/;class UE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new St(e,this.data,this.fieldMask,t,this.fieldTransforms):new Qn(e,this.data,t,this.fieldTransforms)}}class fc{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new St(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function pc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K(40011,{Ic:n})}}class oo{constructor(e,t,r,s,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Ec(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(e){return new oo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.dc({path:r,Rc:!1});return s.Vc(e),s}mc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.dc({path:r,Rc:!1});return s.Ec(),s}fc(e){return this.dc({path:void 0,Rc:!0})}gc(e){return qr(e,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ec(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vc(this.path.get(e))}Vc(e){if(e.length===0)throw this.gc("Document fields must not be empty");if(pc(this.Ic)&&BE.test(e))throw this.gc('Document fields cannot begin and end with "__"')}}class jE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ss(e)}bc(e,t,r,s=!1){return new oo({Ic:e,methodName:t,wc:r,path:Pe.emptyPath(),Rc:!1,yc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mc(n){const e=n._freezeSettings(),t=ss(n._databaseId);return new jE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function HE(n,e,t,r,s,o={}){const a=n.bc(o.merge||o.mergeFields?2:0,e,t,s);lo("Data must be an object, but it was:",a,r);const u=gc(r,a);let h,d;if(o.merge)h=new je(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const v of o.mergeFields){const y=_i(e,v,t);if(!a.contains(y))throw new q(O.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);vc(p,y)||p.push(y)}h=new je(p),d=a.fieldTransforms.filter(v=>h.covers(v.field))}else h=null,d=a.fieldTransforms;return new UE(new Fe(u),h,d)}class cs extends us{_toFieldTransform(e){if(e.Ic!==2)throw e.Ic===1?e.gc(`${this._methodName}() can only appear at the top level of your update data`):e.gc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof cs}}class ao extends us{constructor(e,t){super(e),this.Dc=t}_toFieldTransform(e){const t=new zn(e.serializer,bu(e.serializer,this.Dc));return new Vv(e.path,t)}isEqual(e){return e instanceof ao&&this.Dc===e.Dc}}function qE(n,e,t,r){const s=n.bc(1,e,t);lo("Data must be an object, but it was:",s,r);const o=[],a=Fe.empty();Pt(r,(h,d)=>{const p=uo(e,h,t);d=Mt(d);const v=s.mc(p);if(d instanceof cs)o.push(p);else{const y=hs(d,v);y!=null&&(o.push(p),a.set(p,y))}});const u=new je(o);return new fc(a,u,s.fieldTransforms)}function zE(n,e,t,r,s,o){const a=n.bc(1,e,t),u=[_i(e,r,t)],h=[s];if(o.length%2!=0)throw new q(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<o.length;y+=2)u.push(_i(e,o[y])),h.push(o[y+1]);const d=[],p=Fe.empty();for(let y=u.length-1;y>=0;--y)if(!vc(d,u[y])){const V=u[y];let M=h[y];M=Mt(M);const x=a.mc(V);if(M instanceof cs)d.push(V);else{const L=hs(M,x);L!=null&&(d.push(V),p.set(V,L))}}const v=new je(d);return new fc(p,v,a.fieldTransforms)}function hs(n,e){if(_c(n=Mt(n)))return lo("Unsupported field value:",e,n),gc(n,e);if(n instanceof us)return function(r,s){if(!pc(s.Ic))throw s.gc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.gc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Rc&&e.Ic!==4)throw e.gc("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const u of r){let h=hs(u,s.fc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,e)}return function(r,s){if((r=Mt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return bu(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Ee.fromDate(r);return{timestampValue:Br(s.serializer,o)}}if(r instanceof Ee){const o=new Ee(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Br(s.serializer,o)}}if(r instanceof so)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof sn)return{bytesValue:Ou(s.serializer,r._byteString)};if(r instanceof He){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.gc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ui(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof io)return function(a,u){return{mapValue:{fields:{[cu]:{stringValue:hu},[Or]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw u.gc("VectorValues must only contain numeric values.");return xi(u.serializer,d)})}}}}}}(r,s);throw s.gc(`Unsupported field value: ${to(r)}`)}(n,e)}function gc(n,e){const t={};return su(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pt(n,(r,s)=>{const o=hs(s,e.Ac(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function _c(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ee||n instanceof so||n instanceof sn||n instanceof He||n instanceof us||n instanceof io)}function lo(n,e,t){if(!_c(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=to(t);throw r==="an object"?e.gc(n+" a custom object"):e.gc(n+" "+r)}}function _i(n,e,t){if((e=Mt(e))instanceof ls)return e._internalPath;if(typeof e=="string")return uo(n,e);throw qr("Field path arguments must be of type string or ",n,!1,void 0,t)}const GE=new RegExp("[~\\*/\\[\\]]");function uo(n,e,t){if(e.search(GE)>=0)throw qr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ls(...e.split("."))._internalPath}catch{throw qr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function qr(n,e,t,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new q(O.INVALID_ARGUMENT,u+n+h)}function vc(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class yc{constructor(e,t,r,s,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new He(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new KE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ec("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class KE extends yc{data(){return super.data()}}function Ec(n,e){return typeof e=="string"?uo(n,e):e instanceof ls?e._internalPath:e._delegate._internalPath}class WE{convertValue(e,t="none"){switch(It(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Tt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw K(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Pt(e,(s,o)=>{r[s]=this.convertValue(o,t)}),r}convertVectorValue(e){var t,r,s;const o=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[Or].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>_e(a.doubleValue));return new io(o)}convertGeoPoint(e){return new so(_e(e.latitude),_e(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Yr(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Bn(e));default:return null}}convertTimestamp(e){const t=Et(e);return new Ee(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ge.fromString(e);ue(ju(r),9688,{name:e});const s=new Un(r.get(1),r.get(3)),o=new G(r.popFirst(5));return s.isEqual(t)||it(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
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
 */function QE(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
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
 */class XE{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Tc extends yc{constructor(e,t,r,s,o,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new YE(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ec("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class YE extends Tc{data(e={}){return super.data(e)}}/**
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
 */function Tl(n){n=xt(n,He);const e=xt(n.firestore,as);return NE(dc(e),n._key).then(t=>tT(e,n,t))}class JE extends WE{constructor(e){super(),this.firestore=e}convertBytes(e){return new sn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new He(this.firestore,null,t)}}function ZE(n,e,t){n=xt(n,He);const r=xt(n.firestore,as),s=QE(n.converter,e);return Ic(r,[HE(mc(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Xe.none())])}function eT(n,e,t,...r){n=xt(n,He);const s=xt(n.firestore,as),o=mc(s);let a;return a=typeof(e=Mt(e))=="string"||e instanceof ls?zE(o,"updateDoc",n._key,e,t,r):qE(o,"updateDoc",n._key,e),Ic(s,[a.toMutation(n._key,Xe.exists(!0))])}function Ic(n,e){return function(r,s){const o=new vt;return r.asyncQueue.enqueueAndForget(async()=>yE(await CE(r),s,o)),o.promise}(dc(n),e)}function tT(n,e,t){const r=t.docs.get(e._key),s=new JE(n);return new Tc(n,s,e._key,r,new XE(t.hasPendingWrites,t.fromCache),e.converter)}function nT(n){return new ao("increment",n)}(function(e,t=!0){(function(s){an=s})(b_),Nr(new $n("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new as(new F_(r.getProvider("auth-internal")),new j_(a,r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new q(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Un(d.options.projectId,p)}(a,s),a);return o=Object.assign({useFetchStreams:t},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),Xt(Pa,Sa,e),Xt(Pa,Sa,"esm2017")})();var rT="firebase",sT="11.9.0";/**
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
 */Xt(rT,sT,"app");const iT={apiKey:"AIzaSyA7DEXo4vLvGinpIrOhhCXtoawV0l4zBBc",authDomain:"holybear-goodbad.firebaseapp.com",projectId:"holybear-goodbad",storageBucket:"holybear-goodbad.appspot.com",messagingSenderId:"227880753618",appId:"1:227880753618:web:280ac7b02894ea857cd00b",measurementId:"G-1FQ8WE5HHE"},oT=ql(iT),aT=xE(oT);async function Il(n,e={}){try{const t=$E(aT,"views",n),r=await Tl(t);return e.onlyRead?r.exists()&&r.data().count||0:r.exists()?(await eT(t,{count:nT(1)}),(await Tl(t)).data().count||0):(await ZE(t,{count:1}),1)}catch(t){throw console.error("[view-count.js] Firestore error:",t),t}}const lT={class:"view-count"},uT={__name:"ViewCounter",props:{slug:String},setup(n){const e=n,t=le(null);function r(o){return JSON.parse(localStorage.getItem("viewedSlugs")||"[]").includes(o)}function s(o){const a=JSON.parse(localStorage.getItem("viewedSlugs")||"[]");a.includes(o)||(a.push(o),localStorage.setItem("viewedSlugs",JSON.stringify(a)))}return at(async()=>{if(e.slug)try{r(e.slug)?t.value=await Il(e.slug,{onlyRead:!0}):(t.value=await Il(e.slug),s(e.slug))}catch(o){t.value="錯誤",console.error("[ViewCounter] 讀取失敗:",o)}else t.value="無slug",console.warn("[ViewCounter] slug 為空")}),(o,a)=>(T(),R("span",lT,[a[0]||(a[0]=D("img",{src:Zm,alt:"人氣",class:"fire-icon",title:"人氣"},null,-1)),ze(" "+ie(t.value===null?"載入中...":t.value),1)]))}},cT=z(uT,[["__scopeId","data-v-8da17ede"]]),hT={key:0,class:"blog-post-header-injected"},dT={class:"blog-post-title"},fT={key:0,class:"blog-post-meta-row"},pT={class:"blog-post-date-in-content"},mT={style:{float:"right"}},gT={__name:"MyCustomLayout",setup(n){const{frontmatter:e,page:t}=wl(),r=W(()=>t.value&&(t.value.path==="/"||t.value.path==="/index.html")),s=W(()=>e.value?e.value.title||"無標題文章":"frontmatter.value is UNDEFINED"),o=W(()=>{var u,h,d;return((u=e.value)==null?void 0:u.slug)||((h=t.value)==null?void 0:h.path)||((d=e.value)==null?void 0:d.title)||"unknown"}),a=W(()=>{var u;if((u=e.value)!=null&&u.date){const h=new Date(e.value.date),d=new Date(h.toLocaleString("en-US",{timeZone:"Asia/Taipei"})),p=d.getFullYear(),v=String(d.getMonth()+1).padStart(2,"0"),y=String(d.getDate()).padStart(2,"0"),V=String(d.getHours()).padStart(2,"0"),M=String(d.getMinutes()).padStart(2,"0");return`${p}-${v}-${y} ${V}:${M}`}return""});return(u,h)=>{const d=bt("ClientOnly");return T(),H(b(Jm).Layout,null,{"doc-before":N(()=>[r.value?B("",!0):(T(),R("div",hT,[D("h1",dT,ie(s.value),1),b(e).category&&b(e).category.length||b(e).tag&&b(e).tag.length?(T(),R("div",fT,[(T(!0),R(ae,null,Se(b(e).category,p=>(T(),R("span",{key:"cat-"+p,class:"category"},ie(p),1))),128)),(T(!0),R(ae,null,Se(b(e).tag,p=>(T(),R("span",{key:"tag-"+p,class:"tag"},ie(p),1))),128))])):B("",!0),D("p",pT,[b(e).author?(T(),R(ae,{key:0},[ze("作者："+ie(b(e).author),1)],64)):B("",!0),b(e).author&&a.value?(T(),R(ae,{key:1},[ze("｜")],64)):B("",!0),a.value?(T(),R(ae,{key:2},[ze(ie(a.value),1)],64)):B("",!0),D("span",mT,[j(d,null,{default:N(()=>[j(cT,{slug:o.value},null,8,["slug"])]),_:1})])]),h[0]||(h[0]=D("div",{class:"blog-post-date-divider"},null,-1))]))]),"doc-after":N(()=>h[1]||(h[1]=[])),_:1})}}},_T=z(gT,[["__scopeId","data-v-ce99e747"]]),ET={Layout:_T};export{ET as R};
