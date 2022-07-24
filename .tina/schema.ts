import { defineConfig, defineSchema } from "tinacms";

const schema = defineSchema({
  config: {
    branch: "",
    clientId: "",
    token: "",
    media: {
      tina: {
        mediaRoot: "uploads",
        publicFolder: "public",
      },
    },
  },
  collections: [
    {
      name: "product",
      label: "Product",
      path: "content/products",
      format: "md",
      fields: [
        {
          type: "number",
          name: "productId",
        },
        {
          type: "string",
          name: "name",
        },
        {
          type: "string",
          name: "slug",
        },
        {
          type: "number",
          name: "price",
        },
        {
          type: "image",
          name: "imageSrc",
        },
        {
          type: "string",
          name: "imageAlt",
        },
        {
          type: "string",
          name: "category",
          options: ["racquets", "accessories"],
        },
        {
          type: "string",
          name: "productLine",
          options: ["vitas", "grinta", "bags", "balls", "grips", "strings"],
        },
        {
          type: "boolean",
          name: "jr",
        },
      ],
    },
  ],
});

export default schema;

export const tinaConfig = defineConfig({
  schema,
  apiURL: "http://localhost:4001/graphql",
});
