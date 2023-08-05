
// use the routes defined in user.routes.ts.
import express from 'express';
import userRoutes from './user.routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Use the userRoutes for all requests to '/users'
app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});