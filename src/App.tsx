import { styled } from '@linaria/atomic'

import { GlobalStyles } from 'src/shared'

export const App = () => {
  return (
    <Main>
      <GlobalStyles />
      <h2>Hello from Enca Scientific</h2>
    </Main>
  )
}

const Main = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #12262b;
`
