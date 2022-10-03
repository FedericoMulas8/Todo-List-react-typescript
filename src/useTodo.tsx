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

type Selection = {
  all: boolean;
  active: boolean;
  complete: boolean;
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

  function handleSelection({ target }: any) {
    let id: string = target.id;
    let value: boolean = target.dataset.value;
    setSelection((prev) => {
      return {
        ...selection,
        [id]: !value,
      };
    });
    console.log(target, selection);
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
