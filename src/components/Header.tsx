import logo from '../assets/rick_morty_name.png';

export default function Header() {
  return (
    <header className='w-full bg-black'>
      <nav className='flex mx-auto max-w-4xl justify-between items-center'>
        <img src={logo} alt='logo-name' className='w-40' />
        <ul className='flex flex-1 justify-center gap-8 items-center font-bold text-white'>
          <li className='hover:underline cursor-pointer'>Home</li>
          <li className='hover:underline cursor-pointer'>Location</li>
          <li className='hover:underline cursor-pointer'>Episodes</li>
        </ul>
        <button className='text-white bg-teal-500 py-2 px-4 rounded-lg font-bold'>
          Login
        </button>
      </nav>
    </header>
  );
}
