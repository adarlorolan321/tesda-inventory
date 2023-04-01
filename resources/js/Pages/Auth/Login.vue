<script setup>
import { useLogin } from "../../Composables/Login";
import { Head } from "@inertiajs/vue3";
import { ref } from "vue";
const { login, form } = useLogin();
const password = ref(true);
defineProps({
    status: String,
});
</script>
<template>
    <Head title="Login"></Head>
    <div class="container-xxl bg-logo" style="">
        <div class="authentication-wrapper authentication-basic container-p-y">
            <div class="authentication-inner py-4">
                <!-- Login -->
                <div class="card transparency">
                    <div class="card-body">
                        <!-- Logo -->
                        <div class="app-brand justify-content-center mb-4 mt-2">
                            <a href="index.html" class="app-brand-link ">
                                <img class="logo-picture" src="../../assets/img/branding/logo.png" alt="">
                                <span
                                    class="app-brand-text demo text-body fw-bold "
                                    >Tesda</span
                                >
                            </a>
                        </div>
                        <!-- /Logo -->
                        <h4 class="mb-1 pt-2">Welcome to Tesda</h4>
                        
                        <div v-if="status" class="alert alert-success">
                            {{ status }}
                        </div>
                        <form
                            @submit.prevent="login()"
                            id="formAuthentication"
                            class="mb-3 fv-plugins-bootstrap5 fv-plugins-framework"
                        >
                            <div class="mb-3">
                                <label for="email" class="form-label"
                                    >Email or Username</label
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    id="email"
                                    v-model="form.email"
                                    :class="{
                                        'is-invalid': form.errors.email,
                                    }"
                                    name="email"
                                    placeholder="Enter your email or username"
                                    autofocus
                                    @input="form.clearErrors('email')"
                                />
                                <div
                                    class="invalid-feedback"
                                    v-if="form.errors.email"
                                >
                                    {{ form.errors.email }}
                                </div>
                            </div>
                            <div class="mb-3 form-password-toggle">
                                <div class="d-flex justify-content-between">
                                    <label class="form-label" for="password"
                                        >Password</label
                                    >
                                    <inertia-link href="/forgot-password">
                                        <small>Forgot Password?</small>
                                    </inertia-link>
                                </div>
                                <div class="input-group input-group-merge">
                                    <input
                                        :type="password ? 'password' : 'text'"
                                        id="password"
                                        class="form-control"
                                        :class="{
                                            'is-invalid': form.errors.password,
                                        }"
                                        name="password"
                                        v-model="form.password"
                                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                        aria-describedby="password"
                                        @input="form.clearErrors('password')"
                                    />
                                    <span
                                        class="input-group-text cursor-pointer"
                                        @click="password = !password"
                                        ><i
                                            :class="[
                                                password
                                                    ? 'ti ti-eye-off'
                                                    : 'ti ti-eye',
                                            ]"
                                        ></i
                                    ></span>
                                </div>
                                <div
                                    class="invalid-feedback"
                                    v-if="form.errors.password"
                                >
                                    {{ form.errors.password }}
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        id="remember-me"
                                    />
                                    <label
                                        class="form-check-label"
                                        for="remember-me"
                                    >
                                        Remember Me
                                    </label>
                                </div>
                            </div>
                            <div class="mb-3">
                                <button
                                    class="btn btn-primary d-grid w-100"
                                    type="submit"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>

                        <!-- <p class="text-center">
                            <span>New on our platform?</span>&nbsp;
                            <inertia-link>
                                <span>Create an account</span>
                            </inertia-link>
                        </p> -->

                        <!-- <div class="divider my-4">
                            <div class="divider-text">or</div>
                        </div>

                        <div class="d-flex justify-content-center">
                            <a
                                href="javascript:;"
                                class="btn btn-icon btn-label-facebook me-3"
                            >
                                <i
                                    class="tf-icons fa-brands fa-facebook-f fs-5"
                                ></i>
                            </a>

                            <a
                                href="javascript:;"
                                class="btn btn-icon btn-label-google-plus me-3"
                            >
                                <i
                                    class="tf-icons fa-brands fa-google fs-5"
                                ></i>
                            </a>

                            <a
                                href="javascript:;"
                                class="btn btn-icon btn-label-twitter"
                            >
                                <i
                                    class="tf-icons fa-brands fa-twitter fs-5"
                                ></i>
                            </a>
                        </div> -->
                    </div>
                </div>
                <!-- /Register -->
            </div>
        </div>
    </div>
</template>
<style>
.logo-picture{
    width: 100px;
    height: 50px;
    margin-right: -28px;
}
.bg-logo{
   
    background-size: initial;
    background-repeat: no-repeat;
    background-position: center;
}
</style>
