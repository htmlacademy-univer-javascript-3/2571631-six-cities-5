import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import { cardArray } from './components/placecard/access-place-card';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <App availableCards={cardArray} />
  </React.StrictMode>
);

