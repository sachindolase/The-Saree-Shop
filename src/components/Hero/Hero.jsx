import React from "react";
import Image1 from "../../assets/hero/saree11.jpg";
import Image2 from "../../assets/hero/saree16.jpg";
import Image3 from "../../assets/hero/saree15.jpg";
import Image4 from "../../assets/hero/saree18.jpg";
import Image5 from "../../assets/hero/saree17.jpg";
import Image6 from "../../assets/hero/saree19.jpg";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Designer sarees",
    description:
      "The my shopping website to cover a very well designer sarees in various and different different quality levels of an sarees in a discount.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Silk Pattern Sarees",
    description:
      "Silk is a very quality bell position sarees to my shop it's a quality gain and smoothy of saree wait to complete the demo it's to design.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Wedding Ceremoney Sarees",
    description:
      "Saree is an very popular product to an market to create your own sunshine products or your personality for the womens brand.",
  },
  {
    id: 4,
    img: Image4,
    title: "60% off on top brands to a very Budget Price",
    description:
       "The brands are a very good to a health on various types of an sarees to a cloth it's may be quality way product to design an develop a budget price.",
  },
  {
    id: 5,
    img: Image5,
    title: "20% off on Top Class Wedding Brands",
    description: 
       "The saree is a good and quality wear brands to it's a top most predictive show case own web app to be wedding ceremoney brands to be it's a wear.",
  },
  {
    id: 6,
    img: Image6,
    title: "30% off on all Paithanni Pattern Sarees",
    description:
      "Silk is a very quality bell position sarees to my shop it's a quality gain and smoothy of saree wait to complete the demo it's to design.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      onClick={handleOrderPopup}
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
