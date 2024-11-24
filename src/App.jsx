import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Movie from './components/Movie';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const [search, setSearch] = useState('spider');
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleInputChange = (e) => setSearch(e.target.value);

  const getMovies = async () => {
    const query = search || 'spider';
    try {
      const { data } = await axios.get(`https://www.omdbapi.com/?apikey=af397643&s=${query}`);
      dispatch({ type: 'GET_DATA', payload: { allMovie: data.Search } });
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies();
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Header
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <Movie allMovie={state.allMovie} />
    </>
  );
};

export default App;
