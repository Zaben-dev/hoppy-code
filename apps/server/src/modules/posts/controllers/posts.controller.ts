import { PostDto } from './../../../../../../packages/shared/src/dtos/post/post.dto.interface';
import { Controller, Get } from '@nestjs/common';
import { PostsService } from '../services/posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Get()
  getAllPosts(): PostDto[] {
    return this.postService.getAllPosts();
  }
}
