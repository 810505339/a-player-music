<script setup lang="ts">
defineProps<{
  duration: string
  currentTime: string
}>()
const volume = $ref(60)
</script>

<template>
  <div text-12px ml2>
    <span pr-2>-</span><span>{{ currentTime }}</span>/<span>{{ duration }}</span>
  </div>

  <div flex items-center relative text="12px">
    <i icon-btn i-ic-round-volume-up class="peer" />
    <div absolute bottom="15px" left-4px h-60px hidden peer-hover:block hover:block>
      <ControllerProgress v-model:percent="volume" vertical h-60px />
    </div>

    <i icon-btn i-ic-round-loop />
    <i icon-btn i-ic-round-menu-open />
  </div>
</template>
