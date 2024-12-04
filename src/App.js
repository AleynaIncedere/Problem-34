import Image from 'next/image'
import { createContext, useContext, useState } from 'react'

const SessionContext = createContext(null)

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)  
  const session = isLoggedIn ? { name: 'Namık Korona', initials: 'NK' } : null

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <SessionContext.Provider value={session}>
      <div className='bg-white'>
        <Header onLoginLogout={handleLoginLogout} />
        <Hero />
      </div>
    </SessionContext.Provider>
  )
}

function Header({ onLoginLogout }) {
  return (
    <header className='absolute inset-x-0 top-0 z-50'>
      <nav className='flex items-center justify-between p-6 lg:px-8' aria-label='Global'>
        <Logo />
        <Avatar />
        <SignInOutButton onLoginLogout={onLoginLogout} />
      </nav>
    </header>
  )
}

function Avatar() {
  const session = useContext(SessionContext)

  if (!session) return null 

  return (
    <div className='items-center space-x-2 flex lg:flex-1 lg:justify-end'>
      <span className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-500'>
        <span className='text-lg font-medium leading-none text-white'>
          {session.initials}
        </span>
      </span>
      <span>{session.name}</span>
    </div>
  )
}

function Logo() {
  return (
    <div className='flex lg:flex-1'>
      <a href='#' className='-m-1.5 p-1.5'>
        <span className='sr-only'>Şirketiniz</span>
        <Image
          className='h-8 w-auto'
          src='/mark.svg' 
          alt='Şirket Logo'
          width={500}
          height={500}
        />
      </a>
    </div>
  )
}

function SignInOutButton({ onLoginLogout }) {
  const session = useContext(SessionContext)

  return (
    <div className='flex items-center ml-4'>
      <button onClick={onLoginLogout}>
        {session ? 'Log Out' : 'Sign In'}
      </button>
    </div>
  )
}

function Hero() {
  return (
    <div className='relative isolate px-6 pt-14 lg:px-8'>
      <div className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80' aria-hidden='true'>
        <div className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]' />
      </div>
      <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
      
        <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
          <div className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
            Bir sonraki finansman turumuzu duyuruyoruz.{" "}
            <a href='#' className='font-semibold text-indigo-600'>
              <span className='absolute inset-0' aria-hidden='true' />
              Daha fazla bilgi edinin <span aria-hidden='true'>→</span>
            </a>
          </div>
        </div>

        <div className='text-center'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            Online işinizi zenginleştirecek veriler
          </h1>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <a
              href='#'
              className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
              Başlamak için
            </a>
            <a href='#' className='text-sm font-semibold leading-6 text-gray-900'>
              Daha fazla bilgi edinin <span aria-hidden='true'>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
