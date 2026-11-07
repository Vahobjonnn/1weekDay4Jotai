import { create } from "zustand";

export const useTodo= create((set)=> ({
    data:[{id: 1, name:"vahobjon", job:"student"}, {id:2, name:"Muhammad", job:"Farmer"}],
    count:0,
    increment:()=> set((state)=> ({count:state.count+1})),
    deleteUser:(id)=> set((state)=> ({data:state.data.filter((el)=> el.id != id)}) ),
    addUser:(user)=> set((state)=> ({data:[...state.data,user]})),
    editUser:(user)=> set((state)=> ({data:state.data.map((el)=> el.id==user.id ? user : el)}))
}))