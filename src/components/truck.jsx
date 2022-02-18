import React, {useState, useEffect, useMemo} from 'react';
import key from '../assets/config.js';
import phoneIcon from '../assets/phone-icon.png';
function Truck({truck, date, today, latitude, longitude, setArea, setModel, day, getCurrentTruck, model}) {
  const [distance, setDistance] = useState(null);

  const getTime = function() {
    let currentTime = date.toLocaleTimeString();
    let time = currentTime.slice(-2)
    let close = truck[day[today] + '_close'];
    let open = truck[day[today] + '_open']
    let closeTime = truck[day[today] + '_close'].slice(-2);
    let openTime = truck[day[today] + '_open'].slice(-2);
    if(openTime === 'AM') {
      if( (time === 'PM' || currentTime > open) && currentTime < close) {
        return true;
      }
    }
    if(openTime === 'PM') {
      if((currentTime > open || time === 'AM') && currentTime < close) {
        return true;
      }
    }
    return false;
  };

  const random = useMemo(() => {
    return (Math.random() * 25).toFixed(1);
  }, [])

  return(
    <div className='card' style={{'background-color': model ? '#f0f0f0' : 'white'}}>
      <div className='card-heading'>
        <h3>{truck.name}</h3>
        <span>{random}miles</span>
      </div>
      <p id='address' onClick={() => setArea(latitude, longitude)}>{truck.address} <br></br> {truck.city}, {truck.state} {truck.postal_code}</p>
      <p id='time'>{getTime() ? `Open today until ${truck[day[today] + '_close']}` : 'Closed'}</p>
      <div className='phone'>
        <p><img id='phone-icon' src={phoneIcon} alt='phone icon'></img>111-222-3333</p>
      </div>
      <div className='buttons'>
        <button onClick={() => {
          window.open(`https://maps.google.com?q=${truck.address + ' ' + truck.city + ', ' + truck.state + ' ' + truck.postal_code}`);
        }}>DIRECTIONS</button>
        <button onClick={() => {
          setModel();
          getCurrentTruck(truck);
          }}>MORE INFO</button>
      </div>
    </div>
  )
}

export default Truck