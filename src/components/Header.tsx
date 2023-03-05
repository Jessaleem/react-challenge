import logo from '../assets/rick_morty_name.png';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header className='w-full bg-black'>
        <nav className='hidden sm:flex mx-auto max-w-4xl justify-between items-center px-4 py-2'>
          <img src={logo} alt='logo-name' className='w-40' />
          <ul className='flex flex-1 justify-center gap-8 items-center font-bold'>
            <li className='hover:underline cursor-pointer'>Home</li>
            <li className='hover:underline cursor-pointer'>Location</li>
            <li className='hover:underline cursor-pointer'>Episodes</li>
          </ul>
          <button className='text-white bg-teal-500 py-2 px-4 rounded-lg font-bold'>
            Login
          </button>
        </nav>
        <div className='sm:hidden flex justify-between items-center px-4 py-2'>
          <img src={logo} alt='logo-name' className='w-40' />
          <button onClick={() => setShowMenu((prev) => !prev)}>
            <Bars3Icon className='w-10' />
          </button>
        </div>
      </header>

      {showMenu && (
        <div className='w-full h-full bg-black absolute top-0'>
          <div className='sm:hidden flex justify-between items-center px-4 py-2'>
            <img src={logo} alt='logo-name' className='w-40' />
            <button onClick={() => setShowMenu((prev) => !prev)}>
              <XMarkIcon className='w-10' />
            </button>
          </div>
          <div className='flex flex-col justify-center gap-6 font-bold rounded mx-4 my-20'>
            <button className='hover:underline cursor-pointer bg-neutral-800 rounded'>
              Home
            </button>
            <button className='hover:underline cursor-pointer bg-neutral-800 rounded'>
              Location
            </button>
            <button className='hover:underline cursor-pointer bg-neutral-800 rounded'>
              Episodes
            </button>
            <button className='hover:underline cursor-pointer bg-neutral-800 rounded text-teal-500 font-bold my-10'>
              Login{' '}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
