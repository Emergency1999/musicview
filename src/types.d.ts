export interface Song {
  name: string;
  artist: string;
  coverURL: string;
  dj: string;
  songDurationMs: number;
  startDate: Date | null;
}

export interface CurrentSong extends Song {
  positionInTrack: number;
}
