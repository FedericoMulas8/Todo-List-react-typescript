import { useTodo } from "./useTodo";

export function Completed(props: any) {
  const { handleRemoveCompleted } = useTodo();

  return (
    <div className="completed">
      <ul>
        {props.completed.map((complete: string[], i: number) => {
          return (
            <li key={i}>
              <div className="box">
                <button id="remove" onClick={() => handleRemoveCompleted(i)}>
                  <i className="gg-remove"></i>
                </button>
              </div>
              <p>{complete}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// <li key={i}>
//   <button onClick={() => handleRemoveCompleted(i)}>-</button>
//   {complete}
// </li>
