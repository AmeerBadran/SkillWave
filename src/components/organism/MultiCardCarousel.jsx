
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { testimonialsData } from '../../constants/testimonialsData';
import TestimonialCard from '../molecule/TestimonialCard';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1084 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1084, min: 664 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 664, min: 0 },
    items: 1
  }
};

const MyCarousel = () => {

  return (
    <Carousel swipeable={false}
      draggable={true}
      showDots={true}
      arrows={false}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      transitionDuration={500}
    >
      {testimonialsData.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          image={testimonial.image}
          name={testimonial.name}
          title={testimonial.title}
          company={testimonial.company}
          review={testimonial.review}
          rating={testimonial.rating}
        />
      ))}
    </Carousel>
  );
};

export default MyCarousel;