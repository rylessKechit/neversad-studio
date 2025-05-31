import Hero from '@/components/sections/Hero'
import Portfolio from '@/components/sections/Portfolio'
import About from '@/components/sections/About'
import Booking from '@/components/sections/Booking'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Portfolio />
      <About />
      <Booking />
      <Contact />
    </main>
  )
}
