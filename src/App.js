import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ClickTracker from './components/ClickTracker';
import SWCointainer from './API/SWCointainer';
import RMContainer from './rickmorty/RMContainer';


function App() {

  const styles = {
    border: 'solid 2px blue',
    padding: '20px'
  }

  return (
    <>
    <NavBar/>
    <ClickTracker />
    <ItemListContainer 
      greeting={"Mi nombre es Esteban Landucci, de la comisión 38095"}/>
    {/* <SWCointainer/> */}
    <RMContainer/>
    </>
  );
}

export default App;
