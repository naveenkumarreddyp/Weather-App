import React,{useState} from 'react';
import './App.css';

function App() {
  const[city, setCity] = useState("");
  const[temperature, setTemperature] = useState("")
  const changeHandler = (event)=>{
    setCity(event.target.value);
  }
  const submitHandler = (event)=>{
    event.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
      response => response.json() 
    ).then(data=>{
      const kelvin = data.main.temp;
      const celsius = kelvin-273.15
      setTemperature("Temperature at"+" "+city+" is : " +Math.round(celsius)+"°C")
    })
    setCity("")
    
  }
  return (
    <div className="App">
      <center>
        <div className="card">
          <div className="cardBody">
            <h2 className="cardTitle"> Weather App</h2>
            <form onSubmit={submitHandler} >
              <h4>Enter City Name:</h4>
              <input type="text" name="city" value={city} onChange={changeHandler}/><br/><br/>
              <input type="submit" value="Get Temperature"/>
            </form>
            <h2> {temperature} </h2>
         </div>
        </div>
      </center>
    </div>
  );
}

export default App;
