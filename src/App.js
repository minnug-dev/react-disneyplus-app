import styled from 'styled-components';
import './App.css';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Category from './components/Category';
import Row from './components/Row';
import requests from './api/request';

function App() {
  return (
    <Container>
      <Nav />
      <Banner />
      <Category />
      <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action Moives" id="AM" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" id="CM" fetchUrl={requests.fetchComedyMovies}></Row>
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
