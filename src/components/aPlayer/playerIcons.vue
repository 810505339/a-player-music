<script setup lang="ts">
defineProps<{
  duration: string
  currentTime: string
}>()
</script>

<template>
  <div text-12px ml2>
    <span pr-2>-</span><span>{{ currentTime }}</span>/<span>{{ duration }}</span>
  </div>
  <div flex items-center text="12px">
    <i icon-btn i-ic-round-volume-up />
    <i icon-btn i-ic-round-loop />
    <i icon-btn i-ic-round-menu-open />
  </div>
</template>
