<script setup>
import ALogo from "../assets/ALogo.svg";

const scrollToSection = (sectionId, offset = 75) => {
  const section = document.getElementById(sectionId);

  if (section) {
    console.log("if section");
    const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = sectionPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  } else {
    // If the section doesn't exist, redirect to the main page
    const currentPath = window.location.pathname;

    if (currentPath !== "/") {
      // Navigate to the main page and search for the section after loading
      window.location.href = `/#${sectionId}`;

      // // Ensure scrolling works on page load
      // window.onload = () => {
      //   sectionId = window.location.hash.substring(1);
      //   const section = document.getElementById(sectionId);
      //   const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
      //   const offsetPosition = sectionPosition - offset;
      //   console.log(offsetPosition)
      //   window.scrollTo({
      //     top: offsetPosition,
      //     behavior: "smooth",
      //   });
      // }
    } else {
      // If already on the main page, ensure the section is searched after hash update
      setTimeout(() => {
        const sectionAfterRedirect = document.getElementById(sectionId);
        if (sectionAfterRedirect) {
          const sectionPosition =
              sectionAfterRedirect.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = sectionPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 300); // Wait for the page to load or DOM to render
    }
  }
};
</script>

<script>
export default {
  data() {
    return {
      isMenuOpen: false, // State for menu visibility
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Toggle the menu state
    },
  },
};
</script>


<template>
  <div class="header-navbar">
    <div class="right-side">
      <a href="/" class="name-logo">
<!--        <img :src="ALogo" alt="logo" style="height: 36px; align-self: center;">-->
        <h1 class="name">Ali Nourian</h1>
      </a>
    </div>
    <div class="main-side">
      <a class="navbar-item" @click="scrollToSection('home')" style="cursor: pointer;">
        <h6>Home</h6>
      </a>
      <a class="navbar-item" @click="scrollToSection('lectures')" style="cursor: pointer;">
        <h6>Lectures</h6>
      </a>
<!--      <a class="navbar-item" @click="scrollToSection('projects')">-->
<!--        <h6>Projects</h6>-->
<!--      </a>-->
      <router-link to="/CV" class="navbar-item">
        <h6>CV</h6>
      </router-link>
    </div>
    <div class="left-side">
      <a href="mailto:alinourian10@gmail.com">
        <h6 class="contact-me">Email Me!</h6>
      </a>
    </div>
    <div class="menu-button" @click="toggleMenu">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
    </div>
    <div class="menu" :class="{ 'menu-open': isMenuOpen }">
      <div class="menu-button" @click="toggleMenu">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
      </div>
      <ul>
        <li><a @click="scrollToSection('home', 300); toggleMenu();"><h6>Home</h6></a></li>
        <li><a @click="scrollToSection('lectures'); toggleMenu();"><h6>Lectures</h6></a></li>
<!--        <li><a @click="scrollToSection('projects'); toggleMenu();"><h6>Projects</h6></a></li>-->
        <li><router-link to="/CV" @click="toggleMenu"><h6>CV</h6></router-link></li>
        <li><a href="mailto:alinourian10@gmail.com"><h6 class="contact-me">Email Me!</h6></a></li>
      </ul>
    </div>
  </div>

</template>

<style scoped>
.header-navbar {
  display: flex;
  flex-direction: row;
  padding: 20px 0;
  width: 100%;
  height: 100%;
}

.right-side {
  display: flex;
  flex-direction: column;
  min-width: fit-content;
  width: 20%;
  padding: 0 4%;
  justify-content: center;
  align-items: center;
}

.name-logo {
  display: flex;
  align-self: center;
  justify-self: self-end;
}

.right-side .name-logo .name {
  font-size: 22px;
  min-width: fit-content;
  font-weight: 600;
  cursor: pointer;
  display: inline-block;
  position: relative;
  align-self: center;
}

.right-side .name-logo .name::after {
  content: ''; /* Creates a pseudo-element */
  position: absolute;
  left: 50%; /* Start at the center */
  bottom: -5px; /* Adjust distance below text */
  width: 0;
  height: 3px; /* Thickness of the underline */
  background-color: var(--color-accent); /* Accent color for the underline */
  transform: translateX(-50%); /* Center-align the starting point */
  transition: width 0.3s ease-in-out; /* Smooth animation */
}

.right-side .name-logo .name:hover::after {
  width: 100%; /* Expand the underline fully on hover */
}

.main-side {
  display: flex;
  flex-direction: row;
  width: 65%;
  max-width: 700px;
  align-items: center;
  overflow: hidden;
  padding: 10px 2%;
}

.main-side .navbar-item {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15%;
}

.navbar-item h6 {
  text-decoration: none;
  font-weight: 600;
}

:target h6 {
  color: var(--color-accent); /* Highlight color */
}

/* Change the color of links on hover */
.main-side .navbar-item h6:hover {
  color: var(--color-accent);
}

.left-side {
  display: flex;
  padding: 0 4%;
}

.left-side .contact-me {
  display: flex;
  min-width: fit-content;
  cursor: pointer;
  position: relative;
  width: fit-content;
  white-space: nowrap;
}

.contact-me:hover {
  color: var(--color-accent);
}

.left-side .contact-me::after {
  content: ''; /* Creates a pseudo-element */
  position: absolute;
  left: 50%; /* Start at the center */
  bottom: -5px; /* Adjust distance below text */
  width: 0;
  height: 3px; /* Thickness of the underline */
  background-color: var(--color-accent); /* Accent color for the underline */
  transform: translateX(-50%); /* Center-align the starting point */
  transition: width 0.3s ease-in-out; /* Smooth animation */
}

.left-side .contact-me:hover::after {
  width: 100%; /* Expand the underline fully on hover */
}

.menu-button {
  display: none;
}


.menu {
  display: none;
  position: absolute;
  top: 0;
  right: -100vw; /* Hidden by default */
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  transition: all 0.3s ease; /* Smooth transition */
  background-color: white;
}

.menu-open {
  right: 0; /* Slide into view when open */
}

.menu ul {
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.menu ul li {
  margin: 10px 0;
}

.menu ul li a {
  color: white;
  text-decoration: none;
}

.menu .menu-button {
  width: 25px;
}

@media screen and (max-width: 768px) {
  .header-navbar {
    justify-content: space-between;
  }

  .main-side, .left-side {
    display: none;
  }

  .menu-button {
    display: flex;
    margin: 0 4%;
    cursor: pointer;
  }

  .menu {
    display: flex;
    flex-direction: column;
    padding: 5%;
  }
}

</style>