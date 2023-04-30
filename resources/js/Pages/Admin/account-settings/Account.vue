<script>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import Navigation from "./Navigation/Navigation.vue";
import { usePage, Head } from "@inertiajs/vue3";
import axios from "axios";
export default {
  layout: AdminLayout,
  components: {
    Navigation,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      form: {
        name: this.user ? this.user.name : "",
        email: this.user ? this.user.email : "",
        position: this.user ? this.user.position : "",
        department: this.user ? this.user.department : "",
        role: this.user ? this.user.role : "",
      },
    };
  },
  methods: {
    submit() {
      axios
        .patch(`/profile/${this.user.id}`, this.form)
        .then((response) => {
          // Handle successful response
          console.log(response.data);
        })
        .catch((error) => {
          // Handle error response
          console.log(error);
        });
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
          <h5 class="card-header">Profile Details</h5>
          <!-- Account -->

          <div class="card-body"></div>
          <hr class="my-0" />
          <div class="card-body">
            <div class="row">
              <div class="mb-3 col-md-6">
                <label for="firstName" class="form-label">Full Name</label>
                <input
                  class="form-control"
                  type="text"
                  id="firstName"
                  v-model="form.name"
                  autofocus
                />
              </div>

              <div class="mb-3 col-md-6">
                <label for="email" class="form-label">E-mail</label>
                <input
                  class="form-control"
                  type="text"
                  v-model="form.email"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div class="mb-3 col-md-6">
                <label for="email" class="form-label">Position</label>
                <input class="form-control" type="text" v-model="form.position" />
              </div>

              <div class="mb-3 col-md-6">
                <label for="language" class="form-label">Role</label>
                <select v-model="form.role" id="language" class="select2 form-select">
                  <option value="">Select Role</option>
                  <option value="Admin" selected>Admin</option>

                  <option value="Staff">Staff</option>
                </select>
              </div>
            </div>
            <div class="mt-2">
              <button @click="submit" class="btn btn-primary me-2">Save changes</button>
              <!-- <button type="reset" class="btn btn-label-secondary">Cancel</button> -->
            </div>
          </div>
          <!-- /Account -->
        </div>
        <div class="card">
          <h5 class="card-header">Delete Account</h5>
          <div class="card-body">
            <div class="mb-3 col-12 mb-0">
              <div class="alert alert-warning">
                <h5 class="alert-heading mb-1">
                  Are you sure you want to delete your account?
                </h5>
                <p class="mb-0">
                  Once you delete your account, there is no going back. Please be certain.
                </p>
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
              <button type="submit" class="btn btn-danger deactivate-account">
                Deactivate Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
