
import { z } from "zod";

export const registerschema = z.object({

  name: z
    .string()
    .min(3, "Name must contain at least 3 characters"),

  email: z
    .string()
    .email("Enter a valid email address"),

  password: z
    .string()
    .min(6, "Password must contain at least 6 characters"),

  age: z.coerce
    .number()
    .int("Age must be a whole number")
    .min(1, "Age must be at least 1")
    .max(120, "Enter a valid age")

});
