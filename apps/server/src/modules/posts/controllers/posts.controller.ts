import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PostsService } from '../services/posts.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { PostDto } from '../dto/post-dto';
import { CreatePostDto } from '../dto/create-post-dto';
import { PostSummaryDto } from '../dto/post-summary-dto';
import { getPostsQueryDto } from '../dto/get-posts-query-dto';

@ApiTags('posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @ApiResponse({
    status: 200,
    description: 'Return all posts',
    type: PostSummaryDto,
  })
  @Get()
  getAllPosts(@Query() query: getPostsQueryDto) {
    return this.postService.getAllPosts();
  }

  @ApiResponse({ status: 200, description: 'Return one post', type: PostDto })
  @Get(':id')
  getPost(@Param('id') id: number) {
    return this.postService.getPost(id);
  }

  @ApiResponse({ status: 200, description: 'Create post', type: CreatePostDto })
  @Post()
  createPost(@Body() dto: CreatePostDto) {
    return this.postService.createPost(dto);
  }

  @ApiResponse({ status: 200, description: 'update post' })
  @Patch(':id')
  updatePost(@Param('id') id: number) {
    this.postService.deletePost(id);
  }

  @ApiResponse({ status: 200, description: 'update post' })
  @Delete(':id')
  @HttpCode(204)
  deletePost(@Param('id') id: number) {
    this.postService.deletePost(id);
  }
}
