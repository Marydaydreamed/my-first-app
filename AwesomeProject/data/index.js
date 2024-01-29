export const about = {
  name: "Mary",
  img: "https://scontent.fuln4-2.fna.fbcdn.net/v/t39.30808-6/411347698_1810075389444356_5262562272482948198_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=HVGqDBPq31sAX_j-Wq-&_nc_ht=scontent.fuln4-2.fna&oh=00_AfAfZT-T_0JeRApgxAAAW00VzYIS858_q84U8q3DYzTdzg&oe=65BB6131",
  bio1: "⋆ ˚｡⋆୨🎀୧⋆ ˚｡⋆",
  followers: 230,
  following: 190,
  postNum: 6,
};
export const postData = [
  {
    id: 1,
    desc: "My first post 1",
    img: "https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userId: "maryisdaydreaming",
    likedBy: [
      {
        userId: "Nicholsdavid",
        img: "https://randomuser.me/api/portraits/med/men/75.jpg",
      },
      {
        userId: "camila.walker",
        img: "https://randomuser.me/api/portraits/women/39.jpg",
      },
      {
        userId: "wilma.coleman",
        img: "https://randomuser.me/api/portraits/women/77.jpg",
      },
    ],
    comments: [
      {
        userId: "Nicholsdavid",
        img: "https://randomuser.me/api/portraits/med/men/75.jpg",
        comment: "nice picture!",
      },
      {
        userId: "camila.walker",
        img: "https://randomuser.me/api/portraits/women/39.jpg",
        comment: "amazing",
      },
      {
        userId: "wilma.coleman",
        img: "https://randomuser.me/api/portraits/women/77.jpg",
        comment: "nice one",
      },
    ],
  },
  {
    id: 2,
    desc: "My first post 2",
    img: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userId: "maryisdaydreaming",
    likedBy: [
      {
        userId: "Nicholsdavid",
        img: "https://randomuser.me/api/portraits/med/men/75.jpg",
      },
      {
        userId: "camila.walker",
        img: "https://randomuser.me/api/portraits/women/39.jpg",
      },
      {
        userId: "wilma.coleman",
        img: "https://randomuser.me/api/portraits/women/77.jpg",
      },
    ],
    comments: [
      // {
      //   userId: "Nicholsdavid",
      //   img: "https://randomuser.me/api/portraits/med/men/75.jpg",
      //   comment: "nice picture!",
      // },
      // {
      //   userId: "camila.walker",
      //   img: "https://randomuser.me/api/portraits/women/39.jpg",
      //   comment: "amazing",
      // },
      // {
      //   userId: "wilma.coleman",
      //   img: "https://randomuser.me/api/portraits/women/77.jpg",
      //   comment: "nice one",
      // },
    ],
  },
  {
    id: 3,
    desc: "My first post 3",
    img: "https://images.unsplash.com/photo-1600758208050-a22f17dc5bb9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userId: "maryisdaydreaming",
    likedBy: [
      {
        userId: "Nicholsdavid",
        img: "https://randomuser.me/api/portraits/med/men/75.jpg",
      },
      {
        userId: "camila.walker",
        img: "https://randomuser.me/api/portraits/women/39.jpg",
      },
      {
        userId: "wilma.coleman",
        img: "https://randomuser.me/api/portraits/women/77.jpg",
      },
    ],
    comments: [
      // {
      //   userId: "Nicholsdavid",
      //   img: "https://randomuser.me/api/portraits/med/men/75.jpg",
      //   comment: "nice picture!",
      // },
      // {
      //   userId: "camila.walker",
      //   img: "https://randomuser.me/api/portraits/women/39.jpg",
      //   comment: "amazing",
      // },
      // {
      //   userId: "wilma.coleman",
      //   img: "https://randomuser.me/api/portraits/women/77.jpg",
      //   comment: "nice one",
      // },
    ],
  },
];

export const getPostById = (id) => {
  return postData.find((post) => post.id == id);
};
