import styled from "styled-components";
import Hero from './components/Hero';
import About from './components/About';
import Nav from './components/Nav';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <ContainerApp>
        <Nav />
        <Hero />
        <About />
      </ContainerApp>
    </Router>
  );
}

export default App;


const ContainerApp = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
`;