<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BodyComponent',
  props: {
    text: {
      type: String,
      default: 'TEXT',
      required: false
    }
    // Image: {
    //   type: String,
    //   default: 'USERS IMAGE',
    //   required: false
    // },
    // createdData: {
    //   type: String,
    //   required: true
    // },
    // postId: {
    //   type: String,
    //   default: 'avatar',
    //   required: false
    // },
    // authorId: {
    //   type: String,
    //   required: true
    // }
  }
})
</script>

<template>
  <div class="post">
    <div class="post-text">{{ text }}</div>
    <!-- <div class="post-Image">{{ Image }}</div>
    <div class="post-createdData">{{ createdData }}</div>
    <div class="post-id">{{ postId }}</div> -->
  </div>
</template>

<style scoped lang="scss">
.post {
  height: auto;
  margin: 0;
  display: flex;
  padding: 0 24px;
  background-color: aqua;
  &-text {
    width: 40%;
    background-color: rgb(2, 199, 199);
  }
  &-Image {
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 40%;
    background-color: rgb(161, 255, 255);
  }
  &-createdData {
    align-items: center;
    height: auto;
    // padding: 0;
    display: flex;
    background-color: aquamarine;
  }
  &-postId {
    background-color: rgb(0, 255, 64);
  }
}
</style>
