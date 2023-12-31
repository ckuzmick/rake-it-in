import Image from 'next/image'
import Bar from "../components/bar"
import AnnouncementBanner from '@/components/announcement-banner'

export default function Home() {
  return (
    <main className="">
      <AnnouncementBanner txt="We're open for the season now!"/>
      <Bar/>
      <div className="">
        <div className='sm:grid sm:gap-5 xs:gap-0 sm:m-20 sm:grid-cols-4 xs:grid-cols-1'>
          <div>
            <div className='sm:h-64 xs:h-0 max-w-full bg-orange-500 rounded-lg col-start-1 sm:mb-5 xs:mb-0'></div>
            <div className='sm:h-96 xs:h-0 max-w-full bg-red-700 rounded-lg col-start-1'></div>
          </div>
          <div className='sm:bg-slate-200 rounded-lg text-center col-start-2 col-span-2'>
            <h1 className='text-2xl font-bold m-10 col-start-2 col-span-2 row-start-1'>Need Leaves Raked?</h1>
            <h2 className='font-semibold mx-10 text-lg my-4'>The Rake It In crew is here to help!</h2>
            <h2 className='font-semibold mx-10 text-lg my-4'>We can rake houses anywhere in the greater Cambridge area, from Somerville to Central Square.</h2>
            <h2 className='font-semibold mx-10 text-lg my-4'>Shoot us an email here:</h2>
            <p>conrad@rakeitin.info</p>
            <p>griffin@rakeitin.info</p>
          </div>
          <div>
            <div className='max-w-full sm:h-96 xs:h-0 bg-red-700 rounded-lg col-start-3 sm:mb-5 xs:mb-0'></div>
            <div className='max-w-full sm:h-64 xs:h-0 bg-orange-500 rounded-lg col-start-3 row-start-1'></div>
          </div>
        </div>
      </div>
    </main>
  )
}

{/* <AnnouncementBanner txt="We're open for the season now!"/>
      <Bar/>
      <div className="">
        <div className='grid-cols-3 grid sm:gap-5 xs:gap-0 m-20 sm:grid-cols-4 xs:grid-cols-1'>
          <div>
            <div className='sm:h-64 xs:h-0 max-w-full bg-orange-500 rounded-lg col-start-1 sm:mb-5 xs:mb-0'></div>
            <div className='sm:h-96 xs:h-0 max-w-full bg-red-700 rounded-lg col-start-1'></div>
          </div>
          <div className='bg-slate-200 rounded-lg text-center>
            <h1 className='text-2xl font-bold m-10 col-start-2 col-span-2 row-start-1'>Need Leaves Raked?</h1>
            <h2 className='font-semibold mx-10 mb-5text-lg'>The Rake It In crew is here to help!</h2>
            <br/>
            <h2 className='font-semibold mx-10 text-lg'>We can rake houses anywhere in the greater Cambridge area, from Someriville to Central Square!</h2>
          </div>
          <div>
            <div className='max-w-full sm:h-96 xs:h-0 bg-red-700 rounded-lg col-start-3 sm:mb-5 xs:mb-0'></div>
            <div className='max-w-full sm:h-64 xs:h-0 bg-orange-500 rounded-lg col-start-3 row-start-1'></div>
          </div>
        </div>
      </div> */}