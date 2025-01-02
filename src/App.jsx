import './css/App.css'
import './css/reset.css'
import SayHi from './components/SayHi';
import TechTools from './components/TechTools';
import Works from './components/Works';
import Reviews from './components/Revievs';
import Contacts from './components/Contacts';
import WhatIDo from './components/WhatIDo';

function App() {

  return (
    <>
      <SayHi />
      <TechTools/>
      <Works/>
      <WhatIDo/>
      {/* <Reviews/> */}
      <Contacts/>
    </>
  )
}

export default App
