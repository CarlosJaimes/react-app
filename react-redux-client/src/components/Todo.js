// ./react-redux-client/src/components/Todo.js
import React from 'react';

export default class Todo extends React.Component {
  componentDidMount(){
    this.props.mappedfetchTodoById(this.props.params.id);
  }

  render(){
    
    const todoState = this.props.mappedTodoState;
    
    return(
      <div className="todoDetail">

        <h2>Item Detail</h2>

        {!todoState.todo && todoState.isFetching &&
          <div>
            <p>Loading item....</p>
          </div>
        }

        {todoState.todo && !todoState.isFetching &&
          <div>
            <h2>VIM #: {todoState.todo.vimNumber}</h2>
            <hr/>                        
            <h3>Customer Name</h3>
            <p>{todoState.todo.customerName}</p>

            <h3>Car Make</h3>
            <p>{todoState.todo.carMake}</p>

            <h3>Car Model</h3>
            <p>{todoState.todo.carModel}</p>

            <h3>Car Year</h3>
            <p>{todoState.todo.carYear}</p>

            <h3>Key</h3>
            <p>{todoState.todo.keyType}</p>

            <h3>Transponder</h3>            
            <p>{todoState.todo.transponderType}</p>
            
            <h3>PIN #</h3>            
            <p>{todoState.todo.pinNumber}</p>

            <h3>Key Code</h3>            
            <p>{todoState.todo.keyCode}</p>

            <h3>Description</h3>            
            <p>{todoState.todo.description}</p>

            <hr/>          
            <h2>Files</h2>

            {todoState.todo.path1 != 'undefined' &&
            <img src={"http://localhost:3001/public/" + todoState.todo.path1} height="200" width="200"/>
            // <img src={"/Users/Carlos/Repositorios/ReactApp/express-server/public/" + todoState.todo.path1} height="200" width="200"/>
            }


            {todoState.todo.path2 != 'undefined' &&
            <img src={"http://localhost:3001/public/" + todoState.todo.path2} height="200" width="200"/>
            // <img src={"/Users/Carlos/Repositorios/ReactApp/express-server/public/" + todoState.todo.path2} height="200" width="200"/>
            }

            {todoState.todo.path3 != 'undefined' &&
            <img src={"http://localhost:3001/public/" + todoState.todo.path3} height="200" width="200"/>
            // <img src={"/Users/Carlos/Repositorios/ReactApp/express-server/public/" + todoState.todo.path3} height="200" width="200"/>
            }

            <hr/>           

          </div>                    

        }
        
      </div>
    );
  }
}
