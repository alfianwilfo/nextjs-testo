import Head from "next/head";
import Navbar from "@/components/Navbar";
import { useGetPostsQuery } from "@/features/apiData";
import { useEffect } from "react";
export default function Home() {
  const { data, error, isLoading } = useGetPostsQuery();
  useEffect(() => {
    data ? console.log(data, "><<") : null;
    console.log("masuk");
    console.log(data);
  }, []);
  console.log(data);
  return (
    <>
      <Navbar />
      <div>
        <div></div>
      </div>
    </>
  );
}
