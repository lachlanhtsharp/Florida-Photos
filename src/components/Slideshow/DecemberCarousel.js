import React, { useEffect, useState } from 'react'
import { DecCarouselData } from '../CarouselData/DecCarouselData';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const DecemberCarousel = () => {
    const [current, setCurrent] = useState(0);
    useEffect(() => {
        console.log(length);
    }, [])

    const data = DecCarouselData;
    const length = data.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(data) || data.length <= 0) {
        return null;
    }

    return (
        <div className='Carousel'>
            <FaArrowAltCircleLeft className='Left-Arrow' onClick={prevSlide} />

            {
                DecCarouselData.map((slide, index) => {
                    return (
                        <div key={index} className={index === current ? 'slide active' : 'slide'} >
                            {index === current && (
                                <div className='Carousel-Image-Container'>
                                    <img src={slide.image} className='Carousel-Image' alt='Carousel Image' />
                                    <div className='slide-title'>
                                        {slide.title}
                                    </div>
                                </div>
                            )}

                        </div>
                    )
                })
            }
            <FaArrowAltCircleRight className='Right-Arrow' onClick={nextSlide} />
        </div>
    )
}

export default DecemberCarousel
