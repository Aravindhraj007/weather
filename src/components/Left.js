import React from 'react'
import styled from 'styled-components'
import { FaSearch } from "react-icons/fa";
import Padding from './Padding'

function Left() {
  return (
    <LeftSide>
        <SearchBar>
          <input
                type='text'
                placeholder='Search here'
            />
            <button
            ><SearchIcon /></button>
        </SearchBar>
        <MainElement>
          <h2>Chennai</h2>
          <img 
          src= './images/clouds.png'
          alt='weather'
          />
          <h3>Clouds</h3>
          <p>{Math.round(45)}<span> &#8451;</span></p>
          <p className='desc'>Descri</p>
        </MainElement>
    </LeftSide>
  )
}

export default Left

const MainElement = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2{
      margin-top: 30px;
      text-transform: uppercase;
      letter-spacing: 3.5px;  
      /* text-shadow: 5px 5px 10px #000; */
  }

  img{
      width: 250px;
      height: auto;
  }

  p{
    /* margin-top: 5px; */
    font-size: 3rem;
    position: relative;
    font-weight: bolder;
    span{
        font-size: 1.2rem;
        position: absolute;
        margin-top: 8px;
    }
  }

  .desc{
    font-size: 1rem;
  }

  @media screen and (max-width: 500px) {
    p{
      margin-top: 20px;
    }
    .desc{
      margin-top: 20px;
    }
  }

`

const LeftSide = styled.div`
  width: 50%;
  background-color: transparent;
  background-color: yellow;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  

  @media screen and (max-width: 800px) {
    width: 100%;
    min-height: 50%;
    padding: 30px;
  }

  @media screen and (max-width: 1000px) and (min-height: 1000px) {
    width: 100%;
    min-height: 100vh;
    padding: 30px;
  }

  @media screen and (min-width: 600px) and (max-height: 400px){
    width: 50%;
    min-height: 100vh;
    padding: 20px;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
    min-height: 100vh;
    padding: 15px;
  }
`

const SearchBar = styled.form`
  width: 80%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  input{
    border: 2px solid transparent;
    outline: none;
    width: 85%;
    height: 100%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    font-size: 1.2rem;
    padding: 7px 20px;
    &:hover{
      border: 2px solid transparent;
      outline: none;
    }
    &:active, &:focus{
      border: 2px solid blue;
      border-right: 2px solid transparent;
    }
  }

  button{
    width: 15%;
    height: 100%;
    border: 2px solid transparent;
    background-color: #28a9dc;    
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  input:focus + button{
    border: 2px solid blue;
    border-right: 2px solid transparent;
  }

  @media screen and (max-width: 400px) {
    margin-top: 20px;
  }
`

const SearchIcon = styled(FaSearch)`
  color: white;
  scale: 1.5;
  
  `