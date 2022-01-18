import './App.css';
import { setAddCash, setDeleteCash } from './store/cashReducer';
import { setAddCustomer, setDeleteCustomer } from './store/customerReducer';
import {useDispatch, useSelector} from 'react-redux';

function App() {
  //хуки для взаимодействия с redux
  const dispatch = useDispatch();
  const state = useSelector(state => ({
    cash: state.cash.cash,
    customers: state.customers.items
  }));

  const addCash = (cash) => {
    dispatch(setAddCash(cash))
  }
  const deleteCash = (cash) => {
    dispatch(setDeleteCash(cash))
  }
  const addCustomer = (name) => {
    let newCustomer = {
      name: name,
      id: Date.now()
    }
    dispatch(setAddCustomer(newCustomer))
  }
  const deleteCustomer = (name) => {
    dispatch(setDeleteCustomer(name))
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
          onClick={() => deleteCash(Number(prompt()))}>Delete money</button>
        <button className="btn btn-primary"
          onClick={()=>addCustomer(prompt())}>Add customer</button>
        <button className="btn btn-primary"
          onClick={()=>{deleteCustomer(prompt())}}>Delete customer</button>
      </div>
      <div className="customers">
      {state.customers.length > 0 ?
        <ul className="list-group">
            {state.customers.map((c) =>
          <li key={c.id} className="list-group-item">{c.name}</li>)}
        </ul>
      :
        <div className="text-muted">Customers are not found</div>
      }
      </div>
    </div>
  );
}

export default App;
