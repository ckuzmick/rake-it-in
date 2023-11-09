import Image from 'next/image'
import Bar from "@/components/bar"
import AnnouncementBanner from '@/components/announcement-banner'
import Heading from '@/components/heading'

export default function Home() {
  return (
    <main>
      <AnnouncementBanner txt="We're open for the season now!"/>
      <Bar/>
      <div className="">
        <Heading header="Services" subtitle="We're ready to provide for you"/>
        <h1 className="p-10">Do you need anything done around the house? Here's just some of the things that Rake It In can provide for you:</h1>
        <ul className="pl-14 list-disc">
          <li>Raking Leaves</li>
          <li>Lawn Mowing</li>
          <li>Pet Sitting</li>
          <li>Watering Plants</li>
        </ul>
        <h1 className="p-10">If you need something else besides these, then email us at griffin@rakeitin.info</h1>
      </div>
    </main>
  )
}
