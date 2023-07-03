import React, {createRef} from 'react';
import './App.css';
import { Aboutme, Contact, Footer, Header, HireMe, MyWork, Navbar, Projects } from './components';


function App() {
  const sectionRef1 = createRef();
  const sectionRef2 = createRef();
  const sectionRef3 = createRef();
  const sectionRef4 = createRef();

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({behavior : "smooth"})
  }
  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection} sectionRef1={sectionRef1} sectionRef2={sectionRef2} sectionRef3={sectionRef3} sectionRef4={sectionRef4}/>
      <Header/>
      <Aboutme sectionRef1={sectionRef1}/>
      <MyWork sectionRef2={sectionRef2}/>
      <HireMe/>
      <Projects sectionRef3={sectionRef3}/>
      <Contact sectionRef4={sectionRef4}/>
      <Footer/>
    </div>
  );
}

export default App;
