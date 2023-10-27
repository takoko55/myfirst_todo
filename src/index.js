import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Task from './components/Task';
import App from './App';
import NewTaskButton from './components/NewTaskButton';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <NewTaskButton />
    <Task />
    <Task />
    <Task />
    <App />
  </React.StrictMode>
);
