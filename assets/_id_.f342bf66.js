import{d as $,u as j,f as c,q as d,m as F,y as I,s as M,r as O,o as e,c as T,w as y,T as q,a as t,b as o,F as g,v as x,g as z,h as b,x as k,t as l,i}from"./vendor.c6c2e2cc.js";import{c as D,a as E,d as A}from"./api.3224e238.js";import{R as w}from"./index.58b8fc7c.js";var C={};const G={key:0,id:"posts",class:"pt-20"},H={class:"text-left"},J={class:"p-4"},K={class:"font-semibold mb-2 text-2xl transition ease-in-out delay-50 hover:-translate-y-1 hover:underline duration-100"},Q={class:"text-gray-700 mb-4"},U={class:"font-mono flex items-center justify-end text-xs flex-wrap"},W={class:"ml-5 opacity-80 mt-2"},X={class:"text-yellow-600"},Y={class:"pb-10"},Z={class:"text-center text-sm"},ee={class:"pagination text-md flex items-center justify-between",role:"navigation"},te={key:1},se={key:3},oe=$({setup(ne){const p=j(),r=c(()=>parseInt(p.params.id,10)),u=d(1),R=c(()=>r.value<u.value),N=c(()=>r.value>1),P=d(),B=F();I(()=>p.params.id,n=>{h(parseInt(n,10))});const m=n=>{B.push({name:"list",params:{id:r.value+n}})},v=d(!1),f=d([]),L=c(()=>f.value);function S(n){return n.thumbnail?`background-image: url(${n.thumbnail});`:""}function h(n=1){w.loading_start(),E(r.value).then(a=>{f.value=a.items,u.value=Math.ceil(a.total_count/10),v.value=!0,window.scroll({top:0,left:0,behavior:"smooth"}),w.loading_end()},a=>{})}return M(()=>{console.log("------------- "),document.title=D.site.name,h(r.value)}),(n,a)=>{const V=O("router-link");return e(),T(q,{name:"fade"},{default:y(()=>[t("section",{ref_key:"sectionRef",ref:P,class:"md:px-15vw"},[v.value?(e(),o("div",G,[(e(!0),o(g,null,x(i(L),s=>(e(),o("div",{key:s.id,class:"rounded-lg shadow-md border border-red-100 p-5 mb-12"},[z(V,{to:"/detail/"+s.number},{default:y(()=>[t("div",H,[s.thumbnail!=null?(e(),o("div",{key:0,class:"rounded-lg h-64 bg-cover bg-center bg-no-repeat",style:b(S(s))},null,4)):k("",!0),t("div",J,[t("h2",K,l(s.title),1),t("p",Q,l(s.desc),1),t("div",U,[(e(!0),o(g,null,x(s.labels,_=>(e(),o("span",{key:_.id,style:b(_.style),class:"mt-2 label"},l(_.name),5))),128)),t("p",W,[t("span",X,l(i(A)(s.created_at)),1)])])])])]),_:2},1032,["to"])]))),128)),t("div",Y,[t("p",Z," Page "+l(i(r))+" of "+l(u.value),1),t("nav",ee,[i(N)?(e(),o("a",{key:0,class:"older-posts cursor-pointer hover:underline underline-gray-400",onClick:a[0]||(a[0]=s=>m(-1))},"\u2190 Newer Posts")):(e(),o("span",te)),i(R)?(e(),o("a",{key:2,class:"older-posts cursor-pointer hover:underline underline-gray-400",onClick:a[1]||(a[1]=s=>m(1))},"Older Posts \u2192")):(e(),o("span",se))])])])):k("",!0)],512)]),_:1})}}});typeof C=="function"&&C(oe);export{oe as default};
