import './App.css';
import styled from 'styled-components';
import Search from './Search/Search';
import Videos from './Videos/Videos';
import PageNation from './PageNation/PageNation';
import axios from 'axios';
import useSWR from 'swr';
import { useCallback, useEffect, useState } from 'react';

const MainContainer = styled.div`
width: 80rem;
margin: 2rem auto;
border: 1px solid black;
display: block;
`
const fetcher = (url) => axios.get(url, { withCredentials: false }).then((result) => result.data);
function App() {
  const { data, error } = useSWR('http://trusuite.truabutment.com/api/tada/list', fetcher)
  const [result, setReslt] = useState(data)

  useEffect(() => {
    setReslt(data)
  }, [result])

  // console.log(data.data.filter((element) => element.category === 'PROMO'))
  // console.log(data.data.filter((element) => element.category === 'PROMO'))
  // useEffect(() => {
  //   setReslt(result)
  // }, [result])
  
  return (
    <MainContainer>
      <Search data={result} setReslt={setReslt}/>
      <Videos data={result}/>
      <PageNation data={result}/>
    </MainContainer>
  );
}

export default App;
