"use strict";

// src/server.ts
function saveUser(user) {
  console.log(JSON.stringify(user, null, 4));
}
saveUser({ name: "matheus", age: 26 });
