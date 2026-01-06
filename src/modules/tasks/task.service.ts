import { Task } from "./task.model.js";

export const taskService = {
  async create(userId: string, title: string, description?: string) {
    const task = await Task.create({
      userId,
      title,
      description: description || null,
      completed: false,
    });

    return task;
  },

  async findAll(userId: string) {
    return Task.findAll({ where: { userId } });
  },

  async update(
    userId: string,
    taskId: string,
    data: Partial<{ title: string; description: string; completed: boolean }>,
  ) {
    const task = await Task.findOne({ where: { id: taskId, userId } });
    if (!task) throw new Error("Task not found");

    await task.update(data);
    return task;
  },

  async delete(userId: string, taskId: string) {
    const task = await Task.findOne({ where: { id: taskId, userId } });
    if (!task) throw new Error("Task not found");

    await task.destroy();
  },
};
