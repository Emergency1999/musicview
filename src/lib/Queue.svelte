<script>
    import { onMount } from "svelte";
    import Song from "./Song.svelte";
    export let queue = [];
    onMount(() => {
        async function fetchData() {
            fetch("http://127.0.0.1:3000/queue")
                .then((res) => res.json())
                .then((data) => {
                    queue = data;
                });
        }

        const interval = setInterval(fetchData, 3000);
        fetchData();

        return () => clearInterval(interval);
    });
</script>

{#each queue as song}
    <Song {...song} />
{/each}
