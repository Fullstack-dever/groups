import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import Page6 from './components/Page6';
import Page7 from './components/Page7';
import Page8 from './components/Page8';
import Page9 from './components/Page9';
import Page10 from './components/Page10';
import Page11 from './components/Page11';
import Page12 from './components/Page12';
import './styles/style.css';

function App() {
  return (
    <div className='body'>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Page1/>}/>
            <Route path="/groups" element={<Page1/>}/>
            <Route path="/start-a-group" element={<Page2/>}/>
            <Route path="/page3" element={<Page3/>}/>
            <Route path="/your-stream" element={<Page4/>}/>
            <Route path="/your-groups" element={<Page5/>}/>
            <Route path="/popular-groups" element={<Page6/>}/>
            <Route path="/find-groups" element={<Page7/>}/>
            <Route path="/manage-groups" element={<Page8 />}/>
            <Route path="/manage-group-detail" element={<Page9 />}/>
            <Route path="/join-request" element={<Page10 />}/>
            <Route path="/manage-group-member" element={<Page11 />}/>
            <Route path="/post-content" element={<Page12 />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
