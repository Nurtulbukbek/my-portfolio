import './css/App.css'
import './css/reset.css'
import SayHi from './components/sayHi'
import TechTools from './components/techTools'
import Works from './components/Works'
import Reviews from './components/Revievs'
import Contacts from './components/Contacts'

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
