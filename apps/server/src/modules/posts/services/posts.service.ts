import { Injectable } from '@nestjs/common';
import { PostsRepositoryService } from '../repositories/posts-repository.service';
import { CreatePostDto } from '../dto/create-post-dto';
import { UpdatePostDto } from '../dto/update-post-dto';
import { getPostsQueryDto } from '../dto/get-posts-query-dto';
import { decodeCursor, encodeCursor } from 'apps/server/src/utils/cursor';

@Injectable()
export class PostsService {
  constructor(private readonly postsRepository: PostsRepositoryService) {}

  async getAllPosts(query: getPostsQueryDto) {
    const cursor = query.after ? decodeCursor(query.after) : null;

    const posts = await this.postsRepository.findAll({
      take: query.first,
      cursor,
      order: query.order,
    });

    return {
      posts,
      pageInfo: {
        endCursor: posts.length ? encodeCursor(posts.at(-1)) : null,
        hasNextPage: posts.length === query.first,
      },
    };
  }

  getPost(id: number) {
    return this.postsRepository.findOne(id);
  }

  createPost(post: CreatePostDto) {
    return this.postsRepository.create(post);
  }

  deletePost(id: number) {
    return this.postsRepository.delete(+id);
  }

  updatePost(id: number, post: UpdatePostDto) {
    return this.postsRepository.update(+id, post);
  }
}
