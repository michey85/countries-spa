import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import {Header} from './components/Header';
import { Main } from './components/Main';

import { HomePage } from './pages/HomePage';
import { NotFound } from './pages/NotFound';
import { CountryPage } from './pages/CountryPage';

function App() {
  const [countries, setCountries] = useState([]);

  const selectByCode = (codes) => {
    const selected = countries.filter(country => codes.includes(country.alpha3Code)).map(country => country.name);

    return selected.length ? selected : codes;
  }

  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route path="/" exact>
            <HomePage countries={countries} setCountries={setCountries} />
          </Route>
          <Route path="/country/:name">
              <CountryPage selectByCode={selectByCode}/>
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Main>
    </>
  );
}

export default App;
