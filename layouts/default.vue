<template>
  <div class="main-container">
    <Navbar />
    <Nuxt />
    <h2 class="foot-notes"></h2>
    <Footer />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from 'nuxt-property-decorator'
import Navbar from '~/components/ui/Navbar.vue'
import Footer from '~/components/ui/Footer.vue'

@Component({
  name: 'Default',
  components: {
    Navbar,
    Footer,
  },
})
export default class Default extends Vue {
  @Watch('$route', { deep: true, immediate: true })
  routeChange() {
    if (process.browser && window) {
      let bottomFootNote: any = document.querySelector('.foot-notes')
      bottomFootNote.style.opacity = '0'
      bottomFootNote.style.pointerEvents = 'none'
    }
  }
}
</script>
<style lang="scss" scoped>
.main-container {
  display: flex;
}
@media screen and (max-width: 1280px) {
  .main-container {
    flex-direction: column;
  }
}
.foot-notes {
  width: 100%;
  text-align: center;
  padding: 50px 0px;
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  transition: 0.5s;
  z-index: 1;
}
</style>
