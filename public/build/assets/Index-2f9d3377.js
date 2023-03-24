import{o as n,c as l,a as s,u as e,t as r,e as d,b as u,n as c,d as v,v as f,g as _,F as k,i as x,w as b,r as h,j as B,k as q}from"./app-8c8b5aa2.js";import{u as T}from"./Crud-308abd86.js";import{u as G}from"./Validate-39ac5ef7.js";import{u as M}from"./InputFormat-1ec5d242.js";import{A as O}from"./AdminLayout-f214b6f6.js";import"./lodash-1594f864.js";const H={class:"card card-action"},K={class:"card-header"},z=s("div",{class:"card-action-title align-items-center"},[s("h5",{class:"card-title"},"PLAYERS")],-1),R={class:"card-action-element"},Y={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offCanvasForm","data-bs-backdrop":"static","aria-labelledby":"offCanvasFormLabel"},D={class:"offcanvas-header"},J={id:"offCanvasFormLabel",class:"offcanvas-title"},W={key:0,type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},X={class:"offcanvas-body mt-4 mx-0 flex-grow-0"},Z={class:"form-group mb-3"},ee=s("label",{for:""},[_("Parent "),s("span",{class:"required"},"*")],-1),se={class:"invalid-feedback"},te={class:"form-group mb-3"},oe=s("label",{for:""},[_("First Name "),s("span",{class:"required"},"*")],-1),ae={class:"invalid-feedback"},ne={class:"form-group mb-3"},re=s("label",{for:""},"Last Name",-1),le={class:"invalid-feedback"},ie={class:"form-group mb-3"},de=s("label",{for:""},"Date Of Birth",-1),ce={class:"invalid-feedback"},_e={class:"form-group mb-3"},ue=s("label",{for:""},"Email",-1),me={class:"invalid-feedback"},pe={class:"form-group mb-3"},ve=s("label",null,"Phone",-1),fe={class:"invalid-feedback"},be={class:"form-group mb-3"},he=s("label",{for:"gender"},"Gender ",-1),ge={key:0,class:"v-invalid-feedback"},ye=["disabled"],ke={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},xe=["disabled"],Ce={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},we={class:"card-body"},Ee={class:"row justify-content-between"},Ve={class:"col-auto"},Fe={class:"d-flex align-items-center gap-2"},Pe=s("div",{class:"w-auto"},"Show",-1),Se={class:"flex-1"},Ne=["value"],Ie=["value"],Le=s("div",{class:"w-auto"},"entries",-1),Qe={class:"col-auto"},Ue={class:"d-flex gap-2 align-items-center"},$e=s("div",{class:"w-auto"},"Search:",-1),je={class:"flex-1"},Ae=["value"],Be={class:"table-responsive text-nowrap"},qe={class:"table"},Te={class:"table-light"},Ge=s("th",null,"Actions",-1),Me={class:"table-border-bottom-0"},Oe={key:0},He=s("td",{colspan:"999999",class:"text-center"}," No item found ",-1),Ke=[He],ze={class:"d-flex gap-2"},Re=["onClick"],Ye=s("i",{class:"ti ti-pencil"},null,-1),De=[Ye],Je=["onClick"],We=s("i",{class:"ti ti-trash"},null,-1),Xe=[We],Ze={key:0,class:"card-footer py-3 border-top"},es={class:"row justify-content-between"},ss={class:"col-auto"},ts={class:"table_info"},os={class:"col-auto"},as={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},ns={class:"pagination mb-0"},rs=["innerHTML"],ls={layout:O},vs=Object.assign(ls,{__name:"Index",props:{parents:Array},setup(P){const S={first_name:null,last_name:null,parent_id:null,dob:null,email:null,phone:null,gender:null},{validateForm:g}=G(),{dateFormat:N,timeFormat:is}=M(),I="students";let{paginatedData:i,form:o,createPromise:C,updatePromise:w,deletePromise:L,handleCreate:E,serverQuery:m,handleServerQuery:p,handleEdit:Q,formState:y}=T(S,I);return(U,a)=>{const V=h("select2"),$=h("flat-pickr"),F=h("table-header"),j=h("inertia-link");return n(),l("div",H,[s("div",K,[z,s("div",R,[s("button",{class:"btn btn-primary",type:"button",onClick:a[0]||(a[0]=(...t)=>e(E)&&e(E)(...t)),"data-bs-toggle":"offcanvas","data-bs-target":"#offCanvasForm","aria-controls":"offCanvasForm"}," Add Player "),s("div",Y,[s("div",D,[s("h5",J,r(e(y)=="create"?"Add":"Update")+" Player ",1),e(o).processing?d("",!0):(n(),l("button",W))]),s("div",X,[s("div",Z,[ee,u(V,{class:c({"is-invalid":e(o).errors.parent_id}),modelValue:e(o).parent_id,"onUpdate:modelValue":[a[1]||(a[1]=t=>e(o).parent_id=t),a[2]||(a[2]=t=>e(o).clearErrors("parent_id"))],placeholder:"Select Parent",options:P.parents},null,8,["class","modelValue","options"]),s("div",se,r(e(o).errors.parent_id),1)]),s("div",te,[oe,v(s("input",{type:"text",class:c(["form-control",{"is-invalid":e(o).errors.first_name}]),"onUpdate:modelValue":a[3]||(a[3]=t=>e(o).first_name=t),onInput:a[4]||(a[4]=t=>{e(o).clearErrors("first_name"),e(g)(["required"],e(o),t.target.value,"first_name")}),placeholder:"Enter First Name"},null,34),[[f,e(o).first_name]]),s("div",ae,r(e(o).errors.first_name),1)]),s("div",ne,[re,v(s("input",{type:"text",class:c(["form-control",{"is-invalid":e(o).errors.last_name}]),"onUpdate:modelValue":a[5]||(a[5]=t=>e(o).last_name=t),onInput:a[6]||(a[6]=t=>{e(o).clearErrors("last_name"),e(g)(["required"],e(o),t.target.value,"last_name")}),placeholder:"Enter Last Name"},null,34),[[f,e(o).last_name]]),s("div",le,r(e(o).errors.last_name),1)]),s("div",ie,[de,u($,{config:e(N),class:c(["form-control",{"is-invalid":e(o).errors.dob}]),placeholder:"Enter Date of Birth",modelValue:e(o).dob,"onUpdate:modelValue":a[7]||(a[7]=t=>e(o).dob=t),onInput:a[8]||(a[8]=t=>{e(o).clearErrors("dob")})},null,8,["config","class","modelValue"]),s("div",ce,r(e(o).errors.dob),1)]),s("div",_e,[ue,v(s("input",{type:"text",class:c(["form-control",{"is-invalid":e(o).errors.email}]),"onUpdate:modelValue":a[9]||(a[9]=t=>e(o).email=t),onInput:a[10]||(a[10]=t=>{e(o).clearErrors("email"),e(g)(["email"],e(o),t.target.value,"email")}),placeholder:"Enter Email"},null,34),[[f,e(o).email]]),s("div",me,r(e(o).errors.email),1)]),s("div",pe,[ve,v(s("input",{type:"text",class:c(["form-control",{"is-invalid":e(o).errors.phone}]),"onUpdate:modelValue":a[11]||(a[11]=t=>e(o).phone=t),onInput:a[12]||(a[12]=t=>{e(o).clearErrors("phone")}),placeholder:"04 1234 1234"},null,34),[[f,e(o).phone]]),s("div",fe,r(e(o).errors.phone),1)]),s("div",be,[he,u(V,{class:c({"is-invalid":e(o).errors.gender}),modelValue:e(o).gender,"onUpdate:modelValue":[a[13]||(a[13]=t=>e(o).gender=t),a[14]||(a[14]=t=>e(o).clearErrors("gender"))],placeholder:"Select Gender",options:["Boy","Girl","Prefer not to say"]},null,8,["class","modelValue"]),e(o).errors.gender?(n(),l("div",ge,r(e(o).errors.gender),1)):d("",!0)]),e(y)=="create"?(n(),l("button",{key:0,class:"btn btn-primary",onClick:a[15]||(a[15]=(...t)=>e(C)&&e(C)(...t)),disabled:e(o).processing||e(o).hasErrors},[e(o).processing?(n(),l("span",ke)):d("",!0),_(" Save ")],8,ye)):d("",!0),e(y)=="update"?(n(),l("button",{key:1,class:"btn btn-primary",onClick:a[16]||(a[16]=(...t)=>e(w)&&e(w)(...t)),disabled:e(o).processing||e(o).hasErrors},[e(o).processing?(n(),l("span",Ce)):d("",!0),_(" Save changes ")],8,xe)):d("",!0)])])])]),s("div",we,[s("div",Ee,[s("div",Ve,[s("div",Fe,[Pe,s("div",Se,[s("select",{class:"form-select",value:e(m).perPage,onInput:a[17]||(a[17]=t=>e(p)("perPage",t.target.value))},[(n(),l(k,null,x([5,10,25,50,100],t=>s("option",{value:String(t),key:t},r(t),9,Ie)),64))],40,Ne)]),Le])]),s("div",Qe,[s("div",Ue,[$e,s("div",je,[s("input",{type:"search",placeholder:"Search",class:"form-control",value:e(m).query,onInput:a[18]||(a[18]=t=>e(p)("query",t.target.value))},null,40,Ae)])])])])]),s("div",Be,[s("table",qe,[s("thead",Te,[s("tr",null,[u(F,{style:{"min-width":"200px"},onClick:a[19]||(a[19]=t=>e(p)("sort","name")),serverQuery:e(m),serverQueryKey:"name"},{default:b(()=>[_(" Name ")]),_:1},8,["serverQuery"]),u(F,{style:{"min-width":"200px"},onClick:a[20]||(a[20]=t=>e(p)("sort","parent_name")),serverQuery:e(m),serverQueryKey:"parent_name"},{default:b(()=>[_(" Parent Name ")]),_:1},8,["serverQuery"]),Ge])]),s("tbody",Me,[e(i).data.length<=0?(n(),l("tr",Oe,Ke)):d("",!0),(n(!0),l(k,null,x(e(i).data,t=>(n(),l("tr",{key:t},[s("td",null,r(t.first_name)+" "+r(t.last_name),1),s("td",null,[u(j,{href:U.route("user.parents.show",t.id)},{default:b(()=>[_(r(t.parent_name),1)]),_:2},1032,["href"])]),s("td",null,[s("div",ze,[s("a",{class:"btn btn-icon btn-label-primary waves-effect",onClick:A=>e(Q)(t),href:"javascript:void(0);"},De,8,Re),s("a",{class:"btn btn-icon btn-label-danger waves-effect",id:"confirm-text",href:"javascript:void(0);",onClick:A=>e(L)(t.id)},Xe,8,Je)])])]))),128))])])]),e(i)&&e(i).meta.links?(n(),l("div",Ze,[s("div",es,[s("div",ss,[s("div",ts," Showing "+r(e(i).meta.from)+" to "+r(e(i).meta.to)+" of "+r(e(i).meta.total)+" entries ",1)]),s("div",os,[s("nav",as,[s("ul",ns,[(n(!0),l(k,null,x(e(i).meta.links,t=>(n(),l("li",{class:"page-item",key:t},[(n(),B(q(t.url?"inertia-link":"button"),{class:c(["page-link",{active:t.active}]),href:t.url,only:["data","params"]},{default:b(()=>[s("span",{innerHTML:t.label},null,8,rs)]),_:2},1032,["class","href"]))]))),128))])])])])])):d("",!0)])}}});export{vs as default};
