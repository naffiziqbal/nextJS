import Link from "next/link";

const Header = () => {
  return (
    <p className="text-center p-5 text-blue-500 ">
      <Link className="w-full outline p-4 rounded-2xl" href={"/"}> Home</Link>
    </p>
  ); 
};
export default Header;
