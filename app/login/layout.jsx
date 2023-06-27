import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
import classNames from 'classnames'
import Provider from '@/components/context'
const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
    title: 'Manage Course | Login',
    description: 'Manage course Login description ',
    icons: {
        icon: '/logo.png',
    }
};

export default function Layout({ children }) {
    return (
        <html lang="en">
            <body className={classNames('flex flex-col bg-white ', montserrat.className)}>
                <Provider>
                    {children}
                </Provider>
            </body>
        </html>
    )
}
