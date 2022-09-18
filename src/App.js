import './App.css';
import { Counter } from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={`${process.env.PUBLIC_URL ?? ""}/logo.svg`}
          className="App-logo"
          alt="logo"
        />
        <Counter />
      </header>
    </div>
  );
}

export default App;
