import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

const Post = () => {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
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
      .then((data) => setPost(data))
      .catch(console.error);
  });

  return (
    <main className="min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl titleHome">Blog Posts</h1>
        <h2>Just JME spurting out shite</h2>
        <div>
          <article>
            <Link>
              <span>
                <img />
                <span>
                  <h3></h3>
                </span>
              </span>
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Post;
