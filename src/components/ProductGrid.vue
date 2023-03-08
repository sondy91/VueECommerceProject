<template>
    <div>
        <!-- <DataView :value="products" :layout="layout" :rows="3">
            
        </DataView> -->
        {{ products }}
    </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import ProductCard from "./ProductCard.vue";
import ProductService from "../service/ProductService.ts";

const productService = ref(new ProductService());
const products = ref();
const layout = ref('grid');

onMounted(() => {
    alert('test');
    productService.value.getProducts().then(data => this.products(data));
    alert(this.products.value);
})
</script>
<style>
</style>