import { Button } from "../component/Button"
import HeadLine from "../component/HeadLine"
import InputBox from "../component/InputBox"
import SubHeading from "../component/SubHeading"
import Warning from "../component/Warning"

export const Signup = () => {
    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 ">
                    <HeadLine title={"Sign Up"}></HeadLine>
                    <SubHeading text={"Enter your information to create an account"}></SubHeading>
                    <InputBox title={"First Name"} placeholder={"Yuji"}></InputBox>
                    <InputBox title={"Lasr Name"} placeholder={"itadori"}></InputBox>
                    <InputBox title={"Email"} placeholder={"yuji@gmail.com"}></InputBox>
                    <InputBox title={"Password"} placeholder={"123456"}></InputBox>
                    <div className="pt-4">
                        <Button title={"Sign Up"}></Button>
                    </div>
                    <Warning title={"Already have an account"} linkto={"Sign in"} to={"/signin"}></Warning>
                </div>
            </div>
        </div>
    )
}