import './App.css'
import PasswordGenerator from './assets/components/PasswordGenerator'


const App = () => {
  

  return (
    <main>
      <div className='container'>
          <h1 className='app-title'>Gerador de Senhas</h1>

          <PasswordGenerator></PasswordGenerator>
      </div>
    </main>
  )
}

export default App
