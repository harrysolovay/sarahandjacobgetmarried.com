import { Layout, ExternalLink } from '~/components'
import Container from './styles'

export default () =>
  <Layout>
    <Container>
      <div className='grid'>
        <div>
          <ExternalLink
            className='amazon'
            href='https://www.amazon.com/wedding/jacob-ruden-sarah-motis-philadelphia-june-2019/registry/2IREQLMKR6U1W'
          />
        </div>
        <div>
          <ExternalLink
            className='honeyfund'
            href='https://www.honeyfund.com/wedding/SarahandJacob4ever'
          />
        </div>
        <div>
          <ExternalLink
            className='williams-sonoma'
            href='https://www.williams-sonoma.com/m/registry/find.html?firstName=Sarah&lastName=Motis&state=TN'
          />
        </div>
        <div>
          <ExternalLink
            className='bed-bath-and-beyond'
            href='https://www.bedbathandbeyond.com/store/giftregistry/view_registry_guest.jsp?registryId=545354015&eventType=Wedding'
          />
        </div>
      </div>
    </Container>
  </Layout>