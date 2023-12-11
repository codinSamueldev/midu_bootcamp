
import './App.css';
import Mensaje from './mensaje';

// Components must be in Pascal Case.


const App = () => {
  const a = 3
  const b = 3
  return (
    <div className="App">
      <div>holi</div>
      <h1>My React app</h1>
      <strong>We are currently working on it...</strong>
      <div>
        <h3>El resultado de la suma es</h3>
        {a + b}
      </div>
      <Mensaje color="gray" message="Esto es" />
      <Mensaje color="yellowgreen" message="Un curso" />
      <Mensaje color="blue" message="De React" />
    </div>
  );
}

export default App;
