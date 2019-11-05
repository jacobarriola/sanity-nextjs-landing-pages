import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";

const builder = imageUrlBuilder(client);

export default ({ name, photo, quote }) => {
  return (
    <div>
      <img
        src={builder
          .image(photo)
          .auto("format")
          .width(200)
          .height(200)
          .url()}
        alt={photo.alt}
      />
      <blockquote>
        {quote}{" "}
        {name && (
          <footer>
            <cite id="baseref">{name}</cite>
          </footer>
        )}
      </blockquote>
    </div>
  );
};
