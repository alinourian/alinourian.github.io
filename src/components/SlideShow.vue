<template>
  <div class="slideshow-container">
    <div
        v-for="(image, index) in images"
        :key="index"
        class="slide"
        v-show="currentIndex === index"
    >
      <img :src="image" alt="slideshow image" class="slide-image" />
    </div>
    <button class="prev" @click="prevSlide">&#10094;</button>
    <button class="next" @click="nextSlide">&#10095;</button>
  </div>
  <div class="dot-container">
    <span
        v-for="(image, index) in images"
        :key="index"
        class="dot"
        :class="{ active: currentIndex === index }"
        @click="setSlide(index)"
    ></span>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    setSlide(index) {
      this.currentIndex = index;
    }
  },
  mounted() {
    setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }
};
</script>

<style scoped>
.slideshow-container {
  position: relative;
  max-width: 800px;
  margin: auto;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.slide {
}

.slide-image {
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 10px;
}

.prev, .next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 1rem;
  cursor: pointer;
  border-radius: 50%;
  user-select: none;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

.dot-container {
  text-align: center;
  margin-top: 1rem;
}

.dot {
  height: 15px;
  width: 15px;
  margin: 0 5px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.3s;
  cursor: pointer;
}

.dot.active {
  background-color: #717171;
}
</style>
