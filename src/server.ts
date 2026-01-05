import { app } from "./app.js";
import { connectDatabase } from "./database/index.js";

const PORT = 3000;

connectDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
