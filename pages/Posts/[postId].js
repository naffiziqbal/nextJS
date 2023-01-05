const postId = ({ postData }) => {
    return (
        <div>
            <ul>
            {postData.title} <br />
            {postData.body} <br />
            </ul>
        </div>
    )

}
export default postId;

export const getStaticProps = async ({ params }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const postData = await res.json();
    return {
        props: {
            postData
        }
    }

}


export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const postsData = await res.json();
    // console.log(postsData);
    const paths = postsData.map(data => {
        return {
            params : {
                postId: `${data.id}`
            }
        }
    })


    // console.log("green---------------------------------------", paths)
    return {
        paths,
        fallback: false
    }
}

