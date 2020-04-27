<template>
  <form @submit.prevent="" class="users-search">
    <input placeholder="Search User" v-model="userName">
    <ol>
      <UserItem
        v-for="user in foundUsers"
        :key="user.id"
        :user="user"
      />
    </ol>
  </form>
</template>

<script>
import { mapGetters } from 'vuex';
import UserItem from './UserItem.vue';

export default {
  name: 'UserSearch',
  components: { UserItem },
  data() {
    return {
      userName: null,
    };
  },
  computed: {
    ...mapGetters(['allUsers']),
    foundUsers() {
      return this.allUsers?.filter((user) => user.first_name === this.userName?.trim());
    },
  },
};
</script>

<style scoped>
  .users-search {
    display: inline-flex;
    flex-direction: column;
  }
</style>
