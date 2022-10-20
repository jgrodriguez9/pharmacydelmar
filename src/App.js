import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import Section from './components/Section';
import anibiotic from './data/antibiotics.json'
import relaxers from './data/relaxers.json'
import slepping from './data/slepping.json'

function App() {
  return (
    <>
      <main>
        <Container className="py-5">
          <Header />
          <Section item={anibiotic}/>
          <Section item={relaxers}/>
          <Section item={slepping}/>
        </Container>
      </main>
      <Footer />
    </>    
  );
}

export default App;
