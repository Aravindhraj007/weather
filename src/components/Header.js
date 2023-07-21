import React from 'react'
import styled from 'styled-components'

function Header({searchItem, setSearchItem, handleSearch, item, setItem}) {
  return (
    <HeaderElement>
        <form onSubmit={handleSearch}>
            <input
                type='text'
                placeholder='Search here'
                autoFocus
                value={searchItem}
                onChange={(e)=>setSearchItem(e.target.value)}
            />
            <button
                onClick={() => setItem(searchItem)}
            >Search</button>
        </form>
    </HeaderElement>
  )
}

export default Header

const HeaderElement = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: center;
    input, button{
        font-size: 1.3rem;
        padding: 7px 20px;
        border: none;
        
        &:focus{
            outline: none;
            border: 4px solid #36e4ff;
            border-right: none
            }
    }
    input{
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
    button{
        background-color: #28a9dc;
        color: white;
        font-weight: bolder;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        
    }

    input:focus + button{
        outline: none;
        border: 4px solid #36e4ff;
        border-left: none
    }
    
    @media only screen and (max-width: 500px){
        
        input, button{
            font-size: 1rem;
            padding: 5px 8px;
        }
        input:focus + button{
            outline: none;
            border: 1px solid #36e4ff;
            border-left: none
        }
    }
`