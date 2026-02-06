'use client'

import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ScheduleSection from '@/components/ScheduleSection'
import PrizeSection from '@/components/PrizeSection'
import RulesSection from '@/components/RulesSection'
import RegistrationForm from '@/components/RegistrationForm'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import DiagonalDivider from '@/components/ui/DiagonalDivider'

export default function Home() {
  return (
    <main className="min-h-screen bg-cs2-dark">
      <Navigation />
      <HeroSection />

      {/* Hero → About divider */}
      <DiagonalDivider
        direction="right"
        fillTop="#0C0C0C"
        fillBottom="#141414"
        accent="white"
        height={100}
      />

      <AboutSection />

      {/* About → Schedule divider */}
      <DiagonalDivider
        direction="left"
        fillTop="#141414"
        fillBottom="#0C0C0C"
        accent="orange"
        height={100}
      />

      <ScheduleSection />

      {/* Schedule → Prizes divider */}
      <DiagonalDivider
        direction="right"
        fillTop="#0C0C0C"
        fillBottom="#141414"
        accent="white"
        height={100}
      />

      <PrizeSection />

      {/* Prizes → Rules divider */}
      <DiagonalDivider
        direction="left"
        fillTop="#141414"
        fillBottom="#0C0C0C"
        accent="orange"
        height={100}
      />

      <RulesSection />

      {/* Rules → Registration divider */}
      <DiagonalDivider
        direction="right"
        fillTop="#0C0C0C"
        fillBottom="#141414"
        accent="white"
        height={100}
      />

      <RegistrationForm />

      {/* Registration → Contact divider */}
      <DiagonalDivider
        direction="left"
        fillTop="#141414"
        fillBottom="#161616"
        accent="orange"
        height={80}
      />

      <ContactSection />

      {/* Contact → Footer divider */}
      <DiagonalDivider
        direction="right"
        fillTop="#161616"
        fillBottom="#0C0C0C"
        accent="white"
        height={80}
      />

      <Footer />
    </main>
  )
}
