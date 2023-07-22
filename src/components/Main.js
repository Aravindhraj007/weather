import React from 'react'
import styled from 'styled-components'

function Main({city, main, temp, humidity, pressure, imgSrc}) {
  return (
    <MainElement>
        <h2>{ city }</h2>
        <img 
        src={ imgSrc } 
        alt='weather'
        />
        <h3>{ main }</h3>
        <p>{Math.round(temp)}<span> &#8451;</span></p>
        <section>
            <h4>Humidity :&nbsp;&nbsp;&nbsp;{ humidity }<span>%</span></h4>
            <h4>Pressure :&nbsp;&nbsp;&nbsp;{ pressure }<span>mbar</span></h4>
        </section>
    </MainElement>
  )
}

export default Main

const MainElement = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        margin-top: 30px;
        text-transform: uppercase;
        letter-spacing: 3.5px;  
        text-shadow: 5px 5px 10px #000;
    }

    img{
        width: 250px;
        height: auto;
    }

    h3{
        text-transform: uppercase;
        letter-spacing: 2px;  
        text-shadow: 3px 3px 10px #000;
    }
    p{
        margin-top: 10px;
        font-size: 4rem;
        position: relative;
        font-weight: bolder;
        text-shadow: 6px 6px 10px #000;
        span{
            font-size: 2rem;
            position: absolute;
            margin-top: 8px;
        }
    }

    section{
        margin-top: 30px;
        padding: 0 5px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        text-shadow: 2px 2px 10px #000;
        span{
            font-size: 1rem;
        }
    }


    @media only screen and (max-width: 500px){
        h2{
            margin-top: 0;
            padding-top: 30px;
        }

        img{
            width: 220px;
            height: auto;
        }

        p{
            margin-top: 0px;
            padding-top: 20px;
            font-size: 3rem;
            span{
                font-size: 1.3rem;
                position: absolute;
                margin-top: 4px;
            }
        }

        section{
            margin-top: 30px;
            padding: 0 2px;
            width: 100%;
            display: block;
            text-align: center;
            h4{
                padding: 10px;
            }
            span{
                font-size: 0.7rem;
            }
        }
    }
`