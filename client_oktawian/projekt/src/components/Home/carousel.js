import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';




const items = [
  {
    src: 'http://i66.tinypic.com/1zdyhc0.jpg',
    altText: 'George',

    header: 'Meet George Story',
    caption: 'Meet George Story When George learned about his illness, his world collapsed, he needed too much money, the family did not have them, so he set up a collection',
    btc: '0.75 BTC achieved',
  },
  {
    src: 'http://i63.tinypic.com/c0t8y.jpg',
    altText: 'Suzie',

    header: 'Meet Suzie Story',
    caption: 'Meet George Story When George learned about his illness, his world collapsed, he needed too much money, the family did not have them, so he set up a collection',
    btc:'0.75 BTC Achieved'
  },
  {
    src: 'http://i66.tinypic.com/11816he.jpg',
    altText: 'Frank',

    header: 'Meet Frank Story',
    caption: 'Meet George Story When George learned about his illness, his world collapsed, he needed too much money, the family did not have them, so he set up a collection',
    btc:'0.75 BTC Achieved'
  }
];


export class CarouselFinal extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }





  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }






  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (




        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >


          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.header} captionText2={item.btc}>
            <p> {item.btc}</p>
          </CarouselCaption>



        </CarouselItem>
      );
    });

    return (


      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >


        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
 


        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />




      </Carousel>
    );
  }
}

