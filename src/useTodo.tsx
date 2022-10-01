import { useState } from "react";

type Todo = {
  todo: string;
  list: string[];
  completed: string[][];
  handleSubmit(): void;
  handleChange(target: any): void;
  handleRemove(i: number): void;
  handleCompleted(i: number): void;
  handleRemoveCompleted(i: number): void;
};

type Event = {
  target: Event; // any?
  value: string;
};

export function useTodo(): Todo {
  const [todo, setTodo] = useState<string>(""); // a state to store user input
  const [list, setList] = useState<string[]>([]); // list of active tasks
  const [completed, setCompleted] = useState<string[][]>([]); // list of completed tasks

  function handleChange({ target }: Event) {
    setTodo(target.value);
  }

  function handleSubmit(): void {
    setList((prev) => {
      return [...list, todo];
    });
    setTodo(""); // reset input
  }

  function handleRemove(i: number): void {
    list.splice(i, 1); // remove i element
    setList((prev) => {
      return [...list];
    });
  }

  function handleCompleted(i: number): void {
    const newCompleted = list.splice(i, 1);
    // setList((prev) => {
    //   return [...list];
    // });
    setCompleted((prev) => {
      return [...completed, newCompleted];
    });
  }

  function handleRemoveCompleted(i: number): void {
    completed.splice(i, 1); // remove i element
    setCompleted((prev) => {
      return [...completed];
    });
  }

  return {
    todo,
    list,
    completed,
    handleChange,
    handleSubmit,
    handleRemove,
    handleCompleted,
    handleRemoveCompleted,
  };
}
