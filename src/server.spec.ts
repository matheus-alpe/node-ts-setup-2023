import { beforeEach, expect, test } from "vitest";
import { saveUser, User } from "./server";

let user: User;

beforeEach(() => {
  user = { age: 19, name: "matheus" };
});

test("transform user name to uppercase", () => {
  const expectedUser = { age: 19, name: "MATHEUS" };

  expect(saveUser(user)).toEqual(expectedUser);
});
