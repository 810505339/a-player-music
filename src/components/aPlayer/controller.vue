<script setup lang='ts'>
import dayjs from 'dayjs'
import { useSongStore } from '~/store'

const songStore = useSongStore()
const audio = $ref<HTMLAudioElement | null>(null)
let allTime = $ref('00:00') // 歌曲总时间
let curTime = $ref('00:00') // 播放的时间
let progress = $ref(0) // 进度条
const current = $computed(() => songStore.currentMusic)

function onTimeupdate(e: Event) {
  const audio = e.target as HTMLAudioElement
  const { duration, currentTime } = audio
  progress = (currentTime / duration * 100)
  curTime = dayjs.unix(currentTime).format('mm:ss')
}

function durationchange() {
  if (audio)
    allTime = dayjs.unix(audio.duration).format('mm:ss')
}

function changeAfter(value: number) {
  audio!.currentTime = (value * audio!.duration / 100)
  play()
}

async function play() {
  await audio!.play()
  current.playing = true
}

function pause() {
  audio!.pause()
  current.playing = false
}
watch(() => current.src, async () => {
  setTimeout(async () => {
    await play()
  }, 0)
})

function toggle() {
  current.playing ? play() : pause()
}
function changVolume(value: number) {
  if (audio)
    audio.volume = value / 100
}
</script>

<template>
  <div flex>
    <thumbnail @toggle="toggle" />
    <div basis-full px2 pt2 flex flex-col justify-between>
      <info />
      <lyric />
      <div flex>
        <controllerProgress v-model:percent="progress" basis-full :duration="allTime" @changeAfter="changeAfter" />
        <playerIcons :current-time="curTime" :duration="allTime" @chang-volume="changVolume" />
      </div>
    </div>
  </div>
  <audio
    ref="audio" name="media" :src="current.src" @timeupdate="onTimeupdate" @durationchange="durationchange"
  />
</template>
