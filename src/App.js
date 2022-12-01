import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from './components/Header';
import { Search } from './components/Search';
import { MainInfo } from './components/MainInfo';

function App() {
  return (
    <>
      <Header />
      <Search />
      <MainInfo />
    </>
  );
}

export default App;
