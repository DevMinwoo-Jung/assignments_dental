import './App.css';
import styled from 'styled-components';
import Search from './Main/Search/Search';
import Videos from './Main/\bVideos/Videos';

const MainContainer = styled.div`
width: 80rem;
height: 50rem;
margin: 5rem auto;
border: 1px solid black;
display: block;
`

function App() {

  return (
    <MainContainer>
      <Search/>
      <Videos/>
    </MainContainer>
  );
}

export default App;
