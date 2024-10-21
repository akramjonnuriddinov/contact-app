<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <TheHeader />
    <RouterView />
  </div>
</template>
