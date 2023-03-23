<script setup>
import { Head, useForm } from '@inertiajs/vue3';

const props = defineProps({
    email: String,
    token: String,
});

const form = useForm({
    token: props.token,
    email: props.email,
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('password.update'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>
<template>
  <Head title="Forgot Password" />
  <div class="mb-4 text-sm text-gray-600">
      Forgot your password? No problem. Just let us know your email address
      and we will email you a password reset link that will allow you to
      choose a new one.
  </div>
  <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
      {{ status }}
  </div>
  <form @submit.prevent="submit">
      <div class="form-group">
          <label for="">Email</label>
          <input class="form-control" type="email" v-model="form.email" />
          <span class="text-danger">{{form.errors.email}}</span>
      </div>
      <div class="form-group">
          <label for="">Password</label>
          <input class="form-control" type="email" v-model="form.password" />
          <span class="text-danger">{{form.errors.password}}</span>
      </div>
      <div class="form-group">
          <label for="">Password Confirmation</label>
          <input class="form-control" type="email" v-model="form.password_confirmation" />
          <span class="text-danger">{{form.errors.password_confirmation}}</span>
      </div>


      <button
          class="btn btn-primary"
          :class="{ 'opacity-25': form.processing }"
          :disabled="form.processing"
      >
          Email Password Reset Link
      </button>
  </form>
</template>