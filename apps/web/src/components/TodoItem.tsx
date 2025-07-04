"use client";

import { Todo } from "@/lib/types/todo";
import { CheckCircleIcon, TrashIcon } from "@heroicons/react/24/solid";

type TodoItemProps = {
  todo: Todo;
  onToggle?: (id: string) => void;
  onDelete?: (id: string) => void;
};

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className="flex items-center justify-between p-2 border-b">
      <label
        className="flex items-center gap-2 cursor-pointer flex-1"
        onClick={() => onToggle?.(todo.id)}
      >
        <div>
          {todo.completed ? (
            <CheckCircleIcon
              className="w-4 h-4 text-green-500"
              onClick={() => onToggle?.(todo.id)}
            ></CheckCircleIcon>
          ) : (
            <CheckCircleIcon
              className="w-4 h-4 text-gray-300"
              onClick={() => onToggle?.(todo.id)}
            ></CheckCircleIcon>
          )}
        </div>
        <span className={todo.completed ? "line-through text-gray-400" : ""}>
          {todo.title}
        </span>
      </label>
      <TrashIcon
        className="w-5 h-5 text-red-500 cursor-pointer hover:text-red-700 transition"
        onClick={() => onDelete?.(todo.id)}
      ></TrashIcon>
    </li>
  );
}
