// eslint-disable-next-line
import { setBaseStyles, registerServiceWorker } from '~/utilities'
import { Component } from 'react'
import Router from './Router'
import { hydrate, render } from 'react-dom'
import { hot } from 'react-hot-loader'

class App extends Component {

  render() {
    return (
      <Router />
    )
  }

}

const rootElement = document.getElementById('root')
if(rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement)
} else {
  render(<App />, rootElement)
}
export default hot(module)(App)
registerServiceWorker()
