import { IUpdatePostDto } from '../../../../../../packages/shared/src/dtos/post/update-post-dto.interface';
import { OmitType, PartialType } from '@nestjs/swagger';
import { PostDto } from './post-dto';

export class UpdatePostDto extends PartialType(
  OmitType(PostDto, ['id', 'createdAt', 'updatedAt'] as const)
) implements IUpdatePostDto {}
