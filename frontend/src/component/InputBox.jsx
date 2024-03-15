

export default function InputBox({title,placeholder,onChange}){
    return (
        <div>
            <h3 className="text-sm font-medium text-left py-2">
                {title}
            </h3>
            <input onChange={onChange} className="w-full px-2 py-1 border rounded border-slate-200" placeholder={placeholder}></input>
        </div>
    )
}