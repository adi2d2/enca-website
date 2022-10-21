import { styled } from '@linaria/react'

import { GlobalStyles, Section } from 'src/shared'

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Main>
        <Section>First Section</Section>
        <Section>Second Section</Section>
        <Section>Third Section</Section>
        <Section>Fourth Section</Section>
        <Section>Fifth Section</Section>
      </Main>
    </>
  )
}

const Main = styled.main`
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: #12262b;
  scroll-snap-type: y mandatory;

  @supports (min-height: 100svh) {
    min-height: 100svh;
  }
`
