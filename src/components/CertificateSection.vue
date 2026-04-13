<template>
  <div id="certificate" class="bg-[#F8F9FA] py-24 px-8 md:px-16 lg:px-24 border-t border-gray-100 overflow-hidden">
    <div class="max-w-6xl mx-auto">
      
      <div v-reveal class="text-center mb-20 flex flex-col items-center">
        <div class="border border-gray-200 text-gray-500 text-xs font-bold px-4 py-1.5 rounded-full mb-6">
          Berbagai Koleksi
        </div>
        <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight">Sertifikat & Pencapaian</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div 
          v-for="(cert, index) in certificates" 
          :key="cert.id" 
          v-reveal
          :style="{ transitionDelay: `${index * 50}ms` }"
          @click="openCertificate(cert.link)"
          class="group bg-white rounded-3xl p-3 shadow-sm hover:shadow-xl border border-gray-100 cursor-pointer transition-all duration-300 hover:-translate-y-1 relative"
        >
          <div class="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 border border-gray-100 mb-4">
            <img :src="cert.image" :alt="cert.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale-[20%] group-hover:grayscale-0" />
            <div class="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
            <div class="absolute top-3 right-3 bg-white/80 backdrop-blur-md p-1.5 rounded-full text-black opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </div>
          </div>
          
          <div class="px-2 pb-2 text-center">
            <h3 class="font-bold text-sm tracking-tight text-gray-900 line-clamp-1" :title="cert.title">{{ cert.title }}</h3>
            <p class="text-xs text-gray-500 font-medium mt-1">{{ cert.issuer }}</p>
          </div>
        </div>

      </div>

    </div>

    <Teleport to="body">
      <Transition name="fade">
        <div v-if="isModalOpen" class="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm" @click.self="closeModal">
          <div class="bg-[#FDFDFD] rounded-[2rem] w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden shadow-2xl animate-scale-up">
            <div class="flex justify-between items-center py-4 px-6 border-b border-gray-200">
              <h2 class="font-bold text-lg tracking-tight">Sertifikat Preview</h2>
              <button @click="closeModal" class="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors">
                <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            <iframe :src="selectedPdf" class="w-full flex-1 bg-gray-50" frameborder="0"></iframe>
            <div class="py-3 px-6 border-t border-gray-200 flex justify-end">
              <a :href="selectedPdf" target="_blank" class="text-sm font-semibold text-blue-600 hover:underline">
                Buka di Tab Baru / Download
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isModalOpen = ref(false);
const selectedPdf = ref('');

const openCertificate = (pdfLink) => {
  selectedPdf.value = pdfLink;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  setTimeout(() => {
     selectedPdf.value = '';
  }, 300);
};

const certificates = ref([
  {
    id: 1,
    title: 'Dasar Pemrograman',
    issuer: 'Dicoding',
    image: new URL('@/assets/screenshot-sertifikat-dicoding(1).png', import.meta.url).href,
    link: new URL('@/assets/sertifikat-dicoding(1).pdf', import.meta.url).href
  },
  {
    id: 2,
    title: 'Google Developer Group',
    issuer: 'Google',
    image: new URL('@/assets/Screenshot_GDG.png', import.meta.url).href,
    link: new URL('@/assets/Google_Developer_Group.pdf', import.meta.url).href
  },
  {
    id: 3,
    title: 'CyberSecurity Bootcamp',
    issuer: 'HackPoint',
    image: new URL('@/assets/Screenshot_HackPoint.png', import.meta.url).href,
    link: new URL('@/assets/HackPoint.pdf', import.meta.url).href
  },
  {
    id: 4,
    title: 'CyberSecurity Analyst',
    issuer: 'Latihacks',
    image: new URL('@/assets/Screenshot_Latihacks_1.png', import.meta.url).href,
    link: new URL('@/assets/Latihacks_1.pdf', import.meta.url).href
  },
  {
    id: 5,
    title: 'CyberSecurity Engineer',
    issuer: 'Latihacks',
    image: new URL('@/assets/Screenshot_Latihacks_2.png', import.meta.url).href,
    link: new URL('@/assets/Latihacks_2.pdf', import.meta.url).href
  },
  {
    id: 6,
    title: 'Juara 2 Simulasi CyberSecurity',
    issuer: 'LKS Sekolah',
    image: new URL('@/assets/Simulasi LKS Sekolah.png', import.meta.url).href,
    link: new URL('@/assets/Sertifikat_Simulasi_LKS_Cyber.pdf', import.meta.url).href
  },
  {
    id: 7,
    title: 'Finalis Jatim CyberSecurity Competition',
    issuer: 'JCC 2025 (Kominfo)',
    image: new URL('@/assets/Screenshot_Finalis_JCC.png', import.meta.url).href,
    link: new URL('@/assets/Sertifikat_FINALIS_JCC_2025.pdf', import.meta.url).href
  },
  {
    id: 8,
    title: 'Juara 2 Jatim Youth Codepreneur Challenge',
    issuer: 'JYCC 2025 (Kominfo)',
    image: new URL('@/assets/JYCC.jpeg', import.meta.url).href,
    link: new URL('@/assets/JYCC.pdf', import.meta.url).href
  },
  {
    id: 9,
    title: 'Peserta CyberSecurity "The Ace"',
    issuer: 'Universitas Diponegoro',
    image: new URL('@/assets/Screenshot_TheAce_Undip.png', import.meta.url).href,
    link: new URL('@/assets/Sertifikat_TheAce_Undip.pdf', import.meta.url).href
  },
  {
    id: 10,
    title: 'Peserta Youth English Competition',
    issuer: 'Universitas Wijaya Kusuma',
    image: new URL('@/assets/Uni_Wijaya_Kusuma.jpg', import.meta.url).href,
    link: new URL('@/assets/Uni_Wijaya_Kusuma.pdf', import.meta.url).href
  },
  {
    id: 11,
    title: 'Juara 1 Lomba Kompetensi Siswa',
    issuer: 'Tingkat Kota Surabaya',
    image: new URL('@/assets/LKS_KOTA.jpeg', import.meta.url).href,
    link: new URL('@/assets/LKS_KOTA.pdf', import.meta.url).href
  }
]);
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

.animate-scale-up {
  animation: scaleUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes scaleUp {
  0% { transform: scale(0.95); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}
</style>
