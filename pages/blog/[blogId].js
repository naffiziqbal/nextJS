import { useRouter } from "next/router";

const blogId = () => {
    const router = useRouter();
    const { pid } = router.query;
    console.log(pid)

    return (
        <div>
            <p>Product Details Page {pid} </p>
        </div>
    );
};
export default blogId;
