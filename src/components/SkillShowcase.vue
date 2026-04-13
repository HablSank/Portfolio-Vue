<template>
  <div id="skill" class="bg-white py-24 px-8 md:px-16 lg:px-24 border-t border-gray-100 overflow-hidden">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
      
      <div class="md:w-1/3">
        <div class="border border-gray-200 text-gray-500 w-max text-xs font-bold px-4 py-1.5 rounded-full mb-6">
          Keahlian Saya
        </div>
        <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Teknologi & Tools</h2>
        <p class="text-gray-500 font-medium text-sm leading-relaxed mb-6">
          Sebagai pengembang web dan AI enthusiast, saya menggunakan berbagai teknologi dalam membangun solusi modern berbasis web dan bereksplorasi dalam ekosistem machine learning.
        </p>
      </div>

      <div class="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
        
        <div class="bg-[#F8F9FA] rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <h3 class="text-xl font-bold mb-6">Frontend</h3>
          <ul class="space-y-4">
            <li v-for="skill in frontendSkills" :key="skill.name" class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg class="w-4 h-4 text-[#111111]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div class="flex-1">
                <h4 class="font-bold text-sm text-gray-900">{{ skill.name }}</h4>
                <p class="text-xs text-gray-500 font-medium">{{ skill.level }}</p>
              </div>
            </li>
          </ul>
        </div>

        <div class="flex flex-col gap-8">
          
          <div class="bg-[#F8F9FA] rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 class="text-xl font-bold mb-6">Data & AI</h3>
            <ul class="space-y-4">
              <li v-for="skill in aiSkills" :key="skill.name" class="flex items-center gap-4">
                <div class="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg class="w-4 h-4 text-[#111111]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div class="flex-1">
                  <h4 class="font-bold text-sm text-gray-900">{{ skill.name }}</h4>
                  <p class="text-xs text-gray-500 font-medium">{{ skill.level }}</p>
                </div>
              </li>
            </ul>
          </div>

          <div class="bg-[#F8F9FA] rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 class="text-xl font-bold mb-6">Backend</h3>
            <ul class="space-y-4">
              <li v-for="skill in backendSkills" :key="skill.name" class="flex items-center gap-4">
                <div class="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg class="w-4 h-4 text-[#111111]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div class="flex-1">
                  <h4 class="font-bold text-sm text-gray-900">{{ skill.name }}</h4>
                  <p class="text-xs text-gray-500 font-medium">{{ skill.level }}</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const frontendSkills = ref([
  { name: 'HTML & CSS', level: 'Mahir' },
  { name: 'JavaScript', level: 'Menengah' },
  { name: 'Vue 3', level: 'Pemula' },
  { name: 'Tailwind CSS', level: 'Menengah' },
  { name: 'Git & GitHub', level: 'Menengah' }
]);

const aiSkills = ref([
  { name: 'Machine Learning', level: 'Menengah' },
  { name: 'Data Analysis', level: 'Menengah' },
  { name: 'Python', level: 'Menengah' },
  { name: 'Jupyter Notebook', level: 'Mahir' }
]);

const backendSkills = ref([
  { name: 'MySQL', level: 'Pemula' },
  { name: 'Laravel', level: 'Pemula' },
]);
</script>
