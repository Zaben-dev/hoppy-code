import { PostsController } from './../modules/posts/controllers/posts.controller';
import { Module } from '@nestjs/common';
import { PostsService } from '../modules/posts/services/posts.service';

@Module({
  imports: [],
  controllers: [PostsController],
  providers: [PostsService],
})
export class AppModule {}
