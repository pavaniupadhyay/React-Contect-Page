
import './App.css'
import ContectForm from './component/ContectForm/ContectForm'
import ContectHader from './component/ContectHader/ContectHader'
import Navigation from './component/Navigation/navigation'

function App() {
 

  return (
    <div>
      <Navigation/>
      <main className="main_container"/>
      <ContectHader/> 
      <ContectForm/> 
    </div>
  )
}

export default App
