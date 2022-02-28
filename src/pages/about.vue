<template>
  <transition name="fade">
    <section class="min-h-screen md:px-15vw px-2" />
  </transition>
</template>

<route lang="yaml">
name: about
</route>

<script lang="ts" setup>
import Render from '~/helpers/render'

Render.loading_end()
</script>
