import Image from 'next/image'
import Bar from "@/components/bar"
import AnnouncementBanner from '@/components/announcement-banner'
import Heading from '@/components/heading'

export default function Home() {
  return (
    <main className="">
      <AnnouncementBanner txt="We're open for the season now!"/>
      <Bar/>
      <div className="">
        <Heading header="Pricing" subtitle="Of Our Services"/>
        <h2 className='p-10'>Note: All prices are subject to negotiation</h2>
        
      </div>
    </main>
  )
}
