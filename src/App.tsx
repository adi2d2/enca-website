import { styled } from '@linaria/atomic'
import { cx } from '@linaria/core'
import { Analytics } from '@vercel/analytics/react'

import { globalStyles } from './shared'
import { HomePage } from './pages'

export const App = () => {
  return (
    <Main className={cx(globalStyles)}>
      <Analytics />
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
