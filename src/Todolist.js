import React, {useState} from 'react';
import './App.css';
import Todotable from './components/Todolist';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';

function Todolist() {
    const [todo, setTodo] = useState({desc: '', date: ''}); //useStaten sisällä on OLIO!
    const [todos, setTodos] = useState([]);

    const inputChanged = (event) => {
        setTodo({...todo, [event.target.name]: event.target.value}); //asettaa OLIO-arvon!
    }

    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, todo]); //hakasulut käsittelee taulukkona!
    }

    return (
        <div>
            <form onSubmit={addTodo}>
                Description: <input type="date" name="date" onChange={inputChanged} value={todo.date}/>
                Date: <input type="text" name="desc" onChange={inputChanged} value={todo.desc}/>
                <input type="submit" value="Add" />
            </form>
            <Todotable todos={todos}/>
        </div>
    );
}

export default Todolist;