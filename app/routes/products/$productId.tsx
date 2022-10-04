import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useTina } from "tinacms/dist/react";
import { client } from "_tina/__generated__/client";
import { Product } from "~/components/Shop/product";

export const loader: LoaderFunction = async (args) => {
  return client.queries.product({
    relativePath: `${args.params.productId}.md`,
  });
};

export default function Page() {
  const props = useLoaderData();
  const { data } = useTina(props);
  return <Product {...data.product} />;
}
