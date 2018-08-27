import Container, { Main } from './styles'
import { Nav } from '~/components'

export default ({ children }) => (
  <Container>
    <Nav />
    <Main { ...{ children }} />
  </Container>
)