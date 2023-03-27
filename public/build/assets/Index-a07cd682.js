import{u as Q}from"./Crud-7256baa3.js";import{J as S,o as a,c as n,b as r,u as t,a as e,w as l,F as h,i as p,e as b,t as c,r as g,X as x,g as u,h as N,n as j,j as P}from"./app-d04284bb.js";import{A}from"./AdminLayout-2a26934d.js";import"./lodash-afa9d4e9.js";import"./toastr-9ce7163a.js";const L={class:"card card-action"},$={class:"card-header"},B=e("div",{class:"card-action-title align-items-center"},[e("h5",{class:"card-title"},"CLASS")],-1),K={class:"card-action-element"},T={class:"card-body"},V={class:"row justify-content-between"},I={class:"col-auto"},q={class:"d-flex align-items-center gap-2"},E=e("div",{class:"w-auto"},"Show",-1),F={class:"flex-1"},H=["value"],M=["value"],O=e("div",{class:"w-auto"},"entries",-1),z={class:"col-auto"},J={class:"d-flex gap-2 align-items-center"},X=e("div",{class:"w-auto"},"Search:",-1),G={class:"flex-1"},R=["value"],U={class:"table-responsive text-nowrap"},W={class:"table"},Y={class:"table-light"},Z=e("th",null,"Actions",-1),D={class:"table-border-bottom-0"},ee={key:0},se=e("td",{colspan:"999999",class:"text-center"}," No item found ",-1),te=[se],oe={style:{width:"60%"}},ae={class:"d-flex gap-2"},ne=e("i",{class:"ti ti-eye"},null,-1),re=e("i",{class:"ti ti-pencil"},null,-1),le=["onClick"],ie=e("i",{class:"ti ti-trash"},null,-1),ce=[ie],de={key:0,class:"card-footer py-3 border-top"},_e={class:"row justify-content-between"},ue={class:"col-auto"},he={class:"table_info"},ve={class:"col-auto"},me={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},fe={class:"pagination mb-0"},pe=["innerHTML"],ye={layout:A},Le=Object.assign(ye,{__name:"Index",setup(be){S();const k={name:null,code:null},C="classes";let{paginatedData:i,form:ge,createPromise:ke,updatePromise:Ce,deletePromise:w,handleCreate:we,serverQuery:d,handleServerQuery:_,handleEdit:Qe,formState:Se}=Q(k,C);return(v,o)=>{const m=g("inertia-link"),f=g("table-header");return a(),n(h,null,[r(t(x),{title:"Class"}),e("div",L,[e("div",$,[B,e("div",K,[r(m,{type:"button",class:"btn btn-link-primary btn-primary",href:v.route("classes.create")},{default:l(()=>[u(" Add Class ")]),_:1},8,["href"])])]),e("div",T,[e("div",V,[e("div",I,[e("div",q,[E,e("div",F,[e("select",{class:"form-select",value:t(d).perPage,onInput:o[0]||(o[0]=s=>t(_)("perPage",s.target.value))},[(a(),n(h,null,p([5,10,25,50,100],s=>e("option",{value:String(s),key:s},c(s),9,M)),64))],40,H)]),O])]),e("div",z,[e("div",J,[X,e("div",G,[e("input",{type:"search",placeholder:"Search",class:"form-control",value:t(d).query,onInput:o[1]||(o[1]=s=>t(_)("query",s.target.value))},null,40,R)])])])])]),e("div",U,[e("table",W,[e("thead",Y,[e("tr",null,[r(f,{onClick:o[2]||(o[2]=s=>t(_)("sort","name")),serverQuery:t(d),serverQueryKey:"name"},{default:l(()=>[u(" Name ")]),_:1},8,["serverQuery"]),r(f,{onClick:o[3]||(o[3]=s=>t(_)("sort","days")),serverQuery:t(d),serverQueryKey:"days"},{default:l(()=>[u(" Day ")]),_:1},8,["serverQuery"]),r(f,{onClick:o[4]||(o[4]=s=>t(_)("sort","service_name")),serverQuery:t(d),serverQueryKey:"service_name"},{default:l(()=>[u(" Service ")]),_:1},8,["serverQuery"]),r(f,{onClick:o[5]||(o[5]=s=>t(_)("sort","coach_name")),serverQuery:t(d),serverQueryKey:"coach_name"},{default:l(()=>[u(" Coach ")]),_:1},8,["serverQuery"]),Z])]),e("tbody",D,[t(i).data.length<=0?(a(),n("tr",ee,te)):b("",!0),(a(!0),n(h,null,p(t(i).data,s=>(a(),n("tr",{key:s},[e("td",oe,[r(m,{href:v.route("classes.sessions-tab",s.id)},{default:l(()=>[u(c(s.name),1)]),_:2},1032,["href"])]),e("td",null,[(a(!0),n(h,null,p(s.days,y=>(a(),n("span",{key:y,class:"badge bg-label-info me-2"},c(y),1))),128))]),e("td",null,c(s.service_name),1),e("td",null,c(s.coach_name),1),e("td",null,[e("div",ae,[r(m,{class:"btn btn-icon btn-label-info waves-effect",href:v.route("classes.sessions-tab",s.id)},{default:l(()=>[ne]),_:2},1032,["href"]),r(m,{class:"btn btn-icon btn-label-primary waves-effect",href:v.route("classes.edit",s.id)},{default:l(()=>[re]),_:2},1032,["href"]),e("a",{class:"btn btn-icon btn-label-danger waves-effect",href:"javascript:void(0);",onClick:y=>t(w)(s.id)},ce,8,le)])])]))),128))])])]),t(i)&&t(i).meta.links?(a(),n("div",de,[e("div",_e,[e("div",ue,[e("div",he," Showing "+c(t(i).meta.from)+" to "+c(t(i).meta.to)+" of "+c(t(i).meta.total)+" entries ",1)]),e("div",ve,[e("nav",me,[e("ul",fe,[(a(!0),n(h,null,p(t(i).meta.links,s=>(a(),n("li",{class:"page-item",key:s},[(a(),N(P(s.url?"inertia-link":"button"),{class:j(["page-link",{active:s.active}]),href:s.url,only:["data","params"]},{default:l(()=>[e("span",{innerHTML:s.label},null,8,pe)]),_:2},1032,["class","href"]))]))),128))])])])])])):b("",!0)])],64)}}});export{Le as default};
