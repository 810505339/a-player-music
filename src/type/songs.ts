export default interface SongType {
  title?: string
  artist?: string
  src: string
  pic?: string
  playing: boolean
}

export enum SongModelType {
  loop = 0,
  cycle = 1,
  shuffle = 2,
}
