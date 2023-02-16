export default function Comment({ comment, i }) {
  console.log(comment, "??");
  return (
    <>
      <div className="outline outline-1 rounded p-[10px]">
        <div className="">{comment.name}</div>
        <div className="text-[14px]">{comment.email}</div>
        <div>{comment.body}</div>
      </div>
    </>
  );
}
