<template>
  <section>
    <nav class="pagination-button">
      <nuxt-link
        :to="prevLink(pageNo)"
        :class="{ 'disable-link': pageNo <= 1 }"
      >
        <fa :icon="['fas', 'angle-left']" />
        পূর্ববর্তী
      </nuxt-link>
      <p>
        পৃষ্ঠা {{ getBnNumbers(pageNo) }} (মোট
        {{ getBnNumbers(Math.ceil(pageLength / 5)) }} পৃষ্ঠা)
      </p>
      <nuxt-link
        :to="`/page/${pageNo + 1}`"
        :class="{ 'disable-link': !nextPage }"
      >
        পরবর্তী
        <fa :icon="['fas', 'angle-right']" />
      </nuxt-link>
    </nav>
    <nav class="pagination-numbers">
      <nuxt-link
        v-for="(number, idx) in getNumbersArray(Math.ceil(pageLength / 5))"
        :key="idx"
        :to="`/page/${idx + 1}`"
        :class="{ active: pageNo === idx + 1 }"
        >{{ number }}
      </nuxt-link>
    </nav>
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import getBnNumbers from '~/utils/getBnNumbers'
@Component({
  name: 'PaginationBlock',
  components: {},
})
export default class PaginationBlock extends Vue {
  @Prop() pageNo: any
  @Prop() pageLength: any
  @Prop() nextPage: any
  getBnNumbers = getBnNumbers

  prevLink(pageNumber: number) {
    return pageNumber === 2 ? '/' : `/page/${pageNumber - 1}`
  }

  getNumbersArray(n: number) {
    let i = 1
    let numbersArray: string[] = []
    for (i; i <= n; i++) {
      numbersArray.push(getBnNumbers(i))
    }
    return numbersArray
  }
}
</script>
<style lang="scss" scoped></style>
