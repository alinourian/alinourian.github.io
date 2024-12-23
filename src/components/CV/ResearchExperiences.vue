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
            <h4>Research Intern at <a class="institute-hyperlink" href="https://www.eurecom.fr/en" target="_blank">Eurecom</a></h4>
            <em>Research institution in Biot, France</em>
          </div>
          <div class="date">
            Mar. 2023 - May 2024
          </div>
        </div>
        <ul class="descriptions">
          <li class="description">
            Developed an LLM-powered system for network automation, integrating Retrieval Systems,
            and self-refining feedback loops. The system emphasizes Privacy and Reliability,
            enhancing accessibility while ensuring secure and resilient network configuration.
          </li>
        </ul>
      </div>
      <div class="experience">
        <div class="name-date">
          <div class="name">
            <h4>Research Intern at Institute for Convergence Science & Technology <a class="institute-hyperlink" href="https://icst.sharif.edu/en/" target="_blank">(ICST)</a></h4>
            <em>Sharif University of Technology</em>
          </div>
          <div class="date">
            May 2023 - present
          </div>
        </div>
        <ul class="descriptions">
          <li class="description">
            Developed a voice assistant robot using ASR and TTS models combined with Contrastive Learning, with semantic and emotion recognition capabilities tailored for elderly medical support.
          </li>
          <li class="description">
            Developed an AI framework for trustworthy social media analysis, leveraging Causal Inference and Bias Mitigation techniques to ensure accurate, fair, and reliable insights.
            The system integrates LLMs for semantic understanding, enhancing the detection of misinformation, Sentiment Analysis, and Trend Forecasting.
          </li>
          <li class="description">
            Explored edge computing and 3D vision to enhance real-time data processing and visualization, optimizing latency and efficiency for 3D rendering and virtual interactions in the metaverse.
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
            Developed an Attention-based pipeline for generating adaptive filters and a Noise-Robust Feature Extraction framework,
            prioritizing Robustness to enhance the accuracy of Audio and Image Classification models.
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
            Applied AI techniques to healthcare, specializing in Medical Image Processing of fMRI and CT data.
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

.institute-hyperlink:hover {
  color: #0271E8;
}

li {
  margin-bottom: 5px;
}
</style>