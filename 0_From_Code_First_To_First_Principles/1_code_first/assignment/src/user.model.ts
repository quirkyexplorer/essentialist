// This file will encapsulate the interactions with the User model.
// handles interactions with the database using Prisma. 

import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface UserCreateData {
  email: string;
  first_name: string;
  last_name: string;
  username: string;
}

export const UserModel = {
  create: async (userData: UserCreateData) => {
    return await prisma.user.create({
      data: userData,
    });
  },

  update: async (userId: number, userData: UserCreateData) => {
    return await prisma.user.update({
      where: { id: userId },
      data: userData,
    });
  },

  findAll: async () => {
    return await prisma.user.findMany();
  },

  findByEmail: async (email: string) => {
    //console.log('Fetching user by email:', email); // Add this console log
    const user = await prisma.user.findUnique({ where: { email } });
    return user || null; // Return null if user is not found
  },

};