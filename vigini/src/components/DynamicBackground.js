import { useState, useEffect } from "react";

const images = [
  "../public/assets/images/bg-image5.jpg",
  "../public/assets/images/bg-image3.jpg",
  "../public/assets/images/bg-image2.jpg",
  "../public/assets/images/bg-image1.jpg",
];

const DynamicBackground = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-screen w-full flex items-center justify-center transition-opacity duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${images[index]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <h1 className="text-white text-3xl font-bold">Welcome to My Website</h1>
    </div>
  );
};

export default DynamicBackground;
