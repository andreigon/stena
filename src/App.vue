<script lang="ts">
import { defineComponent } from 'vue'
import PostComponent from '@/components/PostComponent/index.vue'
import { AuthorItem, PostsItem } from '@/types/posts'
import NewPost from './components/PostComponent/NewPost.vue'

interface componentData {
  authors: Array<AuthorItem>
  posts: Array<PostsItem>
}

export default defineComponent({
  name: 'ComponentData',

  components: {
    PostComponent,
    NewPost
    //  your component
  },
  data(): componentData {
    return {
      authors: [
        {
          userId: '1',
          fName: 'Борис',
          sName: 'Павлов',
          avatar: 'Avatar 1'
        },
        {
          userId: '2',
          fName: 'Павел',
          sName: 'Букин',
          avatar: 'Avatar 2'
        }
      ],

      posts: [
        {
          text: 'Что такое TypeScript? \ TypeScript - это расширенная версия JavaScript. То есть он содержит в себе все то же самое, что и JavaScript, но с некоторыми дополнениями. Главная причина использовать TypeSciprt - это возможность добавить статическую типизацию к JavaScript. Тип переменной со статической типизацией не может быть изменен после ее объявления. Это может предотвратить БОЛЬШОЕ количество багов. С другой стороны, JavaScript - динамически типизированный язык, то есть типы переменных могуть изменяться.',

          Image: 'poster.jpg',
          createdData: '18.05.2023',
          postId: '5',

          authorId: '2'
        },
        {
          text: 'Vue.js \  JavaScript-фреймворк с открытым исходным кодом для создания пользовательских интерфейсов. Легко интегрируется в проекты с использованием других JavaScript-библиотек. Может функционировать как веб-фреймворк для разработки одностраничных приложений в реактивном стиле.',
          Image: '',
          createdData: '15.05.2023',
          postId: '6',
          authorId: '1'
        },
        {
          text: 'JavaScript \ Это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы. ',
          Image: 'poster.jpg',
          createdData: '10.05.2023',
          postId: '7',
          authorId: '2'
        }
      ]
    }
  },
  methods: {
    getAuthor(authorId: string): AuthorItem {
      return this.authors.find((author) => author.userId === authorId)
    }

    // AddNewPostText(NewPostText: string): {
    //   return
    // }
    // getPost(postId: string): PostsItem{
    //   return this.posts.find((post) => post.postId === pos)
    // }
  }
})
</script>

<template>
  <div>
    <PostComponent
      v-for="post in posts"
      :key="post.postId"
      :post="post"
      :author="getAuthor(post.authorId)"
    />
  </div>
  <NewPost {{NewPost}} />
</template>

<style scoped lang="scss"></style>
