<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<template>
<div class="home">
  <div class="mx-auto max-w-2xl py-8 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 class="text-2xl font-bold tracking-tight text-gray-900 mb-10">Cardápio - Novo pedido</h2>
    <MenuComponent />
  </div>
  <PreviewComponent v-if="show" @generateReport="generateReport()" />
  <button 
    class="w-full flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 mx-auto sm:mb-24 max-w-2xl" 
    @click="show.change()"
  >
    Gerar Pedido
  </button>
  <div v-show="false">
    <PrintComponent ref="pdf"/>
  </div>
</div>
</template>

<script>
  import PreviewComponent from '@/components/CheckoutPreview.vue';
  import MenuComponent from "@/components/MenuItem.vue";
  import PrintComponent from '@/components/PdfTemplate.vue';
  import html2pdf from 'html2pdf.js';
  import { ref } from 'vue';
  import { useShowCheckoutStore } from '../stores/checkout';

  export default {
    components: {
      PrintComponent, 
      MenuComponent, 
      PreviewComponent
    },
    
    setup() {
      const show = useShowCheckoutStore();
      const pdf = ref(null);

      const generateReport  = async () => {
        html2pdf(pdf.value.$el, {
					margin: 3,
					filename: 'document.pdf',
					image: { type: 'jpeg', quality: 0.98 },
					html2canvas: { dpi: 192, letterRendering: true },
					jsPDF: { unit: 'mm', format: 'a4', orientation: 'p', compress: true }
				})
      }
      
      return { 
        generateReport, 
        show,
        pdf
      }
    }
  }
</script>

<style scoped>
  @media (max-width: 700px) {
    button {
      margin: 0;
      position: fixed;
      bottom: 0px;
      right: 0px;
      left: 0px;
      border-radius: 0;
      box-shadow: 0px -15px 20px -14px rgba(0,0,0,0.4)
    }
    .home {
      padding-bottom: 50px;
    }
  }
</style>
