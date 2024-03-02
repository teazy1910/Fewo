<template>
  <div>
    <nav class="fixed w-full top-0 p-6 bg-[#4F604B] z-50 mb-24 grow-0">
      <div class="flex justify-between items-start">
        <!-- Header logo -->
        <div>
          <a class="text-white text-sm lg:text-xl xl:text-3xl font-homemade">Ferienwohnung Zörner</a>
        </div>
        
        <!-- Mobile toggle -->
        <div class="lg:hidden">
          <button @click="drawer">
            <svg 
            class="h-8 w-8 fill-current text-white"
            fill="none" stroke-linecap="round" 
            stroke-linejoin="round" stroke-width="2" 
            viewBox="0 0 24 24" stroke="white">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      
      <!-- Navbar -->
      <div class="hidden lg:block text-white">
        <ul class="flex space-x-8 font-raleway md:text-lg">
          <li><a href="/" class="">Home</a></li>
          <li><a href="#about" class="">Über uns</a></li>
          <li><a href="#contact" class="">Kontakt</a></li>
          <li><a href="#anfahrt" class="">Anfahrt</a></li>
          <li><a href="https://tbooking.toubiz.de/DEU00000060013432410/tbooking/?globalReset=1&lang=de" class="cta bg-[#700303] xl:px-5 xl:py-4 md:py-2 md:px-1 rounded-full text-white font-raleway">Jetzt buchen</a></li>
        </ul>
      </div>
      
      <!-- Dark Background Transition -->
      <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
      >
      <div @keydown.esc="isOpen = false" v-show="isOpen" class="z-10 fixed inset-0 transition-opacity">
        <div @click="isOpen = false" class="absolute inset-0 bg- opacity-50" tabindex="0"></div>
      </div>
    </transition>
    
    <!-- Drawer Menu -->
    <aside class="p-5 transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30" :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
      
      <div class="close">
        <button class="absolute top-0 right-0 mt-4 mr-4" @click=" isOpen = false">
          <svg 
          class="w-6 h-6"
          fill="none" stroke-linecap="round" 
          stroke-linejoin="round" stroke-width="2"
          viewBox="0 0 24 24" stroke="currentColor">
          <path d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
    
    <span @click="isOpen = false" class="flex w-full items-center p-4 border-b">
      <a class="text-[#4F604B] text-sm lg:text-xl xl:text-3xl font-homemade">Ferienwohnung Zörner</a>
    </span>
    
    <ul class="divide-y font-ralewway">
      <li><a href="/" @click="isOpen = false" class="my-4 inline-block">Home</a></li>
      <li><a href="#about" @click="isOpen = false" class="my-4 inline-block">Über uns</a></li>
      <li><a href="#contact" @click="isOpen = false" class="my-4 inline-block">Kontakt</a></li>
      <li><a href="#anfahrt" @click="isOpen = false" class="my-4 inline-block">Anfahrt</a></li>
      <li><a href="https://tbooking.toubiz.de/DEU00000060013432410/tbooking/?globalReset=1&lang=de" @click="isOpen = false" class="my-8 w-full text-center font-semibold cta inline-block bg-[#700303] px-4 py-2 rounded text-lg text-white">Jetzt buchen</a></li>
    </ul>
  </aside>
  </div>
</nav>
  </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false
      };
    },
    methods: {
      drawer() {
        this.isOpen = !this.isOpen;
      }
    },
    watch: {
      isOpen: {
        immediate: true,
        handler(isOpen) {
          if (process.client) {
            if (isOpen) document.body.style.setProperty("overflow", "hidden");
            else document.body.style.removeProperty("overflow");
          }
        }
      }
    },
    mounted() {
      document.addEventListener("keydown", () => {
        if (this.isOpen) this.isOpen = false;
      });
    }
  };
  </script>