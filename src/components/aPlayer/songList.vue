<script setup lang="ts">
import { useSongStore } from '~/store'

const store = useSongStore()

function toggle(index: number) {
  store.toggle(index)
}
</script>

<template>
  <Transition tag="div" mode="out-in" appear>
    <div v-show="store.isOpen">
      <div
        v-for="(song, index) in store.playList" :key="index" border=" t-1  #efefef" flex items-center text-sm px15px
        py5px cursor-pointer hover:bg="#efefef" relative :class="!song.playing || `bg-#efefef`" overflow-hidden
        max-h-155px @click="toggle(index)"
      >
        <div v-if="song.playing" h-2px w-5px bg-blue-300 absolute left-0 />
        <div text="#666 left 12px" mr2>
          {{ index + 1 }}
        </div>
        <div basis="full" text="left black">
          {{ song.title }}
        </div>
        <div text="#666 right 12px" basis="1/4">
          {{ song.artist }}
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
/* we will explain what these classes do next! */

* {
  will-change: height;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}

.v-enter-active,
.v-leave-active {
  transition: all 1s ease-in-out;
  overflow: hidden;
  max-height: 155px;
}

.v-leave-to,   .v-enter-from{
opacity: 0;
  max-height: 0;
}
</style>
