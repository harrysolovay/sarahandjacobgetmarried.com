import { Layout, ExternalLink } from '~/components'

const style = { display: 'block', color: '#000', marginTop: '20px' }

export default () =>
  <Layout>
    <h1>Activities</h1>
    <div>

      <h3>Food to Explore</h3>
      <ExternalLink { ...{ style }} href='http://www.franklinfountain.com'>• Franklin Fountain</ExternalLink>
      <ExternalLink { ...{ style }} href='https://readingterminalmarket.org'>• Reading Terminal Market</ExternalLink>
      <ExternalLink { ...{ style }} href='https://www.visitphilly.com/areas/philadelphia-neighborhoods/chinatown/'>• China Town</ExternalLink>

      <h3>Historical Places</h3>
      <ExternalLink { ...{ style }} href='https://www.nps.gov/inde/learn/historyculture/stories-libertybell.htm'>• Liberty Bell</ExternalLink>
      <ExternalLink { ...{ style }} href='https://www.nps.gov/inde/planyourvisit/independencehall.htm'>• Independence Hall</ExternalLink>
      <ExternalLink { ...{ style }} href='https://www.visitphilly.com/things-to-do/attractions/city-hall/'>• City Hall</ExternalLink>
      <ExternalLink { ...{ style }} href='https://constitutioncenter.org'>• Constitution Center</ExternalLink>
      <ExternalLink { ...{ style }} href='https://www.visitphilly.com/things-to-do/attractions/rittenhouse-square-park/'>• Rittenhouse Square</ExternalLink>

      <h3>Museums and Other Places to Visit</h3>
      <ExternalLink { ...{ style }} href='https://www.philamuseum.org'>• Philadelphia Museum of Art</ExternalLink>
      <ExternalLink { ...{ style }} href='https://www.fi.edu'>• The Franklin Institute Science Museum</ExternalLink>
      <ExternalLink { ...{ style }} href='https://www.phillymagicgardens.org'>• Magic Gardens and South Street</ExternalLink>
      <ExternalLink { ...{ style }} href='https://www.nmajh.org'>• National Museum of American Jewish History</ExternalLink>
      <ExternalLink { ...{ style }} href='https://www.visitphilly.com/things-to-do/attractions/spruce-street-harbor-park/'>• Spruce Street Harbor Park</ExternalLink>
      <ExternalLink { ...{ style }} href='https://www.philadelphiazoo.org'>• Philadelphia Zoo</ExternalLink>
   
    </div>
  </Layout>