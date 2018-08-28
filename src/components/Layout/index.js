import Container, { Main } from './styles'
import { Nav, Footer } from '~/components'

export default ({ children }) => (
  <Container>
    <Nav />
    <Main { ...{ children }} />
    <Footer />
  </Container>
)