import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Home from './pages/Home';
import Nav from './pages/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Curriculum from './pages/Curriculum';
import Admission from './pages/Admission';
import Notices from './pages/Notices';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './pages/Login';
import React from 'react'
import Footer from './pages/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>} />
        <Route path='/Curriculum' element={<Curriculum/>} />
        <Route path='/Notices' element={<Notices/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  )
}

export default App














// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
