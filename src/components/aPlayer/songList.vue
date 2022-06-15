<script setup lang="ts">
import { useSongStore } from '~/store'

const store = useSongStore()

function toggle(index: number) {
  store.toggle(index)
}
</script>

<template>
  <div
    v-for="(song, index) in store.playList" :key="index" border=" t-1  #efefef" flex items-center text-sm px15px
    py5px cursor-pointer hover:bg="#efefef" @click="toggle(index)"
  >
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
</template>
