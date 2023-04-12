import React, {useState, useEffect} from "react";
import image1 from '../../Assets/Images/Template-2.jpg'
import image2 from '../../Assets/Images/e-Commerce-3-new.jpg'
import image3 from '../../Assets/Images/Project-management-2.jpg'
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";
import {RxDotFilled} from "react-icons/rx";

const Banner = () => {

    const slides = [
        {
            url: image1,
            title: "E-commerce is the activity of electronically",
            subTitle: "Ecommerce, also known as electronic commerce or internet commerce, refers to the buying and selling of goods or services using the internet, and the transfer of money and data to execute these transactions."
        },
        {
            url : image2,
            title: "E-commerce is the activity of electronically",
            subTitle: "Ecommerce, also known as electronic commerce or internet commerce, refers to the buying and selling of goods or services using the internet, and the transfer of money and data to execute these transactions."
        },
        {
            url: image3,
            title: "E-commerce is the activity of electronically",
            subTitle: "Ecommerce, also known as electronic commerce or internet commerce, refers to the buying and selling of goods or services using the internet, and the transfer of money and data to execute these transactions."
        }

    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) =>{
        setCurrentIndex(slideIndex)
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            nextSlide();
        }, 7000); // change the delay value here for the desired autoplay speed

        return () => clearTimeout(timer);
    }, [currentIndex]);

    return (
        <div className={"max-w-[100%] h-[800px] sm:h-[800px] w-full m-auto group"}>
            <div style={{ backgroundImage: `url(${slides[currentIndex].url})`}} className={"w-full h-full bg-center bg-cover duration-600 md:py-24"}>
                <div className={"flex flex-col px-5 sm:px-32 items-start justify-center py-32 sm:py-52"}>
                    <p className={"text-white font-bold text-4xl sm:text-6xl w-full sm:w-[50%]"}>
                        {slides[currentIndex].title}
                    </p>
                    <p className={"text-white font-normal text-xl w-full sm:w-[50%] my-9"}>
                        {slides[currentIndex].subTitle}
                    </p>
                    <button className={"rounded-2xl text-slate-800 bg-gray-100 p-3 w-[200px] font-semibold"}>
                        Read More
                    </button>

                </div>

                {/*left arrow*/}
                <div className={"duration-500 delay-200 hidden group-hover:block absolute top-[50%] sm:top[80%] -translate-x-0 translate-y-[-50%] left-5 rounded-full p-2 bg-black/20 text-white cursor-pointer"}>
                    <BsChevronCompactLeft onClick={prevSlide} size={30}
                    />
                </div>

                {/*right arrow*/}
                <div className={"duration-600 delay-200 hidden group-hover:block absolute top-[50%] sm:top[70%] -translate-x-0 translate-y-[-50%] right-5 rounded-full p-2 bg-black/20 text-white cursor-pointer"}>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>



            </div>

        </div>
    )
}

export default Banner

{/*<div className={"flex items-center justify-center py-[600px]"}>*/}
{/*    {*/}
{/*        slides.map((slide, slideIndex) => (*/}
{/*            <div*/}
{/*                key={slideIndex}*/}
{/*                onClick={()=>goToSlide(slideIndex)}*/}
{/*                className={"text-2xl cursor-pointer"}>*/}
{/*                <RxDotFilled />*/}
{/*            </div>*/}
{/*        ))*/}
{/*    }*/}

{/*</div>*/}