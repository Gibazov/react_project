let dataStorage = {
  profilePage: {
    posts: [
      { id: 1, message: `Hello`, likesCount: 15 },
      { id: 2, message: `What do you thinking about?`, likesCount: 20 },
      { id: 2, message: `New level, friend`, likesCount: 20 },
      { id: 2, message: `What?`, likesCount: 20 },
    ],
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: `Dwane` },
      { id: 2, name: `Bred` },
      { id: 3, name: `Arnold` },
      { id: 4, name: `Bruse` },
      { id: 5, name: `Richard` },
      { id: 6, name: `Alex` },
      { id: 7, name: `Joshua` },
    ],
    messages: [
      { id: 1, message: `Hi` },
      { id: 2, message: `How is it going?` },
      { id: 3, message: `Listen up!` },
    ],
  },
  sideBar: {
    NavPage: {
      friends: [
        { id: 1, name: `Dwane` },
        { id: 2, name: `Bred` },
        { id: 3, name: `Arnold` },
      ],
    },
  },
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0,
  };
  dataStorage.profilePage.posts.push(newPost);
};

export default dataStorage;
