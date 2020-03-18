import React,{Component} from 'react';

class CreateTask extends Component {
    
      constructor(props) {
            super(props);
            this.state = { 
                 //items: [], 
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

                    <input  type="text" 
                            placeholder="nombre de tarea ... " 
                            onChange = { this.handleChange } 
                            value={this.state.nameTaskText}
                    />

                    {' '}

                    <button>
                        Agregar
                    </button>

                </form>

            );
        }

  }

  export default CreateTask;