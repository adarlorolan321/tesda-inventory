import{J as F,c as a,a as e,u as t,t as d,f as r,g as y,v as k,n as m,d as u,F as h,h as p,o as n,b as V,w as j,r as I}from"./app-4dbc08b6.js";import{u as L}from"./Crud-b8558370.js";import{A as P}from"./AdminLayout-401bee9c.js";const $={class:"card card-action"},T={class:"card-header"},A=e("div",{class:"card-action-title align-items-center"},[e("h5",{class:"card-title"},"SERVICES")],-1),B={class:"card-action-element"},M={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offCanvasForm","data-bs-backdrop":"static","aria-labelledby":"offCanvasFormLabel"},U={class:"offcanvas-header"},q={id:"offCanvasFormLabel",class:"offcanvas-title"},H={key:0,type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},O={class:"offcanvas-body mt-4 mx-0 flex-grow-0"},Q={class:"form-group mb-3"},z=e("label",{for:""},"Code",-1),J={class:"invalid-feedback"},R={class:"form-group mb-3"},D=e("label",{for:""},"Service Name",-1),G={class:"invalid-feedback"},K=["disabled"],W={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},X=["disabled"],Y={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},Z={class:"card-body"},ee={class:"row justify-content-between"},te={class:"col-auto"},se={class:"d-flex align-items-center gap-2"},oe=e("div",{class:"w-auto"},"Show",-1),ae={class:"flex-1"},ne=["value"],ie=["value"],re=e("div",{class:"w-auto"},"entries",-1),le={class:"col-auto"},de={class:"d-flex gap-2 align-items-center"},ce=e("div",{class:"w-auto"},"Search: ",-1),_e={class:"flex-1"},ue=["value"],ve={class:"table-responsive text-nowrap"},me={class:"table"},he={class:"table-light"},pe={key:0,class:"ti ti-arrow-up"},fe={key:1,class:"ti ti-arrow-down"},be={key:0,class:"ti ti-arrow-up"},ge={key:1,class:"ti ti-arrow-down"},ye=e("th",null,"Actions",-1),ke={class:"table-border-bottom-0"},we={key:0},Ce=e("td",{colspan:"999999",class:"text-center"},"No item found",-1),xe=[Ce],Se={style:{width:"90%"}},Ne={class:"d-flex gap-2"},Ee=["onClick"],Fe=e("i",{class:"ti ti-pencil"},null,-1),Ve=[Fe],je=["onClick"],Ie=e("i",{class:"ti ti-trash"},null,-1),Le=[Ie],Pe={key:0,class:"card-footer py-3 border-top"},$e={class:"row justify-content-between"},Te={class:"col-auto"},Ae={class:"table_info"},Be={class:"col-auto"},Me={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},Ue={class:"pagination mb-0"},qe={class:"page-item"},He=["innerHTML"],Oe={layout:P},Ge=Object.assign(Oe,{__name:"Index",setup(Qe){F();const w={name:null,code:null},C="user.coach";let{paginatedData:c,form:i,createPromise:f,updatePromise:b,deletePromise:x,handleCreate:g,serverQuery:l,handleServerQuery:_,handleEdit:S,formState:v}=L(w,C);return(ze,o)=>{const N=I("inertia-link");return n(),a("div",$,[e("div",T,[A,e("div",B,[e("button",{class:"btn btn-primary",type:"button",onClick:o[0]||(o[0]=(...s)=>t(g)&&t(g)(...s)),"data-bs-toggle":"offcanvas","data-bs-target":"#offCanvasForm","aria-controls":"offCanvasForm"}," New Service "),e("div",M,[e("div",U,[e("h5",q,d(t(v)=="create"?"Create":"Update")+" Service ",1),t(i).processing?r("",!0):(n(),a("button",H))]),e("div",O,[e("div",Q,[z,y(e("input",{type:"text",class:m(["form-control",{"is-invalid":t(i).errors.code}]),placeholder:"Enter code","onUpdate:modelValue":o[1]||(o[1]=s=>t(i).code=s),onInput:o[2]||(o[2]=s=>t(i).clearErrors("code"))},null,34),[[k,t(i).code]]),e("div",J,d(t(i).errors.code),1)]),e("div",R,[D,y(e("input",{type:"text",class:m(["form-control",{"is-invalid":t(i).errors.name}]),"onUpdate:modelValue":o[3]||(o[3]=s=>t(i).name=s),onInput:o[4]||(o[4]=s=>t(i).clearErrors("name")),placeholder:"Enter name"},null,34),[[k,t(i).name]]),e("div",G,d(t(i).errors.name),1)]),t(v)=="create"?(n(),a("button",{key:0,class:"btn btn-primary",onClick:o[5]||(o[5]=(...s)=>t(f)&&t(f)(...s)),disabled:t(i).processing},[t(i).processing?(n(),a("span",W)):r("",!0),u(" Save ")],8,K)):r("",!0),t(v)=="update"?(n(),a("button",{key:1,class:"btn btn-primary",onClick:o[6]||(o[6]=(...s)=>t(b)&&t(b)(...s)),disabled:t(i).processing},[t(i).processing?(n(),a("span",Y)):r("",!0),u(" Save changes ")],8,X)):r("",!0)])])])]),e("div",Z,[e("div",ee,[e("div",te,[e("div",se,[oe,e("div",ae,[e("select",{class:"form-select",value:t(l).perPage,onInput:o[7]||(o[7]=s=>t(_)("perPage",s.target.value))},[(n(),a(h,null,p([5,10,25,50,100],s=>e("option",{value:String(s)},d(s),9,ie)),64))],40,ne)]),re])]),e("div",le,[e("div",de,[ce,e("div",_e,[e("input",{type:"search",placeholder:"Search",class:"form-control",value:t(l).query,onInput:o[8]||(o[8]=s=>t(_)("query",s.target.value))},null,40,ue)])])])])]),e("div",ve,[e("table",me,[e("thead",he,[e("tr",null,[e("th",{class:"sortable",style:{width:"200px"},onClick:o[9]||(o[9]=s=>t(_)("sort","code"))},[u(" Code "),t(l).sort=="code"&&t(l).order=="desc"?(n(),a("i",pe)):r("",!0),t(l).sort=="code"&&t(l).order=="asc"?(n(),a("i",fe)):r("",!0)]),e("th",{class:"sortable",onClick:o[10]||(o[10]=s=>t(_)("sort","name"))},[u(" Service Name "),t(l).sort=="name"&&t(l).order=="desc"?(n(),a("i",be)):r("",!0),t(l).sort=="name"&&t(l).order=="asc"?(n(),a("i",ge)):r("",!0)]),ye])]),e("tbody",ke,[t(c).data.length<=0?(n(),a("tr",we,xe)):r("",!0),(n(!0),a(h,null,p(t(c).data,s=>(n(),a("tr",null,[e("td",null,d(s.code),1),e("td",Se,d(s.name),1),e("td",null,[e("div",Ne,[e("a",{class:"btn btn-icon btn-label-primary waves-effect",onClick:E=>t(S)(s),href:"javascript:void(0);"},Ve,8,Ee),e("a",{class:"btn btn-icon btn-label-danger waves-effect",href:"javascript:void(0);",onClick:E=>t(x)(s.id)},Le,8,je)])])]))),256))])])]),t(c)&&t(c).meta.links?(n(),a("div",Pe,[e("div",$e,[e("div",Te,[e("div",Ae," Showing "+d(t(c).meta.from)+" to "+d(t(c).meta.to)+" of "+d(t(c).meta.total)+" entries ",1)]),e("div",Be,[e("nav",Me,[e("ul",Ue,[(n(!0),a(h,null,p(t(c).meta.links,s=>(n(),a("li",qe,[V(N,{class:m(["page-link",{active:s.active}]),href:s.url,only:["data","params"]},{default:j(()=>[e("span",{innerHTML:s.label},null,8,He)]),_:2},1032,["class","href"])]))),256))])])])])])):r("",!0)])}}});export{Ge as default};
