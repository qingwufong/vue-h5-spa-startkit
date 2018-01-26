<template>
  <div>
    <!-- <v-title title="Vue 组件化"></v-title>
    <v-button @click="handleClick">点击按钮</v-button>
    <p>
      <img src="./assets/images/image.jpg" style="width: 200px">
    </p> -->
    <router-view></router-view>
  </div>
</template>
<script>
import vTitle from './components/title.vue';
import vButton from './components/button.vue';

export default {
  components: {
    vTitle,
    vButton
  },
  methods: {
    handleClick(e) {
      console.log(e);
    }
  }
}
</script>
<style scoped>
  /* div {
    color: #f60;
    font-size: 24px;
  } */
</style>


