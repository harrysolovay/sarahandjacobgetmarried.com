import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Details, Gallery, Registry, Contact, FourOFour } from '~/pages'

export default () =>
  <BrowserRouter>
    <Switch>
      <Route exact={ true } path='/' component={ Details } />
      <Route path='/gallery' component={ Gallery } />
      <Route path='/registry' component={ Registry } />
      <Route path='/contact' component={ Contact } />
      <Route component={ FourOFour } />
    </Switch>
  </BrowserRouter>