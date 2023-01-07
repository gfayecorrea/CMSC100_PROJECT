export const user = {
  '/user/:userId': {
    get: {
      summary: 'See user data',
      operationId: 'getUser',
      parameters: [
        {
          $ref: '#/components/parameters/UserParameterId'
        }
      ],
      responses: {
        200: {
          description: 'A user object',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UserObject'
              }
            }
          }
        }
      },
      security: [
        {
          cookieAuth: []
        }
      ]
    },
    put: {
      summary: 'Change own user data',
      operationId: 'updateUser',
      parameters: [
        {
          $ref: '#/components/parameters/UserParameterId'
        }
      ],
      requestBody: {
        description: 'The request body for user',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ChangeUserRequestObject'
            }
          }
        },
        required: true
      },
      responses: {
        200: {
          description: 'A user object',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UserObject'
              }
            }
          }
        }
      },
      security: [
        {
          cookieAuth: []
        }
      ]
    }
  },
  '/register': {
    post: {
      summary: 'Register a new user',
      operationId: 'registerUser',
      requestBody: {
        $ref: '#/components/requestBodies/RequestNewUser'
      },
      responses: {
        200: {
          $ref: '#/components/responses/SuccessfulUserResponse'
        }
      },
      security: [
        {}
      ]
    }
  },
  '/login': {
    post: {
      summary: 'Logs in a user',
      operationId: 'login',
      requestBody: {
        $ref: '#/components/requestBodies/LoginUser'
      },
      responses: {
        200: {
          $ref: '#/components/responses/SuccessfulResponse'
        }
      },
      security: [
        {}
      ]
    }
  },
  '/logout': {
    get: {
      summary: 'Logs out a user',
      operationId: 'logout',
      responses: {
        200: {
          $ref: '#/components/responses/SuccessfulResponse'
        }
      },
      security: [
        {
          cookieAuth: []
        }
      ]
    }
  },
  '/change-password': {
    post: {
      summary: 'Change User Password',
      operationId: 'changePassword',
      requestBody: {
        description: 'The request body for user',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ChangePasswordObject'
            }
          }
        },
        required: true
      },
      responses: {
        200: {
          description: 'A user object',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SuccessfulObject'
              }
            }
          }
        }
      },
      security: [
        {
          cookieAuth: []
        }
      ]
    }
  }
};
