<script setup>

</script>

<template>
  <div class="section">
    <h3 class="section-heading">
      RESEARCH INTERESTS
    </h3>
    <div class="section-body">
      <div class="interest">
        <ul class="items w-45">
          <li>Machine Learning</li>
          <li>Image Processing & Computer Vision</li>
          <li>Large Language Models</li>
        </ul>
        <ul class="items w-55">
          <li>Signal Processing</li>
          <li>Robustness & AI Fairness and Interpretability</li>
          <li>Biomedical Signal Processing & AI for Healthcare</li>
        </ul>
      </div>
<!--      <p>Also interested in Reinforcement Learning & Robotics, Statistical Data Analysis and Optimization</p>-->
    </div>
  </div>
</template>

<style scoped>
.interest {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.items {
  display: flex;
  flex-direction: column;
}

.w-45 {
  width: 45%;
}

.w-55 {
  width: 55%;
}

@media screen and (max-width: 600px) {
  .interest {
    flex-direction: column;
  }

  .items {
    width: 100%;
  }
}
</style>