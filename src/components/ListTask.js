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

        return  <ol style = { { listStyleType: "none" } }  >
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
    }

    NoIterando (){
        return <ol  style = { { listStyleType: "none" } }  >
                    <li key ="0"  >
                        No existen tareas
                    </li>
                </ol> 
    }

    render() { 
            return (
                    this.props.items.length  > 0 ? this.Iterando() : this.NoIterando() 
            );
      }
  }

  export default LisTask;