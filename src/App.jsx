import { useState, useEffect } from 'react';

import {Header} from './components/Header';
import { Main } from './components/Main';

import { Controls } from './components/Controls';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  // TODO: add routing
  return (
    <div className="app" data-theme={theme}>
      <Header mode={theme} changeMode={toggleTheme} />
      <Main>
        <Controls />
      </Main>
    </div>
  );
}

export default App;
