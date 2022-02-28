<template>
  <main font-sans class="px-2vw md:px-10vw min-h-screen" :style="otherStyle">
    <Header />
    <router-view />
  </main>
  <Footer />
</template>
<script setup lang="ts">
const route = useRoute()
const otherStyle = computed(() => {
  if (route.meta.background) {
    return `
    background-image: linear-gradient(to top, ${route.meta.color_start} 0%, ${route.meta.color_end} 100%);
    `
  }
})
</script>
