import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Left from './components/Left'
import Right from './components/Right'

function App() {
  const APIKEY = 'ee73ec52a4bb55144a9f1a9b4cd0e88b'
  const [searchItem, setSearchItem] = useState('')
  const [item, setItem] = useState('tamilnadu')
  const [weather, setWeather] = useState({})
  const [isloading, setLoading] = useState(true)
  const [isError, setError] = useState('')

  // ----------- USE EFFECT FOR FETCHING API -----------

  useEffect(()=>{
    const fetchWeather = async() => {
    try{
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${item}&appid=${APIKEY}&units=metric`)
      if(response.status<400){
        setError('')
      }
      setWeather(response.data)
    }catch(err){
      setError(err.response.data.message)
    }finally{
      setLoading(false)
      setSearchItem('')
    }
  }
  (async() => fetchWeather())()
  
  return () => {
    setWeather({})
  }
  }, [item])

  const handleSearch = (e) =>{
    e.preventDefault()
  }  

  const getImageSrc = () => {
    const result = weather.weather[0].main.toString().toLowerCase()
    if(result === 'drizzle') return '/images/drizzle.png'
    else if(result === 'humidity') return '/images/humidity.png'
    else if(result === 'mist') return '/images/mist.png'
    else if(result === 'rain') return '/images/rain.png'
    else if(result === 'snow') return '/images/snow.png'
    else if(result === 'wind') return '/images/wind.png'
    else return '/images/clouds.png'
  }

  return (
    <Content>
      <Left />
      <Right />
    </Content>
  )


  // return (
  //   <div className="App">
  //     <Header 
  //       searchItem = {searchItem}
  //       setSearchItem = {setSearchItem}
  //       handleSearch={handleSearch}
  //       item = {item}
  //       setItem = {setItem}
  //     />
  //     {item.length!==0 && isloading && <p>Loading...</p>}
  //     {isError.length!==0 && <p>{isError}</p>}
  //     {!isloading && isError.length===0 && weather.name!==undefined &&
  //       <Main 
  //         city={weather.name}
  //         main={weather.weather[0].main}
  //         temp={weather.main.temp}
  //         humidity={weather.main.humidity}
  //         pressure={weather.main.pressure}
  //         imgSrc = {getImageSrc() || 'images/clouds.png'}
  //       />
  //     }
  //   </div>
  // )
}

export default App

const Content = styled.div`
  width: 80%;
  min-height: 80vh;
  display: flex;
  flex-direction: row;
  border-radius: 2%;
  background: linear-gradient(rgb(79, 209, 249), rgb(200, 227, 226));
  

  @media screen and (max-width: 800px) {
    width: 90%;
    min-height: 90vh;
    flex-direction: column;
    border-radius: 2%;
  }

  @media screen and (max-width: 1000px) and (min-height: 1000px) {
    width: 100%;
    flex-direction: column;
    border-radius: none;
    border-radius: 0;
  }

  @media screen and (min-width: 600px) and (max-height: 400px){
    width: 100%;
    min-height: 100vh;
    flex-direction: row;
    border-radius: 0;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
    min-height: 100vh;
    border-radius: 0;
  }
  
  
`


