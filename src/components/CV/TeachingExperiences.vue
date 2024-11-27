<script setup>

</script>

<template>
  <div class="section">
    <h3 class="section-heading">
      TEACHING EXPERIENCE
    </h3>
    <div class="section-body">
      <div class="sub-section">
        <h4>Teaching</h4>
        <ul class="t-ex">
          <li class="t-ex-item">
            <h5>Machine Learning, <em style="font-size: 1rem;">Sharif University of Technology</em></h5>
            <p>Summer 2022 & Summer 2023</p>
          </li>
          <li class="t-ex-item">
            <h5>MATLAB, <em style="font-size: 1rem;">Sharif University of Technology</em></h5>
            <p>Summer 2021</p>
          </li>
        </ul>
      </div>
      <div class="sub-section">
        <h4>Teaching Assistant, <span style="font-size: 1rem;">*Graduate Course</span></h4>
        <em>Sharif University of Technology</em>
        <div class="courses">
          <ul class="t-ex w-45">
            <li>
              <h5>*Deep Generative Models, <span><a class="hyperlink">Prof. Amini</a></span></h5>
              <p>Coordinating the Course and Designing the Final Project (Fall 2024)</p>
            </li>
            <li>
              <h5>*Medical Image Analysis and Processing, <span><a class="hyperlink">Prof. Fatemizadeh</a></span></h5>
              <p>Designing & Grading Assignments (Spring 2024)</p>
            </li>
            <li>
              <h5>*Deep Learning, <span><a class="hyperlink">Prof. Fatemizadeh</a></span></h5>
              <p>Designing the Final Project & Holding Tutorial
                Classes (Fall 2023)</p>
            </li>
            <li>
              <h5>Machine Learning, <span><a class="hyperlink">Prof. Amini</a></span></h5>
              <p>Designing & Grading Assignments (Spring 2023)</p>
            </li>
            <li>
              <h5>Engineering Mathematics, <span><a class="hyperlink">Prof. Aghajan</a></span></h5>
              <p>Holding Tutorial Classes, Designing & Grading
                MATLAB Assignments (Fall 2021, 2022)</p>
            </li>
          </ul>
          <ul class="t-ex w-45">
            <li>
              <h5>Fundamentals of Data Science, <span><a class="hyperlink">Prof. Khalaj</a></span></h5>
              <p>Preparing Syllabus and Course Slides and Holding
                Tutorial Classes (Fall 2023)</p>
            </li>
            <li>
              <h5>*Computational Neuroscience, <span><a class="hyperlink">Prof. Aghajan</a></span></h5>
              <p>Designing & Grading Assignments and Exams
                (Fall 2021, Spring 2022)</p>
            </li>
            <li>
              <h5>Signals & Systems, <span><a class="hyperlink">Prof. Aghajan</a></span></h5>
              <p>Designing & Grading MATLAB Assignments and
                Exams (Spring 2022)</p>
            </li>
            <li>
              <h5>Advanced Programming, <span><a class="hyperlink">Prof. Vahdat</a></span></h5>
              <p>Holding Tutorial Classes, Designing & Grading
                Projects and Exams (Spring 2021, 2022)</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sub-section {
  margin-bottom: 10px;
}

.w-45 {
  width: 45%;
}

.t-ex-item {
  display: flex;
  justify-content: space-between;
}

.flex-column {
  flex-direction: column;
}

.courses {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.hyperlink {
  color: rgb(21, 96, 189);
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .courses {
    flex-direction: column;
  }

  .t-ex {
    width: 100%;
  }
}

</style>