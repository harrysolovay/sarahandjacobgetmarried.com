import styled from 'styled-components'

export default styled.nav`

  position: fixed;
  top: 0; right: 0; left: 0;
  border-bottom: 1px solid #e9e9e9;

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
      padding: 22px;

      &.active {
        font-weight: 600;
      }
    }
  }

  background-color: #fff;
`