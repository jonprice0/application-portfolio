import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Resumé from './components/Resumé';

export default function App() {
  const sections = ["About Me", "Portfolio", "Contact", "Resumé"];

  const [currentSection, setCurrentSection] = useState(sections[0]);
  
  const renderSection = () => {
    switch(currentSection) {
      case "About Me":
        return <About></About>;
      case "Portfolio":
        return <Portfolio></Portfolio>;
      case "Contact":
        return <Contact></Contact>;
      case "Resumé":
        return <Resumé></Resumé>;
    }
  }

  return (
    <div>
      <Header
        sections={sections}
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
      ></Header>
      <main>
        {renderSection()}
      </main>
      <Footer></Footer>
    </div>
  );
};
