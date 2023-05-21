<script lang="ts">
import { PropType, defineComponent } from 'vue'
import { AuthorItem, PostsItem } from '@/types/posts'
import AuthorComponentVue from '@/components/PostComponent/AuthorComponent.vue'
import BodyComponent from './BodyComponent.vue'

export default defineComponent({
  name: 'PostComponent',
  components: { AuthorComponentVue, BodyComponent },
  props: {
    post: {
      type: Object as PropType<PostsItem>,
      // default: ()=>(),
      require: true
    },
    author: {
      type: Object as PropType<AuthorItem>,
      require: true
    }
  }
})
</script>

<template>
  <AuthorComponentVue
    :user-id="author.userId"
    :f-name="author.fName"
    :s-name="author.sName"
    :avatar="author.avatar"
  
  /> 
  <BodyComponent 
    :text="post.text"
    :created-data="post.createdData"
    :author-id="post.authorId"
  />
</template>

<style scoped lang="scss">
</style>
