import { useState } from "react";

type Todo = {
  todo: string;
  list: string[];
  completed: string[][];
  selection: any;
  handleSubmit(): void;
  handleChange(target: any): void;
  handleRemove(i: number): void;
  handleCompleted(i: number): void;
  handleRemoveCompleted(i: number): void;
  resetCompleted(): void;
  handleSelection(target: any): void;
};

interface Selection {
  [string: string]: boolean;
}

type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};

export function useTodo(): Todo {
  const [todo, setTodo] = useState<string>(""); // a state to store user input
  const [list, setList] = useState<string[]>([]); // list of active tasks
  const [completed, setCompleted] = useState<string[][]>([]); // list of completed tasks

  const [selection, setSelection] = useState<Selection>({
    all: true,
    active: false,
    complete: false,
  });

  function handleChange(event: HTMLElementEvent<HTMLInputElement>) {
    setTodo(event.target.value);
  }

  // handler for the push button
  function handleSubmit(): void {
    setList((prev) => {
      return [...list, todo];
    });
    setTodo(""); // reset input
  }

  //handler to remove from active task list
  function handleRemove(i: number): void {
    list.splice(i, 1); // remove i element
    setList((prev) => {
      return [...list];
    });
  }

  // handler to flag a task as completed
  function handleCompleted(i: number): void {
    const newCompleted = list.splice(i, 1);
    setCompleted((prev) => {
      return [...completed, newCompleted];
    });
  }

  //handler to remove from completed task list
  function handleRemoveCompleted(i: number): void {
    completed.splice(i, 1); // remove i element
    setCompleted((prev) => {
      return [...completed];
    });
  }

  //handler that remove all completed tasks
  function resetCompleted(): void {
    setCompleted([]);
  }

  // Handler for the 3 selectors [all, active, completed]
  function handleSelection(event: HTMLElementEvent<HTMLButtonElement>): void {
    console.log(selection);
    let name: string = event.target.name;
    setSelection((prev: Selection) => {
      const notPrev: {} = !prev;
      return {
        ...notPrev,
        [name]: !prev[name],
      };
    });
  }

  return {
    todo,
    list,
    completed,
    selection,
    handleChange,
    handleSubmit,
    handleRemove,
    handleCompleted,
    handleRemoveCompleted,
    resetCompleted,
    handleSelection,
  };
}

/*
function handleSelection(
    event: React.MouseEventHandler<HTMLButtonElement> | undefined
  ): void {

    console.log(event.target);
    let name: string = event.target.name;
    const value: string = event.target.value;
    // console.log(selection, name, value);
    setSelection((prev: Selection) => {
      return {
        ...selection,
        [name]: !selection[name],
      };
    });
  }
  */
