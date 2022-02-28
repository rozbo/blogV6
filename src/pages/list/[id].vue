<template>
  <transition name="fade">
    <section ref="sectionRef" class="min-h-screen md:px-15vw px-2">
      <div v-if="loadOk" id="posts" class="mt-10">
        <div
          v-for="item in details" :key="item.id"
          class="rounded-lg shadow-md border border-gray-100 p-5 mb-12"
        >
          <router-link
            :to="'/detail/'+item.number"
          >
            <div class="text-left">
              <div v-if="item.thumbnail != null" class=" rounded-lg h-64 bg-cover bg-center bg-no-repeat" :style="getStyle(item)" />
              <div class="p-4">
                <h2 class="font-semibold mb-2 text-2xl transition ease-in-out delay-50  hover:-translate-y-1  hover:underline duration-100">
                  {{ item.title }}
                </h2>
                <p class=" text-gray-700 mb-4">
                  {{ item.desc }}
                </p>

                <div class="font-mono flex items-center justify-end text-xs flex-wrap">
                  <span v-for="label in item.labels" :key="label.id" :style="label.style" class="mt-2 label">{{ label.name }}</span>
                  <p class="ml-5 opacity-80 mt-2">
                    <span class="text-yellow-600">{{ date_format(item.created_at) }}</span>
                  </p>
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <div class="">
          <p class="text-center text-sm">
            Page {{ currentPage }} of {{ totalPage }}
          </p>
          <nav class="pagination text-md flex items-center justify-between" role="navigation">
            <a v-if="showLast" class="older-posts cursor-pointer hover:underline underline-gray-400" @click="go(-1)">← Newer Posts</a>
            <span v-else />
            <a v-if="showNext" class="older-posts cursor-pointer hover:underline underline-gray-400" @click="go(1)">Older Posts →</a>
            <span v-else />
          </nav>
        </div>
      </div>
    </section>
  </transition>
</template>

<script lang="ts" setup>
import { config } from '~/config'
import type { BlogTopic } from '~/helpers/api'
import { getList } from '~/helpers/api'
import Render from '~/helpers/render'
import { date_format } from '~/helpers/utils'

const route = useRoute()
const currentPage = computed(() => {
  return parseInt(route.params.id as string, 10)
})
const totalPage = ref(1)
const showNext = computed(() => {
  return currentPage.value < totalPage.value
})
const showLast = computed(() => {
  return currentPage.value > 1
})
const sectionRef = ref()
const router = useRouter()

watch(() => route.params.id, (newid) => {
  //
  loadList(parseInt(newid as string, 10))
})
const go = (v: number) => {
  router.push({
    name: 'list',
    params: {
      id: currentPage.value + v,
    },
  })
}
const loadOk = ref(false)
const items = ref <Array<BlogTopic>>([])
const details = computed((): any[] => {
  return items.value
})
function getStyle(item: BlogTopic): string {
  if (item.thumbnail)
    return `background-image: url(${item.thumbnail});`

  return ''
}
function loadList(page = 1) {
  Render.loading_start()
  getList(currentPage.value).then(
    (res) => {
      items.value = res.items
      totalPage.value = Math.ceil(res.total_count / 10)
      loadOk.value = true
      window.scroll({
        top: sectionRef.value.offsetTop - 30,
        left: 0,
        behavior: 'smooth',
      })
      Render.loading_end()
    },
    (res) => {
      // loading error
      // this.status = `Error:${res.statusText}`
      // this.loadingClass = 'iconfont icons-loading if-3x if-main'
    },
  )
}
onMounted(() => {
  console.log('------------- ')
  document.title = config.site.name
  loadList(currentPage.value)
})
</script>

<style>
.label{
  @apply px-3 mx-2 border shadow-md border-neutral transition duration-200 ease-in-out inline-flex
  background: red;
  background: rgb(var(--label-r), var(--label-g), var(--label-b));
  --perceived-lightness: calc( ((var(--label-r) * 0.2126) + (var(--label-g) * 0.7152) + (var(--label-b) * 0.0722)) / 255 );
  --lightness-switch: max(0, min(calc((var(--perceived-lightness) - var(--lightness-threshold)) * -1000), 1));
  --lightness-threshold: 0.453;
  color: hsl(0, 0%, calc(var(--lightness-switch) * 100%));
  --border-threshold: 0.96;
  --border-alpha: max(0, min(calc((var(--perceived-lightness) - var(--border-threshold)) * 100), 1));
  border-color: hsla(var(--label-h), calc(var(--label-s) * 1%), calc((var(--label-l) - 25) * 1%), var(--border-alpha));
  width: max-content;
  text-overflow: ellipsis;
}
</style>
<route lang="yaml">
name: list
</route>
