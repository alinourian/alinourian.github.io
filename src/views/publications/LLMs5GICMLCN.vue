<script setup>

import SlideShow from "@/components/SlideShow.vue";
import Videos from "@/views/publications/ICMLCNVideos.vue"

const recordedVideos = [
  {title: 'Session 1', link: 'https://drive.google.com/file/d/10H76PfvaIOUXzQcQSflgDLksshwDqkPc/view?usp=drive_link'},
  {title: 'Session 2', link: 'https://drive.google.com/file/d/1l_dEqYRFNOLFoCvIbKWIX76tXBFLW3Ky/view?usp=drive_link'},
  {title: 'Session 3', link: 'https://drive.google.com/file/d/1AmGh-72IDSsBvkKYSOHnaoMkQVilkqia/view?usp=drive_link'},
];
</script>

<script>
import IEEEPoster from "@/components/CV/IEEEPoster.vue";

export default {
  components: {
    IEEEPoster,
  },
  data() {
    return {
      showPopup: false,
      imagePaths: [
        '/images/icmlcn/LLMRAG.png',
        '/images/icmlcn/icmlcn1.jpg',
        '/images/icmlcn/icmlcn2.jpg',
        '/images/icmlcn/icmlcn3.jpg',
        '/images/icmlcn/icmlcn4.jpg',
        '/images/icmlcn/icmlcn5.jpg',
        '/images/icmlcn/icmlcn6.jpg',
        '/images/icmlcn/icmlcn7.jpg',
      ]
    };
  },
  methods: {
    togglePopup() {
      this.showPopup = !this.showPopup;
    },
  },
};
</script>

<template>
  <IEEEPoster v-if="showPopup" @close="togglePopup()" />
  <div class="page-container">
    <div class="left-sidebar">

    </div>
    <div class="main-container">
      <div class="heading">
        <div class="img-container">
          <img src="/images/icmlcn/ICMLCN.png" alt="java-banner">
        </div>
        <h1>
          Large Language Models for 5G Network Management
        </h1>
      </div>
      <div class="section">
        <p class="authors">
          Ali Mamaghani∗, Ali Nourian∗, Negin Mohtaram∗, Alireza Shokrani∗, Mohsen Nasiri∗,
          Sepehr kazemi∗,
        </p>
        <p class="authors">Alireza Mohammadi†, Navid Nikaein† and Babak Hossein Khalaj∗</p>
        <p class="authors">∗Department of Electrical Engineering, Sharif University of Technology, Tehran, Iran
        </p>
        <p class="authors">†EURECOM, Sophia-Antipolis, France</p>
      </div>
      <div class="section" style="margin-bottom: 50px;">
        <h4 class="section-heading">Abstract</h4>
        <p class="abstract">
          This demonstration explores the effective incorporation
          of Large Language Models (LLMs) in 5G network automation,
          significantly enhancing the process of private network creation
          without the need for extensive networking or programming
          knowledge. The demonstration comprises a user-friendly chatbot,
          adept at translating everyday English queries into actionable 5G
          commands, and LLMs serving as generative AIs to dynamically
          generate configurations tailored to the 5G network environment.
          Our approach relies on the practical application of text classification
          models and an adaptive feedback loop mechanism, allowing
          the system to recognize patterns, refine commands iteratively
          based on real-world execution errors, and strengthen overall
          resilience. The demonstration comprises two interlinked parts:
          the development of a chatbot accessible to a wide audience and
          the utilization of LLMs for dynamic configuration generation.
          The goal is to exemplify the accessibility of 5G network creation
          to a broader user base, eliminating barriers for those without
          extensive technical backgrounds. This comprehensive approach
          not only simplifies the process but also enhances the system’s
          responsiveness to the varied challenges presented by real-world
          5G network scenarios, laying the groundwork for a future where
          5G networks are both accessible and adaptable across diverse
          user profiles.
        </p>
      </div>
      <div class="section" style="margin-bottom: 100px;">
        <h4 class="section-heading">Project Info</h4>
        <div class="file-cards">
        <div class="file-card" @click="togglePopup">
          <img src="/images/icmlcn/IEEE-Poster.png" alt="IEEE Poster" />
          <div class="file-card-content">
            <h4>ICMLCN Poster</h4>
          </div>
        </div>
        <div class="file-card" @click="togglePopup">
          <img src="/images/icmlcn/pdf-download-img.png" alt="Proposal" />
          <div class="file-card-content">
            <h4>Project Proposal</h4>
          </div>
        </div>
        </div>
        <SlideShow :images="imagePaths" />
      </div>
      <div class="section">
        <h4>Recorded Videos and Presentations</h4>
        <Videos />
      </div>
    </div>
    <div class="right-sidebar">

    </div>
  </div>
</template>

<style scoped>
.file-cards {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  gap: 5%;
  margin-bottom: 50px;
  margin-top: 15px;
}

.file-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  width: 35%;
}

.file-card:hover {
  transform: translateY(-5px);
  cursor: pointer;
}

.file-card img {
  width: 100%;
  border-radius: 8px 8px 0 0;
}

.file-card-content {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.file-card-content h4 {
  text-align: center;
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

.img-container img {
  height: 100%;
}

.heading {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
}

.authors {
  display: flex;
  justify-content: center;
  text-align: center;
}

.abstract {
  display: flex;
  text-align: justify;
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

  .heading {
    flex-direction: column;
  }

  .file-card {
    width: 45%;
  }

  .file-card h4 {
    font-size: 1.1rem;
  }
}

@media screen and (max-width: 500px) {
  .videos {
    grid-template-columns: repeat(1, 1fr);
  }

  .file-cards {
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }

  .file-card {
    width: 85%;
  }
}
</style>