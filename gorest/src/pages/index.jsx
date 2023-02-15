import Head from "next/head";
import Navbar from "@/components/Navbar";
import { useGetPostsQuery } from "@/features/apiData";
import { useEffect } from "react";
import Card from "@/components/CardHome";
export default function Home() {
  const { data, error, isLoading } = useGetPostsQuery(1);
  useEffect(() => {
    data ? console.log(data, "><<") : null;
    console.log("masuk");
    console.log(data);
  }, []);
  console.log(data);
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-12">
        <div className="col-start-2 col-end-12 grid grid-cols-3 gap-[20px] p-[50px]">
          {data
            ? data?.map((post, i) => {
                return <Card post={post} key={post.id} i={i} />;
              })
            : null}
        </div>
      </div>
    </>
  );
}
