import Image from 'next/image'
import { ArrowRight, Paintbrush, Sparkles, Wrench, Zap } from 'lucide-react'

const services = [
  {
    title: 'House Cleaning',
    description: 'Deep cleans, regular upkeep and move-in/out cleaning with eco-friendly products.',
    price: 129,
    image: '/images/cleaning.png',
    alt: 'Cleaner wiping a kitchen countertop',
    icon: Sparkles,
  },
  {
    title: 'Plumbing Services',
    description: 'Leak repairs, drain unclogging, fixture installs and water heater service.',
    price: 89,
    image: '/images/plumbing.png',
    alt: 'Plumber fixing pipes under a bathroom sink',
    icon: Wrench,
  },
  {
    title: 'Electrical Work',
    description: 'Outlet and lighting installs, panel upgrades and safe troubleshooting.',
    price: 99,
    image: '/images/electrical.png',
    alt: 'Electrician installing a wall outlet',
    icon: Zap,
  },
  {
    title: 'Painting & Renovation',
    description: 'Interior and exterior painting, drywall repair and room makeovers.',
    price: 199,
    image: '/images/painting.png',
    alt: 'Painter rolling fresh paint on a living room wall',
    icon: Paintbrush,
  },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div id="pricing" className="mx-auto max-w-2xl scroll-mt-24 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-orange">Our Services</p>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Everything your home needs, in one place
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Vetted professionals, transparent pricing and quality work you can count on.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, description, price, image, alt, icon: Icon }) => (
            <li
              key={title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 flex size-11 items-center justify-center rounded-xl bg-background text-orange shadow-md">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-navy">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>

                <div className="mt-6 flex items-end justify-between border-t border-border pt-5">
                  <p className="text-sm text-muted-foreground">
                    from <span className="text-2xl font-extrabold text-navy">${price}</span>
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-orange hover:underline"
                    aria-label={`Book ${title}`}
                  >
                    Book
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
