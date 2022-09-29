import logo from './logo.svg';
import './App.css';
import Saludo from './Saludo';
import ChildrenBox from './components/ChildrenBox';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ClickTracker from './components/ClickTracker';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  const styles = {
    border: 'solid 2px blue',
    padding: '20px'
  }

  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={'/'} element={<ClickTracker />} />
      </Routes>
    </BrowserRouter>

    {/* <ItemListContainer 
      greeting={"Mi nombre es Esteban Landucci, de la comisión 38095"}/>
     */}
    </>
  );
}

export default App;
