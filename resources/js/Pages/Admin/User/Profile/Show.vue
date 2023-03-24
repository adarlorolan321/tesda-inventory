<script>
import ProfileLayout from "@/Layouts/ProfileLayout.vue";
import { useCrud } from "@/Composables/Crud.js";
import Swal from "sweetalert2";




// Swal.fire("Email sent!", "A valid email address with an existing account has been submitted by user","success" );
export default {
    props: {
    auth: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    console.log(props.auth); 
  },
    setup(){
        const routeName = "user.profile";
        // const { form, updatePromise } = useCrud({
        //     first_name:null,
        //     last_name:null,
        //     phone:null,

        // },routeName);

        const submitForm = async () => {
        try {
            await updatePromise();
        
        } catch (error) {
          
        }
        }
        return {
            // form,
            submitForm,
        }

    },
    
    layout: ProfileLayout,
    data() {
        return {
            imageUrl: null,
        };
    },
    methods: {
        loadImage() {
            const file = this.$refs.fileInput.files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
            this.imageUrl = event.target.result;
            };
            reader.readAsDataURL(file);
        
        },

        uploadImage(){

        }
}
    
  
      
};

</script>

<template>
    <!-- {{ $page.props.auth }} -->
    <div class="row">
                <div class="col-md-12">
                  
                  <div class="card mb-4">
                    <h5 class="card-header">Profile Details</h5>
                    <!-- Account -->
                    <div class="card-body">
                      <div class="d-flex align-items-start align-items-sm-center gap-4">
                        <img
                          :src="imageUrl?imageUrl:$page.props.auth.user.profile_photo_url "
                          alt="user-avatar"
                          class="d-block w-px-100 h-px-100 rounded"
                          id="uploadedAvatar"
                        />
                        <div class="button-wrapper">
                          <label for="upload" class="btn btn-primary me-2 mb-3" tabindex="0">
                            <span class="d-none d-sm-block">Upload new photo</span>
                            <i class="ti ti-upload d-block d-sm-none"></i>
                            <input
                            @change="loadImage"
                              type="file"
                              id="upload"
                              class="account-file-input"
                              hidden
                              ref="fileInput"
                             accept="image/*"

                            />
                          </label>
                          <button @click="imageUrl = null" type="button" class="btn btn-label-secondary account-image-reset mb-3">
                            <i class="ti ti-refresh-dot d-block d-sm-none"></i>
                            <span class="d-none d-sm-block">Reset</span>
                          </button>

                          <div class="text-muted">Allowed JPG, GIF or PNG. Max size of 800K</div>
                        </div>
                      </div>
                    </div>
                    <hr class="my-0" />
                    <div class="card-body">
                      <form id="formAccountSettings" method="POST" @submit.prevent="submitForm">
                        <div class="row">
                          <div class="mb-3 col-md-6">
                            <label for="firstName"  class="form-label">First Name</label>
                            <input
                              class="form-control"
                              type="text"
                              id="firstName"
                              name="firstName"
                              :value="$page.props.auth.user.first_name"
                              autofocus
                            />
                          </div>
                          <div class="mb-3 col-md-6">
                            <label for="lastName" class="form-label">Last Name</label>
                            <input class="form-control" type="text" name="lastName" id="lastName"     :value="$page.props.auth.user.last_name" />
                          </div>
                          <div class="mb-3 col-md-6">
                            <label for="email" class="form-label">E-mail</label>
                            <input
                              class="form-control"
                              type="text"
                              id="email"
                              name="email"
                              :value="$page.props.auth.user.email"
                             
                            />
                          </div>
              

                          <div class="mb-3 col-md-6">
                            <label class="form-label" for="phoneNumber">Phone Number</label>
                            <div class="input-group input-group-merge">
                              <span class="input-group-text">US (+1)</span>
                              <input
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                class="form-control"
                                :value="$page.props.auth.user.phone"
                               
                              />
                            </div>
                          </div>
                        
                        
                        
                        
                          <div class="mb-3 col-md-6">
                            <label for="role" class="form-label">Role</label>

                            <input id="role" class="form-control" disabled :value="$page.props.auth.user.role">
                            

                            <!-- <select  id="role" class="select2 form-select">
                              <option value="">Select Role</option>
                              <option :selected="$page.props.auth.user.role == 'Admin'" value="Admin">Admin</option>
                              <option :selected="$page.props.auth.user.role == 'Coach'"  value="Coach">Coach</option>
                              <option :selected="$page.props.auth.user.role == 'Staff'" value="Staff">Staff</option>
                              <option :selected="$page.props.auth.user.role == 'Student'" value="Student">Student</option>
                              <option :selected="$page.props.auth.user.role == 'Parent'" value="Parent">Parent</option>
                              <option :selected="$page.props.auth.user.role == 'Client'" value="Client">Client</option>
                            </select> -->
                          </div>
                        
                          <div class="mb-3 col-md-6">
                            <label for="currency" class="form-label">Status</label>
                            <input id="role" class="form-control" disabled :value="$page.props.auth.user.status==null?'Active':$page.props.auth.user.status">
                            <!-- <select id="currency" class="select2 form-select">
                              <option value="">Select Status</option>
                              <option :selected="$page.props.auth.user.status == 'Active'" value="usd" selected>Active</option>
                              <option :selected="$page.props.auth.user.status == 'InActive'" value="euro">InActive</option>
                            </select> -->
                          </div>
                        </div>
                        <div style="float: right;" class="mt-2 mr-24 ">
                          <button type="submit" class="btn btn-primary me-2 ">Update</button>
                       
                        </div>
                      </form>
                    </div>
                    <!-- /Account -->
                  </div>
                  <div class="card">
                    <h5 class="card-header">Delete Account</h5>
                    <div class="card-body">
                      <div class=" col-12 mb-0">
                        <div class="alert alert-warning">
                          <h5 class="alert-heading mb-1">Are you sure you want to delete your account?</h5>
                          <p class="mb-0">Once you delete your account, there is no going back. Please be certain.</p>
                        </div>
                      </div>
                      <form id="formAccountDeactivation" onsubmit="return false">
                        <div class="form-check mb-4">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            name="accountActivation"
                            id="accountActivation"
                          />
                          <label class="form-check-label" for="accountActivation"
                            >I confirm my account deactivation</label
                          >
                        </div>
                        <button type="submit" class="btn btn-danger deactivate-account">Deactivate Account</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
</template>
