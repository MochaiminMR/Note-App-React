import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';


// styling
import './styles/style.css';
import { NoteApp } from './components/NoteApp';


const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <ContactApp /> */}
    
    <NoteApp />
  </BrowserRouter>
);
