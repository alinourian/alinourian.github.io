<script setup>

</script>

<template>
  <div class="section">
    <h3 class="section-heading">
      SELECTED COURSES
    </h3>
    <div class="section-body">
      <div class="uni-courses">
        <h4>Sharif University of Technology, Selected, <em>* Graduate Course</em></h4>
        <div class="courses">
          <ul class="courses-list">
            <li class="course-item">
              Basic Programming (20.0/20.0)
            </li>
            <li class="course-item">
              Basic Programming (20.0/20.0)
            </li>
            <li class="course-item">
              Basic Programming (20.0/20.0)
            </li>
            <li class="course-item">
              Basic Programming (20.0/20.0)
            </li>
            <li class="course-item">
              Basic Programming (20.0/20.0)
            </li>
            <li class="course-item">
              Basic Programming (20.0/20.0)
            </li>
            <li class="course-item">
              Basic Programming (20.0/20.0)
            </li>
            <li class="course-item">
              Basic Programming (20.0/20.0)
            </li>
            <li class="course-item">
              Basic Programming (20.0/20.0)
            </li>
          </ul>
          <ul class="courses-list">
            <li class="course-item">
              Basic Programming (20.0/20.0)
            </li>
            <li class="course-item">
              Basic Programming (20.0/20.0)
            </li>
            <li class="course-item">
              Basic Programming (20.0/20.0)
            </li>
            <li class="course-item">
              Basic Programming (20.0/20.0)
            </li>
            <li class="course-item">
              Basic Programming (20.0/20.0)
            </li>
            <li class="course-item">
              Basic Programming (20.0/20.0)
            </li>
            <li class="course-item">
              Basic Programming (20.0/20.0)
            </li>
            <li class="course-item">
              Basic Programming (20.0/20.0)
            </li>
            <li class="course-item">
              Basic Programming (20.0/20.0)
            </li>
          </ul>
        </div>
      </div>
      <div class="audited-courses">
        <h4>Online Courses, Audited</h4>
        <div class="courses">
          <ul class="courses-list">
            <li class="course-item">
              <a class="title">Stanford CS234</a>
              <p>: Reinforcement Learning (Emma Brunskill)</p>
            </li>
            <li class="course-item">
              <a class="title">Stanford CS234</a>
              <p>: Reinforcement Learning (Emma Brunskill)</p>
            </li>
            <li class="course-item">
              <a class="title">Stanford CS234</a>
              <p>: Reinforcement Learning (Emma Brunskill)</p>
            </li>
            <li class="course-item">
              <a class="title">Stanford CS234</a>
              <p>: Reinforcement Learning (Emma Brunskill)</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.uni-courses, .audited-courses {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
}

.courses {
  display: flex;
  width: 100%;
}

.courses-list {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.course-item {
  display: flex;
  width: 100%;
}

.title {
  color: rgb(21, 96, 189);
  font-weight: 600;
}

@media screen and (max-width: 500px) {
  .courses {
    flex-direction: column;
  }
}
</style>