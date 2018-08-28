import { Component, Fragment } from 'react'
import { Layout } from '~/components'
import Container from './styles'
import { default as LibGallery } from 'react-photo-gallery'
import Lightbox from 'react-images'
import * as contentful from 'contentful'

export default class Gallery extends Component {

  state = {
    loaded: false,
    currentImage: 0,
    thumbnails: [
      { src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 4, height: 3, caption: 'A forest' },
      { src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1, caption: 'A forest' },
      { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 3, height: 4, caption: 'A forest' },
      { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 4, caption: 'A forest' },
      { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 4, caption: 'A forest' },
      { src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 4, height: 3, caption: 'A forest' },
      { src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 3, height: 4, caption: 'A forest' },
      { src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 4, height: 3, caption: 'A forest' },
      { src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 4, height: 3, caption: 'A forest' },
    ],
    full: [
      { src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599' },
      { src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799' },
      { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799' },
      { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799' },
      { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799' },
      { src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599' },
      { src: 'https://source.unsplash.com/zh7GEuORbUw/600x799' },
      { src: 'https://source.unsplash.com/PpOHJezOalU/800x599' },
      { src: 'https://source.unsplash.com/I1ASdgphUH4/800x599' },
    ],
  }

  render() {
    return (
      <Layout>
        <Container>
          <h1 children='Some photos' />
          { this.state.loaded &&
            <Fragment>
              <LibGallery photos={ this.state.thumbnails } onClick={ this.openLightbox } />
              <Lightbox images={ this.state.full }
                onClose={ this.closeLightbox }
                onClickPrev={ this.gotoPrevious }
                onClickNext={ this.gotoNext }
                currentImage={ this.state.currentImage }
                isOpen={ this.state.lightboxIsOpen }
              />
            </Fragment>
          }
        </Container>
      </Layout>
    )
  }

  openLightbox = (event, obj) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    })
  }

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }

  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }

  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }

  componentDidMount() {
    const client = contentful.createClient({
      space: 'c2nxjsjivb3j',
      accessToken: '1f6fda85f9e6cd25f0cb6279d1fa09bbd2a605965255144c2543ce6aec44d6eb'
    })
    client.getAssets().then((response) => {
      // console.log(response.items[0].fields.file.details.image)
      const images = response.items
        .map((item) => item.fields)
        .map(({ file: { url: src, details: { image } }, caption }) => ({
          src, caption, ...image
        }))

      this.setState({
        thumbnails: images.map(({ src, width, height, }) => ({
          src: `${ src }?w=400`,
          width, height,
        })),
        full: images
          .map(({ src, caption }) => ({
            src, caption,
          })),
        loaded: true,
      }, () => console.log(this.state))
    })
  }

}