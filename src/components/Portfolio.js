import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

const Portfolio = () => {
  const [portfolioData, setPortfolio] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "portfolio"]{
        title,
        slug,
        mainImage{
            asset->{
                _id,
                url
            },
            alt
        }
    }`
      )
      .then((data) => setPortfolio(data))
      .catch(console.error);
  });

  return (
    <main className="min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center titleHome">Portfolio</h1>
        <h2 className="text-2xl flex justify-center mb-12 title">
          JME's funkay designs and concepts
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData &&
            portfolioData.map((portfolio, index) => (
              <article>
                <Link to={"/portfolio/" + portfolio.slug.current} key={portfolio.slug.current}>
                  <span
                    className="block h-64 relative rounded shadow leading-snug border-l-8 border-blue-300"
                    key={index}
                  >
                    <img
                      src={portfolio.mainImage.asset.url}
                      alt={portfolio.mainImage.alt}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                      <h3 className="text-lg font-blog px-3 py-4 bg-blue-300 bg-opacity-75 cursive rounded">
                        {portfolio.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
