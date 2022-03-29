import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Projects from './components/Projects';


function App() {
  return (
    
    <div className="App">
      <Hero/>
      <About/>
      <Services/>
      <Technologies/> 
      <Projects/>
      <Contacts/>   
      <Footer/>
    </div>

  );
}

export default App;
