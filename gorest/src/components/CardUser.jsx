export default function CardUser({ user, i }) {
  return (
    <>
      <div className="outline outline-1 text-center">
        <div className="font-semibold">{user.name}</div>
        <div className="text-[15px]"> {user.status}</div>
      </div>
    </>
  );
}
