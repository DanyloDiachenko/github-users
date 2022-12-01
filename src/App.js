import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import styled from 'styled-components';

import { Header } from './components/Header';
import { Search } from './components/Search';
import { MainInfo } from './components/MainInfo';

const WrapperMain = styled.main`
  @media(max-width: 767px) {
    padding: 0 8px;
  };
`;

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
    <WrapperMain>
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
                console.log(userData)
                setError(false);
              };
            });
        }}
        error={error}
      />
      {error == false ? (
        <MainInfo {...userData} />
      ) : ''}
    </WrapperMain>
  );
}

export default App;
