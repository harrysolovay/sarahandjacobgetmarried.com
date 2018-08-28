import { Layout } from '~/components'
import Container from './styles'

export default () =>
  <Layout>
    <Container>
      <div className='grid'>
        <div>
          <a
            className='amazon'
            href='https://www.amazon.com/wedding/jacob-ruden-sarah-motis-philadelphia-june-2019/registry/2IREQLMKR6U1W'
            target='_blank'
          />
        </div>
        <div>
          <a
            className='honeyfund'
            href='https://www.honeyfund.com/wedding/SarahandJacob4ever'
            target='_blank'
          />
        </div>
        <div>
          <a
            className='williams-sonoma'
            href='https://www.williams-sonoma.com/m/registry/find.html?firstName=Sarah&lastName=Motis&state=TN'
            target='_blank'
          />
        </div>
        <div>
          <a
            className='bed-bath-and-beyond'
            href='https://www.bedbathandbeyond.com/store/giftregistry/view_registry_guest.jsp?registryId=545354015&eventType=Wedding'
            target='_blank'
          />
        </div>
      </div>
    </Container>
  </Layout>