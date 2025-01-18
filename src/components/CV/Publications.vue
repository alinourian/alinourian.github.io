<script setup>

</script>

<template>
  <div class="section">
    <h3 class="section-heading">
      PUBLICATIONS
    </h3>
    <div class="section-body">
      <div class="publication">
        <div class="pub-img-holder">
          <img src="/images/icmlcn/LLMRAG.png" alt="LLM-RAG">
        </div>
        <div class="pub-holder">
          <h4 class="paper-title"><a class="paper-title-hyperlink" href="https://icmlcn2024.ieee-icmlcn.org/program/demonstrations" target="_blank">Large Language Models For 5G Network Management</a></h4>
          <p class="paper-authors">A. Mamaghani, <span style="font-weight: bold">A. Nourian</span>, N. Mohtaram, A. Shokrani, S.M. Nasiri, S. Kazemi; A. Mohammadi; N Nikaei; B. H. Khalaj.</p>
          <p class="paper-description">Accepted at the IEEE International Conference on Machine Learning for Communication and Networking
            (<span style="font-weight: bold">ICMLCN</span>), May 2024.
          </p>
          <div class="extra-info">

            <svg style="height: 20px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg>
            <div class="hyper-button" @click="goToPage('llms-for-5g-icmlcn')"> See More Details </div>
            <!--          See our-->
            <!--          <div class="hyper-button" @click="goToCardPage()">IEEE Poster</div>-->
            <!--          and-->
            <!--          <div class="hyper-button" @click="downloadFile('/files/LLM for 5G Proposal.pdf', 'LLM 5G Project Proposal.pdf')">Demo Proposal.</div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IEEEPoster from "@/components/CV/IEEEPoster.vue";

export default {
  components: {
    IEEEPoster,
  },
  data() {
    return {
      showPopup: false,
    };
  },
  methods: {
    togglePopup() {
      this.showPopup = !this.showPopup;
    },
    goToPage(page) {
      this.$router.push({name: page});
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
.pub-img-holder {
  display: flex;
  align-items: center;
  justify-content: center;
}

.pub-img-holder img {
  height: 100px;
}

.pub-holder {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.publication {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;
}

.paper-title-hyperlink {
  text-decoration: none;
  color: var(--color-accent);
}

.paper-title-hyperlink:hover {
  color: #0271E8;
}

.extra-info {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
}

.hyper-button {
  color: var(--color-accent);
  cursor: pointer;
}

.hyper-button:hover {
  color: #0271E8;
}
</style>