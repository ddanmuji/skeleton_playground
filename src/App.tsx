import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterConfig from './RouterConfig';

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<span>Loading...</span>}>
      <RouterConfig />
    </Suspense>
  </BrowserRouter>
);

export default App;
