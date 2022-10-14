export function Completed(props: any) {
  return (
    <div className="completed">
      <h4>
        {props.completed.length > 1 ? `Completed Tasks:` : `Completed Task:`}
      </h4>
      {props.completed.length < 1 && (
        <p className="notasks">No completed tasks yet</p>
      )}
      <ul>
        {props.completed.map((complete: string[], i: number) => {
          return (
            <li key={i}>
              <div className="box">
                <button
                  id="remove"
                  onClick={() => props.handleRemoveCompleted(i)}
                >
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
