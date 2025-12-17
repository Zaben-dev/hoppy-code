import { PostCreateInput } from './../../../../prisma/generated/prisma/models/Post';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'apps/server/prisma/generated/prisma/client';
import type { Post, Prisma } from 'apps/server/prisma';

@Injectable()
export class PostsRepositoryService {
  private prisma = new PrismaClient();

  findAll() {
    return this.prisma.post.findMany({
      select: {
        id: true,
        title: true,
        author: true,
        tags: true,
        published: true,
        summary: true,
      },
      orderBy: { createdAt: 'desc' },
      take: 10,
      skip: 20,
    });
  }

  findOne(id: number) {
    return this.prisma.post.findUnique({
      where: {
        id,
      },
    });
  }

  create(post: Prisma.PostCreateInput) {
    return this.prisma.post.create({ data: post });
  }

  update(id: number, post: Prisma.PostUpdateInput) {
    return this.prisma.post.update({
      where: {
        id,
      },
      data: post,
    });
  }

  delete(id: number) {
    return this.prisma.post.delete({
      where: {
        id,
      },
    });
  }
}
