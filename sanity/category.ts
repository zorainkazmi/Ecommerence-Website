import { defineType, defineField } from "sanity";
import { client } from "@/lib/sanityClient";

export const category = defineType({
  name: "category",
  type: "document",
  title: "Category",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Category Name",
    }),
  ],
});
