import {useContext} from 'react'
import { AuthContext } from '../components/Private';
export default function Home() {
  const {setAuth} = useContext(AuthContext)
  
    return (
    <div className="bg-slate-100 flex justify-center items-center h-screen">
      <main className="bg-white w-96 p-10">
            {/* heading text */}
            <div className="flex flex-col items-center gap-4">
                <h2 className="text-gray-900 text-center text-3xl font-bold">Hi, Johne Doe!</h2>
                <div  className="text-center text-base font-normal text-slate-500">You’re logged in. Well done!</div>
            </div>
                <button onClick={e => { e.preventDefault();setAuth(true) }} className="h-14 w-full border border-zinc-300 rounded-xl bg-blue-600 text-white text-base font-bold mt-5">
                    Log out
                </button>
        </main>
    </div>
  )
}
