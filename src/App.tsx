import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/register" component={SignUp} />
      <Route path="/login" component={SignIn} />
    </Switch>
  );
}

export default App;
