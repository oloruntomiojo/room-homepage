import { useEffect, useState } from "react";
import arrowRight from '../../assets/images/icon-angle-right.svg';
import arrowLeft from '../../assets/images/icon-angle-left.svg';
import { 
    SliderWrapper, 
    Slide, 
    SlideImage, 
    SliderController, 
    SlideContent, 
    SlideButton
 } from './SliderStyles';


const Slider = ({ data }) => {
    const [ current, setCurrent ] = useState(0);
    
    const prevSlide = () => {
        current > 0 && setCurrent(current - 1);
    }

    const nextSlide = () => {
        current < 2 && setCurrent(current + 1)
    }

    const changeSlide = (e) => {
        if(e.key === "ArrowLeft") {
            prevSlide();
        } else if(e.key === "ArrowRight") {
            nextSlide();
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            changeSlide(e);
        })
        return () => {
            document.removeEventListener('keydown', (e) => {
                changeSlide(e);
            })
        }
    })

    return (
        <SliderWrapper>
            { data.map((item, index) => (
                <Slide key={item.id}
                    className={index === current && "active"}
                >
                    { index === current && (
                    <>
                        <SlideImage>
                            <source media="(min-width: 500px)" srcSet={item.imageDesktop}/>
                            <source media="(max-width: 500px)" srcSet={item.imageMobile}/>
                            <img src={item.imageMobile} height="360px" alt={item.alt} loading="lazy" />
                        </SlideImage>

                        <SlideContent>
                            <h1>
                                {item.heading}
                            </h1>
                            <p>
                                {item.content}
                            </p>
                            <SlideButton>
                                shop now
                                <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fillRule="nonzero"/></svg>
                            </SlideButton>
                        </SlideContent>
                    </>
                    )}
                </Slide>
            ))}
            
            <SliderController>
                <button 
                    onClick={prevSlide}
                    onKeyDown={changeSlide}
                >
                    <img src={arrowLeft} alt="Left Slider Arrow"/>
                </button>
                <button 
                    onClick={nextSlide}
                    onKeyDown={changeSlide}
                >
                    <img src={arrowRight} alt="Right Slider Arrow"/>
                </button>
            </SliderController>
        </SliderWrapper>
     );
}
 
export default Slider;