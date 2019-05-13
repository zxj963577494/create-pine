import { createModel } from '@rematch/core';

import { topicService } from '@/services';

export type TopicState = {
  data: {
    list: ITopic[];
    current: ITopic;
    pagination: Pagination;
  };
};

export const topic = createModel({
  state: {
    data: {
      list: [] as ITopic[],
      pagination: {
        total: 0,
        pageSize: 10,
        current: 1,
      },
      current: {} as ITopic,
    },
  },
  reducers: {
    save(state: TopicState, payload: IResponse<ITopicResponse>): TopicState {
      return {
        ...state,
        data: {
          ...state.data,
          ...payload.data,
          list: payload.data.list.map(data => ({
            ...data,
            key: data.id,
          })),
        },
      };
    },
  },
  effects: dispatch => ({
    async fetchAsync(payload) {
      const response = await topicService.query(payload);
      dispatch.topic.save(response);
    },
    async addAsync(payload) {
      await topicService.post(payload);
    },
    async updateAsync(payload) {
      const { id, ...params } = payload;
      await topicService.patch(id, params);
    },
    async deleteAsync(payload) {
      const { id } = payload;
      await topicService.post(id);
    },
  }),
});
