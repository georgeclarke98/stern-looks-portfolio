import React from "react";
import image from "../assets/shed.jpg";

const Home = () => {
  return (
    <main>
      <img
        src={image}
        alt="Stern Looks Clothing"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-72 px-8">
        <h1 className="text-5xl text-blue-500 titleHome leading-none lg:leading-snug home-name">
          Stern Looks
        </h1>
      </section>
    </main>
  );
};

export default Home;
