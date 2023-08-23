import Navbar from './components/Navbar/Navbar';

function App() {
  const navbarItems = ['Proposta', 'Sobre nós', 'Projetos', 'Contato'];

  return (
    <header>
      <Navbar navbarItems={navbarItems} />
    </header>
  )
}

export default App
