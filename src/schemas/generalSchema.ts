import { z } from "zod";

export let error = { error: '' };

export const schemaResponse = z.object({
    status: z.number(),
    message: z.string(),
});




export type SchemaResponse = z.infer<typeof schemaResponse>;
export type Status = SchemaResponse['status'];
export type Message = SchemaResponse['message'];