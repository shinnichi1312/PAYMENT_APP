import AppBar from "../component/AppBar"
import { Users } from "../component/User"
import Balance from "../component/balance"

export const Dashboard = () => {
    return (
        <div className="bg-white-100 h-screen">
            <AppBar></AppBar>
            <div className="py-5 px-8">
                <Balance balance={"10000"}></Balance>
                <Users></Users>
            </div>
        </div>
    )
}