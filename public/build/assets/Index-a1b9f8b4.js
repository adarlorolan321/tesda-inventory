import{J as j,o as l,c as i,b as m,u as s,a as e,t as d,e as n,h as z,d as h,v,n as _,f as $,g as c,F as b,i as y,r as k,X as T,w as F}from"./app-55ebbbf9.js";import{u as B}from"./Crud-29d0b57e.js";import{u as R}from"./Validate-f20af535.js";import{A as M}from"./AdminLayout-9b906b59.js";import"./lodash-1512e9f1.js";import"./toastr-b57bc47a.js";const H={class:"card card-action"},O={class:"card-header"},Q=e("div",{class:"card-action-title align-items-center"},[e("h5",{class:"card-title"},"COACHES / STAFF")],-1),J={class:"card-action-element"},W={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offCanvasForm","data-bs-backdrop":"static","aria-labelledby":"offCanvasFormLabel"},X={class:"offcanvas-header"},G={id:"offCanvasFormLabel",class:"offcanvas-title"},K={key:0,type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},Y={class:"offcanvas-body mt-4 mx-0 flex-grow-0"},Z={class:"form-group mb-4 dropzone-profile-photo"},D=e("label",{for:"name"},"Profile Photo",-1),ss={key:1},es={class:"dropzone",ref:"dropzone"},ts=e("div",{class:"dz-message needsclick"}," Please Wait ",-1),os=[ts],as={key:2,class:"v-invalid-feedback"},ls={class:"form-group mb-3"},is=e("label",{for:"name"},[c("First Name "),e("span",{class:"required"},"*")],-1),rs={class:"invalid-feedback"},ns={class:"form-group mb-3"},ds=e("label",{for:"name"},[c("Last Name "),e("span",{class:"required"},"*")],-1),cs={class:"invalid-feedback"},us={class:"form-group mb-3"},ps=e("label",{for:"name"},[c("Email "),e("span",{class:"required"},"*")],-1),_s={class:"invalid-feedback"},ms={class:"form-group mb-3"},hs=e("label",{for:"name"},[c("Phone "),e("span",{class:"required"},"*")],-1),fs={class:"invalid-feedback"},vs={class:"form-group mb-3"},bs=e("label",{for:"role"},[c("Role "),e("span",{class:"required"},"*")],-1),gs={key:0,class:"v-invalid-feedback"},ys={class:"form-group mb-3"},ks=e("div",{class:""},[c(" Status "),e("span",{class:"required"},"*")],-1),ws={class:"switch"},Cs=["checked"],xs=e("span",{class:"switch-toggle-slider"},[e("span",{class:"switch-on"}),e("span",{class:"switch-off"})],-1),Es={key:0,class:"switch-label"},Ss={key:1,class:"switch-label"},Vs={key:0,class:"v-invalid-feedback"},Fs=["disabled"],Ps={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},qs=["disabled"],As={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},Is={class:"card-body"},Ns={class:"row justify-content-between"},Ls={class:"col-auto"},Us={class:"d-flex align-items-center gap-2"},js=e("div",{class:"w-auto"},"Show",-1),zs={class:"flex-1"},$s=["value"],Ts=["value"],Bs=e("div",{class:"w-auto"},"entries",-1),Rs={class:"col-auto"},Ms={class:"d-flex flex-row gap-3"},Hs={class:"d-flex gap-2 align-items-center"},Os={class:"flex-1"},Qs=["value"],Js={class:"table-responsive text-nowrap"},Ws={class:"table"},Xs={class:"table-light",style:{"min-width":"200px"}},Gs=e("th",{class:"sortable"},"Photo",-1),Ks={key:0,class:"ti ti-arrow-up"},Ys={key:1,class:"ti ti-arrow-down"},Zs={key:0,class:"ti ti-arrow-up"},Ds={key:1,class:"ti ti-arrow-down"},se={key:0,class:"ti ti-arrow-up"},ee={key:1,class:"ti ti-arrow-down"},te={key:0,class:"ti ti-arrow-up"},oe={key:1,class:"ti ti-arrow-down"},ae=e("th",{style:{width:"150px"}},"Actions",-1),le={class:"table-border-bottom-0"},ie={key:0},re=e("td",{colspan:"999999",class:"text-center"}," No item found ",-1),ne=[re],de={class:"avatar avatar-lg"},ce=["src"],ue={key:0,class:"badge bg-label-success"},pe={key:1,class:"badge bg-label-danger"},_e={class:"d-flex gap-2"},me=e("i",{class:"ti ti-eye"},null,-1),he=["onClick"],fe=e("i",{class:"ti ti-pencil"},null,-1),ve=[fe],be=["onClick"],ge=e("i",{class:"ti ti-trash"},null,-1),ye=[ge],ke={key:0,class:"card-footer py-3 border-top"},we={class:"row justify-content-between"},Ce={class:"col-auto"},xe={class:"table_info"},Ee={class:"col-auto"},Se={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},Ve={class:"pagination mb-0"},Fe={class:"page-item"},Pe=["innerHTML"],qe={layout:M},$e=Object.assign(qe,{__name:"Index",setup(Ae){j();const P={id:null,first_name:null,last_name:null,phone:null,email:null,status:!0,role:null,profile_photo:null},{validateForm:f}=R(),q="user.coaches";let{isLoadingComponents:A,paginatedData:u,form:a,createPromise:w,updatePromise:C,deletePromise:I,handleCreate:x,serverQuery:r,handleServerQuery:p,handleEdit:N,formState:g}=B(P,q);return(E,o)=>{const L=k("dropzone"),S=k("select2"),V=k("inertia-link");return l(),i(b,null,[m(s(T),{title:"Coaches/Staff"}),e("div",H,[e("div",O,[Q,e("div",J,[e("button",{class:"btn btn-primary",type:"button",onClick:o[0]||(o[0]=(...t)=>s(x)&&s(x)(...t)),"data-bs-toggle":"offcanvas","data-bs-target":"#offCanvasForm","aria-controls":"offCanvasForm"}," Add Coach / Staff "),e("div",W,[e("div",X,[e("h5",G,d(s(g)=="create"?"Add":"Update")+" Coach / Staff ",1),s(a).processing?n("",!0):(l(),i("button",K))]),e("div",Y,[e("div",Z,[D,s(A)?(l(),z(L,{key:0,collection:"profile_photo",url:E.route("api.media.upload"),type:"profile",model:"User",value:s(a).profile_photo,onInput:o[1]||(o[1]=t=>{s(a).profile_photo=t,s(a).clearErrors("profile_photo")}),message:"Drop files here or click to upload profile photo",acceptedFiles:"image/jpeg,image/png",onError:o[2]||(o[2]=t=>{t&&t[0]&&s(a).setError("profile_photo",t[0])})},null,8,["url","value"])):(l(),i("div",ss,[e("div",es,os,512)])),s(a).errors.profile_photo?(l(),i("div",as,d(s(a).errors.profile_photo),1)):n("",!0)]),e("div",ls,[is,h(e("input",{type:"text",id:"first_name",class:_(["form-control",{"is-invalid":s(a).errors.first_name}]),"onUpdate:modelValue":o[3]||(o[3]=t=>s(a).first_name=t),onInput:o[4]||(o[4]=t=>{s(a).clearErrors("first_name"),s(f)(["required"],s(a),t.target.value,"first_name")}),placeholder:"Enter First Name"},null,34),[[v,s(a).first_name]]),e("div",rs,d(s(a).errors.first_name),1)]),e("div",ns,[ds,h(e("input",{type:"text",id:"last_name",class:_(["form-control",{"is-invalid":s(a).errors.last_name}]),"onUpdate:modelValue":o[5]||(o[5]=t=>s(a).last_name=t),onInput:o[6]||(o[6]=t=>{s(a).clearErrors("last_name"),s(f)(["required"],s(a),t.target.value,"last_name")}),placeholder:"Enter Last Name"},null,34),[[v,s(a).last_name]]),e("div",cs,d(s(a).errors.last_name),1)]),e("div",us,[ps,h(e("input",{type:"text",id:"email",class:_(["form-control",{"is-invalid":s(a).errors.email}]),"onUpdate:modelValue":o[7]||(o[7]=t=>s(a).email=t),onInput:o[8]||(o[8]=t=>{s(a).clearErrors("email"),s(f)(["required","email"],s(a),t.target.value,"email")}),placeholder:"Enter Email"},null,34),[[v,s(a).email]]),e("div",_s,d(s(a).errors.email),1)]),e("div",ms,[hs,h(e("input",{type:"text",id:"phone",class:_(["form-control",{"is-invalid":s(a).errors.phone}]),"onUpdate:modelValue":o[9]||(o[9]=t=>s(a).phone=t),onInput:o[10]||(o[10]=t=>{s(a).clearErrors("phone"),s(f)(["required","number"],s(a),t.target.value,"phone")}),placeholder:"Enter Phone"},null,34),[[v,s(a).phone]]),e("div",fs,d(s(a).errors.phone),1)]),e("div",vs,[bs,m(S,{class:_({"is-invalid":s(a).errors.role}),modelValue:s(a).role,"onUpdate:modelValue":o[11]||(o[11]=t=>s(a).role=t),placeholder:"Select Role",onSelect:o[12]||(o[12]=t=>s(a).clearErrors("role")),options:["Coach","Admin"]},null,8,["class","modelValue"]),s(a).errors.role?(l(),i("div",gs,d(s(a).errors.role),1)):n("",!0)]),e("div",ys,[ks,e("label",ws,[h(e("input",{type:"checkbox","onUpdate:modelValue":o[13]||(o[13]=t=>s(a).status=t),checked:s(a).status,class:"switch-input",onInput:o[14]||(o[14]=t=>s(a).clearErrors("status"))},null,40,Cs),[[$,s(a).status]]),xs,s(a).status?(l(),i("span",Es,"Active")):(l(),i("span",Ss,"In-active"))]),s(a).errors.status?(l(),i("div",Vs,d(s(a).errors.status),1)):n("",!0)]),s(g)=="create"?(l(),i("button",{key:0,class:"btn btn-primary",onClick:o[15]||(o[15]=(...t)=>s(w)&&s(w)(...t)),disabled:s(a).processing||s(a).hasErrors},[s(a).processing?(l(),i("span",Ps)):n("",!0),c(" Save ")],8,Fs)):n("",!0),s(g)=="update"?(l(),i("button",{key:1,class:"btn btn-primary",onClick:o[16]||(o[16]=(...t)=>s(C)&&s(C)(...t)),disabled:s(a).processing||s(a).hasErrors},[s(a).processing?(l(),i("span",As)):n("",!0),c(" Save changes ")],8,qs)):n("",!0)])])])]),e("div",Is,[e("div",Ns,[e("div",Ls,[e("div",Us,[js,e("div",zs,[e("select",{class:"form-select",value:s(r).perPage,onInput:o[17]||(o[17]=t=>s(p)("perPage",t.target.value))},[(l(),i(b,null,y([5,10,25,50,100],t=>e("option",{value:String(t)},d(t),9,Ts)),64))],40,$s)]),Bs])]),e("div",Rs,[e("div",Ms,[m(S,{style:{width:"200px"},settings:{allowClear:!0,minimumResultsForSearch:-1},modelValue:s(r).role,"onUpdate:modelValue":[o[18]||(o[18]=t=>s(r).role=t),o[19]||(o[19]=t=>s(p)("role",t))],placeholder:"Filter By Role",options:["Coach","Admin"]},null,8,["modelValue"]),e("div",Hs,[e("div",Os,[e("input",{type:"search",placeholder:"Search",class:"form-control",value:s(r).query,onInput:o[20]||(o[20]=t=>s(p)("query",t.target.value))},null,40,Qs)])])])])])]),e("div",Js,[e("table",Ws,[e("thead",Xs,[e("tr",null,[Gs,e("th",{style:{"min-width":"200px",width:"30%"},class:"sortable",onClick:o[21]||(o[21]=t=>s(p)("sort","name"))},[c(" Name "),s(r).sort=="name"&&s(r).order=="desc"?(l(),i("i",Ks)):n("",!0),s(r).sort=="name"&&s(r).order=="asc"?(l(),i("i",Ys)):n("",!0)]),e("th",{style:{"min-width":"200px",width:"30%"},onClick:o[22]||(o[22]=t=>s(p)("sort","role"))}," Role "),e("th",{style:{"min-width":"200px",width:"30%"},class:"sortable",onClick:o[23]||(o[23]=t=>s(p)("sort","email"))},[c(" Email "),s(r).sort=="email"&&s(r).order=="desc"?(l(),i("i",Zs)):n("",!0),s(r).sort=="email"&&s(r).order=="asc"?(l(),i("i",Ds)):n("",!0)]),e("th",{style:{"min-width":"200px",width:"30%"},class:"sortable",onClick:o[24]||(o[24]=t=>s(p)("sort","phone"))},[c(" Phone "),s(r).sort=="phone"&&s(r).order=="desc"?(l(),i("i",se)):n("",!0),s(r).sort=="phone"&&s(r).order=="asc"?(l(),i("i",ee)):n("",!0)]),e("th",{style:{"min-width":"200px",width:"30%"},class:"sortable",onClick:o[25]||(o[25]=t=>s(p)("sort","status"))},[c(" Status "),s(r).sort=="status"&&s(r).order=="desc"?(l(),i("i",te)):n("",!0),s(r).sort=="status"&&s(r).order=="asc"?(l(),i("i",oe)):n("",!0)]),ae])]),e("tbody",le,[s(u).data.length<=0?(l(),i("tr",ie,ne)):n("",!0),(l(!0),i(b,null,y(s(u).data,t=>(l(),i("tr",{key:t},[e("td",null,[e("div",de,[e("img",{style:{"object-fit":"cover"},src:t.profile_photo_url,alt:"Avatar",class:"rounded-circle"},null,8,ce)])]),e("td",null,d(t.name),1),e("td",null,d(t.role),1),e("td",null,d(t.email),1),e("td",null,d(t.phone),1),e("td",null,[t.status?(l(),i("span",ue,"Active")):(l(),i("span",pe,"In-active"))]),e("td",null,[e("div",_e,[m(V,{class:"btn btn-icon btn-label-info waves-effect","data-bs-toggle":"tooltip","data-bs-placement":"top","data-bs-custom-class":"tooltip-info",title:"View",href:E.route("user.coaches.show",t.id)},{default:F(()=>[me]),_:2},1032,["href"]),e("a",{class:"btn btn-icon btn-label-primary waves-effect","data-bs-toggle":"tooltip","data-bs-placement":"top","data-bs-custom-class":"tooltip-primary",title:"Edit",onClick:U=>s(N)(t),href:"javascript:void(0);"},ve,8,he),e("a",{class:"btn btn-icon btn-label-danger waves-effect","data-bs-toggle":"tooltip","data-bs-placement":"top","data-bs-custom-class":"tooltip-danger",title:"Delete",href:"javascript:void(0);",onClick:U=>s(I)(t.id)},ye,8,be)])])]))),128))])])]),s(u)&&s(u).meta.links?(l(),i("div",ke,[e("div",we,[e("div",Ce,[e("div",xe," Showing "+d(s(u).meta.from)+" to "+d(s(u).meta.to)+" of "+d(s(u).meta.total)+" entries ",1)]),e("div",Ee,[e("nav",Se,[e("ul",Ve,[(l(!0),i(b,null,y(s(u).meta.links,t=>(l(),i("li",Fe,[m(V,{class:_(["page-link",{active:t.active}]),href:t.url,only:["data","params"]},{default:F(()=>[e("span",{innerHTML:t.label},null,8,Pe)]),_:2},1032,["class","href"])]))),256))])])])])])):n("",!0)])],64)}}});export{$e as default};
