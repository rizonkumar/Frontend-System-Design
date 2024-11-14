const state = {
  users: {
    byIds: {
      1: {
        id: 1,
        name: "Alice",
      },
      2: {
        id: 2,
        name: "Bob",
      },
    },
  },
  posts: {
    byIds: {
      101: { id: 101, title: "Post 1", userId: 1 },
      102: { id: 102, title: "Post 2", userId: 1 },
      103: { id: 103, title: "Post 3", userId: 2 },
    },
  },
};

// We will access
state.users.byIds[1]; // O(N)

/**
Normalised Data
1. Store the users and posts separately
2. Store only the ids of the posts in the users data
3. Store all the users and posts with respect to IDs and maintain a list of all
IDs for each entities (i.e. for both users and posts)
 */
