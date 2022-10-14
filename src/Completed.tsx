export function Completed(props: any) {
  return (
    <div className="completed">
      <p>Completed</p>
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
