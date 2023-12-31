import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
import classNames from 'classnames'
import Sidebar from '@/components/sidebar/sidebar'
import Navbar from '@/components/navbar/navbar'
import { ThemeProvider } from '@/providers/theme-provider'
import ContextProvider from '@/components/context'
import Loading from './loading'
import { Suspense } from 'react'
import ToasterContext from '@/providers/toaster-context'

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
      <body className={classNames('flex bg-foreground md:pl-[270px] overflow-x-hidden w-full h-auto overflow-y-scroll', montserrat.className)}> {/* md:pl-72 for fixed sidebar */}
        <ThemeProvider
          attribute="class"
          enableSystem
        >
          <ContextProvider>
            <Sidebar />
            <ToasterContext />
            <div className='flex flex-col w-full h-full md:rounded-l-[55px] bg-background shadow-md min-h-screen '>
              <Navbar />  {/*background rengini farklı yapabilmek için, genel container layoutdan dısarıda tanımlandı*/}
              <Suspense fallback={<Loading />}>
                <div className='md:container w-full h-full mx-auto p-4 md:px-12 xl:px-24'>
                  {children}
                </div>
              </Suspense>
            </div>
          </ContextProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
