import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const PortfolioProject = () => {
  const [portfolioProject, setPortfolio] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
            title, 
            _id,
            slug,
            mainImage{
                asset->{
                    _id, 
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image,
        }`
      )
      .then((data) => setPortfolio(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!portfolioProject) return <div>Loading...</div>;

  return (
    <main className="min-h-screen p-12">
      <article className="contaier shadow-lg mx-auto bg-blue-300 rounded-lg">
        <header className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            <div className="bg-white bg-opacity-75 rounded p-12">
              <h1 className="titleHome text-5xl lg:text-5xl mb-4">
                {portfolioProject.title}
              </h1>
              <div className="flex justify-center title">
                <img
                  src={urlFor(portfolioProject.authorImage).url()}
                  alt={portfolioProject.name}
                  className="w-10 h-1- rounded-full"
                />
                <p className="title flex items-center pl-2 text-3xl">
                  {portfolioProject.name}
                </p>
              </div>
            </div>
          </div>
          <img
            src={portfolioProject.mainImage.asset.url}
            alt={portfolioProject.title}
            className="width-full object-cover rounded-t"
            style={{ height: "400px" }}
          />
        </header>
        <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
          <BlockContent
            blocks={portfolioProject.body}
            projectId="zt5ag1zs"
            dataset="production"
          />
        </div>
      </article>
    </main>
  );
};

export default PortfolioProject;
