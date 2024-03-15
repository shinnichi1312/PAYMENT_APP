import { useState } from "react"
import { Button } from "../component/Button"
import HeadLine from "../component/HeadLine"
import InputBox from "../component/InputBox"
import SubHeading from "../component/SubHeading"
import Warning from "../component/Warning"
import axios from "axios"

export const Signup = () => {

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 ">
                    <HeadLine title={"Sign Up"}></HeadLine>
                    <SubHeading text={"Enter your information to create an account"}></SubHeading>
                    <InputBox onChange={(e) => {
                        setFirstname(e.target.value)
                    }} title={"First Name"} placeholder={"Yuji"}></InputBox>
                    <InputBox onChange={(e) => {
                        setLastname(e.target.value)
                    }} title={"Last Name"} placeholder={"itadori"}></InputBox>
                    <InputBox onChange={(e) => {
                        setUsername(e.target.value)
                    }} title={"Email"} placeholder={"yuji@gmail.com"}></InputBox>
                    <InputBox onChange={(e) => {
                        setPassword(e.target.value)
                    }} title={"Password"} placeholder={"123456"}></InputBox>
                    <div className="pt-4">
                        <Button onClick={async () => {
                            const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
                                firstname : firstname,
                                lastname : lastname,
                                username : username,
                                password : password
                            })
                            alert(response.data.message)
                        }} title={"Sign Up"}></Button>
                    </div>
                    <Warning title={"Already have an account"} linkto={"Sign in"} to={"/signin"}></Warning>
                </div>
            </div>
        </div>
    )
}