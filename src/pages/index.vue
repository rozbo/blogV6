<template>
  <transition name="fade">
    <section class="md:px-15vw flex h-80vh items-center justify-center ">
      <h1 class="text-gray-500 text-3xl opacity-70">
        我想在这里写点什么,但很显然我还没想好呢。
      </h1>
    </section>
  </transition>
</template>

<route lang="yaml">
name: home
meta:
  background: true
  color_start: "#a8edea"
  color_end: "#fed6e3"
</route>

<script lang="ts" setup>
import Render from '~/helpers/render'

Render.loading_end()
</script>
