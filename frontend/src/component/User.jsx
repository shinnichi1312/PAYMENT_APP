import { useEffect, useState } from "react"
import { Button } from "./Button"
import { Link } from "react-router-dom";
import axios from "axios"

export const Users = () => {
    // Replace with backend call
    const [users, setUsers] = useState([]);
    const [input, setInput] = useState("")

    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + input)
            .then(respond => {
                setUsers(respond.data.user)
            })
    },[input])

    return <>
        <div className="font-bold mt-6 text-lg">
            Users
        </div>
        <div className="my-2">
            <input onChange={e => {
                setInput(e.target.value)
            }} type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
        </div>
        <div>
            {users.map(user => <User user={user} />)}
        </div>
    </>
}

function User({user}) {
    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstname[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstname} {user.lastname}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
            <Link to={`/send?id=${user._id}&firstname=${user.firstname}&lastname=${user.lastname}`}><Button title={"Send Money"} /></Link>
        </div>
    </div>
}