import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { logger } from "hono/logger";

const app = new Hono();
app.use(logger());
// app.get("/", (c) => c.text("Hello Hono!"));
app.post("/", (c) => c.text("POST /"));
app.put("/", (c) => c.text("PUT /"));
app.delete("/", (c) => c.text("DELETE /"));

const port = 4000;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
