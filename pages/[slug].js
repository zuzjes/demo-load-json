import json from "../loadjson";
import Link from "next/link";

const Page = props => {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h1>{props.page.title}</h1>
      <p>{props.page.content}</p>
    </>
  );
};
Page.getInitialProps = async function(context) {
  return { page: json[context.query.slug] };
};

export default Page;
