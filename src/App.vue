<script setup lang="ts">
import { ref } from 'vue';
import { useToast } from "primevue/usetoast";
const text = ref();
const toast = useToast();
const greet = () => {
  toast.add({severity:'success', summary: 'PrimeTime', detail: text.value });
}
</script>

<template>
  <Toast></Toast>
  <div class="container">
    <span class="p-float-label">
      <InputText id="txt" type="text" v-model="text" />
      <label for="txt">Text</label>
    </span>
    <Button label="Greet" @click="greet" icon="pi pi-user"></Button>
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }
</style>
