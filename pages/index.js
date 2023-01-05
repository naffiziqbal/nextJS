import Head from "next/head"
import Link from "next/link";
import Image from "next/image"
export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Home Page
        </title>
      </Head>
      <p className="text-red-500">Hello Nafiz Iqbal This is Your First Ever First NEXT JS Project</p>
      <Link href={'/Posts'} className="btn btn-primary">See all Post</Link>
    </div>
  );
}
