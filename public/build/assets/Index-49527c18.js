import{J as U,o as l,c as r,b as m,u as s,a as e,t as d,e as i,j as z,d as h,v,n as p,f as T,g as c,F as b,i as y,r as k,X as $,w as V}from"./app-b743541d.js";import{u as B}from"./Crud-9d5c87d3.js";import{u as R}from"./Validate-741ad9bc.js";import{A as M}from"./AdminLayout-20feacbe.js";import"./lodash-d7342588.js";const H={class:"card card-action"},O={class:"card-header"},Q=e("div",{class:"card-action-title align-items-center"},[e("h5",{class:"card-title"},"COACHES / STAFF")],-1),J={class:"card-action-element"},W={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offCanvasForm","data-bs-backdrop":"static","aria-labelledby":"offCanvasFormLabel"},X={class:"offcanvas-header"},G={id:"offCanvasFormLabel",class:"offcanvas-title"},K={key:0,type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},Y={class:"offcanvas-body mt-4 mx-0 flex-grow-0"},Z={class:"form-group mb-4 dropzone-profile-photo"},D=e("label",{for:"name"},"Profile Photo",-1),ss={key:1},es={class:"dropzone",ref:"dropzone"},ts=e("div",{class:"dz-message needsclick"}," Please Wait ",-1),os=[ts],as={key:2,class:"v-invalid-feedback"},ls={class:"form-group mb-3"},rs=e("label",{for:"name"},[c("First Name "),e("span",{class:"required"},"*")],-1),ns={class:"invalid-feedback"},is={class:"form-group mb-3"},ds=e("label",{for:"name"},[c("Last Name "),e("span",{class:"required"},"*")],-1),cs={class:"invalid-feedback"},us={class:"form-group mb-3"},_s=e("label",{for:"name"},[c("Email "),e("span",{class:"required"},"*")],-1),ps={class:"invalid-feedback"},ms={class:"form-group mb-3"},hs=e("label",{for:"name"},[c("Phone "),e("span",{class:"required"},"*")],-1),fs={class:"invalid-feedback"},vs={class:"form-group mb-3"},bs=e("label",{for:"role"},[c("Role "),e("span",{class:"required"},"*")],-1),gs={key:0,class:"v-invalid-feedback"},ys={class:"form-group mb-3"},ks=e("div",{class:""},[c(" Status "),e("span",{class:"required"},"*")],-1),ws={class:"switch"},Cs=["checked"],xs=e("span",{class:"switch-toggle-slider"},[e("span",{class:"switch-on"}),e("span",{class:"switch-off"})],-1),Es={key:0,class:"switch-label"},Ss={key:1,class:"switch-label"},Fs=["disabled"],Vs={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},Ps=["disabled"],qs={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},As={class:"card-body"},Ns={class:"row justify-content-between"},Is={class:"col-auto"},js={class:"d-flex align-items-center gap-2"},Ls=e("div",{class:"w-auto"},"Show",-1),Us={class:"flex-1"},zs=["value"],Ts=["value"],$s=e("div",{class:"w-auto"},"entries",-1),Bs={class:"col-auto"},Rs={class:"d-flex flex-row gap-3"},Ms={class:"d-flex gap-2 align-items-center"},Hs={class:"flex-1"},Os=["value"],Qs={class:"table-responsive text-nowrap"},Js={class:"table"},Ws={class:"table-light"},Xs=e("th",{class:"sortable"},"Photo",-1),Gs={key:0,class:"ti ti-arrow-up"},Ks={key:1,class:"ti ti-arrow-down"},Ys={key:0,class:"ti ti-arrow-up"},Zs={key:1,class:"ti ti-arrow-down"},Ds={key:0,class:"ti ti-arrow-up"},se={key:1,class:"ti ti-arrow-down"},ee={key:0,class:"ti ti-arrow-up"},te={key:1,class:"ti ti-arrow-down"},oe=e("th",null,"Actions",-1),ae={class:"table-border-bottom-0"},le={key:0},re=e("td",{colspan:"999999",class:"text-center"}," No item found ",-1),ne=[re],ie={class:"avatar avatar-lg"},de=["src"],ce={key:0,class:"badge bg-label-success"},ue={key:1,class:"badge bg-label-danger"},_e={class:"d-flex gap-2"},pe=e("i",{class:"ti ti-eye"},null,-1),me=["onClick"],he=e("i",{class:"ti ti-pencil"},null,-1),fe=[he],ve=["onClick"],be=e("i",{class:"ti ti-trash"},null,-1),ge=[be],ye={key:0,class:"card-footer py-3 border-top"},ke={class:"row justify-content-between"},we={class:"col-auto"},Ce={class:"table_info"},xe={class:"col-auto"},Ee={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},Se={class:"pagination mb-0"},Fe={class:"page-item"},Ve=["innerHTML"],Pe={layout:M},Ue=Object.assign(Pe,{__name:"Index",setup(qe){U();const P={id:null,first_name:null,last_name:null,phone:null,email:null,status:!0,role:null,profile_photo:null},{validateForm:f}=R(),q="user.coaches";let{isLoadingComponents:A,paginatedData:u,form:a,createPromise:w,updatePromise:C,deletePromise:N,handleCreate:x,serverQuery:n,handleServerQuery:_,handleEdit:I,formState:g}=B(P,q);return(E,o)=>{const j=k("dropzone"),S=k("select2"),F=k("inertia-link");return l(),r(b,null,[m(s($),{title:"Coaches/Staff"}),e("div",H,[e("div",O,[Q,e("div",J,[e("button",{class:"btn btn-primary",type:"button",onClick:o[0]||(o[0]=(...t)=>s(x)&&s(x)(...t)),"data-bs-toggle":"offcanvas","data-bs-target":"#offCanvasForm","aria-controls":"offCanvasForm"}," Add Coach / Staff "),e("div",W,[e("div",X,[e("h5",G,d(s(g)=="create"?"Add":"Update")+" Coach / Staff ",1),s(a).processing?i("",!0):(l(),r("button",K))]),e("div",Y,[e("div",Z,[D,s(A)?(l(),z(j,{key:0,collection:"profile_photo",url:E.route("api.media.upload"),type:"profile",model:"User",value:s(a).profile_photo,onInput:o[1]||(o[1]=t=>{s(a).profile_photo=t,s(a).clearErrors("profile_photo")}),message:"Drop files here or click to upload profile photo",acceptedFiles:"image/jpeg,image/png",onError:o[2]||(o[2]=t=>{t&&t[0]&&s(a).setError("profile_photo",t[0])})},null,8,["url","value"])):(l(),r("div",ss,[e("div",es,os,512)])),s(a).errors.profile_photo?(l(),r("div",as,d(s(a).errors.profile_photo),1)):i("",!0)]),e("div",ls,[rs,h(e("input",{type:"text",id:"first_name",class:p(["form-control",{"is-invalid":s(a).errors.first_name}]),"onUpdate:modelValue":o[3]||(o[3]=t=>s(a).first_name=t),onInput:o[4]||(o[4]=t=>{s(a).clearErrors("first_name"),s(f)(["required"],s(a),t.target.value,"first_name")}),placeholder:"Enter First Name"},null,34),[[v,s(a).first_name]]),e("div",ns,d(s(a).errors.first_name),1)]),e("div",is,[ds,h(e("input",{type:"text",id:"last_name",class:p(["form-control",{"is-invalid":s(a).errors.last_name}]),"onUpdate:modelValue":o[5]||(o[5]=t=>s(a).last_name=t),onInput:o[6]||(o[6]=t=>{s(a).clearErrors("last_name"),s(f)(["required"],s(a),t.target.value,"last_name")}),placeholder:"Enter Last Name"},null,34),[[v,s(a).last_name]]),e("div",cs,d(s(a).errors.last_name),1)]),e("div",us,[_s,h(e("input",{type:"text",id:"email",class:p(["form-control",{"is-invalid":s(a).errors.email}]),"onUpdate:modelValue":o[7]||(o[7]=t=>s(a).email=t),onInput:o[8]||(o[8]=t=>{s(a).clearErrors("email"),s(f)(["required","email"],s(a),t.target.value,"email")}),placeholder:"Enter Email"},null,34),[[v,s(a).email]]),e("div",ps,d(s(a).errors.email),1)]),e("div",ms,[hs,h(e("input",{type:"text",id:"phone",class:p(["form-control",{"is-invalid":s(a).errors.phone}]),"onUpdate:modelValue":o[9]||(o[9]=t=>s(a).phone=t),onInput:o[10]||(o[10]=t=>{s(a).clearErrors("phone"),s(f)(["required","number"],s(a),t.target.value,"phone")}),placeholder:"Enter Phone"},null,34),[[v,s(a).phone]]),e("div",fs,d(s(a).errors.phone),1)]),e("div",vs,[bs,m(S,{class:p({"is-invalid":s(a).errors.role}),modelValue:s(a).role,"onUpdate:modelValue":o[11]||(o[11]=t=>s(a).role=t),placeholder:"Select Role",onSelect:o[12]||(o[12]=t=>s(a).clearErrors("role")),options:["Coach","Admin"]},null,8,["class","modelValue"]),s(a).errors.role?(l(),r("div",gs,d(s(a).errors.role),1)):i("",!0)]),e("div",ys,[ks,e("label",ws,[h(e("input",{type:"checkbox","onUpdate:modelValue":o[13]||(o[13]=t=>s(a).status=t),checked:s(a).status,class:"switch-input"},null,8,Cs),[[T,s(a).status]]),xs,s(a).status==1?(l(),r("span",Es,"Active")):(l(),r("span",Ss,"In-active"))])]),s(g)=="create"?(l(),r("button",{key:0,class:"btn btn-primary",onClick:o[14]||(o[14]=(...t)=>s(w)&&s(w)(...t)),disabled:s(a).processing||s(a).hasErrors},[s(a).processing?(l(),r("span",Vs)):i("",!0),c(" Save ")],8,Fs)):i("",!0),s(g)=="update"?(l(),r("button",{key:1,class:"btn btn-primary",onClick:o[15]||(o[15]=(...t)=>s(C)&&s(C)(...t)),disabled:s(a).processing||s(a).hasErrors},[s(a).processing?(l(),r("span",qs)):i("",!0),c(" Save changes ")],8,Ps)):i("",!0)])])])]),e("div",As,[e("div",Ns,[e("div",Is,[e("div",js,[Ls,e("div",Us,[e("select",{class:"form-select",value:s(n).perPage,onInput:o[16]||(o[16]=t=>s(_)("perPage",t.target.value))},[(l(),r(b,null,y([5,10,25,50,100],t=>e("option",{value:String(t)},d(t),9,Ts)),64))],40,zs)]),$s])]),e("div",Bs,[e("div",Rs,[m(S,{style:{width:"200px"},settings:{allowClear:!0,minimumResultsForSearch:-1},modelValue:s(n).role,"onUpdate:modelValue":[o[17]||(o[17]=t=>s(n).role=t),o[18]||(o[18]=t=>s(_)("role",t))],placeholder:"Filter By Role",options:["Coach","Admin"]},null,8,["modelValue"]),e("div",Ms,[e("div",Hs,[e("input",{type:"search",placeholder:"Search",class:"form-control",value:s(n).query,onInput:o[19]||(o[19]=t=>s(_)("query",t.target.value))},null,40,Os)])])])])])]),e("div",Qs,[e("table",Js,[e("thead",Ws,[e("tr",null,[Xs,e("th",{class:"sortable",onClick:o[20]||(o[20]=t=>s(_)("sort","name"))},[c(" Name "),s(n).sort=="name"&&s(n).order=="desc"?(l(),r("i",Gs)):i("",!0),s(n).sort=="name"&&s(n).order=="asc"?(l(),r("i",Ks)):i("",!0)]),e("th",{onClick:o[21]||(o[21]=t=>s(_)("sort","role"))},"Role"),e("th",{class:"sortable",onClick:o[22]||(o[22]=t=>s(_)("sort","email"))},[c(" Email "),s(n).sort=="email"&&s(n).order=="desc"?(l(),r("i",Ys)):i("",!0),s(n).sort=="email"&&s(n).order=="asc"?(l(),r("i",Zs)):i("",!0)]),e("th",{class:"sortable",onClick:o[23]||(o[23]=t=>s(_)("sort","phone"))},[c(" Phone "),s(n).sort=="phone"&&s(n).order=="desc"?(l(),r("i",Ds)):i("",!0),s(n).sort=="phone"&&s(n).order=="asc"?(l(),r("i",se)):i("",!0)]),e("th",{class:"sortable",onClick:o[24]||(o[24]=t=>s(_)("sort","status"))},[c(" Status "),s(n).sort=="status"&&s(n).order=="desc"?(l(),r("i",ee)):i("",!0),s(n).sort=="status"&&s(n).order=="asc"?(l(),r("i",te)):i("",!0)]),oe])]),e("tbody",ae,[s(u).data.length<=0?(l(),r("tr",le,ne)):i("",!0),(l(!0),r(b,null,y(s(u).data,t=>(l(),r("tr",{key:t},[e("td",null,[e("div",ie,[e("img",{style:{"object-fit":"cover"},src:t.profile_photo_url,alt:"Avatar",class:"rounded-circle"},null,8,de)])]),e("td",null,d(t.name),1),e("td",null,d(t.role),1),e("td",null,d(t.email),1),e("td",null,d(t.phone),1),e("td",null,[t.status==1?(l(),r("span",ce,"Active")):(l(),r("span",ue,"In-active"))]),e("td",null,[e("div",_e,[m(F,{class:"btn btn-icon btn-label-info waves-effect",href:E.route("user.coaches.show",t.id)},{default:V(()=>[pe]),_:2},1032,["href"]),e("a",{class:"btn btn-icon btn-label-primary waves-effect",onClick:L=>s(I)(t),href:"javascript:void(0);"},fe,8,me),e("a",{class:"btn btn-icon btn-label-danger waves-effect",href:"javascript:void(0);",onClick:L=>s(N)(t.id)},ge,8,ve)])])]))),128))])])]),s(u)&&s(u).meta.links?(l(),r("div",ye,[e("div",ke,[e("div",we,[e("div",Ce," Showing "+d(s(u).meta.from)+" to "+d(s(u).meta.to)+" of "+d(s(u).meta.total)+" entries ",1)]),e("div",xe,[e("nav",Ee,[e("ul",Se,[(l(!0),r(b,null,y(s(u).meta.links,t=>(l(),r("li",Fe,[m(F,{class:p(["page-link",{active:t.active}]),href:t.url,only:["data","params"]},{default:V(()=>[e("span",{innerHTML:t.label},null,8,Ve)]),_:2},1032,["class","href"])]))),256))])])])])])):i("",!0)])],64)}}});export{Ue as default};
