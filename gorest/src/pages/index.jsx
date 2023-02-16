import Head from "next/head";
import Navbar from "@/components/Navbar";
import { useGetPostsQuery } from "@/features/apiData";
import { useEffect, useState } from "react";
import Card from "@/components/CardHome";
import { Pagination } from "@mui/material";
import { useForPaginationQuery } from "@/features/apiData";
export default function Home() {
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useGetPostsQuery(page);
  const { data: pagin, isLoading: load } = useForPaginationQuery();

  useEffect(() => {
    setTotalPage(Math.round(pagin?.length / 6));
  }, [load]);

  let handleChangePagination = (e, v) => {
    setPage(v);
  };
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
      <div className="flex justify-center">
        <Pagination onChange={handleChangePagination} count={totalPage} />
      </div>
    </>
  );
}
