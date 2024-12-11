<script setup>
const props = defineProps({
  videoUrl: {
    type: String,
    required: true,
  },
  videoTitle: {
    type: String,
    required: true,
  },
  papers: {
    type: Array,
    required: false,
    default: [
      {
        title: 'String',
        authors: 'String',
        year: 'String',
        link: 'String',
      },
    ]
  }
});
</script>

<template>
    <div class="video-paper-group">
      <!-- Video Section -->
      <div class="video-container">
        <iframe
            :src="videoUrl"
            frameborder="0"
            allowfullscreen
            class="video-thumbnail"
        ></iframe>
      </div>

      <!-- Related Papers Section -->
      <div class="papers-section">
        <h4>{{ videoTitle }}: A Comprehensive Overview of Key Papers in NLP</h4>
        <ul>
          <li
              v-for="(paper, paperIndex) in papers"
              :key="paperIndex"
              class="paper-item"
          >
            <h6 style="font-weight: 500;">{{ paperIndex + 1 }}. {{ paper.title }} <span>({{ paper.year }})</span></h6>
<!--            <a :href="paper.link" target="_blank">Read Paper</a>-->
          </li>
        </ul>
      </div>
    </div>
</template>

<style scoped>

.video-paper-group {
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.video-container {
  margin-bottom: 0;
}

.video-thumbnail {
  width: 100%;
  height: 300px;
  border-radius: 8px 8px 0 0;
}

.papers-section {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 20px;
}

.papers-section h3 {
  margin-bottom: 10px;
  font-size: 1.5em;
}

.papers-section ul {
  list-style-type: none;
  padding: 0;
}

.paper-item {
  margin-bottom: 15px;
  font-size: 1em;
}

.paper-item strong {
  font-size: 1.1em;
}

.paper-item a {
  color: #007bff;
  text-decoration: none;
}
</style>