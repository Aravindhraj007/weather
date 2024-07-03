import React from 'react'
import styled from 'styled-components'

function Padding() {
  return (
    <PaddingDiv />
  )
}

export default Padding

const PaddingDiv = styled.div`
    padding: 10px;

    /* @media screen and (max-width: 800px) {
        padding: 15px;
    }

    @media screen and (max-width: 1000px) and (min-height: 1000px) {
        padding: 15px;
    }

    @media screen and (min-width: 600px) and (max-height: 400px){
        padding: 15px;
    }

    @media screen and (max-width: 400px) {
        padding: 15px;
    } */
`