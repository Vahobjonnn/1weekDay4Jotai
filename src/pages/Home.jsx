import { dataJotai, deleteId, addUser,editUserJotai } from "@/components/todo"
import { useAtom } from "jotai"
import React, { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
const Home = () => {
  const [data, setData] = useAtom(dataJotai)
  const [, deleteUser] = useAtom(deleteId)
  const [, userAdd] = useAtom(addUser)
  const [, userEdit] = useAtom(editUserJotai)
  const [editUser, setEditUser] = useState({})
  function handleSubmit(e) {
    e.preventDefault()
    let newUser = {
      id: Date.now(),
      name: e.target.name.value,
      job: e.target.job.value,
    }
    userAdd(newUser)
  }
  return (
    <div className="p-4">

      <Dialog>
        <DialogTrigger> <button className="bg-blue-500 p-2 text-white ">AddUSers</button></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">
                <Input name="name" />
                <Input name="job" />
                <DialogClose><button type="submit">Submit</button></DialogClose>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Job</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((el) => (
            <TableRow key={el.id}>
              <TableCell className="w-[400px]">{el.name}</TableCell>
              <TableCell className="w-[450px]">{el.job}</TableCell>
              <TableCell>
                <button className="bg-red-600 p-2 text-white mr-1" onClick={() => deleteUser(el.id)}>
                  Delete
                </button>
                <Dialog>
                  <DialogTrigger> <button onClick={() => setEditUser(el)} className="bg-green-500 p-2 text-white ">EditUsers</button></DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Are you absolutely sure?</DialogTitle>
                      <DialogDescription>
                        <form action="" onSubmit={(e)=>{
                          e.preventDefault()
                          userEdit(editUser)
                        }} className="flex flex-col gap-4">
                          <Input value={editUser.name} onChange={(e) => setEditUser({ ...editUser, name: e.target.value })} name="name" />
                          <Input value={editUser.job} onChange={(e) => setEditUser({ ...editUser, job: e.target.value })} name="job" />
                          <DialogClose><button type="submit">Submit</button></DialogClose>
                        </form>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Home