<template>
    <div class="custom-number-input h-10 w-32">
        <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
            <button @click="count > 0 ? count-- : count = 0; list.removeItem(object?.id)" class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
            <span class="m-auto text-2xl font-thin">−</span>
            </button>

            <div class="outline-none focus:outline-none text-center h-full w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center justify-center text-gray-700  outline-none">
                {{ getItemById(object?.id)?.quantity > 0 ? getItemById(object?.id)?.quantity : 0 }}
            </div>
            <button 
                @click="count++, list.addItem(object)" 
                class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
            >
                <span class="m-auto text-2xl font-thin">+</span>
            </button>
        </div>
    </div>
</template>

<script>
import { ref, toRef } from "vue";
import { useCheckoutList } from '../stores/checkout';

export default {
    props: {
        obj: Object,
    },

    setup(props) {
        const count = ref(0);
        const object  = toRef(props, 'obj');
        const list = useCheckoutList();

        return {
            count, 
            list,
            object,
            getItemById: list.getItem
        }
    }
}
</script>
