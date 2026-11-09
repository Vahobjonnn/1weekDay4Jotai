import { atom } from "jotai";

export const dataJotai=atom([
    {
        id:1,
        name:"Vahobjon",
        job:"Farmer"
    },
])


export const deleteId=atom(null, (get,set,id)=> {
    set(dataJotai, get(dataJotai).filter((el)=> el.id!==id))
})

export const addUser=atom(null, (get,set,user)=> {
  set(dataJotai, [...get(dataJotai),user])
} )

export const editUserJotai=atom(null,(get,set,user)=>{
    set(dataJotai,  get(dataJotai).map((el)=> el.id==user.id ? user : el))
})