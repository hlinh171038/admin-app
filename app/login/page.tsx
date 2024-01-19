const Login = () =>{
    return (
       <div className="bg-slate-300 w-full h-screen flex items-center justify-center">
            <form
                className="flex flex-col w-1/2 gap-2 bg-slate-400 p-2"
            >
            <input
                className=" "
                id="email"
                type="email"
                placeholder="Emial"
                required
                minLength={6}
            />
            <input 
                id="password"
                type="password"
                placeholder="password"
                required

            />
            <button className="rounded-md bg-slate-900 text-white">Login</button>
        </form>
       </div>
    )
}

export default Login