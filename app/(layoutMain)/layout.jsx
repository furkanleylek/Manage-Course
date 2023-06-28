import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
import classNames from 'classnames'
import Sidebar from '@/components/sidebar/sidebar'
const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Manage Course | Dashboard',
  description: 'Manage course ',
  icons: {
    icon: '/logo.png',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={classNames('flex bg-[#FDFDFD]', montserrat.className)}>
        <Sidebar />
        <div className='md:container border-2 w-full mx-auto p-4 md:px-12 xl:px-16 min-h-screen '>
          {children}
        </div>
      </body>
    </html>
  )
}
