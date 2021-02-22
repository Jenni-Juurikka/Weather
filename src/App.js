import './App.css';
import Weather from './Weather.js';
import {useState, useEffect} from 'react';

function App() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        setIsLoading(false);
      }, (error) => {
        alert(error);
      })
    } 
    else {
      alert('Your browser does not support geolocation!')
    }
  }, [])

  if (isLoading) {
    return <p>Loading...</p>;
  }
  else {
    return (
      <div className='content'>
        <div className="container">
          <h3 className="col-12 bg-warning">Your position</h3>
          <p>
            Position:&nbsp;
            {lat.toFixed(3)},
            {lng.toFixed(3)}
          </p>
          <Weather lat={lat} lng={lng}/>
        </div>
      </div>
    );
  }
}

export default App;
