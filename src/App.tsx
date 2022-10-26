import styled from '@emotion/styled'
import { Global } from '@emotion/react'
import { Analytics } from '@vercel/analytics/react'

import { globalStyles } from './shared'
import { HomePage } from './pages'

export const App = () => {
  return (
    <Main>
      <Analytics />
      <Global styles={globalStyles} />
      <HomePage />
    </Main>
  )
}

const Main = styled.main`
  width: 100%;
  height: 100vh;
  overflow: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;

  @supports (height: 100svh) {
    height: 100svh;
  }
`
