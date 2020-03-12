let visibility = false;

const onToggle = () => {
  visibility = !visibility;
  render();
}

const appRoot = document.getElementById('app');


const render = () => {
  const template = (
    <div>
      <h1>Visibility toggle</h1>
      <button onClick={onToggle}>{visibility ? 'Hide Details' : 'Show Details' }</button>
      {visibility && (<p>Details showing</p>) }
    </div>
  );
  ReactDOM.render(template, appRoot);
}

render();