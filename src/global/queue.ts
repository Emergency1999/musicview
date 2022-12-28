import { writable } from "svelte/store";
import type { Song } from "../types";
import { customFetch } from "./functions";

export const queue = writable<Song[]>([]);
export async function refreshQueue(): Promise<Song[]> {
  if (import.meta.env.PUBLIC_MOCK_SERVER) {
    const songs: Song[] = [
      {
        name: "This fffire",
        artist: "Franz Ferdinand",
        coverURL:
          "https://i.scdn.co/image/ab67616d00001e0244fadeb140014c49e807c468",
        dj: "",
        songDurationMs: 218000,
        startDate: new Date(Date.now() + 49000),
      },
      {
        name: "Zukunft Pink (feat. Inéz)",
        artist: "Peter Fox",
        coverURL:
          "https://i.scdn.co/image/ab67616d00001e02c69f53f035bf420d10b47d6f",
        dj: "DJ Fieka",
        songDurationMs: 230000,
        startDate: new Date(Date.now() - 49000 + 218000),
      },
    ];
    queue.set(songs);
    return songs;
  }
  const songs = await customFetch<Song[]>("/queue");
  if (songs) queue.set(songs);
  return songs;
}

// refetch queue every 3 seconds
setInterval(refreshQueue, import.meta.env.PUBLIC_QUEUE_FETCH_INTERVAL || 3000);
refreshQueue();

export default queue;
