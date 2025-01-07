<script setup>

import Card from "@/components/Card.vue";
</script>

<template>
  <div class="section">
    <div class="section-heading">
      <h3>TEACHING & LECTURES</h3>
    </div>
    <div class="section-body">
      <div class="lectures">
        <Card
            poster="/images/Mistral-poster.png"
            title="Mistral-7B: Fine-tuning"
            affiliation="ICST @ Sharif University of Technology"
            :dates="['Fall 2023']"
            description="Fine tuning Mistral-7b with PEFT and LoRAon Puffin Dataset (multi-turn conversations between GPT-4 and real humans)."
            page="Mistral7B"
        />
        <Card
            poster="/images/LLMs-poster.png"
            title="Large Language Models: A Comprehensive Literature Review"
            affiliation="ICST @ Sharif University of Technology"
            :dates="['Summer 2023']"
            description="A Comprehensive Overview on the emergence of large language models - from 'Attention is All You Need' to GPT-4."
            page="LLMsLiteratureReview"
        />
        <Card
            poster="/images/ML-poster.png"
            title="Machine Learning Course"
            affiliation="Sharif University of Technology"
            :dates="['Summer 2022', 'Summer 2023']"
            description="Eight-session course in both theoretical and practical Machine Learning."
        />
        <Card
            poster="/images/MATLAB-poster.png"
            title="MATLAB Course"
            affiliation="Sharif University of Technology"
            :dates="['Summer 2021']"
            description="Twelve-session course in MATLAB and its usage in Electrical Engineering and AI."
        />
        <Card
            poster="/images/Java-poster2.png"
            title="Java Course"
            affiliation="Sharif University of Technology"
            :dates="['Spring 2021', 'Spring 2022']"
            description="Java Tutorial Classes of Advanced Programming Course for Object Oriented Programming."
            page="Java"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.lectures {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 15px 0;
}

@media screen and (max-width: 900px) {
  .lectures {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 1200px) {
  .lectures {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 500px) {
  .lectures {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>