import Container from './styles'
import { NavLink } from 'react-router-dom'

export default () =>
  <Container>
    <div>

      <NavLink
        exact={ true }
        to='/'
        children='Details'
      />

      <NavLink
        to='/gallery'
        children='Gallery'
      />

      <NavLink
        to='/registry'
        children='Registry'
      />

      {
        /*
          <NavLink
            to='/contact'
            children='Contact'
          />
        */
      }

    </div>
  </Container>