declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.css';
declare module '*.scss';
declare module '*.less';

/**
 * 响应
 */
interface IResponse<T> {
  msg: string;
  data: T;
  code: number;
}

/**
 * 分页
 */
type Pagination = {
  current: number;
  pageSize: number;
};

interface ITopicResponse {
  list: ITopic[];
  pagination: Pagination;
}

interface ITopic {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface ICommentResponse {
  list: IComment[];
  pagination: Pagination;
}

interface IComment {
  postId: number;
  id?: number;
  name: string;
  email: string;
  body: string;
}
