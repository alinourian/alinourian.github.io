<script setup>
import VideoCard from "@/components/LLMsLiteratureReview/VideoCard.vue";
import PapersSheet from "@/components/LLMsLiteratureReview/PapersSheet.vue";
</script>

<template>
  <Popup v-if="showPopup" @close="togglePopup()" />
  <div class="page-container">
    <div class="left-sidebar">
<!--      <h4>Contents</h4>-->
<!--      <h6>Description</h6>-->
<!--      <h6>Papers</h6>-->
<!--      <h6>Videos</h6>-->
    </div>
    <div class="main-container">
      <div class="heading">
        <div class="img-container">
          <img src="/images/LLM-overview.png" alt="llm-banner">
        </div>
        <h1>
          Large Language Models: A Comprehensive Literature Review
        </h1>
      </div>
      <div class="course-description">
        <h4>Description</h4>
        <div class="description">
          <p>
            At the Institute for Convergence Science & Technology (ICST) at Sharif University of Technology, under the esteemed supervision of Prof. Khalaj, we conducted a comprehensive literature review on the evolution of Large Language Models (LLMs). This review spans groundbreaking advancements, starting from the seminal work "Attention is All You Need" to the state-of-the-art GPT-4. We reviewed over 70 top papers that shaped modern language models.
<!--            <a class="hyper-icon" @click="togglePopup()">Check the paper's list here.</a>-->
          </p>
          <p>
            This project was enriched by a collaborative and celebratory effort with Negin Mohtaram and Dr. Ahsani, showcasing a collective dedication to understanding the trajectory of LLMs and their transformative impact on artificial intelligence.
          </p>
          <a href="https://www.linkedin.com/posts/activity-7113212067762819074-uDWL?utm_source=share&utm_medium=member_desktop" target="_blank" class="hyper-icon">
            <svg style="height: 25px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
            </svg>
            LinkedIn
          </a>
          <a href="https://www.youtube.com/@vesalahsani1518" target="_blank" class="hyper-icon">
            <svg style="height: 25px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
            </svg>
            YouTube
          </a>
        </div>
      </div>
      <div class="section">
        <h4>Paper's List</h4>
        <PapersSheet />
      </div>
      <div class="section">
        <h4>Recorded Videos</h4>
        <div class="content">
          <div class="video-paper-section">
            <div class="video-paper-grid">
              <VideoCard v-for="(video, videoIndex) in videoPaperMapping" :key="videoIndex"
                  :videoTitle="video.title"
                  :videoUrl="video.youtubeVideo.url"
                  :papers="video.papers"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right-sidebar">

    </div>
  </div>
</template>

<script>
import Popup from "@/components/LLMsLiteratureReview/PapersSheetPopup.vue";

export default {
  components: {
    Popup,
  },
  data() {
    return {
      showPopup: false,
      videoPaperMapping: [
        {
          title: 'Session 1',
          youtubeVideo: { url: "https://www.youtube.com/embed/AjTf9_lK4iE?si=3jLhpsXznbhQPAqj" },
          papers: [
            {
              title: "Transformers: Attention is All You Need",
              year: 2017,
              link: "#",
            },
            {
              title: "GPT 1.0: Improving Language Understanding by Generative Pre-training",
              year: 2018,
              link: "#",
            },
            {
              title: "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
              year: 2018,
              link: "#",
            },
            {
              title: "GPT 2.0: Language Models are Unsupervised Multitask Learners",
              year: 2019,
              link: "#",
            },
          ],
        },
        {
          title: 'Session 2',
          youtubeVideo: { url: "https://www.youtube.com/embed/TqdqVxdNmm4?si=DuMgX7dcrCKiFrBK" },
          papers: [
            {
              title: "UNILM: Unified Language Model Pre-training for Natural Language Understanding and Generation",
              year: 2019,
              link: "#",
            },
            {
              title: "ERNIE: Enhanced Language Representation with Informative Entities",
              year: 2019,
              link: "#"
            },
            {
              title: "ERNIE 2.0: A Continual Pre-training Framework for Language Understanding",
              year: 2019,
              link: "#",
            },
            {
              title: "CTRL: A Conditional Transformer Language Model for Controllable Generation",
              year: 2019,
              link: "#",
            },
            {
              title: "RoBERTa: A Robustly Optimized BERT Pre-training Approach",
              year: 2019,
              link: "#",
            },
            {
              title: "ALBERT: A Lite BERT for Self-supervised Learning of Language Representations",
              year: 2019,
              link: "#",
            },
            {
              title: "Megatron-LM: Training Multi-Billion Parameter Language Models Using Model Parallelism.",
              year: 2019,
              link: "#"
            }
          ],
        },
        {
          title: 'Session 3',
          youtubeVideo: { url: "https://www.youtube.com/embed/PMVfnNFe044?si=3-wcfCKP2bbVYKtg" },
          papers: [
            {
              title: "GPT 3.0: Language Models are Few-Shot Learners",
              year: 2020,
              link: "#",
            },
            {
              title: "Prompt Programming for Large Language Models: Beyond the Few-Shot Paradigm",
              year: 2020,
              link: "#",
            },
            {
              title: "COT: Chain-of-Thought Prompting Elicits Reasoning in Large Language Models",
              year: 2022,
              link: "#",
            },
            {
              title: "AlphaCode: Competition-Level Code Generation with AlphaCode",
              year: 2022,
              link: "#",
            },
            {
              title: "InstructGPT: Training Language Models to Follow Instructions with Human Feedback",
              year: 2022,
              link: "#"
            }
          ],
        },
        {
          title: "Session 4",
          youtubeVideo: {url: "https://www.youtube.com/embed/vI5WlPQsJQ4?si=H6If8SnaAonzyi7M"},
          papers: [
            {
              title: "PaLM: Scaling Language Modeling with Pathways",
              year: 2022,
              link: "#",
            },
            {
              title: "LLaMA: Open and Eﬀicient Foundation Language Models",
              year: 2023,
              link: "#"
            },
            {
              title: "Large Language Models Encode Clinical Knowledge",
              year: 2022,
              link: "#",
            }
          ],
        },
        {
          title: "Session 5",
          youtubeVideo: {url: "https://www.youtube.com/embed/h2jWpVzq4uU?si=oZOz6a4rSUazqECS"},
          papers: [
            {
              title: "A Survey of Large Language Models",
              year: 2023,
              link: "#",
            }
          ]
        },
        {
          title: "Session 6",
          youtubeVideo: {url: "https://www.youtube.com/embed/h2jWpVzq4uU?si=oZOz6a4rSUazqECS"},
          papers: [
            {
              title: "RWKV: Reinventing RNNs for the Transformer Era",
              year: 2023,
              link: "#",
            },
            {
              title: "Direct Preference Optimization: Your Language Model is Secretly a Reward Model",
              year: 2023,
              link: "#"
            }
          ]
        }
        // Add more video and paper mappings here
      ],
    };
  },
  methods: {
    togglePopup() {
      this.showPopup = !this.showPopup;
    },
  }
};
</script>

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
  cursor: pointer;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.video-paper-section {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.video-paper-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
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

@media screen and (max-width: 1000px) {
  .video-paper-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media screen and (max-width: 768px) {
  .heading {
    flex-direction: column;
  }

  .img-container {

  }
}
</style>