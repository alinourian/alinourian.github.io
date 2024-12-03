<template>
  <div class="video-gallery-container">
    <div class="video-gallery">
      <div
          v-for="(video, index) in videos"
          :key="index"
          class="video-card"
          @click="openVideoModal(video)"
      >
        <img :src="video.thumbnail" alt="video thumbnail" class="video-thumbnail" />
        <div class="video-details">
          <h3 class="video-title">{{ video.title }}</h3>
          <p class="video-description">{{ video.description }}</p>
        </div>
      </div>
      <div class="video-card" @click="downloadFile('/files/LLMsChallenges.pdf', 'LLMs-Challenges.pdf')">
        <img src="/files/LLMs-Challenges.png" alt="video thumbnail" class="video-thumbnail" />
        <div class="video-details">
          <h3 class="video-title">Addressing Challenges in GPT Models</h3>
          <p class="video-description">How to address challenges of New Context, Privacy and Reliability</p>
        </div>
      </div>
    </div>

    <div v-if="showModal" class="video-modal" @click.self="closeVideoModal">
      <div class="video-modal-content">
        <iframe
            :src="selectedVideo.url"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
            class="video-player"
        ></iframe>
        <button @click="closeVideoModal" class="close-button">&times;</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videos: [
        {
          title: 'First Demo',
          description: 'Error Handler Feedback Loop.',
          thumbnail: '/files/gamechanger.png',
          url: '/files/gamechanger.mp4',
        },
        {
          title: 'Network Graph',
          description: 'Graph Visualization of Network Configurations.',
          thumbnail: '/files/network visualization.png',
          url: '/files/network visualization.mp4',
        },
        // Add more videos as needed
      ],
      showModal: false,
      selectedVideo: null,
    };
  },
  methods: {
    openVideoModal(video) {
      this.selectedVideo = video;
      this.showModal = true;
    },
    closeVideoModal() {
      this.showModal = false;
      this.selectedVideo = null;
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
.video-gallery-container {
  text-align: center;
  padding: 1rem 0;
}

.video-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.video-card {
  cursor: pointer;
  max-width: 320px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.video-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.video-thumbnail {
  width: 100%;
  aspect-ratio: 16/9;
}

.video-details {
  padding: 1rem;
  text-align: left;
}

.video-title {
  font-size: 1.2rem;
  font-weight: 600;
}

.video-description {
  font-size: 1rem;
  color: #555;
  margin-top: 0.5rem;
}

.video-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.video-modal-content {
  position: relative;
  width: 80%;
  max-width: 900px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  height: 500px;
}

.video-player {
  width: 100%;
  height: 500px;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
}
</style>
