import{J as q,o as n,c as r,b as C,u as e,a as s,t as d,e as l,d as h,v,n as m,g as _,F as f,i as g,X as j,w as x,j as I,k as A,r as T}from"./app-a9bce4c1.js";import{u as U}from"./Crud-0db20b0a.js";import{u as $}from"./Validate-5e7263b5.js";import{A as B}from"./AdminLayout-39630ad4.js";import"./lodash-b2863730.js";const M={class:"card card-action"},H={class:"card-header"},O=s("div",{class:"card-action-title align-items-center"},[s("h5",{class:"card-title"},"PARENTS")],-1),Q={class:"card-action-element"},z={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offCanvasForm","data-bs-backdrop":"static","aria-labelledby":"offCanvasFormLabel"},J={class:"offcanvas-header"},R={id:"offCanvasFormLabel",class:"offcanvas-title"},X={key:0,type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},G={class:"offcanvas-body mt-4 mx-0 flex-grow-0"},K={class:"form-group mb-3"},W=s("label",{for:"name"},[_("First Name "),s("span",{class:"required"},"*")],-1),Y={class:"invalid-feedback"},Z={class:"form-group mb-3"},D=s("label",{for:"name"},[_("Last Name "),s("span",{class:"required"},"*")],-1),ee={class:"invalid-feedback"},se={class:"form-group mb-3"},te=s("label",{for:"name"},[_("Email "),s("span",{class:"required"},"*")],-1),oe={class:"invalid-feedback"},ae={class:"form-group mb-3"},ne=s("label",{for:"name"},"Phone",-1),re={class:"invalid-feedback"},ie=["disabled"],le={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},de=["disabled"],ce={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},_e={class:"card-body"},ue={class:"row justify-content-between"},me={class:"col-auto"},pe={class:"d-flex align-items-center gap-2"},he=s("div",{class:"w-auto"},"Show",-1),ve={class:"flex-1"},fe=["value"],be=["value"],ge=s("div",{class:"w-auto"},"entries",-1),ye={class:"col-auto"},ke={class:"d-flex gap-2 align-items-center"},we=s("div",{class:"w-auto"},"Search:",-1),Ce={class:"flex-1"},xe=["value"],Ee={class:"table-responsive text-nowrap"},Pe={class:"table"},Ne={class:"table-light"},Fe={key:0,class:"ti ti-arrow-up"},Se={key:1,class:"ti ti-arrow-down"},Le={key:0,class:"ti ti-arrow-up"},Ve={key:1,class:"ti ti-arrow-down"},qe={key:0,class:"ti ti-arrow-up"},je={key:1,class:"ti ti-arrow-down"},Ie=s("th",null,"Actions",-1),Ae={class:"table-border-bottom-0"},Te={key:0},Ue=s("td",{colspan:"999999",class:"text-center"}," No item found ",-1),$e=[Ue],Be={class:"d-flex gap-2"},Me=s("i",{class:"ti ti-eye"},null,-1),He=["onClick"],Oe=s("i",{class:"ti ti-pencil"},null,-1),Qe=[Oe],ze=["onClick"],Je=s("i",{class:"ti ti-trash"},null,-1),Re=[Je],Xe={key:0,class:"card-footer py-3 border-top"},Ge={class:"row justify-content-between"},Ke={class:"col-auto"},We={class:"table_info"},Ye={class:"col-auto"},Ze={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},De={class:"pagination mb-0"},es={class:"page-item"},ss=["innerHTML"],ts={layout:B},cs=Object.assign(ts,{__name:"Index",setup(os){q();const E={id:null,first_name:null,last_name:null,phone:null,email:null,status:!0,role:"Client",profile_photo:null},P="user.parents",{validateForm:p}=$();let{isLoadingComponents:as,paginatedData:c,form:a,createPromise:y,updatePromise:k,deletePromise:N,handleCreate:w,serverQuery:i,handleServerQuery:u,handleEdit:F,formState:b}=U(E,P);return(S,o)=>{const L=T("inertia-link");return n(),r(f,null,[C(e(j),{title:"Parents"}),s("div",M,[s("div",H,[O,s("div",Q,[s("button",{class:"btn btn-primary",type:"button",onClick:o[0]||(o[0]=(...t)=>e(w)&&e(w)(...t)),"data-bs-toggle":"offcanvas","data-bs-target":"#offCanvasForm","aria-controls":"offCanvasForm"}," Add Parent "),s("div",z,[s("div",J,[s("h5",R,d(e(b)=="create"?"Add":"Update")+" Parent ",1),e(a).processing?l("",!0):(n(),r("button",X))]),s("div",G,[s("div",K,[W,h(s("input",{type:"text",id:"first_name",class:m(["form-control",{"is-invalid":e(a).errors.first_name}]),"onUpdate:modelValue":o[1]||(o[1]=t=>e(a).first_name=t),onInput:o[2]||(o[2]=t=>{e(a).clearErrors("first_name"),e(p)(["required"],e(a),t.target.value,"first_name")}),placeholder:"Enter First Name"},null,34),[[v,e(a).first_name]]),s("div",Y,d(e(a).errors.first_name),1)]),s("div",Z,[D,h(s("input",{type:"text",id:"last_name",class:m(["form-control",{"is-invalid":e(a).errors.last_name}]),"onUpdate:modelValue":o[3]||(o[3]=t=>e(a).last_name=t),onInput:o[4]||(o[4]=t=>{e(a).clearErrors("last_name"),e(p)(["required"],e(a),t.target.value,"last_name")}),placeholder:"Enter Last Name"},null,34),[[v,e(a).last_name]]),s("div",ee,d(e(a).errors.last_name),1)]),s("div",se,[te,h(s("input",{type:"text",id:"email",class:m(["form-control",{"is-invalid":e(a).errors.email}]),"onUpdate:modelValue":o[5]||(o[5]=t=>e(a).email=t),onInput:o[6]||(o[6]=t=>{e(a).clearErrors("email"),e(p)(["required","email"],e(a),t.target.value,"email")}),placeholder:"Enter Email"},null,34),[[v,e(a).email]]),s("div",oe,d(e(a).errors.email),1)]),s("div",ae,[ne,h(s("input",{type:"text",id:"phone",class:m(["form-control",{"is-invalid":e(a).errors.phone}]),"onUpdate:modelValue":o[7]||(o[7]=t=>e(a).phone=t),onInput:o[8]||(o[8]=t=>{e(a).clearErrors("phone"),e(p)(["number"],e(a),t.target.value,"phone")}),placeholder:"Enter Phone"},null,34),[[v,e(a).phone]]),s("div",re,d(e(a).errors.phone),1)]),e(b)=="create"?(n(),r("button",{key:0,class:"btn btn-primary",onClick:o[9]||(o[9]=(...t)=>e(y)&&e(y)(...t)),disabled:e(a).processing||e(a).hasErrors},[e(a).processing?(n(),r("span",le)):l("",!0),_(" Save ")],8,ie)):l("",!0),e(b)=="update"?(n(),r("button",{key:1,class:"btn btn-primary",onClick:o[10]||(o[10]=(...t)=>e(k)&&e(k)(...t)),disabled:e(a).processing||e(a).hasErrors},[e(a).processing?(n(),r("span",ce)):l("",!0),_(" Save changes ")],8,de)):l("",!0)])])])]),s("div",_e,[s("div",ue,[s("div",me,[s("div",pe,[he,s("div",ve,[s("select",{class:"form-select",value:e(i).perPage,onInput:o[11]||(o[11]=t=>e(u)("perPage",t.target.value))},[(n(),r(f,null,g([5,10,25,50,100],t=>s("option",{value:String(t)},d(t),9,be)),64))],40,fe)]),ge])]),s("div",ye,[s("div",ke,[we,s("div",Ce,[s("input",{type:"search",placeholder:"Search",class:"form-control",value:e(i).query,onInput:o[12]||(o[12]=t=>e(u)("query",t.target.value))},null,40,xe)])])])])]),s("div",Ee,[s("table",Pe,[s("thead",Ne,[s("tr",null,[s("th",{class:"sortable",onClick:o[13]||(o[13]=t=>e(u)("sort","name"))},[_(" Name "),e(i).sort=="name"&&e(i).order=="desc"?(n(),r("i",Fe)):l("",!0),e(i).sort=="name"&&e(i).order=="asc"?(n(),r("i",Se)):l("",!0)]),s("th",{class:"sortable",onClick:o[14]||(o[14]=t=>e(u)("sort","email"))},[_(" Email "),e(i).sort=="email"&&e(i).order=="desc"?(n(),r("i",Le)):l("",!0),e(i).sort=="email"&&e(i).order=="asc"?(n(),r("i",Ve)):l("",!0)]),s("th",{class:"sortable",onClick:o[15]||(o[15]=t=>e(u)("sort","phone"))},[_(" Phone "),e(i).sort=="phone"&&e(i).order=="desc"?(n(),r("i",qe)):l("",!0),e(i).sort=="phone"&&e(i).order=="asc"?(n(),r("i",je)):l("",!0)]),Ie])]),s("tbody",Ae,[e(c).data.length<=0?(n(),r("tr",Te,$e)):l("",!0),(n(!0),r(f,null,g(e(c).data,t=>(n(),r("tr",{key:t},[s("td",null,d(t.name),1),s("td",null,d(t.email),1),s("td",null,d(t.phone),1),s("td",null,[s("div",Be,[C(L,{class:"btn btn-icon btn-label-info waves-effect",href:S.route("user.parents.show",t.id)},{default:x(()=>[Me]),_:2},1032,["href"]),s("a",{class:"btn btn-icon btn-label-primary waves-effect",onClick:V=>e(F)(t),href:"javascript:void(0);"},Qe,8,He),s("a",{class:"btn btn-icon btn-label-danger waves-effect",href:"javascript:void(0);",onClick:V=>e(N)(t.id)},Re,8,ze)])])]))),128))])])]),e(c)&&e(c).meta.links?(n(),r("div",Xe,[s("div",Ge,[s("div",Ke,[s("div",We," Showing "+d(e(c).meta.from)+" to "+d(e(c).meta.to)+" of "+d(e(c).meta.total)+" entries ",1)]),s("div",Ye,[s("nav",Ze,[s("ul",De,[(n(!0),r(f,null,g(e(c).meta.links,t=>(n(),r("li",es,[(n(),I(A(t.url?"inertia-link":"button"),{class:m(["page-link",{active:t.active}]),href:t.url,only:["data","params"]},{default:x(()=>[s("span",{innerHTML:t.label},null,8,ss)]),_:2},1032,["class","href"]))]))),256))])])])])])):l("",!0)])],64)}}});export{cs as default};
