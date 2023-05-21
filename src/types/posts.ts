export interface AuthorItem {
  userId: string
  fName: string
  sName: string
  avatar?: string
}

export interface PostsItem {
  text?: string
  Image?: string
  createdData: string
  postId: string
  authorId: string
}
