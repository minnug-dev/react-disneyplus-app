import styled from 'styled-components';
import './App.css';
import Nav from './components/Nav';

function App() {
  return (
    <Container>
      <Nav />
    </Container>
  );
}

export default App;

const Container = styled.main`
  display: block;
  position: relative;
  overflow-x: hidden;
  top: 72px;
  min-height: calc(100vh - 250px);
  padding: 0 calc(3.5vw + 5px);

  &:after {
    content: "";
    position: absolute;
    background: url('/images/home-background.png') no-repeat center / cover fixed;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`
