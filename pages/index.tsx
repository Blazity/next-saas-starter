import styled from 'styled-components'

import Hero from 'views/HomePage/Hero'
import Partners from 'views/HomePage/Partners'

export default function Homepage() {
  return (
    <HomepageWrapper>
      <Hero />
      <Partners />
    </HomepageWrapper>
  )
}

const HomepageWrapper = styled.div`
  & > * {
    margin-top: 10rem;
  }
`
