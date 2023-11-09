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
        <Heading header="Pricing" subtitle="Of Our Services"/>
        <h2 className="p-10">Note: All prices are subject to negotiation</h2>
        <ul className="pl-10">
          <li>Raking leaves is priced at 8 dollars per yard work bag</li>
          <li>Pet sitting prices are negotiable depending on what the extent of the services are</li>
        </ul>
        <h2 className="p-10">We haven't began to offer any more services, email us with whatever you need at griffin&apos;rakeitin.info and we'll get back to you!</h2>
      </div>
    </main>
  )
};
