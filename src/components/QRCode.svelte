<div
  class="wrapper"
  on:click={() => window.open("https://t.me/MusicHomeBot", "_blank")}
>
  <img src="qrcode.png" alt="QR Code" class="qr-code" />
</div>

<style lang="sass">
  .wrapper
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    padding: calc($spacing / 4)
    box-sizing: border-box
    background-color: $bg-light
    border-radius: $border-radius
    box-shadow: $shadow
    cursor: pointer
  
  .qr-code
    width: 100%
    aspect-ratio: 1
</style>
