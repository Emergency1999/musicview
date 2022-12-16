<script>
    import { onMount } from "svelte";
    export let volume = 0;

    onMount(() => {
        async function fetchData() {
            fetch("http://127.0.0.1:3000/volume")
                .then((res) => res.json())
                .then((data) => {
                    volume = data;
                });
        }

        const interval = setInterval(fetchData, 1000);
        fetchData();

        return () => clearInterval(interval);
    });
</script>

<div>
    <h1>Volume: {volume}</h1>
    <div class="volume">
        <div class="volume-bar" style="width: {volume}%" />
    </div>
</div>

<style>
    .volume {
        display: flex;
        align-items: center;
        justify-content: left;
        height: 2em;
        width: 100%;
        background-color: #000;
        border-radius: 0.5em;
        cursor: pointer;
    }
    .volume-bar {
        height: 2em;
        background-color: blue;
        border-radius: 0.5em;
    }
</style>
