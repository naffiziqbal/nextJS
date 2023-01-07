import { useRouter } from "next/router";

const about_details = () => {
  const router = useRouter();
  const pageId = router.query.about_details;

  return (
    <div>
      <p>Page Details Of About Page No : {pageId}</p>
    </div>
  );
};

export default about_details;
