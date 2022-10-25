<template>
    <div class="custom-number-input h-10 w-32">
        <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
            <button @click="count > 0 ? count-- : count = 0; list.removeItem(props.obj?.id)" class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
            <span class="m-auto text-2xl font-thin">−</span>
            </button>
            <input type="text" readonly class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" :value="count" />
            <button 
                @click="count++, list.addItem(props.obj)" 
                class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
            >
                <span class="m-auto text-2xl font-thin">+</span>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useCheckoutList } from '../stores/checkout';

    const count = ref(0);
    const list = useCheckoutList();
    const props = defineProps({
        obj: Object,
    });
</script>
