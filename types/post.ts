export interface ICreatePost {
  content: string;
  imageUrl: string;
  userId: number;
  title: string;
}

export interface IPost extends ICreatePost {
  image: string;
  userFirstName: string;
  createdAt: string;
  id: string;
  isLiked: number;
  likes: number;
}
