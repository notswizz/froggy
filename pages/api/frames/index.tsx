/* eslint-disable react/jsx-key */
import { createFrames, Button } from "frames.js/next/pages-router/server";

const frames = createFrames({
  basePath: "/api/frames",
});

const handleRequest = frames(async (ctx) => {
  // Removed redirect logic
  // if (ctx.pressedButton?.action === "post_redirect") {
  //   return redirect("https://k-marry-f.com");
  // }

  const response = await fetch("https://www.k-marry-f.com/api/getPics");
  const data = await response.json();
  const imageUrl = data.url;

  return {
    image: <img src={imageUrl} alt="Fetched from API" />,
    buttons: [
      <Button action="post">Kiss</Button>,
      <Button action="post">Marry</Button>,
      <Button action="post">Fade</Button>,
      <Button action="post_redirect">Play</Button>, // Redirect button removed
    ],
  };
});

export default handleRequest;