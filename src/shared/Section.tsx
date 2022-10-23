import styled from '@emotion/styled'

export const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  scroll-margin-block-end: 25vh;

  /* svh works for FF, Safari right now, not */
  @supports (min-height: 100svh) {
    min-height: 100svh;
    scroll-margin-block-end: 25svh;
  }
`
