import app from './app';
import { db } from './config/db';

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
