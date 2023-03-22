import{J as U,c as l,a as e,u as t,t as i,f as r,g as m,v as p,n as _,b as x,i as $,j as A,e as f,F as v,h as b,r as g,o as n,w as T}from"./app-ea9448e5.js";import{u as B}from"./Crud-57b476cb.js";import{A as M}from"./AdminLayout-dafeb767.js";const z={class:"card card-action"},H={class:"card-header"},O=e("div",{class:"card-action-title align-items-center"},[e("h5",{class:"card-title"},"COACH / PARENT")],-1),R={class:"card-action-element"},q={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offCanvasForm","data-bs-backdrop":"static","aria-labelledby":"offCanvasFormLabel"},D={class:"offcanvas-header"},Q={id:"offCanvasFormLabel",class:"offcanvas-title"},J={key:0,type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},G={class:"offcanvas-body mt-4 mx-0 flex-grow-0"},K={class:"form-group mb-3"},W=e("label",{for:"name"},"First Name",-1),X={class:"invalid-feedback"},Y={class:"form-group mb-3"},Z=e("label",{for:"name"},"Last Name",-1),ee={class:"invalid-feedback"},te={class:"form-group mb-3"},se=e("label",{for:"name"},"Email",-1),oe={class:"invalid-feedback"},ae={class:"form-group mb-3"},ne=e("label",{for:"name"},"Phone",-1),le={class:"invalid-feedback"},ie={class:"form-group mb-3"},re=e("label",{for:"role"},"Role",-1),de={class:"invalid-feedback"},ce={class:"form-check form-switch my-4"},_e=e("label",{class:"form-check-label",for:"flexSwitchCheckChecked"}," Active",-1),me={class:"form-group mb-4"},ue=e("label",{for:"name"},"Profile Photo",-1),pe={key:1},he={class:"invalid-feedback"},fe=["disabled"],ve={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},be=["disabled"],ge={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},ke={class:"card-body"},ye={class:"row justify-content-between"},Ce={class:"col-auto"},xe={class:"d-flex align-items-center gap-2"},we=e("div",{class:"w-auto"},"Show",-1),Se={class:"flex-1"},Ee=["value"],Ne=["value"],Ve=e("div",{class:"w-auto"},"entries",-1),Pe={class:"col-auto"},Fe={class:"d-flex gap-2 align-items-center"},Le=e("div",{class:"w-auto"},"Search:",-1),je={class:"flex-1"},Ie=["value"],Ue={class:"table-responsive text-nowrap"},$e={class:"table"},Ae={class:"table-light"},Te={key:0,class:"ti ti-arrow-up"},Be={key:1,class:"ti ti-arrow-down"},Me=e("th",null,"Actions",-1),ze={class:"table-border-bottom-0"},He={key:0},Oe=e("td",{colspan:"999999",class:"text-center"},"No item found",-1),Re=[Oe],qe={style:{width:"90%"}},De={class:"d-flex gap-2"},Qe=["onClick"],Je=e("i",{class:"ti ti-pencil"},null,-1),Ge=[Je],Ke=["onClick"],We=e("i",{class:"ti ti-trash"},null,-1),Xe=[We],Ye={key:0,class:"card-footer py-3 border-top"},Ze={class:"row justify-content-between"},et={class:"col-auto"},tt={class:"table_info"},st={class:"col-auto"},ot={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},at={class:"pagination mb-0"},nt={class:"page-item"},lt=["innerHTML"],it={layout:M},mt=Object.assign(it,{__name:"Index",setup(rt){U();const w={first_name:null,last_name:null,phone:null,email:null,status:null,role:null,profile_photo:null},S="user.coach";let{isLoadingComponents:E,paginatedData:d,form:o,createPromise:k,updatePromise:y,deletePromise:N,handleCreate:C,serverQuery:c,handleServerQuery:h,handleEdit:V,formState:u}=B(w,S);return(P,a)=>{const F=g("Select2"),L=g("dropzone"),j=g("inertia-link");return n(),l("div",z,[e("div",H,[O,e("div",R,[e("button",{class:"btn btn-primary",type:"button",onClick:a[0]||(a[0]=(...s)=>t(C)&&t(C)(...s)),"data-bs-toggle":"offcanvas","data-bs-target":"#offCanvasForm","aria-controls":"offCanvasForm"}," New Coach "+i(t(u)),1),e("div",q,[e("div",D,[e("h5",Q,i(t(u)=="create"?"Create":"Update"),1),t(o).processing?r("",!0):(n(),l("button",J))]),e("div",G,[e("div",K,[W,m(e("input",{type:"text",id:"first_name",class:_(["form-control",{"is-invalid":t(o).errors.first_name}]),"onUpdate:modelValue":a[1]||(a[1]=s=>t(o).first_name=s),onInput:a[2]||(a[2]=s=>t(o).clearErrors("first_name")),placeholder:"Enter First Name"},null,34),[[p,t(o).first_name]]),e("div",X,i(t(o).errors.first_name),1)]),e("div",Y,[Z,m(e("input",{type:"text",id:"last_name",class:_(["form-control",{"is-invalid":t(o).errors.last_name}]),"onUpdate:modelValue":a[3]||(a[3]=s=>t(o).last_name=s),onInput:a[4]||(a[4]=s=>t(o).clearErrors("last_name")),placeholder:"Enter Last Name"},null,34),[[p,t(o).last_name]]),e("div",ee,i(t(o).errors.last_name),1)]),e("div",te,[se,m(e("input",{type:"text",id:"email",class:_(["form-control",{"is-invalid":t(o).errors.email}]),"onUpdate:modelValue":a[5]||(a[5]=s=>t(o).email=s),onInput:a[6]||(a[6]=s=>t(o).clearErrors("email")),placeholder:"Enter Email"},null,34),[[p,t(o).email]]),e("div",oe,i(t(o).errors.email),1)]),e("div",ae,[ne,m(e("input",{type:"text",id:"phone",class:_(["form-control",{"is-invalid":t(o).errors.phone}]),"onUpdate:modelValue":a[7]||(a[7]=s=>t(o).phone=s),onInput:a[8]||(a[8]=s=>t(o).clearErrors("phone")),placeholder:"Enter Phone"},null,34),[[p,t(o).phone]]),e("div",le,i(t(o).errors.email),1)]),e("div",ie,[re,x(F,{class:_({"is-invalid":t(o).errors.role}),placeholder:"Select Role",modelValue:t(o).role,"onUpdate:modelValue":a[9]||(a[9]=s=>t(o).role=s),options:["Coach","Staff"]},null,8,["class","modelValue"]),e("div",de,i(t(o).errors.role),1)]),e("div",ce,[m(e("input",{"onUpdate:modelValue":a[10]||(a[10]=s=>t(o).status=s),class:"form-check-input",type:"checkbox",id:"flexSwitchCheckChecked"},null,512),[[$,t(o).status]]),_e]),e("div",me,[ue,t(E)?(n(),A(L,{key:0,collection:"profile_photo",url:P.route("api.media.upload"),model:"User",value:t(o).profile_photo,onInput:a[11]||(a[11]=s=>t(o).profile_photo=s),message:"Drop files here or click to upload profile photo",acceptedFiles:"application/pdf,image/jpeg,image/png"},null,8,["url","value"])):(n(),l("div",pe,"Loading media")),e("div",he,i(t(o).errors.first_name),1)]),t(u)=="create"?(n(),l("button",{key:0,class:"btn btn-primary",onClick:a[12]||(a[12]=(...s)=>t(k)&&t(k)(...s)),disabled:t(o).processing},[t(o).processing?(n(),l("span",ve)):r("",!0),f(" Save ")],8,fe)):r("",!0),t(u)=="update"?(n(),l("button",{key:1,class:"btn btn-primary",onClick:a[13]||(a[13]=(...s)=>t(y)&&t(y)(...s)),disabled:t(o).processing},[t(o).processing?(n(),l("span",ge)):r("",!0),f(" Save changes ")],8,be)):r("",!0)])])])]),e("div",ke,[e("div",ye,[e("div",Ce,[e("div",xe,[we,e("div",Se,[e("select",{class:"form-select",value:t(c).perPage,onInput:a[14]||(a[14]=s=>t(h)("perPage",s.target.value))},[(n(),l(v,null,b([5,10,25,50,100],s=>e("option",{value:String(s)},i(s),9,Ne)),64))],40,Ee)]),Ve])]),e("div",Pe,[e("div",Fe,[Le,e("div",je,[e("input",{type:"search",placeholder:"Search",class:"form-control",value:t(c).query,onInput:a[15]||(a[15]=s=>t(h)("query",s.target.value))},null,40,Ie)])])])])]),e("div",Ue,[e("table",$e,[e("thead",Ae,[e("tr",null,[e("th",{class:"sortable",onClick:a[16]||(a[16]=s=>t(h)("sort","name"))},[f(" Name "),t(c).sort=="name"&&t(c).order=="desc"?(n(),l("i",Te)):r("",!0),t(c).sort=="name"&&t(c).order=="asc"?(n(),l("i",Be)):r("",!0)]),Me])]),e("tbody",ze,[t(d).data.length<=0?(n(),l("tr",He,Re)):r("",!0),(n(!0),l(v,null,b(t(d).data,s=>(n(),l("tr",null,[e("td",qe,i(s.name),1),e("td",null,[e("div",De,[e("a",{class:"btn btn-icon btn-label-primary waves-effect",onClick:I=>t(V)(s),href:"javascript:void(0);"},Ge,8,Qe),e("a",{class:"btn btn-icon btn-label-danger waves-effect",href:"javascript:void(0);",onClick:I=>t(N)(s.id)},Xe,8,Ke)])])]))),256))])])]),t(d)&&t(d).meta.links?(n(),l("div",Ye,[e("div",Ze,[e("div",et,[e("div",tt," Showing "+i(t(d).meta.from)+" to "+i(t(d).meta.to)+" of "+i(t(d).meta.total)+" entries ",1)]),e("div",st,[e("nav",ot,[e("ul",at,[(n(!0),l(v,null,b(t(d).meta.links,s=>(n(),l("li",nt,[x(j,{class:_(["page-link",{active:s.active}]),href:s.url,only:["data","params"]},{default:T(()=>[e("span",{innerHTML:s.label},null,8,lt)]),_:2},1032,["class","href"])]))),256))])])])])])):r("",!0)])}}});export{mt as default};
