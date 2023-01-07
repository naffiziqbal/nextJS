import Head from "next/head";
import { useRouter } from "next/router";

const House = () => {
  const router = useRouter();
  const { params = [] } = router.query;
  if (params.length === 2) {
    return (
      <div>
        <Head>
          <title>Houses</title>
        </Head>
        <p className="text-2xl">
          Showing Page For houses in {params[0]} range to {params[1]} range
        </p>
        /
      </div>
    );
  } else if (params.length === 1) {
    return (
      <div>
        <Head>
          <title>Houses</title>
        </Head>
        <p className="text-3xl">ShoWing Houses In {params[0]}</p>;
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>Houses</title>
      </Head>
      <p className="text-3xl font-semibold">Houses Main Page</p>
    </div>
  );
};
export default House;
