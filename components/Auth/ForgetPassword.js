import React,{useState} from 'react'
import Footer from '../Wrapper/Footer';
import Header from '../Wrapper/Header';
import OTP from './OTP';

const ForgetPassword = () => {
    const [otp, setOtp] = useState(false)
    if (!otp) {
        return (
            <div>
            <Header/>
            <div className="bg-slate-100 flex justify-center items-center h-screen">
            <main className="bg-white w-96 p-10 lg:w-1/3">
                    <div className="flex flex-col items-center gap-4">
                        <h2 className="text-gray-900 text-center text-3xl font-bold">Need help with your account?</h2>
                        <div  className="text-center text-base font-normal text-slate-500">Enter the email address associated with your account and we will send you a link to reset your password.</div>
                    </div>
                    <div className="my-8">
                        <input type="email" className="border border-zinc-300 rounded-xl h-14 w-full p-4 text-2xl font-rope font-normal focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
                    </div>
                    <div>
                        <button onClick={e => { e.preventDefault();setOtp(true) }} className="h-14 w-full border border-zinc-300 rounded-xl bg-blue-600 text-white text-base font-bold mb-5">
                            Send Link
                        </button>
                        <p className="text-center text-base font-bold text-slate-900">Forgot your email?</p>
                    </div>

                </main> 
                </div>
                <Footer/>
            </div>
        )    
    }else {
        return(<div>
            <Header />
                <div className="bg-slate-100 flex justify-center items-center h-screen">
                <OTP />
                </div>
            <Footer/>
            </div>)
      }
}

export default ForgetPassword