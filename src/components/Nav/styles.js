import styled from 'styled-components'

export default styled.nav`

  position: fixed;
  top: 0; right: 0; left: 0;

  > div {
    height: 60px;
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      padding: 20px;
    }
  }

  background-color: #fff;
`