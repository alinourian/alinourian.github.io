<script setup>

</script>

<template>
  <div class="section">
    <div class="section-heading">
      <h3>RESEARCH EXPERIENCE</h3>
    </div>
    <div class="section-body">
      <div class="experience">
        <div class="name-date">
          <div class="name">
            <h4>Research Intern at <a class="institute-hyperlink" href="https://www.eurecom.fr/en">Eurecom</a></h4>
            <em>Research institution in Biot, France</em>
          </div>
          <div class="date">
            Mar. 2023 - May 2024
          </div>
        </div>
        <ul class="descriptions">
          <li class="description">
            Implemented an adaptive, LLM-powered system for 5G network automation, utilizing text classification,
            generation, retrieval systems and feedback loops to dynamically refine network commands, enhancing accessibility
            and resilience in 5G configuration.
          </li>
        </ul>
      </div>
      <div class="experience">
        <div class="name-date">
          <div class="name">
            <h4>Research Intern at Institute for Convergence Science & Technology <a class="institute-hyperlink" href="https://icst.sharif.edu/en/">(ICST)</a></h4>
            <em>Sharif University of Technology</em>
          </div>
          <div class="date">
            May 2023 - present
          </div>
        </div>
        <ul class="descriptions">
          <li class="description">
            Developed a voice assistant using ASR and TTS models, with semantic and emotion recognition capabilities
            tailored for elderly medical support.
          </li>
          <li class="description">
            Conducted analysis of social media and news data using Large Language Models (LLMs) to investigate
            their impact on stock market trends.
          </li>
          <li class="description">
            Explored edge computing and 3D vision to enhance real-time data processing and visualization, optimizing
            latency and efficiency for 3D rendering and virtual interactions in the metaverse.
          </li>
        </ul>
      </div>
      <div class="experience">
        <div class="name-date">
          <div class="name">
            <h4>Research Intern at Machine Learning Lab</h4>
            <em>Research institution in Biot, France</em>
          </div>
          <div class="date">
            Nov. 2022 - present
          </div>
        </div>
        <ul class="descriptions">
          <li class="description">
            Developed adaptive filters and a noise-robust feature extraction framework to enhance the resilience of
            audio and image classification models.
          </li>
        </ul>
      </div>
      <div class="experience">
        <div class="name-date">
          <div class="name">
            <h4>Research Intern at Augmented Intelligence Research Laboratory (AIRLab)</h4>
            <em>Sharif University of Technology</em>
          </div>
          <div class="date">
            June 2021 - Aug. 2022
          </div>
        </div>
        <ul class="descriptions">
          <li class="description">
            Applied AI techniques to healthcare, specializing in medical signal and image processing of fMRI and CT
            data.
          </li>
          <li class="description">
            Extracted EEG biomarkers for classifying patients with Alzheimer’s Disease (AD), Mild Cognitive Impairment
            (MCI), and normal cognitive function.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.experience {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;
}

.name-date {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.name-date .name {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.name-date .name h3, p, em {
  width: 100%;
}

.name-date .name h3 {
  font-weight: 600;
}

.name-date .date {
  height: 100%;
}

.institute-hyperlink {
  text-decoration: none;
  color: rgb(21, 96, 189);
}

li {
  margin-bottom: 5px;
}
</style>