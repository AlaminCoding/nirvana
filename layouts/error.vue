<template>
  <div class="error-panel">
    <h2 class="heading">মগ্ন(৪০৪)</h2>
    <div class="error-footer">
      <p>
        এখানে দেখার কিছু নাই। কেবলই চিন্তামগ্নতার আবর্জনা!
        <nuxt-link to="/">চিন্তার পৃষ্ঠতলে</nuxt-link> যাও।
      </p>
      <div class="social"></div>
    </div>
  </div>
</template>
<script>
// import { Vue, Component, Prop } from 'nuxt-property-decorator'
// @Component({
//   name: 'ErrorPage',
//   components: {},
// })
// export default class ErrorPage extends Vue {
//   @Prop() error
// }
export default {
  props: ['error'],
  // you can set a custom layout for the error page
}
</script>
<style lang="scss" scoped>
.error-panel {
  flex: 1;
  .error-footer {
    max-width: 600px;
    margin: 0 auto;
    p {
      font-size: 18px;
      font-weight: 100;
      line-height: 30px;
      margin-top: 2em;
      text-align: center;
    }
  }
}
.heading {
  color: #151515;
  font-family: 'Noto Sans Bengali UI', 'Merriweather Sans', serif;
  font-size: 36px;
  font-weight: 400;
  line-height: 42px;
  margin: 0;
  padding: 0;
  text-align: center;
  margin-top: 1.5em;
}
</style>
