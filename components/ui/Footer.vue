<template>
  <footer>
    <p class="footer-description">
      আমি উৎসব রায়। আর সব মানুষের মতই নক্ষত্রজাত। কবিতা লিখতে ভালোবাসি, কোড
      করতেও। আমার বোধি ও বিষাদ আছে। আর যদি পৃথিবীর খুব উঁচুতে ডানা মেলি, তবে
      যুদ্ধ, মৃত্যু আর ধ্বংস দেখি।
    </p>
    <p class="copyright">
      ©<span>
        {{ fullYear }}
      </span>
      <nuxt-link to="/">বিবিধ অপলাপ</nuxt-link>। সর্বসত্ব সংরক্ষিত।
    </p>
    <p>নির্বাণ থিমটি <a href="https://utsob.me">উৎসব রায়</a> কর্তৃক</p>
    <p>
      <a class="icon-ghost" href="https://ghost.org/"
        ><span class="hidden">Ghost</span></a
      >
      এর Vapor থিম থেকে পরিবর্ধিত।
    </p>
  </footer>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component({
  name: 'Footer',
  components: {},
})
export default class Footer extends Vue {
  get fullYear(): number {
    let year: number = new Date().getFullYear()
    return year
  }
}
</script>
<style lang="scss" scoped>
footer {
  margin: 4em 0 0;
  padding: 2em 0;
  text-align: center;
  width: 40vw;
  max-width: 600px;
  position: fixed;
  bottom: 0;
  left: 0;
  @media screen and (max-width: 1280px) {
    width: 100%;
    max-width: 100%;
    position: static;
    background-color: rgba(0, 0, 0, 0.05);
  }
  p {
    font-family: 'Noto Sans Bengali UI', 'Merriweather Sans', serif;
    font-weight: 300;
    font-size: 18px;
    margin: 0 auto;
    max-width: 600px;
    text-transform: uppercase;
    width: 90%;
  }
  .footer-description {
    margin-bottom: 1em;
  }
}
.icon-ghost {
  font-size: 12px;
  position: relative;
  top: -1px;
}
.hidden {
  text-indent: -9999px;
  visibility: hidden;
  display: none;
}
.icon-ghost:before {
  content: '';
}
</style>
