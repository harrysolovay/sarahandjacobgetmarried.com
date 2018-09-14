import styled from 'styled-components'
import { Layout, ExternalLink } from '~/components'
import { Link } from 'react-router-dom'

const Container = styled.div`

  header {
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: #f6b9d8;

    @media screen and (min-width: 900px) {
      margin-top: 40px;
      border-radius: 3px;
    }

    > div {
      padding: 20px 0px 15px 0px;
      display: flex;
      flex: 1;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      > div {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        &.sarah {
          background-image: url(${ require('~/assets/images/sarah.png') })
        }
        &.jacob {
          background-image: url(${ require('~/assets/images/jacob.png') })
        }
      }

      img {
        width: 30px;
        height: 30px;
        margin: 0px;
        @media screen and (min-width: 600px) {
          margin: 0px 30px;
        }
      }

    }
  }
  
  .details {
    display: flex;
    background-color: #d7e5f3;
    flex: 1;
    flex-direction: column;
    padding: 20px 10px 30px 10px;

    @media screen and (min-width: 900px) {
      margin-top: 40px;
      border-radius: 3px;
    }

    @media screen and (min-width: 600px) {
      flex-direction: row;
    }

    > div {
      display: flex;
      flex: 1;
      flex-direction: column;
    }

    h4 {
      margin-bottom: 0px;
    }

    p {
      margin-top: 0px;
      padding: 0px 10px;
      text-align: left;
      text-indent: 25px;
    }
  }

  .how-they-met {
    text-indent: 25px;
    padding: 20px 20px 40px 20px;
    background-color: #bcacd0;

    @media screen and (min-width: 900px) {
      margin-top: 40px;
      border-radius: 3px;
    }

    p {
      text-align: left;
    }
  }

`

export default () =>
  <Layout>
    <Container>
      <header>
        <div>
          <div className='sarah' />
          <img src={ require('~/assets/images/heart.png') } alt='heart' />
          <div className='jacob' />
        </div>
        <h1 children={ `Sarah & Jacob` } />
        <h3 children='...are getting married!' />
      </header>
      <div className='details'>
        <div>
          <h4 children='reception & ceremony' />
          <p>June 1st, 2019 (<ExternalLink href='#' children='add to calendar' />) at Hilton City Ave., Philadelphia. The Ceremony and Reception will be held at the hotel on Saturday.</p>
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