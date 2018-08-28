import { Component } from 'react'
import { Layout } from '~/components'
import Container from './styles'
import { default as LibGallery } from 'react-photo-gallery'
import Lightbox from 'react-images'

const photos = [
  { src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1 },
  { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 4, height: 3 }
]

export default class Gallery extends Component {

  state = {
    currentImage: 0
  }

  render() {
    return (
      <Layout>
        <Container>
          <h1 children='Some photos' />
          <LibGallery photos={ photos } onClick={ this.openLightbox } />
          <Lightbox images={ photos }
            onClose={ this.closeLightbox }
            onClickPrev={ this.gotoPrevious }
            onClickNext={ this.gotoNext }
            currentImage={ this.state.currentImage }
            isOpen={ this.state.lightboxIsOpen }
          />  
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

}