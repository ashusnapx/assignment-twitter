import { Hero, Navbar, Strap } from '@/components';

export default function Home() {
  return (
    <>
      <div className='border-b'>
        <div className='p-3'>
          <Navbar />
        </div>
      </div>

      <div className='border-b'>
        <Strap />
      </div>

      <Hero/>
    </>
  );
}
