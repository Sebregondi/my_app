import logo from './logo.svg';
import './App.css';
import Saludo from './Saludo';
import ChildrenBox from './components/ChildrenBox';

function App() {

  const styles = {
    border: 'solid 2px blue',
    padding: '20px'
  }

  return (
    <>
      <h1>¡Hello bitches! xD</h1>
      <ChildrenBox>
        <p>Parrafo con texto</p>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ChildrenBox>
      <h2 style={styles}>Subtítulo</h2>
      <li className='green'>elemento 1</li>
      <li>elemento 2</li>
      <li>elemento 3</li>
      <span>otra cosa</span>
      <strong>en negrita</strong>
      <Saludo name='Miguel' age={23}/>
      <Saludo name='Jorge' age={18}></Saludo>
      <Saludo name='Robinson' age={28}></Saludo>
    </>
  );
}

export default App;
