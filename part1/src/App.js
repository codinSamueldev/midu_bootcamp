
import './App.css';

// Components must be in Pascal Case.
function App() {
  const a = 3
  const b = 3
  return (
    <div className="App">
      <h1>My React app</h1>
      <strong>We are currently working on it...</strong>
      <div>
        <h3>El resultado de la suma es</h3>
        {a + b}
      </div>
    </div>
  );
}

export default App;
