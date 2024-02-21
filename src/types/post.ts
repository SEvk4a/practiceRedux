export interface IPost {
  id: number;
  title: string;
}

export type InitialState = {
  posts: IPost[];
  loading: boolean;
  error?: string;
};
