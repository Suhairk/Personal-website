import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Projects from './components/Projects';
import MetaTags from 'react-meta-tags';


function App() {
  return (
    <div className="App">
      <MetaTags>
    <meta name='viewport' content="width=device-width, initial-scale=1.0"/>
    </MetaTags>
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
