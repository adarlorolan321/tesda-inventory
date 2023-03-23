import{J as I,c as i,a as s,u as t,t as d,f as r,g as p,v as h,n as m,i as j,j as L,e as u,F as f,h as b,r as w,o as n,b as V,w as U}from"./app-fa6ae220.js";import{u as z}from"./Crud-92f70905.js";import{A as T}from"./AdminLayout-ede3cc01.js";const B={class:"card card-action"},M={class:"card-header"},q=s("div",{class:"card-action-title align-items-center"},[s("h5",{class:"card-title"},"PARENTS")],-1),H={class:"card-action-element"},O={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offCanvasForm","data-bs-backdrop":"static","aria-labelledby":"offCanvasFormLabel"},Q={class:"offcanvas-header"},R={id:"offCanvasFormLabel",class:"offcanvas-title"},J={key:0,type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},W={class:"offcanvas-body mt-4 mx-0 flex-grow-0"},G={class:"form-group mb-3"},K=s("label",{for:"name"},"First Name",-1),X={class:"invalid-feedback"},Y={class:"form-group mb-3"},Z=s("label",{for:"name"},"Last Name",-1),D={class:"invalid-feedback"},ss={class:"form-group mb-3"},ts=s("label",{for:"name"},"Email",-1),es={class:"invalid-feedback"},os={class:"form-group mb-3"},as=s("label",{for:"name"},"Phone",-1),ns={class:"invalid-feedback"},is={class:"form-group mb-3"},ls=s("div",{class:""},"Status",-1),rs={class:"switch"},ds=["checked"],cs=s("span",{class:"switch-toggle-slider"},[s("span",{class:"switch-on"}),s("span",{class:"switch-off"})],-1),_s={key:0,class:"switch-label"},us={key:1,class:"switch-label"},ps={class:"form-group mb-4"},ms=s("label",{for:"name"},"Profile Photo",-1),hs={key:1},vs={class:"dropzone",ref:"dropzone"},fs=s("div",{class:"dz-message needsclick"}," Please Wait ",-1),bs=[fs],gs={class:"invalid-feedback"},ks=["disabled"],ys={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},ws=["disabled"],Cs={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},xs={class:"card-body"},Ps={class:"row justify-content-between"},Es={class:"col-auto"},Ss={class:"d-flex align-items-center gap-2"},Ns=s("div",{class:"w-auto"},"Show",-1),$s={class:"flex-1"},As=["value"],Fs=["value"],Is=s("div",{class:"w-auto"},"entries",-1),js={class:"col-auto"},Ls={class:"d-flex gap-2 align-items-center"},Vs=s("div",{class:"w-auto"},"Search:",-1),Us={class:"flex-1"},zs=["value"],Ts={class:"table-responsive text-nowrap"},Bs={class:"table"},Ms={class:"table-light"},qs=s("th",{class:"sortable"},"Photo",-1),Hs={key:0,class:"ti ti-arrow-up"},Os={key:1,class:"ti ti-arrow-down"},Qs={key:0,class:"ti ti-arrow-up"},Rs={key:1,class:"ti ti-arrow-down"},Js={key:0,class:"ti ti-arrow-up"},Ws={key:1,class:"ti ti-arrow-down"},Gs={key:0,class:"ti ti-arrow-up"},Ks={key:1,class:"ti ti-arrow-down"},Xs={key:0,class:"ti ti-arrow-up"},Ys={key:1,class:"ti ti-arrow-down"},Zs=s("th",null,"Actions",-1),Ds={class:"table-border-bottom-0"},st={key:0},tt=s("td",{colspan:"999999",class:"text-center"}," No item found ",-1),et=[tt],ot={key:0,class:"avatar avatar-lg"},at=["src"],nt={key:1,class:"avatar avatar-lg"},it=s("img",{style:{"object-fit":"contain"},src:"/assets/img/image_not_available.png",alt:"Avatar",class:"rounded-circle shadow-sm"},null,-1),lt=[it],rt={key:0,class:"badge bg-label-success"},dt={key:1,class:"badge bg-label-danger"},ct={class:"d-flex gap-2"},_t=["onClick"],ut=s("i",{class:"ti ti-pencil"},null,-1),pt=[ut],mt=["onClick"],ht=s("i",{class:"ti ti-trash"},null,-1),vt=[ht],ft={key:0,class:"card-footer py-3 border-top"},bt={class:"row justify-content-between"},gt={class:"col-auto"},kt={class:"table_info"},yt={class:"col-auto"},wt={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},Ct={class:"pagination mb-0"},xt={class:"page-item"},Pt=["innerHTML"],Et={layout:T},Ft=Object.assign(Et,{__name:"Index",setup(St){I();const C={id:null,first_name:null,last_name:null,phone:null,email:null,status:!0,role:"Client",profile_photo:null},x="user.coach";let{isLoadingComponents:P,paginatedData:c,form:a,createPromise:g,updatePromise:k,deletePromise:E,handleCreate:y,serverQuery:l,handleServerQuery:_,handleEdit:S,formState:v}=z(C,x);return(N,o)=>{const $=w("dropzone"),A=w("inertia-link");return n(),i("div",B,[s("div",M,[q,s("div",H,[s("button",{class:"btn btn-primary",type:"button",onClick:o[0]||(o[0]=(...e)=>t(y)&&t(y)(...e)),"data-bs-toggle":"offcanvas","data-bs-target":"#offCanvasForm","aria-controls":"offCanvasForm"}," Add Parent "),s("div",O,[s("div",Q,[s("h5",R,d(t(v)=="create"?"Add":"Update")+" Parent ",1),t(a).processing?r("",!0):(n(),i("button",J))]),s("div",W,[s("div",G,[K,p(s("input",{type:"text",id:"first_name",class:m(["form-control",{"is-invalid":t(a).errors.first_name}]),"onUpdate:modelValue":o[1]||(o[1]=e=>t(a).first_name=e),onInput:o[2]||(o[2]=e=>t(a).clearErrors("first_name")),placeholder:"Enter First Name"},null,34),[[h,t(a).first_name]]),s("div",X,d(t(a).errors.first_name),1)]),s("div",Y,[Z,p(s("input",{type:"text",id:"last_name",class:m(["form-control",{"is-invalid":t(a).errors.last_name}]),"onUpdate:modelValue":o[3]||(o[3]=e=>t(a).last_name=e),onInput:o[4]||(o[4]=e=>t(a).clearErrors("last_name")),placeholder:"Enter Last Name"},null,34),[[h,t(a).last_name]]),s("div",D,d(t(a).errors.last_name),1)]),s("div",ss,[ts,p(s("input",{type:"text",id:"email",class:m(["form-control",{"is-invalid":t(a).errors.email}]),"onUpdate:modelValue":o[5]||(o[5]=e=>t(a).email=e),onInput:o[6]||(o[6]=e=>t(a).clearErrors("email")),placeholder:"Enter Email"},null,34),[[h,t(a).email]]),s("div",es,d(t(a).errors.email),1)]),s("div",os,[as,p(s("input",{type:"text",id:"phone",class:m(["form-control",{"is-invalid":t(a).errors.phone}]),"onUpdate:modelValue":o[7]||(o[7]=e=>t(a).phone=e),onInput:o[8]||(o[8]=e=>t(a).clearErrors("phone")),placeholder:"Enter Phone"},null,34),[[h,t(a).phone]]),s("div",ns,d(t(a).errors.phone),1)]),s("div",is,[ls,s("label",rs,[p(s("input",{type:"checkbox","onUpdate:modelValue":o[9]||(o[9]=e=>t(a).status=e),checked:t(a).status,class:"switch-input"},null,8,ds),[[j,t(a).status]]),cs,t(a).status==1?(n(),i("span",_s,"Active")):(n(),i("span",us,"In-active"))])]),s("div",ps,[ms,t(P)?(n(),L($,{key:0,collection:"profile_photo",url:N.route("api.media.upload"),model:"User",value:t(a).profile_photo,onInput:o[10]||(o[10]=e=>t(a).profile_photo=e),message:"Drop files here or click to upload profile photo",acceptedFiles:"application/pdf,image/jpeg,image/png"},null,8,["url","value"])):(n(),i("div",hs,[s("div",vs,bs,512)])),s("div",gs,d(t(a).errors.first_name),1)]),t(v)=="create"?(n(),i("button",{key:0,class:"btn btn-primary",onClick:o[11]||(o[11]=(...e)=>t(g)&&t(g)(...e)),disabled:t(a).processing},[t(a).processing?(n(),i("span",ys)):r("",!0),u(" Save ")],8,ks)):r("",!0),t(v)=="update"?(n(),i("button",{key:1,class:"btn btn-primary",onClick:o[12]||(o[12]=(...e)=>t(k)&&t(k)(...e)),disabled:t(a).processing},[t(a).processing?(n(),i("span",Cs)):r("",!0),u(" Save changes ")],8,ws)):r("",!0)])])])]),s("div",xs,[s("div",Ps,[s("div",Es,[s("div",Ss,[Ns,s("div",$s,[s("select",{class:"form-select",value:t(l).perPage,onInput:o[13]||(o[13]=e=>t(_)("perPage",e.target.value))},[(n(),i(f,null,b([5,10,25,50,100],e=>s("option",{value:String(e)},d(e),9,Fs)),64))],40,As)]),Is])]),s("div",js,[s("div",Ls,[Vs,s("div",Us,[s("input",{type:"search",placeholder:"Search",class:"form-control",value:t(l).query,onInput:o[14]||(o[14]=e=>t(_)("query",e.target.value))},null,40,zs)])])])])]),s("div",Ts,[s("table",Bs,[s("thead",Ms,[s("tr",null,[qs,s("th",{class:"sortable",onClick:o[15]||(o[15]=e=>t(_)("sort","name"))},[u(" Name "),t(l).sort=="name"&&t(l).order=="desc"?(n(),i("i",Hs)):r("",!0),t(l).sort=="name"&&t(l).order=="asc"?(n(),i("i",Os)):r("",!0)]),s("th",{class:"sortable",onClick:o[16]||(o[16]=e=>t(_)("sort","role"))},[u(" Role "),t(l).sort=="role"&&t(l).order=="desc"?(n(),i("i",Qs)):r("",!0),t(l).sort=="role"&&t(l).order=="asc"?(n(),i("i",Rs)):r("",!0)]),s("th",{class:"sortable",onClick:o[17]||(o[17]=e=>t(_)("sort","email"))},[u(" Email "),t(l).sort=="email"&&t(l).order=="desc"?(n(),i("i",Js)):r("",!0),t(l).sort=="email"&&t(l).order=="asc"?(n(),i("i",Ws)):r("",!0)]),s("th",{class:"sortable",onClick:o[18]||(o[18]=e=>t(_)("sort","phone"))},[u(" Phone "),t(l).sort=="phone"&&t(l).order=="desc"?(n(),i("i",Gs)):r("",!0),t(l).sort=="phone"&&t(l).order=="asc"?(n(),i("i",Ks)):r("",!0)]),s("th",{class:"sortable",onClick:o[19]||(o[19]=e=>t(_)("sort","status"))},[u(" Status "),t(l).sort=="status"&&t(l).order=="desc"?(n(),i("i",Xs)):r("",!0),t(l).sort=="status"&&t(l).order=="asc"?(n(),i("i",Ys)):r("",!0)]),Zs])]),s("tbody",Ds,[t(c).data.length<=0?(n(),i("tr",st,et)):r("",!0),(n(!0),i(f,null,b(t(c).data,e=>(n(),i("tr",{key:e},[s("td",null,[e.profile_photo&&e.profile_photo.src?(n(),i("div",ot,[s("img",{src:e.profile_photo.src,alt:"Avatar",class:"rounded-circle"},null,8,at)])):(n(),i("div",nt,lt))]),s("td",null,d(e.name),1),s("td",null,d(e.role),1),s("td",null,d(e.email),1),s("td",null,d(e.phone),1),s("td",null,[e.status==1?(n(),i("span",rt,"Active")):(n(),i("span",dt,"In-active"))]),s("td",null,[s("div",ct,[s("a",{class:"btn btn-icon btn-label-primary waves-effect",onClick:F=>t(S)(e),href:"javascript:void(0);"},pt,8,_t),s("a",{class:"btn btn-icon btn-label-danger waves-effect",href:"javascript:void(0);",onClick:F=>t(E)(e.id)},vt,8,mt)])])]))),128))])])]),t(c)&&t(c).meta.links?(n(),i("div",ft,[s("div",bt,[s("div",gt,[s("div",kt," Showing "+d(t(c).meta.from)+" to "+d(t(c).meta.to)+" of "+d(t(c).meta.total)+" entries ",1)]),s("div",yt,[s("nav",wt,[s("ul",Ct,[(n(!0),i(f,null,b(t(c).meta.links,e=>(n(),i("li",xt,[V(A,{class:m(["page-link",{active:e.active}]),href:e.url,only:["data","params"]},{default:U(()=>[s("span",{innerHTML:e.label},null,8,Pt)]),_:2},1032,["class","href"])]))),256))])])])])])):r("",!0)])}}});export{Ft as default};
