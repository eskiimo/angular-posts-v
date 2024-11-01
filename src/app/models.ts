export interface User {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  age?: number; // Optional property
}

export interface Post {
  title: string;
  body: string;
}
