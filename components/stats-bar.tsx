import { Headphones, Star, UserCheck, Users } from 'lucide-react'

const stats = [
  { value: '2,500+', label: 'Happy Customers', icon: Users },
  { value: '150+', label: 'Expert Professionals', icon: UserCheck },
  { value: '4.9', label: 'Average Rating', icon: Star },
  { value: '24/7', label: 'Support', icon: Headphones },
]

export function StatsBar() {
  return (
    <section id="about" aria-label="HomeEase at a glance" className="scroll-mt-20 px-4 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-3xl bg-navy px-6 py-10 sm:px-10">
        <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:divide-x lg:divide-navy-foreground/15">
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="flex flex-col items-center gap-3 text-center sm:flex-row sm:text-left lg:justify-center">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-orange/15 text-orange">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <div className="flex flex-col">
                <dt className="order-2 text-sm text-navy-foreground/70">{label}</dt>
                <dd className="order-1 text-2xl font-extrabold text-navy-foreground sm:text-3xl">{value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
