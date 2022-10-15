import { Active } from "./Active";
import { Completed } from "./Completed";
import { Header } from "./Header";
import { useTodo } from "./useTodo";

export function Todo(props: any): JSX.Element {
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
    resetCompleted,
    handleSelection,
  } = useTodo();

  return (
    <div className="container" data-theme={props.theme}>
      <Header theme={props.theme} switchTheme={props.switchTheme} />
      <div className="content">
        {/* input */}
        <div className="inputs">
          <div className="box"></div>
          <input
            placeholder="Enter your task..."
            value={todo}
            onChange={handleChange}
          ></input>
          <button onClick={handleSubmit}>Push</button>
        </div>

        {/* Tasks */}
        <div className="todo">
          {selection.all && (
            <>
              <Active
                list={list}
                handleRemove={handleRemove}
                handleCompleted={handleCompleted}
              />
              <Completed
                completed={completed}
                handleRemoveCompleted={handleRemoveCompleted}
              />
            </>
          )}
          {selection.active && (
            <Active
              list={list}
              handleRemove={handleRemove}
              handleCompleted={handleCompleted}
            />
          )}
          {selection.complete > 0 && (
            <Completed
              completed={completed}
              handleRemoveCompleted={handleRemoveCompleted}
            />
          )}
        </div>

        {/* bottom container for buttons and infos */}
        <div className="selection">
          <div className="numberleft">
            <p>{list.length} Active Tasks</p>
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
            <p onClick={resetCompleted}>Clear Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
