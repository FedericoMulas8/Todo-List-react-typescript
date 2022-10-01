import { useTodo } from "./useTodo";

export function Todo(): JSX.Element {
  const {
    todo,
    list,
    completed,
    handleChange,
    handleSubmit,
    handleRemove,
    handleCompleted,
    handleRemoveCompleted,
  } = useTodo();

  return (
    <div>
      <div className="instructions">
        <p>
          Instructions: Insert a task to see the 'Active Tasks' list - Complete
          a task by pressing 'Done' to see the 'Completed Tasks' list. You can
          remove tasks by pressing '-' button
        </p>
      </div>

      <div className="inputs">
        <input
          placeholder="Enter your task"
          value={todo}
          onChange={handleChange}
        ></input>
        <button onClick={handleSubmit}>Push</button>
      </div>

      <div className="todo">
        {list.length > 0 && (
          <div className="active">
            <h2>Active Tasks: </h2>
            <ul>
              {list.map((elem: string, i: number) => {
                return (
                  <li key={i}>
                    <button onClick={() => handleRemove(i)}>-</button>
                    <button onClick={() => handleCompleted(i)}>Done</button>
                    {elem}
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {completed.length > 0 && (
          <div className="completed">
            <h2>Completed Tasks: </h2>
            <ul>
              {completed.map((complete: string[], i: number) => {
                return (
                  <li key={i}>
                    <button onClick={() => handleRemoveCompleted(i)}>-</button>
                    {complete}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
