import React from 'react'
import styled from 'styled-components'

function Right() {
  return (
    <RightSide>
        Right
    </RightSide>
  )
}

export default Right

const RightSide = styled.div`
  width: 50%;
  padding: 4%;
  background-color: transparent;

  @media screen and (max-width: 800px) {
    width: 100%;
    min-height: 50%;
  }

  @media screen and (max-width: 1000px) and (min-height: 1000px) {
    width: 100%;
    min-height: 100vh;
  }

  @media screen and (min-width: 600px) and (max-height: 400px){
    width: 50%;
    min-height: 100vh;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
    min-height: 100vh;
  }
`