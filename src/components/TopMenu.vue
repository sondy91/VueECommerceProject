<template>
    <div class="menu-container">
        <Menubar :model="menuItems" class="dark:bg-slate-700">
            <template #start>
                <img alt="logo" src="../assets/logoPhoto.png" style="max-height: 60px;" class="mr-2">
            </template>
            <template #end>
                <DarkMode></DarkMode>
            </template>
        </Menubar>
    </div>    
</template>
<script setup>
import {ref} from "vue";
import DarkMode from "./DarkMode.vue";
const menuItems = ref([
  {
    label:'Home',
    icon:'pi pi-fw pi-home',
    to: '/'
    // items:[
    //   {
    //     label:'New',
    //     icon:'pi pi-fw pi-plus',
    //     items:[
    //       {
    //         label:'Bookmark',
    //         icon:'pi pi-fw pi-bookmark'
    //       },
    //       {
    //         label:'Video',
    //         icon:'pi pi-fw pi-video'
    //       }
    //     ]
    //   },
    //   {
    //     label:'Delete',
    //     icon:'pi pi-fw pi-trash'
    //   },
    //   {
    //     separator:true
    //   },
    //   {
    //     label:'Export',
    //     icon:'pi pi-fw pi-external-link'
    //   }
    // ]
  },
  {
    label: 'Products',
    icon: 'pi pi-fw pi-money-bill',
    to: '/products'
  },
  {
    label:'Favorites',
    icon:'pi pi-fw pi-heart',
    to: '/favorites'
  },
  {
    label:'Cart',
    icon:'pi pi-fw pi-shopping-cart',
    to: '/cart'
  }
]);
</script>
<style>
</style>