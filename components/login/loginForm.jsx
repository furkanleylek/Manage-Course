'use client'
import React, { useEffect } from 'react'
import { useManageCourseContext } from '../context'
import LoginButton from './loginButton'
import { setCookie } from 'cookies-next' // with this library we can use cookies in client side 
import { useRouter, useSearchParams } from 'next/navigation' // to route after submit forms
const LoginForm = () => {

    const { email, setEmail, password, setPassword } = useManageCourseContext()

    const router = useRouter()
    const searchParams = useSearchParams()

    // to route with submit
    async function handleSubmit() {        // eğer login işlemlerinde API kullansaydık, bu fonksıyonu async olarak kullanıp . Gelen response kodlarına göre fonksiyonu ayarlamamız gerekirdi . 
        setCookie('token', 'TestToken')  // with a token we can route to Login page , if not login
        const nextUrl = searchParams.get('next') // if user want to access from /student page but is not login , with this way we can hold the /student path
        router.push(nextUrl ? nextUrl : '/')
    }


    // To design login form  , we need to use useEffect to reach DOM
    useEffect(() => {
        const emailId = document.getElementById('email')
        const emailSpanId = document.getElementById('emailSpan')
        const passwordId = document.getElementById('password')
        const passwordSpanId = document.getElementById('passwordSpan')

        if (emailId && emailSpanId) {
            emailId.addEventListener("focusin", () => {
                emailSpanId.style.cssText = ' transform:translateX(10px) translateY(-11px); font-size:0.65em; padding:0 10px; opacity:100; border-radius:2px; font-style:italic ; background:white ; color:#F8D442; '
                emailId.style.cssText = 'box-shadow: 0 0 0 2px #F8D442 ;  transition-property: all; transition-duration: 700ms;'
            })
            emailId.addEventListener("focusout", () => {
                if (emailId.value.length == 0) {
                    emailSpanId.style.cssText = 'transform:transleteX(0px) translateY(0px); border:none '
                    emailId.style.cssText = 'box-shadow: 0 0 0 0px #F8D442  ;   transition-property: all; transition-duration: 700ms;'
                }
            })
        }
        if (passwordId && passwordSpanId) {
            passwordId.addEventListener("focusin", () => {
                passwordSpanId.style.cssText = ' transform:translateX(10px) translateY(-11px); font-size:0.65em; padding:0 10px; background:white ; color:#F8D442; opacity:100; border-radius:2px; font-style:italic ;'
                passwordId.style.cssText = 'box-shadow: 0 0 0 2px #F8D442 ;  transition-property: all; transition-duration: 700ms;'
            })
            passwordId.addEventListener("focusout", () => {
                if (passwordId.value.length == 0) {
                    passwordSpanId.style.cssText = 'transform:transleteX(0px) translateY(0px); border:none '
                    passwordId.style.cssText = 'box-shadow: 0 0 0 0px #F8D442  ;   transition-property: all; transition-duration: 700ms;'
                }
            })
        }
    }, [])



    return (
        <form className='flex flex-col w-full gap-6' onSubmit={handleSubmit}
        >
            <div className='relative w-full h-full'>
                <input
                    className=" border-[1px] rounded w-full py-2 px-3 text-gray-700 mb-3 appearance-none leading-tight focus:outline-none focus:shadow-outline p-4 outline-none "
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <span className='absolute py-[10px] px-[14px] top-0 left-0 pointer-events-none text-[12px] text-black uppercase transition-all duration-300 opacity-30' id='emailSpan'>Email</span>
            </div>
            <div className='relative w-full h-full mb-4'>
                <input
                    className="appearance-none border-[1px] rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline  p-4  outline-none "
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <span className='absolute py-[10px] px-[14px] top-0 left-0 pointer-events-none text-[12px] text-black uppercase transition-all duration-300 opacity-30 ' id='passwordSpan'>Password</span>
            </div>
            <LoginButton />
        </form>
    )
}

export default LoginForm