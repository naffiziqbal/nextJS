import Link from "next/link";

const blog = ({ blogId = 100 }) => {
  return (
    <div>
      <h1>
        <Link href={"/blog/1"}>Blog post 1</Link>
      </h1>
      <h1>
        <Link href={"/blog/2"}>Blog post 2</Link>
      </h1>
      <h1>
        <Link href={"/blog/3"} replace>Blog post 3</Link>
      </h1>
      <h1>
        <Link href={`/blog/${blogId}`}>Dynamic ID</Link>
      </h1>
    </div>
  );
};
export default blog;
