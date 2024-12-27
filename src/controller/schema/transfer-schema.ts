import { z } from "zod";


export const transferSchema = z.object({
  externalId: z.string(),
  amount: z.number(),
  expectedOn: z.string().datetime().optional(),
  status:z.enum([ "Completed", "Failed", "Processing"])
})


