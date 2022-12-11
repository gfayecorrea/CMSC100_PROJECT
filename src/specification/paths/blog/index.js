export const blog = {
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
