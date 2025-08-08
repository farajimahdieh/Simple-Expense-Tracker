import User from "./types";




export const users: User[] = [
  {
    id: 1,
    name: "Ali",
    groups: [1, 2]
  },

  {
    id: 2,
    name: "Sara",
    groups: [1,2]
  },
    {
    id: 3,
    name: "Mahya",
    groups: [1,2]
  }
];


export const findUserById = (userid : number) => {


    return users.find(x => x.id === userid);
}


