import styled from 'styled-components'
import { Layout } from '~/components'
import { Link } from 'react-router-dom'

const Container = styled.div`

  header {
    padding-top: 50px;
  }
  
  .details {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 20px 10px 0px 10px;

    @media screen and (min-width: 600px) {
      flex-direction: row;
    }

    > div {
      display: flex;
      flex: 1;
      flex-direction: column;
    }

    p {
      padding: 0px 10px;
      text-align: left;
      text-indent: 25px;
    }
  }

  .how-they-met {
    text-indent: 25px;
    padding: 20px 20px 40px 20px;

    p {
      text-align: left;
    }
  }

`

export default () =>
  <Layout>
    <Container>
      <header>
        <h1 children={ `Sarah & Jacob` } />
        <h3 children='...are getting married!' />
      </header>
      <div className='details'>
        <div>
          <h4 children='reception & ceremony' />
          <p>June 1st, 2019 (<a href='#' children='add to calendar' />) at Hilton City Ave., Philadelphia. The Ceremony and Reception will be held at the hotel on Saturday.</p>
        </div>
        <div>
          <h4 children='what to do in Philly' />
          <p>There are lots of things you could do while in Philadelphia. For some recommendations, check out a full list of activities <Link to='/activities' children='here'/></p>
        </div>
        <div>
          <h4 children='hotel suggestions' />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div className='how-they-met'>
        <h3 children='how they met...' />
        <p children={ `Jacob and Sarah met at Penn Hillel (The Jewish Student Organization at University of Pennsylvania in Philadelphia). Jacob was leading services and Sarah decided to come to services. They met and became friends right away. They began dating on May 25th, 2013 after seeing a comedy show together. Over the next few years, they became closer. Jacob proposed to Sarah on November 24th, 2017 at Jacob's favorite restaurant in Philadelphia. They can't wait to celebrate their wedding with all of you!` } />
      </div>
    </Container>
  </Layout>