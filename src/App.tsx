import { styled } from '@linaria/atomic'

import { globalStyles, Section } from 'src/shared'
import { Button } from './shared/Button'
import { Input } from './shared/Input'
import { TextDemo } from './shared/TextDemo'

export const App = () => {
  return (
    <Main className={globalStyles}>
      <Section>
        First Section
        <div>
          <TextDemo />
        </div>
      </Section>
      <Section>
        Second Section
        <div>
          <Input emphasys="fill" type="text" placeholder="Email" />
          <Button>Aloha</Button>
        </div>
      </Section>
      <Section>Third Section</Section>
      <Section>Fourth Section</Section>
      <Section>Fifth Section</Section>
    </Main>
  )
}

const Main = styled.main`
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: #12262b;
  scroll-snap-type: y mandatory;

  @supports (height: 100svh) {
    height: 100svh;
  }
`
