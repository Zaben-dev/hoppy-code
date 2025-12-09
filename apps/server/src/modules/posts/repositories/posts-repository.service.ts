import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'apps/server/prisma/generated/prisma/client';
import type { Post } from 'apps/server/prisma';

@Injectable()
export class PostsRepositoryService {
  private prisma = new PrismaClient();

  findAll() {
    return this.prisma.post.findMany();
  }

  create(post: Post) {
    return this.prisma.post.create({ data: post });
  }
}
