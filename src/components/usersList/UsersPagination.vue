<template>
  <div class="users-pagination">
    <router-link
      v-if="Number(page) !== 1"
      class="page"
      :to="{
        name: 'UsersList',
        params: {
          page: page - 1
        }
      }"
    >
      Prev
    </router-link>
    <span
      v-else
      class="page disabled"
    >
      Prev
    </span>
    <router-link
      class="page"
      :active-class="'active'"
      v-for="page in pagesArray"
      :key="page"
      :to="{
        name: 'UsersList',
        params: {
          page: page
        }
      }"
    >
      {{ page }}
    </router-link>
    <router-link
      v-if="Number(page) !== Number(totalPages)"
      class="page"
      :to="{
        name: 'UsersList',
        params: {
          page: +page + 1
        }
      }"
    >
      Next
    </router-link>
    <span
      v-else
      class="page disabled"
    >
      Next
    </span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'UsersPagination',
  props: ['page'],
  computed: {
    ...mapGetters(['totalPages']),
    pagesArray() {
      // eslint-disable-next-line array-callback-return,no-plusplus,no-param-reassign
      return Array.from(Array(this.totalPages).keys()).map((i) => ++i);
    },
  },
};
</script>

<style scoped lang="scss">
  .users-pagination {
    display: flex;
    justify-content: center;
  }

  .active {
    color: blue;
  }

  .page {
    margin: 0 5px;
    &:hover {
      color: blue;
    }
  }

  .disabled {
    opacity: 0.8;
    &:hover {
      color: inherit;
    }
  }
</style>
