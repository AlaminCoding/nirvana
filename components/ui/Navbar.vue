<template>
  <header>
    <div class="site-logo">
      <nuxt-link to="/">
        <img src="~/assets/img/weblogo.jpg" alt=""
      /></nuxt-link>
    </div>
    <h1 class="blog-title">
      <nuxt-link to="/">বিবিধ অপলাপ</nuxt-link>
    </h1>
    <h2 class="blog-description">
      বোধি, বিষাদ এবং নক্ষত্রজাত বাজপাখির হাহাকার
    </h2>
    <nav>
      <nuxt-link to="/">চিন্তা</nuxt-link>
      <a href="https://utsob.me">আমি</a>
      <nuxt-link to="/archive">স্মৃতি</nuxt-link>
    </nav>
  </header>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component({
  name: 'Navbar',
  components: {},
})
export default class Navbar extends Vue {}
</script>
<style lang="scss" scoped>
header {
  height: 100vh;
  width: 40vw;
  max-width: 600px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
  .site-logo {
    margin-top: 50px;
    a {
      display: block;
      height: 100px;
      img {
        height: 100px;
        width: 100px;
        border-radius: 50%;
      }
    }
  }
  .blog-title {
    font-size: 48px;
    line-height: 52px;
    margin-top: 10px;
    margin-bottom: 30px;
    padding: 0;
  }
  .blog-description {
    font-size: 24px;
    padding: 0.5em 1em;
    line-height: 1.2em;
  }
  nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10px 0px;
    font-size: 1.6em;
    a {
      margin: 0px 10px;
    }
    a.nuxt-link-active {
      color: gray;
    }
  }
  @media screen and (max-width: 1280px) {
    width: 100%;
    max-width: 100%;
    height: auto;
  }
}
</style>
