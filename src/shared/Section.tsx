import { styled } from '@linaria/atomic'

export const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;

  /* Temporary */
  border: 1px solid red;

  /* svh works for FF, Safari right now, not */
  @supports (min-height: 100svh) {
    min-height: 100svh;
  }
`
