import { Button } from "./Button";
import HeadLine from "./HeadLine";
import InputBox from "./InputBox";


export default function SendMoney() {
    return (
        <div className="flex justify-center bg-slate-300 h-screen ">
            <div className="flex flex-col justify-center">
                <div className="bg-white p-5 w-96 shadow-md	 rounded-md	 text-center">
                    <HeadLine title={"Send Money"}></HeadLine>
                    <div className="flex items-center pt-14">
                        <div className="rounded-full h-12 w-12 bg-green-400 flex justify-center mt-1 mr-2">
                            <div className="flex flex-col justify-center h-full text-xl">
                                A
                            </div>
                        </div>
                        <div className="flex flex-row text-2xl font-semibold">
                            <div>
                                Friend's Name
                            </div>
                        </div>
                    </div>
                    <InputBox title={"Amount (in Rs.)"} placeholder={"Enter Amount"}></InputBox>
                    <button class="my-2 justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus:outline-none focus:ring-4 focus:ring-green-300 h-10 px-4 py-2 w-full hover:bg-green-600 bg-green-500 text-white">
                        Initiate Transfer
                    </button>
                </div>
            </div>
        </div>
    )
}