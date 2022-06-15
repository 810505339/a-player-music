<script setup lang="ts">
import type MusicPlayerProps from '~/type/song'
import { useSongStore } from '~/store'

const props = defineProps<{
  music: MusicPlayerProps[]
}>()
const songStore = useSongStore()
songStore.init(props.music)
</script>

<template>
  <div rounded ma bg-white shadow-md max-w-500px>
    <controller />
    <song-list />
  </div>
</template>
