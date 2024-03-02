
<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const images = ref([
  "/Esszimmer.jpeg",
  "/Bad.jpeg",
  "/Küche.jpg",
  "/Wohn+Esszimmer.jpeg",
  "/BlickinsSchlafzimmer.jpeg",
  "/Balkon_Aussicht.jpg",
  "/Bett.jpeg"
]);


const selectedIndex = ref(0);
const autoInterval = ref(null);

const selectedImage = computed(() => images.value[selectedIndex.value]);


function selectImage(index) {
  selectedIndex.value = index;
}

function startAutoCarousel() {
  autoInterval.value = setInterval(() => {
    nextImage();
  }, 4000);
}

function stopAutoCarousel() {
  clearInterval(autoInterval.value);
}

function nextImage() {
  selectedIndex.value = (selectedIndex.value + 1) % images.value.length;
}

onMounted(() => {
  startAutoCarousel();
});

onUnmounted(() => {
  stopAutoCarousel();
});
</script>

<template>
  <div id="ferienwohnung" class="carousel my-12 md:mt-36 mx-5 xl:mx-48">
      <h1 class="text-2xl md:text-4xl font-playfair font-bold md:mb-3">Ferienwohnung</h1>
      <h2 class="text-lg   mb-5 font-playfair">Haus am Kurpark für 2-3 Personen</h2>
      <p class="text-justify mx-5 mb-12 text-sm md:text-lg xl:mb-10 font-raleway">Sie wohnen zentral in einer im ländlichen Stil eingerichteten Ferienwohnung in sonniger, ruhiger und leicht erhöhter Lage über dem Bergkurgarten. Das gesamte Dachgeschoß mit 58 qm komfortablem Wohnraum und 2 Balkone stehen Ihnen zur Verfügung. Vom Balkon aus haben Sie einen herrlichen Ausblick auf Wiesen, Wälder und Berge.</p>
      <transition name="fade">
        <img :src="selectedImage" alt="Selected Image" class="md:w-[70%] w-[80%] m-auto" />
      </transition>
      <div class="indicator-bar cursor-pointer">
        <span
        v-for="(image,index) in images"
        :key="index"
        :class="{ active: index === selectedIndex }"
        @click="selectImage(index)"
        ></span>
      </div>
    </div>
</template>

<style scoped>

.carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}


.indicator-bar {
  display: flex;
  justify-content: center;
  margin: 0.9em;
 

}
 
.indicator-bar span {
  width: 14px;
  height: 14px;
  background-color: lightgray;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
} 

.indicator-bar span.active {
  background-color: #50614b;
}

.carousel-text {
  margin-top: 10px;
  font-size: 16px;
  text-align: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>