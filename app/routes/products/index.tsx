import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ShopList } from "~/components/Shop/list2";
import {
  ExperimentalGetTinaClient,
  ProductFilter,
} from "../../../.tina/__generated__/types";

const client = ExperimentalGetTinaClient();

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
  const res = await client.productConnection({
    filter: filters,
    [order]: 10,
    sort: sort,
  });
  return { ok: "etster", ...res };
};

export default function List() {
  const { data } = useLoaderData();
  return <ShopList data={data} />;
}
