import { IPostSummaryDto } from './../../../../../../packages/shared/src/dtos/post/post-summary-dto.interface';
import { OmitType } from '@nestjs/swagger';
import { PostDto } from './post-dto';

export class PostSummaryDto extends OmitType(PostDto, ['content'] as const) implements IPostSummaryDto {}
