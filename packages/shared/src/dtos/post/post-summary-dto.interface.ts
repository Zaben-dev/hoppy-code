import { IPostDto } from './post-dto.interface';

export interface IPostSummaryDto extends Omit<IPostDto, 'content'> {}
