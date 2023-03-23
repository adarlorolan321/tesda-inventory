import{J as I,c as i,a as s,u as t,t as r,f as d,g as p,v as h,n as u,i as L,j as V,e as m,F as f,h as b,r as w,o as n,b as $,w as U}from"./app-e68d8b80.js";import{u as z}from"./Crud-17e7478b.js";import{A as T}from"./AdminLayout-b92b99b7.js";const B={class:"card card-action"},M={class:"card-header"},q=s("div",{class:"card-action-title align-items-center"},[s("h5",{class:"card-title"},"PARENTS")],-1),H={class:"card-action-element"},O={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offCanvasForm","data-bs-backdrop":"static","aria-labelledby":"offCanvasFormLabel"},Q={class:"offcanvas-header"},J={id:"offCanvasFormLabel",class:"offcanvas-title"},R={key:0,type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},W={class:"offcanvas-body mt-4 mx-0 flex-grow-0"},G={class:"form-group mb-3"},K=s("label",{for:"name"},"First Name",-1),X={class:"invalid-feedback"},Y={class:"form-group mb-3"},Z=s("label",{for:"name"},"Last Name",-1),D={class:"invalid-feedback"},ss={class:"form-group mb-3"},ts=s("label",{for:"name"},"Email",-1),es={class:"invalid-feedback"},os={class:"form-group mb-3"},as=s("label",{for:"name"},"Phone",-1),ns={class:"invalid-feedback"},is={class:"form-group mb-3"},ls=s("div",{class:""},"Status",-1),rs={class:"switch"},ds=["checked"],cs=s("span",{class:"switch-toggle-slider"},[s("span",{class:"switch-on"}),s("span",{class:"switch-off"})],-1),_s={key:0,class:"switch-label"},ps={key:1,class:"switch-label"},us={class:"form-group mb-4"},ms=s("label",{for:"name"},"Profile Photo",-1),hs={key:1},vs={class:"dropzone",ref:"dropzone"},fs=s("div",{class:"dz-message needsclick"}," Please Wait ",-1),bs=[fs],gs={class:"invalid-feedback"},ks=["disabled"],ys={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},ws=["disabled"],Cs={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},xs={class:"card-body"},Ps={class:"row justify-content-between"},Es={class:"col-auto"},Ns={class:"d-flex align-items-center gap-2"},Ss=s("div",{class:"w-auto"},"Show",-1),Fs={class:"flex-1"},js=["value"],As=["value"],Is=s("div",{class:"w-auto"},"entries",-1),Ls={class:"col-auto"},Vs={class:"d-flex gap-2 align-items-center"},$s=s("div",{class:"w-auto"},"Search:",-1),Us={class:"flex-1"},zs=["value"],Ts={class:"table-responsive text-nowrap"},Bs={class:"table"},Ms={class:"table-light"},qs=s("th",{class:"sortable"},"Photo",-1),Hs={key:0,class:"ti ti-arrow-up"},Os={key:1,class:"ti ti-arrow-down"},Qs={key:0,class:"ti ti-arrow-up"},Js={key:1,class:"ti ti-arrow-down"},Rs={key:0,class:"ti ti-arrow-up"},Ws={key:1,class:"ti ti-arrow-down"},Gs=s("th",null,"Actions",-1),Ks={class:"table-border-bottom-0"},Xs={key:0},Ys=s("td",{colspan:"999999",class:"text-center"}," No item found ",-1),Zs=[Ys],Ds={key:0,class:"avatar avatar-lg"},st=["src"],tt={key:1,class:"avatar avatar-lg"},et=s("img",{style:{"object-fit":"contain"},src:"/assets/img/image_not_available.png",alt:"Avatar",class:"rounded-circle shadow-sm"},null,-1),ot=[et],at={class:"d-flex gap-2"},nt=["onClick"],it=s("i",{class:"ti ti-pencil"},null,-1),lt=[it],rt=["onClick"],dt=s("i",{class:"ti ti-trash"},null,-1),ct=[dt],_t={key:0,class:"card-footer py-3 border-top"},pt={class:"row justify-content-between"},ut={class:"col-auto"},mt={class:"table_info"},ht={class:"col-auto"},vt={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},ft={class:"pagination mb-0"},bt={class:"page-item"},gt=["innerHTML"],kt={layout:T},Pt=Object.assign(kt,{__name:"Index",setup(yt){I();const C={id:null,first_name:null,last_name:null,phone:null,email:null,status:!0,role:"Client",profile_photo:null},x="user.parents";let{isLoadingComponents:P,paginatedData:c,form:a,createPromise:g,updatePromise:k,deletePromise:E,handleCreate:y,serverQuery:l,handleServerQuery:_,handleEdit:N,formState:v}=z(C,x);return(S,o)=>{const F=w("dropzone"),j=w("inertia-link");return n(),i("div",B,[s("div",M,[q,s("div",H,[s("button",{class:"btn btn-primary",type:"button",onClick:o[0]||(o[0]=(...e)=>t(y)&&t(y)(...e)),"data-bs-toggle":"offcanvas","data-bs-target":"#offCanvasForm","aria-controls":"offCanvasForm"}," Add Parent "),s("div",O,[s("div",Q,[s("h5",J,r(t(v)=="create"?"Add":"Update")+" Parent ",1),t(a).processing?d("",!0):(n(),i("button",R))]),s("div",W,[s("div",G,[K,p(s("input",{type:"text",id:"first_name",class:u(["form-control",{"is-invalid":t(a).errors.first_name}]),"onUpdate:modelValue":o[1]||(o[1]=e=>t(a).first_name=e),onInput:o[2]||(o[2]=e=>t(a).clearErrors("first_name")),placeholder:"Enter First Name"},null,34),[[h,t(a).first_name]]),s("div",X,r(t(a).errors.first_name),1)]),s("div",Y,[Z,p(s("input",{type:"text",id:"last_name",class:u(["form-control",{"is-invalid":t(a).errors.last_name}]),"onUpdate:modelValue":o[3]||(o[3]=e=>t(a).last_name=e),onInput:o[4]||(o[4]=e=>t(a).clearErrors("last_name")),placeholder:"Enter Last Name"},null,34),[[h,t(a).last_name]]),s("div",D,r(t(a).errors.last_name),1)]),s("div",ss,[ts,p(s("input",{type:"text",id:"email",class:u(["form-control",{"is-invalid":t(a).errors.email}]),"onUpdate:modelValue":o[5]||(o[5]=e=>t(a).email=e),onInput:o[6]||(o[6]=e=>t(a).clearErrors("email")),placeholder:"Enter Email"},null,34),[[h,t(a).email]]),s("div",es,r(t(a).errors.email),1)]),s("div",os,[as,p(s("input",{type:"text",id:"phone",class:u(["form-control",{"is-invalid":t(a).errors.phone}]),"onUpdate:modelValue":o[7]||(o[7]=e=>t(a).phone=e),onInput:o[8]||(o[8]=e=>t(a).clearErrors("phone")),placeholder:"Enter Phone"},null,34),[[h,t(a).phone]]),s("div",ns,r(t(a).errors.phone),1)]),s("div",is,[ls,s("label",rs,[p(s("input",{type:"checkbox","onUpdate:modelValue":o[9]||(o[9]=e=>t(a).status=e),checked:t(a).status,class:"switch-input"},null,8,ds),[[L,t(a).status]]),cs,t(a).status==1?(n(),i("span",_s,"Active")):(n(),i("span",ps,"In-active"))])]),s("div",us,[ms,t(P)?(n(),V(F,{key:0,collection:"profile_photo",url:S.route("api.media.upload"),model:"User",value:t(a).profile_photo,onInput:o[10]||(o[10]=e=>t(a).profile_photo=e),message:"Drop files here or click to upload profile photo",acceptedFiles:"application/pdf,image/jpeg,image/png"},null,8,["url","value"])):(n(),i("div",hs,[s("div",vs,bs,512)])),s("div",gs,r(t(a).errors.first_name),1)]),t(v)=="create"?(n(),i("button",{key:0,class:"btn btn-primary",onClick:o[11]||(o[11]=(...e)=>t(g)&&t(g)(...e)),disabled:t(a).processing},[t(a).processing?(n(),i("span",ys)):d("",!0),m(" Save ")],8,ks)):d("",!0),t(v)=="update"?(n(),i("button",{key:1,class:"btn btn-primary",onClick:o[12]||(o[12]=(...e)=>t(k)&&t(k)(...e)),disabled:t(a).processing},[t(a).processing?(n(),i("span",Cs)):d("",!0),m(" Save changes ")],8,ws)):d("",!0)])])])]),s("div",xs,[s("div",Ps,[s("div",Es,[s("div",Ns,[Ss,s("div",Fs,[s("select",{class:"form-select",value:t(l).perPage,onInput:o[13]||(o[13]=e=>t(_)("perPage",e.target.value))},[(n(),i(f,null,b([5,10,25,50,100],e=>s("option",{value:String(e)},r(e),9,As)),64))],40,js)]),Is])]),s("div",Ls,[s("div",Vs,[$s,s("div",Us,[s("input",{type:"search",placeholder:"Search",class:"form-control",value:t(l).query,onInput:o[14]||(o[14]=e=>t(_)("query",e.target.value))},null,40,zs)])])])])]),s("div",Ts,[s("table",Bs,[s("thead",Ms,[s("tr",null,[qs,s("th",{class:"sortable",onClick:o[15]||(o[15]=e=>t(_)("sort","name"))},[m(" Name "),t(l).sort=="name"&&t(l).order=="desc"?(n(),i("i",Hs)):d("",!0),t(l).sort=="name"&&t(l).order=="asc"?(n(),i("i",Os)):d("",!0)]),s("th",{class:"sortable",onClick:o[16]||(o[16]=e=>t(_)("sort","email"))},[m(" Email "),t(l).sort=="email"&&t(l).order=="desc"?(n(),i("i",Qs)):d("",!0),t(l).sort=="email"&&t(l).order=="asc"?(n(),i("i",Js)):d("",!0)]),s("th",{class:"sortable",onClick:o[17]||(o[17]=e=>t(_)("sort","phone"))},[m(" Phone "),t(l).sort=="phone"&&t(l).order=="desc"?(n(),i("i",Rs)):d("",!0),t(l).sort=="phone"&&t(l).order=="asc"?(n(),i("i",Ws)):d("",!0)]),Gs])]),s("tbody",Ks,[t(c).data.length<=0?(n(),i("tr",Xs,Zs)):d("",!0),(n(!0),i(f,null,b(t(c).data,e=>(n(),i("tr",{key:e},[s("td",null,[e.profile_photo&&e.profile_photo.src?(n(),i("div",Ds,[s("img",{src:e.profile_photo.src,alt:"Avatar",class:"rounded-circle"},null,8,st)])):(n(),i("div",tt,ot))]),s("td",null,r(e.name),1),s("td",null,r(e.email),1),s("td",null,r(e.phone),1),s("td",null,[s("div",at,[s("a",{class:"btn btn-icon btn-label-primary waves-effect",onClick:A=>t(N)(e),href:"javascript:void(0);"},lt,8,nt),s("a",{class:"btn btn-icon btn-label-danger waves-effect",href:"javascript:void(0);",onClick:A=>t(E)(e.id)},ct,8,rt)])])]))),128))])])]),t(c)&&t(c).meta.links?(n(),i("div",_t,[s("div",pt,[s("div",ut,[s("div",mt," Showing "+r(t(c).meta.from)+" to "+r(t(c).meta.to)+" of "+r(t(c).meta.total)+" entries ",1)]),s("div",ht,[s("nav",vt,[s("ul",ft,[(n(!0),i(f,null,b(t(c).meta.links,e=>(n(),i("li",bt,[$(j,{class:u(["page-link",{active:e.active}]),href:e.url,only:["data","params"]},{default:U(()=>[s("span",{innerHTML:e.label},null,8,gt)]),_:2},1032,["class","href"])]))),256))])])])])])):d("",!0)])}}});export{Pt as default};
