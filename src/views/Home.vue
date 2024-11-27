<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faBuildingColumns} from "@fortawesome/free-solid-svg-icons/faBuildingColumns";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import AboutMe from "@/components/AboutMe.vue";
import Interests from "@/components/Interests.vue";
import ResearchExperiences from "@/components/CV/ResearchExperiences.vue";
import Publications from "@/components/CV/Publications.vue";
import WorkExperiences from "@/components/WorkExperiences.vue";
import Lectures from "@/components/Lectures.vue";
import Projects from "@/components/Projects.vue";
import Educations from "@/components/Educations.vue";

export default {
  name: "Home",
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
  components: {
    Educations,
    Projects,
    Lectures, WorkExperiences, Publications, ResearchExperiences, Interests, AboutMe, FontAwesomeIcon },
};

</script>

<template>
  <div class="page-container">
    <div class="left-sidebar">
      <div class="profile">
        <img class="my-photo" src="/images/me.jpg" alt="me">
        <h3>Ali Nourian</h3>
      </div>
      <div class="items">
        <div class="item">
          <p><font-awesome-icon :icon="faBuildingColumns()" /> Electrical Engineering @ Sharif University of Technology</p>
        </div>
        <div class="contact-items">
          <div class="item pointer">
            <a href="mailto:alinourian10@gmail.com"><font-awesome-icon :icon="faEnvelope()" /> Gmail</a>
          </div>
          <div class="item pointer">
            <a href="https://github.com/alinourian" target="_blank"><font-awesome-icon :icon="faGithub()" /> GitHub</a>
          </div>
          <div class="item pointer">
            <a href="https://www.linkedin.com/in/ali-nourian-559078227" target="_blank"><font-awesome-icon :icon="faLinkedin()" /> LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
    <div class="main-container">
      <!-- src/views/Home.vue -->
      <AboutMe id="home"/>
      <Interests/>
      <Educations/>
      <Publications/>
      <Lectures id="lectures"/>
<!--      <Projects id="projects"/>-->
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
  width: 65%;
  height: 100%;
  padding: 2% 2%;
}

.left-sidebar {
  display: flex;
  flex-direction: column;
  width: 20%;
  padding: 3% 4%;
  position: sticky;
  float: left;
  top: 3.5rem;
  clear: both;
  height: 500px;
}

.left-sidebar .profile {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.left-sidebar .profile .my-photo {
  border-radius: 50%;
  max-width: 170px;
}

.left-sidebar .items {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
}

.item {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.left-sidebar .items .item a {
  width: 100%;
  color: var(--color-text);
  font-size: 1.1rem;
}

.left-sidebar .items .item a:hover {
  color: var(--color-accent);
}

.pointer {
  cursor: pointer;
}

.pointer:hover {
  text-decoration: underline;
  color: var(--color-accent);
}

@media screen and (max-width: 768px) {
  .page-container {
    flex-direction: column;
  }

  .main-container {
    padding: 2% 5%;
  }

  .left-sidebar {
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    float: none;
    top: auto;
    clear: none;
    height: auto;
    padding: 2% 5%;
    margin-top: 70px;
  }

  .contact-items {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
  }

  .left-sidebar .profile {
    justify-content: center;
    align-items: center;
  }

  .left-sidebar .profile .my-photo {
    max-width: 120px;
  }

  .left-sidebar .items {
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 0 4%;
  }

  .right-sidebar {
    display: none;
  }

  .main-container {
    width: 100%;
  }
}
</style>