import { useGetUsersQuery } from "@/features/apiData";
import Navbar from "@/components/Navbar";
import CardUser from "@/components/CardUser";
import { Pagination } from "@mui/material";
import { useForPaginationUserQuery } from "@/features/apiData";
import { useEffect, useState } from "react";
export default function Users() {
  let [page, setPage] = useState(1);
  let [totalPage, setTotalPage] = useState(0);
  let { data } = useGetUsersQuery(page);
  let { data: pagin, isLoading } = useForPaginationUserQuery();
  useEffect(() => {
    setTotalPage(Math.round(pagin?.length / 4));
  }, [isLoading]);
  let handleChangePagination = (e, v) => {
    setPage(v);
  };
  return (
    <>
      <Navbar />

      <div className="grid grid-cols-2 gap-[10px] p-[50px]">
        {data
          ? data.map((user, i) => {
              return <CardUser user={user} key={user.id} i={i} />;
            })
          : null}
      </div>
      <div className="flex justify-center">
        <Pagination onChange={handleChangePagination} count={totalPage} />
      </div>
    </>
  );
}
