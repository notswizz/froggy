/* eslint-disable react/jsx-key */
import { createFrames, Button } from "frames.js/next/pages-router/server";

const frames = createFrames({
  basePath: "/api/frames",
});

const handleRequest = frames(async (ctx) => {
  const response = await fetch("https://www.k-marry-f.com/api/getPics");
  const data = await response.json();
  const imageUrl = data.url;

  // Return the frame with the required meta tags
  return {
    head: (
      <>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content={imageUrl} />
        <meta property="fc:frame:image:aspect_ratio" content="1:1" /> {/* Set aspect ratio to 1:1 */}
        <meta property="og:image" content={imageUrl} />
      </>
    ),
    image: (
      <img 
        src={imageUrl} 
        alt="Fetched from API" 
        style={{ width: '100%', height: 'auto', aspectRatio: '1 / 1' }} // Maintain 1:1 aspect ratio
      />
    ),
    buttons: [
      <Button action="post">Kiss</Button>,
      <Button action="post">Marry</Button>,
      <Button action="post">Fade</Button>,
      <Button action="post_redirect">Play</Button>,
    ],
  };
});

export default handleRequest;