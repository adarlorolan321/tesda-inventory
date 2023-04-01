import{A as b}from"./AdminLayout-87275c4b.js";import{_ as u,b as m,d as g,w as d,s as r,f as l,F as v,p,e as n,i as f,t as h,l as c}from"./app-2ee86258.js";import"./logo-06b3879b.js";const w={props:{modelValue:{default:null},defaultValue:{default:null}},data:function(){return{isLoading:!0,editor:null,loadedValue:null}},mounted:function(){this.setContent(),this.isLoading=!0,console.log("Initialized"),setTimeout(()=>{this.isLoading=!1,this.initialize()},1e3)},unmounted:function(){},methods:{initialize:function(){var t=this;t.editor=new Quill(this.$refs.quillEditor,{bounds:this.$refs.quillEditor,modules:{formula:!0,toolbar:this.$refs.quillEditorToolbar},theme:"snow"}),t.editor.on("text-change",function(a,o,i){var e=t.$refs.quillEditor.querySelector(".ql-editor").innerHTML;t.$emit("update:modelValue",e)})},setContent:function(){this.loadedValue=this.defaultValue,console.log("not loading")}}},y={ref:"quillEditorToolbar"},q=p('<span class="ql-formats"><select class="ql-font"></select><select class="ql-size"></select></span><span class="ql-formats"><button class="ql-bold"></button><button class="ql-italic"></button><button class="ql-underline"></button><button class="ql-strike"></button></span><span class="ql-formats"><select class="ql-color"></select><select class="ql-background"></select></span><span class="ql-formats"><button class="ql-script" value="sub"></button><button class="ql-script" value="super"></button></span><span class="ql-formats"><button class="ql-header" value="1"></button><button class="ql-header" value="2"></button><button class="ql-blockquote"></button><button class="ql-code-block"></button></span><span class="ql-formats"><button class="ql-clean"></button></span>',6),V=[q],_={ref:"quillEditor"},C=["innerHTML"],k={class:"loading-quill"};function A(t,a,o,i,e,s){return m(),g(v,null,[d(l("div",y,V,512),[[r,!t.isLoading]]),d(l("div",_,[l("p",{innerHTML:t.loadedValue},null,8,C)],512),[[r,!t.isLoading]]),d(l("div",k,"Loading",512),[[r,t.isLoading]])],64)}const x=u(w,[["render",A]]),E={layout:b,components:{QuillEditor:x},data:function(){return{defaultValue:"<p>Hello world<p>"}},mounted:function(){}},L={class:"card card-action"},S={class:"card-header"},j=l("div",{class:"card-action-title align-items-center"},"Table Basic",-1),$=p('<div class="card-action-element"><button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offCanvasForm" aria-controls="offCanvasForm"> New Item </button><div class="offcanvas offcanvas-end" tabindex="-1" id="offCanvasForm" aria-labelledby="offCanvasFormLabel"><div class="offcanvas-header"><h5 id="offCanvasFormLabel" class="offcanvas-title"> New Item </h5><button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button></div><div class="offcanvas-body mt-4 mx-0 flex-grow-0"><div class="form-group"><label for="">First Name</label><input type="text" class="form-control"></div></div></div></div>',1),F=p('<div class="table-responsive text-nowrap"><table class="table"><thead class="table-light"><tr><th>Project</th><th>Client</th><th>Users</th><th>Status</th><th>Actions</th></tr></thead><tbody class="table-border-bottom-0"><tr><td><i class="ti ti-brand-angular ti-lg text-danger me-3"></i><strong>Angular Project</strong></td><td>Albert Cook</td><td><ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center"><li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" class="avatar avatar-xs pull-up" title="Lilian Fuller"><img src="/assets/img/avatars/5.png" alt="Avatar" class="rounded-circle"></li><li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" class="avatar avatar-xs pull-up" title="Sophia Wilkerson"><img src="/assets/img/avatars/6.png" alt="Avatar" class="rounded-circle"></li><li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" class="avatar avatar-xs pull-up" title="Christina Parker"><img src="/assets/img/avatars/7.png" alt="Avatar" class="rounded-circle"></li></ul></td><td><span class="badge bg-label-primary me-1">Active</span></td><td><div class="dropdown"><button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="ti ti-dots-vertical"></i></button><div class="dropdown-menu"><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-pencil me-1"></i> Edit</a><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-trash me-1"></i> Delete</a></div></div></td></tr><tr><td><i class="ti ti-brand-react-native ti-lg text-info me-3"></i><strong>React Project</strong></td><td>Barry Hunter</td><td><ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center"><li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" class="avatar avatar-xs pull-up" title="Lilian Fuller"><img src="/assets/img/avatars/5.png" alt="Avatar" class="rounded-circle"></li><li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" class="avatar avatar-xs pull-up" title="Sophia Wilkerson"><img src="/assets/img/avatars/6.png" alt="Avatar" class="rounded-circle"></li><li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" class="avatar avatar-xs pull-up" title="Christina Parker"><img src="/assets/img/avatars/7.png" alt="Avatar" class="rounded-circle"></li></ul></td><td><span class="badge bg-label-success me-1">Completed</span></td><td><div class="dropdown"><button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="ti ti-dots-vertical"></i></button><div class="dropdown-menu"><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-pencil me-2"></i> Edit</a><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-trash me-2"></i> Delete</a></div></div></td></tr><tr><td><i class="ti ti-brand-vue ti-lg text-success me-3"></i><strong>VueJs Project</strong></td><td>Trevor Baker</td><td><ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center"><li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" class="avatar avatar-xs pull-up" title="Lilian Fuller"><img src="/assets/img/avatars/5.png" alt="Avatar" class="rounded-circle"></li><li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" class="avatar avatar-xs pull-up" title="Sophia Wilkerson"><img src="/assets/img/avatars/6.png" alt="Avatar" class="rounded-circle"></li><li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" class="avatar avatar-xs pull-up" title="Christina Parker"><img src="/assets/img/avatars/7.png" alt="Avatar" class="rounded-circle"></li></ul></td><td><span class="badge bg-label-info me-1">Scheduled</span></td><td><div class="dropdown"><button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="ti ti-dots-vertical"></i></button><div class="dropdown-menu"><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-pencil me-2"></i> Edit</a><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-trash me-2"></i> Delete</a></div></div></td></tr><tr><td><i class="ti ti-brand-bootstrap ti-lg text-primary me-3"></i><strong>Bootstrap Project</strong></td><td>Jerry Milton</td><td><ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center"><li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" class="avatar avatar-xs pull-up" title="Lilian Fuller"><img src="/assets/img/avatars/5.png" alt="Avatar" class="rounded-circle"></li><li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" class="avatar avatar-xs pull-up" title="Sophia Wilkerson"><img src="/assets/img/avatars/6.png" alt="Avatar" class="rounded-circle"></li><li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" class="avatar avatar-xs pull-up" title="Christina Parker"><img src="/assets/img/avatars/7.png" alt="Avatar" class="rounded-circle"></li></ul></td><td><span class="badge bg-label-warning me-1">Pending</span></td><td><div class="dropdown"><button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="ti ti-dots-vertical"></i></button><div class="dropdown-menu"><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-pencil me-2"></i> Edit</a><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-trash me-2"></i> Delete</a></div></div></td></tr></tbody></table></div>',1);function P(t,a){const o=c("Select2"),i=c("dropzone"),e=c("QuillEditor");return m(),g(v,null,[n(o,{modelValue:t.myValue,"onUpdate:modelValue":a[0]||(a[0]=s=>t.myValue=s),options:["myOptions"],settings:{settingOption:t.value,settingOption:t.value},onChange:a[1]||(a[1]=s=>t.myChangeEvent(s)),onSelect:a[2]||(a[2]=s=>t.mySelectEvent(s))},null,8,["modelValue","settings"]),l("div",L,[l("div",S,[j,n(i,{collection:"medical_certificate",url:t.route("api.media.upload"),model:"User",message:"Drop files here or click to upload profile photo",acceptedFiles:"application/pdf,image/jpeg,image/png"},null,8,["url"]),$]),F]),l("button",{class:"btn btn-primary",onClick:a[3]||(a[3]=s=>t.defaultValue="<p>Hello world</p>")},"Set default"),l("div",null,[n(e,{modelValue:t.defaultValue,"onUpdate:modelValue":a[4]||(a[4]=s=>t.defaultValue=s),defaultValue:t.defaultValue},null,8,["modelValue","defaultValue"])]),f(" "+h(t.defaultValue),1)],64)}const N=u(E,[["render",P]]);export{N as default};