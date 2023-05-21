<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'PostComponent',
  props: {
    userId: {
      type: String,
      required: true
    },
    fName: {
      type: String,
      required: true
    },
    sName: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      default: 'avatar',
      required: false
    }
  }
})
</script>

<template>
<div class="author">
  <div class="author-avatar">{{ avatar }}</div>
  <div class="author-fullname">
    <div class="author-fName">{{ fName }}</div>
    <div class="author-sName">{{ sName }}</div>
  </div>
  <div class="author-id">{{ userId }}</div>
</div>


</template>

<style scoped lang="scss">
.author{
  width: auto;
  display: flex;
  padding: 12px 24px;
  border-radius: 5px 5px;
  background-color: antiquewhite;
  // margin-bottom: 12px;
  &-id{
    background-color: rebeccapurple;
  }
  &-avatar{
    justify-content: center;
    align-items: center;
    padding: 25px 25px;
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgb(233, 218, 15);
    margin: auto 23px ;
  }
  &-fullname{
    // margin: auto 12px;
    height: 50px;
    width: 80px;
    background-color: rgb(221, 221, 3);
    align-items: center;
    justify-content: center;
    padding: 25px 0;
    
  }
}

</style>
