import { BadRequestException } from '@nestjs/common';

export function encodeCursor(post: { id: number }): string {
  try {
    return Buffer.from(JSON.stringify({ id: post.id })).toString('base64');
  } catch (e) {
    throw new Error('Invalid cursor format');
  }
}

export function decodeCursor(cursor: string): { id: number } {
  try {
    const decoded = JSON.parse(Buffer.from(cursor, 'base64').toString('utf-8'));

    return { id: decoded.id };
  } catch (e) {
    throw new BadRequestException('Invalid cursor format');
  }
}
