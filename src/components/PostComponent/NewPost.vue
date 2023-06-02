<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'NewPost',
  data() {
    return {
        NewPostList:[],
        placeholderInput: '',
        visible : false,
        HideNewPostBtn : true,
        HidenPostForm : true,
    }
  },

  mounted() {

   },

  methods: {


    AddNewPostText(){
        if ( this.placeholderInput.length <3 ) {return};
        this.visible=!this.visible 
        this.HideNewPostBtn=!this.HideNewPostBtn
        !this.NewPostList.unshift({
          text: this.placeholderInput,
        });
        this.placeholderInput='';
    },

    showPostForm(){
      this.visible=!this.visible;
      this.HideNewPostBtn=!this.HideNewPostBtn
        
    },

    RemovePostText(){
      if (this.placeholderInput === '' ) {
        this.HideNewPostBtn=!this.HideNewPostBtn
        this.visible=!this.visible
      }
      if(this.placeholderInput.length >= 1 ){
        let result = confirm("Вы уверены?")
        if(result){
          this.HideNewPostBtn=!this.HideNewPostBtn
          this.visible=!this.visible
          this.placeholderInput=''
        }else{
          
        }
      }
    }

    
}})

</script>


<template>
  <button class="btn-newPost" v-show="HideNewPostBtn" @click="showPostForm" >Добавить Пост</button>
  <div class="AddPostForm" v-show="visible, HidenPostForm">  
    <input type="text" v-model="placeholderInput" v-on:keypress.enter="AddNewPostText">
    <button class="btn-add" @click="AddNewPostText"  >Опубликовать</button>
    <button class="btn-remove" @click="RemovePostText" >Очистить</button>
  </div>

<li v-for="(post) in NewPostList">
  <span>
    {{ post.text }}
  </span>
</li>


</template>

<style scoped lang="scss">

</style>