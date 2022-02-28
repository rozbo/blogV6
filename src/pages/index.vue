<template>
  <transition name="fade">
    <section class="md:px-15vw" />
  </transition>
</template>

<route lang="yaml">
name: home
</route>

<script lang="ts" setup>
import Render from '~/helpers/render'

Render.loading_end()
</script>
