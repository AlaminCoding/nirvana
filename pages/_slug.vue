<template>
  <article>
    <div class="article-tags">
      ট্যাগসমূহ:
      <ul>
        <li v-for="(tag, idx) in article.tags" :key="idx">{{ tag }}</li>
      </ul>
    </div>
    <h1 class="post-title">{{ article.title }}</h1>
    <time class="top-date" :datetime="article.date">{{
      getDate(article.date)
    }}</time>
    <nuxt-content :document="article" />
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import getBnNumbers from '~/utils/getBnNumbers'
@Component({
  name: 'Post',
})
export default class Post extends Vue {
  async asyncData({ $content, params, error }: any) {
    try {
      const article = await $content('posts', params.slug).fetch()
      return {
        article,
      }
    } catch {
      return error({ statusCode: 404, message: 'No posts found!' })
    }
  }

  getTagSentence(tags: string[]) {
    let text: string = tags[0]
    for (let i = 1; i < tags.length; i++) {
      text = text + ', ' + tags[i]
    }
    return text
  }

  getDate(date: string): string {
    const d = this.$dayjs(date)
    return (d as any).$locale().postformat(d.format('dddd, DD MMMM YYYY'))
  }
  mounted() {
    let footnote = document.querySelectorAll('.footnote-ref')
    let noteList = document.querySelector('.footnotes')
    let bottomFootNote: any = document.querySelector('.foot-notes')
    footnote.forEach((element, index) => {
      element.removeAttribute('href')
      let innerNumber = Number(element.innerHTML)
      element.innerHTML = getBnNumbers(innerNumber)
      element.addEventListener('click', function () {
        let listArray: any = noteList?.children[1].children
        bottomFootNote.innerHTML = listArray[index].innerHTML
        bottomFootNote.style.opacity = '1'
        bottomFootNote.style.pointerEvents = 'auto'
      })
    })
  }
}
</script>
<style lang="scss" scoped>
article {
  flex: 1;
  padding-top: 50px;
  height: 100vh;
  overflow-y: scroll;
  box-sizing: border-box;
  @media screen and (max-width: 1280px) {
    height: auto;
    overflow-y: visible;
  }
}
.article-tags {
  text-align: center;
  font-size: 16px;
  color: gray;
  margin-top: 1em;
  margin-bottom: 1em;
  display: flex;
  justify-content: center;
  ul {
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
    margin-left: 5px;
    li {
      margin: 0px 2px;
      &:after {
        content: ',';
      }
      &:nth-last-child(1) {
        &:after {
          content: '';
        }
      }
    }
  }
}
</style>
