import React from 'react';
import './App.css';
import { DrawerMenu } from './Menu/Menu';
import { Route, Routes } from 'react-router';
import { Contests } from './Contests/Contests';
import { Participants } from './Participants/Participants';
import { Start } from './Start/Start';
import { Event } from './Event/Event';

function App() {
  return (
    <div className="App"> 
      <DrawerMenu />
      <Routes>
        <Route  path='/contest' element={<Contests />} />
        <Route path='/participants' element={<Participants />} />
        <Route path='/event' element={<Event />} />
        <Route path='*' element={<Start />}/>
      </Routes>
    </div>
  );
}

export default App;
