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
      },
      isDone: {
        type: 'boolean'
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
      id: {
        type: 'string'
      },
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
  UserChangePassword: {
    type: 'object',
    properties: {
      password: {
        type: 'string'
      }
    }
  },
  UpdateUserData: {
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
