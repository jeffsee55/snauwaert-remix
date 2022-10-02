import { defineConfig, defineSchema, defineStaticConfig } from "tinacms";

export default defineStaticConfig({
  branch: "main",
  clientId: "some-id",
  token: "some-token",
  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
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
            name: "images",
            list: true,
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
          {
            type: "rich-text",
            name: "body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
