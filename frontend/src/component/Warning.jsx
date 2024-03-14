import { Link } from "react-router-dom";


export default function Warning({title,linkto,to}){
    return (
        <div className="py-2 text-sm flex justify-center">
            <div>
                {title} 
            </div>
            <Link className="pointer underline pl-1 cursor-pointer" to={to}>
                {linkto}
            </Link>
        </div>
    )
}