<script setup lang="ts">
defineProps<{
  duration: string
  currentTime: string
}>()
const emits = defineEmits<{
  (e: 'changVolume', value: number): void
}>()
const volume = $ref(60)
function changVolume(value: number) {
  emits('changVolume', value)
}
</script>

<template>
  <div text-12px ml2>
    <span pr-2>-</span><span>{{ currentTime }}</span>/<span>{{ duration }}</span>
  </div>

  <div flex items-center relative text="12px">
    <i icon-btn i-ic-round-volume-up class="peer" />
    <div absolute bottom="15px" left-4px h-60px hidden peer-hover:block hover:block>
      <ControllerProgress v-model:percent="volume" vertical h-60px @change-after="changVolume" />
    </div>

    <i icon-btn i-ic-round-loop />
    <i icon-btn i-ic-round-menu-open />
  </div>
</template>
