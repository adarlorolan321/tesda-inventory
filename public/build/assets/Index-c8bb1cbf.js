import{o as a,c as n,b as d,u as s,a as e,F as _,i as h,w as u,e as b,t as i,r as k,X as w,g as p,h as x,n as C,j as Q}from"./app-227baf16.js";import{u as S}from"./Crud-80ca2a55.js";import{A as j}from"./AdminLayout-3b9bcbf4.js";import"./lodash-f595688a.js";import"./toastr-ee8f34d3.js";const A={class:"card card-action"},E={class:"card-header"},N=e("div",{class:"card-action-title align-items-center"},[e("h5",{class:"card-title"},"EMAIL TEMPLATES")],-1),P={class:"card-action-element"},T=["href"],L={class:"card-body"},I={class:"row justify-content-between"},V={class:"col-auto"},B={class:"d-flex align-items-center gap-2"},M=e("div",{class:"w-auto"},"Show",-1),$={class:"flex-1"},K=["value"],q=["value"],F=e("div",{class:"w-auto"},"entries",-1),H={class:"col-auto"},O={class:"d-flex gap-2 align-items-center"},z=e("div",{class:"w-auto"},"Search:",-1),X={class:"flex-1"},G=["value"],J={class:"table-responsive text-nowrap"},R={class:"table"},U={class:"table-light"},W=e("th",null,"Actions",-1),Y={class:"table-border-bottom-0"},Z={key:0},D=e("td",{colspan:"999999",class:"text-center"}," No item found ",-1),ee=[D],te={key:0,class:"badge bg-label-success"},se={key:1,class:"badge bg-label-danger"},ae={class:"d-flex gap-2"},oe=["href"],ne=e("i",{class:"ti ti-pencil"},null,-1),le=[ne],ie=["onClick"],re=e("i",{class:"ti ti-trash"},null,-1),ce=[re],de={key:0,class:"card-footer py-3 border-top"},_e={class:"row justify-content-between"},ue={class:"col-auto"},me={class:"table_info"},he={class:"col-auto"},pe={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},ve={class:"pagination mb-0"},be=["innerHTML"],fe={layout:j},Te=Object.assign(fe,{__name:"Index",setup(ge){const f={name:null,contact_first_name:null,contact_last_name:null,contact_email:null,contact_phone:null,status:!1},g="email_template";let{paginatedData:l,form:ye,createPromise:ke,updatePromise:we,deletePromise:y,handleCreate:xe,serverQuery:r,handleServerQuery:c,handleEdit:Ce,formState:Qe}=S(f,g);return(v,o)=>{const m=k("table-header");return a(),n(_,null,[d(s(w),{title:"Venues"}),e("div",A,[e("div",E,[N,e("div",P,[e("a",{class:"btn btn-link-primary btn-primary",href:v.route("email_template.create")}," Add Email Template ",8,T)])]),e("div",L,[e("div",I,[e("div",V,[e("div",B,[M,e("div",$,[e("select",{class:"form-select",value:s(r).perPage,onInput:o[0]||(o[0]=t=>s(c)("perPage",t.target.value))},[(a(),n(_,null,h([5,10,25,50,100],t=>e("option",{value:String(t),key:t},i(t),9,q)),64))],40,K)]),F])]),e("div",H,[e("div",O,[z,e("div",X,[e("input",{type:"search",placeholder:"Search",class:"form-control",value:s(r).query,onInput:o[1]||(o[1]=t=>s(c)("query",t.target.value))},null,40,G)])])])])]),e("div",J,[e("table",R,[e("thead",U,[e("tr",null,[d(m,{onClick:o[2]||(o[2]=t=>s(c)("sort","name")),serverQuery:s(r),serverQueryKey:"name"},{default:u(()=>[p(" Name ")]),_:1},8,["serverQuery"]),d(m,{onClick:o[3]||(o[3]=t=>s(c)("sort","subject")),serverQuery:s(r),serverQueryKey:"subject"},{default:u(()=>[p(" Subject ")]),_:1},8,["serverQuery"]),d(m,{onClick:o[4]||(o[4]=t=>s(c)("sort","status")),serverQuery:s(r),serverQueryKey:"status"},{default:u(()=>[p(" Status ")]),_:1},8,["serverQuery"]),W])]),e("tbody",Y,[s(l).data.length<=0?(a(),n("tr",Z,ee)):b("",!0),(a(!0),n(_,null,h(s(l).data,t=>(a(),n("tr",{key:t},[e("td",null,i(t.name),1),e("td",null,i(t.subject),1),e("td",null,[t.status==1?(a(),n("span",te,"Active")):(a(),n("span",se,"In-active"))]),e("td",null,[e("div",ae,[e("a",{"data-bs-toggle":"tooltip","data-bs-placement":"top","data-bs-custom-class":"tooltip-primary",title:"Edit",class:"btn btn-icon btn-label-primary waves-effect",href:v.route("email_template.edit",t.id)},le,8,oe),e("a",{class:"btn btn-icon btn-label-danger waves-effect","data-bs-toggle":"tooltip","data-bs-placement":"top","data-bs-custom-class":"tooltip-danger",title:"Delete",id:"confirm-text",href:"javascript:void(0);",onClick:Se=>s(y)(t.id)},ce,8,ie)])])]))),128))])])]),s(l)&&s(l).meta.links?(a(),n("div",de,[e("div",_e,[e("div",ue,[e("div",me," Showing "+i(s(l).meta.from)+" to "+i(s(l).meta.to)+" of "+i(s(l).meta.total)+" entries ",1)]),e("div",he,[e("nav",pe,[e("ul",ve,[(a(!0),n(_,null,h(s(l).meta.links,t=>(a(),n("li",{class:"page-item",key:t},[(a(),x(Q(t.url?"inertia-link":"button"),{class:C(["page-link",{active:t.active}]),href:t.url,only:["data","params"]},{default:u(()=>[e("span",{innerHTML:t.label},null,8,be)]),_:2},1032,["class","href"]))]))),128))])])])])])):b("",!0)])],64)}}});export{Te as default};
