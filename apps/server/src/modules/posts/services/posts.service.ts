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
    const cursor = query.after ? decodeCursor(query.after) : undefined;

    const posts = await this.postsRepository.findAll({
      take: query.first,
      cursor,
      order: query.order,
    });

    const hasNextPage = posts.length > query.first;
    const data = hasNextPage ? posts.slice(0, query.first) : posts;

    return {
      data,
      pageInfo: {
        endCursor: data.length ? encodeCursor(data.at(-1)) : null,
        hasNextPage,
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
