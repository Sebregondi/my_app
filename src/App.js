import logo from './logo.svg';
import './App.css';
import Saludo from './Saludo';
import ChildrenBox from './components/ChildrenBox';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ClickTracker from './components/ClickTracker';

function App() {

  const styles = {
    border: 'solid 2px blue',
    padding: '20px'
  }

  return (
    <>
    <NavBar />
    <ItemListContainer 
      greeting={"Mi nombre es Esteban Landucci, de la comisión 38095"}/>
    <ClickTracker />
    </>
  );
}

export default App;
