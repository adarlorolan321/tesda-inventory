<script setup>
import { useLogin } from "../../Composables/Login";
const { login, form } = useLogin();
</script>
<template>
    <div class="min-h-screen flex flex-col items-center justify-center">
        <div class="h-full w-full flex flex-row items-center justify-center">
            <div class="max-w-[500px] w-full">
                <form @submit.prevent="login()">
                    <div class="form--group">
                        <label for="email">Email *</label>
                        <input
                            class="form--input"
                            placeholder="Enter your emaill address"
                            type="text"
                            name="email"
                            id="email"
                            @input="form.clearErrors('email')"
                        />
                        <span class="form--error">{{ form.errors.email }}</span>
                    </div>
                    <div class="form--group">
                        <label for="password">Password *</label>
                        <input
                            class="form--input"
                            type="password"
                            placeholder="Enter your password"
                            name="password"
                            id="password"
                            @input="form.clearErrors('password')"
                        />
                        <span class="form--error">{{
                            form.errors.password
                        }}</span>
                    </div>
                    <button class="btn btn--primary w-full" type="submit">
                        Login
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>
