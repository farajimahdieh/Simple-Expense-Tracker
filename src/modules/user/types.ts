
type User = {
    name : string,
    id : number,
    groups: number[]
}


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
export default User