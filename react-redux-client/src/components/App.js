// ./react-redux-client/src/components/App.js
import React from 'react';
import { Navbar,Nav,NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';
import TodoForm from './TodoForm';

export default class App extends React.Component {
  
  constructor(props){
    super(props);
    
    this.toggleAddTodo = this.toggleAddTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  toggleAddTodo(e){
    e.preventDefault();
     this.props.mappedToggleAddTodo();
  }


  addTodo(e){
      e.preventDefault();      
      
      const form = document.getElementById('addTodoForm');

      alert(form.fileImput.files[0] + " " + form.fileImput.value)

      // Validate VIM # 
      if(form.vimNumber.value !== "" && form.vimNumber.value.trim().length == 2){
        
        const data = new FormData();
                
        data.append('vimNumber', form.vimNumber.value.trim().toUpperCase());
        data.append('customerName', form.customerName.value.toUpperCase());
        data.append('carMake', form.carMake.value.toUpperCase());
        data.append('carModel', form.carModel.value.toUpperCase());
        data.append('carYear', form.carYear.value);
        data.append('keyType', form.keyType.value.toUpperCase());
        data.append('transponderType', form.transponderType.value.toUpperCase());
        data.append('description', form.description.value);        
        
        // const data = {
        //   todoText: form.todoText.value,
        //   todoDesc: form.todoDesc.value
        // }

        this.props.mappedAddTodo(data);

      form.reset();
      }
      else{
        alert("Error VIM #")
        return ;
      }
  }

  render(){
    const appState = this.props.mappedAppState;
    return(
      <div>
      <Navbar inverse  collapseOnSelect className="customNav">
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/#">TLR App</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to={{ pathname: '/', query: {  } }}>
           <NavItem eventKey={1}>Home</NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight>
      <LinkContainer to={{ pathname: '/', query: {  } }} onClick={this.toggleAddTodo}>
         <NavItem eventKey={1}>Add Item</NavItem>
      </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  <div className="container">

  {appState.showAddTodo &&
    <TodoForm addTodo={this.addTodo} />
  }

  { /* Each Smaller Components */}
   {this.props.children}
  </div>
 </div>
    );
  }
}
