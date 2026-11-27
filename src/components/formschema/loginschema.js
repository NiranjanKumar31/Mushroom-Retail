
import { z } from "zod";

export const loginschema = z.object({

  email: z
    .string()
    .email("Enter a valid email address"),

  password: z
    .string()
    .min(6, "Password must contain at least 6 characters")

});
