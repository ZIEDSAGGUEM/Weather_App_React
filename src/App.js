import React, { useState } from "react";
import axios from 'axios'
const api = {
  key:"d5e9a15f6ab6a00ab1eb8e50b6202602",
  base:"http://api.weatherstack.com/"
}


function App() {


  const [search,setSearch]=useState("");
  const [Temp,setTemp]=useState("");
  const [Humidity,setHumidity]=useState("")
  const [location,setLocation]=useState("")
   


  const searchPressed =async () =>{
    
     await fetch("https://api.weatherapi.com/v1/current.json?key=fdbb5021982a428aa25162402232503&q="+`${search}`+"&aqi=no")
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        setTemp(result.current.temp_c)
        setHumidity(result.current.humidity)
        setLocation(result.location.name)
        
        
        }
        );
    }
  




/*  const dateBuilder =(d) =>{
    let months =["January","February","March","April","May","June","July","August","September","October","November","December"];
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  
  
  }*/





  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." onChange={e => setSearch(e.target.value)}  />
          <button onClick={()=>searchPressed()}>Click</button>
        </div>
        <div className="container">
        <div className="location-box">
          <div className="location">{location}</div>
          

        </div>
        <div className="weather-box">
            <h1>Temperature</h1>
          <div className="temp">
             {Temp}°C
          </div>
            <h1>Humidity</h1>
          <div className="humidity">
            {Humidity}
          </div>
          <div className="description">

          </div>
        </div>
        </div>
      </main>
  
    </div>
  );

  }
export default App;
