import{J as L,c as l,a as s,u as e,t as i,f as r,g as _,v as u,n as p,i as j,j as A,k as U,e as f,F as v,h as b,r as w,o as n,b as $,w as z}from"./app-5ae86d36.js";import{u as T}from"./Crud-71a35303.js";import{A as M}from"./AdminLayout-11bcf27b.js";const B={class:"card card-action"},H={class:"card-header"},O=s("div",{class:"card-action-title align-items-center"},[s("h5",{class:"card-title"},"COACHES / STAFFS")],-1),q={class:"card-action-element"},D={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offCanvasForm","data-bs-backdrop":"static","aria-labelledby":"offCanvasFormLabel"},Q={class:"offcanvas-header"},J={id:"offCanvasFormLabel",class:"offcanvas-title"},R={key:0,type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},W={class:"offcanvas-body mt-4 mx-0 flex-grow-0"},G={class:"form-group mb-3"},K=s("label",{for:"name"},"First Name",-1),X={class:"invalid-feedback"},Y={class:"form-group mb-3"},Z=s("label",{for:"name"},"Last Name",-1),ss={class:"invalid-feedback"},es={class:"form-group mb-3"},ts=s("label",{for:"name"},"Email",-1),os={class:"invalid-feedback"},as={class:"form-group mb-3"},ns=s("label",{for:"name"},"Phone",-1),ls={class:"invalid-feedback"},is={class:"form-group mb-3"},rs=s("label",{for:"role"},"Role",-1),ds=s("option",{value:"Coach"},"Coach",-1),cs=s("option",{value:"Staff"},"Staff",-1),_s=[ds,cs],ps={class:"invalid-feedback"},us={class:"form-group mb-3"},ms=s("div",{class:""},"Status",-1),hs={class:"switch"},fs=["checked"],vs=s("span",{class:"switch-toggle-slider"},[s("span",{class:"switch-on"}),s("span",{class:"switch-off"})],-1),bs={key:0,class:"switch-label"},gs={key:1,class:"switch-label"},ks={class:"form-group mb-4"},ys=s("label",{for:"name"},"Profile Photo",-1),ws={key:1},Cs={class:"dropzone",ref:"dropzone"},xs=s("div",{class:"dz-message needsclick"}," Please Wait ",-1),Ss=[xs],Es={class:"invalid-feedback"},Fs=["disabled"],Ns={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},Ps=["disabled"],Vs={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},Is={class:"card-body"},Ls={class:"row justify-content-between"},js={class:"col-auto"},As={class:"d-flex align-items-center gap-2"},Us=s("div",{class:"w-auto"},"Show",-1),$s={class:"flex-1"},zs=["value"],Ts=["value"],Ms=s("div",{class:"w-auto"},"entries",-1),Bs={class:"col-auto"},Hs={class:"d-flex gap-2 align-items-center"},Os=s("div",{class:"w-auto"},"Search:",-1),qs={class:"flex-1"},Ds=["value"],Qs={class:"table-responsive text-nowrap"},Js={class:"table"},Rs={class:"table-light"},Ws={key:0,class:"ti ti-arrow-up"},Gs={key:1,class:"ti ti-arrow-down"},Ks=s("th",null,"Actions",-1),Xs={class:"table-border-bottom-0"},Ys={key:0},Zs=s("td",{colspan:"999999",class:"text-center"},"No item found",-1),se=[Zs],ee={style:{width:"90%"}},te={class:"d-flex gap-2"},oe=["onClick"],ae=s("i",{class:"ti ti-pencil"},null,-1),ne=[ae],le=["onClick"],ie=s("i",{class:"ti ti-trash"},null,-1),re=[ie],de={key:0,class:"card-footer py-3 border-top"},ce={class:"row justify-content-between"},_e={class:"col-auto"},pe={class:"table_info"},ue={class:"col-auto"},me={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},he={class:"pagination mb-0"},fe={class:"page-item"},ve=["innerHTML"],be={layout:M},Ce=Object.assign(be,{__name:"Index",setup(ge){L();const C={first_name:null,last_name:null,phone:null,email:null,status:null,role:null,profile_photo:null},x="user.coach";let{isLoadingComponents:S,paginatedData:d,form:o,createPromise:g,updatePromise:k,deletePromise:E,handleCreate:y,serverQuery:c,handleServerQuery:m,handleEdit:F,formState:h}=T(C,x);return(N,a)=>{const P=w("dropzone"),V=w("inertia-link");return n(),l("div",B,[s("div",H,[O,s("div",q,[s("button",{class:"btn btn-primary",type:"button",onClick:a[0]||(a[0]=(...t)=>e(y)&&e(y)(...t)),"data-bs-toggle":"offcanvas","data-bs-target":"#offCanvasForm","aria-controls":"offCanvasForm"}," Add Coach / Staff "),s("div",D,[s("div",Q,[s("h5",J,i(e(h)=="create"?"Add":"Update"),1),e(o).processing?r("",!0):(n(),l("button",R))]),s("div",W,[s("div",G,[K,_(s("input",{type:"text",id:"first_name",class:p(["form-control",{"is-invalid":e(o).errors.first_name}]),"onUpdate:modelValue":a[1]||(a[1]=t=>e(o).first_name=t),onInput:a[2]||(a[2]=t=>e(o).clearErrors("first_name")),placeholder:"Enter First Name"},null,34),[[u,e(o).first_name]]),s("div",X,i(e(o).errors.first_name),1)]),s("div",Y,[Z,_(s("input",{type:"text",id:"last_name",class:p(["form-control",{"is-invalid":e(o).errors.last_name}]),"onUpdate:modelValue":a[3]||(a[3]=t=>e(o).last_name=t),onInput:a[4]||(a[4]=t=>e(o).clearErrors("last_name")),placeholder:"Enter Last Name"},null,34),[[u,e(o).last_name]]),s("div",ss,i(e(o).errors.last_name),1)]),s("div",es,[ts,_(s("input",{type:"text",id:"email",class:p(["form-control",{"is-invalid":e(o).errors.email}]),"onUpdate:modelValue":a[5]||(a[5]=t=>e(o).email=t),onInput:a[6]||(a[6]=t=>e(o).clearErrors("email")),placeholder:"Enter Email"},null,34),[[u,e(o).email]]),s("div",os,i(e(o).errors.email),1)]),s("div",as,[ns,_(s("input",{type:"text",id:"phone",class:p(["form-control",{"is-invalid":e(o).errors.phone}]),"onUpdate:modelValue":a[7]||(a[7]=t=>e(o).phone=t),onInput:a[8]||(a[8]=t=>e(o).clearErrors("phone")),placeholder:"Enter Phone"},null,34),[[u,e(o).phone]]),s("div",ls,i(e(o).errors.phone),1)]),s("div",is,[rs,_(s("select",{class:p([{"is-invalid":e(o).errors.role},"form-select"]),"onUpdate:modelValue":a[9]||(a[9]=t=>e(o).role=t)},_s,2),[[j,e(o).role]]),s("div",ps,i(e(o).errors.role),1)]),s("div",us,[ms,s("label",hs,[_(s("input",{type:"checkbox","onUpdate:modelValue":a[10]||(a[10]=t=>e(o).status=t),checked:e(o).status,class:"switch-input"},null,8,fs),[[A,e(o).status]]),vs,e(o).status==1?(n(),l("span",bs,"Active")):(n(),l("span",gs,"In-active"))])]),s("div",ks,[ys,e(S)?(n(),U(P,{key:0,collection:"profile_photo",url:N.route("api.media.upload"),model:"User",value:e(o).profile_photo,onInput:a[11]||(a[11]=t=>e(o).profile_photo=t),message:"Drop files here or click to upload profile photo",acceptedFiles:"application/pdf,image/jpeg,image/png"},null,8,["url","value"])):(n(),l("div",ws,[s("div",Cs,Ss,512)])),s("div",Es,i(e(o).errors.first_name),1)]),e(h)=="create"?(n(),l("button",{key:0,class:"btn btn-primary",onClick:a[12]||(a[12]=(...t)=>e(g)&&e(g)(...t)),disabled:e(o).processing},[e(o).processing?(n(),l("span",Ns)):r("",!0),f(" Save ")],8,Fs)):r("",!0),e(h)=="update"?(n(),l("button",{key:1,class:"btn btn-primary",onClick:a[13]||(a[13]=(...t)=>e(k)&&e(k)(...t)),disabled:e(o).processing},[e(o).processing?(n(),l("span",Vs)):r("",!0),f(" Save changes ")],8,Ps)):r("",!0)])])])]),s("div",Is,[s("div",Ls,[s("div",js,[s("div",As,[Us,s("div",$s,[s("select",{class:"form-select",value:e(c).perPage,onInput:a[14]||(a[14]=t=>e(m)("perPage",t.target.value))},[(n(),l(v,null,b([5,10,25,50,100],t=>s("option",{value:String(t)},i(t),9,Ts)),64))],40,zs)]),Ms])]),s("div",Bs,[s("div",Hs,[Os,s("div",qs,[s("input",{type:"search",placeholder:"Search",class:"form-control",value:e(c).query,onInput:a[15]||(a[15]=t=>e(m)("query",t.target.value))},null,40,Ds)])])])])]),s("div",Qs,[s("table",Js,[s("thead",Rs,[s("tr",null,[s("th",{class:"sortable",onClick:a[16]||(a[16]=t=>e(m)("sort","name"))},[f(" Name "),e(c).sort=="name"&&e(c).order=="desc"?(n(),l("i",Ws)):r("",!0),e(c).sort=="name"&&e(c).order=="asc"?(n(),l("i",Gs)):r("",!0)]),Ks])]),s("tbody",Xs,[e(d).data.length<=0?(n(),l("tr",Ys,se)):r("",!0),(n(!0),l(v,null,b(e(d).data,t=>(n(),l("tr",null,[s("td",ee,i(t.name),1),s("td",null,[s("div",te,[s("a",{class:"btn btn-icon btn-label-primary waves-effect",onClick:I=>e(F)(t),href:"javascript:void(0);"},ne,8,oe),s("a",{class:"btn btn-icon btn-label-danger waves-effect",href:"javascript:void(0);",onClick:I=>e(E)(t.id)},re,8,le)])])]))),256))])])]),e(d)&&e(d).meta.links?(n(),l("div",de,[s("div",ce,[s("div",_e,[s("div",pe," Showing "+i(e(d).meta.from)+" to "+i(e(d).meta.to)+" of "+i(e(d).meta.total)+" entries ",1)]),s("div",ue,[s("nav",me,[s("ul",he,[(n(!0),l(v,null,b(e(d).meta.links,t=>(n(),l("li",fe,[$(V,{class:p(["page-link",{active:t.active}]),href:t.url,only:["data","params"]},{default:z(()=>[s("span",{innerHTML:t.label},null,8,ve)]),_:2},1032,["class","href"])]))),256))])])])])])):r("",!0)])}}});export{Ce as default};
