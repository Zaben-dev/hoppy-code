import {
  IGetPostsQueryDto,
  SortOrder,
} from 'packages/shared/src/dtos/post/get-posts-query-dto.interface';
import { IsInt, IsOptional, IsString, Min, Max, IsEnum } from 'class-validator';

export class getPostsQueryDto implements IGetPostsQueryDto {
  @IsInt()
  @Min(1)
  @Max(20)
  first: number;

  @IsOptional()
  @IsString()
  after?: string;

  @IsOptional() @IsEnum(SortOrder) order: SortOrder = SortOrder.DESC;
}
