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
