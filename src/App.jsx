import React from 'react'
import { BrowserRouter, Redirect, Route, Switch, useParams } from 'react-router-dom'
import './App.css'
import { ProposalDetailsPage, ProposalListPage } from './proposals'

const App = () => (
  <BrowserRouter>
    <div className="App">
      <main className="App_content">
        <Switch>
          <Route path="/proposals/:proposalId">
            {() => (
              <ProposalDetailsPage id={'84c9927f-231b-45c6-9d34-f395f13ade29'} />
            )}
          </Route>
          <Route path="/proposals">
            {() => (
              <ProposalListPage />
            )}
          </Route>
          <Redirect to="/proposals" />
        </Switch>
      </main>
    </div>
  </BrowserRouter>
)

export default App
