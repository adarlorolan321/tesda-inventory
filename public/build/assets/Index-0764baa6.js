import{J as j,o as n,c as i,b as p,u as t,a as e,t as r,e as d,d as x,v as w,n as h,g as c,F as m,i as f,w as b,r as I,X as L,h as P,j as A}from"./app-ab2df9e9.js";import{u as T}from"./Crud-40c64f20.js";import{u as $}from"./Validate-205a4396.js";import{A as q}from"./AdminLayout-0e5eb6f1.js";import"./lodash-2b88457b.js";import"./toastr-1283bf79.js";const B={class:"card card-action"},M={class:"card-header"},U=e("div",{class:"card-action-title align-items-center"},[e("h5",{class:"card-title"},"SERVICES")],-1),z={class:"card-action-element"},H={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offCanvasForm","data-bs-backdrop":"static","aria-labelledby":"offCanvasFormLabel"},K={class:"offcanvas-header"},O={id:"offCanvasFormLabel",class:"offcanvas-title"},D={key:0,type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},J={class:"offcanvas-body mt-4 mx-0 flex-grow-0"},R={class:"form-group mb-3"},X=e("label",{for:""},[c("Service Name "),e("span",{class:"required"},"*")],-1),G={class:"invalid-feedback"},W={class:"form-group mb-3"},Y=e("label",{for:""},"Code",-1),Z={class:"invalid-feedback"},ee=["disabled"],te={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},se=["disabled"],oe={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},ae={class:"card-body"},ne={class:"row justify-content-between"},ie={class:"col-auto"},re={class:"d-flex align-items-center gap-2"},le=e("div",{class:"w-auto"},"Show",-1),de={class:"flex-1"},ce=["value"],_e=["value"],ue=e("div",{class:"w-auto"},"entries",-1),me={class:"col-auto"},ve={class:"d-flex gap-2 align-items-center"},pe=e("div",{class:"w-auto"},"Search:",-1),he={class:"flex-1"},fe=["value"],be={class:"table-responsive text-nowrap"},ye={class:"table"},ge={class:"table-light",style:{"min-width":"200px"}},Ce=e("th",null,"Embed Code",-1),ke=e("th",{style:{width:"150px"}},"Actions",-1),xe={class:"table-border-bottom-0"},we={key:0},Se=e("td",{colspan:"999999",class:"text-center"}," No item found ",-1),Ee=[Se],Fe={style:{width:"60%"}},Ne=e("td",{class:""},[e("a",{href:"#"},[e("i",{class:"fa-regular fa-copy ms-4",style:{"font-size":"22px"}})])],-1),Qe={class:"d-flex gap-2"},Ve=["onClick"],je=e("i",{class:"ti ti-pencil"},null,-1),Ie=[je],Le=["onClick"],Pe=e("i",{class:"ti ti-trash"},null,-1),Ae=[Pe],Te={key:0,class:"card-footer py-3 border-top"},$e={class:"row justify-content-between"},qe={class:"col-auto"},Be={class:"table_info"},Me={class:"col-auto"},Ue={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},ze={class:"pagination mb-0"},He=["innerHTML"],Ke={layout:q},Ze=Object.assign(Ke,{__name:"Index",setup(Oe){j();const S={name:null,code:null},{validateForm:E}=$(),F="settings.services";let{paginatedData:l,form:a,createPromise:y,updatePromise:g,deletePromise:N,handleCreate:C,serverQuery:_,handleServerQuery:u,handleEdit:Q,formState:v}=T(S,F);return(De,o)=>{const k=I("table-header");return n(),i(m,null,[p(t(L),{title:"Services"}),e("div",B,[e("div",M,[U,e("div",z,[e("button",{class:"btn btn-primary",type:"button",onClick:o[0]||(o[0]=(...s)=>t(C)&&t(C)(...s)),"data-bs-toggle":"offcanvas","data-bs-target":"#offCanvasForm","aria-controls":"offCanvasForm"}," Add Service "),e("div",H,[e("div",K,[e("h5",O,r(t(v)=="create"?"Add":"Update")+" Service ",1),t(a).processing?d("",!0):(n(),i("button",D))]),e("div",J,[e("div",R,[X,x(e("input",{type:"text",class:h(["form-control",{"is-invalid":t(a).errors.name}]),"onUpdate:modelValue":o[1]||(o[1]=s=>t(a).name=s),onInput:o[2]||(o[2]=s=>{t(a).clearErrors("name"),t(E)(["required"],t(a),s.target.value,"name")}),placeholder:"Enter name"},null,34),[[w,t(a).name]]),e("div",G,r(t(a).errors.name),1)]),e("div",W,[Y,x(e("input",{type:"text",class:h(["form-control",{"is-invalid":t(a).errors.code}]),placeholder:"Enter code","onUpdate:modelValue":o[3]||(o[3]=s=>t(a).code=s),onInput:o[4]||(o[4]=s=>t(a).clearErrors("code"))},null,34),[[w,t(a).code]]),e("div",Z,r(t(a).errors.code),1)]),t(v)=="create"?(n(),i("button",{key:0,class:"btn btn-primary",onClick:o[5]||(o[5]=(...s)=>t(y)&&t(y)(...s)),disabled:t(a).processing||t(a).hasErrors},[t(a).processing?(n(),i("span",te)):d("",!0),c(" Save ")],8,ee)):d("",!0),t(v)=="update"?(n(),i("button",{key:1,class:"btn btn-primary",onClick:o[6]||(o[6]=(...s)=>t(g)&&t(g)(...s)),disabled:t(a).processing||t(a).hasErrors},[t(a).processing?(n(),i("span",oe)):d("",!0),c(" Save changes ")],8,se)):d("",!0)])])])]),e("div",ae,[e("div",ne,[e("div",ie,[e("div",re,[le,e("div",de,[e("select",{class:"form-select",value:t(_).perPage,onInput:o[7]||(o[7]=s=>t(u)("perPage",s.target.value))},[(n(),i(m,null,f([5,10,25,50,100],s=>e("option",{value:String(s),key:s},r(s),9,_e)),64))],40,ce)]),ue])]),e("div",me,[e("div",ve,[pe,e("div",he,[e("input",{type:"search",placeholder:"Search",class:"form-control",value:t(_).query,onInput:o[8]||(o[8]=s=>t(u)("query",s.target.value))},null,40,fe)])])])])]),e("div",be,[e("table",ye,[e("thead",ge,[e("tr",null,[p(k,{style:{"min-width":"200px",width:"30%"},onClick:o[9]||(o[9]=s=>t(u)("sort","name")),serverQuery:t(_),serverQueryKey:"name"},{default:b(()=>[c(" Service Name ")]),_:1},8,["serverQuery"]),p(k,{style:{"min-width":"200px",width:"30%"},onClick:o[10]||(o[10]=s=>t(u)("sort","code")),serverQuery:t(_),serverQueryKey:"code"},{default:b(()=>[c(" Code ")]),_:1},8,["serverQuery"]),Ce,ke])]),e("tbody",xe,[t(l).data.length<=0?(n(),i("tr",we,Ee)):d("",!0),(n(!0),i(m,null,f(t(l).data,s=>(n(),i("tr",{key:s},[e("td",Fe,r(s.name),1),e("td",null,r(s.code),1),Ne,e("td",null,[e("div",Qe,[e("a",{class:"btn btn-icon btn-label-primary waves-effect","data-bs-toggle":"tooltip","data-bs-placement":"top","data-bs-custom-class":"tooltip-primary",title:"Edit",onClick:V=>t(Q)(s),href:"javascript:void(0);"},Ie,8,Ve),e("a",{class:"btn btn-icon btn-label-danger waves-effect","data-bs-toggle":"tooltip","data-bs-placement":"top","data-bs-custom-class":"tooltip-danger",title:"Delete",href:"javascript:void(0);",onClick:V=>t(N)(s.id)},Ae,8,Le)])])]))),128))])])]),t(l)&&t(l).meta.links?(n(),i("div",Te,[e("div",$e,[e("div",qe,[e("div",Be," Showing "+r(t(l).meta.from)+" to "+r(t(l).meta.to)+" of "+r(t(l).meta.total)+" entries ",1)]),e("div",Me,[e("nav",Ue,[e("ul",ze,[(n(!0),i(m,null,f(t(l).meta.links,s=>(n(),i("li",{class:"page-item",key:s},[(n(),P(A(s.url?"inertia-link":"button"),{class:h(["page-link",{active:s.active}]),href:s.url,only:["data","params"]},{default:b(()=>[e("span",{innerHTML:s.label},null,8,He)]),_:2},1032,["class","href"]))]))),128))])])])])])):d("",!0)])],64)}}});export{Ze as default};
