import{o as n,c as l,b as _,u as e,a as t,t as r,e as d,n as c,d as v,v as f,g as u,F as b,i as x,w as h,r as g,X as B,j as q,k as T}from"./app-e65dc1cf.js";import{u as G}from"./Crud-17596d65.js";import{u as M}from"./Validate-fe1f4dee.js";import{u as O}from"./InputFormat-1ec5d242.js";import{A as H}from"./AdminLayout-f29ff8de.js";import"./lodash-02e8c810.js";const K={class:"card card-action"},z={class:"card-header"},R=t("div",{class:"card-action-title align-items-center"},[t("h5",{class:"card-title"},"PLAYERS")],-1),X={class:"card-action-element"},Y={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offCanvasForm","data-bs-backdrop":"static","aria-labelledby":"offCanvasFormLabel"},D={class:"offcanvas-header"},J={id:"offCanvasFormLabel",class:"offcanvas-title"},W={key:0,type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},Z={class:"offcanvas-body mt-4 mx-0 flex-grow-0"},ee={class:"form-group mb-3"},te=t("label",null,[u("Parent "),t("span",{class:"required"},"*")],-1),se={class:"invalid-feedback"},oe={class:"form-group mb-3"},ae=t("label",{for:""},[u("First Name "),t("span",{class:"required"},"*")],-1),ne={class:"invalid-feedback"},re={class:"form-group mb-3"},le=t("label",{for:""},"Last Name",-1),ie={class:"invalid-feedback"},de={class:"form-group mb-3"},ce=t("label",{for:""},"Date Of Birth",-1),_e={class:"invalid-feedback"},ue={class:"form-group mb-3"},me=t("label",{for:""},"Email",-1),pe={class:"invalid-feedback"},ve={class:"form-group mb-3"},fe=t("label",null,"Phone",-1),be={class:"invalid-feedback"},he={class:"form-group mb-3"},ge=t("label",{for:"gender"},"Gender ",-1),ye={key:0,class:"v-invalid-feedback"},ke=["disabled"],xe={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},Ce=["disabled"],we={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},Ee={class:"card-body"},Ve={class:"row justify-content-between"},Pe={class:"col-auto"},Fe={class:"d-flex align-items-center gap-2"},Se=t("div",{class:"w-auto"},"Show",-1),Ne={class:"flex-1"},Ie=["value"],Le=["value"],$e=t("div",{class:"w-auto"},"entries",-1),je={class:"col-auto"},Qe={class:"d-flex gap-2 align-items-center"},Ue=t("div",{class:"w-auto"},"Search:",-1),Ae={class:"flex-1"},Be=["value"],qe={class:"table-responsive text-nowrap"},Te={class:"table"},Ge={class:"table-light"},Me=t("th",{style:{width:"10px"}},"Actions",-1),Oe={class:"table-border-bottom-0"},He={key:0},Ke=t("td",{colspan:"999999",class:"text-center"}," No item found ",-1),ze=[Ke],Re={class:"d-flex gap-2"},Xe=["onClick"],Ye=t("i",{class:"ti ti-eye"},null,-1),De=[Ye],Je=["onClick"],We=t("i",{class:"ti ti-pencil"},null,-1),Ze=[We],et=["onClick"],tt=t("i",{class:"ti ti-trash"},null,-1),st=[tt],ot={key:0,class:"card-footer py-3 border-top"},at={class:"row justify-content-between"},nt={class:"col-auto"},rt={class:"table_info"},lt={class:"col-auto"},it={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},dt={class:"pagination mb-0"},ct=["innerHTML"],_t={layout:H},gt=Object.assign(_t,{__name:"Index",props:{parents:Array},setup(N){const I={first_name:null,last_name:null,parent_id:null,dob:null,email:null,phone:null,gender:null},{validateForm:y}=M(),{dateFormat:L,timeFormat:ut}=O(),$="students";let{paginatedData:i,form:o,createPromise:C,updatePromise:w,deletePromise:j,handleCreate:E,serverQuery:m,handleServerQuery:p,handleEdit:V,formState:k}=G(I,$);return(Q,a)=>{const P=g("select2"),U=g("flat-pickr"),F=g("table-header"),A=g("inertia-link");return n(),l(b,null,[_(e(B),{title:"Players"}),t("div",K,[t("div",z,[R,t("div",X,[t("button",{class:"btn btn-primary",type:"button",onClick:a[0]||(a[0]=(...s)=>e(E)&&e(E)(...s)),"data-bs-toggle":"offcanvas","data-bs-target":"#offCanvasForm","aria-controls":"offCanvasForm"}," Add Player "),t("div",Y,[t("div",D,[t("h5",J,r(e(k)=="create"?"Add":"Update")+" Player ",1),e(o).processing?d("",!0):(n(),l("button",W))]),t("div",Z,[t("div",ee,[te,_(P,{class:c({"is-invalid":e(o).errors.parent_id}),modelValue:e(o).parent_id,"onUpdate:modelValue":[a[1]||(a[1]=s=>e(o).parent_id=s),a[2]||(a[2]=s=>e(o).clearErrors("parent_id"))],placeholder:"Select Parent",options:N.parents},null,8,["class","modelValue","options"]),t("div",se,r(e(o).errors.parent_id),1)]),t("div",oe,[ae,v(t("input",{type:"text",class:c(["form-control",{"is-invalid":e(o).errors.first_name}]),"onUpdate:modelValue":a[3]||(a[3]=s=>e(o).first_name=s),onInput:a[4]||(a[4]=s=>{e(o).clearErrors("first_name"),e(y)(["required"],e(o),s.target.value,"first_name")}),placeholder:"Enter First Name"},null,34),[[f,e(o).first_name]]),t("div",ne,r(e(o).errors.first_name),1)]),t("div",re,[le,v(t("input",{type:"text",class:c(["form-control",{"is-invalid":e(o).errors.last_name}]),"onUpdate:modelValue":a[5]||(a[5]=s=>e(o).last_name=s),onInput:a[6]||(a[6]=s=>{e(o).clearErrors("last_name"),e(y)(["required"],e(o),s.target.value,"last_name")}),placeholder:"Enter Last Name"},null,34),[[f,e(o).last_name]]),t("div",ie,r(e(o).errors.last_name),1)]),t("div",de,[ce,_(U,{config:e(L),class:c(["form-control",{"is-invalid":e(o).errors.dob}]),placeholder:"Enter Date of Birth",modelValue:e(o).dob,"onUpdate:modelValue":a[7]||(a[7]=s=>e(o).dob=s),onInput:a[8]||(a[8]=s=>{e(o).clearErrors("dob")})},null,8,["config","class","modelValue"]),t("div",_e,r(e(o).errors.dob),1)]),t("div",ue,[me,v(t("input",{type:"text",class:c(["form-control",{"is-invalid":e(o).errors.email}]),"onUpdate:modelValue":a[9]||(a[9]=s=>e(o).email=s),onInput:a[10]||(a[10]=s=>{e(o).clearErrors("email"),e(y)(["email"],e(o),s.target.value,"email")}),placeholder:"Enter Email"},null,34),[[f,e(o).email]]),t("div",pe,r(e(o).errors.email),1)]),t("div",ve,[fe,v(t("input",{type:"text",class:c(["form-control",{"is-invalid":e(o).errors.phone}]),"onUpdate:modelValue":a[11]||(a[11]=s=>e(o).phone=s),onInput:a[12]||(a[12]=s=>{e(o).clearErrors("phone")}),placeholder:"Enter Phone"},null,34),[[f,e(o).phone]]),t("div",be,r(e(o).errors.phone),1)]),t("div",he,[ge,_(P,{class:c({"is-invalid":e(o).errors.gender}),modelValue:e(o).gender,"onUpdate:modelValue":[a[13]||(a[13]=s=>e(o).gender=s),a[14]||(a[14]=s=>e(o).clearErrors("gender"))],placeholder:"Select Gender",options:["Boy","Girl","Prefer not to say"]},null,8,["class","modelValue"]),e(o).errors.gender?(n(),l("div",ye,r(e(o).errors.gender),1)):d("",!0)]),e(k)=="create"?(n(),l("button",{key:0,class:"btn btn-primary",onClick:a[15]||(a[15]=(...s)=>e(C)&&e(C)(...s)),disabled:e(o).processing||e(o).hasErrors},[e(o).processing?(n(),l("span",xe)):d("",!0),u(" Save ")],8,ke)):d("",!0),e(k)=="update"?(n(),l("button",{key:1,class:"btn btn-primary",onClick:a[16]||(a[16]=(...s)=>e(w)&&e(w)(...s)),disabled:e(o).processing||e(o).hasErrors},[e(o).processing?(n(),l("span",we)):d("",!0),u(" Save changes ")],8,Ce)):d("",!0)])])])]),t("div",Ee,[t("div",Ve,[t("div",Pe,[t("div",Fe,[Se,t("div",Ne,[t("select",{class:"form-select",value:e(m).perPage,onInput:a[17]||(a[17]=s=>e(p)("perPage",s.target.value))},[(n(),l(b,null,x([5,10,25,50,100],s=>t("option",{value:String(s),key:s},r(s),9,Le)),64))],40,Ie)]),$e])]),t("div",je,[t("div",Qe,[Ue,t("div",Ae,[t("input",{type:"search",placeholder:"Search",class:"form-control",value:e(m).query,onInput:a[18]||(a[18]=s=>e(p)("query",s.target.value))},null,40,Be)])])])])]),t("div",qe,[t("table",Te,[t("thead",Ge,[t("tr",null,[_(F,{style:{"min-width":"200px"},onClick:a[19]||(a[19]=s=>e(p)("sort","name")),serverQuery:e(m),serverQueryKey:"name"},{default:h(()=>[u(" Name ")]),_:1},8,["serverQuery"]),_(F,{style:{"min-width":"200px"},onClick:a[20]||(a[20]=s=>e(p)("sort","parent_name")),serverQuery:e(m),serverQueryKey:"parent_name"},{default:h(()=>[u(" Parent Name ")]),_:1},8,["serverQuery"]),Me])]),t("tbody",Oe,[e(i).data.length<=0?(n(),l("tr",He,ze)):d("",!0),(n(!0),l(b,null,x(e(i).data,s=>(n(),l("tr",{key:s},[t("td",null,r(s.first_name)+" "+r(s.last_name),1),t("td",null,[_(A,{href:Q.route("user.parents.show",s.parent_id)},{default:h(()=>[u(r(s.parent_name),1)]),_:2},1032,["href"])]),t("td",null,[t("div",Re,[t("a",{class:"btn btn-icon btn-label-info waves-effect","data-bs-toggle":"tooltip","data-bs-placement":"top","data-bs-custom-class":"tooltip-info","data-bs-original-title":"View",onClick:S=>e(V)(s),href:"javascript:void(0);"},De,8,Xe),t("a",{class:"btn btn-icon btn-label-primary waves-effect","data-bs-toggle":"tooltip","data-bs-placement":"top","data-bs-custom-class":"tooltip-primary","data-bs-original-title":"Edit",onClick:S=>e(V)(s),href:"javascript:void(0);"},Ze,8,Je),t("a",{class:"btn btn-icon btn-label-danger waves-effect","data-bs-toggle":"tooltip","data-bs-placement":"top","data-bs-custom-class":"tooltip-danger","data-bs-original-title":"Delete",id:"confirm-text",href:"javascript:void(0);",onClick:S=>e(j)(s.id)},st,8,et)])])]))),128))])])]),e(i)&&e(i).meta.links?(n(),l("div",ot,[t("div",at,[t("div",nt,[t("div",rt," Showing "+r(e(i).meta.from)+" to "+r(e(i).meta.to)+" of "+r(e(i).meta.total)+" entries ",1)]),t("div",lt,[t("nav",it,[t("ul",dt,[(n(!0),l(b,null,x(e(i).meta.links,s=>(n(),l("li",{class:"page-item",key:s},[(n(),q(T(s.url?"inertia-link":"button"),{class:c(["page-link",{active:s.active}]),href:s.url,only:["data","params"]},{default:h(()=>[t("span",{innerHTML:s.label},null,8,ct)]),_:2},1032,["class","href"]))]))),128))])])])])])):d("",!0)])],64)}}});export{gt as default};
