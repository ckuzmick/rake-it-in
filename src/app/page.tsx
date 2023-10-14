import Image from 'next/image'
import Bar from "../components/bar"
import AnnouncementBanner from '@/components/announcement-banner'

export default function Home() {
  return (
    <main className="">
      <AnnouncementBanner txt="We're open for the season now!"/>
      <Bar/>
      <div className="">
        <h1 className="text-2xl pb-10">Rake It In</h1>
        <p>Need leaves raked?</p>
        <p>Need plants watered?</p>
        <p>Need lawn mowing?</p>
        <p>Need pets to be taken care of?</p>
        <p>Have any odd jobs that need to be done?</p>
        <br/>
        <p>Then the Rake It In crew is here to help!</p>
      </div>
    </main>
  )
}
