import Image from 'next/image'
import { ArrowRight, CheckCircle2, ShieldCheck, Star } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden scroll-mt-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-orange">
            <ShieldCheck className="size-4" aria-hidden="true" />
            Licensed, insured & background-checked
          </span>

          <h1 className="mt-6 text-pretty text-4xl font-extrabold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Expert Care For <span className="text-orange">Your Home</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            From cleaning to repairs, we bring trusted professionals to your doorstep. Book in
            minutes, relax in comfort.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy px-7 py-3.5 font-semibold text-navy-foreground shadow-sm transition-opacity hover:opacity-90"
            >
              Book Now
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-orange px-7 py-3 font-semibold text-orange transition-colors hover:bg-orange hover:text-orange-foreground"
            >
              Get Free Estimate
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-navy">
            {['Same-day booking', 'Upfront pricing', 'Satisfaction guaranteed'].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-orange" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div
            className="absolute -right-6 -top-6 hidden size-40 rounded-3xl bg-orange/15 sm:block"
            aria-hidden="true"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-navy/15 sm:aspect-[5/5] lg:aspect-[4/5]">
            <Image
              src="/images/hero.png"
              alt="Smiling HomeEase cleaning professional with a happy family in their bright living room"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-6 left-4 flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-xl sm:left-[-1.5rem] sm:p-5">
            <div className="flex size-12 items-center justify-center rounded-xl bg-orange text-orange-foreground">
              <Star className="size-6 fill-current" aria-hidden="true" />
            </div>
            <div>
              <p className="flex items-center gap-1.5 text-lg font-bold text-navy">
                4.9 Rating
                <span className="flex" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-orange text-orange" />
                  ))}
                </span>
              </p>
              <p className="text-sm text-muted-foreground">2,500+ Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
