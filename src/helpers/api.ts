import { http } from '~/helpers/utils'
import { config } from '~/config'
import { RGB } from '~/helpers/color'
const listCache: Array<any> = []
const itemsCache: any = {}
const author = config.user.name
const githubURl = `/repos/${author}/${config.user.repo}/issues`

const hasLabel = (issues, name) => {
  const lables = issues.labels
  const now = lables.filter((v) => {
    return v.name === name
  })
  return now.length > 0
}
function processLabels(issue) {
  const labels = issue.labels
  labels.forEach((label) => {
    // console.log(label)
    // process label style
    const rgb = new RGB(label.color)
    label.style = `--label-r:${rgb.r};--label-g:${rgb.g};--label-b:${rgb.b};--label-h:${rgb.h};--label-s:${rgb.s};--label-l:${rgb.l};`
  })
}
export interface BlogListDto{
  total_count: number
  items: BlogTopic[]

}
export interface BlogTopic{
  title: string
  body_html: string
  thumbnail?: string
  desc?: string
  isTop: boolean
  user: any
}
function processMeta(issue: BlogTopic): void {
  const xmlString = issue.body_html
  const doc = new DOMParser().parseFromString(xmlString, 'text/html')
  const descs = doc.querySelectorAll('p')
  for (let index = 0; index < descs.length; index++) {
    const element = descs[index]
    if (element.innerText !== '') {
      issue.desc = element.innerText
      break
    }
  }
  const img = doc.querySelector('img')?.src
  issue.thumbnail = img
}
export function getList(page = 1): Promise<BlogListDto> {
  return new Promise((resolve, reject) => {
    http.get(`/search/issues?q=repo:${config.user.name}/${config.user.repo}+type:issue+-label:hidden&per_page=10&page=${page}&sort=updated`).then((response: BlogListDto) => {
      response.items.forEach((v) => {
        if (hasLabel(v, 'hidden'))
          return
        processMeta(v)
        processLabels(v)
        // fill
        // console.log(`ready to fill + ${v.title}`, v)
      })
      resolve(response)
    }, reject)
  })
}

export function getDetail(id): any {
  return new Promise((resolve, reject) => {
    if (itemsCache[id]) {
      console.log('bycache')
      resolve(itemsCache[id])
    }
    else {
      http.get(`${githubURl}/${id}`).then((response) => {
        processLabels(response)
        itemsCache[id] = response
        console.log('by get ---')
        resolve(itemsCache[id])
      }, reject)
    }
  })
}
