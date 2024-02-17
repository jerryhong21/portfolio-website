import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio | Jerry Hong',
  description: 'Portfolio website for Jerry Hong - software developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950`}>

        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <Header></Header>
        {/* <div className='w-[40rem] bg-[#fbe2e3] h-[32rem] absolute top-[-6rem] right-[20rem] rounded-full blur-[1rem] sm:w-[68.75rem]'></div>
        <div className='w-[40rem] bg-blue-50 h-[32rem] absolute top-[-6rem] left-[20rem] rounded-full blur-[1rem] sm:w-[68.75rem]'></div> */}
        
        {children}
      
      
      </body>
    </html>
  )
}
