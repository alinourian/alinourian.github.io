<script setup>

import VideoCard from "@/components/ProjectInfo/VideoCard.vue";

const recordedVideos = [
  {title: 'Session 1', link: 'https://drive.google.com/file/d/10H76PfvaIOUXzQcQSflgDLksshwDqkPc/view?usp=drive_link'},
];
</script>

<template>
  <div class="page-container">
    <div class="left-sidebar">

    </div>
    <div class="main-container">
      <div class="heading">
        <div class="img-container">
          <img src="/images/Mistral7B.jpg" alt="mistral-7b-banner">
        </div>
        <h1>
          Mistral-7B Fine-Tuning
        </h1>
      </div>
      <div class="course-description">
        <h4>Description</h4>
        <div class="description">
          <p>
            Fine tuning Mistral-7b with PEFT(Parameter Efficient Fine-Tuning) and LoRA(Low-Rank Adaptation) on Puffin Dataset(multi-turn conversations between GPT-4 and real humans). It was a part of ICST's workshop on "Deciphering Large Language Models" taught by me and Mr. Akhlaghpour (Senior AI Eng. @ Silicon Valley) at Sharif University of Technology on November 2023.
          </p>
          <a href="https://github.com/alinourian/Fine-tuning-Mistral-7b-QA" target="_blank" class="hyper-icon">
            <svg style="height: 25px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
            </svg>
            GitHub Repo
          </a>
<!--          <a href="https://drive.google.com/drive/folders/1aHOd1tSKbY5-XvYk3WbwF0DzrgDihtsc" target="_blank" class="hyper-icon">-->
<!--            <svg style="height: 25px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">&lt;!&ndash;!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.&ndash;&gt;-->
<!--              <path d="M339 314.9L175.4 32h161.2l163.6 282.9H339zm-137.5 23.6L120.9 480h310.5L512 338.5H201.5zM154.1 67.4L0 338.5 80.6 480 237 208.8 154.1 67.4z"/>-->
<!--            </svg>-->
<!--            Google Drive-->
<!--          </a>-->
        </div>
      </div>
      <div class="section">
<!--        <h4>Videos</h4>-->
        <div class="gap-section">
<!--          <VideoCard v-for="videoObj in recordedVideos"-->
<!--                     :title="videoObj.title"-->
<!--                     :link="videoObj.link"-->
<!--          />-->
        </div>
      </div>
    </div>
    <div class="right-sidebar">

    </div>
  </div>
</template>

<style scoped>
.gap-section {
  height: 45vh;
}

.page-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  position: relative;
  margin-top: 75px;
}

.right-sidebar {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 15%;
  padding: 2% 4%;
}

.main-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 1% 2%;
}

.left-sidebar {
  display: flex;
  flex-direction: column;
  width: 15%;
  padding: 2% 4%;
}

.img-container {
  display: flex;
  height: 120px;
}

.heading {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
}

.course-description {
  text-align: justify;
  margin-bottom: 30px;
}

.course-description .description {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
}

.hyper-icon {
  align-items: center;
  display: flex;
  gap: 5px;
  color: var(--color-accent);
}

.videos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 10px 0;
}

summary {
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 600;
}

details[open] summary {
}

details > div {
  border-top: 1px solid #ccc;
}

@media screen and (max-width: 1200px) {
  .right-sidebar {
    width: 10%;
  }

  .left-sidebar {
    width: 10%;
  }

  .main-container {
    width: 80%;
  }
}

@media screen and (max-width: 900px) {
  .videos {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 500px) {
  .videos {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>