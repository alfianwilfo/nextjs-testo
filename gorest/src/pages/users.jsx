import { useGetUsersQuery } from "@/features/apiData";
import Navbar from "@/components/Navbar";
import CardUser from "@/components/CardUser";
export default function Users() {
  let { data } = useGetUsersQuery();
  console.log(data);
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
    </>
  );
}
