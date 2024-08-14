import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ShoppingProvider from './context/index.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ShoppingProvider>
    <App />
    </ShoppingProvider>
  </BrowserRouter>
);
