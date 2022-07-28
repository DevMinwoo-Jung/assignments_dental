import './App.css';
import styled from 'styled-components';
import Search from './Search/Search';
import Videos from './Videos/Videos';
import PageNation from './PageNation/PageNation';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCallback } from 'react';

const MainContainer = styled.div`
width: 80rem;
margin: 2rem auto;
display: block;
`
function App() {
  
  const [result, setReslt] = useState()
  const [total, setTotal] = useState(16)
  const [perPage, setPerPage] = useState(9)
  const [para, setPara] = useState('')
  const [category, setCategory] = useState([])

  const [change, setChange] = useState(false)
  const [page, setPage] = useState(1)
  const offset = (page - 1) * perPage

  const onSetPageFromMain = useCallback((e) => {
    setPage(e)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios.get(
        'http://trusuite.truabutment.com/api/tada/list?page=1',
        );
        setReslt(results.data.data);
        setPerPage(results.data.per_page)
        setTotal(results.data.total)
        setCategory(new Set(Object.keys(results.data.data).map((key) => results.data.data[key].category)))
      };
      fetchData();
    }, []);
    
    const onFilterData = useCallback((e) => {
      const fetchData = async () => {
        const results = await axios.get(
          `http://trusuite.truabutment.com/api/tada/list?keyword=${e}`,
          );
          setReslt(results.data.data)
          setPerPage(results.data.per_page)
          setTotal(results.data.total)
        };
        fetchData();
      }, [])
      
  const onSetResult = useCallback((e) => {
    if (e === 'ALL') {
      const fetchData = async () => {
        const results = await axios.get(
          'http://trusuite.truabutment.com/api/tada/list?page=1',
          );
          setReslt(results.data.data)
          setPerPage(results.data.per_page)
          setTotal(results.data.total)
          setChange(false)
        };
        fetchData();
    } else {
      const fetchData = async () => {
        const results = await axios.get(
          'http://trusuite.truabutment.com/api/tada/list?page=1',
          );
        const results2 = await axios.get(
          'http://trusuite.truabutment.com/api/tada/list?page=2',
          );
          setReslt([...results.data.data, ...results2.data.data].filter((element) => element.category === e))
          setPerPage(results.data.per_page)
          setTotal([...results.data.data, ...results2.data.data].filter((element) => element.category === e).length)
          setChange(true)
        };
        fetchData();
    }
  }, [])

  const onSearchByPage = useCallback((e) => {
    if (para !== '') {
      const fetchData = async () => {
        const results = await axios.get(
          `http://trusuite.truabutment.com/api/tada/list?page=${e}&keyword=${para}`,
        );
        setReslt(results.data.data);
        setPerPage(results.data.per_page)
        setTotal(results.data.total)
      };
      fetchData();
    } else if (para === ''){
      const fetchData = async () => {
        const results = await axios.get(
          `http://trusuite.truabutment.com/api/tada/list?page=${e}`,
        );
        setReslt(results.data.data);
        setPerPage(results.data.per_page)
        setTotal(results.data.total)
      };
      fetchData();
    }
  }, [para])
  return (
    <MainContainer>
      <Search onSetResult={onSetResult} result={result} onFilterData={onFilterData} setPara={setPara} category={category}/>
      <Videos perPage={perPage} offset={offset} page={page} change={change} result={result} total={total}/>
      <PageNation setPage={setPage} page={page} onSetPageFromMain={onSetPageFromMain} change={change} result={result} perPage={perPage} total={total} onSearchByPage={onSearchByPage}/>
    </MainContainer>
  );
}

export default App;
