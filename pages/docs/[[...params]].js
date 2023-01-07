import Head from "next/head";
import { useRouter } from "next/router";

const Doc = () => {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);
  if (params.length >= 2) {
    return (
      <div>
        <Head>
          <title>Docs</title>
        </Head>
        <p className="text-3xl font-bold">
          Viewing Docs for {params[0]} and concept {params[1]}
        </p>
      </div>
    );
  } else if (params.length === 1) {
    return (
      <div>
        <Head>
          <title>Docs</title>
        </Head>
        <h1 className="text-3xl font-bold">
          Viewing Docs for feature {params[0]}{" "}
        </h1>
        ;
      </div>
    );
  }
  return (
    <div>
      <Head>
        <title>Docs</title>
      </Head>
      <h2 className="text-4xl">Docs Home Page</h2>
      <p>Viewing </p>
    </div>
  );
};

export default Doc;
