import { Route, Switch } from 'react-router-dom'

import {Header} from './components/Header';
import { Main } from './components/Main';

import { HomePage } from './pages/HomePage';
import { NotFound } from './pages/NotFound';
import { CountryPage } from './pages/CountryPage';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/country/:id" component={CountryPage} />
          <Route component={NotFound} />
        </Switch>
      </Main>
    </>
  );
}

export default App;
