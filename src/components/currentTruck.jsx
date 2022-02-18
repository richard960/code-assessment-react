import phoneIcon from '../assets/phone-icon.png';
import directionIcon from '../assets/direction-icon.png';

function CurrentTruck({currentTruck, day, today}) {
  const date = day[today];
  return(
    <div id='info'>
      <p>{currentTruck.name}</p>
      <p>{currentTruck.address}<br></br>{currentTruck.city}, {currentTruck.state} {currentTruck.postal_code}</p>
      <div className='phone' id='details'>
        <p><img id='phone-icon' src={phoneIcon} alt='phone icon'></img>111-222-3333</p>
        <p id='car-direction' onClick={() => {
           window.open(`https://maps.google.com?q=${currentTruck.address + ' ' + currentTruck.city + ', ' + currentTruck.state + ' ' + currentTruck.postal_code}`);
        }}><img src={directionIcon} alt='car icon'></img>Get Directions</p>
      </div>
      <div className='times'>
        <ol>
          <li style={{'font-weight': date === 'monday' ? 'bold' : 'initial'}}>Monday</li>
          <li style={{'font-weight': date === 'tuesday' ? 'bold' : 'initial'}}>Tuesday</li>
          <li style={{'font-weight': date === 'wednesday' ? 'bold' : 'initial'}}>Wednesday</li>
          <li style={{'font-weight': date === 'thursday' ? 'bold' : 'initial'}}>Thursday</li>
          <li style={{'font-weight': date === 'friday' ? 'bold' : 'initial'}}>Friday</li>
          <li style={{'font-weight': date === 'saturday' ? 'bold' : 'initial'}}>Saturday</li>
          <li style={{'font-weight': date === 'sunday' ? 'bold' : 'initial'}}>Sunday</li>
        </ol>
        <ol>
          <li style={{'font-weight': date === 'monday' ? 'bold' : 'initial'}}>{currentTruck.monday_open} - {currentTruck.monday_close}</li>
          <li style={{'font-weight': date === 'tuesday' ? 'bold' : 'initial'}}>{currentTruck.tuesday_open} - {currentTruck.tuesday_close}</li>
          <li style={{'font-weight': date === 'wednesday' ? 'bold' : 'initial'}}>{currentTruck.wednesday_open} - {currentTruck.wednesday_close}</li>
          <li style={{'font-weight': date === 'thursday' ? 'bold' : 'initial'}}>{currentTruck.thursday_open} - {currentTruck.thursday_close}</li>
          <li style={{'font-weight': date === 'friday' ? 'bold' : 'initial'}}>{currentTruck.friday_open} - {currentTruck.friday_close}</li>
          <li style={{'font-weight': date === 'saturday' ? 'bold' : 'initial'}}>{currentTruck.saturday_open} - {currentTruck.saturday_close}</li>
          <li style={{'font-weight': date === 'sunday' ? 'bold' : 'initial'}}>{currentTruck.sunday_open} - {currentTruck.sunday_close}</li>
        </ol>
      </div>
    </div>
  )
}

export default CurrentTruck;