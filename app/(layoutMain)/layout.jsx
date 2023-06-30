import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
import classNames from 'classnames'
import Sidebar from '@/components/sidebar/sidebar'
import Navbar from '@/components/navbar/navbar'
import NotificationBar from '@/components/notification-bar'
import { ThemeProvider } from '@/providers/theme-provider'
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
      <body className={classNames('flex flex-col md:flex-row bg-foreground md:pl-[270px] overflow-x-hidden w-full h-auto overflow-y-scroll', montserrat.className)}> {/* md:pl-72 for fixed sidebar */}
        <ThemeProvider
          attribute="class"
          enableSystem
        >
          <Sidebar />
          <Navbar />
          <div className='flex flex-col w-full h-full md:rounded-l-[55px] bg-background shadow-md min-h-screen '>
            <NotificationBar />  {/*background rengini farklı yapabilmek için, genel layoutdan dısarıda tanımlandı*/}
            <div className='md:container w-full h-full mx-auto p-4 md:px-12 xl:px-16'>
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
