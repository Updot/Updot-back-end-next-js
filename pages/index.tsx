import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useTheme } from "next-themes";

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <Head>
        <title>
          UPDOT | Best Web Development & Design Company in Bangalore
        </title>
        <meta
          name="description"
          content="UPDOT is a leading web development and design company in Bangalore, India. We offer custom website development, ecommerce websites, mobile app development, SEO services and more."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="UPDOT is a leading web development and design company in Bangalore, India. We offer custom website development, ecommerce websites, mobile app development, SEO services and more."
        />
        <meta
          property="og:title"
          content="UPDOT | Best Web Development & Design Company in Bangalore"
        />
        <meta
          property="og:description"
          content="UPDOT is a leading web development and design company in Bangalore, India. We offer custom website development, ecommerce websites, mobile app development, SEO services and more."
        />
        <meta
          property="og:quote"
          content="UPDOT is a leading web development and design company in Bangalore, India. We offer custom website development, ecommerce websites, mobile app development, SEO services and more."
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/updot-193d3.appspot.com/o/assets%2Fsocial-image.png?alt=media&token=2dc28c2d-5ae0-4262-b5db-6452939042e6"
        />
        {/* <meta property="og:url" content={url} /> */}
        <meta
          property="og:site_name"
          content="UPDOT | Best Web Development & Design Company in Bangalore"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:site" content="@sourab_pramanik" />
        <meta name="twitter:creator" content="@sourab_pramanik" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="UPDOT | Best Web Development & Design Company in Bangalore"
        />
        <meta
          name="twitter:description"
          content="UPDOT is a leading web development and design company in Bangalore, India. We offer custom website development, ecommerce websites, mobile app development, SEO services and more."
        />
        <meta
          name="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/updot-193d3.appspot.com/o/assets%2Fsocial-image.png?alt=media&token=2dc28c2d-5ae0-4262-b5db-6452939042e6"
        />
      </Head>
      <div className="bg-white dark:bg-black h-full">
        <h1 className="text-3xl text-black dark:text-white">
          Welcome to Your App
        </h1>
        <button
          className="text-black dark:text-white"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          toggle
        </button>
      </div>
    </>
  );
};

export default Home;
