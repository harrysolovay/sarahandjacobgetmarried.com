import styled from 'styled-components'

import amazon from '~/assets/images/amazon.png'
import honeyfund from '~/assets/images/honeyfund.png'
import bedBathAndBeyond from '~/assets/images/bed-bath-and-beyond.png'
import williamsSonoma from '~/assets/images/williams-sonoma.png'

export default styled.div`

  .grid {
    padding: 40px 10px 0px 10px;

    &:after {
      content: "";
      clear: both;
      display: table;
    }

    > div {
      width: 100%;
      padding: 10px;
      float: left;

      @media screen and (min-width: 600px) {
        width: 50%;
      }

      > a {
        display: block;
        width: 100%;
        padding-bottom: 61.81%;
        background-repeat: no-repeat;
        background-position: center;
        background-color: #fff;
      }
    }

    .amazon {
      background-image: url(${ amazon });
      background-size: 35%;
    }

    .honeyfund {
      background-image: url(${ honeyfund });
      background-size: 50%;
    }

    .williams-sonoma {
      background-image: url(${ williamsSonoma });
      background-size: 65%;
    }

    .bed-bath-and-beyond {
      background-image: url(${ bedBathAndBeyond });
      background-size: 40%;
    }

  }
`