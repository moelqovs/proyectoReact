import { useState } from 'react'
import reactLogo from './assets/react.svg'
//componentes
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

      return (

      <div className='App'>
          <div>
              <NavBar/>
          </div>
        <ItemListContainer/>
      </div>

    );
}

export default App
