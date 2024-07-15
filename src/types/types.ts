export interface Author {
  id: number
  name: string
}

export interface Tag {
  id: number
  name: string
}

export interface Post {
  id: number
  title: string
  description: string
}

export interface Data {
  authors: Author[]
  tags: Tag[]
  posts: Post[]
}
