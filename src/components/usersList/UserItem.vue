<template>
  <li class="user-item">
    <img
      class="user-avatar"
      :src="user.avatar"
      alt="avatar"
    >
    <router-link
      :to="{
        name: 'UserPage',
        params: {
          id: 5
        },
      }"
    >
      {{ user.first_name + ' ' + user.last_name}}
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'UserItem',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
  .user-item {
    margin-bottom: 5px;
  }

  .user-avatar {
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }
</style>
