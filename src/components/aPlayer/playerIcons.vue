<script setup lang="ts">
import { useSongStore } from '~/store'

const props = defineProps<{
  duration: string
  currentTime: string
  muted: boolean
  volume: number
}>()
const emits = defineEmits<{
  (e: 'update:volume', value: number): void
  (e: 'update:muted', value: boolean): void
}>()
const modelList = ['i-ic-round-loop', 'i-ic-twotone-replay ', 'i-ic-round-shuffle']

const store = useSongStore()
let volume = $ref(props.volume * 100)
/* 修改音乐播放模式 */
function changeMode() {
  store.modeIIndex = store.modeIIndex < modelList.length - 1 ? store.modeIIndex + 1 : 0
}
watchEffect(() => {
  volume = props.muted ? 0 : props.volume * 100
})

watch($$(volume), () => {
  if (!props.muted)
    emits('update:volume', volume / 100)
})
</script>

<template>
  <div text-12px ml2>
    <span pr-2>-</span><span>{{ currentTime }}</span>/<span>{{ duration }}</span>
  </div>

  <div flex items-center relative text="12px">
    <i
      icon-btn :class="props.muted ? 'i-ic-round-volume-off' : 'i-ic-round-volume-up'" class="peer"
      @click="emits('update:muted', !props.muted)"
    />
    <div absolute bottom="15px" left-4px h-60px hidden peer-hover:block hover:block>
      <ControllerProgress v-model:percent="volume" vertical h-60px />
    </div>

    <i icon-btn :class="modelList[store.modeIIndex]" @click="changeMode" />
    <!--  i-ic-round-shuffle   随机 -->
    <!-- i-ic-twotone-replay  单曲 -->
    <i icon-btn i-ic-round-menu-open />
    <!--  <i icon-btn round-menu> -->
  </div>
</template>
