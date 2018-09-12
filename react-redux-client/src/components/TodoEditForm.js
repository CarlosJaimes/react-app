// ./react-redux-client/src/components/TodoEditForm.js
import React from 'react';
import { FormGroup,ControlLabel,FormControl,Button, Media} from 'react-bootstrap';

const TodoEditForm = (props) => {
  return (
    
    <form className="form form-horizontal" id="EditTodoForm" onSubmit={props.editTodo}>    
      
      <br></br>

      <div className="row">

        {/* CUSTOMER NAME */}
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Customer Name: </ControlLabel>
              <FormControl
                type="text" placeholder="Enter Customer Full Name"
                name="customerName" defaultValue={props.todoData.customerName}
              />              
          </FormGroup>
        </div>

        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>VIM #: </ControlLabel>
              <input type="hidden" value={props.todoData._id} name="id"/>
              <FormControl
                type="text" placeholder="Enter VIM #" maxlength="17"
                name="vimNumber" defaultValue={props.todoData.vimNumber}
              />        
          </FormGroup>
        </div>


        {/* MAKE # */}
        <div className="col-md-4">
            <FormGroup>
              <ControlLabel>Make: </ControlLabel>
                <FormControl
                  type="text" placeholder="Enter Car Make"
                  name="carMake" defaultValue={props.todoData.carMake}
                />              
            </FormGroup>
          </div>


          {/* MODEL # */}
          <div className="col-md-4">
            <FormGroup>
              <ControlLabel>Model: </ControlLabel>
                <FormControl
                  type="text" placeholder="Enter Car Model"
                  name="carModel" defaultValue={props.todoData.carModel}
                />              
            </FormGroup>
          </div>



          {/* YEAR # */}
          <div className="col-md-4">
            <FormGroup>
              <ControlLabel>Year: </ControlLabel>
                <FormControl
                  type="text" placeholder="Enter Car Year"
                  name="carYear" defaultValue={props.todoData.carYear}
                />              
            </FormGroup>
          </div>        


        {/* Key Type */}
        <div className="col-md-6">
          <FormGroup>
            <ControlLabel>Key: </ControlLabel>
              <FormControl
                type="text" placeholder="Enter Key Type"
                name="keyType" defaultValue={props.todoData.keyType}
              />              
          </FormGroup>
        </div>



        {/* Transponder Type */}
        <div className="col-md-6">
          <FormGroup>
            <ControlLabel>Transponder: </ControlLabel>
              <FormControl
                type="text" placeholder="Enter Transponder Type"
                name="transponderType" defaultValue={props.todoData.transponderType}
              />              
          </FormGroup>
        </div>

        {/* Transponder Type */}
        <div className="col-md-6">
          <FormGroup>
            <ControlLabel>PIN #: </ControlLabel>
              <FormControl
                type="text" placeholder="Enter PIN Number"
                name="pinNumber" defaultValue={props.todoData.pinNumber}
              />              
          </FormGroup>
        </div>

        {/* Transponder Type */}
        <div className="col-md-6">
          <FormGroup>
            <ControlLabel>Key Code: </ControlLabel>
              <FormControl
                type="text" placeholder="Enter Key Code"
                name="keyCode" defaultValue={props.todoData.keyCode}
              />              
          </FormGroup>
        </div>

        <hr/> 

        {/* File 1 */}
        <div className="col-md-4">        
          <ControlLabel>Image</ControlLabel>
          <input id="uploadFile" type="file" name="uploadFile" />        
        </div>

        {/* File 2 */}
        <div className="col-md-4">        
          <ControlLabel>Module Location</ControlLabel>
          <input id="uploadFile2" type="file" name="uploadFile2" />                  
        </div>

        {/* File 3 */}
        <div className="col-md-4">        
          <ControlLabel>BIM File</ControlLabel>
          <input id="uploadFile3" type="file" name="uploadFile3" />                  
        </div>



        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Description: </ControlLabel>
              <FormControl
                componentClass="textarea" placeholder="Enter description"
                name="description" defaultValue={props.todoData.description}
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

export default TodoEditForm;
