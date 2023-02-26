import './App.css';
import Center from './conponents/Center/Center';
import Left from './conponents/Left/Left';
import Right from './conponents/Right/Right';
import Profil from './conponents/Profil/Profil';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='borBody'>
           <Left/>
            <Routes>
              <Route path='Profil' element={<Profil/>}/>
              <Route path='/' element={<Center/>}/>
            </Routes>
           <Right/>
        </div>
      </div>
    </div>
  );
}

export default App;
