const Posts = ({ posts }) => {
    console.log(posts);
    return (
        <div className="container mx-auto"> 
            <h1 className="text-3xl"> All Post {posts.length}</h1>
            {
                posts.map(post => <div className="text-start">{post?.title}</div>)
            }
        </div>
    )
}
export default Posts

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
    const data = await res.json()
        .catch((err) => {
            console.log(err.message);
        });
    console.log(data)
    return {
        props: {
            posts: data
        }
    }
}
