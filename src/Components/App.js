//npm import
import React from 'react';

//local import
import AppDisplay from '../Containers/AppDisplay';
import Header from '../Components/Header';
import Pagination from '../Components/Pagination';

const App = () => {
  return (
    <div>
      <Header />
      <AppDisplay />
      <Pagination />
    </div>
  )
}

export default App;
