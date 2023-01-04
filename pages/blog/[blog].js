import { useRouter } from "next/dist/client/router"

const blogId =()=>{
    const router  = useRouter();
    const  pageID = router.query.blog
    return (
        <div>
            <p>this IS dynamic page of  &#160;
            { pageID}</p>
        </div>
    )
}
export default blogId
