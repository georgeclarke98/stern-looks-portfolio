import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import image from "../assets/shed.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const About = () => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  });

  if (!author) return <div>Loading...</div>;

  return (
    <main className="relative">
      <img src={image} alt="shed" className="absolute object-cover w-full" />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-blue-300 rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
            alt={author.name}
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="title text-5xl mb-4">
              Yo it's <span>{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-white">
              <BlockContent blocks={author.bio} projectId="zt5ag1zs" dataset="production"></BlockContent>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
