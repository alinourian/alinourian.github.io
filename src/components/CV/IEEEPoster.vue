<script setup>

</script>

<template>
  <div class="popup-overlay" @click="closePopup">
    <div class="popup-content" @click.stop>
      <div class="popup-content-header">
        <div class="close-button" @click="closePopup">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
        </div>
        <a class="close-button" href="/images/icmlcn/IEEE-Poster.png" target="_blank" @click="downloadFile('/images/icmlcn/IEEE-Poster.png', 'IEEE-Poster.png')">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>
        </a>
      </div>
      <div class="poster-container">
        <img src="/images/icmlcn/IEEE-Poster.png" alt="IEEE Poster">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closePopup() {
      this.$emit('close');
    },
    downloadFile(filePath, fileName) {
      // Create an anchor element
      const link = document.createElement('a');
      // Set the href attribute to the image path
      link.href = filePath;
      // Set the download attribute to specify the file name
      link.download = fileName;
      // Programmatically click the anchor element to trigger the download
      link.click();
    },
  },
};
</script>

<style scoped>
.poster-container {
  display: flex;
  width: 100%;
  height: 100%;
}

.poster-container img {
  width: 100%;
  height: 100%;
  border-radius: 0 0 8px 8px;
}

/* Popup Overlay */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* Popup Content */
.popup-content {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  width: 70%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
}

.popup-content-header {
  display: flex;
  padding: 10px 15px;
  justify-content: space-between;
}

.popup-overlay {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.close-button {
  width: 20px;
  align-self: center;
  cursor: pointer;
}

.close-button svg {
  align-self: center;
  display: flex;
}
</style>