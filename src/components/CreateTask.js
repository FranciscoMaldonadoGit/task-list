import React,{Component} from 'react';

class CreateTask extends Component {
    
      constructor(props) {
            super(props);
            this.state = { 
                 nameTaskText: ""
            };

            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
      } 

        handleChange(e) {
            this.setState({ nameTaskText : e.target.value });
        }

        handleSubmit(e) {
            //debugger; 
            e.preventDefault();

            if (!this.state.nameTaskText.length) {
                    return;
            }
            
            const newItem = {
                    nameTaskText: this.state.nameTaskText,
                    id: Date.now(),
                    pendingOrDone : false
            };

            this.setState({ nameTaskText : "" })
            this.props.onHandleTakeText(newItem); 
        }
        
        render() {
            return (
                <form  onSubmit={this.handleSubmit} >
                   
                    <div className="form-group">
                            <input  type="text" 
                                    placeholder="nombre de tarea" 
                                    onChange = { this.handleChange } 
                                    value={this.state.nameTaskText}
                                    className="form-control" 
                                    id = "inputPrincipal"
                            />
                    </div>
                    
                    <p>
                        <small>
                                Marca las casillas para indicar, que la tarea ha sido realizada
                        </small>
                    </p>

                    <div className="form-group">
                            <button className = "btn btn-primary" >
                                Nueva tarea
                            </button>
                    </div>

                </form>
            );
        }

  }

  export default CreateTask;