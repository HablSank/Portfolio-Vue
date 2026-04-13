<template>
  <div class="min-h-screen bg-[#FDFDFD] text-[#111111] px-8 md:px-16 lg:px-24 py-4 selection:bg-slate-200 flex flex-col relative">
    
    <nav v-reveal class="max-w-6xl w-full mx-auto flex items-center justify-between pb-12 pt-4 relative z-50">
      <div class="flex items-center gap-3 relative group">
        <img @click="isPhotoModalOpen = true" src="@/assets/hablsank.jpg" alt="Habl Sank" class="w-10 h-10 rounded-xl object-cover shadow-sm bg-gray-100 cursor-pointer hover:scale-110 hover:shadow-md transition-all active:scale-95" />
        <span class="font-bold text-lg tracking-tight">HablSank</span>
      </div>

      <div class="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
        <a href="#about" class="hover:text-black transition-colors">About</a>
        <a href="#skill" class="hover:text-black transition-colors">Skills</a>
        <a href="#project" class="hover:text-black transition-colors">Projects</a>
      </div>

      <div class="flex items-center gap-4">
        <a href="https://github.com/HablSank" target="_blank" class="hidden sm:block text-sm font-semibold hover:text-gray-600 transition-colors">
          GitHub
        </a>
        <button @click="toggleMenu" type="button" class="bg-[#111111] hover:bg-gray-800 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all flex items-center gap-2 shadow-lg cursor-pointer">
          {{ isMenuOpen ? 'Close' : 'Menu' }} 
          <span class="text-lg leading-none transition-transform duration-300" :class="{ 'rotate-45': isMenuOpen }">+</span>
        </button>
      </div>
    </nav>

    <Teleport to="body">
      <Transition name="fade">
        <div v-if="isMenuOpen" class="fixed inset-0 bg-white/95 backdrop-blur-sm z-40 flex flex-col items-center justify-center">
          <ul class="text-center space-y-8 text-3xl font-extrabold tracking-tight">
            <li><a href="#about" @click="toggleMenu" class="hover:text-gray-500 transition-colors">About</a></li>
            <li><a href="#skill" @click="toggleMenu" class="hover:text-gray-500 transition-colors">Skills</a></li>
            <li><a href="#project" @click="toggleMenu" class="hover:text-gray-500 transition-colors">Projects</a></li>
            <li><a href="#certificate" @click="toggleMenu" class="hover:text-gray-500 transition-colors">Certificates</a></li>
            <li><a href="#contact" @click="toggleMenu" class="hover:text-gray-500 transition-colors">Contact</a></li>
          </ul>
        </div>
      </Transition>
    </Teleport>

    <main class="max-w-4xl w-full mx-auto flex-1 flex flex-col items-center justify-center text-center mt-6 md:mt-10 pb-20">
      
      <h1 v-reveal class="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-balance">
        Web Developer & <br /> Machine Learning Enthusiast.
      </h1>

      <p v-reveal class="mt-6 text-gray-500 text-base md:text-lg max-w-2xl text-balance font-medium">
        Halo! Saya Habl Sankrumi Pradhab. Berpengalaman dalam merancang antarmuka web modern yang scalable, serta memiliki minat yang mendalam dalam pengembangan dan eksplorasi ekosistem artificial intelligence.
      </p>

      <div v-reveal class="mt-10 flex items-center gap-5">
        <a href="http://wa.me/6281259065059" target="_blank" class="bg-[#111111] hover:bg-gray-800 text-white font-semibold flex items-center gap-3 px-8 py-3.5 rounded-full transition-all shadow-xl hover:scale-105 active:scale-95">
          <span>Let's Talk</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </a>
        <a href="mailto:hablsankrumipradhab@gmail.com" class="text-sm font-bold text-gray-800 hover:text-black underline underline-offset-4 transition-colors">
          Email Me
        </a>
      </div>

    </main>

    <Teleport to="body">
      <Transition name="fade">
        <div v-if="isPhotoModalOpen" class="fixed inset-0 bg-black/70 backdrop-blur-md z-[100] flex items-center justify-center p-4 cursor-pointer" @click="isPhotoModalOpen = false">
          <img src="@/assets/hablsank.jpg" alt="Habl Sankrumi Pradhab" class="max-w-full max-h-[85vh] object-contain rounded-3xl shadow-2xl cursor-default transition-all duration-500 scale-100 hover:scale-[1.02]" @click.stop />
          <button @click="isPhotoModalOpen = false" class="absolute top-6 right-6 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-colors shadow-lg">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
const isPhotoModalOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
