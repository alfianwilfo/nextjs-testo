import { useRouter } from "next/router";
export default function Navbar() {
  let router = useRouter();
  let toHome = () => {
    router.push("/");
  };
  let toUsers = () => {
    router.push("/users");
  };
  return (
    <>
      <div className="h-[120px] bg-[#E3FDFD] flex justify-center gap-[10px]">
        <div>
          <button
            onClick={toHome}
            className="font-bold text-[20px] text-[#71C9CE]"
          >
            Posts
          </button>
        </div>
        <div>
          <button
            onClick={toUsers}
            className="font-bold text-[20px] text-[#71C9CE]"
          >
            Users
          </button>
        </div>
      </div>
    </>
  );
}
