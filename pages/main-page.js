import React from "react";
import { useRouter } from "next/router";
import Cookie from "universal-cookie";
import Layout from "@/components/Layout";
import Link from "next/link";

const cookie = new Cookie();

const MainPage = () => {
  const router = useRouter();
  const logout = () => {
    cookie.remove("access_token");
    router.push("/");
  };

  return (
    <Layout title="MainPage">
      <div className="mb-10">
        <Link
          href="/blog-page"
          className="bg-indigo-500 mr-8 text-white px-4 py-12 rounded hover:bg-indigo-600"
        >
          Visit Blog by SSG + ISR
        </Link>
        <Link
          href="/task-page"
          className="bg-indigo-500 mr-8 text-white px-4 py-12 rounded hover:bg-indigo-600"
        >
          Visit Task by SSG + ISR
        </Link>
      </div>
      <svg
        onClick={logout}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="cursor-pointer mt-10 w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
        />
      </svg>
    </Layout>
  );
};

export default MainPage;
