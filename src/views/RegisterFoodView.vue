<template>
<div class="flex flex-col justify-center mx-auto max-w-2xl py-8 px-4 sm:px-6 lg:max-w-7xl lg:px-8 min-h-full">
<div class="mt-5 md:col-span-2 md:mt-0">
    <form @submit.prevent="onSubmit">
        <div class="overflow-hidden shadow sm:rounded-md">
            <div class="bg-white px-4 py-5 sm:p-6">
            <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                <label for="name" class="block text-sm font-medium text-gray-700">Nome</label>
                <input v-model="name.value" :ref="name.ref" type="text" name="name" required id="name" autocomplete="given-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                </div>

                <div class="col-span-6 sm:col-span-3">
                <label for="price" class="block text-sm font-medium text-gray-700">Preço</label>
                <input v-model="price.value" :ref="price.ref" type="number" required name="price" id="price" autocomplete="family-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                </div>

                <div class="col-span-6 sm:col-span-4">
                <label for="description" class="block text-sm font-medium text-gray-700">Descrição breve</label>
                <input v-model="detail.value" :ref="detail.ref" type="text" name="description" id="description" autocomplete="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                </div>

                <div class="col-span-6">
                <label for="image" class="block text-sm font-medium text-gray-700">Url da imagem</label>
                <input v-model="image.value" :ref="image.ref" type="text" name="image" id="image" autocomplete="image" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                </div>
            </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button 
                type="submit" 
                class="inline-flex justify-center text-center items-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Salvar
                <SpinnerComponent v-show="loading"/>
            </button>
            </div>
        </div>
    </form>
</div>
</div>
</template>

<script>
    import { useForm } from 'vue-hooks-form';
    import api from '../api';
    import { useRouter } from 'vue-router';
    import SpinnerComponent from '@/components/LoadingComponent.vue';
    import { ref } from 'vue';

    export default {
        components: {
            SpinnerComponent
        },
        setup() {
            const loading = ref(false);
            const { useField, handleSubmit } = useForm({
                defaultValues: {},
            });
            const router = useRouter();
            const onSubmit = async (data) => {
                loading.value = true;
                api.post('api/products', data).then(() => {
                    loading.value = false;
                    router.push('/');
                }).catch(() => {
                    loading.value = false;
                });
            };
            const name = useField('name', {
                rule: { required: true, message: "Preencha o nome" },
            });
            const detail = useField('detail', {
                rule: { required: false },
            });
            const image = useField('image', {
                rule: { required: true, message: "Preencha a imagem" },
            });
            const price = useField('price', {
                rule: { required: true, message: "Preencha o preço" },
            });
            return { 
                name, 
                detail, 
                image, 
                price,
                loading, 
                onSubmit: handleSubmit(onSubmit)
            };
        },
    };
</script>
<style scoped>

</style>