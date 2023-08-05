import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// POST /users/new: Creates a new user.
app.post('/users/new', async (req: Request, res: Response) => {
  const { email, first_name, last_name } = req.body;

  try {
    const user = await prisma.user.create({
      data: {
        email,
        first_name,
        last_name,
      },
    });

    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

// POST /users/edit/:userId: Edits a user.
app.post('/users/edit/:userId', async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId, 10);
  const { email, first_name, last_name } = req.body;

  try {
    const user = await prisma.user.update({
      where: { id: userId },
      data: {
        email,
        first_name,
        last_name,
      },
    });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user' });
  }
});

// GET /users?email=someuser@gmail.com: Fetches a user by their email.
app.get('/users', async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch users' });
      }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});