<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSongStore } from '~/store'
const emit = defineEmits(['toggle'])
const { currentMusic } = storeToRefs(useSongStore())
const style = $computed(() => {
  return {
    backgroundImage: `url(${currentMusic.value.pic})`,
  }
})
function toggle() {
  currentMusic.value.playing = !currentMusic.value.playing
  emit('toggle')
}
</script>

<template>
  <div h-90px w-90px relative shrink-0 :style="style" bg-no-repeat bg-cover>
    <div absolute top-0 left-0 w-full h-full bg-black-500 opacity-20 />
    <button transition absolute z-1 :class="currentMusic.playing ? 'a-player-pause' : 'a-player-play'" @click="toggle">
      <i icon-btn w-full h-full :class="currentMusic.playing ? 'i-ic-round-pause-circle' : 'i-ic-round-play-circle'" />
    </button>
  </div>
</template>
