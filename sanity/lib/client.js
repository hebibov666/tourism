import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset:"production",
  projectId:"4a6r2m34",
  useCdn:false,
})
