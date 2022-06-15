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
// 切换播放
function toggle() {
  if (current.playing)
    play()
  else
    pause()
}
function play() {
  audio?.play()
}
function pause() {
  audio?.pause()
}

function canPlay() {
  if (!audio)
    return

  allTime = dayjs.unix(audio.duration as number).format('mm:ss')
}

function changeAfter(value: number) {
  audio!.currentTime = (value * audio!.duration / 100)
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
        <playerIcons :current-time="curTime" :duration="allTime" />
      </div>
    </div>
  </div>
  <audio
    ref="audio" name="media" :src="current.src" preload="auto" @timeupdate="onTimeupdate" @canplay="canPlay"
    @play="play"
  />
</template>
