<script setup>
const props = defineProps({
  poster: {
    type: String,
    required: false,
    default: '/images/poster2.png',
  },
  title: {
    type: String,
    required: true,
  },
  affiliation: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
    default: '404'
  },
  dates: {
    type: Array,
    required: true,
  },
  link: {
    type: String,
    required: false,
    default: '404'
  }
});
</script>

<script>
import Popup from '@/components/NotFoundPopup.vue';

export default {
  components: {
    Popup,
  },
  data() {
    return {
      showPopup: false,
    };
  },
  methods: {
    togglePopup() {
      this.showPopup = !this.showPopup;
    },
    goToCardPage() {
      if (this.link === '404') {
        this.showPopup = true;
      } else {
        this.$router.push({name: this.title});
      }
    }
  },
};
</script>

<template>
  <Popup v-if="showPopup" @close="togglePopup()" />
  <div class="lecture" @click="goToCardPage()">
    <div class="img-container">
      <img :src="props.poster" alt="poster">
      <div class="lecture-date">
        <p class="date-tag" v-for="(date, index) in props.dates" :key="index">{{ date }}</p>
      </div>
    </div>
    <!--          <div class="click-me">-->
    <!--            <h2>Click Me!</h2>-->
    <!--          </div>-->
    <div class="card-body">
      <div class="lecture-title text-container">
        <h6>{{ props.title }}</h6>
        <p v-if="affiliation" class="place text-container line-clamp-1">{{ props.affiliation }}</p>
      </div>
      <p v-if="props.description !== '404'" class="lecture-description text-container line-clamp-3">{{ props.description }}</p>
      <div class="read-more">
        <a v-if="link" :href="link" target="_blank" class="github-icon">
          <svg style="height: 25px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
          </svg>
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>

.lecture {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: rgba(15, 15, 15, 0.07) 0 0 0 1px, rgba(15, 15, 15, 0.05) 0 2px 4px;
  border: 1px solid #f2f3f3;
  justify-self: center;
  width: 100%;
}

.lecture .img-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  /* max-width: 350px; */
  aspect-ratio: 1/1; /* Ensures the container is square */
  overflow: hidden; /* Prevents image overflow */
  justify-content: center;
  align-items: center;
  position: relative;
  height: 200px;
}

.lecture .img-container img {
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
}

.lecture-description {
  line-height: 1.4;
  font-size: 1rem;
}

.card-body {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5px 10px 10px 10px;
  justify-content: space-between;
  position: relative;
  min-height: 100px;
  gap: 5px;
}

.card-body .place {
  font-style: italic;
  font-size: 1rem;
}

.lecture-title h4 {
  margin-bottom: 0;
}

.lecture-date {
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin: 5px;
  padding: 2px;
  font-size: 1rem;
  position: absolute;
  bottom: 0;
  left: 0;
}

.date-tag {
  border: 1px solid #ff9600;
  border-radius: 8px;
  padding: 1%;
  width: fit-content;
  background-color: #FFA500FF;
  white-space: nowrap;
  font-size: 0.8rem;
}

.read-more {
  color: cadetblue;
  cursor: pointer;
}

.read-more:hover {
  color: #4ec1c5;
}

.text-container {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  /* overflow: hidden; */
  position: relative;
  max-width: 100%; /* Adjust to fit your layout */
}

.line-clamp-1 {
  -webkit-line-clamp: 1;
}

.line-clamp-3 {
  -webkit-line-clamp: 3;
}

.github-icon {
  align-items: center;
  display: flex;
  gap: 5px;
  color: var(--color-accent);
  font-weight: 500;
  font-size: 1.1rem;
  font-family: Georgia, sans-serif;
}

@media screen and (max-width: 600px) {
  .lecture .img-container {
    max-width: none;
  }

}

@media screen and (max-width: 900px) {
  .card-body {
    min-height: 50px;
  }
}
</style>