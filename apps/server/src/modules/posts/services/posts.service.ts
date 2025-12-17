import { Injectable } from '@nestjs/common';
import { PostsRepositoryService } from '../repositories/posts-repository.service';
import { PostDto } from '../dto/post-dto';
import { CreatePostDto } from '../dto/create-post-dto';
import { UpdatePostDto } from '../dto/update-post-dto';

@Injectable()
export class PostsService {
  constructor(private readonly postsRepository: PostsRepositoryService) {}

  getAllPosts() {
    return this.postsRepository.findAll();
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
