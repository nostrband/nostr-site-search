export interface Author {
  id: string
  name: string
  image: string
  url: string
}

export interface Tag {
  id: string
  name: string
  url: string
}

export interface Post {
  id: string
  title: string
  description: string
  url: string
}

export interface Data {
  authors: Author[]
  tags: Tag[]
  posts: Post[]
}
