<template>
    <TransitionRoot as="template" :show="open.show">
      <Dialog as="div" class="relative z-10" @close="open.change()">
        <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        </TransitionChild>
  
        <div class="fixed inset-0 overflow-hidden">
          <div class="absolute inset-0 overflow-hidden">
            <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
                <DialogPanel class="pointer-events-auto w-screen max-w-md">
                  <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div class="flex items-start justify-between">
                        <DialogTitle class="text-lg font-medium text-gray-900">Informação do Pedido</DialogTitle>
                        <div class="ml-3 flex h-7 items-center">
                          <button type="button" class="-m-2 p-2 text-gray-400 hover:text-gray-500" @click="open.change()">
                            <span class="sr-only">Fechar painel</span>
                            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
  
                      <div class="mt-8">
                        <div class="flow-root">
                          <ul role="list" class="-my-6 divide-y divide-gray-200">
                            <li v-for="product in products.list" :key="product.id" class="flex py-6">
                              <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img :src="product.image" :alt="product.image" class="h-full w-full object-cover object-center" />
                              </div>
  
                              <div class="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div class="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      {{ product.name }}
                                    </h3>
                                    <p class="ml-4"> R$ {{ product.price }}</p>
                                  </div>
                                  <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
                                </div>
                                <div class="flex flex-1 items-end justify-between text-sm">
                                  <p class="text-gray-500">Quantidade {{ product.quantity }}</p>
  
                                  <div class="flex">
                                    <button @click="products.removeItem(product.id)" class="font-medium text-indigo-600 hover:text-indigo-500">Remover</button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
  
                    <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div class="flex justify-between text-base font-medium text-gray-900">
                        <p>Total</p>
                        <p>R$ {{ products.getTotal }}</p>
                      </div>
                      <p class="mt-0.5 text-sm text-gray-500">Taxas são calculadas na impressão.</p>
                      <div class="mt-6">
                        <button 
                          class="flex items-center w-full justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                          @click.prevent="emit('generateReport')"
                          :disabled="products.list.length < 1"
                        >
                          Imprimir
                        </button>
                      </div>
                      <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          ou
                          <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500" @click="open.change()">
                            Continue adicionando
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
</template>
  
<script setup>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { XMarkIcon } from '@heroicons/vue/24/outline';
import { useCheckoutList, useShowCheckoutStore } from '@/stores/checkout';

  const emit = defineEmits([' generateReport ']);
  const products = useCheckoutList();
  const open = useShowCheckoutStore();
</script>