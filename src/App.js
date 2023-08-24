import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Proposal from './components/Proposal/Proposal';
import Showcase from './components/Showcase/Showcase';
import Footer from './components/Footer/Footer';

function App() {
  const navbarItems = ['Proposta', 'Sobre nós', 'Projetos', 'Contato'];

  return (
    <header>
      <Navbar navbarItems={navbarItems} />
      <Showcase />
      <Proposal />
      <Projects />
      <About />
      <Footer />
    </header>
  )
}

export default App
