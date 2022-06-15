<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSongStore } from '~/store'

const { currentMusic } = storeToRefs(useSongStore())
</script>

<template>
  <div flex items-center>
    <div mr2>
      {{ currentMusic.title }}
    </div>
    <div text="#666 12px">
      {{ currentMusic.artist }}
    </div>
  </div>
</template>
