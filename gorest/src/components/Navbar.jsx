import { useRouter } from "next/router";
export default function Navbar() {
  let router = useRouter();
  let toHome = () => {
    router.push("/");
  };
  return (
    <>
      <div className="h-[70px] bg-[#E3FDFD]">
        <div>
          <button
            onClick={toHome}
            className="font-bold text-[20px] text-[#71C9CE]"
          >
            Gorest
          </button>
        </div>
      </div>
    </>
  );
}
