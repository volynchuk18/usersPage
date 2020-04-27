<template>
  <div class="users-list">
    <UserSearch />
    <br>
    <UsersAmountOnPage />
    <br>
    <br>
    <UsersPagination
      :page="page"
    />
    <ol class="users-list-container">
      <UserItem
        v-for="user in users"
        :key="user.id"
        :user="user"
      />
    </ol>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import UserItem from './UserItem.vue';
import UsersPagination from './UsersPagination.vue';
import UsersAmountOnPage from './UsersAmountOnPage.vue';
import UserSearch from './UserSearch.vue';

export default {
  name: 'UsersList',
  props: ['page'],
  components: {
    UserSearch,
    UsersAmountOnPage,
    UsersPagination,
    UserItem,
  },
  methods: {
    ...mapActions(['getUsers', 'getAllUsers']),
  },
  computed: {
    ...mapGetters(['users']),
  },
  created() {
    this.getAllUsers();
  },
  watch: {
    page: {
      handler() {
        this.getUsers(this.page);
      },
      immediate: true,
    },
  },
};
</script>

<style scoped>
  .users-list-container {
    text-align: left;
    display: inline-block;
  }
</style>
