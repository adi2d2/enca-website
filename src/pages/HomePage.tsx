import {
  ProductSection,
  IntroSection,
  WhatWeOfferSection,
  TeamSection,
  PartnersSection,
  ContactSection
} from '../sections'
import { Footer } from '../shared'

export const HomePage = () => {
  return (
    <>
      <IntroSection />
      <ProductSection />
      <WhatWeOfferSection />
      <TeamSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </>
  )
}
