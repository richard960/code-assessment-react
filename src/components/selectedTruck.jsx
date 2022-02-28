import phoneIcon from '../assets/phone-icon.png';
import directionIcon from '../assets/direction-icon.png';

function selectedTruck({selectedTruck, day, today}) {
  const date = day[today];
  return(
    <div id='info'>
      <p>{selectedTruck.name}</p>
      <p>{selectedTruck.address}<br></br>{selectedTruck.city}, {selectedTruck.state} {selectedTruck.postal_code}</p>
      <div className='phone' id='details'>
        <p><img id='phone-icon' src={phoneIcon} alt='phone icon'></img>111-222-3333</p>
        <p id='car-direction' onClick={() => {
           window.open(`https://maps.google.com?q=${selectedTruck.address + ' ' + selectedTruck.city + ', ' + selectedTruck.state + ' ' + selectedTruck.postal_code}`);
        }}><img src={directionIcon} alt='car icon'></img>Get Directions</p>
      </div>
      <div className='times'>
        <ol>
          <li style={{'font-weight': date === 'monday' ? 'bold' : 'initial'}}><span id='day'>Monday</span><text>{selectedTruck.monday_open} - {selectedTruck.monday_close}</text></li>
          <li style={{'font-weight': date === 'tuesday' ? 'bold' : 'initial'}}><span id='day'>Tuesday</span><text>{selectedTruck.tuesday_open} - {selectedTruck.tuesday_close}</text></li>
          <li style={{'font-weight': date === 'wednesday' ? 'bold' : 'initial'}}><span id='day'>Wednesday</span><text>{selectedTruck.wednesday_open} - {selectedTruck.wednesday_close}</text></li>
          <li style={{'font-weight': date === 'thursday' ? 'bold' : 'initial'}}><span id='day'>Thursday</span><text>{selectedTruck.thursday_open} - {selectedTruck.thursday_close}</text></li>
          <li style={{'font-weight': date === 'friday' ? 'bold' : 'initial'}}><span id='day'>Friday</span><text>{selectedTruck.friday_open} - {selectedTruck.friday_close}</text></li>
          <li style={{'font-weight': date === 'saturday' ? 'bold' : 'initial'}}><span id='day'>Saturday</span><text>{selectedTruck.saturday_open} - {selectedTruck.saturday_close}</text></li>
          <li style={{'font-weight': date === 'sunday' ? 'bold' : 'initial'}}><span id='day'>Sunday</span><text>{selectedTruck.sunday_open} - {selectedTruck.sunday_close}</text></li>
        </ol>
      </div>
    </div>
  )
}

export default selectedTruck;