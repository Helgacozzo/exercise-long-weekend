import React from 'react';
import AllLists from './Components/AllLists';
import CustomList from './Components/CustomList';


const App = () => {

  const ul = ['pasta', 'caffè', 'zucca'];
  const ol = ['riso', 'insalata', 'patate'];

  return (

    <>
      <CustomList
        type="ul"
        list={ul}
      />

      <CustomList
        type="ol"
        list={ol}
      />

      <AllLists/>

    </>
  );
};

export default App;
