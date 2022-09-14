import './App.css';
import {useSelector} from 'react-redux' /* asi se trae los datos*/


function App() {
const tasksState = useSelector(state => state.tasks)
console.log(tasksState)

  return (
    <div className="App">
       <h1> holis </h1>
    </div>
  );
}

export default App;
