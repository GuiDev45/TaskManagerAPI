import { Task } from "./task.model.js";

export const taskService = {
  create(title: string, userId: string) {
    return Task.create({ title, userId });
  },

  findAllByUser(userId: string) {
    return Task.findAll({ where: { userId } });
  },

  async update(taskId: string, userId: string, data: any) {
    const task = await Task.findOne({ where: { id: taskId, userId } });
    if (!task) throw new Error("Task not found");

    return task.update(data);
  },

  async delete(taskId: string, userId: string) {
    const task = await Task.findOne({ where: { id: taskId, userId } });
    if (!task) throw new Error("Task not found");

    await task.destroy();
  },
};
