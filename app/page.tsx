import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { StatsBar } from '@/components/stats-bar'
import { Services } from '@/components/services'
import { SiteFooter } from '@/components/site-footer'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <StatsBar />
        <Services />
      </main>
      <SiteFooter />
    </>
  )
}
