
import { useState } from 'react'
import Footer from './Footer'
import Header from './Header'

const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true)

    const toggleSignInForm = () => {
        setIsSignIn(!isSignIn)
    }
    return (
        <>
            <Header />
            <div className='absolute top-0 left-0 w-full h-100 bg-cover bg-center '>
                <img className="" style={{ height: "180vh" }}
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background-img"></img>

            </div>
            <div>

                <form className='p-8 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flex flex-col text-center justify-center h-5/6 w-1/3 bg-black bg-opacity-70 rounded-md box-border mt-40'>

                    <p className='text-left font-bold text-4xl mb-8'>{isSignIn ? "Sign In" : "Sign Up"}</p>

                    {!isSignIn && (<input type='text' placeholder='Full Name' className='w-full p-3  rounded-md border border-gray-400 bg-black bg-opacity-70 '></input>)}

                    <input type='text' placeholder='Email Address' className='w-full p-3 mt-3  rounded-md border border-gray-400 bg-black bg-opacity-70 '></input>

                    <input type='password' placeholder='Password' className='w-full p-3 mt-3 rounded-md border border-gray-400 bg-black bg-opacity-80 '></input>

                    <button className='w-full p-2 my-3 bg-red-600 text-white rounded-md font-bold'>{isSignIn ? "Sign In" : "Sign Up"}</button>

                    {isSignIn &&  (<>
                    <p className=''>OR</p>

                    <button className='w-full p-2 my-3 bg-white bg-opacity-30 text-white rounded-md font-bold'> Use a sign-in Code</button>

                    <p className='my3'>Forget Password?</p>

                    <label class="flex items-center space-x-2">

                        <input type="checkbox" className="form-checkbox h-4 w-6 text-white" checked />

                        <span className="text-white my-3">Remember me</span>

                    </label></>)}

                    <span className='text-left'> {isSignIn ? "New to Netflix ? " : "Already Registered ! "}<span className='font-bold cursor-pointer hover:underline ' onClick={toggleSignInForm}>{isSignIn ? "Sign Up" : "Sign In "}</span></span>

                    <p className='text-xs my-3 text-left'>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Login
