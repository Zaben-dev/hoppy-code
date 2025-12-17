import { IPostDto } from './post-dto.interface';

export interface IUpdatePostDto
  extends Partial<Omit<IPostDto, 'id' | 'createdAt' | 'updatedAt'>> {}
