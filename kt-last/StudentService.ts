import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const StudentService = {
  async create(data: {
    title: string;
    description: string;
    duration: number;
    price?: number;
  }) {
    return await prisma.student.create({ data });
  },

  async findById(id: number) {
    return await prisma.student.findUnique({ where: { id } });
  },

  async findAll() {
    return await prisma.student.findMany();
  },

  async delete(id: number) {
    return await prisma.student.delete({ where: { id } });
  },

  async update(
    id: number,
    data: {
      title?: string;
      description?: string;
      duration?: number;
      price?: number | null;
      isActive?: boolean;
    }
  ) {
    return await prisma.student.update({
      where: { id },
      data,
    });
  },
};