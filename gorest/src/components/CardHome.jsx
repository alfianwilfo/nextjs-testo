export default function Card({ post, i }) {
  return (
    <>
      <div className="transition ease-in-out transition-all duration-700  outline outline-1 outline-[#A6E3E9] px-[10px] hover:shadow-lg hover:shadow-[#E3FDFD]">
        <div>
          <div className="truncate font-bold text-center">{post.title}</div>
        </div>
        <div className="flex justify-center">
          <button className="transition ease-in-out transition-all duration-700 outline outline-1 my-[10px] p-[5px] hover:rounded ">
            Details
          </button>
        </div>
      </div>
    </>
  );
}
