import{J as j,c as n,a as s,u as e,t as r,f as d,g as m,v as h,n as p,b as f,i as L,j as U,e as c,F as b,h as g,r as k,o as l,w as q}from"./app-b5923dd1.js";import{u as z}from"./Crud-0733a27c.js";import{A as T}from"./AdminLayout-f417f09d.js";const B={class:"card card-action"},R={class:"card-header"},M=s("div",{class:"card-action-title align-items-center"},[s("h5",{class:"card-title"},"COACHES / STAFF")],-1),H={class:"card-action-element"},O={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offCanvasForm","data-bs-backdrop":"static","aria-labelledby":"offCanvasFormLabel"},Q={class:"offcanvas-header"},J={id:"offCanvasFormLabel",class:"offcanvas-title"},W={key:0,type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},G={class:"offcanvas-body mt-4 mx-0 flex-grow-0"},K={class:"form-group mb-3"},X=s("label",{for:"name"},[c("First Name "),s("span",{class:"required"},"*")],-1),Y={class:"invalid-feedback"},Z={class:"form-group mb-3"},D=s("label",{for:"name"},[c("Last Name "),s("span",{class:"required"},"*")],-1),ss={class:"invalid-feedback"},es={class:"form-group mb-3"},ts=s("label",{for:"name"},[c("Email "),s("span",{class:"required"},"*")],-1),os={class:"invalid-feedback"},as={class:"form-group mb-3"},ls=s("label",{for:"name"},[c("Phone "),s("span",{class:"required"},"*")],-1),ns={class:"invalid-feedback"},is={class:"form-group mb-3"},rs=s("label",{for:"role"},[c("Role "),s("span",{class:"required"},"*")],-1),ds={class:"invalid-feedback"},cs={class:"form-group mb-3"},_s=s("div",{class:""},[c("Status "),s("span",{class:"required"},"*")],-1),us={class:"switch"},ps=["checked"],ms=s("span",{class:"switch-toggle-slider"},[s("span",{class:"switch-on"}),s("span",{class:"switch-off"})],-1),hs={key:0,class:"switch-label"},vs={key:1,class:"switch-label"},fs={class:"form-group mb-4"},bs=s("label",{for:"name"},"Profile Photo",-1),gs={key:1},ks={class:"dropzone",ref:"dropzone"},ys=s("div",{class:"dz-message needsclick"}," Please Wait ",-1),ws=[ys],Cs={class:"invalid-feedback"},xs=["disabled"],Ss={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},Es=["disabled"],Vs={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},Fs={class:"card-body"},As={class:"row justify-content-between"},Ps={class:"col-auto"},$s={class:"d-flex align-items-center gap-2"},Ns=s("div",{class:"w-auto"},"Show",-1),Is={class:"flex-1"},js=["value"],Ls=["value"],Us=s("div",{class:"w-auto"},"entries",-1),qs={class:"col-auto"},zs={class:"d-flex flex-row gap-3"},Ts={class:"d-flex gap-2 align-items-center"},Bs={class:"flex-1"},Rs=["value"],Ms={class:"table-responsive text-nowrap"},Hs={class:"table"},Os={class:"table-light"},Qs=s("th",{class:"sortable"},"Photo",-1),Js={key:0,class:"ti ti-arrow-up"},Ws={key:1,class:"ti ti-arrow-down"},Gs={key:0,class:"ti ti-arrow-up"},Ks={key:1,class:"ti ti-arrow-down"},Xs={key:0,class:"ti ti-arrow-up"},Ys={key:1,class:"ti ti-arrow-down"},Zs={key:0,class:"ti ti-arrow-up"},Ds={key:1,class:"ti ti-arrow-down"},se=s("th",null,"Actions",-1),ee={class:"table-border-bottom-0"},te={key:0},oe=s("td",{colspan:"999999",class:"text-center"}," No item found ",-1),ae=[oe],le={key:0,class:"avatar avatar-lg"},ne=["src"],ie={key:1,class:"avatar avatar-lg"},re=s("img",{style:{"object-fit":"contain"},src:"/assets/img/image_not_available.png",alt:"Avatar",class:"rounded-circle shadow-sm"},null,-1),de=[re],ce={key:0,class:"badge bg-label-success"},_e={key:1,class:"badge bg-label-danger"},ue={class:"d-flex gap-2"},pe=["onClick"],me=s("i",{class:"ti ti-pencil"},null,-1),he=[me],ve=["onClick"],fe=s("i",{class:"ti ti-trash"},null,-1),be=[fe],ge={key:0,class:"card-footer py-3 border-top"},ke={class:"row justify-content-between"},ye={class:"col-auto"},we={class:"table_info"},Ce={class:"col-auto"},xe={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},Se={class:"pagination mb-0"},Ee={class:"page-item"},Ve=["innerHTML"],Fe={layout:T},Ie=Object.assign(Fe,{__name:"Index",setup(Ae){j();const S={id:null,first_name:null,last_name:null,phone:null,email:null,status:!0,role:null,profile_photo:null},E="user.coaches";let{isLoadingComponents:V,paginatedData:_,form:a,createPromise:y,updatePromise:w,deletePromise:F,handleCreate:C,serverQuery:i,handleServerQuery:u,handleEdit:A,formState:v}=z(S,E);return(P,o)=>{const x=k("select2"),$=k("dropzone"),N=k("inertia-link");return l(),n("div",B,[s("div",R,[M,s("div",H,[s("button",{class:"btn btn-primary",type:"button",onClick:o[0]||(o[0]=(...t)=>e(C)&&e(C)(...t)),"data-bs-toggle":"offcanvas","data-bs-target":"#offCanvasForm","aria-controls":"offCanvasForm"}," Add Coach / Staff "),s("div",O,[s("div",Q,[s("h5",J,r(e(v)=="create"?"Add":"Update")+" Coach / Staff ",1),e(a).processing?d("",!0):(l(),n("button",W))]),s("div",G,[s("div",K,[X,m(s("input",{type:"text",id:"first_name",class:p(["form-control",{"is-invalid":e(a).errors.first_name}]),"onUpdate:modelValue":o[1]||(o[1]=t=>e(a).first_name=t),onInput:o[2]||(o[2]=t=>e(a).clearErrors("first_name")),placeholder:"Enter First Name"},null,34),[[h,e(a).first_name]]),s("div",Y,r(e(a).errors.first_name),1)]),s("div",Z,[D,m(s("input",{type:"text",id:"last_name",class:p(["form-control",{"is-invalid":e(a).errors.last_name}]),"onUpdate:modelValue":o[3]||(o[3]=t=>e(a).last_name=t),onInput:o[4]||(o[4]=t=>e(a).clearErrors("last_name")),placeholder:"Enter Last Name"},null,34),[[h,e(a).last_name]]),s("div",ss,r(e(a).errors.last_name),1)]),s("div",es,[ts,m(s("input",{type:"text",id:"email",class:p(["form-control",{"is-invalid":e(a).errors.email}]),"onUpdate:modelValue":o[5]||(o[5]=t=>e(a).email=t),onInput:o[6]||(o[6]=t=>e(a).clearErrors("email")),placeholder:"Enter Email"},null,34),[[h,e(a).email]]),s("div",os,r(e(a).errors.email),1)]),s("div",as,[ls,m(s("input",{type:"text",id:"phone",class:p(["form-control",{"is-invalid":e(a).errors.phone}]),"onUpdate:modelValue":o[7]||(o[7]=t=>e(a).phone=t),onInput:o[8]||(o[8]=t=>e(a).clearErrors("phone")),placeholder:"Enter Phone"},null,34),[[h,e(a).phone]]),s("div",ns,r(e(a).errors.phone),1)]),s("div",is,[rs,f(x,{class:p({"is-invalid":e(a).errors.role}),modelValue:e(a).role,"onUpdate:modelValue":o[9]||(o[9]=t=>e(a).role=t),placeholder:"Select Role",onSelect:o[10]||(o[10]=t=>e(a).clearErrors("role")),options:["Coach","Admin"]},null,8,["class","modelValue"]),s("div",ds,r(e(a).errors.role),1)]),s("div",cs,[_s,s("label",us,[m(s("input",{type:"checkbox","onUpdate:modelValue":o[11]||(o[11]=t=>e(a).status=t),checked:e(a).status,class:"switch-input"},null,8,ps),[[L,e(a).status]]),ms,e(a).status==1?(l(),n("span",hs,"Active")):(l(),n("span",vs,"In-active"))])]),s("div",fs,[bs,e(V)?(l(),U($,{key:0,collection:"profile_photo",url:P.route("api.media.upload"),model:"User",value:e(a).profile_photo,onInput:o[12]||(o[12]=t=>e(a).profile_photo=t),message:"Drop files here or click to upload profile photo",acceptedFiles:"application/pdf,image/jpeg,image/png"},null,8,["url","value"])):(l(),n("div",gs,[s("div",ks,ws,512)])),s("div",Cs,r(e(a).errors.first_name),1)]),e(v)=="create"?(l(),n("button",{key:0,class:"btn btn-primary",onClick:o[13]||(o[13]=(...t)=>e(y)&&e(y)(...t)),disabled:e(a).processing},[e(a).processing?(l(),n("span",Ss)):d("",!0),c(" Save ")],8,xs)):d("",!0),e(v)=="update"?(l(),n("button",{key:1,class:"btn btn-primary",onClick:o[14]||(o[14]=(...t)=>e(w)&&e(w)(...t)),disabled:e(a).processing},[e(a).processing?(l(),n("span",Vs)):d("",!0),c(" Save changes ")],8,Es)):d("",!0)])])])]),s("div",Fs,[s("div",As,[s("div",Ps,[s("div",$s,[Ns,s("div",Is,[s("select",{class:"form-select",value:e(i).perPage,onInput:o[15]||(o[15]=t=>e(u)("perPage",t.target.value))},[(l(),n(b,null,g([5,10,25,50,100],t=>s("option",{value:String(t)},r(t),9,Ls)),64))],40,js)]),Us])]),s("div",qs,[s("div",zs,[f(x,{style:{width:"200px"},settings:{allowClear:!0,minimumResultsForSearch:-1},modelValue:e(i).role,"onUpdate:modelValue":[o[16]||(o[16]=t=>e(i).role=t),o[17]||(o[17]=t=>e(u)("role",t))],placeholder:"Filter By Role",options:["Coach","Admin"]},null,8,["modelValue"]),s("div",Ts,[s("div",Bs,[s("input",{type:"search",placeholder:"Search",class:"form-control",value:e(i).query,onInput:o[18]||(o[18]=t=>e(u)("query",t.target.value))},null,40,Rs)])])])])])]),s("div",Ms,[s("table",Hs,[s("thead",Os,[s("tr",null,[Qs,s("th",{class:"sortable",onClick:o[19]||(o[19]=t=>e(u)("sort","name"))},[c(" Name "),e(i).sort=="name"&&e(i).order=="desc"?(l(),n("i",Js)):d("",!0),e(i).sort=="name"&&e(i).order=="asc"?(l(),n("i",Ws)):d("",!0)]),s("th",{onClick:o[20]||(o[20]=t=>e(u)("sort","role"))}," Role"),s("th",{class:"sortable",onClick:o[21]||(o[21]=t=>e(u)("sort","email"))},[c(" Email "),e(i).sort=="email"&&e(i).order=="desc"?(l(),n("i",Gs)):d("",!0),e(i).sort=="email"&&e(i).order=="asc"?(l(),n("i",Ks)):d("",!0)]),s("th",{class:"sortable",onClick:o[22]||(o[22]=t=>e(u)("sort","phone"))},[c(" Phone "),e(i).sort=="phone"&&e(i).order=="desc"?(l(),n("i",Xs)):d("",!0),e(i).sort=="phone"&&e(i).order=="asc"?(l(),n("i",Ys)):d("",!0)]),s("th",{class:"sortable",onClick:o[23]||(o[23]=t=>e(u)("sort","status"))},[c(" Status "),e(i).sort=="status"&&e(i).order=="desc"?(l(),n("i",Zs)):d("",!0),e(i).sort=="status"&&e(i).order=="asc"?(l(),n("i",Ds)):d("",!0)]),se])]),s("tbody",ee,[e(_).data.length<=0?(l(),n("tr",te,ae)):d("",!0),(l(!0),n(b,null,g(e(_).data,t=>(l(),n("tr",{key:t},[s("td",null,[t.profile_photo&&t.profile_photo.src?(l(),n("div",le,[s("img",{src:t.profile_photo.src,alt:"Avatar",class:"rounded-circle"},null,8,ne)])):(l(),n("div",ie,de))]),s("td",null,r(t.name),1),s("td",null,r(t.role),1),s("td",null,r(t.email),1),s("td",null,r(t.phone),1),s("td",null,[t.status==1?(l(),n("span",ce,"Active")):(l(),n("span",_e,"In-active"))]),s("td",null,[s("div",ue,[s("a",{class:"btn btn-icon btn-label-primary waves-effect",onClick:I=>e(A)(t),href:"javascript:void(0);"},he,8,pe),s("a",{class:"btn btn-icon btn-label-danger waves-effect",href:"javascript:void(0);",onClick:I=>e(F)(t.id)},be,8,ve)])])]))),128))])])]),e(_)&&e(_).meta.links?(l(),n("div",ge,[s("div",ke,[s("div",ye,[s("div",we," Showing "+r(e(_).meta.from)+" to "+r(e(_).meta.to)+" of "+r(e(_).meta.total)+" entries ",1)]),s("div",Ce,[s("nav",xe,[s("ul",Se,[(l(!0),n(b,null,g(e(_).meta.links,t=>(l(),n("li",Ee,[f(N,{class:p(["page-link",{active:t.active}]),href:t.url,only:["data","params"]},{default:q(()=>[s("span",{innerHTML:t.label},null,8,Ve)]),_:2},1032,["class","href"])]))),256))])])])])])):d("",!0)])}}});export{Ie as default};
