<template>
  <ul class="user-page">
    <div class="link" @click="$router.go(-1)">
      Back
    </div>
    <br>
    <li
      v-for="(data, index) in userData"
      :key="index"
    >
      {{ data[0] }}: {{ data[1] }}
    </li>
    <li>
      avatar:
      <img
        class="user-avatar"
        alt="avatar"
        :src="userAvatar"
      >
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'UserPage',
  props: ['id'],
  computed: {
    ...mapGetters(['allUsers']),
    user() {
      return this.allUsers?.find((user) => user.id === +this.id);
    },
    userData() {
      return this.user && Object.entries(this.user).filter((arr) => arr[0] !== 'avatar');
    },
    userAvatar() {
      return this.user?.avatar;
    },
  },
};
</script>

<style scoped lang="scss">
  .user-page {
    text-align: left;
    display: inline-flex;
    flex-direction: column;
  }

  .link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
    color: blue;
  }

  .user-avatar {
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }
</style>
