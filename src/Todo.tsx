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
    <div className="container">
      <div className="content">
        <div className="inputs">
          <div className="box"></div>
          <input
            placeholder="Enter your task..."
            value={todo}
            onChange={handleChange}
          ></input>
          <button onClick={handleSubmit}>Push</button>
        </div>

        <div className="todo">
          {list.length > 0 && (
            <div className="active">
              <ul>
                {list.map((elem: string, i: number) => {
                  return (
                    <li key={i}>
                      <div className="box">
                        <button id="remove" onClick={() => handleRemove(i)}>
                          -
                        </button>
                      </div>
                      <p>{elem}</p>
                      <div className="box">
                        <button id="done" onClick={() => handleCompleted(i)}>
                          ✓
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {/* {completed.length > 0 && (
            <div className="completed">
              <ul>
                {completed.map((complete: string[], i: number) => {
                  return (
                    <li key={i}>
                      <button onClick={() => handleRemoveCompleted(i)}>
                        -
                      </button>
                      {complete}
                    </li>
                  );
                })}
              </ul>
            </div>
          )} */}
        </div>

        <div className="selection">
          <div className="numberleft">
            <p>{list.length} Items Left</p>
          </div>
          <div className="select">
            <p>All</p>
            <p>Active</p>
            <p>Completed</p>
          </div>
          <div className="reset">
            <p>Clear Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/*----------------------------------------------------------------
<div className="instructions">
        <p>
          Instructions: Insert a task to see the 'Active Tasks' list - Complete
          a task by pressing 'Done' to see the 'Completed Tasks' list. You can
          remove tasks by pressing '-' button
        </p>
      </div>
*/
