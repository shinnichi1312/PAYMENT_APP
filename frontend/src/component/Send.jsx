import { Link, useSearchParams } from "react-router-dom";
import { Button } from "./Button";
import HeadLine from "./HeadLine";
import InputBox from "./InputBox";
import { useState } from "react";
import axios from "axios"


export default function SendMoney() {
    const [searchParams] = useSearchParams()
    const id = searchParams.get("id")
    const firstname = searchParams.get("firstname") 
    const lastname = searchParams.get("lastname") 
    const [amount, setAmount] = useState("")
    console.log(id)
    const token = localStorage.getItem("token")

    async function transfer(){
        axios.post("http://localhost:3000/api/v1/account/transfer",{
            to : id,
            amount : parseInt(amount)
        },{
            'headers' : {
                'Authorization' : token
            }
        })
        .then(res => {
            console.log(res.data.message)
            alert(res.data.message)})
        .catch(e => {alert(e.response.data.message)})
    }

    return (
        <div className="flex justify-center bg-slate-300 h-screen ">
            <div className="flex flex-col justify-center">
                <div className="bg-white p-5 w-96 shadow-md	 rounded-md	 text-center">
                    <HeadLine title={"Send Money"}></HeadLine>
                    <div className="flex items-center pt-14">
                        <div className="rounded-full h-12 w-12 bg-green-400 flex justify-center mt-1 mr-2">
                            <div className="flex flex-col justify-center h-full text-xl">
                                {firstname[0]}
                            </div>
                        </div>
                        <div className="flex flex-row text-2xl font-semibold">
                            <div>
                                {firstname} {lastname}
                            </div>
                        </div>
                    </div>
                    <InputBox onChange={e => {
                        setAmount(e.target.value)
                    }} title={"Amount (in Rs.)"} placeholder={"Enter Amount"}></InputBox>
                    <Link to={"/dashboard"}><button onClick={transfer} class="my-2 justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus:outline-none focus:ring-4 focus:ring-green-300 h-10 px-4 py-2 w-full hover:bg-green-600 bg-green-500 text-white">
                        Initiate Transfer
                    </button></Link>
                </div>
            </div>
        </div>
    )
}