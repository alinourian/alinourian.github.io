<script setup>

import VideoCard from "@/components/ProjectInfo/VideoCard.vue";
import VideoDriveCard from "@/components/ProjectInfo/DriveCard.vue";

const recordedVideos = [
  {title: 'Session 1', link: 'https://drive.google.com/file/d/1P811K-E5hzOn2YN4laJPsRJeevgQVse1/preview'},
  {title: 'Session 2', link: 'https://drive.google.com/file/d/1KQqZzIa0Q0BXQGDSrmSytLzcbu8arbqD/preview'},
  {title: 'Session 3', link: 'https://drive.google.com/file/d/1Jx4buCdPJL8UZUIGGJuFWL9byKRR7eBU/preview'},
  {title: 'Session 4', link: 'https://drive.google.com/file/d/1oOnimE7iyGCm0CFKVFRMnpe7aXOA1XMj/preview'},
  {title: 'Session 5', link: 'https://drive.google.com/file/d/1zrKrDOUAA9YTCkATrsqVlKkBKZR-4oou/preview'},
  {title: 'Session 6', link: 'https://drive.google.com/file/d/1Vq3XuDSctpGjVm5elpcRzgZJyMdHioiZ/preview'},
  {title: 'Session 7', link: 'https://drive.google.com/file/d/1yaeSJSSoNy6CCBnMNDmRb6y6auCRXPhB/preview'},
];
</script>

<template>
  <div class="page-container">
    <div class="left-sidebar">

    </div>
    <div class="main-container">
      <div class="heading">
        <div class="img-container">
          <img src="/images/MATLAB-poster2.png" alt="matlab-banner">
        </div>
        <h1>
          MATLAB Tutorial Course
        </h1>
      </div>
      <div class="course-description">
        <h4>Course Description</h4>
        <div class="description">
          <p>
            Here you can find MATLAB tutorial classes taught by me at EE Department @ Sharif University of Technology, Summer 2021.
          </p>
          <a href="https://drive.google.com/drive/folders/1Osq7DIzYiuX1PbRdGH1an9r4t_xvNdnO" target="_blank" class="hyper-icon">
            <img src="/images/icons/approve.png" style="height: 25px;" alt="assignments">
            Assignments
          </a>
          <a href="https://drive.google.com/drive/folders/12ibGkdEmoOQGUmEQMJs8k30fNhfFzG13" target="_blank" class="hyper-icon">
            <img src="/images/icons/web-development (1).png" style="height: 25px;" alt="codes">
            Codes
          </a>
          <a href="https://drive.google.com/drive/folders/1xMz2EfkG6ULLJ7uyrMmcQTmamzMr72oV" target="_blank" class="hyper-icon">
            <img src="/images/icons/presentation.png" style="height: 25px;" alt="codes">
            Project
          </a>
          <a href="https://drive.google.com/drive/folders/1X2nzzhs2kzo1L1fpznvXbBvfw0nT-5Vr" target="_blank" class="hyper-icon">
            <svg style="height: 25px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path d="M339 314.9L175.4 32h161.2l163.6 282.9H339zm-137.5 23.6L120.9 480h310.5L512 338.5H201.5zM154.1 67.4L0 338.5 80.6 480 237 208.8 154.1 67.4z"/>
            </svg>
            Google Drive
          </a>
        </div>
      </div>
<!--      <details class="section">-->
<!--        <summary>Syllabus</summary>-->
<!--        <div>-->
<!--          <ul>-->
<!--            <li>Introduction</li>-->
<!--            <ul>-->
<!--              <li>Variables and Data Types</li>-->
<!--              <li>Operations</li>-->
<!--              <li>Loops and Conditional Statements</li>-->
<!--              <li>Functions</li>-->
<!--              <li>Regex</li>-->
<!--            </ul>-->
<!--            <li>Data Containers</li>-->
<!--            <ul>-->
<!--              <li>Lists</li>-->
<!--              <li>Sets</li>-->
<!--              <li>Maps</li>-->
<!--              <li>Stacks</li>-->
<!--            </ul>-->
<!--            <li>Object Oriented Programming</li>-->
<!--            <ul>-->
<!--              <li>Classes and Objects</li>-->
<!--              <li>Access Levels</li>-->
<!--              <li>Constructors</li>-->
<!--              <li>Inheritance</li>-->
<!--              <li>Polymorphism</li>-->
<!--              <li>Abstract classes and Methods</li>-->
<!--              <li>Interface</li>-->
<!--              <li>Static Variables</li>-->
<!--              <li>Enum</li>-->
<!--            </ul>-->
<!--            <li>File Handling</li>-->
<!--            <ul>-->
<!--              <li>IO Interfaces</li>-->
<!--              <li>Exception Handling</li>-->
<!--              <li>Files and Streams</li>-->
<!--            </ul>-->
<!--            <li>Graphics</li>-->
<!--            <ul>-->
<!--              <li>Frame</li>-->
<!--              <li>Panel</li>-->
<!--              <li>Buttons and Keyboard</li>-->
<!--              <li>Dialog</li>-->
<!--              <li>Menu and Toolbars</li>-->
<!--              <li>Other details of Graphics</li>-->
<!--            </ul>-->
<!--          </ul>-->
<!--        </div>-->
<!--      </details>-->
      <div class="section">
        <h4>Recorded Videos</h4>
        <div class="videos">
          <!--          <VideoCard v-for="videoObj in recordedVideos"-->
          <!--              :title="videoObj.title"-->
          <!--              :link="videoObj.link"-->
          <!--          />-->
          <VideoDriveCard v-for="videoObj in recordedVideos"
                          :title="videoObj.title"
                          :link="videoObj.link"
          />
        </div>
      </div>
    </div>
    <div class="right-sidebar">

    </div>
  </div>
</template>

<style scoped>
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