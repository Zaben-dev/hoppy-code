import { PostCreateInput } from './../../../../prisma/generated/prisma/models/Post';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'apps/server/prisma/generated/prisma/client';
import type { Post, Prisma } from 'apps/server/prisma';
import { SortOrder } from 'packages/shared/src/dtos/post/get-posts-query-dto.interface';

@Injectable()
export class PostsRepositoryService {
  private prisma = new PrismaClient();

  findAll(params: { take: number; cursor?: { id: number }; order: SortOrder }) {
    return this.prisma.post.findMany({
      select: {
        id: true,
        title: true,
        author: true,
        tags: true,
        published: true,
        summary: true,
      },
      take: params.take,
      skip: params.cursor ? 1 : 0,
      cursor: params.cursor,
      orderBy: [{ createdAt: params.order }, { id: params.order }],
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
