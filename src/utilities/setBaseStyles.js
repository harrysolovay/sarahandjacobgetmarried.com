import { injectGlobal } from 'styled-components'
import normalize from 'styled-normalize'

injectGlobal`

  ${ normalize }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'omnes-pro', sans-serif;
    text-align: center;
    font-size: 17px;
    line-height: 25.5px;
    font-weight: 300;
    background-color: rgba(220, 20, 60, .5);
  }

  h1 {
    font-family: 'adorn-condensed-sans', sans-serif;
    font-size: 3em;
    line-height: 1em;
    @media screen and (min-width: 600px) {
      font-size: 4em;
    }
  }

  h3 {
    font-family: 'adorn-bouquet', sans-serif;
    font-size: 2em;
  }

  a {
    color: #3498db;
  }

`