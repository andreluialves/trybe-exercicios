import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Estudar', 'Varrer a casa', 'Molhar as plantas', 'Ir ao mercado'];

function App() {
  return (
    <ul>{tasks.map(Task)}</ul>
  );
}

export default App;
