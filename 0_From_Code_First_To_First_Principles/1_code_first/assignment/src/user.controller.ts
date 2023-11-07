// handle the HTTP requests and responses. The controller will use the UserModel to interact with the database.

import { Request, Response } from 'express';
import { UserModel, UserCreateData } from './user.model';

export const createUser = async (req: Request, res: Response) => {
  const { email, first_name, last_name, username } = req.body as UserCreateData;

  try {
    const user = await UserModel.create({ email, first_name, last_name, username });
    res.status(201).json(user);

    
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to create user' });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId, 10);
  const { email, first_name, last_name, username } = req.body as UserCreateData;

  try {
    const user = await UserModel.update(userId, { email, first_name, last_name, username });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user' });
  }
};

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await UserModel.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};


export const getUserByEmail = async (req: Request, res: Response) => {
    const email  = req.query.email as string; // explicitly casting to string
    try {
      const user = await UserModel.findByEmail(email);
      if (!user) {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.status(200).json(user);
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch user by email' });
    }
  };
