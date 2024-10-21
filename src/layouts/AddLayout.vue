<script setup lang="ts">
import ContactHeader from '@/components/ContactHeader.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <ContactHeader />
    <RouterView />
  </div>
</template>
