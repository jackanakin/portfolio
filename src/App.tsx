import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import HomePage from './pages/HomePage';

//@ts-ignore
library.add(fab, fas)

function App() {
  return (
    <HomePage />
  );
}

export default App;
