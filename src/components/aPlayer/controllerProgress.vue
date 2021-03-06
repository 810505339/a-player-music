<script setup lang='ts'>
import type { CSSProperties } from 'vue'

const props = defineProps<{
  percent: number
  vertical?: boolean // 是否是垂直模式
}>()
const emits = defineEmits(['update:percent', 'changeAfter'])
const sliderBar = $ref<HTMLElement | null>(null) // slider bar
const handle = $ref<HTMLElement | null>(null) // 点点
let progress = $ref<number>(Number(props.percent)) // 进度条的备份
// https://vueuse.org/core/usePointerSwipe/#usage
const { isSwiping, distanceX, distanceY } = usePointerSwipe($$(handle), {
  threshold: 0, // 临界值默认是50...
  onSwipe(e: PointerEvent) {
    const d = props.vertical ? distanceY.value : -distanceX.value
    const offset = props.vertical ? sliderBar!.offsetHeight : sliderBar!.offsetWidth
    const percent = (d / offset) * 100
    progress = Number(props.percent) + percent

    if (progress >= 100)
      progress = 100
    if (progress <= 0)
      progress = 0
  },
  onSwipeEnd(e: PointerEvent) {
    // 完成拖拽
    emits('update:percent', progress)
    emits('changeAfter', progress)
  },
  pointerTypes: ['mouse', 'touch'],
}) // 使用

// const { pressed } = useMousePressed({ target: $$(handle) }) // 是否一直按着点点

const styleDistance = $computed(() => isSwiping.value ? `${progress}` : props.percent) // 按着点点的时候，歌曲不影响进度条

const sliderStyle = $computed<CSSProperties>(() => {
  return props.vertical
    ? {
        height: `${styleDistance}%`,
      }
    : {
        width: `${styleDistance}%`,
        left: '0%',
      }
})
const handleStyle = $computed<CSSProperties>(() => {
  return props.vertical
    ? {
        bottom: `${styleDistance}%`,
      }
    : {
        left: `${styleDistance}%`,
      }
})
const sliderClass = $computed(() => {
  return props.vertical ? 'w-4px h-full' : 'h-4px w-full'
})
const handleClass = $computed(() => {
  return props.vertical ? 'bottom-0 left-[50%] translate-x-[-50%] ' : 'top-[50%]  translate-y-[-50%]'
})

function mousedown(e: MouseEvent) {
  e.stopPropagation()
  if (!sliderBar)
    return
  const { pageX, pageY } = e
  const rect = sliderBar.getBoundingClientRect()
  const d = props.vertical ? (pageY - rect.top) : pageX - rect.left
  const offset = props.vertical ? sliderBar!.offsetHeight : sliderBar!.offsetWidth

  progress = calcProgress(d, offset, props.vertical)
  emits('update:percent', progress)

  if (!isSwiping.value)
    emits('changeAfter', progress)
}
function calcProgress(d: number, offset: number, vertical: boolean | undefined) {
  let progress = vertical ? (1 - (d / offset)) * 100 : (d / offset) * 100
  if (progress >= 100)
    progress = 100
  if (progress <= 0)
    progress = 0
  return progress
}
</script>

<template>
  <div flex items-center>
    <div ref="sliderBar" relative bg="gray-200/300" :class="sliderClass" inline-block transition @mousedown="mousedown">
      <div absolute bg-green-500 bottom-0 w-full h-full :style="sliderStyle" />
      <div
        ref="handle" :class="handleClass" h-10px w-10px absolute rounded-full bg-white transition border="~ gray-800" shadow-md
        hover:scale-150 :style="handleStyle"
      />
    </div>
  </div>
</template>
