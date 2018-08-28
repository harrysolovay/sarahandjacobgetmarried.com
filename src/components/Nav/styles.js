import styled from 'styled-components'

export default styled.nav`

  position: fixed;
  top: 0; right: 0; left: 0;
  background-color: #fbe4ce;

  > div {
    height: 60px;
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
    max-width: 900px;
    margin: 0px auto;

    a {
      display: flex;
      align-items: center;
      padding: 0px 10px 3px 10px;
      color: #000;

      @media screen and (min-width: 600px) {
        padding: 0px 22px 3px 22px;
      }

      &.active {
        font-weight: 600;
      }
    }
  }
`