import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostsService } from '../services/posts.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { PostDto } from '../dto/post.dto';

@ApiTags('posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @ApiResponse({ status: 200, description: 'Return all posts', type: PostDto })
  @Get()
  getAllPosts() {
    return this.postService.getAllPosts();
  }

  @Post()
  createPost(@Body() dto: PostDto) {
    return this.postService.createPost(dto);
  }
}
