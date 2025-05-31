import { StudentService } from "../StudentService";

export class StudentController {
    static async create({
      title,
      description,
      duration,
      price,
    }: {
      title: string;
      description: string;
      duration: number;
      price?: number;
    }) {
      return await StudentService.create({ title, description, duration, price });
  }

  static async getById(id: number) {
    const student = await StudentService.findById(id);
    if (!student) throw new Error("не найден");
    return student;
  }

  static async getAll() {
    return await StudentService.findAll();
  }

  static async delete(id: number) {
    await StudentService.delete(id);
    return { message: "студент удален" };
  }

  static async update(
    id: number,
    data: {
      title?: string;
      description?: string;
      duration?: number;
      price?: number | null;
    }
  ) {
    return await StudentService.update(id, data);
  }
}