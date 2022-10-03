import { Active } from "./Active";
import { Completed } from "./Completed";
import { useTodo } from "./useTodo";

export function Todo(): JSX.Element {
  const {
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
            <Active
              list={list}
              handleRemove={handleRemove}
              handleCompleted={handleCompleted}
            />
          )}
        </div>

        <div className="selection">
          <div className="numberleft">
            <p>{list.length} Items Left</p>
          </div>
          <div className="select">
            <p data-value={selection.all} id="all" onClick={handleSelection}>
              All
            </p>
            <p
              data-value={selection.active}
              id="active"
              onClick={handleSelection}
            >
              Active
            </p>
            <p
              data-value={selection.complete}
              id="complete"
              onClick={handleSelection}
            >
              Completed
            </p>
          </div>
          <div className="reset">
            <p>Clear Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// {completed.length > 0 && <Completed completed={completed} />}

/*----------------------------------------------------------------
<div className="instructions">
        <p>
          Instructions: Insert a task to see the 'Active Tasks' list - Complete
          a task by pressing 'Done' to see the 'Completed Tasks' list. You can
          remove tasks by pressing '-' button
        </p>
      </div>
*/
