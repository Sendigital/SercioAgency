import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Services from './components/Services';
import Operations from './components/Operations';
import Clientele from './components/Clientele';
import Questions from './components/Questions';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Operations />
      <Clientele />
      <Questions />
      <Footer />
    </div>
  );
}

export default App;
