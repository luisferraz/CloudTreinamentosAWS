import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Esse é um teste de React App para o Módulo 10 da Especialização AWS Cloud Treinamentos.
        </p>
        <a
          className="App-link"
          href="http://comunidadecloud.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cloud Treinamentos
        </a>
      </header>
    </div>
  );
}

export default App;
