import { IPostDto } from './post-dto.interface';

export interface ICreatePostDto
  extends Omit<IPostDto, 'id' | 'createdAt' | 'updatedAt'> {}
