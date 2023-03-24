import{J as L,o as n,c as r,a as e,u as s,t as i,d,w as x,v as w,n as h,e as u,F as b,f as y,b as f,g as v,r as j,h as A,i as E}from"./app-6cc63f5c.js";import{u as P}from"./Crud-3e774755.js";import{A as V}from"./AdminLayout-c7fd92d7.js";import"./lodash-5fd162a6.js";const I={class:"card card-action"},T={class:"card-header"},B=e("div",{class:"card-action-title align-items-center"},[e("h5",{class:"card-title"},"CLASS")],-1),K={class:"card-action-element"},M={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offCanvasForm","data-bs-backdrop":"static","aria-labelledby":"offCanvasFormLabel"},U={class:"offcanvas-header"},q={id:"offCanvasFormLabel",class:"offcanvas-title"},z={key:0,type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},H={class:"offcanvas-body mt-4 mx-0 flex-grow-0"},O={class:"form-group mb-3"},D=e("label",{for:""},"Service Name",-1),J={class:"invalid-feedback"},G={class:"form-group mb-3"},R=e("label",{for:""},"Code",-1),W={class:"invalid-feedback"},X=["disabled"],Y={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},Z=["disabled"],ee={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},se={class:"card-body"},te={class:"row justify-content-between"},oe={class:"col-auto"},ae={class:"d-flex align-items-center gap-2"},ne=e("div",{class:"w-auto"},"Show",-1),re={class:"flex-1"},ie=["value"],le=["value"],de=e("div",{class:"w-auto"},"entries",-1),ce={class:"col-auto"},_e={class:"d-flex gap-2 align-items-center"},ue=e("div",{class:"w-auto"},"Search:",-1),ve={class:"flex-1"},me=["value"],fe={class:"table-responsive text-nowrap"},pe={class:"table"},he={class:"table-light"},be=e("th",null,"Actions",-1),ye={class:"table-border-bottom-0"},ge={key:0},ke=e("td",{colspan:"999999",class:"text-center"}," No item found ",-1),Ce=[ke],xe={style:{width:"60%"}},we=e("td",{class:""},[e("a",{href:"#"},[e("i",{class:"fa-regular fa-copy ms-4",style:{"font-size":"22px"}})])],-1),Se={class:"d-flex gap-2"},Qe=["onClick"],Ne=e("i",{class:"ti ti-pencil"},null,-1),$e=[Ne],Fe=["onClick"],Le=e("i",{class:"ti ti-trash"},null,-1),je=[Le],Ae={key:0,class:"card-footer py-3 border-top"},Ee={class:"row justify-content-between"},Pe={class:"col-auto"},Ve={class:"table_info"},Ie={class:"col-auto"},Te={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},Be={class:"pagination mb-0"},Ke=["innerHTML"],Me={layout:V},Je=Object.assign(Me,{__name:"Index",setup(Ue){L();const S={name:null,code:null},Q="classes";let{paginatedData:l,form:a,createPromise:g,updatePromise:k,deletePromise:N,handleCreate:C,serverQuery:c,handleServerQuery:_,handleEdit:$,formState:p}=P(S,Q);return(qe,o)=>{const m=j("table-header");return n(),r("div",I,[e("div",T,[B,e("div",K,[e("button",{class:"btn btn-primary",type:"button",onClick:o[0]||(o[0]=(...t)=>s(C)&&s(C)(...t)),"data-bs-toggle":"offcanvas","data-bs-target":"#offCanvasForm","aria-controls":"offCanvasForm"}," Add Service "),e("div",M,[e("div",U,[e("h5",q,i(s(p)=="create"?"Add":"Update")+" Service ",1),s(a).processing?d("",!0):(n(),r("button",z))]),e("div",H,[e("div",O,[D,x(e("input",{type:"text",class:h(["form-control",{"is-invalid":s(a).errors.name}]),"onUpdate:modelValue":o[1]||(o[1]=t=>s(a).name=t),onInput:o[2]||(o[2]=t=>s(a).clearErrors("name")),placeholder:"Enter name"},null,34),[[w,s(a).name]]),e("div",J,i(s(a).errors.name),1)]),e("div",G,[R,x(e("input",{type:"text",class:h(["form-control",{"is-invalid":s(a).errors.code}]),placeholder:"Enter code","onUpdate:modelValue":o[3]||(o[3]=t=>s(a).code=t),onInput:o[4]||(o[4]=t=>s(a).clearErrors("code"))},null,34),[[w,s(a).code]]),e("div",W,i(s(a).errors.code),1)]),s(p)=="create"?(n(),r("button",{key:0,class:"btn btn-primary",onClick:o[5]||(o[5]=(...t)=>s(g)&&s(g)(...t)),disabled:s(a).processing},[s(a).processing?(n(),r("span",Y)):d("",!0),u(" Save ")],8,X)):d("",!0),s(p)=="update"?(n(),r("button",{key:1,class:"btn btn-primary",onClick:o[6]||(o[6]=(...t)=>s(k)&&s(k)(...t)),disabled:s(a).processing},[s(a).processing?(n(),r("span",ee)):d("",!0),u(" Save changes ")],8,Z)):d("",!0)])])])]),e("div",se,[e("div",te,[e("div",oe,[e("div",ae,[ne,e("div",re,[e("select",{class:"form-select",value:s(c).perPage,onInput:o[7]||(o[7]=t=>s(_)("perPage",t.target.value))},[(n(),r(b,null,y([5,10,25,50,100],t=>e("option",{value:String(t),key:t},i(t),9,le)),64))],40,ie)]),de])]),e("div",ce,[e("div",_e,[ue,e("div",ve,[e("input",{type:"search",placeholder:"Search",class:"form-control",value:s(c).query,onInput:o[8]||(o[8]=t=>s(_)("query",t.target.value))},null,40,me)])])])])]),e("div",fe,[e("table",pe,[e("thead",he,[e("tr",null,[f(m,{onClick:o[9]||(o[9]=t=>s(_)("sort","name")),serverQuery:s(c),serverQueryKey:"name"},{default:v(()=>[u(" Name ")]),_:1},8,["serverQuery"]),f(m,{onClick:o[10]||(o[10]=t=>s(_)("sort","day")),serverQuery:s(c),serverQueryKey:"day"},{default:v(()=>[u(" Day ")]),_:1},8,["serverQuery"]),f(m,{onClick:o[11]||(o[11]=t=>s(_)("sort","service")),serverQuery:s(c),serverQueryKey:"service"},{default:v(()=>[u(" Service ")]),_:1},8,["serverQuery"]),f(m,{onClick:o[12]||(o[12]=t=>s(_)("sort","coach")),serverQuery:s(c),serverQueryKey:"coach"},{default:v(()=>[u(" Coach ")]),_:1},8,["serverQuery"]),be])]),e("tbody",ye,[s(l).data.length<=0?(n(),r("tr",ge,Ce)):d("",!0),(n(!0),r(b,null,y(s(l).data,t=>(n(),r("tr",{key:t},[e("td",xe,i(t.name),1),e("td",null,i(t.code),1),we,e("td",null,[e("div",Se,[e("a",{class:"btn btn-icon btn-label-primary waves-effect",onClick:F=>s($)(t),href:"javascript:void(0);"},$e,8,Qe),e("a",{class:"btn btn-icon btn-label-danger waves-effect",href:"javascript:void(0);",onClick:F=>s(N)(t.id)},je,8,Fe)])])]))),128))])])]),s(l)&&s(l).meta.links?(n(),r("div",Ae,[e("div",Ee,[e("div",Pe,[e("div",Ve," Showing "+i(s(l).meta.from)+" to "+i(s(l).meta.to)+" of "+i(s(l).meta.total)+" entries ",1)]),e("div",Ie,[e("nav",Te,[e("ul",Be,[(n(!0),r(b,null,y(s(l).meta.links,t=>(n(),r("li",{class:"page-item",key:t},[(n(),A(E(t.url?"inertia-link":"button"),{class:h(["page-link",{active:t.active}]),href:t.url,only:["data","params"]},{default:v(()=>[e("span",{innerHTML:t.label},null,8,Ke)]),_:2},1032,["class","href"]))]))),128))])])])])])):d("",!0)])}}});export{Je as default};
