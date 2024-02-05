import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Rutika Pandey",
    text: "The rarely stand by my own app to be consider in global way to be a critical saree center. while customer testimonials can appear in many formats, there are still some common guidelines to follow regardless of your chosen approach. Including these elements will make your customer testimonial feel more genuine for your target audience.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Kaamini Roy",
    text: "Im a very riches type of saree products by a daily useing in home. while customer testimonials can appear in many formats, there are still some common guidelines to follow regardless of your chosen approach. Including these elements will make your customer testimonial feel more genuine for your target audience.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Janahvi Singh",
    text: "The various area to create over a own shop in saree but he is best. While customer testimonials can appear in many formats, there are still some common guidelines to follow regardless of your chosen approach. Including these elements will make your customer testimonial feel more genuine for your target audience.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Kavita.D",
    text: "This shop is an very well quality products on me i have to specially usefull While customer testimonials can appear in many formats, there are still some common guidelines to follow regardless of your chosen approach. Including these elements will make your customer testimonial feel more genuine for your target audience.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
          There are many different ways a business can display customer testimonials. 
          When determining the best approach for your business, 
          it's essential to remember that different formats and mediums can have varying effects on your target audience.
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
