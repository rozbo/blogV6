<template>
  <header
    class="flex flex-col md:flex-row pt-10 items-center"
  >
    <h1 class="font-serif hover:font-mono md:flex-1 text-3xl font-black md:justify-start md:text-left text-center text-red-400 transition">
      Jacob's blog
    </h1>
    <nav class="md:flex-1 flex flex-col md:flex-row justify-end md:juestify-center">
      <ul class="menu-ul">
        <li :class="getClass('home')" @click="$router.push({name: 'home'})">
          HOME
        </li>
        <li :class="getClass('list')" @click="$router.push({name: 'list',params:{id:1}})">
          LIST
        </li>
        <li :class="getClass('about')" @click="$router.push({name: 'about'})">
          ABOUT
        </li>
      </ul>
    </nav>
  </header>
  <header flex md:justify-end justify-center>
    <h2 font-sans text-gray-300 italic>
      The quick brown fox jumps over the lazy dog.
    </h2>
  </header>
</template>
<script setup lang="ts">
const route = useRoute()
function getClass(str: string) {
  if (route.name === str)
    return 'active'

  return ''
}
</script>
<style scoped>
.menu-ul li{
    @apply inline-block px-5 hover:decoration-red-300 hover:underline text-lg cursor-pointer transition-transform  ease-out  hover:scale-105
}
.menu-ul li.active{
    @apply underline decoration-red-400
}
</style>
