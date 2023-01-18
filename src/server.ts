import { z } from "zod";

const userSchema = z.object({
  name: z
    .string()
    .min(3, { message: "at least 3 characters" })
    .transform((name) => name.toLocaleUpperCase()),
  age: z.number().min(18, { message: "at least 18 years" }),
});

type User = z.infer<typeof userSchema>;

function saveUser(user: User) {
  try {
    const { name, age } = userSchema.parse(user);
    console.log(name, age);
  } catch (error) {
    console.log("errou feio");
  }
}

saveUser({ name: "matheus", age: 18 });
