import type { Ref } from 'vue'
import type { SongModelType } from './../../type/songs'
import type SongType from '~/type/songs'
export interface songState {
  playList: Ref<SongType[]>
  index: Ref<number>
  currentMusic: Ref<SongType>
  init: (playList: SongType[]) => void
  toggle: (index: number) => void
  modeIIndex: Ref<SongModelType>
  isOpen: Ref<boolean>
}
