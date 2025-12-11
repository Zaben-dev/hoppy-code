import { Injectable} from '@nestjs/common';
import { PostsRepositoryService } from '../repositories/posts-repository.service';
import { PostDto } from '../dto/post.dto';

@Injectable()
export class PostsService {
  constructor(private readonly postsRepository: PostsRepositoryService){}

  getAllPosts() {
    return this.postsRepository.findAll();
  }
  
  createPost(post: PostDto) {
    return this.postsRepository.create(post)
  }
}
