export const blog = {
  '/blog/:blogId': {
    get: {
      summary: 'Get a blog',
      operationId: 'getBlog',
      parameters: [
        {
          $ref: '#/components/parameters/BlogParameterId'
        }
      ],
      responses: {
        200: {
          description: 'A blog object',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/BlogObject'
              }
            }
          }
        }
      }
    },
    put: {
      summary: 'Update a blog',
      operationId: 'updateBlog',
      parameters: [
        {
          $ref: '#/components/parameters/BlogParameterId'
        }
      ],
      requestBody: {
        description: 'THe request body for blog',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/BlogRequestObject'
            }
          }
        },
        required: true
      },
      responses: {
        200: {
          description: 'A blog object',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/BlogObject'
              }
            }
          }
        }
      }
    },
    delete: {
      summary: 'Delete a blog',
      operationId: 'deleteBlog',
      parameters: [
        {
          $ref: '#/components/parameters/BlogParameterId'
        }
      ],
      responses: {
        200: {
          description: 'Successful Response',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  success: {
                    type: 'boolean'
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  '/blog': {
    post: {
      summary: 'Create a blog',
      operationId: 'createBlog',
      requestBody: {
        description: 'The request body for blog.',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/BlogRequestRequiredObject'
            }
          }
        },
        required: true
      },
      responses: {
        200: {
          description: 'A blog object',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/BlogObject'
              }
            }
          }
        }
      }
    },
    get: {
      summary: 'Get many blog',
      operationId: 'getManyBlog',
      parameters: [
        {
          name: 'limit',
          in: 'query',
          description: 'The number of items returned',
          schema: {
            type: 'number'
          }
        }
      ],
      responses: {
        200: {
          description: 'A blog object',
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/BlogObject'
                }
              }
            }
          }
        }
      }
    }
  }
};
