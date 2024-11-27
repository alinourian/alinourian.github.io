<script setup>

import Profile from "@/components/CV/Profile.vue";
import Educations from "@/components/CV/Educations.vue";
import Interests from "@/components/CV/Interests.vue";
import ResearchExperiences from "@/components/CV/ResearchExperiences.vue";
import Publications from "@/components/CV/Publications.vue";
import TeachingExperiences from "@/components/CV/TeachingExperiences.vue";
import WorkExperiences from "@/components/CV/WorkExperiences.vue";
import Achievements from "@/components/CV/Achievements.vue";
import Skills from "@/components/CV/Skills.vue";
import Courses from "@/components/CV/Courses.vue";
</script>

<template>
  <div class="page-container" id="CV">
    <div class="left-sidebar">

    </div>
    <div class="main-container">
      <Profile/>
      <Educations/>
      <Interests/>
      <Publications/>
      <ResearchExperiences/>
      <TeachingExperiences/>
      <WorkExperiences/>
      <Achievements/>
      <Skills/>
<!--      <Courses/>-->
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
}

.right-sidebar {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 15%;
}

.main-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 2% 2%;
}

.left-sidebar {
  display: flex;
  flex-direction: column;
  width: 15%;
  padding: 2% 4%;
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

</style>