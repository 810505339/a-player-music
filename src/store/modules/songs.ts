import { defineStore } from 'pinia'
import type { songState } from './type'
import type SongType from '~/type/songs'

export const useSongStore = defineStore<string, songState>('songs', () => {
  let playList = $ref<SongType[]>([])
  let index = $ref(0)// 所选的音乐index用于切换
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
    console.log(currentMusic)
  })
  return {
    currentMusic: $$(currentMusic),
    index: $$(index),
    playList: $$(playList),
    init,
    toggle,
  }
})
