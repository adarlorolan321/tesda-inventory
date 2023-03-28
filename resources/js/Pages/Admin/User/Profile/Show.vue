
<script>
import AdminLayout from "@/Layouts/AdminLayout.vue";
export default {
    layout: AdminLayout,
};
</script>

<script setup>
import { useCrud } from "@/Composables/Crud.js";
import { useValidateForm } from "@/Composables/Validate.js";
import { usePage } from "@inertiajs/vue3";

const routeName = "user.profile";
const page = usePage();
const user = page.props.auth.user;



const formObject = {
            name:user.first_name+" "+user.last_name,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            profile_photo_url: user.profile_photo_url,
            phone: user.phone,
            profile_photo: user.profile_photo,
            id: user.id,
            role: user.role,
            status:user.status
};

const { validateForm } = useValidateForm();
let {
    form,
    updatePromise, 
    isLoadingComponents,
    handleEdit,
    formState
} = useCrud(formObject, routeName);
handleEdit(user.id);
</script>

<template>
    <!-- {{ $page.props.auth }} -->
    <div class="row">
        <div class="col-md-12">
            <div class="card mb-4">
                <h5 class="card-header">Profile Details</h5>
                <!-- Account -->
                <div class="card-body">
                    <div
                        class="offcanvas-body mt-4 mx-0 flex-grow-0"
                    >
                    <div class="form-group mb-4 dropzone-profile-photo">
                            <label for="name">Profile Photo</label>
                          
                            <dropzone
                                collection="profile_photo"
                                v-if="isLoadingComponents"
                                :url="route('api.media.upload')"
                                type="profile"
                                model="User"
                                :value="form.profile_photo"
                                @input="
                                    ($event) => {
                                        form.profile_photo = $event;
                                        form.clearErrors('profile_photo');
                                    }
                                "
                                message="Drop files here or click to upload profile photo"
                                acceptedFiles="image/jpeg,image/png"
                                @error="
                                    ($event) => {
                                        if ($event && $event[0]) {
                                            form.setError(
                                                'profile_photo',
                                                $event[0]
                                            );
                                        }
                                    }
                                "
                            >
                            </dropzone>
                            <div v-else>
                                <div class="dropzone" ref="dropzone">
                                    <div class="dz-message needsclick">
                                        Please Wait
                                    </div>
                                </div>
                            </div>

                            <div
                                class="v-invalid-feedback"
                                v-if="form.errors.profile_photo"
                            >
                                {{ form.errors.profile_photo }}
                            </div>
                        </div>
              

                    </div>
                </div>
                <hr class="my-0" />
                <div class="card-body">
                        <div class="row">
                            <div class="mb-3 col-md-6">
                                <label for="firstName" class="form-label"
                                    >First Name</label
                                >
                                <input
                                type="text"
                                id="last_name"
                                class="form-control"
                                v-model="form.first_name"
                                @input="
                                    ($event) => {
                                        form.clearErrors('first_name');
                                        validateForm(
                                            ['required'],
                                            form,
                                            $event.target.value,
                                            'first_name'
                                        );
                                    }
                                "
                                placeholder="Enter First Name"
                                :class="{
                                    'is-invalid': form.errors.first_name,
                                }"
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.last_name }}
                            </div>
                            </div>
                            <div class="mb-3 col-md-6">
                                <label for="lastName" class="form-label"
                                    >Last Name</label
                                >
                                <input
                                type="text"
                                id="last_name"
                                class="form-control"
                                v-model="form.last_name"
                                @input="
                                    ($event) => {
                                        form.clearErrors('last_name');
                                        validateForm(
                                            ['required'],
                                            form,
                                            $event.target.value,
                                            'last_name'
                                        );
                                    }
                                "
                                placeholder="Enter Last Name"
                                :class="{
                                    'is-invalid': form.errors.last_name,
                                }"
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.last_name }}
                            </div>

                            </div>
                            <div class="mb-3 col-md-6">
                                <label for="email" class="form-label"
                                    >E-mail</label
                                >
                                  <input
                                type="text"
                                id="last_name"
                                class="form-control"
                                v-model="form.email"
                                @input="
                                    ($event) => {
                                        form.clearErrors('email');
                                        validateForm(
                                            ['required'],
                                            form,
                                            $event.target.value,
                                            'email'
                                        );
                                    }
                                "
                                placeholder="Enter email"
                                :class="{
                                    'is-invalid': form.errors.email,
                                }"
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.email }}
                            </div>
                            </div>

                            <div class="mb-3 col-md-6">
                                <label class="form-label" for="phoneNumber"
                                    >Phone Number</label
                                >
                                <div class="input-group input-group-merge">
                                    <span class="input-group-text"
                                        >US (+1)</span
                                    >
                                    <input
                                type="text"
                                id="last_name"
                                class="form-control"
                                v-model="form.phone"
                                @input="
                                    ($event) => {
                                        form.clearErrors('phone');
                                        validateForm(
                                            ['required'],
                                            form,
                                            $event.target.value,
                                            'phone'
                                        );
                                    }
                                "
                                placeholder="Enter Phone Number"
                                :class="{
                                    'is-invalid': form.errors.phone,
                                }"
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.last_name }}
                            </div>
                                </div>
                            </div>
                            <div class="mb-3 col-md-6">
                                <label for="role" class="form-label"
                                    >Role</label
                                >

                                <input
                                    id="role"
                                    class="form-control"
                                    disabled
                                    :value="$page.props.auth.user.role"
                                />
                            </div>

                            <div class="mb-3 col-md-6">
                                <label for="currency" class="form-label"
                                    >Status</label
                                >
                                <input
                                    id="role"
                                    class="form-control"
                                    disabled
                                    :value="
                                        $page.props.auth.user.status
                                            ? 'Active'
                                            : 'In-active'
                                    "
                                />
                            </div>
                        </div>
                        <div style="float: right" class="mt-2 mr-24">
                            <button
                                class="btn btn-primary me-2"
                                @click="updatePromise"
                                :disabled="form.processing || form.hasErrors"
                        >
                            <span
                                v-if="form.processing"
                                class="spinner-border me-1"
                                role="status"
                                aria-hidden="true"
                            ></span>
                            Save changes
                        </button>
                        </div>
                </div>
                <!-- /Account -->
            </div>
            <!-- <div class="card">
                <h5 class="card-header">Delete Account</h5>
                <div class="card-body">
                    <div class="col-12 mb-0">
                        <div class="alert alert-warning">
                            <h5 class="alert-heading mb-1">
                                Are you sure you want to delete your account?
                            </h5>
                            <p class="mb-0">
                                Once you delete your account, there is no going
                                back. Please be certain.
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
                            <label
                                class="form-check-label"
                                for="accountActivation"
                                >I confirm my account deactivation</label
                            >
                        </div>
                        <button
                            type="submit"
                            class="btn btn-danger deactivate-account"
                        >
                            Deactivate Account
                        </button>
                    </form>
                </div>
            </div> -->
        </div>
    </div>
</template>
