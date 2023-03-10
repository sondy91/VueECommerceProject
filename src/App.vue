<script setup>
import { ref } from 'vue';
import { useToast } from "primevue/usetoast";
import TopMenu from "./components/TopMenu.vue";
const text = ref();
const toast = useToast();
const greet = () => {
  toast.add({severity:'success', summary: 'PrimeTime', detail: text.value });
}
</script>

<template>
  <Toast></Toast>
  <TopMenu></TopMenu>
  <div class="container">
    <router-view></router-view>
  </div>
</template>
<style>
.container {
  margin: 0 auto;
  max-width: 100% !important;
}
html.dark {
  color-scheme: dark;
  background-color: rgb(51 65 85);
}
</style>
