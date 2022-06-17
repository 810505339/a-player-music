<script lang="ts" setup>
const songs = [
  {
    title: 'カタオモイ',
    artist: 'Aimer',
    src: 'http://music.163.com/song/media/outer/url?id=431259256.mp3',
    pic: 'http://p2.music.126.net/2QRYxUqXfW0zQpm2_DVYRA==/109951165052089697.jpg?param=150y150',
  },
  {
    title: '体面',
    artist: '于文文',
    src: 'http://music.163.com/song/media/outer/url?id=1323304744.mp3',
    pic: 'https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg?param=130y130',
  },
  {
    title: '一生所爱',
    artist: '卢冠廷 / 莫文蔚',
    src: 'http://music.163.com/song/media/outer/url?id=25707139.mp3',
    pic: 'https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg?param=130y130',
  },
  {
    title: '平凡之路',
    artist: '朴树',
    src: 'http://music.163.com/song/media/outer/url?id=500665346.mp3',
    pic: 'https://p2.music.126.net/IwEI0tFPh4w9OjY6RM2IJQ==/109951163009071893.jpg?param=130y130',
  },

]
</script>

<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <a-player :music="songs" />

    <Footer />
  </main>
</template>
