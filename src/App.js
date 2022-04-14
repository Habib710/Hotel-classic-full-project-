import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Shop from './Component/Shop/Shop';
import About from './Component/About/About'
import Login from './Component/Login/Login'
import Header from './Component/header/Header';
import Registation from './Component/register/Registation';
import RequerAuth from './Component/RequerAuth/RequerAuth';

function App() {
  return (
    <div>
      <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/shop' element={
         <RequerAuth>
          <Shop></Shop>
         </RequerAuth>
       
       }></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/register' element={<Registation></Registation>}></Route>


     </Routes>
    
     </div>
  );
}

export default App;
