<template>
    <div class="w-full">
            <h1 class="my-2 text-gray-800 font-bold text-2xl">
                Nenhum item cadastrado ainda
            </h1>
            <p class="my-2 text-gray-800">Crie um novo item para o cardápio!</p>
            <button @click.prevent="router.push('/food')" class="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Me leve até lá!</button>
    </div>
</template>

<script setup>
    import { useRouter } from "vue-router";

    const router = useRouter();

</script>