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
  handleSelection(target: any): void;
};

type Event = {
  target: Event; // any?
  value: string;
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

  function handleSelection(event: HTMLElementEvent<HTMLButtonElement>): void {
    let name: string = event.target.name;
    setSelection((prev: Selection) => {
      return {
        ...prev,
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
