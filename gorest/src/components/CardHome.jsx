export default function Card({ post, i }) {
  return (
    <>
      <div className="outline outline-1 px-[10px]">
        <div>
          <div className="truncate font-bold text-center">{post.title}</div>
        </div>
        <div className="flex justify-center">
          <button className="outline outline-1">Details</button>
        </div>
      </div>
    </>
  );
}
