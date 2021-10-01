import {Header} from './components/Header';
import { Main } from './components/Main';

import { Controls } from './components/Controls';

function App() {

  // TODO: add routing
  return (
    <>
      <Header />
      <Main>
        <Controls />
      </Main>
    </>
  );
}

export default App;
