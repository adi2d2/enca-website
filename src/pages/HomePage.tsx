import {
  ProductSection,
  IntroSection,
  WhatWeOfferSection,
  TeamSection,
  PartnersSection,
  ContactSection
} from '../sections'
import { Header, Footer } from '../shared'

export const HomePage = () => {
  return (
    <>
      <Header />
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
