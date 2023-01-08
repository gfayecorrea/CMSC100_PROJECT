export const schemas = {
  BlogObject: {
    type: 'object',
    properties: {
      id: {
        type: 'string'
      },
      title: {
        type: 'string'
      },
      description: {
        type: 'string'
      },
      isDone: {
        type: 'boolean'
      },
      username: {
        type: 'string'
      },
      comments: {
        type: 'object',
        properties: {
          id: {
            type: 'string'
          },
          description: {
            type: 'string'
          },
          username: {
            type: 'string'
          },
          createdDate: {
            type: 'number'
          },
          updatedDate: {
            type: 'number'
          }
        }
      },
      createdDate: {
        type: 'number'
      },
      updatedDate: {
        type: 'number'
      }
    }
  },
  BlogRequestRequiredObject: {
    type: 'object',
    properties: {
      title: {
        type: 'string'
      },
      description: {
        type: 'string'
      },
      isDone: {
        type: 'boolean'
      }
    },
    required: [
      'title',
      'description'
    ]
  },
  BlogRequestObject: {
    type: 'object',
    properties: {
      title: {
        type: 'string'
      },
      description: {
        type: 'string'
      },
      isDone: {
        type: 'boolean'
      }
    }
  },
  ViewBlogObject: {
    type: 'object',
    properties: {
      id: {
        type: 'string'
      },
      title: {
        type: 'string'
      },
      description: {
        type: 'string'
      },
      isDone: {
        type: 'boolean'
      },
      username: {
        type: 'string'
      },
      comments: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string'
            },
            description: {
              type: 'string'
            },
            username: {
              type: 'string'
            },
            createdDate: {
              type: 'number'
            },
            updatedDate: {
              type: 'number'
            }
          }
        }
      },
      createdDate: {
        type: 'number'
      },
      updatedDate: {
        type: 'number'
      }
    }
  },
  CommentObject: {
    type: 'object',
    properties: {
      id: {
        type: 'string'
      },
      description: {
        type: 'string'
      },
      isDone: {
        type: 'boolean'
      },
      username: {
        type: 'string'
      },
      createdDate: {
        type: 'number'
      },
      updatedDate: {
        type: 'number'
      }
    }
  },
  CommentRequestRequiredObject: {
    type: 'object',
    properties: {
      description: {
        type: 'string'
      }
    },
    required: [
      'description'
    ]
  },
  CommentRequestObject: {
    type: 'object',
    properties: {
      description: {
        type: 'string'
      },
      isDone: {
        type: 'boolean'
      }
    }
  },
  NewUserObject: {
    type: 'object',
    properties: {
      username: {
        type: 'string'
      },
      password: {
        type: 'string'
      },
      firstName: {
        type: 'string'
      },
      lastName: {
        type: 'string'
      }
    }
  },
  UserObject: {
    type: 'object',
    properties: {
      username: {
        type: 'string'
      },
      firstName: {
        type: 'string'
      },
      lastName: {
        type: 'string'
      },
      createdDate: {
        type: 'number'
      },
      updatedDate: {
        type: 'number'
      }
    }
  },
  LoginObject: {
    type: 'object',
    properties: {
      username: {
        type: 'string'
      },
      password: {
        type: 'string'
      }
    }
  },
  SuccessfulObject: {
    type: 'object',
    properties: {
      success: {
        type: 'boolean'
      }
    }
  },
  UserRequestObject: {
    type: 'object',
    properties: {
      username: {
        type: 'string'
      },
      firstName: {
        type: 'string'
      },
      lastName: {
        type: 'string'
      }
    }
  },
  ChangePasswordObject: {
    type: 'object',
    properties: {
      password: {
        type: 'string'
      }
    }
  },
  ChangeUserRequestObject: {
    type: 'object',
    properties: {
      firstName: {
        type: 'string'
      },
      lastName: {
        type: 'string'
      }
    }
  }
};
