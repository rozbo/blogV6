<script setup lang="ts">
import { getDetail } from '~/helpers/api'
import Render from '~/helpers/render'
import { date_format } from '~/helpers/utils'

const props = defineProps<{ name: string }>()
const router = useRouter()
const route = useRoute()
const detail = ref<any>()
const createAt = computed(() => {
  console.log(detail.value)
  return date_format(detail.value.created_at)
})
const currentId = computed(() => {
  return route.params.id
})

const loadDetail = (id: string) => {
  Render.loading_start()
  getDetail(id).then(
    (res: any) => {
      detail.value = res
      document.title = res.title
    },
    (res: any) => {
    },
  ).finally(() => {
    Render.loading_end()
  })
}
onMounted(() => {
  loadDetail(currentId.value as string)
})
</script>

<template>
  <section class="page-container md:p-x15vw py-20">
    <div v-if="detail !==undefined" id="post">
      <h1 class="text-center text-3xl my-3">
        {{ detail.title }}
      </h1>
      <div v-if="detail.labels.length>0" class="my-10 flex justify-center md:justify-end">
        <span v-for="(label,key) in detail.labels" :key="label.id" :style="label.style" class="label">{{ label.name }}</span>
      </div>
      <div ref="markdown_body" class="markdown-body" v-html="detail.body_html" />
    </div>
  </section>
</template>

<style>
@import "github-markdown-css";
</style>
