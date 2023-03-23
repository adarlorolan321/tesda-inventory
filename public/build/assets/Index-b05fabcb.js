import{J as I,c as n,a as e,u as s,t as r,f as d,g as x,v as w,n as m,e as u,F as p,h as f,b as h,w as b,r as S,o as i}from"./app-df146a38.js";import{u as L}from"./Crud-f07ae118.js";import{A as P}from"./AdminLayout-fdb50f3b.js";const $={class:"card card-action"},A={class:"card-header"},T=e("div",{class:"card-action-title align-items-center"},[e("h5",{class:"card-title"},"SERVICES")],-1),B={class:"card-action-element"},M={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offCanvasForm","data-bs-backdrop":"static","aria-labelledby":"offCanvasFormLabel"},U={class:"offcanvas-header"},q={id:"offCanvasFormLabel",class:"offcanvas-title"},z={key:0,type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},H={class:"offcanvas-body mt-4 mx-0 flex-grow-0"},K={class:"form-group mb-3"},O=e("label",{for:""},"Service Name",-1),J={class:"invalid-feedback"},R={class:"form-group mb-3"},G=e("label",{for:""},"Code",-1),W={class:"invalid-feedback"},X=["disabled"],Y={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},Z=["disabled"],D={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},ee={class:"card-body"},se={class:"row justify-content-between"},te={class:"col-auto"},oe={class:"d-flex align-items-center gap-2"},ae=e("div",{class:"w-auto"},"Show",-1),ne={class:"flex-1"},ie=["value"],re=["value"],le=e("div",{class:"w-auto"},"entries",-1),de={class:"col-auto"},ce={class:"d-flex gap-2 align-items-center"},_e=e("div",{class:"w-auto"},"Search:",-1),ue={class:"flex-1"},ve=["value"],me={class:"table-responsive text-nowrap"},pe={class:"table"},fe={class:"table-light"},he=e("th",null,"Embed Code",-1),be=e("th",null,"Actions",-1),ye={class:"table-border-bottom-0"},ge={key:0},ke=e("td",{colspan:"999999",class:"text-center"}," No item found ",-1),Ce=[ke],xe={style:{width:"60%"}},we=e("td",{class:""},[e("a",{href:"#"},[e("i",{class:"fa-regular fa-copy ms-4",style:{"font-size":"22px"}})])],-1),Se={class:"d-flex gap-2"},Ee=["onClick"],Ne=e("i",{class:"ti ti-pencil"},null,-1),Qe=[Ne],Fe=["onClick"],Ve=e("i",{class:"ti ti-trash"},null,-1),je=[Ve],Ie={key:0,class:"card-footer py-3 border-top"},Le={class:"row justify-content-between"},Pe={class:"col-auto"},$e={class:"table_info"},Ae={class:"col-auto"},Te={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},Be={class:"pagination mb-0"},Me=["innerHTML"],Ue={layout:P},Je=Object.assign(Ue,{__name:"Index",setup(qe){I();const E={name:null,code:null},N="settings.services";let{paginatedData:l,form:a,createPromise:y,updatePromise:g,deletePromise:Q,handleCreate:k,serverQuery:c,handleServerQuery:_,handleEdit:F,formState:v}=L(E,N);return(ze,o)=>{const C=S("table-header"),V=S("inertia-link");return i(),n("div",$,[e("div",A,[T,e("div",B,[e("button",{class:"btn btn-primary",type:"button",onClick:o[0]||(o[0]=(...t)=>s(k)&&s(k)(...t)),"data-bs-toggle":"offcanvas","data-bs-target":"#offCanvasForm","aria-controls":"offCanvasForm"}," Add Service "),e("div",M,[e("div",U,[e("h5",q,r(s(v)=="create"?"Add":"Update")+" Service ",1),s(a).processing?d("",!0):(i(),n("button",z))]),e("div",H,[e("div",K,[O,x(e("input",{type:"text",class:m(["form-control",{"is-invalid":s(a).errors.name}]),"onUpdate:modelValue":o[1]||(o[1]=t=>s(a).name=t),onInput:o[2]||(o[2]=t=>s(a).clearErrors("name")),placeholder:"Enter name"},null,34),[[w,s(a).name]]),e("div",J,r(s(a).errors.name),1)]),e("div",R,[G,x(e("input",{type:"text",class:m(["form-control",{"is-invalid":s(a).errors.code}]),placeholder:"Enter code","onUpdate:modelValue":o[3]||(o[3]=t=>s(a).code=t),onInput:o[4]||(o[4]=t=>s(a).clearErrors("code"))},null,34),[[w,s(a).code]]),e("div",W,r(s(a).errors.code),1)]),s(v)=="create"?(i(),n("button",{key:0,class:"btn btn-primary",onClick:o[5]||(o[5]=(...t)=>s(y)&&s(y)(...t)),disabled:s(a).processing},[s(a).processing?(i(),n("span",Y)):d("",!0),u(" Save ")],8,X)):d("",!0),s(v)=="update"?(i(),n("button",{key:1,class:"btn btn-primary",onClick:o[6]||(o[6]=(...t)=>s(g)&&s(g)(...t)),disabled:s(a).processing},[s(a).processing?(i(),n("span",D)):d("",!0),u(" Save changes ")],8,Z)):d("",!0)])])])]),e("div",ee,[e("div",se,[e("div",te,[e("div",oe,[ae,e("div",ne,[e("select",{class:"form-select",value:s(c).perPage,onInput:o[7]||(o[7]=t=>s(_)("perPage",t.target.value))},[(i(),n(p,null,f([5,10,25,50,100],t=>e("option",{value:String(t),key:t},r(t),9,re)),64))],40,ie)]),le])]),e("div",de,[e("div",ce,[_e,e("div",ue,[e("input",{type:"search",placeholder:"Search",class:"form-control",value:s(c).query,onInput:o[8]||(o[8]=t=>s(_)("query",t.target.value))},null,40,ve)])])])])]),e("div",me,[e("table",pe,[e("thead",fe,[e("tr",null,[h(C,{onClick:o[9]||(o[9]=t=>s(_)("sort","name")),serverQuery:s(c),serverQueryKey:"name"},{default:b(()=>[u(" Service Name ")]),_:1},8,["serverQuery"]),h(C,{onClick:o[10]||(o[10]=t=>s(_)("sort","code")),serverQuery:s(c),serverQueryKey:"code"},{default:b(()=>[u(" Code ")]),_:1},8,["serverQuery"]),he,be])]),e("tbody",ye,[s(l).data.length<=0?(i(),n("tr",ge,Ce)):d("",!0),(i(!0),n(p,null,f(s(l).data,t=>(i(),n("tr",{key:t},[e("td",xe,r(t.name),1),e("td",null,r(t.code),1),we,e("td",null,[e("div",Se,[e("a",{class:"btn btn-icon btn-label-primary waves-effect",onClick:j=>s(F)(t),href:"javascript:void(0);"},Qe,8,Ee),e("a",{class:"btn btn-icon btn-label-danger waves-effect",href:"javascript:void(0);",onClick:j=>s(Q)(t.id)},je,8,Fe)])])]))),128))])])]),s(l)&&s(l).meta.links?(i(),n("div",Ie,[e("div",Le,[e("div",Pe,[e("div",$e," Showing "+r(s(l).meta.from)+" to "+r(s(l).meta.to)+" of "+r(s(l).meta.total)+" entries ",1)]),e("div",Ae,[e("nav",Te,[e("ul",Be,[(i(!0),n(p,null,f(s(l).meta.links,t=>(i(),n("li",{class:"page-item",key:t},[h(V,{class:m(["page-link",{active:t.active}]),href:t.url,only:["data","params"]},{default:b(()=>[e("span",{innerHTML:t.label},null,8,Me)]),_:2},1032,["class","href"])]))),128))])])])])])):d("",!0)])}}});export{Je as default};
