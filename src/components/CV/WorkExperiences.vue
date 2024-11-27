<script setup>

</script>

<template>
  <div class="section">
    <div class="section-heading">
      <h3>OTHER EXPERIENCES</h3>
    </div>
    <div class="section-body">
      <div class="experience">
        <div class="name-date">
          <div class="name">
            <h4>Data Analyst & Software Developer</h4>
            <em>PropertyGPT, Dubai</em>
          </div>
          <div class="date">
            May. 2023 - July 2024
          </div>
        </div>
        <p class="description">
          Developing a real-state chatbot as an assistant or consultant for customers.
        </p>
      </div>
      <div class="experience">
        <div class="name-date">
          <div class="name">
            <h4>Co-Founder of Gym-Time</h4>
            <em>Sharif Science & Technology Park</em>
          </div>
          <div class="date">
            Mar. 2022 - Aug. 2023
          </div>
        </div>
        <p class="description">
          Development an online software for analyzing and monitoring the exercise of the students to improve the health of the young generation.
        </p>
      </div>
      <div class="experience">
        <div class="name-date">
          <div class="name">
            <h4>Head of Scientific Association of Resana</h4>
            <em>Scientific Association of EE Department at Sharif University of Technology</em>
          </div>
          <div class="date">
            June 2021 - June 2022
          </div>
        </div>
        <p class="description">
          Organizing Scientific Events, Competitions, Conferences, Workshops, etc.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.experience {
  display: flex;
  flex-direction: column;
  width: 100%;
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

.name-date .name h4, p, em {
  width: 100%;
}

.name-date .date {
  height: 100%;
}
</style>