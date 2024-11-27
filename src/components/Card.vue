<script setup>
const props = defineProps({
  poster: {
    type: String,
    required: false,
    default: '/images/poster.png',
  },
  title: {
    type: String,
    required: true,
  },
  affiliation: {
    type: String,
    required: true,
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
  page: {
    type: String,
    required: false,
    default: null,
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
    goToCardPage(event) {
      if (!this.page) {
        event.preventDefault();
        this.showPopup = true;
      }
    }
  },
};
</script>

<template>
  <Popup v-if="showPopup" @close="togglePopup()" />
  <a class="lecture" :href="props.page || '#'" @click="goToCardPage">
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
      <div class="lecture-title text-container line-clamp-3">
        <h4>{{ props.title }}</h4>
        <p class="place text-container line-clamp-1">{{ props.affiliation }}</p>
      </div>
      <p v-if="props.description !== '404'" class="lecture-description text-container line-clamp-3">{{ props.description }}</p>
      <div class="read-more">
        <p>See more</p>
      </div>
    </div>
  </a>
</template>

<style scoped>

.lecture {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: rgba(15, 15, 15, 0.07) 0 0 0 1px, rgba(15, 15, 15, 0.05) 0 2px 4px;
  cursor: pointer;
  border: 1px solid #f2f3f3;
  justify-self: center;
}

.lecture:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

.lecture .img-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  aspect-ratio: 4/3; /* Ensures the container is square */
  overflow: hidden; /* Prevents image overflow */
  justify-content: center;
  align-items: center;
  position: relative;
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
  height: 230px;
  color: var(--color-text);
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
  color: #f2f2f2;
}

.date-tag {
  border: 1px solid #ff9600;
  border-radius: 8px;
  padding: 1% 2%;
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
  overflow: hidden;
  position: relative;
  max-width: 100%; /* Adjust to fit your layout */
}

.line-clamp-1 {
  -webkit-line-clamp: 1;
}

.line-clamp-3 {
  -webkit-line-clamp: 3;
}
</style>