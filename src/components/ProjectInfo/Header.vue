<script setup>
import ALogo from "../../assets/ALogo.svg";

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);

  if (section) {
    const offset = 75;
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
    } else {
      // If already on the main page, ensure the section is searched after hash update
      setTimeout(() => {
        const sectionAfterRedirect = document.getElementById(sectionId);
        if (sectionAfterRedirect) {
          const offset = 75;
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



<template>
  <div class="header-navbar">
    <div class="left-side">
      <a href="/" class="back-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
        </svg>
      </a>
    </div>
    <div class="main-side">

    </div>
    <div class="right-side">
      <img :src="ALogo" alt="logo" style="height: 36px; align-self: center;">
<!--      <a href="mailto:alinourian10@gmail.com">-->
<!--        <h6 class="contact-me">Email Me!</h6>-->
<!--      </a>-->
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
  justify-content: space-between;
}

.left-side {
  display: flex;
  flex-direction: row;
  min-width: fit-content;
  width: 20%;
  padding: 0 4%;
  justify-content: left;
  align-items: center;
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
  cursor: pointer;
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

.right-side {
  display: flex;
  padding: 0 4%;
}

.back-icon {
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}


@media screen and (max-width: 768px) {
  .header-navbar {
    justify-content: space-between;
  }

  .main-side, .right-side {
    display: none;
  }
}

</style>