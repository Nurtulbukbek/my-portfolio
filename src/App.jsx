import './css/App.css'
import './css/reset.css'
import SayHi from './components/SayHi';
import TechTools from './components/TechTools';
import Works from './components/Works';
import Reviews from './components/Revievs';
import Contacts from './components/Contacts';

function App() {

  return (
    <>
      <SayHi />
      <TechTools/>
      <Works/>
      <Reviews/>
      <Contacts/>
    </>
  )
}

export default App
