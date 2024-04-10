import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom'
import Posts from './pages/Posts';
import NotFoundPage from './pages/NotFoundPage';
import { SinglePage } from './pages/SinglePage/SinglePage';
import UpdatePostsBtn from './component/UpdatePostsBtn/UpdatePostsBtn';
// import HookTest from './Hooks/useRefHookTest';
// import UseMemoHookTest from './Hooks/UseMemoHookTest1';

function App() { 
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Posts />}/>
        <Route path='/:id' element={<SinglePage />}/>
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </div>
  );
}

export default App;

