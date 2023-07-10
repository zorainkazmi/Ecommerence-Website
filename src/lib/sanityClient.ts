 import { createClient } from "next-sanity"

 import {apiVersion, dataset, projectId, useCdn} from '../../sanity/env'
// import { projectId } from "../../sanity/env"

 export const client = createClient({
    apiVersion: "v2023-07-02",
    dataset: "product",
    projectId: "process.env.NEXT_PUBLIC_SANITY_PROJECT_ID",
    useCdn: true,
 })