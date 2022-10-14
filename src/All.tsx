export function All(props: any) {
  const all = props.list.concat(props.completed);

  return (
    <div>
      <ul>
        {all.map((elem: string[], i: number) => {
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
              <p>{elem}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
