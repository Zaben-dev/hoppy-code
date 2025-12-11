import { PostsService } from './services/posts.service';
import { Module } from '@nestjs/common';
import { PostsController } from './controllers/posts.controller';
import { PostsRepositoryService } from './repositories/posts-repository.service';

@Module({

  controllers: [PostsController],
  providers: [PostsRepositoryService, PostsService],
})
export class PostsModule {}
