import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Result from './components/Result';
import History from './components/History';

function App() {
  return (
    <div>
      <BrowserRouter>
   
        <Route path="/register" exact component={Register}/>
        <Route path="/login" exact component={Login}/>
        <div>
          {localStorage.getItem("user") && <h2 >👤 {" "}Hi, {localStorage.getItem("user")}</h2>}
        <Route exact path="/" component={Home} />
        <Route path="/quiz" exact component={Quiz}/>
        <Route path="/result" exact component={Result}/>
        <Route path="/history" exact component={History}/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
