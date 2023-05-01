<script>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import Navigation from "./Navigation/Navigation.vue";
import axios from "axios";
import toastr from "toastr";


export default {
  layout: AdminLayout,
  components: {
    Navigation,
  },
  data() {
    return {
      form: {
        current_password: null,
        password: null,
        password_confirmation: null,
        errors: [],
      },
      openEye: {},
    };
  },
  methods: {
    submit() {
      axios
        .post("/profile/change-password", this.form)
        .then((response) => {
          // Handle successful response
          console.log(response.data);
          toastr.success("Record saved");
          this.form = {
            current_password: null,
            password: null,
            password_confirmation: null,
            errors: [],
          };
        })
        .catch((error) => {
          // Handle error response
          if (error.response.status >= 400 && error.response.status < 500) {
            this.form.errors = error.response.data.message;
            console.log(error.response.data.message);
          } else {
            console.log("An error occurred on the server.");
          }
        });
    },
    open(val) {
      if (val) this.openEye[val] = true;
    },
  },
};
</script>
<template>
  <div class="container-xxl flex-grow-1 container-p-y">
    <Navigation />
    <div class="row">
      <div class="col-md-12">
        <div class="card mb-4">
          <h5 class="card-header">Change Password</h5>
          <div class="card-body">
            <div class="row">
              <div class="mb-3 col-md-6 form-password-toggle">
                <label class="form-label" for="current_password">Current Password</label>
                <div class="input-group input-group-merge">
                  <input
                    class="form-control"
                    :type="this.openEye.current_password ? 'text' : 'password'"
                    v-model="form.current_password"
                    name="current_password"
                    id="current_password"
                    :class="{
                      'is-invalid': form.errors && form.errors.current_password,
                    }"
                    placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                  />
                  <span
                    @click="open('current_password')"
                    class="input-group-text cursor-pointer"
                    ><i class="ti ti-eye-off"></i
                  ></span>
                </div>
                <div class="red">
                  {{
                    form.errors.current_password ? form.errors.current_password[0] : ""
                  }}
                </div>
              </div>
            </div>
            <div class="row">
              <div class="mb-3 col-md-6 form-password-toggle">
                <label class="form-label" for="newPassword">New Password</label>
                <div class="input-group input-group-merge">
                  <input
                    class="form-control"
                    :type="this.openEye.newPassword ? 'text' : 'password'"
                    id="newPassword"
                    v-model="form.password"
                    name="newPassword"
                    placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                    :class="{
                      'is-invalid': form.errors && form.errors.password,
                    }"
                  />
                  <span
                    @click="open('newPassword')"
                    class="input-group-text cursor-pointer"
                    ><i class="ti ti-eye-off"></i
                  ></span>
                </div>
                <div class="red">
                  {{ form.errors.password ? form.errors.password[0] : "" }}
                </div>
              </div>

              <div class="mb-3 col-md-6 form-password-toggle">
                <label class="form-label" for="confirmPassword"
                  >Confirm New Password</label
                >
                <div class="input-group input-group-merge">
                  <input
                    class="form-control"
                    :type="this.openEye.password_confirmation ? 'text' : 'password'"
                    name="password_confirmation"
                    v-model="form.password_confirmation"
                    id="password_confirmation"
                    :class="{
                      'is-invalid': form.errors && form.errors.password_confirmation,
                    }"
                    placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                  />
                  <span
                    @click="open('password_confirmation')"
                    class="input-group-text cursor-pointer"
                    ><i class="ti ti-eye-off"></i
                  ></span>
                </div>
                <div class="red">
                  {{
                    form.errors.password_confirmation
                      ? form.errors.password_confirmation[0]
                      : ""
                  }}
                </div>
              </div>
              <div class="col-12 mb-4">
                <h6>Password Requirements:</h6>
                <ul class="ps-3 mb-0">
                  <li class="mb-1">Minimum 8 characters long - the more, the better</li>
                  <li class="mb-1">At least one lowercase character</li>
                  <li>At least one number, symbol, or whitespace character</li>
                </ul>
              </div>
              <div>
                <button @click="submit" class="btn btn-primary me-2">Save changes</button>
                <button type="reset" class="btn btn-label-secondary">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.red {
  color: red;
}
</style>
