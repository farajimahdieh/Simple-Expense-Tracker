import * as z from "zod";

export const expense = z.object({

    userid: z.number(),
    amount : z.number(),
    event : z.string().nonempty(),
    groupid : z.number()
})