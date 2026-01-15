"use client";

import React, { useState, useEffect } from "react";

interface Slide {
  id: number;
  title: string;
  image: string;
}

const CarouselSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const slides: Slide[] = [
    {
      id: 1,
      title: "Ish Stairs",
      image:
        "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      title: "Modern Installation",
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      title: "Luxury Staircase",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    },
  ];

  const handleNext = (): void => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = (): void => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleDotClick = (index: number): void => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    setActiveIndex(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  const getSlideClass = (index: number): string => {
    const diff = (index - activeIndex + slides.length) % slides.length;

    if (diff === 0) return "active";
    if (diff === 1 || diff === -(slides.length - 1)) return "next";
    if (diff === slides.length - 1 || diff === -1) return "prev";
    return "hidden";
  };

  return (
    <>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .carousel-container {
          position: relative;
          width: 100%;

          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .carousel-stage {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1200px;
        }

        .slides-track {
          position: relative;
          width: 600px;
          height: 500px;
          transform-style: preserve-3d;
        }

        .slide-item {
          position: absolute;
          width: 300px;
          height: 400px;
          top: 50%;
          left: 50%;
          margin-left: -150px;
          margin-top: -190px;
          background: #1a1a1a;
          border-radius: 30px;

          overflow: hidden;
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.8);
          cursor: pointer;
        }

        /* Active center card */
        .slide-item.active {
          transform: translateX(0) translateZ(10px) rotateY(0deg) scale(1.15);
          z-index: 10;
          opacity: 1;
        }

        /* Next card - right side with perspective tilt */
        .slide-item.next {
          transform: translateX(200px) translateZ(-60px) rotateY(-55deg)
            scale(0.85);
          z-index: 5;
          opacity: 0.6;
        }

        /* Previous card - left side with perspective tilt */
        .slide-item.prev {
          transform: translateX(-200px) translateZ(-150px) rotateY(55deg)
            scale(0.85);
          z-index: 5;
          opacity: 0.6;
        }

        /* Hidden cards */
        .slide-item.hidden {
          transform: translateX(0) translateZ(-400px) scale(0.5);
          z-index: 1;
          opacity: 0;
          pointer-events: none;
        }

        .slide-image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .slide-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .slide-item.active .slide-image {
          transform: scale(1.05);
        }

        .slide-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 25px;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 0, 0, 0.7) 50%,
            transparent 100%
          );
          z-index: 2;
        }

        .slide-title {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 26px;
          font-weight: 600;
          color: #fff;
          margin: 0;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
          letter-spacing: 0.5px;
        }

        /* Navigation arrows */
        .arrow-btn {
          position: absolute;
          top: 55%;
          transform: translateY(-50%);
          width: 60px;
          height: 60px;
          background: rgba(128, 128, 128, 0.2);
          border: none;
          border-radius: 50%;
          color: #fff;
          font-size: 28px;
          cursor: pointer;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
        }

        .arrow-btn:hover {
          background: rgba(128, 128, 128, 0.4);
          transform: translateY(-50%) scale(1.1);
        }

        .arrow-btn:active {
          transform: translateY(-50%) scale(0.95);
        }

        .arrow-btn.left {
          left: 40px;
        }

        .arrow-btn.right {
          right: 40px;
        }

        /* Dots indicator */
        .dots-indicator {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 20;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          width: 30px;
          border-radius: 5px;
          background: #d4af37;
        }

        .dot:hover:not(.active) {
          background: rgba(255, 255, 255, 0.6);
        }

        @media (max-width: 1024px) {
          .slides-track {
            width: 500px;
          }

          .slide-item {
            width: 320px;
            height: 420px;
            margin-left: -160px;
            margin-top: -210px;
          }

          .slide-item.next {
            transform: translateX(240px) translateZ(-150px) rotateY(-55deg)
              scale(0.85);
          }

          .slide-item.prev {
            transform: translateX(-240px) translateZ(-150px) rotateY(55deg)
              scale(0.85);
          }
        }

        @media (max-width: 768px) {
          .slides-track {
            width: 400px;
          }

          .slide-item {
            width: 280px;
            height: 380px;
            margin-left: -140px;
            margin-top: -190px;
          }

          .slide-item.next {
            transform: translateX(200px) translateZ(-150px) rotateY(-55deg)
              scale(0.75);
          }

          .slide-item.prev {
            transform: translateX(-200px) translateZ(-150px) rotateY(55deg)
              scale(0.75);
          }

          .arrow-btn {
            width: 50px;
            height: 50px;
            font-size: 24px;
          }

          .arrow-btn.left {
            left: 20px;
          }

          .arrow-btn.right {
            right: 20px;
          }

          .slide-title {
            font-size: 22px;
          }
        }

        @media (max-width: 480px) {
          .slide-item {
            width: 250px;
            height: 340px;
            margin-left: -125px;
            margin-top: -170px;
          }

          .slide-item.next {
            transform: translateX(160px) translateZ(-150px) rotateY(-55deg)
              scale(0.7);
            opacity: 0.4;
          }

          .slide-item.prev {
            transform: translateX(-160px) translateZ(-150px) rotateY(55deg)
              scale(0.7);
            opacity: 0.4;
          }
        }
      `}</style>

      <div className="carousel-container">
        <div className="carousel-stage">
          <div className="slides-track">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`slide-item ${getSlideClass(index)}`}
                onClick={() => {
                  if (index !== activeIndex) {
                    handleDotClick(index);
                  }
                }}
              >
                <div className="slide-image-wrapper ">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="slide-image"
                  />
                  <div className="slide-overlay">
                    <h2 className="slide-title">{slide.title}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="arrow-btn left" onClick={handlePrev}>
            ‹
          </button>
          <button className="arrow-btn right" onClick={handleNext}>
            ›
          </button>

          <div className="dots-indicator">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`dot ${index === activeIndex ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselSlider;
