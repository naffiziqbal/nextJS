import Link from "next/link";

const Posts = ({ posts }) => {
  console.log(posts);
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl"> All Post {posts.length}</h1>
      {posts.map((post) => (
        <div className="text-start">
          <h2>
            <Link href={`Posts/${post.id}`} passHref>Post Title: {post?.title}</Link>
          </h2>
        </div>
      ))}
    </div>
  );
};
export default Posts;

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10`
  );
  const data = await res.json().catch((err) => {
    console.log(err.message);
  });
  console.log(data);
  return {
    props: {
      posts: data,
    },
  };
};
