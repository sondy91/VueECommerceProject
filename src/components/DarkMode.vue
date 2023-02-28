<script setup>
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
    <div class="darkmode-container">
        <Button @click="toggleDark()" class="px-4 py-2 text-white bg-green-500 rounded dark:bg-purple-500">
            <i :class="isDark ? 'pi pi-sun' : 'pi pi-moon'"></i>
        </Button>
    </div>
</template>

<style scoped>
.darkmode-container {
    margin: 0.25rem;
}
</style>