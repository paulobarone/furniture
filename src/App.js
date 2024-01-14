import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Proposal from './components/Proposal/Proposal';
import Showcase from './components/Showcase/Showcase';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <header>
      <Navbar />
      <Showcase />
      <Proposal />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </header>
  )
}

export default App
