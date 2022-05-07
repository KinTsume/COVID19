import logo from './logo.svg';
import './App.css';
import Main from './components/main.js';
import GlobalStyle from './styles/global-style';
import styledComponents from 'styled-components';

const Container = styledComponents.div`
  margin: auto;
  margin-top: 10px;
  padding: 10px;
  background-color: transparent;
  width: 75%;
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Main />
    </Container>
  );
}

export default App;
