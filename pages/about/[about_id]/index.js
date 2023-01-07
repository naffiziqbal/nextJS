import { useRouter } from "next/router";

const about_id = () => {
    const router = useRouter();
    const pageId = router.query.about_id;

    return (
        <div>
            <p>Page Details Of About Page No : {pageId}</p>
        </div>
    );
};

export default about_id;
