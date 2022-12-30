import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import { imageOfCarrousel } from './imagenes';

const items = [
  {
    src: imageOfCarrousel.imagenCebolla,
    altText: 'Cebolla',
    caption: 'Cebolla',
    key: 1,
  },
  {
    src: imageOfCarrousel.imagenLechuga,
    altText: 'Slide 2',
    caption: 'lechuga',
    key: 2,
  },
  {
    src: imageOfCarrousel.imagenMorron,
    altText: 'Slide 3',
    caption: 'Morron',
    key: 3,
  },
  {
    src: imageOfCarrousel.imagenTomate,
    altText: 'Slide 4',
    caption: 'Tomate',
    key: 4,
  },
  {
    src: imageOfCarrousel.imagenZanaoria,
    altText: 'Slide 5',
    caption: 'Zanaoria',
    key: 5,
  },
];

export const Carrousel = () => {
 

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} style={{height: '30rem', width: '100%', objectFit: 'contain'}} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      pause="hover"
      slide={true}
      dark={true}
      keyboard={true}
      enableTouch={true}
    /*   {...args} */
    >
      <CarouselIndicators
      
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
      style={{background: 'red'}}
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
      color='red'
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}
