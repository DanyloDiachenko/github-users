import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from './components/Header';
import { Search } from './components/Search';
import { MainInfo } from './components/MainInfo';

function App() {

  const [userData, setUserData] = useState('');

  useEffect(() => {
    fetch('https://api.github.com/users/danylodiachenko')
      .then(res => res.json())
      .then(data => setUserData(data));
  }, []);

  const { name, } = userData;

  return (
    <>
      <Header />
      <Search />
      <MainInfo
        name={name}

      />
    </>
  );
}

export default App;
