let count = 0;
const addOne = () => {
  count++;
  rendeCounterApp();
}

const minusOne = () => {
  count--;
  rendeCounterApp();
}

const reset = () => {
  count = 0;
  rendeCounterApp();
}

const appRoot = document.getElementById('app');

const rendeCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );
  ReactDOM.render(templateTwo, appRoot);
}

rendeCounterApp();