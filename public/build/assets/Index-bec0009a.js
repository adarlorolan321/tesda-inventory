import{J as j,c as i,a as s,u as e,t as r,f as d,g as p,v as h,n as m,i as q,j as A,e as c,F as v,h as b,r as x,o as n,b as P,w as E}from"./app-df146a38.js";import{u as U}from"./Crud-f07ae118.js";import{A as z}from"./AdminLayout-fdb50f3b.js";const T={class:"card card-action"},B={class:"card-header"},M=s("div",{class:"card-action-title align-items-center"},[s("h5",{class:"card-title"},"PARENTS")],-1),H={class:"card-action-element"},O={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offCanvasForm","data-bs-backdrop":"static","aria-labelledby":"offCanvasFormLabel"},Q={class:"offcanvas-header"},J={id:"offCanvasFormLabel",class:"offcanvas-title"},R={key:0,type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},W={class:"offcanvas-body mt-4 mx-0 flex-grow-0"},G={class:"form-group mb-3"},K=s("label",{for:"name"},[c("First Name "),s("span",{class:"required"},"*")],-1),X={class:"invalid-feedback"},Y={class:"form-group mb-3"},Z=s("label",{for:"name"},[c("Last Name "),s("span",{class:"required"},"*")],-1),D={class:"invalid-feedback"},ss={class:"form-group mb-3"},es=s("label",{for:"name"},[c("Email "),s("span",{class:"required"},"*")],-1),ts={class:"invalid-feedback"},os={class:"form-group mb-3"},as=s("label",{for:"name"},[c("Phone "),s("span",{class:"required"},"*")],-1),ns={class:"invalid-feedback"},is={class:"form-group mb-3"},ls=s("div",{class:""},[c("Status "),s("span",{class:"required"},"*")],-1),rs={class:"switch"},ds=["checked"],cs=s("span",{class:"switch-toggle-slider"},[s("span",{class:"switch-on"}),s("span",{class:"switch-off"})],-1),_s={key:0,class:"switch-label"},us={key:1,class:"switch-label"},ps={class:"form-group mb-4"},ms=s("label",{for:"name"},"Profile Photo",-1),hs={key:1},fs={class:"dropzone",ref:"dropzone"},vs=s("div",{class:"dz-message needsclick"}," Please Wait ",-1),bs=[vs],gs={class:"invalid-feedback"},ks=["disabled"],ys={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},ws=["disabled"],Cs={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},xs={class:"card-body"},Ps={class:"row justify-content-between"},Es={class:"col-auto"},Ns={class:"d-flex align-items-center gap-2"},Ss=s("div",{class:"w-auto"},"Show",-1),Fs={class:"flex-1"},Is=["value"],Ls=["value"],Vs=s("div",{class:"w-auto"},"entries",-1),$s={class:"col-auto"},js={class:"d-flex gap-2 align-items-center"},qs=s("div",{class:"w-auto"},"Search:",-1),As={class:"flex-1"},Us=["value"],zs={class:"table-responsive text-nowrap"},Ts={class:"table"},Bs={class:"table-light"},Ms={key:0,class:"ti ti-arrow-up"},Hs={key:1,class:"ti ti-arrow-down"},Os={key:0,class:"ti ti-arrow-up"},Qs={key:1,class:"ti ti-arrow-down"},Js={key:0,class:"ti ti-arrow-up"},Rs={key:1,class:"ti ti-arrow-down"},Ws=s("th",null,"Actions",-1),Gs={class:"table-border-bottom-0"},Ks={key:0},Xs=s("td",{colspan:"999999",class:"text-center"}," No item found ",-1),Ys=[Xs],Zs={class:"d-flex gap-2"},Ds=s("i",{class:"ti ti-eye"},null,-1),se=["onClick"],ee=s("i",{class:"ti ti-pencil"},null,-1),te=[ee],oe=["onClick"],ae=s("i",{class:"ti ti-trash"},null,-1),ne=[ae],ie={key:0,class:"card-footer py-3 border-top"},le={class:"row justify-content-between"},re={class:"col-auto"},de={class:"table_info"},ce={class:"col-auto"},_e={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},ue={class:"pagination mb-0"},pe={class:"page-item"},me=["innerHTML"],he={layout:z},ke=Object.assign(he,{__name:"Index",setup(fe){j();const N={id:null,first_name:null,last_name:null,phone:null,email:null,status:!0,role:"Client",profile_photo:null},S="user.parents";let{isLoadingComponents:F,paginatedData:_,form:a,createPromise:g,updatePromise:k,deletePromise:I,handleCreate:y,serverQuery:l,handleServerQuery:u,handleEdit:L,formState:f}=U(N,S);return(w,o)=>{const V=x("dropzone"),C=x("inertia-link");return n(),i("div",T,[s("div",B,[M,s("div",H,[s("button",{class:"btn btn-primary",type:"button",onClick:o[0]||(o[0]=(...t)=>e(y)&&e(y)(...t)),"data-bs-toggle":"offcanvas","data-bs-target":"#offCanvasForm","aria-controls":"offCanvasForm"}," Add Parent "),s("div",O,[s("div",Q,[s("h5",J,r(e(f)=="create"?"Add":"Update")+" Parent ",1),e(a).processing?d("",!0):(n(),i("button",R))]),s("div",W,[s("div",G,[K,p(s("input",{type:"text",id:"first_name",class:m(["form-control",{"is-invalid":e(a).errors.first_name}]),"onUpdate:modelValue":o[1]||(o[1]=t=>e(a).first_name=t),onInput:o[2]||(o[2]=t=>e(a).clearErrors("first_name")),placeholder:"Enter First Name"},null,34),[[h,e(a).first_name]]),s("div",X,r(e(a).errors.first_name),1)]),s("div",Y,[Z,p(s("input",{type:"text",id:"last_name",class:m(["form-control",{"is-invalid":e(a).errors.last_name}]),"onUpdate:modelValue":o[3]||(o[3]=t=>e(a).last_name=t),onInput:o[4]||(o[4]=t=>e(a).clearErrors("last_name")),placeholder:"Enter Last Name"},null,34),[[h,e(a).last_name]]),s("div",D,r(e(a).errors.last_name),1)]),s("div",ss,[es,p(s("input",{type:"text",id:"email",class:m(["form-control",{"is-invalid":e(a).errors.email}]),"onUpdate:modelValue":o[5]||(o[5]=t=>e(a).email=t),onInput:o[6]||(o[6]=t=>e(a).clearErrors("email")),placeholder:"Enter Email"},null,34),[[h,e(a).email]]),s("div",ts,r(e(a).errors.email),1)]),s("div",os,[as,p(s("input",{type:"text",id:"phone",class:m(["form-control",{"is-invalid":e(a).errors.phone}]),"onUpdate:modelValue":o[7]||(o[7]=t=>e(a).phone=t),onInput:o[8]||(o[8]=t=>e(a).clearErrors("phone")),placeholder:"Enter Phone"},null,34),[[h,e(a).phone]]),s("div",ns,r(e(a).errors.phone),1)]),s("div",is,[ls,s("label",rs,[p(s("input",{type:"checkbox","onUpdate:modelValue":o[9]||(o[9]=t=>e(a).status=t),checked:e(a).status,class:"switch-input"},null,8,ds),[[q,e(a).status]]),cs,e(a).status==1?(n(),i("span",_s,"Active")):(n(),i("span",us,"In-active"))])]),s("div",ps,[ms,e(F)?(n(),A(V,{key:0,collection:"profile_photo",url:w.route("api.media.upload"),model:"User",value:e(a).profile_photo,onInput:o[10]||(o[10]=t=>e(a).profile_photo=t),message:"Drop files here or click to upload profile photo",acceptedFiles:"application/pdf,image/jpeg,image/png"},null,8,["url","value"])):(n(),i("div",hs,[s("div",fs,bs,512)])),s("div",gs,r(e(a).errors.first_name),1)]),e(f)=="create"?(n(),i("button",{key:0,class:"btn btn-primary",onClick:o[11]||(o[11]=(...t)=>e(g)&&e(g)(...t)),disabled:e(a).processing},[e(a).processing?(n(),i("span",ys)):d("",!0),c(" Save ")],8,ks)):d("",!0),e(f)=="update"?(n(),i("button",{key:1,class:"btn btn-primary",onClick:o[12]||(o[12]=(...t)=>e(k)&&e(k)(...t)),disabled:e(a).processing},[e(a).processing?(n(),i("span",Cs)):d("",!0),c(" Save changes ")],8,ws)):d("",!0)])])])]),s("div",xs,[s("div",Ps,[s("div",Es,[s("div",Ns,[Ss,s("div",Fs,[s("select",{class:"form-select",value:e(l).perPage,onInput:o[13]||(o[13]=t=>e(u)("perPage",t.target.value))},[(n(),i(v,null,b([5,10,25,50,100],t=>s("option",{value:String(t)},r(t),9,Ls)),64))],40,Is)]),Vs])]),s("div",$s,[s("div",js,[qs,s("div",As,[s("input",{type:"search",placeholder:"Search",class:"form-control",value:e(l).query,onInput:o[14]||(o[14]=t=>e(u)("query",t.target.value))},null,40,Us)])])])])]),s("div",zs,[s("table",Ts,[s("thead",Bs,[s("tr",null,[s("th",{class:"sortable",onClick:o[15]||(o[15]=t=>e(u)("sort","name"))},[c(" Name "),e(l).sort=="name"&&e(l).order=="desc"?(n(),i("i",Ms)):d("",!0),e(l).sort=="name"&&e(l).order=="asc"?(n(),i("i",Hs)):d("",!0)]),s("th",{class:"sortable",onClick:o[16]||(o[16]=t=>e(u)("sort","email"))},[c(" Email "),e(l).sort=="email"&&e(l).order=="desc"?(n(),i("i",Os)):d("",!0),e(l).sort=="email"&&e(l).order=="asc"?(n(),i("i",Qs)):d("",!0)]),s("th",{class:"sortable",onClick:o[17]||(o[17]=t=>e(u)("sort","phone"))},[c(" Phone "),e(l).sort=="phone"&&e(l).order=="desc"?(n(),i("i",Js)):d("",!0),e(l).sort=="phone"&&e(l).order=="asc"?(n(),i("i",Rs)):d("",!0)]),Ws])]),s("tbody",Gs,[e(_).data.length<=0?(n(),i("tr",Ks,Ys)):d("",!0),(n(!0),i(v,null,b(e(_).data,t=>(n(),i("tr",{key:t},[s("td",null,r(t.name),1),s("td",null,r(t.email),1),s("td",null,r(t.phone),1),s("td",null,[s("div",Zs,[P(C,{class:"btn btn-icon btn-label-info waves-effect",href:w.route("user.parents.show",t.id)},{default:E(()=>[Ds]),_:2},1032,["href"]),s("a",{class:"btn btn-icon btn-label-primary waves-effect",onClick:$=>e(L)(t),href:"javascript:void(0);"},te,8,se),s("a",{class:"btn btn-icon btn-label-danger waves-effect",href:"javascript:void(0);",onClick:$=>e(I)(t.id)},ne,8,oe)])])]))),128))])])]),e(_)&&e(_).meta.links?(n(),i("div",ie,[s("div",le,[s("div",re,[s("div",de," Showing "+r(e(_).meta.from)+" to "+r(e(_).meta.to)+" of "+r(e(_).meta.total)+" entries ",1)]),s("div",ce,[s("nav",_e,[s("ul",ue,[(n(!0),i(v,null,b(e(_).meta.links,t=>(n(),i("li",pe,[P(C,{class:m(["page-link",{active:t.active}]),href:t.url,only:["data","params"]},{default:E(()=>[s("span",{innerHTML:t.label},null,8,me)]),_:2},1032,["class","href"])]))),256))])])])])])):d("",!0)])}}});export{ke as default};
