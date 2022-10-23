import styled from '@emotion/styled'
import { Global, css } from '@emotion/react'

import { globalStyles } from './shared'

import { HomePage } from './pages'

export const App = () => {
  return (
    <Main>
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

  @supports (height: 100svh) {
    height: 100svh;
  }
`
