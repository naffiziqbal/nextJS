import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();

  const handleOrder =()=>{
    alert('Order Placed');
    router.push('/product')

  }
  return (
    <div className="relative h-screen w-full ">
      <Head>
        <title>Home Page</title>
      </Head>
      <div className=" absolute top-1/2 left-1/2 text-3xl -translate-x-1/2 -translate-y-1/2">
        <h1>Hello Nafiz Iqbal This is Your First Ever First NEXT JS Project</h1>
        <Link href={"/Posts"} className="btn btn-primary mr-3">
          See all Post
        </Link>
        <Link className="btn btn-primary mr-3" href={"/about"}>
          About Page
        </Link>
        <Link className="btn btn-primary mr-3" href={"/blog"}>
          Blog
        </Link>
        <Link className="btn btn-primary mr-3" href={"/profile"}>
          Profile
        </Link>
        <button className="btn btn-secondary" onClick={handleOrder}>
          Place Order
        </button>
        <Link href={'/users'} className="btn btn-primary" >Users</Link>
      </div>
    </div>
  );
}
