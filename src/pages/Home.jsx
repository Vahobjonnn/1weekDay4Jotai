import React, { useState } from "react";
import { useTodo } from "@/components/todo.js"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
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
  const { data, count, increment, deleteUser, addUser,editUser } = useTodo();
  const [editData, setEditData] = useState({})
  function handleSubmit(e) {
    e.preventDefault()
    let newUser = {
      id: Date.now(),
      name: e.target.name.value,
      job: e.target.job.value,
    }
    addUser(newUser)
  }
  return (
    <div>
      <Dialog className="">
        <DialogTrigger className=" p-2 bg-blue-600 rounded-xl mt-2 text-white">AddUser</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              <form action="" className='flex flex-col gap-4' onSubmit={handleSubmit}>
                <Input name="name" placeholder="Name.." />
                <Input name="job" placeholder="Job.." />
                <Input name="age" placeholder="Age..." />
                <DialogClose> <button>Submit</button></DialogClose>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            data.map((el) => {
              return <TableRow>
                <TableCell>{el.name}</TableCell>
                <TableCell>{el.job}</TableCell>
                <TableCell>
                  <button onClick={() => deleteUser(el.id)} className="bg-red-500 text-white p-2 rounded-xl mr-1">Delete</button>
                  <Dialog>
                    <DialogTrigger onClick={() => setEditData(el)} className="bg-green-500 px-3 p-2 text-white rounded-xl">EDIT</DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                          <form action="" className='flex flex-col gap-4' onSubmit={(e) => {
                            e.preventDefault()
                            editUser(editData)
                          }} >
                            <Input value={editData.name} onChange={(e) => setEditData({ ...editData, name: e.target.value })} name="name" placeholder="Name.." />
                            <Input value={editData.email} onChange={(e) => setEditData({ ...editData, email: e.target.value })} name="email" placeholder="Email.." />
                            <Input value={editData.age} onChange={(e) => setEditData({ ...editData, age: e.target.value })} name="age" placeholder="Age..." />
                            <DialogClose> <button type="submit">Submit</button></DialogClose>
                          </form>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </TableCell>

              </TableRow>
            })
          }
        </TableBody>
      </Table>

    </div>
  );
};
export default Home;