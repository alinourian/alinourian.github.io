<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faBuildingColumns} from "@fortawesome/free-solid-svg-icons/faBuildingColumns";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";


export default {
  name: "Profile",
  methods: {
    faLinkedin() {
      return faLinkedin
    },
    faGithub() {
      return faGithub
    },
    faBuildingColumns() {
      return faBuildingColumns
    },
    faEnvelope() {
      return faEnvelope
    }
  },
};
</script>

<template>
  <div class="section">
    <h1 class="header">
      ALI NOURIAN
    </h1>
    <div class="section-body">
      <div class="item">
        <p><font-awesome-icon :icon="faBuildingColumns()" /> Electrical Engineering @ Sharif University of Technology</p>
      </div>
      <div class="contact">
        <div class="item pointer">
          <a href="mailto:alinourian10@gmail.com" class="hyperlink" target="_blank"><font-awesome-icon :icon="faEnvelope()" /> Gmail</a>
        </div>
        <div class="item pointer">
          <a href="https://github.com/alinourian" class="hyperlink" target="_blank"><font-awesome-icon :icon="faGithub()" /> GitHub</a>
        </div>
        <div class="item pointer">
          <a href="https://www.linkedin.com/in/ali-nourian-559078227" class="hyperlink" target="_blank"><font-awesome-icon :icon="faLinkedin()" /> LinkedIn</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section {
  margin-top: 70px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
}

.contact {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
}

.section-body .item p {
  width: 100%;
  text-align: center;
}

.hyperlink {
  cursor: pointer;
}

@media screen and (max-width: 500px) {
  .header {
    font-size: 40px;
  }
}
</style>