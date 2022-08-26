import './App.css';
import { Footer } from './components/common/footer/Footer';
import { Header } from './components/common/header/Header';
import { ItemList } from './components/ItemList/ItemsList';

function App() {
  return (
    <div className="App">
      <Header />
      <ItemList />
      <Footer/>
    </div>
  );
}

export default App;
