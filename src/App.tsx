import { styled } from '@linaria/atomic'

import { GlobalStyles } from 'src/shared'

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Heading>Hello</Heading>
    </>
  )
}

const Heading = styled.h2`
  color: black;
  border: none;
`
