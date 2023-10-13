import Image from 'next/image'
import Bar from "../components/bar.js"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Bar/>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
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
