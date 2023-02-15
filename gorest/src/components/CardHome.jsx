export default function Card({ post, i }) {
  return (
    <>
      <div className="outline outline-1 outline-[#A6E3E9] px-[10px] hover:shadow-lg hover:shadow-[#E3FDFD]">
        <div>
          <div className="truncate font-bold text-center">{post.title}</div>
        </div>
        <div className="flex justify-center">
          <button className="outline outline-1 my-[10px] p-[10px]">
            Details
          </button>
        </div>
      </div>
    </>
  );
}
