import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
import classNames from 'classnames'
import Sidebar from '@/components/sidebar/sidebar'
import NotificationBar from '@/components/home/notificationBar'
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
      <body className={classNames('flex bg-[#F2EAE1]', montserrat.className)}>
        <Sidebar />
        <div className='flex flex-col w-full h-full md:rounded-l-[40px] bg-[#FDFDFD] shadow-md min-h-screen'>
          <NotificationBar />  {/*background rengini farklı yapabilmek için, genel layoutdan dısarıda tanımlandı*/}
          <div className='md:container w-full h-full mx-auto p-4 md:px-12 xl:px-16'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
