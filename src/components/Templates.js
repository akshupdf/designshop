import React, { useState, useEffect } from 'react';

const Templates = () => {
  const slides = [

    {
      id: 1,
      title: "Define Sound",
      description: "A web project for Music",
      image: "https://public-files.gumroad.com/fnsf2x2qweis9nf109jemgrkac0a",
      link: "https://www.instagram.com/p/DATWhiqtR8U/",
      thumbnail: "/api/placeholder/100/100"
    },
   
    {
      id: 2,
      title: "Reimaging Your Space",
      description: "A web project To Reimaging Your Space",
      image: "https://public-files.gumroad.com/35f9n5bak433khis31veshcboozb",
      link: "https://www.instagram.com/p/C_26lp1gaKN/",
      thumbnail: "/api/placeholder/100/100"
    },
    {
      id: 3,
      title: "Modern Furniture",
      description: "A demo project showcasing Modern Furnitures",
      image: "https://public-files.gumroad.com/gff9v8p7lfvk8kvf3u0nsqwhkyh5",
      link: "https://www.instagram.com/p/DAV2kdJN_Po/",
      thumbnail: "/api/placeholder/100/100"
    }
  ];
  

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const prev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const next = () => {
    setCurrentSlide((prev) => (prev + 1 ) % slides.length)
  }

  return (
    <div className="relative w-[100%] overflow-hidden h-screen  mx-auto" name="temp">
      {/* Main Slide */}
      <div className="relative h-screen  rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full transition-all duration-500 ease-in-out transform ${
              index === currentSlide ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute w-full h-full object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent">
              <div className="p-8 text-white max-w-xl h-full flex flex-col justify-center">
                <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg mb-6">{slide.description}</p>
                <div className="flex gap-4">
                  <button className="px-6 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors">
                  <a href={slide.link} target="_blank" rel="noopener noreferrer" className="see-more-button">
              See More
            </a>
                  </button>
                  {/* <button className="px-6 py-2 border border-white rounded hover:bg-white/20 transition-colors">
                    Subscribe
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-[10vh] transform -translate-x-1/2 flex items-center gap-4">
        {/* Arrow Controls */}
        <div className="flex gap-2">
          <button
            onClick={prev}
            className="w-8 h-8 flex items-center justify-center bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="w-8 h-8 flex items-center justify-center bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        </div>

      {/* Thumbnails */}
      <div className="absolute lg:bottom-4 sm:bottom-[12vh] mx-auto  transform -translate-x-1/2 flex gap-2 right-[10vh]">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`group relative ${
              currentSlide === index ? 'w-16 h-16' : 'w-12 h-12'
            } transition-all duration-300 overflow-hidden rounded-lg`}
          >
            <img
              src={slide.image}
              alt={`Go to slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors ${
                currentSlide === index ? 'bg-transparent' : ''
              }`}
            />
          </button>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute bottom-4 sm:right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
      >
        {isAutoPlaying ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default Templates;