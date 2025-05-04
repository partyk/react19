// Import ReactDOM pro manipulaci s DOM a StrictMode pro přísnější kontrolu kódu během vývoje
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';

// Import hlavní komponenty aplikace a stylovacího souboru
import { App } from './app/App';
import './index.css';

// Vytvoření kořene aplikace React, připojeného k HTML elementu s id "root"
const root = ReactDOM.createRoot(document.getElementById('root')!);
// V tomto případě document.getElementById('root')! říká TypeScriptu, že výsledek volání getElementById bude vždy existovat (nebude null), i když by za normálních okolností mohl být.

// Vykreslení aplikace do DOM
// Komponenta App je obalena v StrictMode, což pomáhá odhalovat chyby a varování během vývoje
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
