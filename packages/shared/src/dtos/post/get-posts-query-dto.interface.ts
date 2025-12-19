export interface IGetPostsQueryDto {
  first: number;
  after?: string;
  order: SortOrder;
}

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}
