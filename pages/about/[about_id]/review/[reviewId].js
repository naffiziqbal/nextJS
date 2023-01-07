import { useRouter } from "next/router";

const reviewId = () => {
    const router = useRouter();
    const { reviewId, about_id } = router.query;
    return (
        <div>
            Review No {reviewId} for About Details {about_id}
        </div>
    );
};

export default reviewId;
