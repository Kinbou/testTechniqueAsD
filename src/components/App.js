import React from 'react';
import { Switch, Route } from "react-router-dom";
import ListDeclarations from 'src/containers/ListDeclarations';
// import ListDeclarations from 'src/components/ListDeclarations'
import DetailDeclaration from 'src/containers/DetailDeclaration';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Test Technique ASD</h1>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <ListDeclarations />
          </Route>
          <Route exact path="/details/:id">
            <DetailDeclaration />
          </Route>
        </Switch>   
      </main>
    </div>
  );
}

export default App;
