import { defineStore } from 'pinia'
import { SongModelType } from './../../type/songs'
import type { songState } from './type'
import type SongType from '~/type/songs'

export const useSongStore = defineStore<string, songState>('songs', () => {
  let playList = $ref<SongType[]>([])
  let index = $ref(0)// 所选的音乐index用于切换
  const modeIndex = $ref<SongModelType>(SongModelType.loop)// 播放model模式
  let currentMusic = $ref<SongType>({
    title: '',
    artist: '',
    src: '',
    pic: '',
    playing: false,
  })

  function init(songsList: SongType[]) {
    playList = songsList
    currentMusic = songsList[index]
  }
  function toggle(playIndex: number) {
    index = playIndex
  }
  watch($$(index), () => {
    playList = playList.map((song) => {
      song.playing = false
      return song
    })
    playList[index].playing = true
    currentMusic = playList[index]
  })
  return {
    currentMusic: $$(currentMusic),
    index: $$(index),
    playList: $$(playList),
    init,
    toggle,
    modeIIndex: $$(modeIndex),
  }
})
