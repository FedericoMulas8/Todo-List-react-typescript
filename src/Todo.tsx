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
    <div className="container">
      <Header theme={props.theme} switchTheme={props.switchTheme} />
      {/* <div className="header">
        <h1>TODO</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
          <path
            fill="#FFF"
            fill-rule="evenodd"
            d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
          />
        </svg>
      </div> */}
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
