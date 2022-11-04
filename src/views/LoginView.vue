<template>
<div class="login flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div class="w-full max-w-md space-y-8">
    <div>
      <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
      <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Entrar na sua conta</h2>
    </div>
    <form class="mt-8 space-y-6" @submit="onSubmit">
      <input type="hidden" name="remember" value="true">
      <div class="-space-y-px rounded-md shadow-sm">
        <div>
          <label for="email-address" class="sr-only">Email</label>
          <input 
            v-model="email.value" 
            :ref="email.ref" 
            id="email-address" 
            name="email" 
            type="email" 
            autocomplete="email" 
            class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" 
            placeholder="Email" 
          />
        </div>
        <div>
          <label for="password" class="sr-only">Senha</label>
          <input 
            id="password" 
            name="password"
            v-model="password.value" 
            :ref="password.ref" 
            type="password" 
            autocomplete="current-password" 
            class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" 
            placeholder="Senha" 
          />
        </div>
        <MessageFormComponent v-if="email.error && !password.error" :message="email.error.message"/>
        <MessageFormComponent v-if="password.error && !email.error" :message="password.error.message"/>
      </div>
      <div>
        <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
            </svg>
          </span>
          Entrar
        </button>
      </div>
    </form>
  </div>
</div>
</template>

<script>
  import { useForm } from 'vue-hooks-form';
  import MessageFormComponent from '@/components/MessageFormComponent.vue';
  import api from '../api';
  import { useAuthStore } from '../stores/auth';
  import { useRouter } from 'vue-router';

  export default {
    components: {
      MessageFormComponent
    },
    setup() {
      const authStore = useAuthStore()
      const router = useRouter();

      const { useField, handleSubmit } = useForm({
        defaultValues: {},
      });

      const email = useField('email', {
        rule: { required: true, message: "Preencha o email" },
      });

      const password = useField('password', {
        rule: {
          required: true,
          min: 6,
          message: "Preencha a senha com pelo menos 6 dígitos",
        },
      });

      const onSubmit = (data) => api.post('api/login', data).then((response) => {
        authStore.setAuthUser(response.data.data.token);
        router.push('/');
      });

      return {
        email,
        password,
        onSubmit: handleSubmit(onSubmit),
      }
    },
  }
</script>

<style>
</style>
  