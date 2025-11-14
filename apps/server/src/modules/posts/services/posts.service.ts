import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  getAllPosts() {
    return 'posty';
  }
}
