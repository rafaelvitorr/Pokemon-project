import React from 'react';
import Header from '../../components/Header';
import FiltersPok from '../../components/FiltersPok';
import ContainerCards from './ContainerCards';

const Home = ()=>{
  
  return(
    <>
      <Header />
      <FiltersPok/>
      <ContainerCards/>
    </>
  );
}

export default Home;
