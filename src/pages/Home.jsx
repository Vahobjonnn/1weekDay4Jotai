import React, { useEffect, useState } from "react";
import { useTodo } from "@/components/todo.js"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
const Home = () => {
  const { data, getData, addUser, deleteId,editUser } = useTodo();
  const [editUs, setEditUs] = useState({})
  function handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData()
    formData.append("Images", e.target.inpImg.files[0])
    formData.append("Name", e.target.name.value);
    formData.append("Description", e.target.desk.value);
    addUser(formData)
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <Dialog>
        <DialogTrigger>  <button className="bg-blue-700 ml-14 p-2 text-white m-4">AddUser</button></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              <form action="" onSubmit={handleSubmit} className="flex flex-col gap-5">
                <Input name="inpImg" placeholder="" type="file" />
                <Input name="name" placeholder="Name" />
                <Input name="desk" placeholder="Desk" />
                <DialogClose><button type="submit">Submit</button></DialogClose>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <div className="grid grid-cols-4 gap-8 w-[90%] mx-auto ">
        {data.map((el) => {
          return <div className="flex flex-col items-center justify-between gap-2 px-7 py-4 border-1 border-black" key={el.id}>
            <div>
              {el.images.map((img) => {
                return <img className="w-[100px] h-[100px]" src={"https://to-dos-api.softclub.tj/images/" +
                  img.imageName} alt="" />
              })}
            </div>
            <h1>{el.name}</h1>
            <h1>{el.description}</h1>
            <button onClick={() => deleteId(el.id)} className="bg-red-600 text-white p-1.5 px-7 ">Delete</button>
            <Dialog>
              <DialogTrigger>  <button onClick={() => setEditUs(el)} className="bg-green-600 text-white p-1.5 px-9 ">EDIT</button></DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    <form action="" onSubmit={(e)=>{
                      e.preventDefault();
                      editUser(editUs)
                    }} className="flex flex-col gap-5">
                      <Input value={editUs.name} onChange={(e) => setEditUs({ ...editUs, name: e.target.value })} name="name" placeholder="Name" />
                      <Input value={editUs.description} onChange={(e) => setEditUs({ ...editUs, description: e.target.value })} name="desk" placeholder="Desk" />
                      <DialogClose><button type="submit">Submit</button></DialogClose>
                    </form>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

          </div>
        })}
      </div>
    </>

  );
};
export default Home;