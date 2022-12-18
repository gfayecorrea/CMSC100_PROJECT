export const parameters = {
  BlogParameterId: {
    name: 'blogId',
    in: 'path',
    required: true,
    description: 'This is the id of the blog',
    schema: {
      type: 'string'
    }
  },
  CommentParameterId: {
    name: 'commentId',
    in: 'path',
    required: true,
    description: 'This is the id of the comment',
    schema: {
      type: 'string'
    }
  },
  UserParameterId: {
    name: 'userId',
    in: 'path',
    required: true,
    description: 'This is the id of the user',
    schema: {
      type: 'string'
    }
  }
};
