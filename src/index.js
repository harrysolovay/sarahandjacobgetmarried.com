// eslint-disable-next-line
import { setBaseStyles, registerServiceWorker } from '~/utilities'
import { Component } from 'react'
import Router from './Router'
import { render } from 'react-dom'
import { hot } from 'react-hot-loader'

class App extends Component {

  render() {
    return (
      <Router />
    )
  }

}

render(<App />, document.getElementById('root'))
export default hot(module)(App)
registerServiceWorker()
