// dev.js - chỉ dùng khi dev local với node
import app from "./server.js";

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
