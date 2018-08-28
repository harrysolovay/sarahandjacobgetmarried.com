import Container, { Main } from './styles'
import { Nav, Footer } from '~/components'

export default ({ children, backgroundColor }) => (
  <Container>
    <Nav />
    <Main { ...{ children, backgroundColor }} />
    <Footer />
  </Container>
)