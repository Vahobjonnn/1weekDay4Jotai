import axios from "axios";
import { create } from "zustand";
export const api="https://to-dos-api.softclub.tj/api/to-dos";
export const useTodo= create((set,get)=> ({
    data:[],
    getData:async ()=> {
        try {
           let {data}=await axios.get(api);
           set(()=> ({data:data.data}))
        } catch (error) {
           console.log(error)
        }
    },
    deleteId:async (id)=> {
        try {
            await axios.delete(api+"?id="+id)
            get().getData()
        } catch (error) {
            console.log(error)
        }
    },
    addUser:async (user) => {
        try {
            await axios.post(api,user)
            get().getData()
        } catch (error) {
            console.log(error)
        }
    },
    editUser:async (user) => {
        try {
            await axios.put(api,user)
            get().getData()
        } catch (error) {
            console.log(error)
        }
    }
}))