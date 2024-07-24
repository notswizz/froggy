/* eslint-disable react/jsx-key */
import { createFrames, Button } from "frames.js/next/pages-router/server";

const frames = createFrames({
  basePath: "/api/frames",
});

const handleRequest = frames(async () => {
  const response = await fetch("https://www.k-marry-f.com/api/getPics");
  const data = await response.json();
  const imageUrl = data.url;

  return {
    image: <img src={imageUrl} alt="Fetched from API" />,
    buttons: [
      <Button action="post">Click me</Button>,
      // Add more buttons as needed
    ],
  };
});

export default handleRequest;