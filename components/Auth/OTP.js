import React, { useContext } from 'react'
import { AuthContext } from '../Private';

const OTP = () => {
    const {setAuth} = useContext(AuthContext);
    return (
        <main className="bg-white w-96 p-10">
            {/* heading text */}
            <div className="flex flex-col items-center gap-4">
                <h2 className="text-gray-900 text-center text-3xl font-bold">Verify you email</h2>
                <div className="flex flex-col items-center">
                    <div  className="text-center text-base font-normal text-slate-500">We have sent code to your email address.</div>
                    <div  className="text-center text-base font-normal text-slate-900">
                        emailadd******@gmail.com
                    </div>
                </div>
            </div>
            {/* opt number */}
            <div className="flex gap-3 my-8">
                <input type="tel" maxLength={1} className="border border-zinc-300 rounded-xl h-14 w-full p-4 text-2xl font-rope font-semibold focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
                <input type="tel" maxLength={1} className="border border-zinc-300 rounded-xl h-14 w-full p-4 text-2xl font-rope font-semibold focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
                <input type="tel" maxLength={1} className="border border-zinc-300 rounded-xl h-14 w-full p-4 text-2xl font-rope font-semibold focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
                <input type="tel" maxLength={1} className="border border-zinc-300 rounded-xl h-14 w-full p-4 text-2xl font-rope font-semibold focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
                <input type="tel" maxLength={1} className="border border-zinc-300 rounded-xl h-14 w-full p-4 text-2xl font-rope font-semibold focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
            </div>
            {/* verify acc. */}
            <div>
                <button onClick={e => { e.preventDefault();setAuth(false)}} className="h-14 w-full border border-zinc-300 rounded-xl bg-blue-600 text-white text-base font-bold mb-5">
                    Verify Account
                </button>
                <p className="text-center text-base font-normal text-slate-500">Resend code in <span className="text-center text-base font-bold text-slate-900">59:00</span></p>
            </div>

        </main> 
    ) 
}

export default OTP