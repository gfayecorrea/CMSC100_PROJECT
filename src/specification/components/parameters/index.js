export const parameters = {
  BlogParameterId: {
    name: 'blogId',
    in: 'path',
    required: true,
    description: 'This is the id of the blog',
    schema: {
      type: 'string'
    }
  }
};
