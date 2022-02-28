import {useState, useEffect} from 'react';
import Truck from './truck.jsx';
import SelectedTruck from './selectedTruck.jsx';
import key from '../assets/config.js';
import noImg from '../assets/noimg.png';
import phoneIcon from '../assets/phone-icon.png';
import directionIcon from '../assets/direction-icon.png';
// fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=Washington%2C%20DC&destinations=New%20York%20City%2C%20NY&units=imperial&key=${key}`, {
//   headers:  {"Access-Control-Allow-Origin": '*'}
// }).then((res) => console.log(res))
const day = {
  0: 'sunday',
  1: 'monday',
  2: 'tuesday',
  3: 'wednesday',
  4: 'thursday',
  5: 'friday',
  6: 'saturday',
}

function Trucks({location, toggle}) {
  const [trucks, setTrucks] = useState([{
    "id": 1,
    "name": "Schmeler Inc",
    "url": "http://mapy.cz/quam/sapien/varius/ut.jsp",
    "address": "742 Bashford Court",
    "city": "Fort Wayne",
    "state": "IN",
    "postal_code": "46862",
    "latitude": "41.0938",
    "longitude": "-85.0707",
    "monday_open": "9:41 AM",
    "monday_close": "4:42 PM",
    "tuesday_open": "9:08 AM",
    "tuesday_close": "9:49 PM",
    "wednesday_open": "6:56 AM",
    "wednesday_close": "5:15 PM",
    "thursday_open": "9:57 AM",
    "thursday_close": "8:10 PM",
    "friday_open": "6:43 AM",
    "friday_close": "5:31 PM",
    "saturday_open": "6:45 AM",
    "saturday_close": "4:43 PM",
    "sunday_open": "8:14 AM",
    "sunday_close": "4:05 PM"
}, {
  "id": 1,
  "name": "Schmeler Inc",
  "url": "http://mapy.cz/quam/sapien/varius/ut.jsp",
  "address": "742 Bashford Court",
  "city": "Fort Wayne",
  "state": "IN",
  "postal_code": "46862",
  "latitude": "41.0938",
  "longitude": "-85.0707",
  "monday_open": "9:41 AM",
  "monday_close": "4:42 PM",
  "tuesday_open": "9:08 AM",
  "tuesday_close": "9:49 PM",
  "wednesday_open": "6:56 AM",
  "wednesday_close": "5:15 PM",
  "thursday_open": "9:57 AM",
  "thursday_close": "8:10 PM",
  "friday_open": "6:43 AM",
  "friday_close": "5:31 PM",
  "saturday_open": "6:45 AM",
  "saturday_close": "4:43 PM",
  "sunday_open": "8:14 AM",
  "sunday_close": "4:05 PM"
}, {
  "id": 1,
  "name": "Schmeler Inc",
  "url": "http://mapy.cz/quam/sapien/varius/ut.jsp",
  "address": "742 Bashford Court",
  "city": "Fort Wayne",
  "state": "IN",
  "postal_code": "46862",
  "latitude": "41.0938",
  "longitude": "-85.0707",
  "monday_open": "9:41 AM",
  "monday_close": "4:42 PM",
  "tuesday_open": "9:08 AM",
  "tuesday_close": "9:49 PM",
  "wednesday_open": "6:56 AM",
  "wednesday_close": "5:15 PM",
  "thursday_open": "9:57 AM",
  "thursday_close": "8:10 PM",
  "friday_open": "6:43 AM",
  "friday_close": "5:31 PM",
  "saturday_open": "6:45 AM",
  "saturday_close": "4:43 PM",
  "sunday_open": "8:14 AM",
  "sunday_close": "4:05 PM"
}, {
  "id": 1,
  "name": "Schmeler Inc",
  "url": "http://mapy.cz/quam/sapien/varius/ut.jsp",
  "address": "742 Bashford Court",
  "city": "Fort Wayne",
  "state": "IN",
  "postal_code": "46862",
  "latitude": "41.0938",
  "longitude": "-85.0707",
  "monday_open": "9:41 AM",
  "monday_close": "4:42 PM",
  "tuesday_open": "9:08 AM",
  "tuesday_close": "9:49 PM",
  "wednesday_open": "6:56 AM",
  "wednesday_close": "5:15 PM",
  "thursday_open": "9:57 AM",
  "thursday_close": "8:10 PM",
  "friday_open": "6:43 AM",
  "friday_close": "5:31 PM",
  "saturday_open": "6:45 AM",
  "saturday_close": "4:43 PM",
  "sunday_open": "8:14 AM",
  "sunday_close": "4:05 PM"
}, {
  "id": 1,
  "name": "Schmeler Inc",
  "url": "http://mapy.cz/quam/sapien/varius/ut.jsp",
  "address": "742 Bashford Court",
  "city": "Fort Wayne",
  "state": "IN",
  "postal_code": "46862",
  "latitude": "41.0938",
  "longitude": "-85.0707",
  "monday_open": "9:41 AM",
  "monday_close": "4:42 PM",
  "tuesday_open": "9:08 AM",
  "tuesday_close": "9:49 PM",
  "wednesday_open": "6:56 AM",
  "wednesday_close": "5:15 PM",
  "thursday_open": "9:57 AM",
  "thursday_close": "8:10 PM",
  "friday_open": "6:43 AM",
  "friday_close": "5:31 PM",
  "saturday_open": "6:45 AM",
  "saturday_close": "4:43 PM",
  "sunday_open": "8:14 AM",
  "sunday_close": "4:05 PM"
}]);

  const localZip = localStorage.getItem('zip');
  const [zip, setZip] = useState(localZip);
  const [lng, setLng] = useState(null);
  const [lat, setLat] = useState(null);
  const [model, setModel] = useState(false);
  const [selectedTruck, setSelectedTruck] = useState({})
  const date = new Date();
  const today = date.getDay();

  const openTab = function() {
    window.open(selectedTruck.url, "_blank");
  }
  const setArea = function(lati, long) {
    setLng(long);
    setLat(lati);
  }
  const toggel = function () {
    setModel(!model);
  }

  const getSelectedTruck = function(truck) {
    setSelectedTruck(truck);
  }

  const getData = function() {
    // cant load data api limit
    // fetch('https://my.api.mockaroo.com/locations.json?key=a45f1200').then((results) => {
    //   results.json().then((obj) => {
    //    setTrucks(obj)
    //   })
    // })
  }
  const getZip = function() {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${key}`).then((results) => {
      let obj = results.json();
      obj.then(({results}) => {
        setZip(results[0].address_components[7].long_name);
        localStorage.setItem('zip', results[0].address_components[7].long_name)
      })
    })
  }
  useEffect(() => {
    if(location.latitude !== undefined && location.longitude !== undefined) {
      getData();
      getZip();
    }
  }, [location.latitude, location.longitude])

  return(
    <div className='main'>
      <h1>Found {trucks.length} Taco Trucks in  {zip}</h1>
      <div id='content'>
        <div className='container' style={{display: toggle === false ? 'none' : 'initial'}}>
          <div>
            {trucks.map((truck) => {
              return <Truck truck={truck} date={date} today={today} key={truck.id} latitude={truck.latitude} longitude={truck.longitude} setArea={setArea} setModel={toggel} model={model} day={day} getSelectedTruck={getSelectedTruck}/>
            })}
          </div>
        </div>
        <div id='map' className={`${toggle === false ? 'show' : 'hide'}`}>
          {(lng === null || lat === null) && <p>Click a location card to load a map</p>}
          {(lng && lat) && <img alt='map' src={`https://maps.googleapis.com/maps/api/staticmap?zoom=15&center=${lat},${lng}&size=500x700&key=${key}&markers=color:red%7C${lat},${lng}`}></img>
          }
          {model &&
          (
          <div id='overlay'>
            <div id='truck-info'>
              <img id='no-img' src={noImg}></img>
                <span onClick={toggel} id='close'>&#x2715;</span>
              <SelectedTruck selectedTruck={selectedTruck} today={today} day={day}/>
              <button id='button-detail' type='button' onClick={openTab}>VIEW FULL DETAILS</button>
            </div>
           </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Trucks