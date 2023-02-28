<script setup lang="ts">
import { ref } from 'vue';
import { useToast } from "primevue/usetoast";
import DarkMode from "./components/DarkMode.vue";
import Card from "./components/Card.vue";
import Stats from "./components/Stats.vue";
import Hero from "./components/Hero.vue";
const text = ref();
const toast = useToast();
const greet = () => {
  toast.add({severity:'success', summary: 'PrimeTime', detail: text.value });
}
</script>

<template>
  <Toast></Toast>
  <DarkMode></DarkMode>
  <div class="container flex flex-column">
    <!-- <div class=".container-child">
      <Card></Card>
    </div> -->
    <div class=".container-child">
      <Stats></Stats>
    </div>
    <!-- <div class=".container-child">
      <span class="p-float-label" style="margin-right:1rem">
        <InputText id="txt" type="text" v-model="text" />
        <label for="txt">Text</label>
      </span>
    </div> -->
    <!-- <div>
      <Hero></Hero>
    </div>
    <div class=".container-child">
      <Button label="Greet" @click="greet" icon="pi pi-user"></Button>
    </div>     -->
  </div>
</template>
<style>
html.dark {
  color-scheme: dark;
}
</style>
