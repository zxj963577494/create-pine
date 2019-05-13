import { createModel } from '@rematch/core';

import { commentService } from '@/services';

export type CommentState = {
  data: {
    list: IComment[];
    current: IComment;
    pagination: Pagination;
  };
};

export const comment = createModel({
  state: {
    data: {
      list: [] as IComment[],
      pagination: {
        total: 0,
        pageSize: 10,
        current: 1,
      },
      current: {} as IComment,
    },
  },
  reducers: {
    save(state: CommentState, payload: IResponse<ICommentResponse>): CommentState {
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
      const response = await commentService.query(payload);
      dispatch.comment.save(response);
    },
  }),
});
