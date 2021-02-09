import './App.css';
import BlockChain from './components/BlockChain';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Block Chain View
      </header>
      <hr/>
      <div className="row">
      <BlockChain/>
      </div>
    </div>
  );
}

export default App;
