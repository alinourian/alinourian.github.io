<script setup>

import Card from "@/components/ProjectCard.vue";
</script>

<template>
  <div class="section">
    <div class="section-heading">
      <h2>PROJECTS</h2>
    </div>
    <div class="section-body">
      <div class="projects">
        <Card
            title="Sample Project"
            affiliation="Deep Learning"
            :dates="['Spring 2021']"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 10px 0;
}


@media screen and (max-width: 900px) {
  .projects {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>