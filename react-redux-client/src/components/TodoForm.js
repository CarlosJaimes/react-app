// ./react-redux-client/src/components/TodoForm.js
import React from 'react';
import { FormGroup,ControlLabel,FormControl,Button,DropdownButton,MenuItem } from 'react-bootstrap';

const TodoForm = (props) => {
  return (
    <form className="form form-horizontal" id="addTodoForm" onSubmit={props.addTodo} enctype="multipart/form-data">
      
      <div className="row">

        <h3 className="centerAlign">Add New Item</h3>


    {/*  */}

        {/* CUSTOMER NAME */}
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Customer Name: </ControlLabel>
              <FormControl
                type="text" placeholder="Enter Customer Full Name"
                name="customerName"
              />              
          </FormGroup>
        </div>
        

        {/* VIM # */}
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>VIM #: </ControlLabel>
              <FormControl
                type="text" placeholder="Enter VIM #"
                name="vimNumber"
              />              
          </FormGroup>
        </div>                        
        
    
        {/* MAKE # */}
        <div className="col-md-4">
            <FormGroup>
              <ControlLabel>Car Make: </ControlLabel>
                <FormControl
                  type="text" placeholder="Enter Car Make"
                  name="carMake"
                />              
            </FormGroup>
          </div>


          {/* MODEL # */}
          <div className="col-md-4">
            <FormGroup>
              <ControlLabel>Car Model: </ControlLabel>
                <FormControl
                  type="text" placeholder="Enter Car Model"
                  name="carModel"
                />              
            </FormGroup>
          </div>



          {/* YEAR # */}
          <div className="col-md-4">
            <FormGroup>
              <ControlLabel>Car Year: </ControlLabel>
                <FormControl
                  type="text" placeholder="Enter Car Year"
                  name="carYear"
                />              
            </FormGroup>
          </div>        


        {/* Key Type */}
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Key Type: </ControlLabel>
              <FormControl
                type="text" placeholder="Enter Key Type"
                name="keyType"
              />              
          </FormGroup>
        </div>



        {/* Transponder Type */}
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Transponder Type : </ControlLabel>
              <FormControl
                type="text" placeholder="Enter Transponder Type"
                name="transponderType"
              />              
          </FormGroup>
        </div>


        {/* File 1 */}
        <div className="col-md-4">        
        <input id="uploadFile" type="file" name="uploadFile" />        
          <FormGroup>
            <ControlLabel>File Name 1: </ControlLabel>
              <FormControl
                type="text" placeholder="Enter File Name"
                name="fileName1" 
              />              
          </FormGroup>
        </div>

        {/* File 2 */}
        <div className="col-md-4">        
        <input id="uploadFile2" type="file" name="uploadFile2" />        
          <FormGroup>
            <ControlLabel>File Name 2: </ControlLabel>
              <FormControl
                type="text" placeholder="Enter File Name"
                name="fileName2" 
              />              
          </FormGroup>
        </div>

        {/* File 3 */}
        <div className="col-md-4">        
        <input id="uploadFile3" type="file" name="uploadFile3" />        
          <FormGroup>
            <ControlLabel>File Name 3: </ControlLabel>
              <FormControl
                type="text" placeholder="Enter File Name"
                name="fileName3" 
              />              
          </FormGroup>
        </div>


        {/* Description */}
        <div className="col-md-12">
            <FormGroup>
              <ControlLabel>Description: </ControlLabel>
                <FormControl
                  componentClass="textarea" placeholder="Enter description"
                  name="description"
                />
            </FormGroup>
        </div>
      </div> 

        <FormGroup>
          <Button type="submit" bsStyle="success" bsSize="large" block>Submit</Button>
        </FormGroup>          
        
    </form>
  );
}

export default TodoForm;
