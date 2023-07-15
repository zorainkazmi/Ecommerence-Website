import { defineType, defineField } from "sanity";

export const product = {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "description",
      type: "string",
      title: "Product Description",
    },
    {
      name: "price",
      type: "number",
      title: "Product Price",
    },
    {
      name: "image",
      type: "image",
      title: "Product Image",
    },

    defineField({
      name: "category",
      type: "reference",
      title: "Product Category",
      to: [
        {
          type: "category",
        },
      ],
    }),
  ],
};
