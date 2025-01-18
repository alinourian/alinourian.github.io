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
        <li>Speech and Language Processing</li>
        <li>Optimization</li>
      </ul>
      <ul class="items w-55">
        <li>Computer Vision</li>
        <li>Trustworthy AI</li>
        <li>AI for Healthcare</li>
      </ul>
      </div>
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