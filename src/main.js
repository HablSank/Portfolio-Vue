import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

app.directive('reveal', {
  mounted(el) {
    el.classList.add('reveal-blur');
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });
    observer.observe(el);
  }
})

app.mount('#app')
