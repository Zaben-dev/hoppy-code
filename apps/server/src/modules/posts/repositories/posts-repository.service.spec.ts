import { Test, TestingModule } from '@nestjs/testing';
import { PostsRepositoryService } from './posts-repository.service';

describe('PostsRepositoryService', () => {
  let service: PostsRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsRepositoryService],
    }).compile();

    service = module.get<PostsRepositoryService>(PostsRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
