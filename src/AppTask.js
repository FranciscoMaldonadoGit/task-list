
import React,{Component} from 'react';
import  CreateTask from './components/CreateTask.js';
import  ListTask from './components/ListTask.js';
import "./components/css/AppTask.css"

class AppTask extends Component{

    constructor(props) {
          super(props);

          this.state = {
             items :  localStorage.getItem("SessionTareas") == null ? [] : JSON.parse( localStorage.getItem("SessionTareas")  )
          };

          this.handleTakeText = this.handleTakeText.bind(this);
          this.handleSendTaskWithUpdateF = this.handleSendTaskWithUpdateF.bind(this);
    }

    handleTakeText(newItem){
          this.setState(state => ({
                  items: state.items.concat(newItem)
          }));
    }

    handleSendTaskWithUpdateF( idTask , pendingOrDone ){

                  debugger;

                  var  itemModify = this.state.items.map( function (element) {
                        if(element.id == idTask ){
                              element.pendingOrDone  = pendingOrDone 
                        }
                        return element;
                  }); 

                  this.setState({ items: itemModify });
    }

    render(){        
        //debugger; 
        localStorage.setItem("SessionTareas", JSON.stringify(this.state.items) )
         
        return (
              
            <div className = "container"  style = {{ paddingTop : "30px"}} >                      
                        <CreateTask  onHandleTakeText = {this.handleTakeText} />

                        {/*tareas pendientes*/}
                        <ListTask  pendingOrDone = {0}  items = {  this.state.items.filter( x => x.pendingOrDone == false ) } handleSendTaskWithUpdateF  = { this.handleSendTaskWithUpdateF  } />
                        {/*tareas realizadas */}
                        <ListTask  pendingOrDone = {1} items = {  this.state.items.filter( x => x.pendingOrDone == true ) } handleSendTaskWithUpdateF  = { this.handleSendTaskWithUpdateF  } />
            </div>
        );
        
    }
    
}
export default AppTask;