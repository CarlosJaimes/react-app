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
    this.addImage = this.addImage.bind(this);    
  }

  toggleAddTodo(e){
    e.preventDefault();
     this.props.mappedToggleAddTodo();
  }


  addImage(stringData){        

    const form = document.getElementById('addTodoForm');   
    
    const formData = new FormData();    
    var emptyFile = true
    var emptyFile2 = true
    var emptyFile3 = true    

    if(form.uploadFile.files[0] != null) {             
      formData.append("file", form.uploadFile.files[0]);
      formData.append('filename', form.fileName1.value);    
      emptyFile = false      
    }        

    if(form.uploadFile2.files[0] != null) {            
      formData.append("file2", form.uploadFile2.files[0]);
      formData.append('filename', form.fileName2.value);    
      emptyFile2 = false      
    }

    if(form.uploadFile3.files[0] != null) {            
      formData.append("file3", form.uploadFile3.files[0]);
      formData.append('filename', form.fileName3.value);    
      emptyFile3 = false      
    }

    if(!emptyFile || !emptyFile2 || !emptyFile3) {                
      this.props.mappedAddImage(formData,stringData)               
    
    } else {      
      this.props.mappedAddTodo(stringData);
    }
    

  }

  addTodo(e){
      e.preventDefault();      
      
      const form = document.getElementById('addTodoForm');                

      // Validate VIM # 
      if(form.vimNumber.value !== "" && form.vimNumber.value.trim().length >= 2){
        
        const stringData = new FormData();
                
        stringData.append('vimNumber', form.vimNumber.value.trim().toUpperCase());
        stringData.append('customerName', form.customerName.value.toUpperCase());
        stringData.append('carMake', form.carMake.value.toUpperCase());
        stringData.append('carModel', form.carModel.value.toUpperCase());
        stringData.append('carYear', form.carYear.value);
        stringData.append('keyType', form.keyType.value.toUpperCase());
        stringData.append('transponderType', form.transponderType.value.toUpperCase());
        stringData.append('description', form.description.value);
        stringData.append('filename1', form.fileName1.value);
        stringData.append('filename2', form.fileName2.value);
        stringData.append('filename3', form.fileName3.value);                        

        this.addImage(stringData)  

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
    <TodoForm addTodo={this.addTodo} addImage={this.addImage.bind(this)}/>
  }

  { /* Each Smaller Components */}
   {this.props.children}
  </div>
 </div>
    );
  }
}
