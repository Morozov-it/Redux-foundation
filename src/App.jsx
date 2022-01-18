import './App.css';
import { setAddCash, setDeleteCash } from './store/cashReducer';
import {useDispatch, useSelector} from 'react-redux';

function App() {
  //хуки для взаимодействия с redux
  const dispatch = useDispatch();
  const state = useSelector(state => ({
    cash: state.cash.cash
  }));

  const addCash = (cash) => {
    dispatch(setAddCash(cash))
  }
  const deleteCash = (cash) => {
    dispatch(setDeleteCash(cash))
  }

  return (
    <div className="app">
      <header>
        <h1>Redux Bank</h1>
        <h2 className="text-muted">Money at the bank</h2>
        <h3>{state.cash}</h3>
      </header>
      <div style={{display: "flex"}}>
        <button className="btn btn-outline-primary"
          onClick={()=>addCash(Number(prompt()))}>Add money</button>
        <button className="btn btn-outline-primary"
          onClick={()=>deleteCash(Number(prompt()))}>Delete money</button>
      </div>
    </div>
  );
}

export default App;
