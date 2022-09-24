import TestRoute from './Components/TestRoute/TestRoute';
import CrashPage from './page/CrashPage/CrashPage.js'
import MainPage from './page/MainPage/MainPage.js'

import { Layout } from './Components/Layout/Layout.js'

import './App.css';
import {Routes, Route, } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Layout/>}>
              <Route index element={<MainPage />}></Route>
              <Route path='testroute' element={<TestRoute />}></Route>
              <Route path='*' element={<CrashPage />}></Route>
          </Route>
      </Routes>
    </div>
  );
}

export default App;

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {} from '@fortawesome/free-brands-svg-icons'