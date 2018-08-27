// eslint-disable-next-line
import { setBaseStyles, registerServiceWorker } from '~/utilities'
import { Component } from 'react'
import WebFont from 'webfontloader'
import Router from './Router'
import { render } from 'react-dom'
import { hot } from 'react-hot-loader'

class App extends Component {

  render() {
    return (
      <Router />
    )
  }

  componentDidMount() {
    WebFont.load({
      id: 'lzj7oon',
      classes: false,
      events: false,
    },)
  }

}

render(<App />, document.getElementById('root'))
export default hot(module)(App)
registerServiceWorker()
