import {
  IGetPostsQueryDto,
  SortOrder,
} from 'packages/shared/src/dtos/post/get-posts-query-dto.interface';
import { IsInt, IsOptional, IsString, Min, Max, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class getPostsQueryDto implements IGetPostsQueryDto {
  @ApiProperty()
  @IsInt()
  @Min(1)
  @Max(20)
  first: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  after?: string;

  @ApiProperty({ required: false, enum: SortOrder })
  @IsOptional()
  @IsEnum(SortOrder)
  order: SortOrder = SortOrder.DESC;
}
