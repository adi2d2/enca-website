import { FC, PropsWithChildren } from 'react'
import { styled } from '@linaria/atomic'

export const Section: FC<PropsWithChildren> = ({ children }) => {
  return <SectionWrapper>{children}</SectionWrapper>
}

const SectionWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  scroll-snap-align: start;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  @supports (min-height: 100svh) {
    min-height: 100svh;
  }
`
