const typedefs = `
  type User {
    _id: ID
    username: String
    email: String
    profile: String
    trips: [Trip]
    friends: [User]
  }

  type Trip {
    _id: ID
    location: String
    journalEntry: String
    comments: [Comment]
  }

    type Comment {
    _id: ID
    comment: String
    createdDate: String
    username: String
  }

  type Auth {
    token: String
    user: User
  }

  type Query {
    users: [User]
    user(id: ID!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
    addComment(commentText: String!): Comment
    removeComment(commentId: ID!): Comment
  }
`;

module.exports = typedefs;
