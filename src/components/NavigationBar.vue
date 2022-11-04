<template>
  <Popover class="relative bg-white" style="z-index: 1;">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a @click.prevent="router.push('/')">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div>
        <div class="-my-2 -mr-2 md:hidden">
          <PopoverButton class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span class="sr-only">Open menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden space-x-10 md:flex">
          <Popover class="relative" v-slot="{ open }" v-if="authStore.getAuthUser?.email">
            <PopoverButton :class="[open ? 'text-gray-900' : 'text-gray-500', 'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2']">
              <span>Pedidos</span>
              <ChevronDownIcon :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
            </PopoverButton>

            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel class="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <a v-for="item in solutions" 
                      :key="item.name" 
                      class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50" 
                      @click.prevent="router.push(item.path)"
                    >
                      <component :is="item.icon" class="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">{{ item.name }}</p>
                        <p class="mt-1 text-sm text-gray-500">{{ item.description }}</p>
                      </div>
                    </a>
                  </div>
                  <div class="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                    <div v-for="item in callsToAction" 
                      :key="item.name" 
                      class="flow-root" 
                      @click.prevent="router.push(item.path)"
                    >
                      <a class="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100">
                        <component :is="item.icon" class="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                        <span class="ml-3">{{ item.name }}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
          <Popover class="relative" v-slot="{ open }">
            <PopoverButton :class="[open ? 'text-gray-900' : 'text-gray-500', 'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2']">
              <span>Ajuda</span>
              <ChevronDownIcon :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
            </PopoverButton>

            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel class="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <a v-for="item in resources" 
                      :key="item.name" 
                      class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"  
                      @click.prevent="router.push(item.path)"
                    >
                      <component :is="item.icon" class="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">{{ item.name }}</p>
                        <p class="mt-1 text-sm text-gray-500">{{ item.description }}</p>
                      </div>
                    </a>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
        </PopoverGroup>
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
        <div class="relative">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <input type="search" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar pratos, pedidos..." required>
        </div>
        <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0"  v-if="!authStore.getAuthUser?.email">
          <a class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"><router-link to="login">Entrar</router-link></a>
          <router-link to="register">
            <a class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
              Cadastrar
            </a>
          </router-link>
        </div>
        <div class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900" v-if="authStore.getAuthUser?.email">
          {{ authStore.getAuthUser.name }}
        </div>
      </div>
    </div>

    <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <PopoverPanel focus class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
        <div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div class="px-5 pt-5 pb-6">
            <div class="flex items-center justify-between">
              <div>
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
              </div>
              <div class="-mr-2">
                <PopoverButton class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <a v-for="item in solutions" 
                  :key="item.name" 
                  class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                  @click.prevent="router.push(item.path)"
                >
                  <component :is="item.icon" class="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                  <span class="ml-3 text-base font-medium text-gray-900">{{ item.name }}</span>
                </a>
              </nav>
            </div>
          </div>
          <div class="space-y-6 py-6 px-5">
            <div class="grid grid-cols-2 gap-y-4 gap-x-8">
              <a class="text-base font-medium text-gray-900 hover:text-gray-700">Pricing</a>
              <a class="text-base font-medium text-gray-900 hover:text-gray-700">Docs</a>
              <a v-for="item in resources" 
                :key="item.name" 
                @click.prevent="router.push(item.path)" 
                class="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                {{ item.name }}
              </a>
            </div>
            <div v-if="!authStore.getAuthUser?.email">
              <router-link to="register">
                <a class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                  Cadastrar
                </a>
              </router-link>
              <p class="mt-6 text-center text-base font-medium text-gray-500">
                Possui uma conta? 
                {{ ' ' }}
                <a class="text-indigo-600 hover:text-indigo-500"><router-link to="login" class="btn btn-link">Entrar</router-link></a>
              </p>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>
  
<script>
  import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue';
  import { ChevronDownIcon } from '@heroicons/vue/20/solid';
  import {
    ArrowPathIcon,
    Bars3Icon,
    BookmarkSquareIcon,
    ChartBarIcon, 
    LifebuoyIcon,
    PhoneIcon,
    PlayIcon,
    ShieldCheckIcon,
    Squares2X2Icon,
    XMarkIcon
  } from '@heroicons/vue/24/outline';
  import { useRouter } from 'vue-router';
  import { onMounted } from 'vue';
  import { useAuthStore } from '../stores/auth';

  export default {
    components: {
      Popover,
      PopoverButton,
      PopoverGroup,
      PopoverPanel,
      Bars3Icon,
      ArrowPathIcon,
      BookmarkSquareIcon,
      ChevronDownIcon,
      XMarkIcon,
      Squares2X2Icon,
      ShieldCheckIcon,
      PlayIcon,
      PhoneIcon,
      ChartBarIcon,
      LifebuoyIcon
    },
    setup() {
      const router = useRouter();
      const authStore = useAuthStore();
      const solutions = [
        {
          name: 'Pedidos do dia',
          description: 'Get a better understanding of where your traffic is coming from.',
          path: '/demand',
          icon: ChartBarIcon,
        },
        {
          name: 'Pratos',
          description: "Connect with third-party tools that you're already using.",
          path: '/food',
          icon: Squares2X2Icon,
        },
        {
          name: 'Em preparo',
          description: 'Build strategic funnels that will drive your customers to convert',
          path: '/preparing',
          icon: ArrowPathIcon,
        },
      ]
      const callsToAction = [
        { name: 'Watch Demo', path: '#', icon: PlayIcon },
        { name: 'Contact Sales', path: '#', icon: PhoneIcon },
      ]
      const resources = [
        {
          name: 'Help Center',
          description: 'Get all of your questions answered in our forums or contact support.',
          path: '/',
          icon: LifebuoyIcon,
        },
        { 
          name: 'Security', 
          description: 'Understand how we take your privacy seriously.', 
          path: '/', icon: ShieldCheckIcon 
        },
      ]
      onMounted(() => {
        authStore.setAuthUser();
      });
      return {
        resources,
        callsToAction,
        solutions,
        router,
        authStore
      }
    }
  }
</script>