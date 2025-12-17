import { ICreatePostDto } from '../../../../../../packages/shared/src/dtos/post/create-post-dto.interface';
import { OmitType } from '@nestjs/swagger';
import { PostDto } from './post-dto';

export class CreatePostDto
  extends OmitType(PostDto, ['id', 'createdAt', 'updatedAt'] as const)
  implements ICreatePostDto {}
