import { request } from '@/utils/request';

export async function query(params): Promise<IResponse<ITopicResponse>> {
  return request('/api/posts', { params });
}

export async function queryCurrent(id: string): Promise<IResponse<ITopic>> {
  return request(`/api/posts/${id}`);
}

export async function post(params): Promise<IResponse<ITopic>> {
  return request(`/api/posts`, { method: 'post', data: params });
}

export async function patch(id: string, params): Promise<IResponse<ITopic>> {
  return request(`/api/posts/${id}`, { method: 'patch', data: params });
}

export async function remove(id: string): Promise<IResponse<ITopic>> {
  return request(`/api/posts/${id}`, { method: 'delete' });
}
