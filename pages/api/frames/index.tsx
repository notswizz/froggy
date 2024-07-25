/* eslint-disable react/jsx-key */
import { createFrames, Button } from "frames.js/next/pages-router/server";

const frames = createFrames({
  basePath: "/api/frames",
});

const handleRequest = frames(async (ctx) => {
  const response = await fetch("https://www.k-marry-f.com/api/getPics");
  const data = await response.json();
  const imageUrl = data.url;

  return {
    image: (
      <img 
        src={imageUrl} 
        alt="Fetched from API" 

      />
    ),
    imageOptions: {
      aspectRatio: "1:1", // Set aspect ratio to 1:1
      title: "KMF",
    },
    buttons: [
      <Button action="post">Kiss</Button>,
      <Button action="post">Marry</Button>,
      <Button action="post">Fade</Button>,
    ],
  };
});

export default handleRequest;