import React, {useState} from 'react';
import '../App.css';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Tooltip from '@material-ui/core/Tooltip';

export default function Todolist() {

  const [todo, setTodo] = useState({desc: '', date: ''}); //useStaten sisällä on OLIO!
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
      setTodo({...todo, [event.target.name]: event.target.value}); //asettaa OLIO-arvon!
  }

  const addTodo = () => {
    setTodos([todo, ...todos]); //hakasulut käsittelee taulukkona!
    setTodo({desc: '', date: ''});
  }

  /*const addTodo = (event) => {
      event.preventDefault();
      setTodos([...todos, todo]); //hakasulut käsittelee taulukkona!
      setTodo({desc: '', date: ''});
  }*/

  const deleteTodo = (row) => {
    console.log(row);
    setTodos(todos.filter((todo, index) => index !== row));
  }

  const columns = [
    {
      Header: 'Description',
      accessor: 'desc'
    },
    {
      Header: 'Date',
      accessor: 'date'
    },
    {
      filterable: false,
      sortable: false,
      minWidth: 30,
      Cell: row => <Button size="small" color="secondary" onClick={() => deleteTodo(row.index)}>Delete</Button>
    }
  ]
  
    return (
      <div>
        <TextField style={{marginRight: 15}} label="Description" value={todo.desc} name="desc" onChange={inputChanged} />
        <TextField style={{marginRight: 15}} label="Date" name="date" value={todo.date} onChange={inputChanged} />
        <Tooltip title="Add Todo">
        <IconButton style={{marginTop: 10}} onClick={addTodo}>
          <AddCircleIcon color="primary" fontSize="large"/>
        </IconButton>
        </Tooltip>
        <ReactTable columns={columns} data={todos} defaultPageSize={10} filterable={true}/>
      </div>
    );
}//delete todos.mappiin