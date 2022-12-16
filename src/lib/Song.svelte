<script>
    /*
interface QueueElement {
    name: string;
    artist: string;
    coverURL: string;
    playingTime: Date;
    dj: string;
}
 */

    export let name = "Songtitel";
    export let artist = "Artist";
    export let coverURL = "";
    export let dj = "DJ";
    export let playingTime = undefined;

    $: playingTimeString = playingTime
        ? "(" + new Date(playingTime).toLocaleTimeString() + ")"
        : "";
</script>

<div>
    <img src={coverURL} class="logo" alt="Bild" />
    <h1>{name}</h1>
    <h3>{playingTimeString}</h3>
    <h2>{artist}</h2>
    <h3>{dj}</h3>
</div>

<style>
    div {
        display: flex;
        margin: 1em;
        align-items: center;
        height: 12vh;
        border: 1px solid #ccc;
    }
    h1,
    h2 {
        display: block;
    }
    img {
        height: 12vh;
        width: auto;
    }
</style>
