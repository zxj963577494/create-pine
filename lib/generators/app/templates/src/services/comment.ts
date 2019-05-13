import { request } from '@/utils/request';

export async function query(params): Promise<IResponse<ICommentResponse>> {
  return request('/api/comments', { params });
}

export async function queryByPostId(id: string): Promise<IResponse<ICommentResponse>> {
  return request(`/api/posts/${id}/comments`);
}
