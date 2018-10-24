// ./react-redux-client/src/components/App.js
import React from 'react';
import { Navbar,Nav,NavItem,ProgressBar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';
import TodoForm from './TodoForm';

export default class App extends React.Component {
  
  constructor(props){
    super(props);
    
    this.toggleAddTodo = this.toggleAddTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.addImage = this.addImage.bind(this);    
    this.getValidationState = this.getValidationState.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
    
  }

  toggleAddTodo(e){
    e.preventDefault();
     this.props.mappedToggleAddTodo();
  }

  //VIM # VALIDATION
  getValidationState() {              
    const length = this.state.value.length;

    if (length == 17) return 'success';    
    
    else if (length > 17) {      
      alert("INVALID VIM NUMBER (ONLY 17 CHARACTERES)")
      return 'error'; 
    }

    else if (length > 10) return 'warning';  
    
    else if (length > 0) return 'error';     

    return 'error';  

  }

  handleChange(e) {        
    this.setState({ value: e.target.value });                  
  }

  addImage(stringData){        

    const form = document.getElementById('addTodoForm');   
    
    const formData = new FormData();    
    var emptyFile = true
    var emptyFile2 = true
    var emptyFile3 = true    

    if(form.uploadFile.files[0] != null) {             
      formData.append("file", form.uploadFile.files[0]);
      formData.append('filename', "file1");        
      emptyFile = false      
    }        

    if(form.uploadFile2.files[0] != null) {            
      formData.append("file2", form.uploadFile2.files[0]);
      formData.append('filename', "file2");    
      emptyFile2 = false      
    }

    if(form.uploadFile3.files[0] != null) {            
      formData.append("file3", form.uploadFile3.files[0]);
      formData.append('filename', "file3");    
      emptyFile3 = false      
    }

    if(!emptyFile || !emptyFile2 || !emptyFile3) {   
      
      //Customer VIM # 
      formData.append('vimNumber', form.vimNumber.value.trim().toUpperCase());              

      alert("Loading Files...")

      //Load files to server
      // fetch("/api/upload", {
      fetch("http://app.thelocksmithrescue.com:3001/api/upload", {      
        method:'POST',
        body: formData,
      }).then(response => {
    
        if(response.ok){
          response.json().then(data => {
            
            console.log(data);       
            alert("Files uploaded successfully")             
              
            stringData.append('path1', data.pathArray[0]);
            stringData.append('path2', data.pathArray[1]);
            stringData.append('path3', data.pathArray[2]);
  
            console.log(stringData)
            console.log("terminaron de cargar las imagenes")
  
            this.props.mappedAddTodo(stringData);              
            
          })
        }
        else{
          response.json().then(error => {
            console.log("Error loading files")
            alert("Error trying to upload files")
            this.props.mappedAddTodo(stringData);
          })
        }
      })                        
    
    } else {      
      this.props.mappedAddTodo(stringData);
    }
  }

  addTodo(e){
      e.preventDefault();      
      
      const form = document.getElementById('addTodoForm');                

      // Validate VIM # 
      if(form.vimNumber.value !== "" && form.vimNumber.value.trim().length == 17){
        
        const stringData = new FormData();
                
        stringData.append('vimNumber', form.vimNumber.value.trim().toUpperCase());
        stringData.append('customerName', form.customerName.value.toUpperCase());
        stringData.append('carMake', form.carMake.value.toUpperCase());
        stringData.append('carModel', form.carModel.value.toUpperCase());
        stringData.append('carYear', form.carYear.value);
        stringData.append('keyType', form.keyType.value.toUpperCase());
        stringData.append('transponderType', form.transponderType.value.toUpperCase());
        stringData.append('pinNumber', form.pinNumber.value.toUpperCase());
        stringData.append('keyCode', form.keyCode.value.toUpperCase());
        stringData.append('description', form.description.value);                                

        this.addImage(stringData)  

      form.reset();
      }
      else{
        alert("INVALID VIM NUMBER (ONLY 17 CHARACTERES)")
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
    <TodoForm addTodo={this.addTodo} handleChange={this.handleChange} getValidationState={this.getValidationState} />
  }

  { /* Each Smaller Components */}
   {this.props.children}
  </div>
 </div>
    );
  }
}
