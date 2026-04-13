<template>
  <div id="contact" class="bg-[#111111] text-white pt-24 pb-8 px-8 md:px-16 lg:px-24 rounded-t-[3rem] overflow-hidden">
    <div class="max-w-6xl mx-auto">
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
        
        <div v-reveal>
          <div class="border border-white/20 text-white/60 w-max text-xs font-bold px-4 py-1.5 rounded-full mb-6">
            Let's connect
          </div>
          <h2 class="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">Punya Projek?<br>Mari berdiskusi.</h2>
          <p class="text-white/60 font-medium text-sm leading-relaxed max-w-md">
            Hubungi saya mari berkolaborasi bersama. Saya selalu terbuka untuk mengeksplorasi ide, proyek, atau sekadar berdiskusi tentang pengembangan web dan artificial intelligence.
          </p>

          <div class="mt-12 space-y-6">
            <div class="flex items-center gap-4">
               <div class="bg-white/10 p-4 rounded-full">
                 <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
               </div>
               <div>
                 <p class="text-xs text-white/50 font-bold mb-1">Email</p>
                 <a href="mailto:hablsankrumipradhab@gmail.com" class="text-sm font-semibold hover:text-[#D8A210] transition-colors">hablsankrumipradhab@gmail.com</a>
               </div>
            </div>

            <div class="flex items-center gap-4">
               <div class="bg-white/10 p-4 rounded-full">
                 <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
               </div>
               <div>
                 <p class="text-xs text-white/50 font-bold mb-1">Lokasi</p>
                 <span class="text-sm font-semibold">SMKN 1 Surabaya</span>
               </div>
            </div>
          </div>
        </div>

        <div v-reveal class="bg-white/5 p-8 rounded-[2rem] border border-white/10 backdrop-blur-md relative overflow-hidden">
          
          <transition enter-active-class="transition-opacity duration-500 delay-200" enter-from-class="opacity-0" leave-active-class="transition-opacity duration-300" leave-to-class="opacity-0">
            <div v-if="isSuccess" class="absolute inset-0 bg-[#D8A210] flex flex-col items-center justify-center p-8 text-center z-10 text-white rounded-[2rem]">
              <div class="bg-white/20 p-4 rounded-full mb-4">
                  <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3 class="text-2xl font-bold mb-2">Terima kasih!</h3>
              <p class="font-medium text-sm text-white/90">Pesan Anda telah berhasil terkirim. Saya akan segera menghubungi Anda kembali.</p>
              <button @click="isSuccess = false" class="mt-6 border border-white/40 hover:bg-white/10 px-6 py-2.5 rounded-full font-bold transition-all text-sm cursor-pointer">
                Kirim pesan lain
              </button>
            </div>
          </transition>

          <form @submit.prevent="submitForm" class="space-y-6" :class="{ 'opacity-0 pointer-events-none': isSuccess }">
            
            <div>
              <label class="block text-xs font-bold text-white/70 mb-2">Nama Anda</label>
              <input v-model="form.name" type="text" placeholder="John Doe" class="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#D8A210] transition-colors text-sm" required />
            </div>

            <div>
              <label class="block text-xs font-bold text-white/70 mb-2">Email Anda</label>
              <input v-model="form.email" type="email" placeholder="john@example.com" class="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#D8A210] transition-colors text-sm" required />
            </div>

            <div>
              <label class="block text-xs font-bold text-white/70 mb-2">Pesan Anda</label>
              <textarea v-model="form.message" rows="4" placeholder="Ceritakan detail pesan Anda..." class="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#D8A210] transition-colors text-sm resize-none" required></textarea>
            </div>

            <button type="submit" :disabled="isSubmitting" class="w-full bg-[#D8A210] flex justify-center items-center gap-3 hover:bg-[#c4920c] disabled:opacity-75 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all shadow-md mt-4 hover:scale-[1.02]">
              <svg v-if="isSubmitting" class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>{{ isSubmitting ? 'Sending...' : 'Kirim Pesan' }}</span>
            </button>
            <p v-if="errorMsg" class="text-red-400 text-xs font-bold mt-2 text-center">{{ errorMsg }}</p>

          </form>
        </div>

      </div>

      <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <p class="text-xs text-white/50 font-medium">© 2026 Habl Sankrumi Pradhab. All rights reserved.</p>
        
        <div class="flex items-center gap-6">
          <a href="https://www.facebook.com/share/1EAqMPWF1z/" target="_blank" class="text-white/50 hover:text-white transition-colors">
            <span class="text-sm font-semibold">Facebook</span>
          </a>
          <a href="https://www.instagram.com/hablsank?igsh=YjV3ZGR1aHdkYmk3" target="_blank" class="text-white/50 hover:text-white transition-colors">
            <span class="text-sm font-semibold">Instagram</span>
          </a>
          <a href="https://www.linkedin.com/in/habl-sankrumi-pradhab-32588a354?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" class="text-white/50 hover:text-white transition-colors">
            <span class="text-sm font-semibold">LinkedIn</span>
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const isSubmitting = ref(false);
const isSuccess = ref(false);
const errorMsg = ref('');

const form = reactive({
  name: '',
  email: '',
  message: ''
});

const submitForm = async () => {
  isSubmitting.value = true;
  errorMsg.value = '';
  
  try {
    const response = await fetch('https://formspree.io/f/xzdpklav', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message
      })
    });
    
    if (response.ok) {
      isSuccess.value = true;
      form.name = '';
      form.email = '';
      form.message = '';
    } else {
      errorMsg.value = 'Oops! Terjadi kesalahan saat mengirim pesan.';
    }
  } catch (error) {
    errorMsg.value = 'Gagal terhubung ke server. Pastikan koneksi internet Anda aktif.';
  } finally {
    isSubmitting.value = false;
  }
};
</script>
