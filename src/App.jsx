import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/NavBar'


function App() {
  return (
    <div>
       <NavBar />
       <div>
       <ItemListContainer greeting={'Bienvenidos a mi tienda!!!'}/>
       </div>
    </div>
  
  )
}



export default App;
