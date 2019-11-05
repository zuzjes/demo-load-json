import json from "../pages.json";
import Link from "next/link";

export default () => {
  return json.map(el => (
    <Link href={`/${el.slug}`}>
      <a><h2>{el.title}</h2></a>
    </Link>
  ));
};
