import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Services from './components/Services';
import Technologies from './components/Technologies';

function App() {
  return (
    
    <div className="App">
      <Hero/>
      <About/>
      <Services/>
      <Technologies/>    
    </div>

  );
}

export default App;
