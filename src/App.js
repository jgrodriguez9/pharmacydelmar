import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Section from './components/Section';
import anibiotic from './data/antibiotics.json'
import relaxers from './data/relaxers.json'
import slepping from './data/slepping.json'

function App() {
  return (
    <Container className="py-5">
      <Header />
      <Section item={anibiotic}/>
      <Section item={relaxers}/>
      <Section item={slepping}/>
    </Container>
  );
}

export default App;
