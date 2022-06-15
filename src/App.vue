<script lang="ts" setup>
const percent = $ref(0)
const songs = [
  {
    title: '平凡之路',
    artist: '朴树',
    src: 'http://music.163.com/song/media/outer/url?id=500665346.mp3',
    pic: 'https://p2.music.126.net/IwEI0tFPh4w9OjY6RM2IJQ==/109951163009071893.jpg?param=130y130',
    playing: false,
  },
  {
    title: 'カタオモイ',
    artist: 'Aimer',
    src: 'http://music.163.com/song/media/outer/url?id=431259256.mp3',
    pic: 'http://p2.music.126.net/2QRYxUqXfW0zQpm2_DVYRA==/109951165052089697.jpg?param=150y150',
    playing: false,
  },
]
</script>

<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <a-player :music="songs" />
    <controllerProgress v-model:percent="percent" vertical h-100px />
    <Footer />
  </main>
</template>
