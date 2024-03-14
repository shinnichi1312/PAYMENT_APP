import { Button } from "../component/Button"
import HeadLine from "../component/HeadLine"
import InputBox from "../component/InputBox"
import SubHeading from "../component/SubHeading"
import Warning from "../component/Warning"

export const Signin = () => {
    return(
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 ">
                    <HeadLine title={"Sign In"}></HeadLine>
                    <SubHeading text={"Enter your credentials to access your account"}></SubHeading>
                    <InputBox title={"Email"} placeholder={"yuji@gmail.com"}></InputBox>
                    <InputBox title={"Password"} placeholder={"123456"}></InputBox>
                    <div className="pt-4">
                        <Button title={"Sign In"}></Button>
                    </div>
                    <Warning title={"Don't have an account"} linkto={"Sign Up"} to={"/signup"}></Warning>
                </div>
            </div>
        </div>
    )
}