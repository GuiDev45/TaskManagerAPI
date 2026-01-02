import { randomUUID } from "node:crypto";
import type { Task } from "./task.model.js";

type CreateTaskDTO = {
  title: string;
  description?: string;
};

const tasks: Task[] = [];

export const taskService = {
  findAll(userId: string): Task[] {
    return tasks.filter((task) => task.userId === userId);
  },

  create(userId: string, data: CreateTaskDTO): Task {
    const task: Task = {
      id: randomUUID(),
      title: data.title,
      description: data.description,
      completed: false,
      userId,
    };

    tasks.push(task);
    return task;
  },

  update(
    userId: string,
    taskId: string,
    data: Partial<Omit<Task, "id" | "userId">>,
  ): Task {
    const task = tasks.find(
      (task) => task.id === taskId && task.userId === userId,
    );

    if (!task) {
      throw new Error("Task not found");
    }

    Object.assign(task, data);
    return task;
  },

  delete(userId: string, taskId: string): void {
    const index = tasks.findIndex(
      (task) => task.id === taskId && task.userId === userId,
    );

    if (index === -1) {
      throw new Error("Task not found");
    }

    tasks.splice(index, 1);
  },
};
