import { writable } from "svelte/store";
import type { Lyrics } from "../types";
import currentSong from "./currentSong";
import { customFetch } from "./functions";

export const lyrics = writable<Lyrics>({
  error: true,
});

export async function refreshLyrics(): Promise<Lyrics> {
  if (import.meta.env.PUBLIC_MOCK_SERVER) {
    const newLyrics: Lyrics = {
      error: false,
      syncType: "LINE_SYNCED",
      lines: [
        {
          startTimeMs: 450,
          words: "Baby, this is what you came for",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 4270,
          words: "Lightning strikes every time she moves",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 11320,
          words: "And everybody's watchin' her",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 13110,
          words: "But she's looking at you, ooh, ooh",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 17310,
          words: "You, ooh, ooh, you, ooh, ooh",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 21240,
          words: "You, ooh, ooh, you, ooh, ooh",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 24960,
          words: "You, ooh, ooh, ooh",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 31520,
          words: "Baby, this is what you came for",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 35220,
          words: "Lightning strikes every time she moves",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 42330,
          words: "And everybody's watchin' her",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 44810,
          words: "But she's looking at you, ooh, ooh",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 48370,
          words: "You, ooh, ooh, you, ooh, ooh",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 52220,
          words: "You, ooh, ooh, you, ooh, ooh",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 55130,
          words: "You, ooh, ooh, ooh",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 61930,
          words: "You, ooh, ooh",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 63780,
          words: "You, ooh, ooh, you, ooh, ooh",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 67760,
          words: "You, ooh, ooh, you, ooh, ooh",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 71490,
          words: "You, ooh, ooh, ooh",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 77840,
          words: "We go fast with the game we play (game we play)",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 85590,
          words: "Who knows why it's gotta be this way (be this way)",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 93470,
          words: "We say nothin' more than we need (than we need)",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 101180,
          words: 'I say, "Your place" when we leave',
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 108780,
          words: "Baby, this is what you came for",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 112600,
          words: "Lightning strikes every time she moves",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 119730,
          words: "And everybody's watchin' her",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 122270,
          words: "But she's looking at you, ooh, ooh",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 125760,
          words: "You, ooh, ooh, you, ooh, ooh",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 129560,
          words: "You, ooh, ooh, you, ooh, ooh",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 133420,
          words: "You, ooh, ooh, ooh",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 139240,
          words: "You, ooh, ooh",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 141130,
          words: "You, ooh, ooh, you, ooh, ooh",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 145170,
          words: "You, ooh, ooh, you, ooh, ooh",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 148910,
          words: "You, ooh, ooh, ooh",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 155450,
          words: "Baby, this is what you came for",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 159280,
          words: "Lightning strikes every time she moves, yeah",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 170630,
          words: "Baby, this is what you came for",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 174590,
          words: "Lightning strikes every time she moves",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 181650,
          words: "And everybody's watchin' her",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 184460,
          words: "But she's looking at you, ooh, ooh",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 187810,
          words: "You, ooh, ooh, you, ooh, ooh",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 191580,
          words: "You, ooh, ooh, you, ooh, ooh",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 195470,
          words: "You, ooh, ooh, ooh",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 201390,
          words: "You, ooh, ooh",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 203310,
          words: "You, ooh, ooh, you, ooh, ooh",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 207000,
          words: "You, ooh, ooh, you, ooh, ooh",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 210920,
          words: "You, ooh, ooh, ooh",
          syllables: [],
          endTimeMs: 0,
        },
        {
          startTimeMs: 215870,
          words: "",
          syllables: [],
          endTimeMs: 0,
        },
      ],
    };
    lyrics.set(newLyrics);

    return newLyrics;
  } else {
    const newLyrics = await customFetch<Lyrics>("lyrics");

    if (!newLyrics) return null;

    if (newLyrics.error === false)
      // convert string from api to number
      for (const lyric of newLyrics.lines)
        lyric.startTimeMs = Number(lyric.startTimeMs);

    lyrics.set(newLyrics);

    return newLyrics;
  }
}

// refresh lyrics instantly when song changes
let lastSongName = "";
currentSong.subscribe((song) => {
  if (song.name !== lastSongName) {
    refreshLyrics();
    lastSongName = song.name;
  }
});

// refresh lyrics every 20 seconds
setInterval(
  refreshLyrics,
  import.meta.env.VITE_REFRESH_LYRICS_INTERVAL || 20 * 1000
);

export default lyrics;
