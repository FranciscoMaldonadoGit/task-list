import React,{Component} from 'react';
import CheckBox from './CheckBox.js';
class LisTask extends Component {

    constructor(props) {
            super(props);
            this.handleSendTaskWithUpdate = this.handleSendTaskWithUpdate.bind(this);
    }
     
    handleSendTaskWithUpdate( idTask , pendingOrDone ){
            this.props.handleSendTaskWithUpdateF( idTask , pendingOrDone);
    }

    Iterando(){

        var items = this.props.items.sort(function (a,b) {
            
            if ( a.nameTaskText.toUpperCase() > b.nameTaskText.toUpperCase() ) {
              return 1;
            }
            if ( a.nameTaskText.toUpperCase() < b.nameTaskText.toUpperCase() ) {
              return -1;
            }
            return 0;
      });

        return  <div>   
                    <label>
                           <h6> { this.props.pendingOrDone == 1 ?  "TAREAS REALIZADAS" : "TAREAS PENDIENTES" } </h6> 
                            <ol style = { { listStyleType: "none" } }  >
                                { items.map(item => (
                                        <li key={item.id}>
                                            {/*item.nameTaskText*/}
                                            <CheckBox  
                                                nameTaskText = { item.nameTaskText }  
                                                id  = { item.id }
                                                onSendTaskWithUpdate = { this.handleSendTaskWithUpdate }    
                                                isSelected =   { item.pendingOrDone }
                                            />
                                        </li>
                                )) }
                            </ol>
                    </label>
                </div>
    }

    NoIterando (){
                return <div>
                    <label >
                       <h6> { this.props.pendingOrDone == 1 ?  "TAREAS REALIZADAS" : "TAREAS PENDIENTES" } </h6> 
                        <ol  style = { { listStyleType: "none" } }  >
                            <li key ="0"  style={{color: 'red'}}  >
                                No existen tareas
                            </li>
                        </ol> 
                    </label>
                </div>
    }

    render() { 
            return (
                    this.props.items.length  > 0 ? this.Iterando() : this.NoIterando() 
            );
      }
  }

  export default LisTask;