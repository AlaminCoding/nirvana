<template>
  <section class="main-content">
    <ArticleBlock :visible-post="visiblePost" />
    <PaginationBlock
      :page-no="pageNo"
      :page-length="pageLength"
      :next-page="nextPage"
    />
  </section>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import ArticleBlock from '~/components/ui/ArticleBlock.vue'
import PaginationBlock from '~/components/ui/PaginationBlock.vue'
@Component({
  name: 'Number',
  components: { ArticleBlock, PaginationBlock },
})
export default class Number extends Vue {
  async asyncData({ $content, params, error }: any) {
    const pageNo = parseInt(params.number)
    if (pageNo > 0) {
      const articles = await $content('posts', params.slug)
        .limit(6)
        .skip(5 * (pageNo - 1))
        .fetch()
      const allArticles = await $content('posts', params.slug).fetch()
      const pageLength = allArticles.length
      if (!articles.length) {
        return error({ statusCode: 404, message: 'No posts found!' })
      }
      const nextPage = articles.length === 6
      const visiblePost = nextPage ? articles.slice(0, -1) : articles

      return {
        nextPage,
        visiblePost,
        pageNo,
        pageLength,
      }
    } else {
      return error({ statusCode: 404, message: 'No posts found!' })
    }
  }
}
</script>
<style lang="scss" scoped></style>
