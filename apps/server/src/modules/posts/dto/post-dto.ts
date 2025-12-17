import { IPostDto } from 'packages/shared/src/dtos/post/post-dto.interface';
import { ApiProperty } from '@nestjs/swagger';

export class PostDto implements IPostDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  title: string;
  @ApiProperty()
  content: string;
  @ApiProperty()
  author: string;
  @ApiProperty({ required: false, type: [String] })
  tags?: string[];
  @ApiProperty({ required: false })
  published?: boolean;
  @ApiProperty({ required: false })
  summary?: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}
