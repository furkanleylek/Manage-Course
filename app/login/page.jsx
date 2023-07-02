import React from 'react'
import LoginForm from "@/components/login/loginForm"
import Paragraph from "@/components/ui/paragraph"
import TitleH1 from "@/components/ui/h1"
import TitleH3 from "@/components/ui/h3"

export default function LoginPage() {
    return (
        <main className="flex items-center justify-center w-full h-screen bg-gradient-to-r from-[#121F34] to-[#1F2836] ">
            <div
                className='
            w-full sm:w-[475px] gap-6 rounded-[20px]
            flex flex-col items-center justify-evenly p-10 bg-white shadow-md
            '
            >
                <TitleH1 >
                    MANAGE COURSES
                </TitleH1>
                <div className='flex flex-col gap-2 text-center my-4'>
                    <TitleH3>
                        SIGN IN
                    </TitleH3>
                    <Paragraph>
                        Enter your credentials to access your account
                    </Paragraph>
                </div>
                <LoginForm />
                <Paragraph>
                    Forgot your password ? <span className='text-third font-semibold opacity-70 hover:opacity-100 cursor-pointer hover:underline hover:underline-offset-2'>Reset Password</span>
                </Paragraph>
            </div>
        </main>
    )
}
