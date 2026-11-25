import { Mail, MapPin, Phone } from 'lucide-react'
import { Logo } from '@/components/logo'

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-20 bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:px-8">
        <div>
          <Logo inverted />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-foreground/70">
            Expert care for your home. Trusted professionals for cleaning, plumbing, electrical and
            renovation work.
          </p>
        </div>
        <address className="flex flex-col gap-3 text-sm not-italic text-navy-foreground/80 md:items-end">
          <a href="tel:+18005550123" className="flex items-center gap-2 hover:text-orange">
            <Phone className="size-4 text-orange" aria-hidden="true" /> (800) 555-0123
          </a>
          <a href="mailto:hello@homeease.com" className="flex items-center gap-2 hover:text-orange">
            <Mail className="size-4 text-orange" aria-hidden="true" /> hello@homeease.com
          </a>
          <p className="flex items-center gap-2">
            <MapPin className="size-4 text-orange" aria-hidden="true" /> Serving your neighborhood, 24/7
          </p>
        </address>
      </div>
      <div className="border-t border-navy-foreground/10 py-6 text-center text-xs text-navy-foreground/60">
        {`© ${new Date().getFullYear()} HomeEase. All rights reserved.`}
      </div>
    </footer>
  )
}
