import { EPages } from '@/types/utils';
import Link from 'next/link';

export const BlogCard = () => {
  return (
    <div>
      <div className='relative mb-8'>
        <img
          className='w-full max-w-full h-full object-cover aspect-[3/2]'
          src='/placeholder.jpg'
          alt=''
        />
        <div className='w-full p-6 flex justify-between border-t border-white/50 bg-gradient-to-b from-black/0 to-black/40 backdrop-blur-xl absolute top-auto right-0 bottom-0 left-0'>
          <div>
            <div className='text-white text-sm font-semibold'>Olivia Rhye</div>
            <div className='text-white text-sm '>20 Jan 2022</div>
          </div>
          <div className='text-white text-sm font-semibold'>Design</div>
        </div>
      </div>

      <div>
        <div className='mb-2 text-gray-900 text-2xl font-semibold leading-loose'>UX review presentations</div>
        <p className='mb-6 text-slate-600 text-base font-normal'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
        <Link
          className='text-yellow-600 text-base font-semibold leading-normal'
          href={`${EPages.BLOG}/id`}
        >
          Read post
        </Link>
      </div>
    </div>
  );
};
