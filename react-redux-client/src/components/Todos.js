// ./react-redux-client/src/components/Todos.js
import React from 'react';
import { Alert,Glyphicon,Button,Modal } from 'react-bootstrap';
import { Link } from 'react-router';
import TodoEditForm from './TodoEditForm';

export default class Todos extends React.Component {
  constructor(props){
    super(props);
    this.hideEditModal = this.hideEditModal.bind(this);
    this.submitEditTodo = this.submitEditTodo.bind(this);
    this.hideDeleteModal = this.hideDeleteModal.bind(this);
    this.cofirmDeleteTodo = this.cofirmDeleteTodo.bind(this);
  }

  componentWillMount(){
    this.props.fetchTodos();
  }


  showEditModal(todoToEdit){
     this.props.mappedshowEditModal(todoToEdit);
  }

  hideEditModal(){
     this.props.mappedhideEditModal();
  }

  submitEditTodo(e){
    e.preventDefault();
    
    const editForm = document.getElementById('EditTodoForm');
    
    if(editForm.vimNumber.value !== "" && editForm.vimNumber.value.trim().length == 17){
      
      const data = new FormData();
      
      data.append('id', editForm.id.value);      
      data.append('vimNumber', editForm.vimNumber.value.trim().toUpperCase());
      data.append('customerName', editForm.customerName.value);
      data.append('carMake', editForm.carMake.value.toUpperCase());
      data.append('carModel', editForm.carModel.value.toUpperCase());
      data.append('carYear', editForm.carYear.value);
      data.append('keyType', editForm.keyType.value);
      data.append('transponderType', editForm.transponderType.value);
      data.append('description', editForm.description.value);
      
      this.props.mappedEditTodo(data);
    }
    else{
      alert("Error VIM #")
      return;
    }

  }

  hideDeleteModal(){
    this.props.mappedhideDeleteModal();
  }

  showDeleteModal(todoToDelete){
    this.props.mappedshowDeleteModal(todoToDelete);
  }

  cofirmDeleteTodo(){
    this.props.mappedDeleteTodo(this.props.mappedTodoState.todoToDelete);
  }

  render(){

    const todoState = this.props.mappedTodoState;
    const todos = todoState.todos;
    const editTodo = todoState.todoToEdit;
    
    return(
      
    <div className="col-md-12">

      <h3 className="centerAlign">Items</h3>
      
      {!todos && todoState.isFetching &&
        <p>Loading Items....</p>
      }

      {todos.length <= 0 && !todoState.isFetching &&
        <p>No Items Available. Add A Item to List here.</p>
      }

      {todos && todos.length > 0 && !todoState.isFetching &&
      
        <table className="table booksTable">
        
        <thead>
        <tr>
          <th>Customer Name</th>
          <th>VIM #</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th className="textCenter">Edit</th>
          <th className="textCenter">Delete</th>
          <th className="textCenter">View</th></tr>
        </thead>
        

        <tbody>
          {todos.map((todo,i) =>         
            <tr key={i}>          
              <td>{todo.customerName}</td>
              <td>{todo.vimNumber}</td>
              <td>{todo.carMake}</td>
              <td>{todo.carModel}</td>
              <td>{todo.carYear}</td>
              <td className="textCenter"><Button onClick={() => this.showEditModal(todo)} bsStyle="info" bsSize="xsmall"><Glyphicon glyph="pencil" /></Button></td>
              <td className="textCenter"><Button onClick={() => this.showDeleteModal(todo)} bsStyle="danger" bsSize="xsmall"><Glyphicon glyph="trash" /></Button></td>
              <td className="textCenter"><Link to={`/${todo._id}`}>View Details</Link> </td>
            </tr>
          )}        
        </tbody>

        </table>
      }


      {/* Modal for editing todo */}
      <Modal
        show={todoState.showEditModal}
        onHide={this.hideEditModal}
        container={this}
        aria-labelledby="contained-modal-title"
      >
      
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title">Edit Your Item</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>

          <div className="col-md-12">
          {editTodo  &&
          <TodoEditForm todoData={editTodo} editTodo={this.submitEditTodo} />
          }
          
          {editTodo  && todoState.isFetching &&
            <Alert bsStyle="info">
            <strong>Updating...... </strong>
            </Alert>
          }

          {editTodo  && !todoState.isFetching && todoState.error &&
            <Alert bsStyle="danger">
            <strong>Failed. {todoState.error} </strong>
            </Alert>
          }
          
          {editTodo  && !todoState.isFetching && todoState.successMsg &&
            <Alert bsStyle="success">
            Book <strong> {editTodo.vimNumber} </strong>{todoState.successMsg}
            </Alert>
          }

          </div>

        </Modal.Body>

        <Modal.Footer>
          <Button onClick={this.hideEditModal}>Close</Button>
        </Modal.Footer>

      </Modal>




      {/* Modal for deleting todo */}
      <Modal
      show={todoState.showDeleteModal}
      onHide={this.hideDeleteModal}
      container={this}
      aria-labelledby="contained-modal-title"
      >

        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title">Delete Your Item</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {todoState.todoToDelete && !todoState.error && !todoState.isFetching &&
            <Alert bsStyle="warning">
              Are you sure you want to delete this item VIM #: <strong>{todoState.todoToDelete.vimNumber} </strong> ?
            </Alert>
          }

          {todoState.todoToDelete && todoState.error &&
            <Alert bsStyle="warning">
              Failed. <strong>{todoState.error} </strong>
            </Alert>
          }

          {todoState.todoToDelete && !todoState.error && todoState.isFetching &&
            <Alert bsStyle="success">
              <strong>Deleting.... </strong>
            </Alert>
          }

          {!todoState.todoToDelete && !todoState.error && !todoState.isFetching&&
            <Alert bsStyle="success">
              Todo <strong>{todoState.successMsg} </strong>
            </Alert>
          }
        </Modal.Body>
        
        <Modal.Footer>
        {!todoState.successMsg && !todoState.isFetching &&
          <div>
            <Button onClick={this.cofirmDeleteTodo}>Yes</Button>
            <Button onClick={this.hideDeleteModal}>No</Button>
          </div>
        }

        {todoState.successMsg && !todoState.isFetching &&
          <Button onClick={this.hideDeleteModal}>Close</Button>
        }

        </Modal.Footer>

      </Modal>

    </div>
    );
  }
}
