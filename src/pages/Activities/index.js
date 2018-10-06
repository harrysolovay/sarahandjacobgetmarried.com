import { Layout, ExternalLink } from '~/components'

const style = { display: 'block', color: '#000', marginTop: '20px' }

export default () =>
  <Layout>
    <h1>Activities</h1>
    <div>
      <ExternalLink { ...{ style }} href='https://www.barnesfoundation.org/'>• Barnes Museum / classes / events</ExternalLink>
      <ExternalLink { ...{ style }} href='https://www.nmajh.org/'>• National Museum of American Jewish History</ExternalLink>
      <ExternalLink { ...{ style }} href='https://constitutioncenter.org/'>• National Constitution Center</ExternalLink>
      <ExternalLink { ...{ style }} href='https://www.visitphilly.com/'>• More activities on visitphiladelphia.com</ExternalLink>
    </div>
  </Layout>