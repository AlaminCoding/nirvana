<template>
  <div class="social">
    <fa
      :icon="['fab', 'facebook-f']"
      class="facebook"
      @click="shareLink('facebook', articleSlug)"
    />
    <fa
      :icon="['fab', 'twitter']"
      class="twitter"
      @click="shareLink('twitter', articleSlug)"
    />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
@Component({
  name: 'SocialBlock',
  components: {},
})
export default class SocialBlock extends Vue {
  @Prop() articleSlug: any

  getSocial(social: string, slug: string) {
    let url: string = 'https://thoughts.utsob.me/'
    switch (social) {
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${
          url + '/' + slug
        }`
      case 'twitter':
        return `https://twitter.com/intent/tweet?url=${url + '/' + slug}`
      default:
        break
    }
  }
  shareLink(social: string, slug: string) {
    window.open(
      this.getSocial(social, slug),
      'share-dialog',
      'width=800, height=600'
    )
  }
}
</script>
<style lang="scss" scoped></style>
