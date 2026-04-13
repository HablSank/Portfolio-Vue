<template>
  <div id="about" class="bg-[#F8F9FA] py-24 px-8 md:px-16 lg:px-24 mt-20 overflow-hidden">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        <div v-reveal class="lg:col-span-5 bg-[#111111] text-white rounded-[2rem] p-10 flex flex-col justify-between shadow-sm relative group">
          <div class="relative z-10">
            <h2 class="text-2xl font-bold mb-4">I'm Habl Sankrumi Pradhab</h2>
            <p class="text-gray-400 text-sm leading-relaxed mb-6 font-medium">
              Siswa kelas 11 SMK Negeri 1 Surabaya jurusan Rekayasa Perangkat Lunak (RPL). Saya menekuni bidang programming, pengembangan web, cybersecurity, dan machine learning. Saya tertarik menciptakan pengalaman digital yang indah, fungsional, serta aman.
            </p>
            <p class="text-gray-400 text-sm leading-relaxed font-medium">
              Saya mencari peluang untuk berkembang, berkolaborasi dengan tim, dan memecahkan tantangan melalui barisan kode.
            </p>
          </div>
          
          <div class="mt-12 relative z-10 flex items-center gap-4">
            <div class="bg-white/10 p-2 rounded-full backdrop-blur-sm relative group cursor-pointer" @click="isPhotoModalOpen = true">
              <img src="@/assets/hablsank.jpg" alt="Icon" class="w-10 h-10 rounded-full object-cover group-hover:scale-110 transition-transform shadow-md" />
              <div class="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                 <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
              </div>
            </div>
            <a href="http://wa.me/6281259065059" class="bg-white text-black text-sm font-bold px-6 py-3 rounded-full hover:bg-gray-200 transition-colors">
              About me
            </a>
          </div>
          
          <div class="absolute -right-10 -bottom-10 w-48 h-48 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors duration-700"></div>
        </div>

        <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          <div v-reveal class="bg-white rounded-[2rem] p-8 shadow-sm flex flex-col justify-between border border-gray-100 hover:shadow-md transition-shadow">
            <div class="flex items-end justify-between border-b border-gray-100 pb-4 mb-4">
              <h3 class="text-5xl font-extrabold tracking-tighter">2+</h3>
              <span class="text-gray-400 text-sm font-medium mb-1">tahun</span>
            </div>
            <p class="text-gray-600 font-medium text-sm">
              Pengalaman eksplorasi Web Development, CyberSecurity, dan Machine Learning.
            </p>
          </div>

          <div class="bg-white rounded-[2rem] p-8 shadow-sm flex flex-col justify-between border border-gray-100 hover:shadow-md transition-shadow">
            <div class="flex items-end justify-between border-b border-gray-100 pb-4 mb-4">
              <h3 class="text-5xl font-extrabold tracking-tighter">6+</h3>
              <span class="text-gray-400 text-sm font-medium mb-1">proyek</span>
            </div>
            <p class="text-gray-600 font-medium text-sm">
              Telah membangun berbagai projek mulai dari UI web desain, dashboard, hingga aplikasi fungsional.
            </p>
          </div>

          <div class="bg-white rounded-[2rem] p-8 shadow-sm flex flex-col justify-between border border-gray-100 hover:shadow-md transition-shadow">
            <div class="flex items-end justify-between border-b border-gray-100 pb-4 mb-4">
              <h3 class="text-5xl font-extrabold tracking-tighter">11+</h3>
              <span class="text-gray-400 text-sm font-medium mb-1">sertifikat</span>
            </div>
            <p class="text-gray-600 font-medium text-sm">
              Pencapaian dari berbagai kompetisi, bootcamp keamanan siber, dan course terkemuka.
            </p>
          </div>

          <div class="bg-[#D8A210] rounded-[2rem] p-8 shadow-sm flex flex-col justify-between text-white hover:scale-[1.02] transition-transform">
            <div class="flex items-end justify-between border-b border-white/20 pb-4 mb-4">
              <h3 class="text-4xl font-extrabold tracking-tighter">RPL</h3>
              <span class="text-white/80 text-sm font-medium mb-1">edukasi</span>
            </div>
            <p class="text-white/90 font-medium text-sm">
              SMK Negeri 1 Surabaya. Fokus belajar Rekayasa Perangkat Lunak.
            </p>
          </div>

        </div>

      </div>
    </div>

    <Teleport to="body">
      <transition enter-active-class="transition-opacity duration-300" enter-from-class="opacity-0" leave-active-class="transition-opacity duration-300" leave-to-class="opacity-0">
        <div v-if="isPhotoModalOpen" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 cursor-pointer" @click="isPhotoModalOpen = false">
          <img src="@/assets/hablsank.jpg" alt="Habl Sankrumi Pradhab" class="max-w-full max-h-[85vh] object-contain rounded-3xl shadow-2xl cursor-default transition-all duration-500 hover:scale-[1.02]" @click.stop />
          <button @click="isPhotoModalOpen = false" class="absolute top-6 right-6 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-colors shadow-lg">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const isPhotoModalOpen = ref(false);
</script>
