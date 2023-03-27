<script>
import ProfileLayout from "@/Layouts/ProfileLayout.vue";
import { useForm } from "@inertiajs/vue3";
import { ref } from "vue";
import toastr from "toastr";

export default {
    layout: ProfileLayout,
    setup() {
        const isPassword = ref({
            current_password: true,
            password: true,
            password_confirmation: true,
        });
        const form = useForm({
            current_password: "",
            password: "",
            password_confirmation: "",
        });
        const submit = async () => {
            form.post(route("user.profile.change_password"), {
                onSuccess: () => {
                    toastr.success("Record saved");
                    form.reset();
                },
            });
        };
        return {
            isPassword,
            form,
            submit,
        };
    },
};
</script>

<template>
    <div class="col-md-12">
        <div class="card mb-4">
            <h5 class="card-header">Change Password</h5>
            <div class="card-body">
                <form @submit.prevent="submit()">
                    <div class="row">
                        <!-- Current Password -->
                        <div class="mb-3 col-md-6">
                            <label class="form-label" for="currentPassword"
                                >Current Password</label
                            >
                            <div class="input-group input-group-merge">
                                <input
                                    v-model="form.current_password"
                                    class="form-control"
                                    :type="
                                        isPassword.current_password
                                            ? 'password'
                                            : 'text'
                                    "
                                    @input="form.setError('current_password')"
                                    :class="{
                                        'is-invalid':
                                            form.errors.current_password,
                                    }"
                                    id="currentPassword"
                                    name="currentPassword"
                                    placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                />
                                <span
                                    class="input-group-text cursor-pointer"
                                    @click="
                                        isPassword.current_password =
                                            !isPassword.current_password
                                    "
                                    ><i
                                        :class="
                                            !isPassword.current_password
                                                ? 'ti ti-eye'
                                                : 'ti ti-eye-off'
                                        "
                                    ></i
                                ></span>
                            </div>
                            <div
                                class="custom-invalid-feedback"
                                v-if="form.errors.current_password"
                            >
                                {{ form.errors.current_password }}
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <!-- New Password -->
                        <div class="mb-3 col-md-6">
                            <label class="form-label" for="newPassword"
                                >New Password</label
                            >
                            <div class="input-group input-group-merge">
                                <input
                                    v-model="form.password"
                                    class="form-control"
                                    :type="
                                        isPassword.password
                                            ? 'password'
                                            : 'text'
                                    "
                                    :class="{
                                        'is-invalid': form.errors.password,
                                    }"
                                    @input="form.setError('password')"
                                    id="newPassword"
                                    name="newPassword"
                                    placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                />
                                <span
                                    class="input-group-text cursor-pointer"
                                    @click="
                                        isPassword.password =
                                            !isPassword.password
                                    "
                                    ><i
                                        :class="
                                            !isPassword.password
                                                ? 'ti ti-eye'
                                                : 'ti ti-eye-off'
                                        "
                                    ></i
                                ></span>
                            </div>
                            <div
                                class="custom-invalid-feedback"
                                v-if="form.errors.password"
                            >
                                {{ form.errors.password }}
                            </div>
                        </div>

                        <!-- Confirm Password -->
                        <div class="mb-3 col-md-6">
                            <label class="form-label" for="confirmPassword"
                                >Confirm New Password</label
                            >
                            <div class="input-group input-group-merge">
                                <input
                                    v-model="form.password_confirmation"
                                    class="form-control"
                                    :type="
                                        isPassword.password_confirmation
                                            ? 'password'
                                            : 'text'
                                    "
                                    @input="
                                        form.setError('password_confirmation')
                                    "
                                    :class="{
                                        'is-invalid':
                                            form.errors.password_confirmation,
                                    }"
                                    name="confirmPasswordConfirmation"
                                    id="confirmPasswordConfirmation"
                                    placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                />
                                <span
                                    class="input-group-text cursor-pointer"
                                    @click="
                                        isPassword.password_confirmation =
                                            !isPassword.password_confirmation
                                    "
                                    ><i
                                        :class="
                                            !isPassword.password_confirmation
                                                ? 'ti ti-eye'
                                                : 'ti ti-eye-off'
                                        "
                                    ></i
                                ></span>
                            </div>
                            <div
                                class="custom-invalid-feedback"
                                v-if="form.errors.password_confirmation"
                            >
                                {{ form.errors.password_confirmation }}
                            </div>
                        </div>
                        <div>
                            <button type="submit" class="btn btn-primary me-2">
                                Save changes
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
