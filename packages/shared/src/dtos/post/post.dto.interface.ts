export interface PostDto {
  id: number;
  title: string;
  content: string;
  author?: string;
  tags?: string[];
  published?: boolean;
  summary?: string;
  createdAt: Date;
  updatedAt: Date;
}
