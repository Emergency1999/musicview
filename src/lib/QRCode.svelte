<div class="wrapper">
  <span class="label">Hier Musik hinzufügen:</span>
  <img src="qrcode.png" alt="QR Code" class="qr-code" />
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 var(--spacing);
    padding: var(--spacing);
    box-sizing: border-box;
    background-color: var(--bg-light);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
  }
  .label {
    font-size: 3vh;
    margin-bottom: var(--spacing);
  }
  .qr-code {
    width: 100%;
    aspect-ratio: 1;
  }
</style>
