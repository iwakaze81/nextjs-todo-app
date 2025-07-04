"use client";

import { useState } from "react";
import { Todo } from "@/lib/types/todo";
import TodoItem from "@/components/TodoItem";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-center sm:text-left">
          TODO App
        </h1>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Add a new todo"
              className="border border-solid border-gray-300 dark:border-gray-700 rounded-md p-2 w-full sm:w-[300px]"
              onKeyUp={(e) => {
                if (e.key === "Enter" && e.currentTarget.value.trim()) {
                  const newTodo: Todo = {
                    id: Date.now().toString(),
                    title: e.currentTarget.value.trim(),
                    completed: false,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                  };
                  setTodos([...todos, newTodo]);
                  e.currentTarget.value = "";
                }
              }}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
              onClick={() => {
                const input = document.querySelector(
                  'input[type="text"]'
                ) as HTMLInputElement;
                if (input.value.trim()) {
                  const newTodo: Todo = {
                    id: Date.now().toString(),
                    title: input.value.trim(),
                    completed: false,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                  };
                  setTodos([...todos, newTodo]);
                  input.value = "";
                }
              }}>
                Add Todo
              </button>
          </div>
          <ul className="list-disc pl-5">
            {todos.map((todo, index) => (
              <TodoItem
                key={todo.id+index}
                todo={todo}
                onDelete={(id: string) => {
                  console.log("Deleting todo with id:", id);
                  setTodos(todos.filter((t) => t.id !== id));
                }}
                onToggle={(id: string) => {
                  console.log("Toggling todo with id:", id);
                  setTodos(todos.map((t) =>
                    t.id === id ? { ...t, completed: !t.completed } : t
                  ));
                }}
              ></TodoItem>
            ))}
          </ul>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
