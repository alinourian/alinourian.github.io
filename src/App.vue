<script>
export default {
  name: 'App',
};
</script>

<template>
  <router-view />
</template>

<style>
/* Global styles */
.section {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;
}

.section-heading {
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid black;
}

.section-body {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
}
</style>
