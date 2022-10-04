export function Active(props: any) {
  return (
    <div className="active">
      <ul>
        {props.list.map((elem: string, i: number) => {
          return (
            <li key={i}>
              <div className="box">
                <button id="remove" onClick={() => props.handleRemove(i)}>
                  <i className="gg-remove"></i>
                </button>
              </div>
              <p>{elem}</p>
              <div className="box">
                <button id="done" onClick={() => props.handleCompleted(i)}>
                  <i className="gg-check-o"></i>
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
