import Container from './styles'

export default () =>
  <Container>
    <div>
      <span children={ `copyright  © ${ new Date().getFullYear() }, Sarah & Jacob Ruden` } />
    </div>
  </Container>