import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Head from "next/head";
import {
  fetchMetadata,
  metadataToMetaTags,
} from "frames.js/next/pages-router/client";

export const getServerSideProps = async function getServerSideProps() {
  return {
    props: {
      metadata: await fetchMetadata(
        new URL(
          "/api/frames",
          process.env.VERCEL_URL
            ? `https://${process.env.VERCEL_URL}`
            : "http://localhost:3000"
        )
      ),
    },
  };
} satisfies GetServerSideProps<{
  metadata: Awaited<ReturnType<typeof fetchMetadata>>;
}>;

export default function Page({
  metadata,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Frames.js app</title>
        {metadataToMetaTags(metadata)}
      </Head>
      <iframe
        src="https://k-marry-f.com"
        style={{ width: '100%', height: '100vh', border: 'none' }} // Full width and height
        title="K Marry F"
      />
    </>
  );
}