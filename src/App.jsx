import {useState, useEffect} from 'react'
import rioLogo from './assets/rioseo-logo.png';
import locationIcon from './assets/location-icon.png';
import rioLogoMobile from './assets/rioseo-logo-mobile.png';
import Trucks from './components/trucks.jsx';
function App() {
  const [location, setLocation] = useState({});
  const [toggle, setToggle] = useState(true);

  const toggleMap = () => {
    setToggle(false);
  }

  const toggleList = () => {
    setToggle(true);
  }

    useEffect(() => {
      navigator.geolocation.getCurrentPosition(async (results) => {
        const {latitude, longitude} = results.coords;
        setLocation({latitude: latitude, longitude: longitude})
      })
    }, [])

  return (
    <div className="App">
      <header id='mobile-header'>
        <div id='mobile-tab'>
          <span className='block'></span>
          <span className='block'></span>
          <span className='block'></span>
        </div>
        <img src={rioLogoMobile} alt='logo'></img>
        <img src={locationIcon} alt='location icon'></img>
      </header>
      <header id='nav-header'>
        <img src={rioLogo} alt='logo'></img>
        <nav id='navs'>
          <a>Menu</a>
          <a><img src={locationIcon} alt='location icon'></img>Truck Locator</a>
        </nav>
      </header>
      <Trucks location={location} toggle={toggle}/>
      <footer>
        <a onClick={toggleList} className={toggle ? 'selected' : ''}>List</a>
        <a onClick={toggleMap} className={toggle ? '' : 'selected'}>Map</a>
      </footer>
    </div>
  );
}

export default App;
