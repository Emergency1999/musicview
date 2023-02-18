<script lang="ts">
  import SquareGrow from "./SquareGrow.svelte";

  const urlParams = new URLSearchParams(window.location.search);
  const qr = urlParams.get("qr") as "bot" | "self" | "";

  $: src = qr === "bot" ? "qrcode bot.png" : "qrcode localhost.png";
  $: link =
    qr === "bot" ? "https://t.me/MusicHomeBot" : "http://192.168.1.20:8080";
</script>

<SquareGrow>
  <div class="wrapper" on:click={() => window.open(link, "_blank")}>
    <img {src} alt="QR Code" class="qr-code" />
  </div>
</SquareGrow>

<style lang="sass">
  .wrapper
    display: flex
    align-items: center
    justify-content: center
    height: 100%
    width: 100%
    padding: calc($spacing / 4)
    box-sizing: border-box
    background-color: $bg-light
    border-radius: $border-radius
    box-shadow: $shadow
    cursor: pointer

  .qr-code
    height: 100%
    width: 100%
    object-fit: contain

</style>
