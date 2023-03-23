import{J as j,c as l,a as s,u as t,t as d,f as r,g as m,v as h,n as p,b as C,i as L,j as U,e as u,F as f,h as b,r as g,o as n,w as z}from"./app-3013f5b6.js";import{u as T}from"./Crud-56343ff2.js";import{A as B}from"./AdminLayout-0771f813.js";const M={class:"card card-action"},H={class:"card-header"},O=s("div",{class:"card-action-title align-items-center"},[s("h5",{class:"card-title"},"COACHES / STAFF")],-1),q={class:"card-action-element"},Q={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offCanvasForm","data-bs-backdrop":"static","aria-labelledby":"offCanvasFormLabel"},R={class:"offcanvas-header"},J={id:"offCanvasFormLabel",class:"offcanvas-title"},W={key:0,type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},G={class:"offcanvas-body mt-4 mx-0 flex-grow-0"},K={class:"form-group mb-3"},X=s("label",{for:"name"},"First Name",-1),Y={class:"invalid-feedback"},Z={class:"form-group mb-3"},D=s("label",{for:"name"},"Last Name",-1),ss={class:"invalid-feedback"},ts={class:"form-group mb-3"},es=s("label",{for:"name"},"Email",-1),os={class:"invalid-feedback"},as={class:"form-group mb-3"},ns=s("label",{for:"name"},"Phone",-1),ls={class:"invalid-feedback"},is={class:"form-group mb-3"},rs=s("label",{for:"role"},"Role",-1),ds={class:"invalid-feedback"},cs={class:"form-group mb-3"},_s=s("div",{class:""},"Status",-1),us={class:"switch"},ps=["checked"],ms=s("span",{class:"switch-toggle-slider"},[s("span",{class:"switch-on"}),s("span",{class:"switch-off"})],-1),hs={key:0,class:"switch-label"},vs={key:1,class:"switch-label"},fs={class:"form-group mb-4"},bs=s("label",{for:"name"},"Profile Photo",-1),gs={key:1},ks={class:"dropzone",ref:"dropzone"},ys=s("div",{class:"dz-message needsclick"}," Please Wait ",-1),ws=[ys],Cs={class:"invalid-feedback"},xs=["disabled"],Ss={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},Es=["disabled"],Ps={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},Fs={class:"card-body"},Vs={class:"row justify-content-between"},$s={class:"col-auto"},As={class:"d-flex align-items-center gap-2"},Ns=s("div",{class:"w-auto"},"Show",-1),Is={class:"flex-1"},js=["value"],Ls=["value"],Us=s("div",{class:"w-auto"},"entries",-1),zs={class:"col-auto"},Ts={class:"d-flex gap-2 align-items-center"},Bs=s("div",{class:"w-auto"},"Search:",-1),Ms={class:"flex-1"},Hs=["value"],Os={class:"table-responsive text-nowrap"},qs={class:"table"},Qs={class:"table-light"},Rs=s("th",{class:"sortable"},"Photo",-1),Js={key:0,class:"ti ti-arrow-up"},Ws={key:1,class:"ti ti-arrow-down"},Gs={key:0,class:"ti ti-arrow-up"},Ks={key:1,class:"ti ti-arrow-down"},Xs={key:0,class:"ti ti-arrow-up"},Ys={key:1,class:"ti ti-arrow-down"},Zs={key:0,class:"ti ti-arrow-up"},Ds={key:1,class:"ti ti-arrow-down"},st={key:0,class:"ti ti-arrow-up"},tt={key:1,class:"ti ti-arrow-down"},et=s("th",null,"Actions",-1),ot={class:"table-border-bottom-0"},at={key:0},nt=s("td",{colspan:"999999",class:"text-center"}," No item found ",-1),lt=[nt],it={key:0,class:"avatar avatar-lg"},rt=["src"],dt={key:1,class:"avatar avatar-lg"},ct=s("img",{style:{"object-fit":"contain"},src:"/assets/img/image_not_available.png",alt:"Avatar",class:"rounded-circle shadow-sm"},null,-1),_t=[ct],ut={key:0,class:"badge bg-label-success"},pt={key:1,class:"badge bg-label-danger"},mt={class:"d-flex gap-2"},ht=["onClick"],vt=s("i",{class:"ti ti-pencil"},null,-1),ft=[vt],bt=["onClick"],gt=s("i",{class:"ti ti-trash"},null,-1),kt=[gt],yt={key:0,class:"card-footer py-3 border-top"},wt={class:"row justify-content-between"},Ct={class:"col-auto"},xt={class:"table_info"},St={class:"col-auto"},Et={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},Pt={class:"pagination mb-0"},Ft={class:"page-item"},Vt=["innerHTML"],$t={layout:B},Lt=Object.assign($t,{__name:"Index",setup(At){j();const x={id:null,first_name:null,last_name:null,phone:null,email:null,status:!0,role:null,profile_photo:null},S="user.coaches";let{isLoadingComponents:E,paginatedData:c,form:a,createPromise:k,updatePromise:y,deletePromise:P,handleCreate:w,serverQuery:i,handleServerQuery:_,handleEdit:F,formState:v}=T(x,S);return(V,o)=>{const $=g("select2"),A=g("dropzone"),N=g("inertia-link");return n(),l("div",M,[s("div",H,[O,s("div",q,[s("button",{class:"btn btn-primary",type:"button",onClick:o[0]||(o[0]=(...e)=>t(w)&&t(w)(...e)),"data-bs-toggle":"offcanvas","data-bs-target":"#offCanvasForm","aria-controls":"offCanvasForm"}," Add Coach / Staff "),s("div",Q,[s("div",R,[s("h5",J,d(t(v)=="create"?"Add":"Update")+" Coach / Staff ",1),t(a).processing?r("",!0):(n(),l("button",W))]),s("div",G,[s("div",K,[X,m(s("input",{type:"text",id:"first_name",class:p(["form-control",{"is-invalid":t(a).errors.first_name}]),"onUpdate:modelValue":o[1]||(o[1]=e=>t(a).first_name=e),onInput:o[2]||(o[2]=e=>t(a).clearErrors("first_name")),placeholder:"Enter First Name"},null,34),[[h,t(a).first_name]]),s("div",Y,d(t(a).errors.first_name),1)]),s("div",Z,[D,m(s("input",{type:"text",id:"last_name",class:p(["form-control",{"is-invalid":t(a).errors.last_name}]),"onUpdate:modelValue":o[3]||(o[3]=e=>t(a).last_name=e),onInput:o[4]||(o[4]=e=>t(a).clearErrors("last_name")),placeholder:"Enter Last Name"},null,34),[[h,t(a).last_name]]),s("div",ss,d(t(a).errors.last_name),1)]),s("div",ts,[es,m(s("input",{type:"text",id:"email",class:p(["form-control",{"is-invalid":t(a).errors.email}]),"onUpdate:modelValue":o[5]||(o[5]=e=>t(a).email=e),onInput:o[6]||(o[6]=e=>t(a).clearErrors("email")),placeholder:"Enter Email"},null,34),[[h,t(a).email]]),s("div",os,d(t(a).errors.email),1)]),s("div",as,[ns,m(s("input",{type:"text",id:"phone",class:p(["form-control",{"is-invalid":t(a).errors.phone}]),"onUpdate:modelValue":o[7]||(o[7]=e=>t(a).phone=e),onInput:o[8]||(o[8]=e=>t(a).clearErrors("phone")),placeholder:"Enter Phone"},null,34),[[h,t(a).phone]]),s("div",ls,d(t(a).errors.phone),1)]),s("div",is,[rs,C($,{class:p({"is-invalid":t(a).errors.role}),modelValue:t(a).role,"onUpdate:modelValue":o[9]||(o[9]=e=>t(a).role=e),onSelect:o[10]||(o[10]=e=>t(a).clearErrors("role")),options:["Coach","Staff"]},null,8,["class","modelValue"]),s("div",ds,d(t(a).errors.role),1)]),s("div",cs,[_s,s("label",us,[m(s("input",{type:"checkbox","onUpdate:modelValue":o[11]||(o[11]=e=>t(a).status=e),checked:t(a).status,class:"switch-input"},null,8,ps),[[L,t(a).status]]),ms,t(a).status==1?(n(),l("span",hs,"Active")):(n(),l("span",vs,"In-active"))])]),s("div",fs,[bs,t(E)?(n(),U(A,{key:0,collection:"profile_photo",url:V.route("api.media.upload"),model:"User",value:t(a).profile_photo,onInput:o[12]||(o[12]=e=>t(a).profile_photo=e),message:"Drop files here or click to upload profile photo",acceptedFiles:"application/pdf,image/jpeg,image/png"},null,8,["url","value"])):(n(),l("div",gs,[s("div",ks,ws,512)])),s("div",Cs,d(t(a).errors.first_name),1)]),t(v)=="create"?(n(),l("button",{key:0,class:"btn btn-primary",onClick:o[13]||(o[13]=(...e)=>t(k)&&t(k)(...e)),disabled:t(a).processing},[t(a).processing?(n(),l("span",Ss)):r("",!0),u(" Save ")],8,xs)):r("",!0),t(v)=="update"?(n(),l("button",{key:1,class:"btn btn-primary",onClick:o[14]||(o[14]=(...e)=>t(y)&&t(y)(...e)),disabled:t(a).processing},[t(a).processing?(n(),l("span",Ps)):r("",!0),u(" Save changes ")],8,Es)):r("",!0)])])])]),s("div",Fs,[s("div",Vs,[s("div",$s,[s("div",As,[Ns,s("div",Is,[s("select",{class:"form-select",value:t(i).perPage,onInput:o[15]||(o[15]=e=>t(_)("perPage",e.target.value))},[(n(),l(f,null,b([5,10,25,50,100],e=>s("option",{value:String(e)},d(e),9,Ls)),64))],40,js)]),Us])]),s("div",zs,[s("div",Ts,[Bs,s("div",Ms,[s("input",{type:"search",placeholder:"Search",class:"form-control",value:t(i).query,onInput:o[16]||(o[16]=e=>t(_)("query",e.target.value))},null,40,Hs)])])])])]),s("div",Os,[s("table",qs,[s("thead",Qs,[s("tr",null,[Rs,s("th",{class:"sortable",onClick:o[17]||(o[17]=e=>t(_)("sort","name"))},[u(" Name "),t(i).sort=="name"&&t(i).order=="desc"?(n(),l("i",Js)):r("",!0),t(i).sort=="name"&&t(i).order=="asc"?(n(),l("i",Ws)):r("",!0)]),s("th",{class:"sortable",onClick:o[18]||(o[18]=e=>t(_)("sort","role"))},[u(" Role "),t(i).sort=="role"&&t(i).order=="desc"?(n(),l("i",Gs)):r("",!0),t(i).sort=="role"&&t(i).order=="asc"?(n(),l("i",Ks)):r("",!0)]),s("th",{class:"sortable",onClick:o[19]||(o[19]=e=>t(_)("sort","email"))},[u(" Email "),t(i).sort=="email"&&t(i).order=="desc"?(n(),l("i",Xs)):r("",!0),t(i).sort=="email"&&t(i).order=="asc"?(n(),l("i",Ys)):r("",!0)]),s("th",{class:"sortable",onClick:o[20]||(o[20]=e=>t(_)("sort","phone"))},[u(" Phone "),t(i).sort=="phone"&&t(i).order=="desc"?(n(),l("i",Zs)):r("",!0),t(i).sort=="phone"&&t(i).order=="asc"?(n(),l("i",Ds)):r("",!0)]),s("th",{class:"sortable",onClick:o[21]||(o[21]=e=>t(_)("sort","status"))},[u(" Status "),t(i).sort=="status"&&t(i).order=="desc"?(n(),l("i",st)):r("",!0),t(i).sort=="status"&&t(i).order=="asc"?(n(),l("i",tt)):r("",!0)]),et])]),s("tbody",ot,[t(c).data.length<=0?(n(),l("tr",at,lt)):r("",!0),(n(!0),l(f,null,b(t(c).data,e=>(n(),l("tr",{key:e},[s("td",null,[e.profile_photo&&e.profile_photo.src?(n(),l("div",it,[s("img",{src:e.profile_photo.src,alt:"Avatar",class:"rounded-circle"},null,8,rt)])):(n(),l("div",dt,_t))]),s("td",null,d(e.name),1),s("td",null,d(e.role),1),s("td",null,d(e.email),1),s("td",null,d(e.phone),1),s("td",null,[e.status==1?(n(),l("span",ut,"Active")):(n(),l("span",pt,"In-active"))]),s("td",null,[s("div",mt,[s("a",{class:"btn btn-icon btn-label-primary waves-effect",onClick:I=>t(F)(e),href:"javascript:void(0);"},ft,8,ht),s("a",{class:"btn btn-icon btn-label-danger waves-effect",href:"javascript:void(0);",onClick:I=>t(P)(e.id)},kt,8,bt)])])]))),128))])])]),t(c)&&t(c).meta.links?(n(),l("div",yt,[s("div",wt,[s("div",Ct,[s("div",xt," Showing "+d(t(c).meta.from)+" to "+d(t(c).meta.to)+" of "+d(t(c).meta.total)+" entries ",1)]),s("div",St,[s("nav",Et,[s("ul",Pt,[(n(!0),l(f,null,b(t(c).meta.links,e=>(n(),l("li",Ft,[C(N,{class:p(["page-link",{active:e.active}]),href:e.url,only:["data","params"]},{default:z(()=>[s("span",{innerHTML:e.label},null,8,Vt)]),_:2},1032,["class","href"])]))),256))])])])])])):r("",!0)])}}});export{Lt as default};
