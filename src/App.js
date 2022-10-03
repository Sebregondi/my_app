import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ClickTracker from './components/ClickTracker';
import SWContainer from './API/SWContainer';
import RMContainer from './rickmorty/RMContainer';
import HPContainer from './HPApp/HPContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function PageNotFound() {
  return (
    <div>
      <h1>404 Page not found</h1>
    </div>
  );
}

function App() {

  const styles = {
    border: 'solid 2px blue',
    padding: '20px'
  }

  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ClickTracker />} />
        <Route path='/ram' element={<RMContainer/>} />
        <Route path='/swapi' element={<SWContainer/>} />
        <Route path='/hpapi' element={<HPContainer />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
