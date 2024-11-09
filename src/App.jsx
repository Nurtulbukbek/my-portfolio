import './css/App.css'
import './css/reset.css'
import SayHi from './components/SayHi.jsx'
import TechTools from './components/techTools.jsx'
import Works from './components/Works.jsx'
import Reviews from './components/Revievs.jsx'
import Contacts from './components/Contacts.jsx'

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
