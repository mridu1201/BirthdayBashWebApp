import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Testimony.css';

const testimonials = [
  {
    id: 1,
    name1: 'Tae',
    content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image1: 'https://cdn.shopify.com/s/files/1/0550/5164/9153/files/Kim-Taehyung-1536x865.jpg?v=1693483475',
    name2: 'Jane Smith',
    content2: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image2: 'https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2018/02/22/15995efa2c56d184c19950a1f67e147c.jpg?w=777&crop=0,10,777px,437px',
  },
  {
    id: 2,
    name1: 'Alice Johnson',
    content1: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image1: 'https://images.hindustantimes.com/img/2021/04/07/550x309/acc2ee86-9228-11eb-b89c-ab0f5af63f59_1617810147378.jpg',
    name2: 'Michael Brown',
    content2: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image2: 'https://www.frontlist.in/storage/uploads/2021/08/Arundhati-Roy.jpg',
  },
  
];

const Testimony = () => {
  return (
    <div className="testimony-container">
      <h2 className="testimony-heading oregano-regular">Testimonials</h2> {/* Apply the font style */}
      <Carousel showArrows={true} showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={5000} stopOnHover={true}>
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimony-slide">
            <div className="testimony-card">
              <img src={testimonial.image1} alt={testimonial.name1} />
              <div className="testimony-info">
                <p className="testimony-content">{testimonial.content1}</p>
                <p className="testimony-name">{testimonial.name1}</p>
              </div>
            </div>
            <div className="testimony-card">
              <img src={testimonial.image2} alt={testimonial.name2} />
              <div className="testimony-info">
                <p className="testimony-content">{testimonial.content2}</p>
                <p className="testimony-name">{testimonial.name2}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimony;