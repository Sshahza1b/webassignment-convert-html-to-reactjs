import logo from './logo.svg';
import './App.css';
import './style/style2.css';
// import './style/style.css';
import Home from './pages/home';
import Navigation from './pages/navigation';

import Attendance from './pages/attendance'

import {Routes, Route} from 'react-router-dom'


function App() {
  return (

    <Routes>
      <Route path='/' element= {<Navigation/>}>
        <Route index element= { <Home />} />
        <Route path='attendance' element= { <Attendance />} />
      </Route>
    </Routes>

   
    
  );
}

export default App;
