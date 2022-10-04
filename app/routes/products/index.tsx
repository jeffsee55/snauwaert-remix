import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ShopList } from "~/components/Shop/list2";
import { client } from "_tina/__generated__/client";
import type { ProductFilter } from "_tina/__generated__/types";

export const loader: LoaderFunction = async (args) => {
  const url = new URL(args.request.url);
  const filters: ProductFilter = {};
  const category = url.searchParams.getAll("categories[]");
  if (category.length) {
    filters["category"] = { in: category };
  }
  const productLine = url.searchParams.getAll("productLine[]");
  if (productLine.length) {
    filters["productLine"] = { in: productLine };
  }
  const sort = url.searchParams.get("sort") || "category";
  const order = url.searchParams.get("order") || "first";
  const res = await client.queries.productConnection({
    filter: filters,
    [order]: 10,
    sort: sort,
  });
  return res;
};

export default function List() {
  const props = useLoaderData();
  console.log("data", props);
  return <ShopList data={props.data} />;
}
