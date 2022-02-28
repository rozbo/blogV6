<template>
  <transition name="fade">
    <section class="md:px-15vw" />
  </transition>
</template>

<route lang="yaml">
name: about
meta:
  background: true
  color_start: "#fbc2eb"
  color_end: "#a6c1ee"
</route>
<script lang="ts" setup>
import Render from '~/helpers/render'

Render.loading_end()
</script>
