import{J as V,c as r,a as e,u as s,t as i,b as d,w as k,v as x,n as m,d as c,F as p,r as f,e as w,f as h,g as j,o as n,h as I,i as L}from"./app-d32250e8.js";import{u as P}from"./Crud-4c7aa812.js";import{A as $}from"./AdminLayout-aa69a712.js";import"./toastr-4785af89.js";const A={class:"card card-action"},T={class:"card-header"},B=e("div",{class:"card-action-title align-items-center"},[e("h5",{class:"card-title"},"SERVICES")],-1),q={class:"card-action-element"},M={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offCanvasForm","data-bs-backdrop":"static","aria-labelledby":"offCanvasFormLabel"},U={class:"offcanvas-header"},z={id:"offCanvasFormLabel",class:"offcanvas-title"},H={key:0,type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},K={class:"offcanvas-body mt-4 mx-0 flex-grow-0"},O={class:"form-group mb-3"},J=e("label",{for:""},[c("Service Name "),e("span",{class:"required"},"*")],-1),R={class:"invalid-feedback"},D={class:"form-group mb-3"},G=e("label",{for:""},"Code",-1),W={class:"invalid-feedback"},X=["disabled"],Y={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},Z=["disabled"],ee={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},se={class:"card-body"},te={class:"row justify-content-between"},oe={class:"col-auto"},ae={class:"d-flex align-items-center gap-2"},ne=e("div",{class:"w-auto"},"Show",-1),re={class:"flex-1"},ie=["value"],le=["value"],de=e("div",{class:"w-auto"},"entries",-1),ce={class:"col-auto"},_e={class:"d-flex gap-2 align-items-center"},ue=e("div",{class:"w-auto"},"Search:",-1),ve={class:"flex-1"},me=["value"],pe={class:"table-responsive text-nowrap"},fe={class:"table"},he={class:"table-light"},be=e("th",null,"Embed Code",-1),ye=e("th",null,"Actions",-1),ge={class:"table-border-bottom-0"},Ce={key:0},ke=e("td",{colspan:"999999",class:"text-center"}," No item found ",-1),xe=[ke],we={style:{width:"60%"}},Se=e("td",{class:""},[e("a",{href:"#"},[e("i",{class:"fa-regular fa-copy ms-4",style:{"font-size":"22px"}})])],-1),Ee={class:"d-flex gap-2"},Ne=["onClick"],Qe=e("i",{class:"ti ti-pencil"},null,-1),Fe=[Qe],Ve=["onClick"],je=e("i",{class:"ti ti-trash"},null,-1),Ie=[je],Le={key:0,class:"card-footer py-3 border-top"},Pe={class:"row justify-content-between"},$e={class:"col-auto"},Ae={class:"table_info"},Te={class:"col-auto"},Be={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},qe={class:"pagination mb-0"},Me=["innerHTML"],Ue={layout:$},De=Object.assign(Ue,{__name:"Index",setup(ze){V();const S={name:null,code:null},E="settings.services";let{paginatedData:l,form:a,createPromise:b,updatePromise:y,deletePromise:N,handleCreate:g,serverQuery:_,handleServerQuery:u,handleEdit:Q,formState:v}=P(S,E);return(He,o)=>{const C=j("table-header");return n(),r("div",A,[e("div",T,[B,e("div",q,[e("button",{class:"btn btn-primary",type:"button",onClick:o[0]||(o[0]=(...t)=>s(g)&&s(g)(...t)),"data-bs-toggle":"offcanvas","data-bs-target":"#offCanvasForm","aria-controls":"offCanvasForm"}," Add Service "),e("div",M,[e("div",U,[e("h5",z,i(s(v)=="create"?"Add":"Update")+" Service ",1),s(a).processing?d("",!0):(n(),r("button",H))]),e("div",K,[e("div",O,[J,k(e("input",{type:"text",class:m(["form-control",{"is-invalid":s(a).errors.name}]),"onUpdate:modelValue":o[1]||(o[1]=t=>s(a).name=t),onInput:o[2]||(o[2]=t=>s(a).clearErrors("name")),placeholder:"Enter name"},null,34),[[x,s(a).name]]),e("div",R,i(s(a).errors.name),1)]),e("div",D,[G,k(e("input",{type:"text",class:m(["form-control",{"is-invalid":s(a).errors.code}]),placeholder:"Enter code","onUpdate:modelValue":o[3]||(o[3]=t=>s(a).code=t),onInput:o[4]||(o[4]=t=>s(a).clearErrors("code"))},null,34),[[x,s(a).code]]),e("div",W,i(s(a).errors.code),1)]),s(v)=="create"?(n(),r("button",{key:0,class:"btn btn-primary",onClick:o[5]||(o[5]=(...t)=>s(b)&&s(b)(...t)),disabled:s(a).processing},[s(a).processing?(n(),r("span",Y)):d("",!0),c(" Save ")],8,X)):d("",!0),s(v)=="update"?(n(),r("button",{key:1,class:"btn btn-primary",onClick:o[6]||(o[6]=(...t)=>s(y)&&s(y)(...t)),disabled:s(a).processing},[s(a).processing?(n(),r("span",ee)):d("",!0),c(" Save changes ")],8,Z)):d("",!0)])])])]),e("div",se,[e("div",te,[e("div",oe,[e("div",ae,[ne,e("div",re,[e("select",{class:"form-select",value:s(_).perPage,onInput:o[7]||(o[7]=t=>s(u)("perPage",t.target.value))},[(n(),r(p,null,f([5,10,25,50,100],t=>e("option",{value:String(t),key:t},i(t),9,le)),64))],40,ie)]),de])]),e("div",ce,[e("div",_e,[ue,e("div",ve,[e("input",{type:"search",placeholder:"Search",class:"form-control",value:s(_).query,onInput:o[8]||(o[8]=t=>s(u)("query",t.target.value))},null,40,me)])])])])]),e("div",pe,[e("table",fe,[e("thead",he,[e("tr",null,[w(C,{onClick:o[9]||(o[9]=t=>s(u)("sort","name")),serverQuery:s(_),serverQueryKey:"name"},{default:h(()=>[c(" Service Name ")]),_:1},8,["serverQuery"]),w(C,{onClick:o[10]||(o[10]=t=>s(u)("sort","code")),serverQuery:s(_),serverQueryKey:"code"},{default:h(()=>[c(" Code ")]),_:1},8,["serverQuery"]),be,ye])]),e("tbody",ge,[s(l).data.length<=0?(n(),r("tr",Ce,xe)):d("",!0),(n(!0),r(p,null,f(s(l).data,t=>(n(),r("tr",{key:t},[e("td",we,i(t.name),1),e("td",null,i(t.code),1),Se,e("td",null,[e("div",Ee,[e("a",{class:"btn btn-icon btn-label-primary waves-effect",onClick:F=>s(Q)(t),href:"javascript:void(0);"},Fe,8,Ne),e("a",{class:"btn btn-icon btn-label-danger waves-effect",href:"javascript:void(0);",onClick:F=>s(N)(t.id)},Ie,8,Ve)])])]))),128))])])]),s(l)&&s(l).meta.links?(n(),r("div",Le,[e("div",Pe,[e("div",$e,[e("div",Ae," Showing "+i(s(l).meta.from)+" to "+i(s(l).meta.to)+" of "+i(s(l).meta.total)+" entries ",1)]),e("div",Te,[e("nav",Be,[e("ul",qe,[(n(!0),r(p,null,f(s(l).meta.links,t=>(n(),r("li",{class:"page-item",key:t},[(n(),I(L(t.url?"inertia-link":"button"),{class:m(["page-link",{active:t.active}]),href:t.url,only:["data","params"]},{default:h(()=>[e("span",{innerHTML:t.label},null,8,Me)]),_:2},1032,["class","href"]))]))),128))])])])])])):d("",!0)])}}});export{De as default};
