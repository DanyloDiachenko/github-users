import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from './components/Header';
import { Search } from './components/Search';
import { MainInfo } from './components/MainInfo';

function App() {

  const [inputValue, setInputValue] = useState('');
  const [userData, setUserData] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://api.github.com/users/danylodiachenko')
      .then(res => res.json())
      .then(data => setUserData(data));
  }, []);

  const { created_at } = userData;

  return (
    <>
      <Header />
      <Search
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onClick={() => {
          setInputValue('');
          fetch(`https://api.github.com/users/${inputValue}`)
            .then(res => res.json())
            .then(data => {
              if (data.message) {
                setError(true);
              } else {
                setUserData(data);
                setError(false);
              };
            });
        }}
        error={error}
      />
      {error == false ? (
        <MainInfo {...userData} />
      ) : ''}
    </>
  );
}

export default App;
