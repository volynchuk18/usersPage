<template>
  <label>
    <select
      v-model="selected"
      class="users-amount-on-page"
    >
      <option>5</option>
      <option>10</option>
      <option>20</option>
    </select>
  </label>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'UsersAmountOnPage',
  data() {
    return {
      selected: 5,
    };
  },
  mounted() {
    this.selected = this.perPage;
  },
  computed: {
    ...mapGetters(['perPage']),
  },
  methods: {
    ...mapMutations(['setPerPage']),
    ...mapActions(['getUsers']),
  },
  watch: {
    async selected(to) {
      this.setPerPage(to);
      await this.getUsers();
      const isInitialPage = this.$router.currentRoute.fullPath === '/1';
      if (!isInitialPage) {
        this.$router.push({
          path: '1',
        });
      }
    },
  },
};
</script>

<style scoped>
  .users-amount-on-page {
  }
</style>
