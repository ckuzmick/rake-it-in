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
        <Heading header="About Us" subtitle="The People Behind Rake It In Co."/>
      </div>
    </main>
  )
}
