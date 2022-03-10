<template>
  <div class="article-wrapper">
    <article v-for="article in visiblePost" :key="article.title">
      <h1 class="post-title">
        <nuxt-link :to="`/${article.slug}`">{{ article.title }}</nuxt-link>
      </h1>
      <time class="top-date" :datetime="article.date">{{
        getDate(article.date)
      }}</time>

      <nuxt-content
        v-if="article.excerpt"
        :document="{ body: article.excerpt }"
      />
      <nuxt-content v-else :document="article" />
      <nuxt-link
        :to="`/${article.slug}`"
        v-if="article.excerpt"
        class="read-more"
      >
        আরো পড়ুন <fa :icon="['fas', 'angle-right']" />
      </nuxt-link>
      <div class="article-footer">
        <SocialBlock :article-slug="article.slug" />
        <div class="article-meta">
          <time :datetime="article.orig_date">{{
            getDate(article.orig_date)
          }}</time>
          <small>{{ article.location }}</small>
        </div>
      </div>
    </article>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import SocialBlock from '~/components/ui/SocialBlock.vue'
import getBnNumbers from '~/utils/getBnNumbers'
import toastFootNote from '~/utils/toastFootNote'
@Component({
  name: 'ArticleBlock',
  components: { SocialBlock },
})
export default class ArticleBlock extends Vue {
  @Prop() visiblePost: any

  getDate(date: string): string {
    const d = this.$dayjs(date)
    return (d as any).$locale().postformat(d.format('dddd, DD MMMM YYYY'))
  }
  mounted() {
    toastFootNote()
  }
}
</script>
<style lang="scss" scoped>
article {
  max-width: 600px;
  margin: 20px auto;
  margin-bottom: 8em;
}
.post-title {
  color: #151515;
  font-family: 'Noto Sans Bengali UI', 'Merriweather Sans', serif;
  font-size: 36px;
  font-weight: 400;
  line-height: 42px;
  margin: 0;
  padding: 0;
  text-align: center;
}

.read-more {
  font-size: 18px;
  display: block;
  text-align: center;
  margin-top: 1em;
  svg {
    position: relative;
    top: 1.5px;
  }
}
.article-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2em 0px;
  .article-meta {
    small {
      text-align: right;
      display: block;
      font-size: 15px;
    }
  }
  @media screen and (max-width: 1280px) {
    padding: 0px 20px;
    box-sizing: border-box;
  }
}
</style>
