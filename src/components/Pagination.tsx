import { BackwardIcon, ForwardIcon } from '@heroicons/react/24/solid';

interface FooterProps {
  next: number | null;
  prev: number | null;
  current: number;
  increment: () => void;
  decrement: () => void;
}

export default function Pagination({
  next,
  prev,
  current,
  increment,
  decrement,
}: FooterProps) {
  return (
    <div className='flex bg-black gap-10 items-center justify-center font-bold'>
      <button
        onClick={decrement}
        className={`pl-4 ${prev === null ? 'text-gray-500' : 'text-teal-500'}`}
        disabled={prev === null}
      >
        <BackwardIcon className='w-4' />
      </button>
      <div>{current}</div>
      <button
        onClick={increment}
        className={`pl-4 ${next === null ? 'text-gray-500' : 'text-teal-500'}`}
        disabled={next === null}
      >
        <ForwardIcon className='w-4' />
      </button>
    </div>
  );
}
