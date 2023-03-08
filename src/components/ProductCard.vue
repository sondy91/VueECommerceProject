<template>
    <Card class="w-4 dark:bg-slate-700 dark:text-white">
        <template #title class="m">
            Product Card
        </template>
        <template #content>
            <img alt="user header" src="../assets/future-sneakers.png">
        </template>
        <template #footer>
            Test
        </template>
    </Card>
</template>
<script setup>
import Card from 'primevue/card';
</script>