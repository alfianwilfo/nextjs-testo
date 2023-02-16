import { useRouter } from "next/router";
import { useGetPostDetailsQuery } from "@/features/apiData";
import { useGetCommentQuery } from "@/features/apiData";
import Comment from "@/components/CardComment";
import Navbar from "@/components/Navbar";
export default function Details() {
  let router = useRouter();
  let { data } = useGetPostDetailsQuery(router.query.id);
  let { data: comments } = useGetCommentQuery(router.query.id);
  console.log(data);
  console.log(comments);
  return (
    <>
      <Navbar />
      {data ? (
        <div className="grid grid-cols-12">
          <div className="col-start-3 col-end-11 flex flex-col gap-y-[10px] outline outline-1 p-[10px] my-[30px] bg-[#E3FDFD]">
            <div>
              <div className="text-center font-bold">{data.title}</div>
              <div className="text-justify">{data.body}</div>
            </div>
            <div>
              <div className="font-semibold text-[18px]">Comments</div>
              <div className="flex flex-col gap-y-[10px]">
                {comments
                  ? comments?.map((comment, i) => {
                      return (
                        <Comment comment={comment} key={comment.id} i={i} />
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
