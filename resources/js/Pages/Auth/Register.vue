<script setup>
import {  useSignup} from "../../Composables/SignUp";
import { Head } from "@inertiajs/vue3";
import { ref } from "vue";

const { signUp, form ,} = useSignup();
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
                            @submit.prevent="signUp()"
                            id="formAuthentication"
                            class="mb-3 fv-plugins-bootstrap5 fv-plugins-framework"
                        >
                        <div class="mb-3">
                                <label for="name" class="form-label"
                                    >Name</label
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    id="name"
                                    v-model="form.name"
                                    :class="{
                                        'is-invalid': form.errors.name,
                                    }"
                                    name="name"
                                    placeholder="Name"
                                    autofocus
                                    @input="form.clearErrors('name')"
                                />
                                <div
                                    class="invalid-feedback"
                                    v-if="form.errors.name"
                                >
                                    {{ form.errors.name }}
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label"
                                    >Email</label
                                >
                                <input
                                    type="email"
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
                                        :type="password_confirmation ? 'password_confirmation' : 'text'"
                                        id="password_confirmation"
                                        class="form-control"
                                        :class="{
                                            'is-invalid': form.errors.password_confirmation,
                                        }"
                                        name="password_confirmation"
                                        v-model="form.password_confirmation"
                                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                        aria-describedby="password_confirmation"
                                        @input="form.clearErrors('password_confirmation')"
                                    />
                                    <span
                                        class="input-group-text cursor-pointer"
                                        @click="password_confirmation = !password_confirmation"
                                        ><i
                                            :class="[
                                                password_confirmation
                                                    ? 'ti ti-eye-off'
                                                    : 'ti ti-eye',
                                            ]"
                                        ></i
                                    ></span>
                                </div>
                                <div
                                    class="invalid-feedback"
                                    v-if="form.errors.confirm_password"
                                >
                                    {{ form.errors.confirm_password }}
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
                                    Sign up
                                </button>
                            </div>
                        </form>

                      
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

</style>
