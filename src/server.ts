import { z } from "zod";

const userSchema = z.object({
  name: z
    .string()
    .min(3, { message: "at least 3 characters" })
    .transform((name) => name.toLocaleUpperCase()),
  age: z.number().min(18, { message: "at least 18 years" }),
});

export type User = z.infer<typeof userSchema>;

export function saveUser(user: User) {
  try {
    return userSchema.parse(user);
  } catch (error) {
    return error;
  }
}
