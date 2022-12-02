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

  const date = new Date(created_at);

  const dateYear = date.getFullYear();
  const dateNumber = date.getDay();
  console.log(userData)
  const dateMonth = date.getMonth();

  console.log(dateMonth)

  var arr = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sepr',
    'Oct',
    'Nov',
    'De',
  ];

  const dateMonthName = arr[dateMonth]
  console.log(dateMonthName)

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
                setError(false);
                console.log(created_at);
              };
            });
        }}
        error={error}
      />
      {error == false ? (
        <MainInfo {...userData} day={dateNumber} year={dateYear} month={dateMonthName} />
      ) : ''}
    </WrapperMain>
  );
}

export default App;
