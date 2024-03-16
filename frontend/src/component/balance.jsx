import axios from "axios"
import { useState } from "react"


export default function Balance(){
    const token = localStorage.getItem("token")
    const [balance, setBalance] = useState("")
    
    axios.get("http://localhost:3000/api/v1/account/balance",{
        'headers' : {
            'Authorization' : token
        }
    })
        .then(response => {
            setBalance(response.data.balance)
        })
        
    return (
        <div className="flex">
            <div className="font-bold text-lg">
                Your Balance:
            </div>
            <div className="font-semibold ml-4 text-lg">
                ₹ {balance}
            </div>
        </div>
    )
}