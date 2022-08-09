import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/AppRouter';

function App() {
  const active = useSelector(state => state.pageReducer.isActive);

  if(active) {
    document.body.classList.add('lock');
  } else {
    document.body.classList.remove('lock');
  }

  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
