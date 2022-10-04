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
    handleAllSelection,
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
            <button value={selection.all} name="all" onClick={handleSelection}>
              All
            </button>
            <button
              value={selection.active}
              name="active"
              onClick={handleSelection}
            >
              Active
            </button>
            <button
              value={selection.complete}
              name="complete"
              onClick={handleSelection}
            >
              Completed
            </button>
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
