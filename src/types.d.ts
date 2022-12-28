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

export interface Lyric {
  startTimeMs: number;
  words: string;
  syllables: [];
  endTimeMs: 0;
}

export interface SyncedLyrics {
  error: false;
  syncType: "LINE_SYNCED";
  lines: Lyric[];
}

export interface UnsyncedLyrics {
  error: false;
  syncType: "UNSYNCED";
  lines: (Omit<Lyric, "startTimeMs"> & { startTimeMs: 0 })[];
}

export interface NoLyrics {
  error: true;
}

export type Lyrics = SyncedLyrics | UnsyncedLyrics | NoLyrics;
