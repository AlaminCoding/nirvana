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
  name: 'Home',
  components: { ArticleBlock, PaginationBlock },
})
export default class Home extends Vue {
  pageNo = 1
  async asyncData({ $content, params }: any) {
    const articles = await $content('posts', params.slug).limit(6).fetch()
    const allArticles = await $content('posts', params.slug).fetch()
    const pageLength = allArticles.length
    // Pagination
    const nextPage = articles.length === 6
    const visiblePost = nextPage ? articles.slice(0, -1) : articles
    return {
      nextPage,
      visiblePost,
      pageLength,
    }
  }
}
</script>
<style lang="scss" scoped></style>
