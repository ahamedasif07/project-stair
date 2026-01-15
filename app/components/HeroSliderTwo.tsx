"use client";

import React, { useState, useEffect } from "react";

interface Slide {
  id: number;
  title: string;
  image: string;
}

const HeroSliderTwo: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const slides: Slide[] = [
    {
      id: 1,
      title: "Modern Minimalist",
      image:
        "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      title: "Luxury Staircase",
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      title: "Wooden Stairs",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    },
    {
      id: 4,
      title: "Spiral Design",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop",
    },
    {
      id: 5,
      title: "Classic Architecture",
      image:
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop",
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
    }, 700);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  const getSlideClass = (index: number): string => {
    const diff = (index - activeIndex + slides.length) % slides.length;

    if (diff === 0) return "center";
    if (diff === 1) return "right-1";
    if (diff === 2) return "right-2";
    if (diff === slides.length - 1) return "left-1";
    if (diff === slides.length - 2) return "left-2";
    return "hidden";
  };

  return (
    <div className="carousel-container">
      <style jsx>{`
        .carousel-container {
          position: relative;
          width: 100%;
          height: 100vh;

          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .carousel-track {
          position: relative;
          width: 100%;
          height: 70%;
          max-width: 1400px;
          perspective: 2500px;
          perspective-origin: 50% 50%;
        }

        .slides-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
        }

        .slide-card {
          position: absolute;
          width: 300px;
          height: 500px;
          top: 50%;
          left: 50%;
          transform-style: preserve-3d;
          transition: all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
        }

        .slide-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.3), transparent);
          z-index: 1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .slide-card:hover::before {
          opacity: 1;
        }

        /* Center Slide - Main Focus */
        .slide-card.center {
          transform: translate(-50%, -50%) translateZ(0) scale(1.1);
          z-index: 5;
          opacity: 1;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.8);
        }

        /* Right Side - Position 1 */
        .slide-card.right-1 {
          transform: translate(-50%, -50%) translateX(450px) translateZ(-300px)
            rotateY(-35deg) scale(0.85);
          z-index: 4;
          opacity: 0.8;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
        }

        /* Right Side - Position 2 */
        .slide-card.right-2 {
          transform: translate(-50%, -50%) translateX(750px) translateZ(-500px)
            rotateY(-45deg) scale(0.7);
          z-index: 3;
          opacity: 0.5;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
        }

        /* Left Side - Position 1 */
        .slide-card.left-1 {
          transform: translate(-50%, -50%) translateX(-450px) translateZ(-300px)
            rotateY(35deg) scale(0.85);
          z-index: 4;
          opacity: 0.8;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
        }

        /* Left Side - Position 2 */
        .slide-card.left-2 {
          transform: translate(-50%, -50%) translateX(-750px) translateZ(-500px)
            rotateY(45deg) scale(0.7);
          z-index: 3;
          opacity: 0.5;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
        }

        /* Hidden slides */
        .slide-card.hidden {
          transform: translate(-50%, -50%) translateZ(-1000px) scale(0.3);
          z-index: 1;
          opacity: 0;
          pointer-events: none;
        }

        .slide-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .slide-card.center .slide-image {
          transform: scale(1.05);
        }

        .slide-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 30px;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.95) 0%,
            transparent 100%
          );
          transform: translateY(100%);
          transition: transform 0.4s ease 0.2s;
          z-index: 2;
        }

        .slide-card.center .slide-content {
          transform: translateY(0);
        }

        .slide-title {
          font-size: 28px;
          font-weight: 700;
          color: white;
          margin: 0;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
          letter-spacing: 0.5px;
        }

        .nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 70px;
          height: 70px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(15px);
          border: 2px solid rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          color: white;
          font-size: 32px;
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 300;
        }

        .nav-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-50%) scale(1.1);
        }

        .nav-btn:active {
          transform: translateY(-50%) scale(0.95);
        }

        .nav-btn.prev {
          left: 50px;
        }

        .nav-btn.next {
          right: 50px;
        }

        .dots-wrapper {
          position: absolute;
          bottom: 50px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 12px;
          z-index: 10;
          background: rgba(0, 0, 0, 0.2);
          padding: 15px 25px;
          border-radius: 50px;
          backdrop-filter: blur(10px);
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .dot::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 2px solid white;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .dot.active {
          background: white;
          transform: scale(1.4);
        }

        .dot.active::after {
          opacity: 1;
        }

        .dot:hover:not(.active) {
          background: rgba(255, 255, 255, 0.6);
          transform: scale(1.2);
        }

        @media (max-width: 1200px) {
          .slide-card {
            width: 350px;
            height: 450px;
          }

          .slide-card.right-1 {
            transform: translate(-50%, -50%) translateX(380px)
              translateZ(-300px) rotateY(-35deg) scale(0.85);
          }

          .slide-card.left-1 {
            transform: translate(-50%, -50%) translateX(-380px)
              translateZ(-300px) rotateY(35deg) scale(0.85);
          }

          .slide-card.right-2 {
            transform: translate(-50%, -50%) translateX(650px)
              translateZ(-500px) rotateY(-45deg) scale(0.7);
          }

          .slide-card.left-2 {
            transform: translate(-50%, -50%) translateX(-650px)
              translateZ(-500px) rotateY(45deg) scale(0.7);
          }
        }

        @media (max-width: 768px) {
          .slide-card {
            width: 280px;
            height: 380px;
          }

          .slide-card.right-2,
          .slide-card.left-2 {
            display: none;
          }

          .nav-btn {
            width: 55px;
            height: 55px;
            font-size: 24px;
          }

          .nav-btn.prev {
            left: 20px;
          }

          .nav-btn.next {
            right: 20px;
          }

          .slide-title {
            font-size: 22px;
          }
        }
      `}</style>

      <div className="carousel-track">
        <div className="slides-wrapper">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide-card ${getSlideClass(index)}`}
              onClick={() => {
                if (index !== activeIndex) {
                  handleDotClick(index);
                }
              }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="slide-image"
              />
              <div className="slide-content">
                <h2 className="slide-title">{slide.title}</h2>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-btn prev" onClick={handlePrev}>
          ‹
        </button>
        <button className="nav-btn next" onClick={handleNext}>
          ›
        </button>

        <div className="dots-wrapper">
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
  );
};

export default HeroSliderTwo;
