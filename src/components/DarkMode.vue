<script setup>
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
    <div class="darkmode-container">
        <Button @click="toggleDark()" class="px-4 py-2 rounded bg-gray-400 dark:bg-slate-700 dark:border-slate-400">
            <i :class="isDark ? 'pi pi-sun' : 'pi pi-moon'"></i>
        </Button>
    </div>
</template>

<style scoped>
.darkmode-container {
    display: flex;
    justify-content: right;
    margin: 0.25rem;
}
</style>