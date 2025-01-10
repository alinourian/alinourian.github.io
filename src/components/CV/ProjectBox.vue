<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  projectDate: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  githubLink: {
    type: String,
    required: false,
  },
  images: {
    type: Array,
    required: false,
  }
});
</script>

<template>
  <div class="project">
    <div class="name-date">
      <div class="name">
        <h4>{{ name }}, <a class="hyper-link" v-if="githubLink" :href="githubLink" target="_blank">GitHub</a></h4>
      </div>
      <div class="date">
        {{ projectDate }}
      </div>
    </div>
    <p class="description">

    </p>
  </div>
</template>

<style scoped>
.project {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #ffffff;
  border-radius: 8px;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
  overflow: hidden;
  /* padding: 10px; */
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
  flex-direction: row;
  align-items: center;
}

.name-date .name h4, p, em {
  width: 100%;
}

.name-date .date {
  height: 100%;
}

.hyper-link {
  color: rgb(21, 96, 189);
}
</style>