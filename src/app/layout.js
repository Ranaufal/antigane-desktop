import './globals.css'
import Link from "next/link"
import { Inter } from 'next/font/google'

// Icons 
import { PiGameControllerFill } from "react-icons/pi"
import { FaStore, FaGuilded } from "react-icons/fa"
import { TbNetwork } from "react-icons/tb"
import { BsFillChatSquareFill } from "react-icons/bs"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        {/* Sidebar  */}


        <div className=" flex overflow-hidden" >
          <div className="bg-dark shadow-lg shadow-accent-50 text-white h-screen flex flex-col items-center justify-between">
            <a href="/"><img className='w-[30px] h-[30px] m-5' src="/images/logo.png" alt="" /></a>
            <div className="flex flex-col items-center gap-6 text-grey">
              <Link href="/library" className='p-3 rounded-lg border-2 border-transparent hover:border-accent  hover:text-white hover:bg-accent-50'>
                <PiGameControllerFill className='text-xl' />
              </Link>
              <Link href="/store" className='p-3 rounded-lg border-2 border-transparent hover:border-accent  hover:text-white hover:bg-accent-50'>
                <FaStore className='text-xl' />
              </Link>
              <Link href="/" className='p-3 rounded-lg border-2 border-transparent hover:border-accent  hover:text-white hover:bg-accent-50'>
                <TbNetwork className='text-xl' />
              </Link>
              <Link href="/" className='p-3 rounded-lg border-2 border-transparent hover:border-accent  hover:text-white hover:bg-accent-50'>
                <FaGuilded className='text-xl' />
              </Link>
              {/* Add more menu */}
            </div>
            <a href="/" className='p-5 rounded-lg border-2 border-transparent hover:border-accent  hover:text-white hover:bg-accent-50'>
              <BsFillChatSquareFill className='text-xl' />
            </a>
          </div>

          {/* navbar  */}
          <div className='w-screen p-5'>
            <nav className=' flex justify-between items-center'>
              <div className='flex gap-3'>
                <input type="text" className='rounded-lg px-6 w-72 h-11 bg-dark shadow-lg shadow-accent-50 placeholder:text-white' placeholder='Search...' />
              </div>

              <div className='flex gap-5 '>
                {/* Pop slide notif  */}
                <div className='flex items-center gap-1 bg-accent px-3 rounded-lg'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                  </svg>
                  <b>Ifal</b>: Sedang manga ag cuk?
                </div>

                {/* Notifications  */}
                <button className='bg-dark shadow-lg shadow-accent-50 p-3 rounded-lg'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-5">
                    <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clipRule="evenodd" />
                  </svg>
                </button>

                {/* Profile  */}
                <button className="bg-dark shadow-lg shadow-accent-50 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-5">
                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </nav>
            <div className=" h-screen mt-5" style={{ maxHeight: 'calc(100vh - 109px)' }}>{children}</div>
          </div>
        </div>
      </body>
    </html>
  )
}

