<template>
  <div id="project" class="bg-white py-24 px-8 md:px-16 lg:px-24 border-t border-gray-100 overflow-hidden">
    <div class="max-w-6xl mx-auto">
      
      <div v-reveal class="text-center mb-20 flex flex-col items-center">
        <div class="border border-gray-200 text-gray-500 text-xs font-bold px-4 py-1.5 rounded-full mb-6">
          Berbagai Hasil
        </div>
        <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight">Project & Website</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        <div v-for="(project, index) in projects" :key="project.id" v-reveal :style="{ transitionDelay: `${index * 50}ms` }" class="group relative overflow-hidden bg-gray-50 rounded-[2rem] p-4 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
          <div class="bg-gray-100 rounded-3xl mb-6 p-4 overflow-hidden relative aspect-[4/3] flex items-center justify-center">
            <img :src="project.image" :alt="project.title" class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
          
          <div class="px-2 pb-4">
            <h3 class="text-xl font-bold mb-1">{{ project.title }}</h3>
            <p class="text-sm font-medium text-gray-500 mb-6">{{ project.subtitle }}</p>
            
            <div class="flex items-center gap-3">
              <a :href="project.github" target="_blank" class="flex-1 text-center bg-white border border-gray-200 text-gray-800 text-xs font-bold py-3 rounded-xl hover:bg-gray-100 transition-colors">
                GitHub Repository
              </a>
              <a :href="project.demo" target="_blank" class="flex-1 text-center bg-[#111111] text-white text-xs font-bold py-3 rounded-xl hover:bg-gray-800 transition-colors shadow">
                Live Demo
              </a>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const projects = ref([
  {
    id: 1,
    title: 'Klinik Candy Vet',
    subtitle: 'Website pelayanan vet untuk peliharaan',
    image: new URL('@/assets/Project CandyVet.png', import.meta.url).href,
    github: 'https://github.com/HablSank/Candy-Vet',
    demo: 'https://candyvet.vercel.app'
  },
  {
    id: 2,
    title: 'Health Digicate',
    subtitle: 'Platform edukasi & info kesehatan digital',
    image: new URL('@/assets/Project HDE.png', import.meta.url).href,
    github: 'https://github.com/HablSank/ITC-Project',
    demo: 'https://healthdigicate.vercel.app'
  },
  {
    id: 3,
    title: 'Tata Surya',
    subtitle: 'Ensiklopedia virtual planet edukatif',
    image: new URL('@/assets/project orbit.png', import.meta.url).href,
    github: 'https://github.com/HablSank/Website-Tata-Surya',
    demo: 'https://tatasuryaku-five.vercel.app'
  },
  {
    id: 4,
    title: 'Movie Watchlist',
    subtitle: 'Aplikasi pencatat list film favorit',
    image: new URL('@/assets/Project Watchlist.png', import.meta.url).href,
    github: 'https://github.com/HablSank/Movie-Watchlist',
    demo: 'https://movie-watchlistku.vercel.app'
  },
  {
    id: 5,
    title: 'Pengaduan Kecamatanku',
    subtitle: 'Platform aduan masyarakat lokal',
    image: new URL('@/assets/Project Kecamatanku.png', import.meta.url).href,
    github: 'https://github.com/HablSank/Web-Pengaduan',
    demo: 'https://kecamatanku.vercel.app'
  },
  {
    id: 6,
    title: 'JuJutsu Kaisen Sorcerers',
    subtitle: 'Informasi komprehensif karakter JJK',
    image: new URL('@/assets/Project JJK.png', import.meta.url).href,
    github: 'https://github.com/HablSank/Jujutsu-Website',
    demo: 'https://jjksorcerers.vercel.app'
  }
]);
</script>
